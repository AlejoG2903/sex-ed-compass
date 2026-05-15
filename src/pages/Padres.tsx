import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContentSection from "@/components/ContentSection";
import ResourceLink from "@/components/ResourceLink";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import parentsImg from "@/assets/parents-module.png";

const Padres = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-background via-secondary to-accent/40 py-16 border-b border-border">
        <div className="container flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="font-heading text-6xl font-extrabold text-foreground mb-3">
              Padres de familia
            </h1>
          </div>
          <img src={parentsImg} alt="Familias" loading="lazy" width={650} height={225} className="shrink-0" />
        </div>
      </section>

      <main className="container py-12 flex-1">

        {/* Intro sections */}
        <ContentSection title="La familia como primer espacio de educación">
          <p>
            La adolescencia es una etapa llena de cambios, preguntas y descubrimientos. Durante este proceso, los jóvenes comienzan a comprender quiénes son, cómo se relacionan con otras personas y cómo construyen su identidad y proyecto de vida.
          </p>
          <p>
            En muchas familias hablar sobre sexualidad puede generar incomodidad, nervios o incluso miedo. Sin embargo, actualmente se reconoce que la familia tiene un papel esencial en la formación y acompañamiento de niños, niñas y adolescentes.
          </p>
          <p>
            La educación sobre sexualidad no inicia únicamente cuando un adolescente tiene una pareja o cuando pregunta sobre relaciones sexuales; comienza desde los primeros años de vida mediante conversaciones, comportamientos, ejemplos y valores que se transmiten diariamente.
          </p>
        </ContentSection>

        <ContentSection title="¿Por qué los padres son fundamentales?">
          <p>
            Los padres, madres y cuidadores son una fuente importante de orientación y apoyo para los adolescentes. A través de las interacciones cotidianas, los hijos aprenden cómo expresar emociones, cómo relacionarse con otras personas, qué significa el respeto, cómo resolver conflictos, cómo valorar su cuerpo y cómo tomar decisiones responsables.
          </p>
          <p>
            Cuando en casa se habla abiertamente de estos temas, se fortalece la confianza entre padres e hijos, se reducen riesgos asociados a la desinformación, se promueven valores como el respeto y la responsabilidad, y se favorece la toma de decisiones conscientes. Por el contrario, el silencio puede llevar a que los adolescentes busquen información en fuentes no confiables.
          </p>
        </ContentSection>

        {/* Accordion modules */}
        <h2 className="font-heading text-2xl font-bold text-foreground mb-8 mt-12">Módulos para padres</h2>

        <Accordion type="single" collapsible className="w-full">

          <AccordionItem value="esi">
            <AccordionTrigger className="text-base">Educación Sexual Integral (ESI)</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p>
                Cuando las personas escuchan el término Educación Sexual Integral (ESI), con frecuencia lo relacionan únicamente con relaciones sexuales, embarazo o métodos anticonceptivos. Sin embargo, la ESI es mucho más amplia.
              </p>
              <p>
                La ESI es un proceso de aprendizaje que ayuda a niños, niñas y adolescentes a comprender aspectos relacionados con su cuerpo, emociones, relaciones, valores, derechos y bienestar, permitiéndoles desarrollar habilidades para tomar decisiones responsables y construir relaciones saludables.
              </p>
              <p>
                La palabra <strong>integral</strong> significa que aborda diferentes dimensiones del ser humano y no únicamente aspectos biológicos o reproductivos.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="comunicacion">
            <AccordionTrigger className="text-base">Comunicación adecuada con tus hijos</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p className="font-semibold">Utilizar un lenguaje claro, sencillo y acorde a la edad</p>
              <p>Es importante evitar tecnicismos excesivos o explicaciones ambiguas. La información debe adaptarse al nivel de comprensión del adolescente, sin infantilizarlo ni sobrecargarlo. Hablar con claridad reduce la búsqueda de información en fuentes no confiables.</p>

              <p className="font-semibold mt-4">Escuchar sin juzgar ni ridiculizar</p>
              <p>Uno de los errores más frecuentes es responder desde el juicio o la burla. Escuchar activamente implica prestar atención, validar lo que el adolescente siente o pregunta, y responder desde el respeto, incluso si no se comparte su opinión.</p>

              <p className="font-semibold mt-4">Aprovechar situaciones cotidianas como punto de partida</p>
              <p>La educación sexual no siempre requiere una conversación formal. Situaciones como una escena en televisión, una noticia o una pregunta espontánea pueden ser oportunidades naturales para iniciar diálogos y normalizar el tema.</p>

              <p className="font-semibold mt-4">Responder con calma, incluso ante preguntas difíciles</p>
              <p>Es normal que algunas preguntas generen sorpresa o incomodidad. Sin embargo, reaccionar con enojo o evasión puede cerrar el canal de comunicación. Responder con tranquilidad demuestra que el adolescente puede acudir a sus padres sin temor.</p>

              <p className="font-semibold mt-4">Evitar el miedo, la amenaza o el castigo</p>
              <p>El uso del miedo puede generar obediencia momentánea, pero no comprensión ni responsabilidad real. La educación basada en el diálogo fomenta la reflexión, el autocuidado y la toma de decisiones informadas.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="errores">
            <AccordionTrigger className="text-base">Errores comunes que se deben evitar</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p className="font-semibold">Evadir el tema</p>
              <p>Postergar o evitar hablar de sexualidad no elimina la curiosidad del adolescente, sino que la desplaza hacia fuentes externas que pueden ser inadecuadas o desinformadas. El silencio también educa, pero muchas veces desde la incertidumbre.</p>

              <p className="font-semibold mt-4">Reaccionar con enojo, vergüenza o incomodidad evidente</p>
              <p>Las reacciones emocionales negativas pueden generar que el adolescente asocie la sexualidad con algo incorrecto o prohibido. Esto limita su capacidad de preguntar y aprender en un entorno seguro.</p>

              <p className="font-semibold mt-4">Brindar información incompleta o incorrecta</p>
              <p>Dar respuestas vagas o basadas en mitos puede generar confusión y riesgos. Es preferible reconocer cuando no se tiene toda la información y buscarla juntos en fuentes confiables, antes que dar una respuesta errónea.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="adolescencia">
            <AccordionTrigger className="text-base">La adolescencia y sus cambios</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p>
                La adolescencia es una etapa del desarrollo humano en la que ocurren transformaciones profundas a nivel biológico, psicológico, emocional y social. No se trata únicamente de cambios físicos, sino de un proceso integral en el que la persona va construyendo su identidad, su autonomía y su forma de relacionarse con el entorno.
              </p>

              <p className="font-semibold mt-4">Cambios corporales</p>
              <p>Durante la adolescencia se presentan cambios físicos visibles e internos que son completamente naturales. En las mujeres incluyen el desarrollo de los senos, ensanchamiento de caderas, aparición de vello, inicio del ciclo menstrual y cambios en la piel. En los hombres, crecimiento de los testículos y pene, vello facial y púbico, cambio en la voz y aumento de masa muscular. En ambos sexos hay mayor sudoración, cambios hormonales y aceleración del crecimiento físico.</p>
              <p>Estos cambios no ocurren al mismo ritmo en todas las personas, lo cual es importante normalizar para evitar comparaciones.</p>

              <p className="font-semibold mt-4">Cambios emocionales</p>
              <p>Se pueden observar cambios frecuentes de ánimo, mayor sensibilidad emocional, necesidad de privacidad, búsqueda de independencia emocional, mayor importancia de la aceptación por parte del grupo social, autoestima fluctuante y dificultad para manejar emociones intensas como enojo, tristeza o frustración.</p>

              <p className="font-semibold mt-4">Cambios sociales</p>
              <p>Los adolescentes dedican más tiempo a sus amistades, buscan pertenecer a grupos sociales, fortalecen relaciones basadas en confianza y afinidad, experimentan mayor interés en relaciones afectivas o románticas y surgen conflictos relacionados con la búsqueda de autonomía.</p>

              <p className="font-semibold mt-4">Cambios cognitivos</p>
              <p>En esta etapa se observa mayor capacidad de razonamiento lógico, desarrollo del pensamiento crítico, capacidad para reflexionar sobre el futuro, búsqueda de identidad personal y mayor cuestionamiento de normas y reglas.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="sexualidad-dimensiones">
            <AccordionTrigger className="text-base">La sexualidad y sus dimensiones</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p>
                La Organización Mundial de la Salud define la sexualidad como una dimensión central del ser humano presente a lo largo de toda la vida. Incluye el sexo, la identidad y roles de género, la orientación sexual, el erotismo, el placer, la intimidad y la reproducción. La sexualidad se expresa mediante pensamientos, emociones, valores, comportamientos y relaciones.
              </p>

              <p className="font-semibold mt-4">Elementos de la sexualidad</p>
              <div className="space-y-3 mt-2">
                <div>
                  <p className="font-semibold text-sm">Sexo:</p>
                  <p className="text-sm text-muted-foreground">Características biológicas con las que nace una persona y que diferencian a hombres y mujeres, como los genitales, las hormonas y los cromosomas.</p>
                </div>
                <div>
                  <p className="font-semibold text-sm">Género:</p>
                  <p className="text-sm text-muted-foreground">Ideas, normas y roles que la sociedad ha construido sobre lo que "debe ser" un hombre o una mujer, y que pueden variar según la cultura y el contexto.</p>
                </div>
                <div>
                  <p className="font-semibold text-sm">Erotismo:</p>
                  <p className="text-sm text-muted-foreground">Capacidad que tiene el ser humano de sentir placer, deseo y sensaciones agradables, no solo desde lo físico, sino también desde lo emocional.</p>
                </div>
                <div>
                  <p className="font-semibold text-sm">Identidad sexual:</p>
                  <p className="text-sm text-muted-foreground">La forma en que cada persona se reconoce y se siente consigo misma en relación con su sexualidad.</p>
                </div>
                <div>
                  <p className="font-semibold text-sm">Orientación sexual:</p>
                  <p className="text-sm text-muted-foreground">Atracción emocional, afectiva o romántica que una persona siente hacia otras personas.</p>
                </div>
                <div>
                  <p className="font-semibold text-sm">Vínculos afectivos:</p>
                  <p className="text-sm text-muted-foreground">Relaciones emocionales basadas en el cariño, la confianza, el respeto y el apoyo mutuo.</p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="esi-promover">
            <AccordionTrigger className="text-base">¿Qué deben promover los padres desde la ESI?</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p className="font-semibold">Autoestima e identidad</p>
              <p>Hablar de autoestima implica ayudarles a reconocer su valor personal más allá de la apariencia, el rendimiento académico o la aprobación de otros. Un adolescente con una autoestima saludable tiene mayor capacidad para establecer límites, decir "no" ante situaciones incómodas y tomar decisiones que no dependan exclusivamente de la presión social.</p>

              <p className="font-semibold mt-4">Igualdad</p>
              <p>Promover la igualdad significa enseñar en casa que tanto hijos como hijas deben ser tratados con el mismo respeto, valoración y consideración. Implica evitar diferencias en la crianza basadas en estereotipos de género y fomentar relaciones familiares donde no existan formas de dominación, control o discriminación.</p>

              <p className="font-semibold mt-4">Inclusión</p>
              <p>Construir un ambiente de respeto y aceptación donde los adolescentes se sientan escuchados y valorados. Significa evitar comparaciones entre hermanos, no utilizar palabras o etiquetas que afecten su autoestima, y fomentar una comunicación basada en la comprensión, la paciencia y la empatía.</p>

              <p className="font-semibold mt-4">Consentimiento y límites</p>
              <p>Enseñar que nadie debe presionarlos para hacer algo que no desean, que su cuerpo les pertenece y que también deben respetar los límites de los demás. Hablar de límites personales permite que el adolescente identifique qué situaciones le generan incomodidad y aprenda a expresarlo de manera asertiva.</p>

              <p className="font-semibold mt-4">Relaciones saludables</p>
              <p>Orientar sobre lo que significa una relación sana: respeto mutuo, confianza, comunicación abierta y libertad sin control ni manipulación. Los padres deben ayudar a identificar señales de alerta como celos excesivos, control o presión emocional.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="presion-social">
            <AccordionTrigger className="text-base">Presión social y toma de decisiones</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p>Durante la adolescencia es frecuente que los jóvenes se vean influenciados por la presión social ejercida por sus amigos, redes sociales o grupos cercanos. En esta etapa, muchos adolescentes sienten la necesidad de actuar de cierta manera para ser aceptados, incluso cuando esas decisiones no coinciden con lo que realmente piensan o desean.</p>
              <p>Como padres de familia, es importante comprender que esta presión puede influir en las relaciones afectivas, la imagen personal e incluso en decisiones relacionadas con la sexualidad.</p>
              <p>Tomar decisiones responsables implica enseñarles a los adolescentes a pensar antes de actuar, analizar las posibles consecuencias, reconocer situaciones de riesgo, identificar sus propios límites y respetar tanto su bienestar como el de los demás.</p>
              <p>Cuando en la familia se fomenta el diálogo, la confianza y la orientación sin juzgar, los adolescentes se sienten más seguros para expresar sus dudas y menos presionados por la necesidad de aprobación externa.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="mitos">
            <AccordionTrigger className="text-base">Mitos y desinformación sobre sexualidad</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p>En el contexto actual, la sexualidad de los adolescentes está fuertemente influenciada por información que circula en redes sociales, grupos de pares y medios digitales. Una parte significativa de esta información no cuenta con respaldo científico, lo que da lugar a mitos y creencias erróneas.</p>

              <p className="font-semibold mt-4">Mitos sobre el cuerpo y los cambios en la adolescencia</p>
              <p>Circulan creencias sobre la menstruación, el crecimiento corporal y la apariencia que pueden generar vergüenza, inseguridad, confusión o baja autoestima. Es importante validar los cambios como parte natural del desarrollo humano y ofrecer información clara, evitando reforzar estigmas.</p>

              <p className="font-semibold mt-4">Mitos sobre las relaciones afectivas</p>
              <p>Ideas erróneas como que los celos son una muestra de amor o que el control sobre la pareja es una forma de cuidado pueden llevar a aceptar manipulación emocional o dependencia afectiva. Es clave orientar que una relación saludable se basa en el respeto mutuo, la confianza y la libertad.</p>

              <p className="font-semibold mt-4">Mitos sobre roles de género</p>
              <p>Persisten ideas que indican que hombres y mujeres deben comportarse de formas específicas. Estas creencias pueden limitar el desarrollo personal, generar discriminación y afectar la expresión libre de la identidad. Es fundamental promover una visión más equitativa donde las capacidades no estén determinadas por el género.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="embarazo">
            <AccordionTrigger className="text-base">Embarazo en la adolescencia</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p>El embarazo en la adolescencia se presenta cuando una persona queda embarazada antes de la etapa adulta. Debe abordarse desde una perspectiva educativa y preventiva, comprendiendo que no se trata únicamente de una situación biológica, sino de un evento que impacta múltiples dimensiones de la vida del adolescente.</p>
              <p>Entre los principales impactos se encuentran:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Interrupción o dificultades en la continuidad escolar</li>
                <li>Afectaciones en la salud física y emocional</li>
                <li>Cambios en la dinámica familiar</li>
                <li>Desafíos económicos y sociales</li>
                <li>Alteraciones en el proyecto de vida</li>
                <li>Riesgos asociados a la salud mental</li>
              </ul>
              <p>Desde la familia, la orientación oportuna y la comunicación abierta son factores clave para la prevención y el acompañamiento adecuado.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="anticonceptivos">
            <AccordionTrigger className="text-base">Métodos anticonceptivos</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p>Los métodos anticonceptivos son herramientas de prevención que permiten reducir el riesgo de embarazo y, en algunos casos, prevenir infecciones de transmisión sexual. El acceso a información clara, científica y libre de mitos permite que los adolescentes desarrollen criterios responsables para la toma de decisiones.</p>

              <p className="font-semibold mt-4">Preservativo o condón</p>
              <p>Es el único método que ofrece doble protección simultánea: previene embarazos no deseados y reduce el riesgo de ITS en relaciones vaginales, anales y orales. Es accesible y de uso sencillo con orientación adecuada.</p>

              <p className="font-semibold mt-4">Métodos hormonales</p>
              <p>Incluyen pastillas anticonceptivas, inyecciones, implantes subdérmicos y parche anticonceptivo. Requieren supervisión médica y no ofrecen protección contra ITS.</p>

              <p className="font-semibold mt-4">Dispositivo intrauterino (DIU)</p>
              <p>Método de larga duración que se inserta en el útero por personal de salud especializado. Su efectividad es alta y puede mantenerse durante varios años según el tipo.</p>

              <p className="font-semibold mt-4">Anticoncepción de emergencia</p>
              <p>Conocida como "pastilla del día después", está diseñada para situaciones específicas de emergencia y no debe considerarse un método anticonceptivo habitual.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="its">
            <AccordionTrigger className="text-base">Infecciones de Transmisión Sexual (ITS)</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p>Las ITS son infecciones que se transmiten principalmente a través del contacto sexual sin protección. Muchas pueden no presentar síntomas en sus etapas iniciales, lo que aumenta el riesgo de transmisión sin que la persona lo sepa.</p>
              <p>Entre las ITS más comunes se encuentran: VIH, sífilis, gonorrea, herpes genital, Virus del Papiloma Humano (VPH) y clamidia.</p>

              <p className="font-semibold mt-4">Formas de transmisión:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Relaciones sexuales vaginales</li>
                <li>Relaciones sexuales anales</li>
                <li>Relaciones sexuales orales</li>
                <li>Contacto con fluidos corporales infectados</li>
              </ul>

              <p className="font-semibold mt-4">Prevención:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Uso correcto del preservativo</li>
                <li>Educación sexual basada en evidencia científica</li>
                <li>Acceso a servicios de salud</li>
                <li>Comunicación responsable en las relaciones afectivas</li>
                <li>Identificación de situaciones de riesgo</li>
              </ul>
              <p className="text-sm mt-4">Es importante comprender que las ITS no están asociadas a un grupo específico de personas. Cualquier individuo sexualmente activo puede estar en riesgo si no existen medidas de protección adecuadas.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="masturbacion">
            <AccordionTrigger className="text-base">Masturbación y autoconocimiento corporal</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p>La masturbación se entiende como una conducta relacionada con el autoconocimiento del cuerpo y la exploración de sensaciones. En la adolescencia puede aparecer la curiosidad sobre el propio cuerpo como parte del desarrollo sexual natural.</p>
              <p>Desde la evidencia científica, no representa un problema de salud cuando no interfiere con la vida cotidiana, el bienestar emocional ni las relaciones sociales. El papel de la familia no es sancionar, sino orientar desde el respeto, la privacidad y el acompañamiento adecuado.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="pornografia">
            <AccordionTrigger className="text-base">Pornografía y redes sociales</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p>En la actualidad, el acceso de los adolescentes a contenidos sexuales explícitos a través de internet es cada vez más frecuente. La pornografía presenta representaciones que no reflejan la realidad de las relaciones afectivas ni sexuales, ya que generalmente omite aspectos fundamentales como el consentimiento, la comunicación, el respeto y la responsabilidad emocional.</p>
              <p>El consumo de este tipo de contenidos puede influir en la percepción del cuerpo, las expectativas sobre las relaciones sexuales, la autoestima, la comprensión del consentimiento y la forma de entender el afecto y la intimidad. Además, algunos contenidos pueden reforzar estereotipos de género, dinámicas de violencia o relaciones poco saludables.</p>
              <p>Desde el rol de los padres, es fundamental generar espacios de diálogo que permitan orientar el uso de la tecnología y fomentar el pensamiento crítico frente a la información digital.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="salud-mental">
            <AccordionTrigger className="text-base">Salud mental y sexualidad</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p>La salud mental es un componente fundamental dentro de la Educación Sexual Integral, ya que influye directamente en la forma en que los adolescentes construyen su identidad, se relacionan con los demás y toman decisiones sobre su cuerpo y su vida.</p>

              <p className="font-semibold mt-4">Ansiedad en adolescentes</p>
              <p>La ansiedad puede manifestarse como preocupación constante, miedo a no encajar, inseguridad frente a la imagen personal o presión por cumplir expectativas académicas y sociales. Puede reflejarse en cambios de conducta, irritabilidad, aislamiento o dificultades para concentrarse. El acompañamiento familiar basado en la escucha y la validación emocional es clave.</p>

              <p className="font-semibold mt-4">Autoestima y redes sociales</p>
              <p>Las redes sociales tienen un impacto significativo en la autoestima de los adolescentes, ya que constantemente están expuestos a comparaciones y modelos de "vida ideal". Desde el hogar, es importante enseñar que lo que se observa en redes no siempre refleja la realidad, y que el valor personal no depende de los "me gusta" o seguidores.</p>

              <p className="font-semibold mt-4">Imagen corporal y comparación social</p>
              <p>Los cambios físicos pueden generar preocupación por la apariencia. Es fundamental promover en casa una visión respetuosa del cuerpo, entendiendo que cada proceso de desarrollo es diferente y que no existe un único modelo de belleza válido. Los padres cumplen un papel importante al reforzar el valor único de cada hijo y evitando comparaciones dentro del hogar.</p>

              <p className="font-semibold mt-4">Influencia de redes sociales en la identidad</p>
              <p>Las redes sociales también influyen en la construcción de la identidad, incluyendo la forma en que los adolescentes perciben su cuerpo, sus relaciones y su rol social. Por ello, es importante fomentar el pensamiento crítico, el uso responsable de la tecnología y el diálogo constante en el hogar.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="ruta-accion">
            <AccordionTrigger className="text-base">Ruta de acción para padres</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p className="font-semibold">¿Qué hacer si mi hijo ya está en una relación?</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Mantener una actitud abierta y respetuosa, evitando prohibiciones o juicios inmediatos</li>
                <li>Conversar sobre cómo se siente en la relación y si se siente respetado o respetada</li>
                <li>Orientar sobre relaciones saludables basadas en el respeto, la confianza y la libertad</li>
                <li>Estar atentos a señales de control, celos excesivos o dependencia emocional</li>
              </ul>

              <p className="font-semibold mt-4">¿Qué hacer si sospecho abuso o violencia?</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Tomar la situación con seriedad, sin minimizar lo que el adolescente expresa</li>
                <li>Escuchar sin culpar ni presionar</li>
                <li>Evitar confrontar directamente al posible agresor sin orientación profesional</li>
                <li>Buscar apoyo en la institución educativa, orientación escolar o entidades de protección</li>
              </ul>

              <p className="font-semibold mt-4">¿Qué hacer si encuentro contenido sexual en su celular?</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Evitar reacciones impulsivas, regaños o castigos excesivos</li>
                <li>Iniciar una conversación calmada sobre el uso de internet y la información que consumen</li>
                <li>Explicar la diferencia entre contenido digital y relaciones reales basadas en respeto y consentimiento</li>
                <li>Establecer normas claras sobre el uso responsable de la tecnología</li>
              </ul>

              <p className="font-semibold mt-4">¿Qué hacer si hay señales de violencia en la relación?</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Observar cambios emocionales o conductuales como aislamiento, miedo o dependencia excesiva</li>
                <li>Conversar desde el acompañamiento y no desde la imposición</li>
                <li>Reforzar la idea de que ninguna relación debe generar miedo o control</li>
                <li>Buscar orientación profesional si es necesario</li>
              </ul>

              <p className="font-semibold mt-4">¿Qué hacer si mi hijo no quiere hablar?</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Respetar los tiempos del adolescente sin forzar la conversación</li>
                <li>Mantener disponibilidad emocional constante</li>
                <li>Aprovechar momentos cotidianos para generar diálogo sin presión</li>
                <li>Reforzar la confianza para que sepa que puede acudir a sus padres cuando lo necesite</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="leyes">
            <AccordionTrigger className="text-base">Leyes que cobijan la sexualidad integral</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p className="font-semibold">Ley 1620 de 2013</p>
              <p>Crea el Sistema Nacional de Convivencia Escolar y establece lineamientos para la prevención, atención y mitigación de la violencia escolar, incluyendo situaciones relacionadas con acoso, abuso y vulneración de derechos.</p>

              <p className="font-semibold mt-4">Ley 1098 de 2006 – Código de Infancia y Adolescencia</p>
              <p>Reconoce a los niños, niñas y adolescentes como sujetos de derechos, estableciendo la obligación de la familia, la sociedad y el Estado de garantizar su protección integral, bienestar y desarrollo.</p>

              <p className="font-semibold mt-4">Ley 115 de 1994 – Ley General de Educación</p>
              <p>Regula el sistema educativo en Colombia y establece que la educación debe ser integral, formando a los estudiantes en aspectos académicos, sociales, éticos y personales.</p>

              <p className="font-semibold mt-4">Ley 1146 de 2007 – Prevención de la violencia sexual</p>
              <p>Establece medidas para prevenir, detectar y atender la violencia sexual contra niños, niñas y adolescentes.</p>
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
              title="SEDRA - Guía para padres"
              url="https://sedra-fpfe.org/wp-content/uploads/2021/02/GU%C3%8DA-FAMILIAS.pdf"
            />
            <ResourceLink 
              title="CUENCA - Articulo de Apoyo"
              url="https://revistaumanizales.cinde.org.co/rlcsnj/index.php/Revista-Latinoamericana/article/view/6674/1513"
            />
            <ResourceLink
              title="CEAPA - Educación sexual desde la familia"
              url="https://ceapa.es/wp-content/uploads/2021/01/CURSO-27-EDUCACI%C3%93N-SEXUAL-DESDE-LA-FAMILIA.pdf"
            />
            <ResourceLink
              title="WAYKA - Video Informativo"
              url="https://www.youtube.com/watch?v=4jQ3nG_NDng"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Padres;
