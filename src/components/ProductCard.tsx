
import { Package } from "lucide-react";

interface ProductCardProps {
  title: string;
  description?: string;
}

const ProductCard = ({ title, description }: ProductCardProps) => {
  return (
    <div className="glass-card">
      <Package className="w-8 h-8 text-forno-green mb-4" />
      <h3 className="text-xl font-playfair mb-2">{title}</h3>
      {description && <p className="text-gray-300">{description}</p>}
    </div>
  );
};

export default ProductCard;
