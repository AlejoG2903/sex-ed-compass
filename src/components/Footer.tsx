import { BookOpen, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            <span className="font-heading font-semibold text-foreground">Educación Sexual Integral</span>
          </div>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Hecho con <Heart className="h-3 w-3 text-accent" /> para la educación
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
