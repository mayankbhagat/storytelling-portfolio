"use client";

import { useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/**
 * IMPORTANT:
 * This array MUST match your existing filenames exactly.
 * Example filenames:
 * frame_001_delay-0.067s.webp
 * frame_002_delay-0.067s.webp
 */
const FRAME_FILES = Array.from({ length: 70 }, (_, i) =>
  `/sequence/frame_${String(i + 1).padStart(3, "0")}_delay-0.067s.webp`
);

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [ready, setReady] = useState(false);
  const lastFrameRef = useRef(-1);

  const { scrollYProgress } = useScroll();

  /* -----------------------------
     CANVAS SETUP
  ------------------------------ */
  const setupCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext("2d");
    if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  /* -----------------------------
     IMAGE LOADING
  ------------------------------ */
  useEffect(() => {
    setupCanvas();

    // Load FIRST frame immediately
    const firstImg = new Image();
    firstImg.src = FRAME_FILES[0];
    imagesRef.current[0] = firstImg;

    firstImg.onload = () => {
      drawFrame(0);
      setReady(true);
    };

    // Load remaining frames lazily
    let index = 1;
    const loadIdle = () => {
      if (index >= FRAME_FILES.length) return;

      const img = new Image();
      img.src = FRAME_FILES[index];
      imagesRef.current[index] = img;
      index++;

      requestIdleCallback(loadIdle);
    };

    requestIdleCallback(loadIdle);

    window.addEventListener("resize", setupCanvas);
    return () => window.removeEventListener("resize", setupCanvas);
  }, []);

  /* -----------------------------
     DRAW FUNCTION
  ------------------------------ */
  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const img = imagesRef.current[index];

    if (!canvas || !ctx || !img || !img.complete) return;

    const { width, height } = canvas;
    const scale = Math.max(width / img.width, height / img.height);
    const x = (width - img.width * scale) / 2;
    const y = (height - img.height * scale) / 2;

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
  };

  /* -----------------------------
     SCROLL → FRAME
  ------------------------------ */
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (!ready) return;

    const frame = Math.min(
      FRAME_FILES.length - 1,
      Math.floor(v * FRAME_FILES.length)
    );

    if (frame === lastFrameRef.current) return;
    lastFrameRef.current = frame;

    drawFrame(frame);
  });

  return (
    <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
      <canvas ref={canvasRef} className="block h-full w-full" />

      {!ready && (
        <div className="absolute inset-0 flex items-center justify-center text-white/60 text-sm tracking-widest">
          Loading sequence…
        </div>
      )}
    </div>
  );
}
