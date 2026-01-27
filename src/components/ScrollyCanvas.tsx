"use client";

import { useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const TOTAL_FRAMES = 70; // ONLY first 70 frames are used

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [ready, setReady] = useState(false);
  const lastFrameRef = useRef(-1);

  const { scrollYProgress } = useScroll();

  /* -----------------------------
     CANVAS SETUP (ONCE)
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
     IMAGE LOADING (FAST + SAFE)
  ------------------------------ */
  useEffect(() => {
    setupCanvas();

    // 1️⃣ Load FIRST frame immediately
    const firstImg = new Image();
    firstImg.src = `/sequence/frame_000.webp`;
    imagesRef.current[0] = firstImg;

    firstImg.onload = () => {
      drawFrame(0);
      setReady(true);
    };

    // 2️⃣ Load remaining frames lazily
    let index = 1;
    const loadIdle = () => {
      if (index >= TOTAL_FRAMES) return;

      const img = new Image();
      img.src = `/sequence/frame_${String(index).padStart(3, "0")}.webp`;
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
     SCROLL → FRAME (OPTIMIZED)
  ------------------------------ */
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (!ready) return;

    const frame = Math.min(
      TOTAL_FRAMES - 1,
      Math.floor(v * TOTAL_FRAMES)
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
          Loading experience…
        </div>
      )}
    </div>
  );
}
