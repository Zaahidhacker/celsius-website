"use client";

import React, { useEffect, useRef } from "react";

export interface MeshGradientProps {
  /** Animation speed multiplier. Default 6. */
  speed?: number;
  /** Color intensity. Default 1.4. */
  intensity?: number;
  /** Film grain amount. Default 0.45. */
  grain?: number;
  /** Optional opacity override (0..1). Default 1. */
  opacity?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Celsius-branded animated mesh gradient shader.
 * Uses navy + brand blue + warm amber accent — designed to sit behind hero/section
 * content as a subtle animated backdrop (set opacity ~0.18-0.35 via parent).
 *
 * Adapted from the 21st.dev Mesh Gradient Shader (nlace-com) — recoloured to
 * the Celsius palette and tuned for ambient (not focal) usage.
 */
const VERT = "attribute vec2 a; void main(){ gl_Position = vec4(a, 0.0, 1.0); }";

const FRAG = [
  "precision highp float;",
  "uniform vec2 u_res; uniform float u_time; uniform float u_speed; uniform float u_intensity; uniform float u_grain;",
  // Celsius palette — cool navy base + brand blue + warm amber accent
  "const vec3 C_NAVY    = vec3(0.059,0.184,0.388);",   // #0f2f63
  "const vec3 C_BRAND   = vec3(0.145,0.388,0.788);",   // #2563c9
  "const vec3 C_LIGHT   = vec3(0.341,0.565,0.902);",   // #5790e6
  "const vec3 C_AMBER   = vec3(0.961,0.651,0.137);",   // #f5a623
  "const vec3 C_TEAL    = vec3(0.043,0.431,0.592);",   // #0b6e97
  "float hash(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123); }",
  "float grain(vec2 uv){ return hash(uv*vec2(1031.0,1973.0)+fract(u_time)); }",
  "void main(){",
  "  vec2 uv = gl_FragCoord.xy/u_res.xy;",
  "  float t = u_time*0.12*u_speed;",
  "  vec2 p0=vec2(0.22+0.16*sin(t*1.1), 0.28+0.12*cos(t*0.9));",
  "  vec2 p1=vec2(0.78+0.13*cos(t*0.8), 0.22+0.14*sin(t*1.2));",
  "  vec2 p2=vec2(0.55+0.18*sin(t*0.7), 0.74+0.10*cos(t*0.85));",
  "  vec2 p3=vec2(0.18+0.14*cos(t*1.3), 0.68+0.12*sin(t*0.75));",
  "  float e=1.85;",
  "  float w0=pow(1.0/(distance(uv,p0)+0.05),e);",
  "  float w1=pow(1.0/(distance(uv,p1)+0.05),e);",
  "  float w2=pow(1.0/(distance(uv,p2)+0.05),e);",
  "  float w3=pow(1.0/(distance(uv,p3)+0.05),e);",
  "  float ws=w0+w1+w2+w3;",
  "  vec3 col=(C_NAVY*w0 + C_BRAND*w1 + C_AMBER*w2*0.55 + C_LIGHT*w3)/ws;",
  "  col = mix(col, C_TEAL, 0.10*u_intensity*sin(t+uv.x*3.0));",
  "  col = mix(col, C_NAVY, smoothstep(0.45,1.15,uv.y)*0.22);",
  "  col += (grain(uv)-0.5)*0.04*u_grain;",
  "  gl_FragColor=vec4(col,1.0);",
  "}",
].join("\n");

export function MeshGradient({
  speed = 6,
  intensity = 1.4,
  grain = 0.45,
  opacity = 1,
  className,
  style,
}: MeshGradientProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const paramsRef = useRef({ speed, intensity, grain });
  paramsRef.current = { speed, intensity, grain };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", { antialias: true, alpha: false });
    if (!gl) {
      canvas.style.background =
        "linear-gradient(135deg, #0f2f63 0%, #2563c9 50%, #5790e6 100%)";
      return;
    }

    function compile(type: number, src: string) {
      const s = gl!.createShader(type)!;
      gl!.shaderSource(s, src);
      gl!.compileShader(s);
      if (!gl!.getShaderParameter(s, gl!.COMPILE_STATUS)) {
        console.error(gl!.getShaderInfoLog(s));
      }
      return s;
    }

    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW,
    );
    const aLoc = gl.getAttribLocation(prog, "a");
    gl.enableVertexAttribArray(aLoc);
    gl.vertexAttribPointer(aLoc, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "u_res");
    const uTime = gl.getUniformLocation(prog, "u_time");
    const uSpeed = gl.getUniformLocation(prog, "u_speed");
    const uInt = gl.getUniformLocation(prog, "u_intensity");
    const uGrain = gl.getUniformLocation(prog, "u_grain");

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const w = Math.max(1, Math.floor(canvas!.clientWidth * dpr));
      const h = Math.max(1, Math.floor(canvas!.clientHeight * dpr));
      if (canvas!.width !== w || canvas!.height !== h) {
        canvas!.width = w;
        canvas!.height = h;
      }
    }
    window.addEventListener("resize", resize);

    const t0 = performance.now();
    let raf = 0;
    function frame() {
      resize();
      gl!.viewport(0, 0, gl!.drawingBufferWidth, gl!.drawingBufferHeight);
      gl!.uniform2f(uRes, gl!.drawingBufferWidth, gl!.drawingBufferHeight);
      gl!.uniform1f(uTime, (performance.now() - t0) / 1000);
      const p = paramsRef.current;
      gl!.uniform1f(uSpeed, p.speed);
      gl!.uniform1f(uInt, p.intensity);
      gl!.uniform1f(uGrain, p.grain);
      gl!.drawArrays(gl!.TRIANGLES, 0, 3);
      raf = requestAnimationFrame(frame);
    }
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        display: "block",
        opacity,
        ...style,
      }}
    />
  );
}

export default MeshGradient;
