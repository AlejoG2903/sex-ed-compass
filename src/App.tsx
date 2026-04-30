import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Estudiantes from "./pages/Estudiantes.tsx";
import Docentes from "./pages/Docentes.tsx";
import Padres from "./pages/Padres.tsx";
import Login from "./pages/Login.tsx";
import NotFound from "./pages/NotFound.tsx";
import RequireRole from "./components/RequireRole.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/estudiantes" element={<RequireRole role="estudiantes"><Estudiantes /></RequireRole>} />
          <Route path="/docentes" element={<RequireRole role="docentes"><Docentes /></RequireRole>} />
          <Route path="/padres" element={<RequireRole role="padres"><Padres /></RequireRole>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
