
import { Package } from "lucide-react";
import { motion } from "framer-motion";

interface ProductCardProps {
  title: string;
  description?: string;
}

const ProductCard = ({ title, description }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="glass-card"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Package className="w-8 h-8 text-forno-green mb-4" />
      </motion.div>
      <h3 className="text-xl font-playfair mb-2">{title}</h3>
      {description && <p className="text-gray-300">{description}</p>}
    </motion.div>
  );
};

export default ProductCard;
