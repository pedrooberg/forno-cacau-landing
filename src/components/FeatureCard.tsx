
import { Truck, Utensils } from "lucide-react";

interface FeatureCardProps {
  title: string;
  icon: "truck" | "utensils";
}

const FeatureCard = ({ title, icon }: FeatureCardProps) => {
  const Icon = icon === "truck" ? Truck : Utensils;
  
  return (
    <div className="glass-card flex items-center gap-3">
      <Icon className="w-5 h-5 text-forno-green shrink-0" />
      <span>{title}</span>
    </div>
  );
};

export default FeatureCard;
