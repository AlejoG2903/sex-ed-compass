import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ModuleCardProps {
  title: string;
  description: string;
  image: string;
  to: string;
  gradient: string;
  className?: string;
}

const ModuleCard = ({ title, description, image, to, gradient, className = "" }: ModuleCardProps) => {
  return (
    <Link
      to={to}
      className={`group relative overflow-hidden rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${className}`}
    >
      <div className={`absolute inset-0 opacity-10 ${gradient}`} />
      <div className="relative z-10 flex flex-col h-full">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-48 object-contain mb-4"
        />
        <h3 className="font-heading text-xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground flex-1">{description}</p>
        <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
          Explorar módulo <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </Link>
  );
};

export default ModuleCard;
