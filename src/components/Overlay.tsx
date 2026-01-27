"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Overlay() {
    const { scrollYProgress } = useScroll();

    // Opacity for first section
    const opacity1 = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

    // Opacity for second section
    const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45], [0, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.25, 0.45], [50, -50]);

    // Opacity for third section
    const opacity3 = useTransform(scrollYProgress, [0.55, 0.65, 0.75], [0, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.55, 0.75], [50, -50]);

    return (
        <div className="pointer-events-none fixed inset-0 z-10 flex h-screen w-full flex-col items-center justify-center text-white mix-blend-difference">
            {/* Slide 1 - Center */}
            <motion.div
                style={{ opacity: opacity1, y: y1 }}
                className="absolute text-center"
            >
                <h1 className="text-[5rem] font-bold leading-none tracking-tighter md:text-[10rem]">
                    Mayank Bhagat
                </h1>
                <p className="mt-4 text-xl font-light tracking-widest uppercase opacity-80 md:text-2xl">
                    Creative AI Engineer
                </p>
            </motion.div>

            {/* Slide 2 - Left aligned */}
            <motion.div
                style={{ opacity: opacity2, y: y2 }}
                className="absolute left-[10%] max-w-lg text-left"
            >
                <h2 className="text-[3.5rem] font-bold leading-none md:text-[6rem]">
                    I build intelligent <br /> digital systems.
                </h2>
            </motion.div>

            {/* Slide 3 - Right aligned */}
            <motion.div
                style={{ opacity: opacity3, y: y3 }}
                className="absolute right-[10%] max-w-lg text-right"
            >
                <h2 className="text-[3.5rem] font-bold leading-none md:text-[6rem]">
                    Bridging AI research <br /> With <br />real-world impact.
                </h2>
            </motion.div>
        </div>
    );
}
