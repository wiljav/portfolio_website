"use client";
import { motion } from "framer-motion";

// 1. Update the type to include vertical directions
type Direction = 'left' | 'right' | 'top' | 'bottom';

export default function AnimatedColumn({ children, direction }: { children: React.ReactNode, direction: Direction }) {
  return (
    <motion.div
      initial={{ 
        // Horizontal: -100 for left, 100 for right
        x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
        // Vertical: -100 for top, 100 for bottom (starts lower to slide up)
        y: direction === 'top' ? -100 : direction === 'bottom' ? 100 : 0, 
        opacity: 0 
      }}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
