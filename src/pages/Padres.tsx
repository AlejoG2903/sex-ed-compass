import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContentSection from "@/components/ContentSection";
import ResourceLink from "@/components/ResourceLink";
import parentsImg from "@/assets/parents-module.png";

const Padres = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="bg-gradient-to-br from-background via-secondary to-accent/40 py-16 border-b border-border">
        <div className="container flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="font-heading text-4xl font-extrabold text-foreground mb-3">
              Módulo Padres y Familias
            </h1>
            <p className="text-muted-foreground text-lg max-w-md">
              Orientación y recursos para acompañar a tus hijos en su desarrollo integral con confianza y cariño.
            </p>
          </div>
          <img src={parentsImg} alt="Familias" loading="lazy" width={300} height={225} className="shrink-0" />
        </div>
      </section>

      <main className="container py-12 flex-1">
        <ContentSection title="Cómo hablar con tus hijos">
          <p>
            Iniciar conversaciones sobre sexualidad puede parecer difícil, pero es esencial. Aquí encontrarás consejos prácticos para abordar estos temas según la edad de tus hijos, con naturalidad y sin tabúes.
          </p>
          <p>[Agrega aquí tu contenido sobre comunicación familiar sobre sexualidad]</p>
        </ContentSection>

        <ContentSection title="Acompañamiento en la adolescencia">
          <p>
            La adolescencia es una etapa de grandes cambios. Tu apoyo es fundamental. Aprende cómo acompañar a tus hijos durante esta transición, respetando su autonomía y fortaleciendo la confianza.
          </p>
          <p>[Agrega aquí tu contenido sobre acompañamiento durante la pubertad y adolescencia]</p>
        </ContentSection>

        <ContentSection title="Señales de alerta">
          <p>
            Es importante conocer las señales que pueden indicar situaciones de riesgo. Saber identificarlas te permite actuar a tiempo y proteger a tus hijos.
          </p>
          <p>[Agrega aquí tu contenido sobre identificación de señales de abuso o riesgo]</p>
        </ContentSection>

        <ContentSection title="Crianza respetuosa y ESI">
          <p>
            La educación sexual integral comienza en casa. Descubre cómo integrar estos valores en la crianza diaria, promoviendo el respeto, la igualdad y el cuidado del cuerpo.
          </p>
          <p>[Agrega aquí tu contenido sobre crianza con perspectiva de ESI]</p>
        </ContentSection>

        <section className="mt-12">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4 border-b border-border pb-2">
            📚 Recursos y enlaces
          </h2>
          <div className="grid md:grid-cols-2 gap-3 mt-4">
            <ResourceLink
              title="Guía para padres - ESI"
              url="#"
              description="Guía práctica para hablar de sexualidad en familia."
            />
            <ResourceLink
              title="Líneas de ayuda y orientación"
              url="#"
              description="Teléfonos y contactos útiles para situaciones de emergencia."
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

export default Padres;
