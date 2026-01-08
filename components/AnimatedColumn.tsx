"use client";
import { motion } from "framer-motion";

type Direction = 'left' | 'right' | 'top' | 'bottom';

interface Props {
  children: React.ReactNode;
  direction: Direction;
  delay?: number;
  className?: string;
}

export default function AnimatedColumn({ children, direction, className, delay = 0 }: Props) {
  return (
    <motion.div
      // 1. initial only contains the starting animation values
      initial={{ 
        x: direction === 'left' ? -80 : direction === 'right' ? 80 : 0,
        y: direction === 'top' ? -80 : direction === 'bottom' ? 80 : 0, 
        opacity: 0,
      }}
      // 2. className moved out here as a standard prop
      className={`flex flex-col ${className || ''}`}
      
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px", amount: 0.2 }}
      transition={{ 
        duration: 1, 
        ease: [0.16, 1, 0.3, 1], 
        delay: delay 
      }}
    >
      {children}
    </motion.div>
  );
}
