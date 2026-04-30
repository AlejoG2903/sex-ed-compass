import { Link, useNavigate } from "react-router-dom";
import { BookOpen, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { clearRole, getRole } from "@/lib/auth";

const Header = () => {
  const navigate = useNavigate();
  const role = getRole();
  const handleLogout = () => {
    clearRole();
    navigate("/", { replace: true });
  };
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link to={role ? `/${role}` : "/"} className="flex items-center gap-2">
          <BookOpen className="h-7 w-7 text-primary" />
          <span className="font-heading text-xl font-bold text-foreground">
            ESI
          </span>
        </Link>
        {role && (
          <nav className="flex items-center gap-4">
            <span className="hidden sm:inline text-sm text-muted-foreground capitalize">
              Módulo: <span className="text-foreground font-medium">{role}</span>
            </span>
            <Button size="sm" variant="outline" onClick={handleLogout}>
              <LogOut className="h-4 w-4" />
              Salir
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
