"use client";

import { useScroll, useMotionValueEvent, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function ScrollyCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const totalFrames = 178; // 178 frames processed

    // Track scroll progress of the entire page or a specific container
    // Here we use the window/viewport scroll for the timeline
    const { scrollYProgress } = useScroll();

    // Transform scroll (0 to 1) to frame index (0 to totalFrames - 1)
    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, totalFrames - 1]);

    useEffect(() => {
        // Preload images
        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];

            for (let i = 1; i <= totalFrames; i++) {
                const img = new Image();
                const src = `/sequence/${String(i).padStart(3, "0")}.webp`;
                img.src = src;
                await new Promise((resolve) => {
                    img.onload = resolve;
                    img.onerror = resolve; // Continue even if frame fails
                });
                loadedImages.push(img);
            }

            setImages(loadedImages);
            setIsLoaded(true);
        };

        loadImages();
    }, []);

    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        const img = images[index];

        if (!canvas || !ctx || !img) return;

        // Canvas sizing (handle high DPI)
        // We want the canvas to cover the viewport (object-fit: cover equivalent)
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
        const x = (canvas.width - img.width * scale) / 2;
        const y = (canvas.height - img.height * scale) / 2;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    useMotionValueEvent(frameIndex, "change", (latest) => {
        if (!isLoaded) return;
        const frameToRender = Math.min(
            totalFrames - 1,
            Math.max(0, Math.round(latest))
        );
        renderFrame(frameToRender);
    });

    // Initial render when loaded
    useEffect(() => {
        if (isLoaded) {
            renderFrame(0);
        }
    }, [isLoaded]);

    // Handle Resize
    useEffect(() => {
        if (!isLoaded) return;

        const handleResize = () => {
            // Rerender current frame on resize
            const currentFrame = Math.round(frameIndex.get());
            renderFrame(currentFrame);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isLoaded]);

    return (
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
            <canvas ref={canvasRef} className="block h-full w-full object-cover" />
            {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center text-white/50 text-sm">
                    Loading Sequence...
                </div>
            )}
        </div>
    );
}
