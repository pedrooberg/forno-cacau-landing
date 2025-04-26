
import { Truck, Utensils } from "lucide-react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  icon: "truck" | "utensils";
}

const FeatureCard = ({ title, icon }: FeatureCardProps) => {
  const Icon = icon === "truck" ? Truck : Utensils;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="glass-card flex items-center gap-3"
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.8 }}
      >
        <Icon className="w-5 h-5 text-forno-green shrink-0" />
      </motion.div>
      <span>{title}</span>
    </motion.div>
  );
};

export default FeatureCard;
