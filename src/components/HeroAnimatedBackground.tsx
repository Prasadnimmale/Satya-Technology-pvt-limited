"use client";

import React, { useEffect, useRef, useState } from "react";

// Tiny 40x23 inline base64 backdrop so frame 0 (0.0ms) is never blank
const INSTANT_BLUR_DATA_URL =
  "data:image/webp;base64,UklGRrwBAABXRUJQVlA4ILABAADQCACdASooABcAPp1CnUmlo6MhJWzIsBOJZACxH3YOHwEpXNNs+P1uYyXnw34Hp2BY6pOlj6pSPSkXrTMabz43r5+I8I/M088n5p6tSqTwAP79EAAYXT81EUe3+0m5bR3Juz0OPXubSqgr85b64Zc3a6MuWIj1ceUErzRIt5hR6DcKgt8fud31YW/PWeIxK7gIyP+3P0oj7LT0XzSk1p74Bg9ux43zpFq0Br8kZfJbYsgy/S5KICQEirsdkPxUGQe8VgaNqBX5331s6T0u7ASbhB3/2FewCdjVXZYjlTX3NycrxbpiNeZ5yDNIlH/OeWe0tVrk++mW/LIbZFzRVkYJVTCdiNvHVJyOvW5qMFDT06epFAJ+ZVONDx+TvwryWXd2m5XiYrOt3KRXqzlrfHPBjzsCw4WKei9arpTp8Yb4TLxUo3n8W+ADHCjrNpYTgyeHNccyv6HYDBdX3JeFBi8EZvXfmD/fjBdqI2gRjbj2y4kpH6c/KXAQH2nAWR8lvRJ583YWo7kxB3AN7Xf/5Opgq3TVwUw4bsgdRqIa9p+W/wYzWNMVa4nXJvj9/kyaAAA=";

const VERTEX_SHADER = `
attribute vec2 a_pos;
varying vec2 v_uv;
void main() {
  v_uv = vec2(a_pos.x * 0.5 + 0.5, 0.5 - a_pos.y * 0.5);
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`;

// Real-time 60fps 3D Spherical Earth Slow-Motion Rotation Shader (Natural angled curved Earth & soft static horizon)
const FRAGMENT_SHADER = `
precision highp float;

varying vec2 v_uv;
uniform sampler2D u_tex;
uniform vec2 u_res;
uniform float u_time;
uniform float u_mobile;

const float IMG_ASPECT = 1920.0 / 1080.0;

vec3 rotateAxis(vec3 v, vec3 axis, float ang) {
  float c = cos(ang);
  float s = sin(ang);
  return v * c + cross(axis, v) * s + axis * dot(axis, v) * (1.0 - c);
}

vec2 screenToRawImageUV(vec2 suv) {
  float screenAspect = u_res.x / max(1.0, u_res.y);
  if (u_mobile > 0.5) {
    // Natural curved Earth horizon on mobile (not flattened!), framing both soft left horizon glow & India
    float spanU = 0.60;
    float spanV = spanU * IMG_ASPECT / screenAspect;
    float ux = suv.x * spanU + 0.03;
    float uy = (suv.y - 0.315) * spanV + 0.385;
    return vec2(ux, uy);
  }
  vec2 uv = suv;
  if (screenAspect > IMG_ASPECT) {
    float scale = IMG_ASPECT / screenAspect;
    uv.y = (suv.y - 0.46) * scale + 0.46;
  } else {
    float scale = screenAspect / IMG_ASPECT;
    uv.x = (suv.x - 0.46) * scale + 0.46;
  }
  return uv;
}

vec3 sampleRotatedEarth(vec2 rawUV, float theta) {
  vec2 imgUV = clamp(rawUV, 0.002, 0.998);
  vec2 P = vec2(rawUV.x * IMG_ASPECT, rawUV.y);

  vec2 C = vec2(0.0053, 2.9946);
  float R = 2.6440;

  vec2 d = P - C;
  float dist = length(d);
  float rn = dist / R;

  if (rn >= 0.995) {
    return texture2D(u_tex, imgUV).rgb;
  }

  float innerWeight = smoothstep(0.995, 0.915, rn);
  vec2 sunDelta = vec2((rawUV.x - 0.090) * IMG_ASPECT, rawUV.y - 0.385);
  float sunGuard = smoothstep(0.14, 0.34, length(sunDelta));
  float effTheta = theta * innerWeight * sunGuard;

  vec2 sn = d / R;
  float sz = sqrt(max(0.0004, 1.0 - dot(sn, sn)));
  vec3 N = normalize(vec3(sn.x, sn.y, sz));

  vec3 spinAxis = normalize(vec3(-0.32, -0.80, 0.51));
  vec3 Nsrc = rotateAxis(N, spinAxis, -effTheta);

  vec2 Psrc = C + Nsrc.xy * R;
  vec2 srcUV = clamp(vec2(Psrc.x / IMG_ASPECT, Psrc.y), 0.002, 0.998);

  return texture2D(u_tex, srcUV).rgb;
}

void main() {
  vec2 rawUV = screenToRawImageUV(v_uv);

  float cycle = 26.0;
  float pA = fract(u_time / cycle + 0.5);
  float pB = fract(u_time / cycle);

  float wA = 0.5 - 0.5 * cos(6.2831853 * pA);
  float wB = 1.0 - wA;

  float span = 0.165;
  float thetaA = (pA - 0.5) * span;
  float thetaB = (pB - 0.5) * span;

  vec3 colA = sampleRotatedEarth(rawUV, thetaA);
  vec3 colB = sampleRotatedEarth(rawUV, thetaB);
  vec3 color = colA * wA + colB * wB;

  if (rawUV.y < 0.08) {
    float topBlend = smoothstep(-0.04, 0.08, rawUV.y);
    vec3 deepSpace = vec3(0.012, 0.032, 0.075);
    color = mix(deepSpace, color, topBlend);
  }
  if (rawUV.y > 0.90) {
    float botBlend = smoothstep(0.90, 1.04, rawUV.y);
    vec3 brandNavy = vec3(11.0 / 255.0, 40.0 / 255.0, 82.0 / 255.0);
    color = mix(color, brandNavy, botBlend);
  }

  // Subtle cyan atmospheric rim along the curved Earth limb (sunlight kept 100% static & soft)
  vec2 P = vec2(rawUV.x * IMG_ASPECT, rawUV.y);
  vec2 C = vec2(0.0053, 2.9946);
  float rn = length(P - C) / 2.6440;
  float rim = exp(-pow((rn - 0.996) * 68.0, 2.0));
  float rimWave = 0.5 + 0.5 * sin(u_time * 1.5 + rawUV.x * 7.5);
  color += vec3(0.42, 0.84, 1.0) * rim * 0.14 * rimWave;

  gl_FragColor = vec4(clamp(color, 0.0, 1.0), 1.0);
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
    earthImg.src = "/images/hero-v2-earth.webp?v=2";

    const satImg = new window.Image();
    satImg.decoding = "async";
    satImg.src = "/images/hero-v2-satellite.webp";

    let earthReady = false;
    let satReady = false;
    let glProgram: WebGLProgram | null = null;
    let uResLoc: WebGLUniformLocation | null = null;
    let uTimeLoc: WebGLUniformLocation | null = null;
    let uMobileLoc: WebGLUniformLocation | null = null;
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
            uMobileLoc = gl.getUniformLocation(prog, "u_mobile");
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
      u: 0.04 + Math.random() * 0.92,
      v: 0.02 + Math.random() * 0.24,
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
    const resizeObserver =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(() => resize())
        : null;
    resizeObserver?.observe(overlayCanvas);

    const imageUVToScreen = (iu: number, iv: number, mobileMode: boolean) => {
      const imgAspect = 1920 / 1080;
      const screenAspect = width / height;
      if (mobileMode) {
        const spanU = 0.6;
        const spanV = (spanU * imgAspect) / screenAspect;
        const su = (iu - 0.03) / spanU;
        const sv = (iv - 0.385) / spanV + 0.285;
        return {
          x: su * width,
          y: sv * height,
          pxScale: width / (spanU * 1920),
        };
      }
      let su = iu;
      let sv = iv;
      if (screenAspect > imgAspect) {
        const scale = imgAspect / screenAspect;
        sv = (iv - 0.46) / scale + 0.46;
      } else {
        const scale = screenAspect / imgAspect;
        su = (iu - 0.46) / scale + 0.46;
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

      const isMobile = width < 1024;
      const t = reducedMotion
        ? 0
        : Math.max(0, (now - animStartTime) * 0.001);

      // 1. Render 3D Slow-Motion Rotating Earth in WebGL
      if (gl && glProgram && glTexture) {
        gl.useProgram(glProgram);
        gl.uniform2f(uResLoc, glCanvas.width, glCanvas.height);
        gl.uniform1f(uTimeLoc, t);
        gl.uniform1f(uMobileLoc, isMobile ? 1.0 : 0.0);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
      }

      // 2. Render Stars, Angled Orbital Spacecraft (natural cross pose!), & Aligned Scan Beam
      if (ctx2d) {
        ctx2d.clearRect(0, 0, width, height);

        for (const st of twinkleStars) {
          const x = st.u * width;
          const y = st.v * height;
          const alpha =
            0.22 + 0.52 * (0.5 + 0.5 * Math.sin(t * st.speed + st.phase));
          ctx2d.beginPath();
          ctx2d.arc(x, y, st.r, 0, Math.PI * 2);
          ctx2d.fillStyle = st.gold
            ? `rgba(216, 198, 75, ${alpha})`
            : `rgba(215, 238, 255, ${alpha})`;
          ctx2d.fill();
        }

        // Natural orbital trajectory arc matching the angled satellite
        const o1 = isMobile
          ? { x: width * 0.03, y: width < 640 ? 136 : 150 }
          : imageUVToScreen(0.18, 0.04, false);
        const oc = isMobile
          ? { x: width * 0.53, y: width < 640 ? 182 : 202 }
          : imageUVToScreen(0.6, 0.3, false);
        const o2 = isMobile
          ? { x: width * 0.98, y: width < 640 ? 256 : 286 }
          : imageUVToScreen(0.99, 0.68, false);

        ctx2d.save();
        ctx2d.beginPath();
        ctx2d.moveTo(o1.x, o1.y);
        ctx2d.quadraticCurveTo(oc.x, oc.y, o2.x, o2.y);
        ctx2d.strokeStyle = isMobile
          ? "rgba(169, 220, 235, 0.30)"
          : "rgba(169, 220, 235, 0.22)";
        ctx2d.lineWidth = 1.25;
        ctx2d.setLineDash([6, 10]);
        ctx2d.lineDashOffset = -t * 20;
        ctx2d.stroke();
        ctx2d.restore();

        // Keep natural angled (`cross`) pose of the satellite (0 rad base rotation!) on BOTH Desktop & Mobile!
        const satOrbitX = Math.sin(t * 0.42) * (isMobile ? 7 : 24);
        const satOrbitY = Math.sin(t * 0.31) * (isMobile ? 5 : 14);
        const satRoll = Math.sin(t * 0.34) * (isMobile ? 0.025 : 0.035);
        const satBreath = 1.0 + 0.026 * Math.sin(t * 0.27);

        const desktopSatPivot = imageUVToScreen(0.6, 0.3185, false);
        const mobileTargetWingSpan =
          width < 640
            ? Math.min(width * 0.84, 335)
            : Math.min(width * 0.64, 460);
        const renderScale = isMobile
          ? (mobileTargetWingSpan / 1353) * satBreath
          : desktopSatPivot.pxScale * satBreath;

        const satCenterX = isMobile
          ? width * 0.52 + satOrbitX
          : desktopSatPivot.x + satOrbitX;
        const satCenterY = isMobile
          ? (width < 640 ? 186 : 208) + satOrbitY
          : desktopSatPivot.y + satOrbitY;

        // Exact parabolic dish feedhorn tip (0.556, 0.494) in 1920x1080 space
        const srcNozzleDX = (0.556 - 0.6) * 1920;
        const srcNozzleDY = (0.494 - 0.3185) * 1080;
        const ndx = srcNozzleDX * renderScale;
        const ndy = srcNozzleDY * renderScale;
        const cosR = Math.cos(satRoll);
        const sinR = Math.sin(satRoll);
        const nozzleX = satCenterX + ndx * cosR - ndy * sinR;
        const nozzleY = satCenterY + ndx * sinR + ndy * cosR;

        // Beam projects naturally straight out along the dish's own axis onto Earth below!
        const sweepU = 0.355 + 0.048 * Math.sin(t * 0.44);
        const sweepV = 0.715 + 0.036 * Math.sin(t * 0.33);
        const target = isMobile
          ? {
              x: width * (0.39 + 0.035 * Math.sin(t * 0.42)),
              y: nozzleY + (width < 640 ? 142 : 175),
            }
          : imageUVToScreen(sweepU, sweepV, false);
        const sFactor = isMobile
          ? Math.max(0.5, renderScale * 1.85)
          : desktopSatPivot.pxScale;

        const coneAngle =
          Math.atan2(target.y - nozzleY, target.x - nozzleX) + Math.PI / 2;
        const footprintRadius = (isMobile ? 64 : 78) * sFactor;
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
        coneGrad.addColorStop(0, "rgba(169, 220, 235, 0.55)");
        coneGrad.addColorStop(0.48, "rgba(28, 110, 156, 0.24)");
        coneGrad.addColorStop(0.85, "rgba(216, 198, 75, 0.14)");
        coneGrad.addColorStop(1, "rgba(216, 198, 75, 0.02)");

        ctx2d.beginPath();
        ctx2d.moveTo(nozzleX, nozzleY);
        ctx2d.lineTo(leftFootX, leftFootY);
        ctx2d.lineTo(rightFootX, rightFootY);
        ctx2d.closePath();
        ctx2d.fillStyle = coneGrad;
        ctx2d.fill();

        ctx2d.save();
        ctx2d.beginPath();
        ctx2d.moveTo(nozzleX, nozzleY);
        ctx2d.lineTo(target.x, target.y);
        ctx2d.strokeStyle = "rgba(169, 220, 235, 0.46)";
        ctx2d.lineWidth = 1.35;
        ctx2d.setLineDash([5, 8]);
        ctx2d.lineDashOffset = -t * 44;
        ctx2d.stroke();
        ctx2d.restore();

        for (let p = 0; p < 3; p++) {
          const prog = (t * 0.46 + p / 3) % 1;
          const px = nozzleX + (target.x - nozzleX) * prog;
          const py = nozzleY + (target.y - nozzleY) * prog;
          ctx2d.beginPath();
          ctx2d.arc(px, py, 2.8 * sFactor, 0, Math.PI * 2);
          ctx2d.fillStyle =
            p % 2 === 0
              ? `rgba(216, 198, 75, ${0.95 - prog * 0.55})`
              : `rgba(169, 220, 235, ${0.95 - prog * 0.55})`;
          ctx2d.fill();
        }

        for (let ring = 0; ring < 3; ring++) {
          const rp = (t * 0.38 + ring / 3) % 1;
          const rx = (16 + rp * 72) * sFactor;
          const ry = rx * 0.46;
          const alpha = (1 - rp) * 0.62;

          ctx2d.save();
          ctx2d.translate(target.x, target.y);
          ctx2d.rotate(-0.18);
          ctx2d.beginPath();
          ctx2d.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
          ctx2d.strokeStyle =
            ring === 0
              ? `rgba(216, 198, 75, ${alpha})`
              : `rgba(169, 220, 235, ${alpha})`;
          ctx2d.lineWidth = 1.5;
          ctx2d.stroke();
          ctx2d.restore();
        }

        const natW = satImg.naturalWidth || 1920;
        const natH = satImg.naturalHeight || 1080;
        const srcPivotX = 0.6 * natW;
        const srcPivotY = 0.3185 * natH;
        const scaleRatioX = 1920 / natW;
        const scaleRatioY = 1080 / natH;

        ctx2d.save();
        ctx2d.translate(satCenterX, satCenterY);
        ctx2d.rotate(satRoll);
        ctx2d.scale(renderScale * scaleRatioX, renderScale * scaleRatioY);

        ctx2d.shadowColor = "rgba(3, 12, 30, 0.72)";
        ctx2d.shadowBlur = isMobile ? 14 : 20;
        ctx2d.drawImage(satImg, -srcPivotX, -srcPivotY, natW, natH);
        ctx2d.restore();

        const lensGlow = ctx2d.createRadialGradient(
          nozzleX,
          nozzleY,
          0,
          nozzleX,
          nozzleY,
          14 * sFactor
        );
        lensGlow.addColorStop(0, "rgba(255, 255, 255, 0.9)");
        lensGlow.addColorStop(0.38, "rgba(169, 220, 235, 0.52)");
        lensGlow.addColorStop(1, "rgba(169, 220, 235, 0)");
        ctx2d.fillStyle = lensGlow;
        ctx2d.beginPath();
        ctx2d.arc(nozzleX, nozzleY, 14 * sFactor, 0, Math.PI * 2);
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
      resizeObserver?.disconnect();
    };
  }, []);

  return (
    <div
      className="absolute inset-0 z-0 overflow-hidden bg-[#030A18] bg-cover bg-center select-none pointer-events-none"
      style={{ backgroundImage: `url("${INSTANT_BLUR_DATA_URL}")` }}
    >
      {/* Layer 0 (0ms Instant SSR Paint Together With Navbar — Natural Angled Pose!) */}
      <div className="absolute inset-0">
        {/* Desktop SSR Full Scene */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-v2-poster.webp?v=2"
          alt=""
          fetchPriority="high"
          loading="eager"
          decoding="sync"
          className="hidden lg:block w-full h-full object-cover object-[46%_46%]"
        />

        {/* Mobile/Tablet SSR Natural Curved Earth + Natural Angled Satellite */}
        <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-[#030916] via-[#041126] to-[#0B2852]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-v2-earth.webp?v=2"
            alt=""
            fetchPriority="high"
            loading="eager"
            decoding="sync"
            className="absolute top-[180px] sm:top-[200px] -left-[5%] w-[166.7%] max-w-none h-auto"
          />
          <div className="absolute inset-x-0 top-[176px] sm:top-[196px] h-14 bg-gradient-to-b from-[#030916] to-transparent" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-v2-satellite.webp"
            alt=""
            fetchPriority="high"
            loading="eager"
            decoding="sync"
            className="absolute top-[108px] sm:top-[116px] left-[52%] -translate-x-1/2 w-[84vw] max-w-[440px] h-auto object-contain"
          />
        </div>
      </div>

      {/* Layer 1: 60fps WebGL 3D Slow-Motion Rotating Earth */}
      <canvas
        ref={glCanvasRef}
        className={`absolute inset-0 w-full h-full block transition-opacity duration-300 ${
          liveReady ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      />

      {/* Layer 2: Floating Orbital Spacecraft + Scan Beam */}
      <canvas
        ref={overlayCanvasRef}
        className={`absolute inset-0 w-full h-full block transition-opacity duration-300 ${
          liveReady ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      />

      {/* Desktop Readability Scrim */}
      <div
        className="hidden lg:block absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 46% 48% at 24% 64%, rgba(6, 22, 48, 0.56) 0%, rgba(11, 40, 82, 0.18) 62%, rgba(11, 40, 82, 0.0) 100%)",
        }}
      />

      {/* Mobile/Tablet Readability Scrim */}
      <div
        className="lg:hidden absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(4, 17, 38, 0.18) 0px, rgba(4, 17, 38, 0.0) 116px, rgba(4, 17, 38, 0.0) 352px, rgba(6, 22, 48, 0.58) 418px, rgba(7, 27, 56, 0.62) 78%, rgba(11, 40, 82, 0.94) 100%)",
        }}
      />

      {/* Smooth Top Navbar & Bottom Section Transition */}
      <div className="hidden lg:block absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#071B38]/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0B2852] via-[#0B2852]/45 to-transparent" />
    </div>
  );
}
