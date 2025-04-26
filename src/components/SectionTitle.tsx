
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionTitle = ({ children, className }: SectionTitleProps) => {
  return (
    <h2 className={cn("text-4xl md:text-5xl font-playfair font-bold mb-8 text-white", className)}>
      {children}
    </h2>
  );
};

export default SectionTitle;
