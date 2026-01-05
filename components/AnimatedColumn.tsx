"use client";
import { motion } from "framer-motion";

export default function AnimatedColumn({ children, direction }: { children: React.ReactNode, direction: 'left' | 'right' }) {
  return (
    <motion.div
      initial={{ x: direction === 'left' ? -100 : 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}