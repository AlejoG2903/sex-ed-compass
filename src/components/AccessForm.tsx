import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { LogIn, KeyRound } from "lucide-react";

const ACCESS_CODES: Record<string, { code: string; path: string; label: string }> = {
  docentes: { code: "0210", path: "/docentes", label: "Docentes" },
  padres: { code: "2009", path: "/padres", label: "Padres" },
};

const AccessForm = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState<string>("");
  const [code, setCode] = useState("");

  const isStudent = role === "estudiantes";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!role) {
      toast.error("Selecciona un perfil para continuar");
      return;
    }
    if (isStudent) {
      navigate("/estudiantes");
      return;
    }
    const entry = ACCESS_CODES[role];
    if (entry && code.trim() === entry.code) {
      toast.success(`Acceso concedido al módulo de ${entry.label}`);
      navigate(entry.path);
    } else {
      toast.error("Código de acceso incorrecto");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-card border border-border rounded-2xl shadow-lg p-6 md:p-8 max-w-2xl mx-auto"
    >
      <div className="text-center mb-6">
        <h2 className="font-heading text-2xl font-bold text-foreground">
          Ingresa a tu módulo
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          Selecciona tu perfil e ingresa tu código único de acceso.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="role">Perfil</Label>
          <Select value={role} onValueChange={(v) => { setRole(v); setCode(""); }}>
            <SelectTrigger id="role">
              <SelectValue placeholder="Selecciona tu perfil" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="estudiantes">Estudiante</SelectItem>
              <SelectItem value="docentes">Docente</SelectItem>
              <SelectItem value="padres">Padre / Madre de familia</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="code">Código de acceso</Label>
          <div className="relative">
            <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="code"
              type="password"
              inputMode="numeric"
              maxLength={10}
              placeholder={isStudent ? "No requerido para estudiantes" : "Ingresa tu código"}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              disabled={isStudent}
              className="pl-9"
            />
          </div>
        </div>
      </div>

      <Button type="submit" size="lg" className="w-full mt-6">
        <LogIn className="h-4 w-4" />
        {isStudent ? "Ingresar como estudiante" : "Validar código e ingresar"}
      </Button>

      <p className="text-xs text-muted-foreground text-center mt-4">
        Los estudiantes pueden ingresar libremente. Docentes y padres requieren código único.
      </p>
    </form>
  );
};

export default AccessForm;