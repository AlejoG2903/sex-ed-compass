import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <BookOpen className="h-7 w-7 text-primary" />
          <span className="font-heading text-xl font-bold text-foreground">
            ESI
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/estudiantes" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Estudiantes
          </Link>
          <Link to="/docentes" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Docentes
          </Link>
          <Link to="/padres" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Padres
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
