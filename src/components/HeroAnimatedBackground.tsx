"use client";

import React, { useEffect, useRef, useState } from "react";

// Tiny 40x23 inline base64 backdrop of the new Hero Satellite+Earth scene so frame 0 (0.0ms) is never blank
const INSTANT_BLUR_DATA_URL =
  "data:image/webp;base64,UklGRtoBAABXRUJQVlA4IM4BAACQCACdASooABcAPp0+nEkloyMhMBVaqLATiWYAsR8ED4s1qJzTQSr7yH6gBFXO0KPiv+gD5VtxYl15CXi5ERNVxsTWfo3/t6OOtLADAAD+/Q17bIpaAWk/RpsJi6OMu3tQb1/V/oNMcVqS5qgjbOcmi+oeLb/DGwLYEXeMJy7wnG+Vu7zQp5ZwqfDju9qLtoxnPmGGfdlGesBoezE+U+BXbr/ZR8ELsQdKUCfPZRn6WB/N3TMlm81KlDMvPO1KquAN1xyCGMza64Gya+74oR6YsF4+vbcTeQWRfRPpAcwK8ywm0Yk7vZQ6lYix2joA+GBoFKPQbaf7+34JLq6Xnl4aYLwpy979ji/MVKrO9m/A5KeA+U4fhUTqVV+CQuYa586griK5HV8n52vNENuZRXAbvPqYDlpcmXNWByCu1uEnjblT2+NwpYo/KfQ9vBJjEDcsrfdO4n8cWJ+0gC5J7YsxME5zSEsUOfuWRSB/sa5if7Dvx3eNKj9NmVE3YAo0sQ0ySuActVVrBGmc1IrjXTLwzHVoSi0sJ1RN8iYTdCkStBBC9DpfEiiCUD8mN+FiMih8XuZz2Jw0o/c/4NbUp3mKEhu7iiM/4Xf+TTAAAAA=";

const VERTEX_SHADER = `
attribute vec2 a_pos;
varying vec2 v_uv;
void main() {
  v_uv = vec2(a_pos.x * 0.5 + 0.5, 0.5 - a_pos.y * 0.5);
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`;

// Real-time 60fps 3D Spherical Earth Slow-Motion Rotation + Horizon Sunrise Corona Shader (calibrated to hero-v2-earth.webp)
const FRAGMENT_SHADER = `
precision highp float;

varying vec2 v_uv;
uniform sampler2D u_tex;
uniform vec2 u_res;
uniform float u_time;

const float IMG_ASPECT = 1920.0 / 1080.0;

// Rodrigues 3D axis-angle rotation on unit sphere
vec3 rotateAxis(vec3 v, vec3 axis, float ang) {
  float c = cos(ang);
  float s = sin(ang);
  return v * c + cross(axis, v) * s + axis * dot(axis, v) * (1.0 - c);
}

// Compute object-cover UV in the 1920x1080 source image for any screen UV
vec2 screenToImageUV(vec2 suv) {
  float screenAspect = u_res.x / max(1.0, u_res.y);
  vec2 uv = suv;
  if (screenAspect > IMG_ASPECT) {
    float scale = IMG_ASPECT / screenAspect;
    uv.y = (suv.y - 0.46) * scale + 0.46;
  } else {
    float scale = screenAspect / IMG_ASPECT;
    float anchorX = screenAspect < 0.85 ? 0.35 : 0.50;
    uv.x = (suv.x - anchorX) * scale + anchorX;
  }
  return clamp(uv, 0.001, 0.999);
}

// Sample the 3D-rotated Earth at angular offset 'theta'
vec3 sampleRotatedEarth(vec2 imgUV, float theta) {
  vec2 P = vec2(imgUV.x * IMG_ASPECT, imgUV.y);

  // Exact Kasa-fitted Earth sphere center & radius in height units for hero-v2
  vec2 C = vec2(0.0053, 2.9946);
  float R = 2.6440;

  vec2 d = P - C;
  float dist = length(d);
  float rn = dist / R;

  if (rn >= 0.995) {
    return texture2D(u_tex, imgUV).rgb;
  }

  // Smoothly taper rotation near the glowing blue atmospheric limb AND near left sunrise so horizon stays 100% seamless
  float innerWeight = smoothstep(0.995, 0.915, rn);
  vec2 sunDelta = vec2((imgUV.x - 0.090) * IMG_ASPECT, imgUV.y - 0.385);
  float sunGuard = smoothstep(0.14, 0.34, length(sunDelta));
  float effTheta = theta * innerWeight * sunGuard;

  vec2 sn = d / R;
  float sz = sqrt(max(0.0004, 1.0 - dot(sn, sn)));
  vec3 N = normalize(vec3(sn.x, sn.y, sz));

  // Tilted Earth polar spin axis (West-to-East slow-motion planetary rotation)
  vec3 spinAxis = normalize(vec3(-0.32, -0.80, 0.51));
  vec3 Nsrc = rotateAxis(N, spinAxis, -effTheta);

  vec2 Psrc = C + Nsrc.xy * R;
  vec2 srcUV = clamp(vec2(Psrc.x / IMG_ASPECT, Psrc.y), 0.002, 0.998);

  return texture2D(u_tex, srcUV).rgb;
}

void main() {
  vec2 imgUV = screenToImageUV(v_uv);

  // Dual-stream continuous forward slow-motion rotation (26s cycle; starts cleanly from thetaA = 0 at u_time = 0!)
  float cycle = 26.0;
  // Offset by +0.5 so at u_time = 0, Stream A has pA = 0.5 -> wA = 1.0, thetaA = 0.0 (exact match to SSR poster!)
  float pA = fract(u_time / cycle + 0.5);
  float pB = fract(u_time / cycle);

  float wA = 0.5 - 0.5 * cos(6.2831853 * pA);
  float wB = 1.0 - wA;

  float span = 0.165;
  float thetaA = (pA - 0.5) * span;
  float thetaB = (pB - 0.5) * span;

  vec3 colA = sampleRotatedEarth(imgUV, thetaA);
  vec3 colB = sampleRotatedEarth(imgUV, thetaB);
  vec3 color = colA * wA + colB * wB;

  // Breathing golden-cyan sunrise radiance at exact horizon sun (0.090, 0.385)
  vec2 sunDelta = vec2((imgUV.x - 0.090) * IMG_ASPECT, imgUV.y - 0.385);
  float sunDist = length(sunDelta);
  float sunPulse = 0.5 + 0.5 * sin(u_time * 1.35);
  float warmBloom = exp(-sunDist * 7.2) * 0.16 * sunPulse;
  color += vec3(1.0, 0.88, 0.55) * warmBloom;

  // Shimmering cyan atmospheric rim glow along the curved Earth limb (rn ~ 0.996)
  vec2 P = vec2(imgUV.x * IMG_ASPECT, imgUV.y);
  vec2 C = vec2(0.0053, 2.9946);
  float rn = length(P - C) / 2.6440;
  float rim = exp(-pow((rn - 0.996) * 68.0, 2.0));
  float rimWave = 0.5 + 0.5 * sin(u_time * 1.5 + imgUV.x * 7.5);
  color += vec3(0.42, 0.84, 1.0) * rim * 0.13 * rimWave;

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
  const [liveReady, setLiveReady] = useState(false);

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
    let markedReady = false;

    const earthImg = new window.Image();
    earthImg.decoding = "async";
    earthImg.src = "/images/hero-v2-earth.webp";

    const satImg = new window.Image();
    satImg.decoding = "async";
    satImg.src = "/images/hero-v2-satellite.webp";

    let earthReady = false;
    let satReady = false;
    let glProgram: WebGLProgram | null = null;
    let uResLoc: WebGLUniformLocation | null = null;
    let uTimeLoc: WebGLUniformLocation | null = null;
    let glTexture: WebGLTexture | null = null;
    let animStartTime = 0;

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

    const checkBothReady = () => {
      if (earthReady && satReady && !markedReady) {
        markedReady = true;
        animStartTime = performance.now();
        setLiveReady(true);
      }
    };

    const onEarthLoaded = () => {
      if (earthReady) return;
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
      checkBothReady();
    };

    const onSatLoaded = () => {
      if (satReady) return;
      satReady = true;
      checkBothReady();
    };

    earthImg.onload = onEarthLoaded;
    satImg.onload = onSatLoaded;
    if (earthImg.complete && earthImg.naturalWidth > 0) onEarthLoaded();
    if (satImg.complete && satImg.naturalWidth > 0) onSatLoaded();

    const twinkleStars: TwinkleStar[] = Array.from({ length: 56 }, (_, i) => ({
      u: 0.15 + Math.random() * 0.84,
      v: Math.random() * 0.48,
      r: 0.6 + Math.random() * 1.3,
      speed: 1.1 + Math.random() * 2.1,
      phase: Math.random() * Math.PI * 2,
      gold: i % 8 === 0,
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

    // Convert normalized image UV (0..1, 0..1) in 1920x1080 space to exact screen pixel (matching shader's screenToImageUV!)
    const imageUVToScreen = (iu: number, iv: number) => {
      const imgAspect = 1920 / 1080;
      const screenAspect = width / height;
      let su = iu;
      let sv = iv;
      if (screenAspect > imgAspect) {
        const scale = imgAspect / screenAspect;
        sv = (iv - 0.46) / scale + 0.46;
      } else {
        const scale = screenAspect / imgAspect;
        const anchorX = screenAspect < 0.85 ? 0.35 : 0.5;
        su = (iu - anchorX) / scale + anchorX;
      }
      return {
        x: su * width,
        y: sv * height,
        pxScale: Math.max(width / 1920, height / 1080),
      };
    };

    const render = (now: number) => {
      if (!earthReady || !satReady) {
        rafId = window.requestAnimationFrame(render);
        return;
      }

      const t = reducedMotion
        ? 0
        : Math.max(0, (now - animStartTime) * 0.001);

      // 1. Render 3D Slow-Motion Rotating Earth in WebGL
      if (gl && glProgram && glTexture) {
        gl.useProgram(glProgram);
        gl.uniform2f(uResLoc, glCanvas.width, glCanvas.height);
        gl.uniform1f(uTimeLoc, t);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
      }

      // 2. Render Twinkling Stars, Parabolic Dish Scan Beam onto India, & Floating Orbital Spacecraft
      if (ctx2d) {
        ctx2d.clearRect(0, 0, width, height);

        // Fallback if WebGL unavailable
        if (!gl || !glProgram) {
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

        const isMobileLayout = width < 1024;

        // Subtle twinkling cosmic stars in the upper space sky (outside Earth's curved limb)
        for (const st of twinkleStars) {
          const px = st.u * (1920 / 1080);
          const py = st.v;
          const distToEarth = Math.hypot(px - 0.0053, py - 2.9946) / 2.644;
          if (distToEarth < 1.02) continue;
          const pos = imageUVToScreen(st.u, st.v);
          const alpha =
            0.22 + 0.55 * (0.5 + 0.5 * Math.sin(t * st.speed + st.phase));
          ctx2d.beginPath();
          ctx2d.arc(pos.x, pos.y, st.r, 0, Math.PI * 2);
          ctx2d.fillStyle = st.gold
            ? `rgba(216, 198, 75, ${alpha})`
            : `rgba(215, 238, 255, ${alpha})`;
          ctx2d.fill();
        }

        // Orbital trajectory arc curving behind the spacecraft
        const o1 = isMobileLayout
          ? { x: width * 0.02, y: width < 640 ? 112 : 124 }
          : imageUVToScreen(0.18, 0.04);
        const oc = isMobileLayout
          ? { x: width * 0.53, y: width < 640 ? 168 : 186 }
          : imageUVToScreen(0.60, 0.30);
        const o2 = isMobileLayout
          ? { x: width * 0.98, y: width < 640 ? 252 : 282 }
          : imageUVToScreen(0.99, 0.68);

        ctx2d.save();
        ctx2d.beginPath();
        ctx2d.moveTo(o1.x, o1.y);
        ctx2d.quadraticCurveTo(oc.x, oc.y, o2.x, o2.y);
        ctx2d.strokeStyle = isMobileLayout
          ? "rgba(169, 220, 235, 0.32)"
          : "rgba(169, 220, 235, 0.22)";
        ctx2d.lineWidth = 1.25;
        ctx2d.setLineDash([6, 10]);
        ctx2d.lineDashOffset = -t * 20;
        ctx2d.stroke();
        ctx2d.restore();

        // Spacecraft slow-motion orbital glide (all Math.sin so at t = 0 offset is 0.0 -> zero jump from SSR poster!)
        const satOrbitX = Math.sin(t * 0.42) * (isMobileLayout ? 9 : 24);
        const satOrbitY = Math.sin(t * 0.31) * (isMobileLayout ? 6 : 14);
        const satRoll = Math.sin(t * 0.34) * 0.035;
        const satBreath = 1.0 + 0.028 * Math.sin(t * 0.27);

        // Satellite geometric center (0.600, 0.3185) & parabolic dish feedhorn tip (0.556, 0.494) in 1920x1080 space
        const desktopSatPivot = imageUVToScreen(0.600, 0.3185);
        // Satellite wing-to-wing width in 1920px source space is 1353px
        const mobileTargetWingSpan =
          width < 640
            ? Math.min(width * 0.86, 345)
            : Math.min(width * 0.64, 470);
        const renderScale = isMobileLayout
          ? (mobileTargetWingSpan / 1353) * satBreath
          : desktopSatPivot.pxScale * satBreath;

        const satCenterX = isMobileLayout
          ? width * 0.52 + satOrbitX
          : desktopSatPivot.x + satOrbitX;
        const satCenterY = isMobileLayout
          ? (width < 640 ? 174 : 196) + satOrbitY
          : desktopSatPivot.y + satOrbitY;

        // Exact rotated & translated parabolic dish feedhorn screen position
        const srcNozzleDX = (0.556 - 0.600) * 1920;
        const srcNozzleDY = (0.494 - 0.3185) * 1080;
        const ndx = srcNozzleDX * renderScale;
        const ndy = srcNozzleDY * renderScale;
        const cosR = Math.cos(satRoll);
        const sinR = Math.sin(satRoll);
        const nozzleX = satCenterX + ndx * cosR - ndy * sinR;
        const nozzleY = satCenterY + ndx * sinR + ndy * cosR;

        // Target scan footprint sweeping across India & Indian Ocean on the rotating Earth!
        const sweepU = 0.355 + 0.055 * Math.sin(t * 0.44);
        const sweepV = 0.745 + 0.04 * Math.sin(t * 0.33);
        const desktopTarget = imageUVToScreen(sweepU, sweepV);
        const target = isMobileLayout
          ? {
              x: width * (0.44 + 0.09 * Math.sin(t * 0.44)),
              y: Math.min(height * 0.53, width < 640 ? 465 : 530),
            }
          : desktopTarget;
        const sFactor = isMobileLayout
          ? Math.max(0.54, renderScale * 1.9)
          : desktopSatPivot.pxScale;

        // Volumetric Multi-Spectral Scan Cone projecting from Parabolic Dish onto India
        const coneAngle =
          Math.atan2(target.y - nozzleY, target.x - nozzleX) + Math.PI / 2;
        const footprintRadius = 82 * sFactor;
        const leftFootX = target.x + Math.cos(coneAngle) * footprintRadius;
        const leftFootY =
          target.y + Math.sin(coneAngle) * footprintRadius * 0.52;
        const rightFootX = target.x - Math.cos(coneAngle) * footprintRadius;
        const rightFootY =
          target.y - Math.sin(coneAngle) * footprintRadius * 0.52;

        const coneGrad = ctx2d.createLinearGradient(
          nozzleX,
          nozzleY,
          target.x,
          target.y
        );
        coneGrad.addColorStop(0, "rgba(169, 220, 235, 0.52)");
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

        // Center telemetry beam + descending golden/cyan data pulses
        ctx2d.save();
        ctx2d.beginPath();
        ctx2d.moveTo(nozzleX, nozzleY);
        ctx2d.lineTo(target.x, target.y);
        ctx2d.strokeStyle = "rgba(169, 220, 235, 0.45)";
        ctx2d.lineWidth = 1.3;
        ctx2d.setLineDash([5, 8]);
        ctx2d.lineDashOffset = -t * 44;
        ctx2d.stroke();
        ctx2d.restore();

        for (let p = 0; p < 3; p++) {
          const prog = (t * 0.46 + p / 3) % 1;
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

        // Expanding concentric radar scan ellipses rippling over India on Earth's surface
        for (let ring = 0; ring < 3; ring++) {
          const rp = (t * 0.38 + ring / 3) % 1;
          const rx = (18 + rp * 84) * sFactor;
          const ry = rx * 0.48;
          const alpha = (1 - rp) * 0.62;

          ctx2d.save();
          ctx2d.translate(target.x, target.y);
          ctx2d.rotate(-0.2);
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

        // Draw the Surgical Isolated Spacecraft Layer floating & orbiting above Earth!
        const natW = satImg.naturalWidth || 1920;
        const natH = satImg.naturalHeight || 1080;
        const srcPivotX = 0.600 * natW;
        const srcPivotY = 0.3185 * natH;
        const scaleRatioX = 1920 / natW;
        const scaleRatioY = 1080 / natH;

        ctx2d.save();
        ctx2d.translate(satCenterX, satCenterY);
        ctx2d.rotate(satRoll);
        ctx2d.scale(renderScale * scaleRatioX, renderScale * scaleRatioY);

        ctx2d.shadowColor = "rgba(3, 12, 30, 0.72)";
        ctx2d.shadowBlur = isMobileLayout ? 14 : 20;
        ctx2d.drawImage(satImg, -srcPivotX, -srcPivotY, natW, natH);
        ctx2d.restore();

        // Subtle sensor feedhorn glow right at the parabolic dish tip
        const lensGlow = ctx2d.createRadialGradient(
          nozzleX,
          nozzleY,
          0,
          nozzleX,
          nozzleY,
          15 * sFactor
        );
        lensGlow.addColorStop(0, "rgba(255, 255, 255, 0.92)");
        lensGlow.addColorStop(0.38, "rgba(169, 220, 235, 0.55)");
        lensGlow.addColorStop(1, "rgba(169, 220, 235, 0)");
        ctx2d.fillStyle = lensGlow;
        ctx2d.beginPath();
        ctx2d.arc(nozzleX, nozzleY, 15 * sFactor, 0, Math.PI * 2);
        ctx2d.fill();
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
    <div
      className="absolute inset-0 z-0 overflow-hidden bg-[#041126] bg-cover bg-center select-none pointer-events-none"
      style={{ backgroundImage: `url("${INSTANT_BLUR_DATA_URL}")` }}
    >
      {/* Layer 0 (0ms Instant SSR Paint Together With Navbar — Stays Solid Underneath for Zero-Flicker Handoff!) */}
      <div className="absolute inset-0">
        {/* Desktop SSR Full Scene */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-v2-poster.webp"
          alt=""
          fetchPriority="high"
          loading="eager"
          decoding="sync"
          className="hidden lg:block w-full h-full object-cover object-[50%_46%]"
        />

        {/* Mobile/Tablet SSR Earth + Top Sky Stage Satellite */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-v2-earth.webp"
          alt=""
          fetchPriority="high"
          loading="eager"
          decoding="sync"
          className="lg:hidden w-full h-full object-cover object-[35%_50%]"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-v2-satellite.webp"
          alt=""
          fetchPriority="high"
          loading="eager"
          decoding="sync"
          className="lg:hidden absolute top-[78px] left-1/2 -translate-x-[48%] w-[88vw] max-w-[440px] h-auto object-contain"
        />
      </div>

      {/* Layer 1: 60fps WebGL 3D Slow-Motion Rotating Earth Globe + Sunrise Corona */}
      <canvas
        ref={glCanvasRef}
        className={`absolute inset-0 w-full h-full block transition-opacity duration-300 ${
          liveReady ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      />

      {/* Layer 2: Floating Orbital Spacecraft + India-Targeted Parabolic Telemetry Beam */}
      <canvas
        ref={overlayCanvasRef}
        className={`absolute inset-0 w-full h-full block transition-opacity duration-300 ${
          liveReady ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      />

      {/* Desktop Readability Scrim: Keeps Upper-Right Spacecraft, Sunrise & Rotating Earth Vividly Visible */}
      <div
        className="hidden lg:block absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 52% 58% at 22% 54%, rgba(6, 22, 48, 0.58) 0%, rgba(11, 40, 82, 0.22) 60%, rgba(11, 40, 82, 0.0) 100%)",
        }}
      />

      {/* Mobile/Tablet Readability Scrim: Leaves Top Orbital Satellite Window 100% Clear & Bright */}
      <div
        className="lg:hidden absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(4, 17, 38, 0.22) 0px, rgba(4, 17, 38, 0.0) 95px, rgba(4, 17, 38, 0.04) 255px, rgba(6, 22, 48, 0.64) 340px, rgba(7, 27, 56, 0.58) 78%, rgba(11, 40, 82, 0.92) 100%)",
        }}
      />

      {/* Smooth Top Navbar & Bottom Section Transition */}
      <div className="hidden lg:block absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#071B38]/65 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0B2852] via-[#0B2852]/45 to-transparent" />
    </div>
  );
}
