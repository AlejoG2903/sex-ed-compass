import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContentSection from "@/components/ContentSection";
import ResourceLink from "@/components/ResourceLink";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import studentsImg from "@/assets/students-module.png";

const Estudiantes = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-background via-secondary to-accent/40 py-16 border-b border-border">
        <div className="container flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="font-heading text-6xl font-extrabold text-foreground mb-3">
              Estudiantes
            </h1>
          </div>
          <img src={studentsImg} alt="Estudiantes" loading="lazy" width={650} height={225} className="shrink-0" />
        </div>
      </section>

      <main className="container py-12 flex-1">
        <ContentSection title="¿Qué es la Educación Sexual Integral?">
          <p>
            La Educación Sexual Integral (ESI) es un enfoque educativo que busca brindar a niños, niñas y adolescentes una comprensión amplia, científica y progresiva de la sexualidad humana. No se limita únicamente a la dimensión biológica o reproductiva, sino que abarca aspectos emocionales, sociales, éticos y culturales que influyen en el desarrollo integral de la persona.
          </p>
          <p>
            Su propósito principal es promover el bienestar, la toma de decisiones informadas y el ejercicio responsable de los derechos sexuales y reproductivos, en concordancia con los principios de derechos humanos y desarrollo integral.
          </p>
          <p>
            De acuerdo con la Organización Mundial de la Salud, la educación sexual integral debe entenderse como un proceso estructurado de enseñanza y aprendizaje sobre los aspectos cognitivos, emocionales, físicos y sociales de la sexualidad. Está diseñado para aportar conocimientos basados en evidencia científica, habilidades para la vida y actitudes positivas que les permitan desarrollar relaciones saludables, respetuosas y seguras.
          </p>
        </ContentSection>

        <ContentSection title="Desarrollo del cuerpo y cambios en la adolescencia">
          <p>
                La adolescencia es una etapa del desarrollo humano en la que ocurren transformaciones profundas a nivel biológico, psicológico, emocional y social. No se trata únicamente de cambios físicos, sino de un proceso integral en el que la persona va construyendo su identidad, su autonomía y su forma de relacionarse con el entorno.
              </p>
              <p>
                Durante este periodo, los adolescentes comienzan a desarrollar mayor independencia, cuestionan normas, exploran nuevas experiencias y consolidan su identidad personal. También es una etapa en la que se fortalecen las relaciones sociales y se da una transición progresiva hacia la vida adulta.
              </p>

              <p className="font-semibold">Cambios corporales (biológicos y físicos)</p>
              <p>Estos cambios pueden generar curiosidad, inseguridad o preocupación, por lo que es importante que la escuela brinde información clara y sin prejuicios.</p>
              <p className="font-medium">En las mujeres:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Desarrollo de los senos.</li>
                <li>Ensanchamiento de caderas.</li>
                <li>Aparición de vello en axilas y zona púbica.</li>
                <li>Inicio del ciclo menstrual (menarquia).</li>
                <li>Cambios en la piel como aumento de grasa o aparición de acné.</li>
                <li>Estirón de crecimiento en talla y peso.</li>
              </ul>
              <p className="font-medium">En los hombres:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Crecimiento de los testículos y pene.</li>
                <li>Aparición de vello facial, axilar y púbico.</li>
                <li>Cambio en la voz (más grave).</li>
                <li>Aumento de masa muscular.</li>
                <li>Primeras eyaculaciones o sueños húmedos.</li>
                <li>Estirón de crecimiento en talla y peso.</li>
              </ul>
              <p className="font-medium">Cambios en ambos sexos:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Mayor sudoración y cambios en el olor corporal.</li>
                <li>Desarrollo de caracteres sexuales secundarios.</li>
                <li>Cambios hormonales que influyen en el estado de ánimo.</li>
                <li>Aceleración del crecimiento físico.</li>
              </ul>
              <p>Estos cambios no ocurren al mismo ritmo en todas las personas, lo cual es importante normalizar dentro del aula para evitar comparaciones o burlas.</p>

              <p className="font-semibold">Cambios emocionales</p>
              <p>Debido al desarrollo cerebral, hormonal y social, se pueden observar:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Cambios frecuentes de ánimo sin una causa evidente.</li>
                <li>Mayor sensibilidad emocional ante críticas o comentarios.</li>
                <li>Necesidad de privacidad y espacio personal.</li>
                <li>Búsqueda de independencia emocional respecto a la familia.</li>
                <li>Mayor importancia de la aceptación por parte del grupo social.</li>
                <li>Incremento de la autoestima fluctuante.</li>
                <li>Dificultad para manejar emociones intensas como enojo, tristeza o frustración.</li>
                <li>Desarrollo progresivo de la autorreflexión y autoconciencia.</li>
              </ul>

              <p className="font-semibold">Cambios sociales</p>
              <p>Durante esta etapa, los adolescentes:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Dedican más tiempo a sus amistades que a la familia.</li>
                <li>Buscan pertenecer a grupos sociales para sentirse aceptados.</li>
                <li>Experimentan mayor interés en relaciones afectivas o románticas.</li>
                <li>Pueden presentar mayor influencia del grupo de pares.</li>
                <li>Surgen conflictos relacionados con la búsqueda de autonomía.</li>
              </ul>

              <p className="font-semibold">Cambios cognitivos</p>
              <p>En esta etapa se desarrolla la capacidad de pensamiento más complejo:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Mayor capacidad de razonamiento lógico.</li>
                <li>Desarrollo del pensamiento crítico.</li>
                <li>Capacidad para reflexionar sobre el futuro.</li>
                <li>Búsqueda de identidad personal.</li>
                <li>Mayor cuestionamiento de normas y reglas.</li>
                <li>Interés por tomar decisiones propias.</li>
              </ul>

              <p className="font-semibold">Importancia de comprender estos cambios</p>
              <p>Comprender los cambios de la adolescencia es fundamental para que los docentes puedan:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Evitar interpretaciones erróneas del comportamiento de los adolescentes.</li>
                <li>Brindar acompañamiento emocional adecuado.</li>
                <li>Promover ambientes libres de burlas o discriminación.</li>
                <li>Favorecer la autoestima y el respeto.</li>
                <li>Orientar desde el acompañamiento.</li>
              </ul>
              <p>La adolescencia no debe verse como una etapa problemática, sino como un proceso de crecimiento en el que los estudiantes necesitan guía, comprensión y espacios seguros para desarrollarse integralmente.</p>
              <p>La ESI fomenta el cuidado del cuerpo como un espacio propio que debe ser respetado, promoviendo hábitos de higiene, autocuidado y reconocimiento de límites personales. Tu cuerpo te pertenece y es importante que lo conozcas y valores.</p>
        </ContentSection>

        <ContentSection title="Emociones, identidad y relaciones saludables">
          <p>
            La sexualidad no solo está relacionada con el cuerpo, sino también con las emociones, los vínculos y la construcción de tu identidad personal. Por ello, es fundamental comprender y gestionar tus emociones como parte de tu desarrollo integral.
          </p>
          <p>
            Durante la adolescencia es común experimentar cambios en la forma de relacionarte con los demás, así como el fortalecimiento de tu identidad personal. Aquí te ayudamos a comprender estas emociones, a expresarlas de manera adecuada y a construir relaciones basadas en el respeto, la empatía y la comunicación asertiva. Fomentamos habilidades sociales que permiten resolver conflictos de manera pacífica y establecer vínculos afectivos sanos, libres de violencia o dependencia emocional.
          </p>
        </ContentSection>

        {/* Temas adicionales con Accordion */}
        <h2 className="font-heading text-2xl font-bold text-foreground mb-8 mt-12">Profundiza en estos temas</h2>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="derechos">
            <AccordionTrigger className="text-base">Tus derechos</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p>Tienes derecho a recibir información veraz, a ser respetado/a, a tomar decisiones informadas sobre tu cuerpo y a vivir libre de violencia. Estos son derechos sexuales y reproductivos que te pertenecen.</p>
              <p>Conocer tus derechos te empodera y te permite exigir que sean respetados. La ESI se basa en la idea de que debes comprender la sexualidad de manera respetuosa, informada y libre de prejuicios, en igualdad de condiciones independientemente de tu género, orientación sexual o identidad.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="consentimiento">
            <AccordionTrigger className="text-base">Consentimiento</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p>El consentimiento es uno de los conceptos más importantes dentro de la educación sexual integral. Consiste en la aceptación libre, consciente y voluntaria de cualquier interacción física, afectiva o emocional. Debe darse sin presiones, amenazas o manipulaciones y puede retirarse en cualquier momento.</p>
              <p>Comprender este concepto permite construir relaciones basadas en el respeto mutuo y prevenir situaciones de violencia o abuso. Por esta razón, la ESI enseña que todas las personas tienen derecho a establecer límites sobre su cuerpo y sus relaciones, promoviendo el respeto por las decisiones propias y ajenas.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="respeto-diversidad">
            <AccordionTrigger className="text-base">Respeto y diversidad</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p>La ESI reconoce y valora la diversidad humana, incluyendo diferentes identidades, orientaciones y expresiones de género, promoviendo una convivencia respetuosa e inclusiva.</p>
              <div className="space-y-3 mt-4">
                <div>
                  <p className="font-semibold text-sm">Identidad de género:</p>
                  <p className="text-sm text-muted-foreground">Hace referencia a cómo una persona se siente e identifica consigo misma.</p>
                </div>
                <div>
                  <p className="font-semibold text-sm">Orientación sexual:</p>
                  <p className="text-sm text-muted-foreground">Se relaciona con la atracción emocional, afectiva o romántica hacia otras personas.</p>
                </div>
                <div>
                  <p className="font-semibold text-sm">Expresión de género:</p>
                  <p className="text-sm text-muted-foreground">Es la manera en que una persona expresa su identidad mediante la ropa, la forma de hablar, el comportamiento, la apariencia y la manera de relacionarse.</p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="autoestima">
            <AccordionTrigger className="text-base">Autoestima, identidad y autoconocimiento</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p>La autoestima es la valoración que cada persona tiene de sí misma y se construye a partir de las experiencias, relaciones y pensamientos que desarrolla durante su vida. En la adolescencia, esta dimensión cobra gran importancia debido a los cambios físicos, emocionales y sociales propios de esta etapa.</p>
              <p>El autoconocimiento permite reconocer emociones, gustos, límites, fortalezas y aspectos por mejorar. Cuando una persona se conoce a sí misma, puede tomar decisiones más conscientes y actuar de acuerdo con sus valores y necesidades.</p>
              <p>Asimismo, favorece la construcción de una identidad sólida y saludable, evitando depender completamente de la aprobación de otras personas. La Educación Sexual Integral promueve el fortalecimiento de la autoestima y el reconocimiento personal como herramientas fundamentales para el cuidado emocional y la toma de decisiones responsables.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="redes-sociales">
            <AccordionTrigger className="text-base">Redes sociales y sexualidad</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p>Actualmente, gran parte de la información sobre sexualidad que reciben los adolescentes proviene de redes sociales, internet o grupos de amigos. Sin embargo, muchas de estas fuentes contienen información falsa, estereotipos o contenidos que pueden afectar la percepción sobre el cuerpo, las relaciones y la sexualidad.</p>
              <p>Esta desinformación puede influir en la percepción del cuerpo, las relaciones afectivas, la autoestima y las decisiones personales. Por eso es importante desarrollar pensamiento crítico y verificar la información antes de creerla o compartirla.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="sexting-grooming">
            <AccordionTrigger className="text-base">Sexting, grooming y riesgos digitales</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p className="font-semibold">Sexting</p>
              <p>Es el envío de mensajes, fotos o videos con contenido sexual a través de internet o redes sociales. Compartir imágenes íntimas puede generar riesgos si el contenido es difundido sin consentimiento.</p>
              
              <p className="font-semibold mt-4">Grooming</p>
              <p>Es cuando un adulto utiliza internet o redes sociales para engañar a menores de edad con fines sexuales. Algunas señales de alerta son:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Personas desconocidas que piden fotos íntimas</li>
                <li>Conversaciones incómodas</li>
                <li>Solicitudes de encuentros secretos</li>
                <li>Amenazas o manipulación</li>
              </ul>
              <p className="text-sm text-red-600 font-semibold mt-2">Ante cualquier situación de riesgo es importante acudir a un adulto de confianza.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="presion-social">
            <AccordionTrigger className="text-base">Presión social y toma de decisiones</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p>Durante la adolescencia es común experimentar presión por parte de amigos, redes sociales o grupos cercanos. Muchas veces los adolescentes sienten la necesidad de actuar de determinada manera para ser aceptados o evitar críticas, incluso cuando esas decisiones no representan lo que realmente desean.</p>
              <p>La presión social puede influir en comportamientos relacionados con la sexualidad, las relaciones afectivas, la imagen corporal o la manera de actuar frente a los demás.</p>
              <p>Tomar decisiones responsables implica analizar consecuencias, reconocer riesgos, identificar límites personales y actuar desde el respeto hacia uno mismo y hacia los demás.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="mitos">
            <AccordionTrigger className="text-base">Mitos y desinformación sobre sexualidad</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p>Existen múltiples mitos relacionados con la sexualidad que se transmiten entre amigos, redes sociales o medios digitales sin respaldo científico. Estas ideas erróneas pueden generar miedo, desinformación o decisiones inadecuadas.</p>
              <p>La desinformación puede afectar la salud física y emocional, además de influir negativamente en las relaciones interpersonales y en la percepción del cuerpo. Por esta razón, es fundamental acceder a información científica y confiable que permita comprender la sexualidad desde una perspectiva responsable y respetuosa.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="embarazo">
            <AccordionTrigger className="text-base">Embarazo en la adolescencia</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p>El embarazo en la adolescencia ocurre cuando una persona queda embarazada antes de alcanzar la adultez. Durante la adolescencia muchas personas aún se encuentran en proceso de construcción de su identidad, desarrollo emocional y consolidación de proyectos personales y académicos.</p>
              <p>Un embarazo puede representar cambios importantes en la continuidad escolar, la salud física y emocional, las relaciones familiares, la estabilidad económica, el proyecto de vida y la salud mental.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="anticonceptivos">
            <AccordionTrigger className="text-base">Métodos anticonceptivos</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p>Los métodos anticonceptivos son herramientas utilizadas para prevenir embarazos y en algunos casos, reducir el riesgo de infecciones de transmisión sexual. Conocer cómo funcionan permite que las personas puedan tomar decisiones responsables e informadas sobre su salud sexual.</p>
              <p className="font-semibold mt-4">Preservativo o condón</p>
              <p>Es uno de los métodos más importantes porque además de prevenir embarazos también ayuda a reducir el riesgo de infecciones de transmisión sexual. El preservativo actúa como una barrera física, evita el contacto con fluidos sexuales y es el único método que protege simultáneamente frente a embarazos e infecciones.</p>
              <p className="font-semibold mt-4">Métodos hormonales</p>
              <p>Son métodos que funcionan mediante hormonas para evitar la ovulación o dificultar el embarazo (pastillas anticonceptivas, inyecciones, implantes subdérmicos, parche anticonceptivo). Estos métodos deben utilizarse bajo orientación médica y no protegen frente a ITS.</p>
              <p className="font-semibold mt-4">Dispositivo Intrauterino (DIU)</p>
              <p>Es un dispositivo colocado por profesionales de salud dentro del útero para prevenir embarazos durante varios años.</p>
              <p className="font-semibold mt-4">Anticoncepción de emergencia</p>
              <p>También conocida como "pastilla del día después", se utiliza únicamente en situaciones de emergencia y no debe reemplazar un método anticonceptivo regular.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="its">
            <AccordionTrigger className="text-base">Infecciones de transmisión sexual (ITS)</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p>Las infecciones de transmisión sexual (ITS) son infecciones que pueden transmitirse principalmente mediante relaciones sexuales sin protección. Algunas ITS son: VIH, sífilis, gonorrea, herpes genital, virus del Papiloma Humano (VPH) y clamidia.</p>
              <p>Muchas ITS pueden no presentar síntomas al inicio, por lo que algunas personas pueden transmitirlas sin saberlo.</p>
              <p className="font-semibold mt-4">Las ITS pueden transmitirse mediante:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Relaciones sexuales vaginales</li>
                <li>Relaciones sexuales anales</li>
                <li>Relaciones sexuales orales</li>
                <li>Contacto con fluidos corporales infectados</li>
              </ul>
              <p className="font-semibold mt-4">La prevención incluye:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Uso correcto del preservativo</li>
                <li>Acceso a información confiable</li>
                <li>Atención médica</li>
                <li>Comunicación responsable en las relaciones</li>
                <li>Evitar situaciones de riesgo</li>
              </ul>
              <p className="text-sm mt-4">Existen muchos mitos alrededor de las ITS que generan desinformación y estigmatización. Cualquier persona puede estar en riesgo si no existen medidas de protección y autocuidado.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="masturbacion">
            <AccordionTrigger className="text-base">Masturbación y autoconocimiento corporal</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p>La masturbación es la estimulación de los genitales con fines de placer y forma parte del autoconocimiento corporal. Durante la adolescencia muchas personas experimentan curiosidad sobre su cuerpo y comienzan a explorar sensaciones relacionadas con el placer y la sexualidad.</p>
              <p>Es importante comprender que la masturbación es una conducta privada y que, desde el punto de vista científico, no representa un problema para la salud cuando se vive de manera responsable y sin afectar el bienestar emocional, social o las actividades cotidianas.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="pornografia">
            <AccordionTrigger className="text-base">Pornografía y redes sociales</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p>Actualmente muchos adolescentes tienen acceso temprano a contenido sexual explícito a través de internet, redes sociales o páginas pornográficas. La pornografía presenta representaciones irreales de las relaciones sexuales, los cuerpos y las relaciones afectivas.</p>
              <p>En muchos casos muestra situaciones alejadas de la realidad, donde no existen conversaciones sobre emociones, consentimiento, respeto o responsabilidad. El consumo frecuente de este contenido puede influir en la percepción del cuerpo, las expectativas sobre las relaciones sexuales, la autoestima, la forma de comprender el consentimiento y la visión del afecto y las relaciones.</p>
              <p>Además, algunas producciones pornográficas pueden reforzar violencia, machismo, cosificación, relaciones poco saludables y estereotipos dañinos.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Resources */}
        <section className="mt-12">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4 border-b border-border pb-2">
            📚 Recursos y enlaces
          </h2>
          <div className="grid md:grid-cols-2 gap-3 mt-4">
            <ResourceLink
              title="Profamilia - Salud Sexual y Reproductiva"
              url="https://profamilia.org.co/"
            />
            <ResourceLink
              title="GOV.CO- La educación para la sexualidad integral"
              url="https://www.educacionbogota.edu.co/portal_institucional/comunicado-prensa/pronunciamiento-frente-a-caso-que-involucra-a-dos-menores"
            />
            <ResourceLink
              title="ICBF - Derechos sexuales y reproductivos."
              url="https://www.icbf.gov.co/sites/default/files/modulo_3.pdf"
            />
            <ResourceLink
              title="UNESCO - La educación integral en la sexualidad"
              url="https://www.youtube.com/watch?v=k3QfxGfRaUE&t=25s"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Estudiantes;
