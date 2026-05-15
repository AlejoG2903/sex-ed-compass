import { BookOpen, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="font-heading font-semibold text-foreground">ESI</span>
          </div>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Aprender sobre sexualidad también es cuidarse <Heart className="h-5 w-5 text-accent" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
