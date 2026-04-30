import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContentSection from "@/components/ContentSection";
import ResourceLink from "@/components/ResourceLink";
import teachersImg from "@/assets/teachers-module.png";

const Docentes = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="bg-gradient-to-br from-background via-secondary to-accent/40 py-16 border-b border-border">
        <div className="container flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="font-heading text-4xl font-extrabold text-foreground mb-3">
              Módulo Docentes
            </h1>
            <p className="text-muted-foreground text-lg max-w-md">
              Herramientas pedagógicas, guías didácticas y estrategias para abordar la Educación Sexual Integral en el aula.
            </p>
          </div>
          <img src={teachersImg} alt="Docentes" loading="lazy" width={300} height={225} className="shrink-0" />
        </div>
      </section>

      <main className="container py-12 flex-1">
        <ContentSection title="Marco normativo de la ESI">
          <p>
            La Educación Sexual Integral está respaldada por marcos legales y normativas que establecen la obligatoriedad de su enseñanza. Conocer este marco te ayudará a fundamentar tu práctica docente.
          </p>
          <p>[Agrega aquí tu contenido sobre leyes y normativas de ESI]</p>
        </ContentSection>

        <ContentSection title="Estrategias didácticas">
          <p>
            Abordar la ESI en el aula requiere planificación y sensibilidad. Aquí encontrarás actividades, dinámicas y metodologías para trabajar estos temas de manera efectiva con tus estudiantes.
          </p>
          <p>[Agrega aquí tus estrategias pedagógicas y actividades sugeridas]</p>
        </ContentSection>

        <ContentSection title="Manejo de situaciones en el aula">
          <p>
            A veces surgen preguntas o situaciones inesperadas. Prepárate para manejarlas con profesionalismo y empatía, creando un ambiente seguro para el aprendizaje.
          </p>
          <p>[Agrega aquí orientaciones para situaciones comunes en el aula]</p>
        </ContentSection>

        <ContentSection title="Inclusión y diversidad">
          <p>
            La ESI debe ser inclusiva y respetar la diversidad. Conoce cómo adaptar tus contenidos para que sean accesibles y respetuosos con todos los estudiantes.
          </p>
          <p>[Agrega aquí tu contenido sobre enfoque inclusivo y diversidad]</p>
        </ContentSection>

        <section className="mt-12">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4 border-b border-border pb-2">
            📚 Recursos y enlaces
          </h2>
          <div className="grid md:grid-cols-2 gap-3 mt-4">
            <ResourceLink
              title="UNESCO - Orientaciones sobre ESI"
              url="https://www.unesco.org/es"
              description="Guía técnica internacional sobre educación sexual integral."
            />
            <ResourceLink
              title="Material didáctico ESI"
              url="#"
              description="Cuadernillos y planificaciones para el aula."
            />
            <ResourceLink
              title="[Agrega tu enlace aquí]"
              url="#"
              description="Descripción del recurso."
            />
            <ResourceLink
              title="[Agrega tu enlace aquí]"
              url="#"
              description="Descripción del recurso."
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Docentes;
