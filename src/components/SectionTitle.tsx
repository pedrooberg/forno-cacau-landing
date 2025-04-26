
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionTitle = ({ children, className }: SectionTitleProps) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={cn("text-4xl md:text-5xl font-playfair font-bold mb-8 text-center", className)}
    >
      {children}
    </motion.h2>
  );
};

export default SectionTitle;
