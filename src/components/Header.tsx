import { Link } from "react-router-dom";
import { BookOpen, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";

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
          <Button asChild size="sm">
            <Link to="/login">
              <LogIn className="h-4 w-4" />
              Ingresar
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
