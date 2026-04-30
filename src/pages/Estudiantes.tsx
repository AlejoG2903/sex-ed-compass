import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContentSection from "@/components/ContentSection";
import ResourceLink from "@/components/ResourceLink";
import studentsImg from "@/assets/students-module.png";

const Estudiantes = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-background via-secondary to-accent/40 py-16 border-b border-border">
        <div className="container flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="font-heading text-4xl font-extrabold text-foreground mb-3">
              Módulo Estudiantes
            </h1>
            <p className="text-muted-foreground text-lg max-w-md">
              Información clara, accesible y confiable pensada especialmente para ti. Aprende sobre tu cuerpo, relaciones saludables y tus derechos.
            </p>
          </div>
          <img src={studentsImg} alt="Estudiantes" loading="lazy" width={300} height={225} className="shrink-0" />
        </div>
      </section>

      <main className="container py-12 flex-1">
        <ContentSection title="Conociendo tu cuerpo">
          <p>
            Tu cuerpo pasa por muchos cambios durante la adolescencia. Es normal tener preguntas sobre lo que está sucediendo. Aquí encontrarás información sobre la pubertad, los cambios físicos y emocionales que experimentas, y por qué es importante cuidar tu salud.
          </p>
          <p>
            [Agrega aquí tu contenido sobre desarrollo corporal, pubertad y cambios físicos]
          </p>
        </ContentSection>

        <ContentSection title="Relaciones saludables">
          <p>
            Aprender a construir relaciones respetuosas es fundamental. Esto incluye amistades, relaciones familiares y, eventualmente, relaciones románticas. Aquí exploraremos qué hace que una relación sea saludable.
          </p>
          <p>
            [Agrega aquí tu contenido sobre relaciones interpersonales, consentimiento y comunicación]
          </p>
        </ContentSection>

        <ContentSection title="Tus derechos">
          <p>
            Tienes derecho a recibir información veraz, a ser respetado/a, a tomar decisiones informadas sobre tu cuerpo y a vivir libre de violencia. Conocer tus derechos te empodera.
          </p>
          <p>
            [Agrega aquí tu contenido sobre derechos sexuales y reproductivos de los jóvenes]
          </p>
        </ContentSection>

        <ContentSection title="Prevención y cuidado">
          <p>
            La prevención es clave para tu bienestar. Aquí encontrarás información sobre métodos anticonceptivos, prevención de ITS y la importancia de las consultas médicas regulares.
          </p>
          <p>
            [Agrega aquí tu contenido sobre prevención, salud sexual y autocuidado]
          </p>
        </ContentSection>

        {/* Resources */}
        <section className="mt-12">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4 border-b border-border pb-2">
            📚 Recursos y enlaces
          </h2>
          <div className="grid md:grid-cols-2 gap-3 mt-4">
            <ResourceLink
              title="OMS - Salud del adolescente"
              url="https://www.who.int/es"
              description="Información de la Organización Mundial de la Salud sobre salud adolescente."
            />
            <ResourceLink
              title="UNICEF - Educación"
              url="https://www.unicef.org/es"
              description="Recursos educativos de UNICEF sobre derechos de niños y adolescentes."
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

export default Estudiantes;
