"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "motion/react";
import { StaticImageData } from "next/image";

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string | StaticImageData;
    // onMouseEnter?: () => void;
    // onMouseLeave?: () => void;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);

  // rotate the tooltip
  const rotate = useSpring(useTransform(x, [-100, 100], [-5, 5]), springConfig);

  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-2, 2]),
    springConfig,
  );

  const handleMouseMove = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    const halfWidth = target.offsetWidth / 2;
    const offsetX = event.nativeEvent.offsetX;
    x.set(offsetX - halfWidth);
  };

  const handleClick = (id: number) => {
    // Toggle clicked state on tap/click
    if (clickedIndex === id) {
      setClickedIndex(null);
    } else {
      setClickedIndex(id);
      setHoveredIndex(null); // Reset hover state when clicking
    }
  };

  // Determine if the tooltip should be shown (either hovered or clicked)
  const isTooltipVisible = (id: number) => {
    return hoveredIndex === id || clickedIndex === id;
  };

  return (
    <>
      {items.map((item) => (
        <div className="group relative" key={item.name}>
          <AnimatePresence mode="popLayout">
            {isTooltipVisible(item.id) && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                }}
                className="absolute -top-16 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl max-w-[420px] w-max"
                role="tooltip"
                id={`tooltip-${item.id}`}
              >
                <div className="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
                <div className="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
                <div className="relative z-30 text-base font-bold text-white text-center">
                  {item.name}
                </div>
                <div className="text-xl text-white text-center break-words">
                  {item.designation}
                </div>
                {clickedIndex === item.id && (
                  <div className="absolute -bottom-5 left-0 right-0 mx-auto text-center text-xs text-white/70">
                    Tap to close
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          <button
            type="button"
            className="p-0 bg-transparent border-0 focus:outline-none"
            aria-expanded={isTooltipVisible(item.id)}
            aria-describedby={`tooltip-${item.id}`}
            onMouseEnter={() => {
              // Only set hover if not in clicked state
              if (clickedIndex === null) {
                setHoveredIndex(item.id);
                // item.onMouseEnter && item.onMouseEnter();
              }
            }}
            onMouseLeave={() => {
              // Only reset hover if not in clicked state
              if (clickedIndex === null) {
                setHoveredIndex(null);
                // item.onMouseLeave && item.onMouseLeave();
              }
            }}
            onClick={() => handleClick(item.id)}
            onMouseMove={clickedIndex === null ? handleMouseMove : undefined}
          >
            <Image
              height={512}
              width={512}
              src={item.image}
              alt={item.name}
              className={`relative !m-0 h-32 w-32 rounded-full border-1 border-white/80 object-cover object-top !p-0 transition duration-500 
                ${isTooltipVisible(item.id) ? "z-30 scale-196" : ""} 
                ${clickedIndex === null ? "group-hover:z-30 group-hover:scale-196" : ""}`}
            />
            <span className="sr-only">View details for {item.name}</span>
          </button>
        </div>
      ))}
    </>
  );
};
