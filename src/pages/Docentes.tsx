import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContentSection from "@/components/ContentSection";
import ResourceLink from "@/components/ResourceLink";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import teachersImg from "@/assets/teachers-module.png";

const Docentes = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="bg-gradient-to-br from-background via-secondary to-accent/40 py-16 border-b border-border">
        <div className="container flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="font-heading text-6xl font-extrabold text-foreground mb-3">
              Docentes
            </h1>
          </div>
          <img src={teachersImg} alt="Docentes" loading="lazy" width={650} height={225} className="shrink-0" />
        </div>
      </section>

      <main className="container py-12 flex-1">
        <ContentSection title="¡Aprendamos juntos!">
          <p>
            La Educación Sexual Integral (ESI) es un proceso educativo que busca brindar conocimientos, habilidades, valores y herramientas para que niñas, niños y adolescentes vivan su sexualidad de manera saludable, responsable, segura y basada en el respeto. No se limita únicamente a la reproducción o al acto sexual, sino que aborda aspectos físicos, emocionales, sociales, psicológicos y culturales del desarrollo humano.
          </p>
          <p>
            La adolescencia representa una etapa de múltiples cambios y desafíos, por lo que la escuela cumple un papel fundamental como espacio de orientación, prevención y protección. Las decisiones tomadas durante esta etapa repercuten significativamente en la vida futura de los estudiantes, razón por la cual es importante fortalecer habilidades como la toma de decisiones, la comunicación asertiva y el proyecto de vida.
          </p>
          <p>
            La Educación Sexual Integral debe ser entendida como una responsabilidad compartida entre familia e institución educativa, donde docentes y directivos se convierten en figuras de apoyo, escucha y orientación.
          </p>
        </ContentSection>

        <h2 className="font-heading text-2xl font-bold text-foreground mb-8 mt-12">Módulos de formación</h2>

        <Accordion type="single" collapsible className="w-full">

          {/* MÓDULO 1 */}
          <AccordionItem value="modulo1">
            <AccordionTrigger className="text-base text-left">¿Qué es la Educación Sexual Integral?</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p>
                La UNESCO define la Educación Integral en Sexualidad como un proceso basado en un currículo que permite enseñar y aprender acerca de los aspectos cognitivos, emocionales, físicos y sociales de la sexualidad. Su objetivo es preparar a niñas, niños y adolescentes con conocimientos, habilidades, actitudes y valores que les permitan cuidar su salud, construir relaciones respetuosas y tomar decisiones responsables.
              </p>

              <p className="font-semibold">La educación sexual integral promueve:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>El bienestar y la dignidad.</li>
                <li>La toma de decisiones.</li>
                <li>Relaciones basadas en el respeto.</li>
                <li>La prevención de situaciones de riesgo.</li>
                <li>Los derechos sexuales y reproductivos.</li>
                <li>El desarrollo integral de los estudiantes.</li>
              </ul>

              <p className="font-semibold">¿Qué NO es la Educación Sexual Integral?</p>
              <p>
                La Educación Sexual Integral no busca promover conductas sexuales tempranas; por el contrario, fortalece el autocuidado, la responsabilidad y la toma de decisiones conscientes.
              </p>

              <p className="font-semibold">Importancia de la ESI en la escuela</p>
              <p>La escuela es un espacio de prevención y acompañamiento donde los estudiantes pueden recibir información clara, segura y confiable. Una educación sexual adecuada permite:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Prevenir embarazos adolescentes.</li>
                <li>Reducir riesgos de ITS y VIH.</li>
                <li>Fortalecer habilidades sociales.</li>
                <li>Promover relaciones saludables.</li>
                <li>Favorecer la igualdad de género.</li>
                <li>Prevenir violencias sexuales.</li>
              </ul>

              <p className="font-semibold">Rol del docente y del directivo</p>
              <p>El docente no reemplaza a la familia, pero sí cumple una función de orientación y protección. La ESI debe desarrollarse desde el respeto, la escucha y la información basada en evidencia. Los docentes y directivos deben:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Escuchar sin juzgar.</li>
                <li>Crear espacios seguros.</li>
                <li>Resolver dudas con lenguaje adecuado.</li>
                <li>Promover el respeto y la inclusión.</li>
                <li>Detectar señales de alerta.</li>
                <li>Activar rutas de atención cuando sea necesario.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* MÓDULO 2 */}
          <AccordionItem value="modulo2">
            <AccordionTrigger className="text-base text-left">La adolescencia y sus cambios</AccordionTrigger>
            <AccordionContent className="space-y-4">
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
              <p className="text-sm italic">Estos cambios no ocurren al mismo ritmo en todas las personas, lo cual es importante normalizar dentro del aula para evitar comparaciones o burlas.</p>

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
              <p className="text-sm italic">La adolescencia no debe verse como una etapa problemática, sino como un proceso de crecimiento en el que los estudiantes necesitan guía, comprensión y espacios seguros para desarrollarse integralmente.</p>
            </AccordionContent>
          </AccordionItem>

          {/* MÓDULO 3 */}
          <AccordionItem value="modulo3">
            <AccordionTrigger className="text-base text-left">La sexualidad y sus dimensiones</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p>
                La Organización Mundial de la Salud define la sexualidad como una dimensión central del ser humano presente a lo largo de toda la vida. Incluye: sexo, identidad y roles de género, orientación sexual, erotismo, placer, intimidad y reproducción. La sexualidad se expresa mediante pensamientos, emociones, valores, comportamientos y relaciones.
              </p>

              <p className="font-semibold">Elementos de la sexualidad</p>
              <p>La sexualidad está compuesta por varios elementos que no se reducen solo al cuerpo, sino que incluyen aspectos biológicos, sociales, emocionales y personales:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><span className="font-medium">Sexo:</span> características biológicas con las que nace una persona (genitales, hormonas, cromosomas).</li>
                <li><span className="font-medium">Género:</span> ideas, normas y roles que la sociedad ha construido sobre lo que "debe ser" un hombre o una mujer, variables según la cultura y el contexto.</li>
                <li><span className="font-medium">Erotismo:</span> capacidad de sentir placer, deseo y sensaciones agradables, física y emocionalmente.</li>
                <li><span className="font-medium">Reproductividad:</span> capacidad biológica de procrear, que incluye también la responsabilidad de cuidar, criar y acompañar.</li>
                <li><span className="font-medium">Identidad sexual:</span> forma en que cada persona se reconoce y se siente consigo misma en relación con su sexualidad.</li>
                <li><span className="font-medium">Expresión de género:</span> manera en que cada persona muestra su género al mundo a través de su forma de vestir, hablar o comportarse.</li>
                <li><span className="font-medium">Orientación sexual:</span> atracción emocional, afectiva o romántica que una persona siente hacia otras.</li>
                <li><span className="font-medium">Vínculos afectivos:</span> relaciones emocionales basadas en el cariño, la confianza, el respeto y el apoyo mutuo.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* MÓDULO 4 */}
          <AccordionItem value="modulo4">
            <AccordionTrigger className="text-base text-left">Género, respeto y diversidad</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p className="font-semibold">Roles y estereotipos de género</p>
              <p>Los roles de género son aprendidos socialmente y muchas veces generan desigualdad, dominación o discriminación. La ESI busca:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Promover igualdad de oportunidades.</li>
                <li>Evitar discriminación.</li>
                <li>Fortalecer relaciones basadas en el respeto.</li>
                <li>Prevenir violencia de género.</li>
              </ul>

              <p className="font-semibold">Diversidad y respeto</p>
              <p>
                La diversidad hace referencia a las diferencias que existen entre las personas en aspectos físicos, emocionales, culturales, sociales y personales. Cada estudiante piensa diferente, vive experiencias distintas, tiene una historia personal única y construye su identidad de manera individual. La escuela debe convertirse en un espacio donde todos se sientan seguros, escuchados y respetados.
              </p>
              <p>Promover la diversidad significa:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Evitar la discriminación.</li>
                <li>Favorecer la convivencia.</li>
                <li>Enseñar empatía.</li>
                <li>Reconocer las diferencias como parte natural de la sociedad.</li>
              </ul>

              <p className="font-semibold">¿Qué es la empatía?</p>
              <p>
                La empatía es la capacidad de comprender las emociones, pensamientos o situaciones de otra persona, intentando ponerse en su lugar sin juzgar. En el contexto escolar, la empatía ayuda a: reducir conflictos, prevenir el bullying, fortalecer la convivencia y crear ambientes seguros.
              </p>

              <p className="font-semibold">¿Qué es la discriminación?</p>
              <p>La discriminación ocurre cuando una persona recibe un trato injusto, ofensivo o excluyente debido a características personales como el género, apariencia, forma de pensar, expresión emocional, identidad o creencias. Puede generar:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Baja autoestima y ansiedad.</li>
                <li>Aislamiento social.</li>
                <li>Problemas emocionales y violencia escolar.</li>
              </ul>

              <p className="font-semibold">¿Qué debe promover la escuela desde la ESI?</p>

              <p className="font-medium">Respeto</p>
              <p>Implica reconocer el valor, la dignidad y los derechos de todas las personas. En el aula, esto significa enseñar a los estudiantes a escuchar sin burlas, respetar límites físicos y emocionales, utilizar un lenguaje adecuado, evitar agresiones y comprender que todas las personas merecen un trato digno. El docente debe intervenir inmediatamente ante faltas de respeto o conductas discriminatorias.</p>

              <p className="font-medium">Igualdad</p>
              <p>Garantizar que todas las personas tengan las mismas oportunidades y derechos sin importar su género. Implica evitar diferencias injustas, romper estereotipos y permitir la participación de todos en las mismas actividades. Cuando la escuela fomenta igualdad, disminuyen conductas machistas, se fortalecen relaciones más sanas y se previenen situaciones de violencia.</p>

              <p className="font-medium">Inclusión</p>
              <p>
                La inclusión educativa garantiza que todos los estudiantes se sientan aceptados, valorados y respetados. No se trata solo de "permitir que estén", sino de asegurar que puedan participar y sentirse parte de la comunidad educativa. Esto implica crear condiciones donde los estudiantes puedan expresarse sin miedo, evitar burlas y apodos ofensivos, y fomentar relaciones basadas en la empatía. Un estudiante que se siente incluido participa con más confianza, mejora su autoestima y disminuyen los sentimientos de aislamiento.
              </p>

              <p className="font-medium">Comunicación asertiva</p>
              <p>
                La comunicación asertiva permite expresar lo que se piensa, siente y necesita de manera clara, directa y respetuosa. Durante la adolescencia, muchos estudiantes tienen dificultades para expresar sus emociones, pedir ayuda o decir "no". La escuela debe enseñar a hablar con respeto incluso en desacuerdo, resolver diferencias mediante el diálogo y escuchar activamente. La comunicación asertiva también es una herramienta de protección: reduce la violencia escolar, las relaciones tóxicas y la presión social negativa.
              </p>

              <p className="font-medium">Resolución pacífica de conflictos</p>
              <p>
                La resolución pacífica de conflictos permite enfrentar los desacuerdos sin recurrir a la violencia. En la adolescencia pueden surgir conflictos relacionados con celos, burlas, relaciones afectivas, presión de grupo o el uso de redes sociales. La ESI promueve herramientas como el diálogo, la empatía, la escucha, el respeto hacia las diferencias y, cuando es necesario, la mediación de un tercero. Cuando los adolescentes aprenden a resolver conflictos de manera pacífica, mejoran la convivencia, reducen las agresiones y desarrollan mayor autocontrol.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* MÓDULO 5 */}
          <AccordionItem value="modulo5">
            <AccordionTrigger className="text-base text-left">Intimidad, autocuidado y prevención</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p className="font-semibold">Prevención de la violencia</p>
              <p>
                La prevención de la violencia en la ESI se refiere al conjunto de acciones educativas orientadas a evitar que niñas, niños y adolescentes sean víctimas o ejerzan cualquier forma de violencia física, emocional, sexual o digital. Su importancia radica en anticipar las situaciones de riesgo, identificarlas a tiempo y brindar herramientas para que los estudiantes puedan protegerse y establecer límites.
              </p>
              <p>Dentro de esta prevención, la escuela enseña a los estudiantes a:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><span className="font-medium">Reconocer límites personales:</span> entender hasta dónde se sienten cómodos o seguros y aprender a expresarlo.</li>
                <li><span className="font-medium">Identificar conductas inapropiadas:</span> detectar acciones o comentarios que faltan al respeto, invaden la privacidad o generan daño emocional o físico.</li>
                <li><span className="font-medium">Pedir ayuda:</span> buscar apoyo en docentes, orientadores o adultos de confianza ante situaciones de riesgo.</li>
                <li><span className="font-medium">Diferenciar relaciones sanas de relaciones violentas:</span> identificar vínculos basados en el respeto frente a aquellos donde hay control, manipulación o agresión.</li>
                <li><span className="font-medium">Reconocer situaciones de riesgo:</span> detectar contextos o comportamientos que pueden poner en peligro su bienestar físico, emocional o digital.</li>
              </ul>

              <p className="font-semibold">Temas específicos relacionados con la violencia actual:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><span className="font-medium">Grooming:</span> contacto que establece un adulto con un menor a través de internet con la intención de ganarse su confianza y manipularlo emocional o sexualmente.</li>
                <li><span className="font-medium">Sexting:</span> envío o recepción de contenido íntimo a través de medios digitales, el cual puede ser difundido sin consentimiento y generar consecuencias personales y sociales.</li>
                <li><span className="font-medium">Acoso escolar o bullying:</span> agresiones repetidas, físicas, verbales o sociales entre compañeros dentro del entorno escolar.</li>
                <li><span className="font-medium">Violencia sexual:</span> cualquier conducta de carácter sexual realizada sin consentimiento o mediante presión, manipulación o fuerza.</li>
                <li><span className="font-medium">Violencia en relaciones de pareja:</span> comportamientos de control, celos excesivos, amenazas o maltrato dentro de relaciones afectivas.</li>
                <li><span className="font-medium">Riesgos digitales:</span> peligros asociados al uso de internet y redes sociales, como fraudes, exposición de datos personales o contacto con desconocidos malintencionados.</li>
              </ul>

              <p className="font-semibold">Consentimiento</p>
              <p>
                El consentimiento es el acuerdo claro, libre y voluntario que una persona da para participar en una acción o situación. En el contexto de la ESI, significa que cualquier interacción física, emocional o sexual solo es válida si todas las personas involucradas están de acuerdo de manera consciente y sin presión. Para que exista consentimiento, la persona debe decidirlo por sí misma sin miedo ni manipulación, debe tener la capacidad de entender lo que está aceptando, y puede cambiar de opinión en cualquier momento, incluso si antes había dicho que sí.
              </p>

              <p className="font-semibold">Papel de los docentes dentro de la ESI</p>
              <p>
                Los docentes y directivos cumplen un papel fundamental como figuras de acompañamiento, orientación y protección. Su función no se limita a enseñar contenidos, sino que implica crear condiciones para que los estudiantes aprendan en un entorno seguro, respetuoso y de confianza. El docente detecta cambios en el comportamiento, identifica señales de alerta y recibe situaciones que preocupan a los estudiantes, por lo que su actuación debe ser cuidadosa, empática y responsable.
              </p>

              <p className="font-semibold">Corregir comentarios discriminatorios</p>
              <p>
                Los docentes deben intervenir cuando se presentan burlas, comentarios sexistas, apodos ofensivos o humillaciones. Ignorar estas situaciones puede enviar el mensaje de que son aceptables. La corrección no debe hacerse desde el castigo o la confrontación agresiva, sino desde el diálogo, la reflexión y el respeto, ayudando a los estudiantes a comprender por qué ciertos comentarios son inapropiados y cómo afectan a los demás.
              </p>

              <p className="font-semibold">Fomentar el respeto entre compañeros</p>
              <p>El docente puede fomentar el respeto a través de:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Establecer normas claras de convivencia.</li>
                <li>Proponer actividades grupales que favorezcan la cooperación.</li>
                <li>Generar momentos de reflexión sobre la empatía.</li>
                <li>Enseñar formas adecuadas de resolver conflictos mediante el diálogo.</li>
                <li>Promover el uso de un lenguaje respetuoso dentro del aula.</li>
              </ul>
              <p className="text-sm italic">Los estudiantes aprenden en gran medida a partir del ejemplo del docente.</p>

              <p className="font-semibold">Enseñar límites y consentimiento</p>
              <p>Es importante que los estudiantes interioricen que:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Su cuerpo merece respeto y tienen derecho a decir "no" cuando algo les incomoda.</li>
                <li>Ninguna persona puede obligarlos a participar en situaciones que no desean.</li>
                <li>Ellos también deben respetar los límites de los demás, pues el consentimiento es mutuo.</li>
              </ul>

              <p className="font-semibold">Escuchar sin juzgar</p>
              <p>Cuando un estudiante se acerca buscando orientación, es fundamental:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Escuchar con atención.</li>
                <li>Evitar burlas o regaños.</li>
                <li>No minimizar lo que siente.</li>
                <li>Mostrar disposición para ayudar.</li>
              </ul>
              <p>La escucha empática fortalece la confianza y permite detectar posibles situaciones de riesgo.</p>

              <p className="font-semibold">Crear ambientes de confianza</p>
              <p>Para construir un ambiente de confianza, el docente debe:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Mostrar respeto constante hacia los estudiantes.</li>
                <li>Manejar adecuadamente la confidencialidad.</li>
                <li>Validar las emociones de los estudiantes sin minimizarlas ni juzgarlas.</li>
                <li>Promover la participación segura, sin miedo a equivocarse.</li>
                <li>Utilizar un lenguaje claro y adecuado.</li>
              </ul>

              <p className="font-semibold">¿Cómo se enseña la ESI?</p>
              <p>
                La ESI se enseña desde un enfoque pedagógico activo y reflexivo, no basado únicamente en la transmisión de información teórica, sino en la construcción de aprendizajes significativos a partir del diálogo y el análisis de situaciones cotidianas. Las actividades que mejor funcionan son: estudios de caso, debates guiados, juegos de roles, dinámicas de reflexión emocional y trabajos en grupo.
              </p>
              <p>La ESI debe adaptarse según la edad:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><span className="font-medium">En primaria:</span> reconocimiento del cuerpo, autocuidado, respeto por los demás, límites personales e identificación de emociones básicas.</li>
                <li><span className="font-medium">En bachillerato:</span> relaciones afectivas, consentimiento, prevención de violencias, presión social, uso responsable de redes sociales y toma de decisiones informadas.</li>
              </ul>

              <p className="font-semibold">¿Qué debe hacer el docente ante una situación de riesgo?</p>
              <p>El docente debe:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Mantener la calma y escuchar de manera respetuosa sin emitir juicios.</li>
                <li>Seguir los protocolos institucionales, reportando a orientación escolar, coordinación o el comité de convivencia.</li>
                <li>No exponer al estudiante frente a otros compañeros ni hacer comentarios públicos.</li>
                <li>Manejar la información con confidencialidad responsable.</li>
                <li>Evitar confrontar directamente al presunto agresor sin apoyo institucional.</li>
                <li>No minimizar lo ocurrido ni prometer soluciones que no dependen de su rol.</li>
              </ul>

              <p className="font-semibold">¿Por qué hablamos de ESI y no de educación sexual tradicional?</p>
              <p>
                La educación sexual tradicional se enfocaba principalmente en aspectos biológicos: anatomía, reproducción, embarazo y prevención de enfermedades. La ESI va mucho más allá: entiende que la sexualidad también incluye emociones, relaciones interpersonales, construcción de identidad, ejercicio de derechos, convivencia escolar y uso responsable del entorno digital. Su objetivo es formar estudiantes que no solo tengan información, sino que desarrollen habilidades para cuidarse, respetar a los demás y convivir de manera sana.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* MÓDULO 6 */}
          <AccordionItem value="modulo6">
            <AccordionTrigger className="text-base text-left">Marco legal</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p>La Educación Sexual Integral (ESI) no es un tema opcional dentro de las instituciones educativas, sino un enfoque respaldado por un marco legal que reconoce su importancia en la formación integral de los estudiantes y en la garantía de sus derechos.</p>

              <p className="font-semibold">Constitución Política de 1991 – Artículo 44</p>
              <p>Establece que los derechos de los niños, niñas y adolescentes prevalecen sobre los derechos de los demás. El Estado, la familia y la sociedad tienen la obligación de proteger su desarrollo integral, lo cual incluye su bienestar físico, emocional, social y educativo. Desde esta base constitucional, la ESI se entiende como una herramienta para garantizar esa protección integral, promoviendo entornos seguros, respetuosos y formativos.</p>

              <p className="font-semibold">Ley 115 de 1994 (Ley General de Educación)</p>
              <p>Define la educación como un proceso de formación permanente, personal, cultural y social. No se limita únicamente a la adquisición de conocimientos académicos, sino que busca el desarrollo integral del ser humano. La ESI se articula con esta ley porque contribuye a la formación en aspectos como la convivencia, la toma de decisiones, el respeto por la diversidad y el desarrollo emocional.</p>

              <p className="font-semibold">Resolución 3353 de 1993</p>
              <p>Establece la obligatoriedad de implementar proyectos de educación sexual en las instituciones educativas del país. Su propósito es que la educación sexual no dependa de decisiones individuales de cada institución, sino que sea parte del currículo escolar, abordándose de manera sistemática, progresiva y adecuada a cada etapa del desarrollo.</p>

              <p className="font-semibold">Ley 1620 de 2013 (Sistema Nacional de Convivencia Escolar)</p>
              <p>Crea un marco para promover la convivencia escolar y prevenir la violencia en los entornos educativos. Incluye la formación en derechos humanos, educación para la sexualidad y prevención de situaciones de riesgo como el acoso escolar. La ESI se articula directamente con esta ley al fomentar el respeto, la resolución pacífica de conflictos y la construcción de ambientes escolares seguros.</p>

              <p className="font-semibold">Sentencia T-478 de 2015 (Corte Constitucional)</p>
              <p>Refuerza el derecho a una educación libre de discriminación y promueve la inclusión en los entornos escolares, especialmente en casos relacionados con identidad de género y orientación sexual. Establece que las instituciones educativas deben garantizar el respeto por la diversidad y evitar cualquier forma de exclusión, lo cual fortalece el enfoque de la ESI basado en derechos, igualdad y respeto.</p>
            </AccordionContent>
          </AccordionItem>

          {/* MÓDULO 7 */}
          <AccordionItem value="modulo7">
            <AccordionTrigger className="text-base text-left">Señales de alerta</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p>
                La detección temprana es una de las funciones más importantes del docente, ya que permite identificar a tiempo posibles situaciones de riesgo que afectan el bienestar físico, emocional o social de los estudiantes. Muchas problemáticas no se expresan de manera directa, sino a través de cambios sutiles en el comportamiento, el estado emocional o la forma de relacionarse.
              </p>

              <p className="font-semibold">Abuso sexual sospechado</p>
              <p>El abuso sexual no siempre se manifiesta de forma evidente. Posibles señales de alerta:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Cambios repentinos en el comportamiento.</li>
                <li>Miedo o rechazo hacia una persona o lugar específico.</li>
                <li>Conductas regresivas o aislamiento social.</li>
                <li>Expresiones de incomodidad relacionadas con su cuerpo.</li>
                <li>Dificultades emocionales sin causa aparente.</li>
              </ul>
              <p className="text-sm italic">El docente no debe asumir ni diagnosticar, sino activar las rutas institucionales correspondientes cuando exista una sospecha razonable.</p>

              <p className="font-semibold">Depresión, ansiedad o afectaciones emocionales</p>
              <p>Señales posibles en el entorno escolar:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Desmotivación constante o pérdida de interés en actividades escolares.</li>
                <li>Aislamiento progresivo del grupo.</li>
                <li>Cambios en el rendimiento académico.</li>
                <li>Irritabilidad, tristeza o ansiedad persistente.</li>
                <li>Expresiones de inseguridad o baja autoestima.</li>
              </ul>
              <p>El docente cumple un rol clave al brindar un espacio de escucha, acompañamiento y remisión oportuna a orientación escolar o profesionales especializados.</p>

              <p className="font-semibold">Grooming y riesgos digitales en el aula</p>
              <p>El grooming puede detectarse a través de:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Cambios en el uso del celular o redes sociales.</li>
                <li>Secretismo excesivo respecto a conversaciones digitales.</li>
                <li>Ansiedad o nerviosismo al recibir mensajes.</li>
                <li>Conductas de ocultamiento o aislamiento.</li>
              </ul>
              <p className="text-sm italic">El docente no debe intervenir directamente en plataformas digitales del estudiante, pero sí puede orientar, educar sobre riesgos digitales y activar los protocolos de protección institucionales.</p>

              <p className="font-semibold">Cambios conductuales críticos</p>
              <p>Cambios que pueden ser señal de que el estudiante atraviesa una situación difícil:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Aislamiento repentino o rechazo al contacto social.</li>
                <li>Cambios drásticos en la actitud o personalidad.</li>
                <li>Conductas agresivas o retraimiento excesivo.</li>
                <li>Ausencias frecuentes o bajo rendimiento escolar.</li>
                <li>Desinterés por actividades que antes disfrutaba.</li>
              </ul>
              <p className="text-sm italic">Estos signos deben interpretarse como posibles indicadores de alerta, no como comportamientos problemáticos aislados.</p>
            </AccordionContent>
          </AccordionItem>

          {/* MÓDULO 8 */}
          <AccordionItem value="modulo8">
            <AccordionTrigger className="text-base text-left">Gestión emocional</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p>
                El trabajo de un docente dentro de la ESI implica enfrentar situaciones sensibles que pueden generar impacto emocional, como casos de violencia, sospecha de abuso o problemáticas familiares de los estudiantes. Por esta razón, es fundamental que el docente también desarrolle habilidades de gestión emocional.
              </p>

              <p className="font-semibold">Mantener la calma y actuar de forma reflexiva</p>
              <p>Ante situaciones difíciles, el docente debe evitar reaccionar desde la emoción inmediata. Mantener la calma permite tomar decisiones más acertadas, proteger al estudiante y seguir los protocolos institucionales de manera adecuada.</p>

              <p className="font-semibold">Evitar la revictimización indirecta</p>
              <p>Es fundamental que el docente cuide la forma en que escucha, pregunta o aborda la situación del estudiante, evitando comentarios, preguntas o actitudes que puedan generar culpa, vergüenza o exposición innecesaria. El objetivo es proteger al estudiante, no presionarlo ni exponerlo emocionalmente.</p>

              <p className="font-semibold">Actuar desde la contención, no desde el juicio</p>
              <p>El rol del docente no es investigar ni juzgar, sino acompañar, contener y orientar. Esto implica escuchar de manera empática, validar las emociones del estudiante y remitir el caso a las instancias correspondientes.</p>

              <p className="font-semibold">Autocuidado profesional del docente</p>
              <p>El manejo de situaciones sensibles también puede generar desgaste emocional en el docente, por lo que es importante:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Reconocer sus propias emociones frente a los casos.</li>
                <li>Buscar apoyo en el equipo institucional cuando sea necesario.</li>
                <li>Mantener límites profesionales claros.</li>
                <li>Evitar la sobrecarga emocional individual.</li>
              </ul>
              <p className="text-sm italic">El autocuidado permite que el docente pueda seguir cumpliendo su rol de manera efectiva, sin afectar su bienestar personal.</p>
            </AccordionContent>
          </AccordionItem>

        </Accordion>

        <section className="mt-12">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4 border-b border-border pb-2">📚 Recursos y enlaces</h2>
          <div className="grid md:grid-cols-2 gap-3 mt-4">
            <ResourceLink title="Ministerio de Educación Nacional (MEN)" url="https://www.mineducacion.gov.co"  />
            <ResourceLink title="UNESCO – Educación" url="https://www.unesco.org/es/health-education/cse" />
            <ResourceLink title="OMS – Educación sexual integral" url="https://www.who.int/es" />
            <ResourceLink title="UNESCO - Video informativo" url="https://www.youtube.com/watch?v=UxhUZxqRHrs" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Docentes;
