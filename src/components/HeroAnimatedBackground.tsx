"use client";

import React, { useEffect, useRef } from "react";

const VERTEX_SHADER = `
attribute vec2 a_pos;
varying vec2 v_uv;
void main() {
  v_uv = vec2(a_pos.x * 0.5 + 0.5, 0.5 - a_pos.y * 0.5);
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`;

// Real-time 3D Spherical Earth Slow-Motion Rotation + Sunrise Corona Shader
const FRAGMENT_SHADER = `
precision highp float;

varying vec2 v_uv;
uniform sampler2D u_tex;
uniform vec2 u_res;
uniform float u_time;

const float IMG_ASPECT = 2048.0 / 1152.0;

// Rodrigues 3D axis-angle rotation on unit sphere
vec3 rotateAxis(vec3 v, vec3 axis, float ang) {
  float c = cos(ang);
  float s = sin(ang);
  return v * c + cross(axis, v) * s + axis * dot(axis, v) * (1.0 - c);
}

// Compute object-cover UV in the 2048x1152 source image for any screen UV
vec2 screenToImageUV(vec2 suv) {
  float screenAspect = u_res.x / max(1.0, u_res.y);
  vec2 uv = suv;
  if (screenAspect > IMG_ASPECT) {
    float scale = IMG_ASPECT / screenAspect;
    // Anchor slightly toward bottom-center so both satellite sky & Earth stay framed
    uv.y = (suv.y - 0.46) * scale + 0.46;
  } else {
    float scale = screenAspect / IMG_ASPECT;
    float anchorX = screenAspect < 0.85 ? 0.485 : 0.52;
    uv.x = (suv.x - anchorX) * scale + anchorX;
  }
  return clamp(uv, 0.001, 0.999);
}

// Sample the 3D-rotated Earth at a given angular offset 'theta'
vec3 sampleRotatedEarth(vec2 imgUV, float theta) {
  // Work in aspect-corrected height units: P = (u * A, v)
  vec2 P = vec2(imgUV.x * IMG_ASPECT, imgUV.y);

  // Exact fitted Earth sphere center & radius in height units
  vec2 C = vec2(0.195 * IMG_ASPECT, 1.943);
  float R = 1.591;

  vec2 d = P - C;
  float dist = length(d);
  float rn = dist / R;

  if (rn >= 0.992) {
    return texture2D(u_tex, imgUV).rgb;
  }

  // Smoothly taper rotation near the glowing blue atmospheric horizon limb so horizon never tears
  float innerWeight = smoothstep(0.992, 0.885, rn);
  float effTheta = theta * innerWeight;

  // Reconstruct 3D point on the Earth globe
  vec2 sn = d / R;
  float sz = sqrt(max(0.0004, 1.0 - dot(sn, sn)));
  vec3 N = normalize(vec3(sn.x, sn.y, sz));

  // Tilted Earth polar spin axis (West-to-East slow-motion planetary rotation)
  vec3 spinAxis = normalize(vec3(-0.28, -0.82, 0.50));
  vec3 Nsrc = rotateAxis(N, spinAxis, -effTheta);

  vec2 Psrc = C + Nsrc.xy * R;
  vec2 srcUV = clamp(vec2(Psrc.x / IMG_ASPECT, Psrc.y), 0.002, 0.998);

  return texture2D(u_tex, srcUV).rgb;
}

void main() {
  vec2 imgUV = screenToImageUV(v_uv);

  // Dual-stream continuous forward slow-motion rotation (28s cycle -> continuous 1-way rotation forever!)
  float cycle = 28.0;
  float pA = fract(u_time / cycle);
  float pB = fract(u_time / cycle + 0.5);

  // Raised-cosine crossfade weights (wA + wB == 1.0 everywhere, 0 at wraparound)
  float wA = 0.5 - 0.5 * cos(6.2831853 * pA);
  float wB = 1.0 - wA;

  // Slow-motion spherical arc (~12.5 degrees per cycle, strictly forward!)
  float span = 0.215;
  float thetaA = (pA - 0.5) * span;
  float thetaB = (pB - 0.5) * span;

  vec3 colA = sampleRotatedEarth(imgUV, thetaA);
  vec3 colB = sampleRotatedEarth(imgUV, thetaB);
  vec3 color = colA * wA + colB * wB;

  // Subtle breathing golden-cyan sunrise radiance at exact horizon sun (0.546, 0.476)
  vec2 sunDelta = vec2((imgUV.x - 0.546) * IMG_ASPECT, imgUV.y - 0.476);
  float sunDist = length(sunDelta);
  float sunPulse = 0.85 + 0.15 * sin(u_time * 1.25);
  float warmBloom = exp(-sunDist * 7.5) * 0.22 * sunPulse;
  color += vec3(1.0, 0.88, 0.55) * warmBloom;

  // Subtle shimmering cyan atmospheric rim glow along r ~ 0.985
  vec2 P = vec2(imgUV.x * IMG_ASPECT, imgUV.y);
  vec2 C = vec2(0.195 * IMG_ASPECT, 1.943);
  float rn = length(P - C) / 1.591;
  float rim = exp(-pow((rn - 0.992) * 58.0, 2.0));
  float rimWave = 0.5 + 0.5 * sin(u_time * 1.4 + imgUV.x * 7.0);
  color += vec3(0.42, 0.82, 1.0) * rim * 0.14 * rimWave;

  gl_FragColor = vec4(color, 1.0);
}
`;

interface TwinkleStar {
  u: number;
  v: number;
  r: number;
  speed: number;
  phase: number;
  gold: boolean;
}

export default function HeroAnimatedBackground() {
  const glCanvasRef = useRef<HTMLCanvasElement>(null);
  const overlayCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const glCanvas = glCanvasRef.current;
    const overlayCanvas = overlayCanvasRef.current;
    if (!glCanvas || !overlayCanvas) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const gl =
      glCanvas.getContext("webgl", { alpha: false, antialias: true }) ||
      (glCanvas.getContext("experimental-webgl") as WebGLRenderingContext | null);
    const ctx2d = overlayCanvas.getContext("2d");

    let rafId = 0;
    let width = 1;
    let height = 1;
    let dpr = 1;

    // Load clean Earth+Space image (for WebGL sphere shader) & surgical Satellite cutout PNG (for 2D orbital + scan beam layer)
    const earthImg = new window.Image();
    earthImg.crossOrigin = "anonymous";
    earthImg.src = "/images/hero-earth-clean.jpg";

    const satImg = new window.Image();
    satImg.crossOrigin = "anonymous";
    satImg.src = "/images/hero-satellite-layer.png";

    let earthReady = false;
    let satReady = false;
    let glProgram: WebGLProgram | null = null;
    let uResLoc: WebGLUniformLocation | null = null;
    let uTimeLoc: WebGLUniformLocation | null = null;
    let glTexture: WebGLTexture | null = null;

    if (gl) {
      const compile = (type: number, src: string) => {
        const sh = gl.createShader(type);
        if (!sh) return null;
        gl.shaderSource(sh, src);
        gl.compileShader(sh);
        if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
          gl.deleteShader(sh);
          return null;
        }
        return sh;
      };

      const vs = compile(gl.VERTEX_SHADER, VERTEX_SHADER);
      const fs = compile(gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
      if (vs && fs) {
        const prog = gl.createProgram();
        if (prog) {
          gl.attachShader(prog, vs);
          gl.attachShader(prog, fs);
          gl.linkProgram(prog);
          if (gl.getProgramParameter(prog, gl.LINK_STATUS)) {
            glProgram = prog;
            gl.useProgram(prog);

            const buf = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, buf);
            gl.bufferData(
              gl.ARRAY_BUFFER,
              new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
              gl.STATIC_DRAW
            );
            const posLoc = gl.getAttribLocation(prog, "a_pos");
            gl.enableVertexAttribArray(posLoc);
            gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

            uResLoc = gl.getUniformLocation(prog, "u_res");
            uTimeLoc = gl.getUniformLocation(prog, "u_time");
          }
        }
      }
    }

    earthImg.onload = () => {
      earthReady = true;
      if (gl && glProgram) {
        glTexture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, glTexture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texImage2D(
          gl.TEXTURE_2D,
          0,
          gl.RGBA,
          gl.RGBA,
          gl.UNSIGNED_BYTE,
          earthImg
        );
      }
    };

    satImg.onload = () => {
      satReady = true;
    };

    const twinkleStars: TwinkleStar[] = Array.from({ length: 64 }, (_, i) => ({
      u: Math.random(),
      v: Math.random() * 0.52,
      r: 0.6 + Math.random() * 1.35,
      speed: 1.0 + Math.random() * 2.2,
      phase: Math.random() * Math.PI * 2,
      gold: i % 9 === 0,
    }));

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(1, overlayCanvas.clientWidth);
      height = Math.max(1, overlayCanvas.clientHeight);

      glCanvas.width = Math.floor(width * dpr);
      glCanvas.height = Math.floor(height * dpr);
      if (gl) {
        gl.viewport(0, 0, glCanvas.width, glCanvas.height);
      }

      overlayCanvas.width = Math.floor(width * dpr);
      overlayCanvas.height = Math.floor(height * dpr);
      if (ctx2d) {
        ctx2d.setTransform(dpr, 0, 0, dpr, 0, 0);
      }
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });

    // Convert normalized image UV (0..1, 0..1) in 2048x1152 space to exact screen pixel (matching shader's screenToImageUV!)
    const imageUVToScreen = (iu: number, iv: number) => {
      const imgAspect = 2048 / 1152;
      const screenAspect = width / height;
      let su = iu;
      let sv = iv;
      if (screenAspect > imgAspect) {
        const scale = imgAspect / screenAspect;
        sv = (iv - 0.46) / scale + 0.46;
      } else {
        const scale = screenAspect / imgAspect;
        const anchorX = screenAspect < 0.85 ? 0.485 : 0.52;
        su = (iu - anchorX) / scale + anchorX;
      }
      return {
        x: su * width,
        y: sv * height,
        pxScale: Math.max(width / 2048, height / 1152),
      };
    };

    const start = performance.now();

    const render = (now: number) => {
      const t = reducedMotion ? 0 : (now - start) * 0.001;

      // 1. Render 3D Slow-Motion Rotating Earth in WebGL
      if (gl && glProgram && earthReady && glTexture) {
        gl.useProgram(glProgram);
        gl.uniform2f(uResLoc, glCanvas.width, glCanvas.height);
        gl.uniform1f(uTimeLoc, t);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
      }

      // 2. Render Twinkling Stars, Satellite Scan Beam Falling onto Earth, & Floating Orbital Satellite
      if (ctx2d) {
        ctx2d.clearRect(0, 0, width, height);

        // Fallback if WebGL unavailable: draw clean Earth image directly
        if ((!gl || !glProgram) && earthReady) {
          const topL = imageUVToScreen(0, 0);
          const botR = imageUVToScreen(1, 1);
          ctx2d.drawImage(
            earthImg,
            topL.x,
            topL.y,
            botR.x - topL.x,
            botR.y - topL.y
          );
        }

        // Subtle twinkling cosmic stars in the upper nebula sky
        for (const st of twinkleStars) {
          const pos = imageUVToScreen(st.u, st.v);
          // Skip stars that fall inside Earth's limb
          if (st.v > 0.34 && st.u < 0.65) continue;
          const alpha = 0.25 + 0.55 * (0.5 + 0.5 * Math.sin(t * st.speed + st.phase));
          ctx2d.beginPath();
          ctx2d.arc(pos.x, pos.y, st.r, 0, Math.PI * 2);
          ctx2d.fillStyle = st.gold
            ? `rgba(216, 198, 75, ${alpha})`
            : `rgba(215, 238, 255, ${alpha})`;
          ctx2d.fill();
        }

        const isMobileLayout = width < 1024;

        // Orbital trajectory arc curving above Earth's horizon
        const o1 = isMobileLayout
          ? { x: width * 0.04, y: width < 640 ? 118 : 128 }
          : imageUVToScreen(0.42, 0.02);
        const oc = isMobileLayout
          ? { x: width * 0.56, y: width < 640 ? 166 : 182 }
          : imageUVToScreen(0.76, 0.19);
        const o2 = isMobileLayout
          ? { x: width * 0.97, y: width < 640 ? 248 : 276 }
          : imageUVToScreen(0.99, 0.48);

        ctx2d.save();
        ctx2d.beginPath();
        ctx2d.moveTo(o1.x, o1.y);
        ctx2d.quadraticCurveTo(oc.x, oc.y, o2.x, o2.y);
        ctx2d.strokeStyle = isMobileLayout
          ? "rgba(169, 220, 235, 0.34)"
          : "rgba(169, 220, 235, 0.22)";
        ctx2d.lineWidth = 1.2;
        ctx2d.setLineDash([6, 10]);
        ctx2d.lineDashOffset = -t * 18;
        ctx2d.stroke();
        ctx2d.restore();

        // Satellite slow-motion orbital glide parameters
        const satOrbitX = Math.sin(t * 0.36) * (isMobileLayout ? 9 : 26);
        const satOrbitY = Math.cos(t * 0.28) * (isMobileLayout ? 6 : 14);
        const satRoll = Math.sin(t * 0.32) * 0.038; // ~2.2 deg gentle orbital attitude roll
        const satBreath = 1.0 + 0.032 * Math.sin(t * 0.25);

        // Satellite's center & optical/SAR barrel tip in 2048x1152 source space: (0.792, 0.232) and (0.816, 0.332)
        const desktopSatPivot = imageUVToScreen(0.792, 0.232);
        const mobileTargetWingSpan =
          width < 640
            ? Math.min(width * 0.68, 290)
            : Math.min(width * 0.48, 360);
        // Satellite wing-to-wing width in 2048px source space is ~700px centered at u=0.792
        const renderScale = isMobileLayout
          ? (mobileTargetWingSpan / 700) * satBreath
          : desktopSatPivot.pxScale * satBreath;

        const satCenterX = isMobileLayout
          ? width * (width < 640 ? 0.55 : 0.58) + satOrbitX
          : desktopSatPivot.x + satOrbitX;
        const satCenterY = isMobileLayout
          ? (width < 640 ? 176 : 196) + satOrbitY
          : desktopSatPivot.y + satOrbitY;

        // Compute rotated & translated nozzle screen position so scan beam stays 100% locked to the moving satellite!
        const srcNozzleDX = (0.816 - 0.792) * 2048;
        const srcNozzleDY = (0.332 - 0.232) * 1152;
        const ndx = srcNozzleDX * renderScale;
        const ndy = srcNozzleDY * renderScale;
        const cosR = Math.cos(satRoll);
        const sinR = Math.sin(satRoll);
        const nozzleX = satCenterX + ndx * cosR - ndy * sinR;
        const nozzleY = satCenterY + ndx * sinR + ndy * cosR;

        // Target scan footprint sweeping slowly across India & Indian Ocean on the rotating Earth!
        const sweepU = 0.495 + 0.065 * Math.sin(t * 0.42);
        const sweepV = 0.725 + 0.045 * Math.cos(t * 0.34);
        const desktopTarget = imageUVToScreen(sweepU, sweepV);
        const target = isMobileLayout
          ? {
              x: width * (0.48 + 0.09 * Math.sin(t * 0.42)),
              y: Math.min(height * 0.54, width < 640 ? 470 : 530),
            }
          : desktopTarget;
        const sFactor = isMobileLayout
          ? Math.max(0.52, renderScale * 1.35)
          : desktopSatPivot.pxScale;

        // Volumetric Multi-Spectral Satellite Scan Cone falling from Satellite onto Earth
        const coneAngle =
          Math.atan2(target.y - nozzleY, target.x - nozzleX) + Math.PI / 2;
        const footprintRadius = 78 * sFactor;
        const leftFootX = target.x + Math.cos(coneAngle) * footprintRadius;
        const leftFootY = target.y + Math.sin(coneAngle) * footprintRadius * 0.52;
        const rightFootX = target.x - Math.cos(coneAngle) * footprintRadius;
        const rightFootY = target.y - Math.sin(coneAngle) * footprintRadius * 0.52;

        const coneGrad = ctx2d.createLinearGradient(
          nozzleX,
          nozzleY,
          target.x,
          target.y
        );
        coneGrad.addColorStop(0, "rgba(169, 220, 235, 0.55)");
        coneGrad.addColorStop(0.45, "rgba(28, 110, 156, 0.22)");
        coneGrad.addColorStop(0.85, "rgba(216, 198, 75, 0.14)");
        coneGrad.addColorStop(1, "rgba(216, 198, 75, 0.02)");

        ctx2d.beginPath();
        ctx2d.moveTo(nozzleX, nozzleY);
        ctx2d.lineTo(leftFootX, leftFootY);
        ctx2d.lineTo(rightFootX, rightFootY);
        ctx2d.closePath();
        ctx2d.fillStyle = coneGrad;
        ctx2d.fill();

        // Center telemetry beam + descending golden/cyan data pulses from satellite to Earth
        ctx2d.save();
        ctx2d.beginPath();
        ctx2d.moveTo(nozzleX, nozzleY);
        ctx2d.lineTo(target.x, target.y);
        ctx2d.strokeStyle = "rgba(169, 220, 235, 0.42)";
        ctx2d.lineWidth = 1.3;
        ctx2d.setLineDash([5, 8]);
        ctx2d.lineDashOffset = -t * 42;
        ctx2d.stroke();
        ctx2d.restore();

        for (let p = 0; p < 3; p++) {
          const prog = (t * 0.44 + p / 3) % 1;
          const px = nozzleX + (target.x - nozzleX) * prog;
          const py = nozzleY + (target.y - nozzleY) * prog;
          ctx2d.beginPath();
          ctx2d.arc(px, py, 3.0 * sFactor, 0, Math.PI * 2);
          ctx2d.fillStyle =
            p % 2 === 0
              ? `rgba(216, 198, 75, ${0.95 - prog * 0.55})`
              : `rgba(169, 220, 235, ${0.95 - prog * 0.55})`;
          ctx2d.fill();
        }

        // Expanding concentric radar scan ellipses rippling on Earth's curved surface
        for (let ring = 0; ring < 3; ring++) {
          const rp = (t * 0.36 + ring / 3) % 1;
          const rx = (18 + rp * 82) * sFactor;
          const ry = rx * 0.48;
          const alpha = (1 - rp) * 0.62;

          ctx2d.save();
          ctx2d.translate(target.x, target.y);
          ctx2d.rotate(-0.22);
          ctx2d.beginPath();
          ctx2d.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
          ctx2d.strokeStyle =
            ring === 0
              ? `rgba(216, 198, 75, ${alpha})`
              : `rgba(169, 220, 235, ${alpha})`;
          ctx2d.lineWidth = 1.6;
          ctx2d.stroke();
          ctx2d.restore();
        }

        // Draw the Crisp Isolated Satellite Layer floating & orbiting above Earth!
        if (satReady) {
          const natW = satImg.naturalWidth || 2048;
          const natH = satImg.naturalHeight || 1152;
          const srcPivotX = 0.792 * natW;
          const srcPivotY = 0.232 * natH;
          const scaleRatioX = 2048 / natW;
          const scaleRatioY = 1152 / natH;

          ctx2d.save();
          ctx2d.translate(satCenterX, satCenterY);
          ctx2d.rotate(satRoll);
          ctx2d.scale(renderScale * scaleRatioX, renderScale * scaleRatioY);

          ctx2d.shadowColor = "rgba(4, 15, 36, 0.7)";
          ctx2d.shadowBlur = isMobileLayout ? 14 : 18;
          ctx2d.drawImage(satImg, -srcPivotX, -srcPivotY, natW, natH);
          ctx2d.restore();

          // Subtle sensor lens glow right at the satellite barrel aperture
          const lensGlow = ctx2d.createRadialGradient(
            nozzleX,
            nozzleY,
            0,
            nozzleX,
            nozzleY,
            16 * sFactor
          );
          lensGlow.addColorStop(0, "rgba(255, 255, 255, 0.9)");
          lensGlow.addColorStop(0.35, "rgba(169, 220, 235, 0.55)");
          lensGlow.addColorStop(1, "rgba(169, 220, 235, 0)");
          ctx2d.fillStyle = lensGlow;
          ctx2d.beginPath();
          ctx2d.arc(nozzleX, nozzleY, 16 * sFactor, 0, Math.PI * 2);
          ctx2d.fill();
        }
      }

      if (!reducedMotion) {
        rafId = window.requestAnimationFrame(render);
      }
    };

    rafId = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#041126] select-none pointer-events-none">
      {/* Layer 1: 60fps WebGL 3D Slow-Motion Rotating Earth Globe + Sunrise Corona */}
      <canvas
        ref={glCanvasRef}
        className="absolute inset-0 w-full h-full block"
        aria-hidden="true"
      />

      {/* Layer 2: Floating Orbital Satellite + Earth-Targeted Multi-Spectral Scan Beam */}
      <canvas
        ref={overlayCanvasRef}
        className="absolute inset-0 w-full h-full block"
        aria-hidden="true"
      />

      {/* Desktop Readability Scrim: Keeps Right Satellite & Rotating Earth Vividly Visible */}
      <div
        className="hidden lg:block absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 56% 62% at 24% 46%, rgba(6, 22, 48, 0.56) 0%, rgba(11, 40, 82, 0.24) 62%, rgba(11, 40, 82, 0.0) 100%)",
        }}
      />

      {/* Mobile/Tablet Readability Scrim: Leaves Top Orbital Satellite Window 100% Clear & Bright */}
      <div
        className="lg:hidden absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(4, 17, 38, 0.25) 0px, rgba(4, 17, 38, 0.0) 95px, rgba(4, 17, 38, 0.04) 255px, rgba(6, 22, 48, 0.64) 340px, rgba(7, 27, 56, 0.58) 78%, rgba(11, 40, 82, 0.92) 100%)",
        }}
      />

      {/* Smooth Top Navbar & Bottom Section Transition */}
      <div className="hidden lg:block absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#071B38]/75 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0B2852] via-[#0B2852]/45 to-transparent" />
    </div>
  );
}
