import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ModuleCard from "@/components/ModuleCard";
import AccessForm from "@/components/AccessForm";
import heroImage from "@/assets/hero-education.jpg";
import studentsImg from "@/assets/students-module.png";
import teachersImg from "@/assets/teachers-module.png";
import parentsImg from "@/assets/parents-module.png";
import { Heart, Shield, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative gradient-hero py-20 overflow-hidden">
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="animate-fade-in">
              <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground leading-tight mb-4">
                Educación Sexual
                <br />
                <span className="text-primary">Integral</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-md">
                Un espacio seguro y confiable para aprender sobre educación sexual integral. Información basada en evidencia para estudiantes, docentes y padres de familia.
              </p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <img
                src={heroImage}
                alt="Estudiantes aprendiendo juntos"
                width={1920}
                height={800}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-14 bg-card">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Heart, title: "Respeto", desc: "Valoramos la diversidad y promovemos el respeto mutuo." },
              { icon: Shield, title: "Seguridad", desc: "Información confiable y basada en evidencia científica." },
              { icon: Users, title: "Comunidad", desc: "Un espacio inclusivo para todas las familias." },
            ].map((v) => (
              <div key={v.title} className="flex items-start gap-4 p-5 rounded-lg bg-background border border-border">
                <v.icon className="h-8 w-8 text-primary shrink-0" />
                <div>
                  <h3 className="font-heading font-semibold text-foreground">{v.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Bento Grid */}
      <section className="py-16">
        <div className="container">
          <div className="mb-12">
            <AccessForm />
          </div>
          <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-3">
            Explora los Módulos
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-lg mx-auto">
            Contenido adaptado para cada audiencia. Selecciona tu módulo y comienza a aprender.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <ModuleCard
              title="Estudiantes"
              description="Información clara y accesible pensada para jóvenes. Aprende sobre tu cuerpo, relaciones saludables y tus derechos."
              image={studentsImg}
              to="/estudiantes"
              gradient="gradient-students"
              className="md:row-span-1"
            />
            <ModuleCard
              title="Docentes"
              description="Recursos pedagógicos, guías didácticas y estrategias para abordar la ESI en el aula de forma efectiva."
              image={teachersImg}
              to="/docentes"
              gradient="gradient-teachers"
            />
            <ModuleCard
              title="Padres y Familias"
              description="Orientación para acompañar a tus hijos en su desarrollo. Cómo hablar de estos temas en casa con confianza."
              image={parentsImg}
              to="/padres"
              gradient="gradient-parents"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
