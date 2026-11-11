import React, { useEffect, useRef, useState } from 'react';
import {
  GraduationCap,
  FlaskConical,
  HardHat,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  X,
  Pause,
  Play,
} from 'lucide-react';
import { CIVIL_PROGRAM as PROGRAM, InstitutionalChannels } from './Footer';

export const AnahuacSection: React.FC = () => {
  const institutional = useInstitutionalContact();
  const [coordinationOpen, setCoordinationOpen] = useState(false);
  const officialCourses = [
    {
      code: 'Semestre 2',
      name: 'Topografía',
      area: 'Vías de Comunicación',
      desc: 'Mide distancias, ángulos y desniveles para representar un terreno.',
    },
    {
      code: 'Semestre 3',
      name: 'Laboratorio de materiales I',
      area: 'Construcción',
      desc: 'Explora cómo se ponen a prueba los materiales de construcción.',
    },
    {
      code: 'Semestre 4',
      name: 'Geotecnia',
      area: 'Geotecnia',
      desc: 'Estudia cómo se comporta el suelo cuando recibe peso.',
    },
    {
      code: 'Semestre 5',
      name: 'Mecánica de fluidos',
      area: 'Hidráulica',
      desc: 'Entiende cómo se mueven el agua y otros fluidos y qué fuerzas ejercen.',
    },
    {
      code: 'Semestre 6',
      name: 'Diseño estructural',
      area: 'Estructuras',
      desc: 'Aplica principios de física y mecánica a elementos que sostienen una construcción.',
    },
  ];

  return (
    <section id="anahuac" className="py-16 bg-white border-b border-[#191716]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Cabecera */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <span className="font-mono-tech text-xs tracking-wider uppercase text-[#FF5900] font-bold">
              En Universidad Anáhuac
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191716] tracking-tight">
              Ingeniería Civil · Campus Norte
            </h2>
            <p className="text-sm sm:text-base text-[#191716]/75">
              Formación técnica rigurosa complementada con laboratorios especializados, prácticas de campo y una
              visión empresarial orientada al liderazgo y la responsabilidad social.
            </p>
          </div>

          <div className="shrink-0 p-4 rounded-xl bg-[#FAF8F3] border border-[#191716]/10 flex items-center gap-4">
            <div className="p-2 rounded-lg bg-[#FF5900]/10 text-[#FF5900]">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-base text-[#191716]">9 Semestres</div>
              <div className="font-mono-tech text-[11px] text-[#191716]/60">Licenciatura Presencial</div>
            </div>
          </div>
        </div>

        {/* Pilares Institucionales Oficiales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#FAF8F3] border border-[#191716]/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#191716]/10 flex items-center justify-center text-[#FF5900]">
              <FlaskConical className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-base text-[#191716]">
              Laboratorios de Materiales y Fluidos
            </h3>
            <p className="text-xs sm:text-sm text-[#191716]/75 leading-relaxed">
              El programa incluye prácticas en laboratorios de materiales, geotecnia, mecánica de fluidos y canales y tuberías.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FAF8F3] border border-[#191716]/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#191716]/10 flex items-center justify-center text-[#FF5900]">
              <HardHat className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-base text-[#191716]">
              Visitas a Obra y Práctica de Campo
            </h3>
            <p className="text-xs sm:text-sm text-[#191716]/75 leading-relaxed">
              El programa describe visitas a obra desde los primeros semestres para conocer cómo se ejecutan los proyectos.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FAF8F3] border border-[#191716]/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#191716]/10 flex items-center justify-center text-[#FF5900]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-base text-[#191716]">
              Enfoque Empresarial y Ético
            </h3>
            <p className="text-xs sm:text-sm text-[#191716]/75 leading-relaxed">
              El plan combina formación en emprendimiento, ingeniería financiera, dirección de empresas, ética y gerencia de proyectos.
            </p>
          </div>
        </div>

        {/* Materias Clave del Plan Oficial de Estudios */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-[#191716]">
              Ejemplos representativos de materias troncales
            </h3>
            <span className="font-mono-tech text-xs text-[#191716]/50 hidden sm:inline">
              Plan oficial de 9 semestres
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {officialCourses.map((c) => (
              <div
                key={c.code}
                className="p-4 rounded-xl bg-white border border-[#191716]/10 hover:border-[#FF5900]/50 transition-colors space-y-2 shadow-xs"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono-tech font-bold text-[#FF5900]">{c.code}</span>
                  <span className="text-[#191716]/60 font-medium">{c.area}</span>
                </div>
                <h4 className="font-bold text-sm text-[#191716]">{c.name}</h4>
                <p className="text-xs text-[#191716]/70 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-xs text-[#191716]/55 italic pt-1">
            * Nota: Los ejemplos laborales y de proyección presentados en este prototipo son casos ilustrativos con fines
            de orientación vocacional y deben diferenciarse del mapa curricular oficial.
          </p>
        </div>

        <div className="rounded-2xl border-2 border-[#CBB5A2] bg-[#FAF8F3] p-5 sm:p-7">
          <h3 className="text-xl font-extrabold">Da el siguiente paso</h3>
          <p className="mt-2 text-sm leading-relaxed">Revisa el plan, pregunta por admisiones o lleva una duda sobre la carrera al Mtro. Joseph Guevara.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href={PLAN} target="_blank" rel="noreferrer" className={careerButton}>Conocer el plan <ExternalLink size={15} aria-hidden="true"/></a>
            <a href={CAMPUS_CONTACT} target="_blank" rel="noreferrer" className={careerButton}>Contactar a Promoción <ExternalLink size={15} aria-hidden="true"/></a>
            <CoordinationAction institutional={institutional} onOpen={()=>setCoordinationOpen(true)} className={careerButton}>Contactar al coordinador de la carrera</CoordinationAction>
          </div>
        </div>
        <CoordinationDialog open={coordinationOpen} onClose={()=>setCoordinationOpen(false)} institutional={institutional} />
      </div>
    </section>
  );
};

const PLAN = 'https://www.anahuac.mx/mexico/2025/Lic/MapaCurricular/ing_ici.pdf';
const PRACTICES = 'https://empleabilidad.anahuac.mx/page/practicas';
const EMPLOYMENT = 'https://empleabilidad.anahuac.mx/misc/servicios';
const APPOINTMENT = 'https://mexico.anahuac.mx/licenciaturas/agenda-tu-cita-online';
const CAMPUS_CONTACT = 'https://mexico.anahuac.mx/licenciaturas/campus-norte-anahuac-mexico';
const CONTACT_NOTICE = 'https://www.anahuac.mx/mexico/proteccion-de-datos-personales/AvisosdePrivacidad/ContactoAPREU';
const PRIVACY_PORTAL = 'https://www.anahuac.mx/mexico/proteccion-de-datos-personales/taxonomy/term/34';

const careerPage = 'mx-auto max-w-7xl px-4 sm:px-7 lg:px-8';
const careerMono = 'font-mono-tech text-[11px] font-bold uppercase tracking-[0.14em]';
const careerButton = 'inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg border border-[#2A1F18] bg-[#FF681E] px-4 py-2.5 text-sm font-extrabold text-[#201914] hover:bg-[#FF925E] focus-visible:outline-2 focus-visible:outline-offset-2';
const careerLink = 'inline-flex min-h-[44px] items-center gap-1.5 text-sm font-bold text-[#733C21] underline decoration-[#A76F4D] underline-offset-4 hover:text-[#4A2B1B]';

const MYTHS = [
  { category: 'FORMACIÓN', quote: 'Si no soy un genio en matemáticas, Civil no es para mí.', truth: false,
    title: 'Puedes construir la base con práctica.',
    detail: 'La carrera sí exige cálculo y física. Empiezas con fundamentos y los aplicas a preguntas concretas, como cuánto caudal se pierde en una red. Dibujar, estimar y revisar unidades ayuda a resolverlas.',
    action: 'Prueba un reto de hidráulica', href: '#zona/agua-rural', source: PROGRAM },
  { category: 'FORMACIÓN', quote: 'Desde la carrera puedes medir terreno y ensayar materiales.', truth: true,
    title: 'La formación combina aula, campo y laboratorio.',
    detail: 'En Topografía puedes levantar datos de un terreno. En laboratorio, las pruebas de materiales conectan lo que estudias con decisiones sobre resistencia y calidad.',
    action: 'Consulta el mapa curricular', href: PLAN, source: PROGRAM },
  { category: 'LA CARRERA', quote: 'En Civil solo ejecutas lo que otras personas diseñan.', truth: false,
    title: 'Diseñar también es parte de Ingeniería Civil.',
    detail: 'Un equipo civil calcula cargas, dimensiona apoyos y compara soluciones de drenaje o pavimento. En una estación, estas decisiones se coordinan con los espacios y recorridos que trabaja Arquitectura.',
    action: 'Compara ambos roles', href: '#mision-equipo', source: PROGRAM },
  { category: 'LA CARRERA', quote: 'La seguridad, el ambiente y el costo también influyen en un diseño.', truth: true,
    title: 'La decisión técnica tiene consecuencias para las personas.',
    detail: 'Al proteger un acceso costero, el equipo puede comparar altura, impacto en el entorno, mantenimiento y costo. El reto es justificar el equilibrio entre esas prioridades.',
    action: 'Prueba la misión costera', href: '#zona/borde-costero', source: PROGRAM },
  { category: 'ÁREAS DE TRABAJO', quote: 'Todo el trabajo de Ingeniería Civil es en obra.', truth: false,
    title: 'Un proyecto pasa por oficina, campo y laboratorio.',
    detail: 'En una planta, alguien toma muestras del piso, otra persona modela las cargas y el equipo de obra coordina la reparación. Las tareas cambian según tu especialidad y el proyecto.',
    action: 'Entra a la planta industrial', href: '#zona/planta-industrial', source: PROGRAM },
  { category: 'ÁREAS DE TRABAJO', quote: 'Cuando se inaugura un puente, termina el trabajo de Civil.', truth: false,
    title: 'Operar y conservar infraestructura también es ingeniería.',
    detail: 'Hay equipos que inspeccionan, miden cómo funciona la infraestructura y priorizan reparaciones. Lo mismo ocurre en puentes, redes de agua y terminales de carga.',
    action: 'Explora los cuatro territorios', href: '#mapa', source: PROGRAM },
  { category: 'ÁREAS DE TRABAJO', quote: 'Civil también participa en proyectos de energía.', truth: true,
    title: 'Una turbina necesita suelo, cimentación y accesos.',
    detail: 'En un parque eólico, el equipo civil puede estudiar el terreno, diseñar apoyos y planear caminos de montaje. Colabora con quienes trabajan en la generación eléctrica y la conexión a la red.',
    action: 'Entra al parque eólico', href: '#zona/parque-eolico', source: PROGRAM },
  { category: 'CRECIMIENTO', quote: 'Tu primera práctica define tu especialidad para siempre.', truth: false,
    title: 'Tu experiencia puede abrir rutas distintas.',
    detail: 'Puedes empezar en laboratorio, control de obra o modelado y, con formación y experiencia, especializarte en un área técnica o asumir tareas de coordinación. Cada cambio requiere habilidades y oportunidades concretas.',
    action: 'Conoce las prácticas de Anáhuac', href: PRACTICES, source: EMPLOYMENT },
  { category: 'CRECIMIENTO', quote: 'El título por sí solo garantiza un empleo.', truth: false,
    title: 'Tu primer empleo se prepara y se busca.',
    detail: 'Documenta qué problema resolviste en un proyecto y cuál fue tu aportación. Busca por funciones como auxiliar de costos, modelador BIM junior o auxiliar de laboratorio, y revisa las habilidades de cada vacante.',
    action: 'Explora servicios de empleabilidad', href: EMPLOYMENT, source: EMPLOYMENT },
  { category: 'CRECIMIENTO', quote: 'Puedes crecer como especialista o asumir la gestión de proyectos.', truth: true,
    title: 'Hay más de una manera de crecer en la profesión.',
    detail: 'Una persona puede profundizar en diseño estructural o hidráulica. Otra puede ampliar su experiencia hacia costos, planeación, coordinación o emprendimiento. Las responsabilidades crecen con la preparación y la práctica.',
    action: 'Conoce la formación en Campus Norte', href: '#anahuac', source: PROGRAM },
] as const;

const TESTIMONIALS = [
  { name: 'Carla R.', initials: 'CR', stage: 'Alumna · Laboratorio de materiales', stars: 5,
    quote: 'En Campus Norte, mi equipo preparó y ensayó una muestra de concreto. Cuando falló, tuvimos que explicar qué pudo pasar. Ahí conecté lo que veía en clase con una decisión que importa en obra.' },
  { name: 'Mateo L.', initials: 'ML', stage: 'Alumno · Topografía', stars: 4,
    quote: 'En la práctica de Topografía medimos desniveles en el campus. Al principio nuestro levantamiento no cerraba. Volvimos a medir, corregimos el plano y aprendí que revisar los datos también es parte del trabajo.' },
  { name: 'Lucía T.', initials: 'LT', stage: 'Alumna · Primeros semestres', stars: 5,
    quote: 'Llegué con dudas sobre cálculo. En una visita a obra vi cómo se revisaban los apoyos antes de construir. Luego, en el salón, dibujar el problema con mi equipo me ayudó a entender qué estábamos calculando.' },
  { name: 'Valeria M.', initials: 'VM', stage: 'Egresada · Proyectos hidráulicos', stars: 5,
    quote: 'En el laboratorio de fluidos comparábamos lo que calculábamos con lo que medíamos. Al egresar empecé revisando planos de redes de agua. Hoy uso ese mismo hábito cuando comparo soluciones con mi equipo.' },
  { name: 'Diego A.', initials: 'DA', stage: 'Egresado · Planeación de obra', stars: 5,
    quote: 'En los proyectos de Campus Norte nos repartíamos cálculos, costos y tiempos. En mi primer trabajo registré avances. Después pasé a planear entregas, y me sirvió saber conversar con quienes ejecutan la obra.' },
  { name: 'Sofía N.', initials: 'SN', stage: 'Egresada · Coordinación digital', stars: 4,
    quote: 'Me gustaban los proyectos en los que había que juntar planos de varias disciplinas. Empecé revisando interferencias entre estructura e instalaciones. Con experiencia pasé a coordinar el modelo con los equipos de Civil y Arquitectura.' },
] as const;

function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const region = useRef<HTMLElement>(null);
  const rotationControl = useRef<HTMLButtonElement>(null);
  const count = TESTIMONIALS.length;
  const rotating = playing && visible && !hovered;

  useEffect(() => {
    if (!region.current) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0 });
    observer.observe(region.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!rotating) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setIndex(current => (current + 1) % count);
    }, 10000);
    return () => window.clearInterval(timer);
  }, [rotating, count]);

  function move(offset: number) {
    setPlaying(false);
    setIndex(current => (current + offset + count) % count);
  }

  return (
    <section ref={region} aria-roledescription="carrusel" aria-labelledby="testimonios-titulo"
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      onFocusCapture={event => { if (event.target !== rotationControl.current) setPlaying(false); }}
      className="overflow-hidden rounded-xl border border-[#B99B82] bg-[#FFF8EE] shadow-[3px_3px_0_#D0B8A1]">
      <div className="flex flex-wrap items-start justify-between gap-3 border-b border-[#CDB49E] p-4 sm:px-6">
        <div>
          <p className={careerMono+' text-[#743A1F]'}>Campus Norte · Ingeniería Civil</p>
          <h2 id="testimonios-titulo" className="mt-1 text-xl font-black">Así se vive y se aplica la carrera</h2>
          <p className="mt-1 text-xs font-bold text-[#793B1F]">Testimonios y valoraciones ficticios para esta demostración.</p>
        </div>
        <button ref={rotationControl} type="button" className={careerLink+' min-w-[162px] justify-center rounded-md border border-[#B99B82] px-3 no-underline'} onClick={() => setPlaying(value => !value)}>
          {playing ? <Pause size={15} aria-hidden="true"/> : <Play size={15} aria-hidden="true"/>}
          {playing ? 'Pausar carrusel' : 'Reanudar carrusel'}
        </button>
      </div>
      <div className="p-4 sm:p-6">
        <div aria-live={rotating ? 'off' : 'polite'} aria-atomic="true" className="grid rounded-xl border border-[#CCB19B] bg-[#FAEFE0] p-4">
          {TESTIMONIALS.map((story, position) => (
            <article key={story.name} aria-hidden={position !== index}
              className={`col-start-1 row-start-1 min-w-0 ${position === index ? '' : 'invisible'}`}>
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="grid size-11 shrink-0 place-items-center rounded-full bg-[#A83A08] text-xs font-black text-white">{story.initials}</span>
                <div><h3 className="font-black">{story.name}</h3><p className="text-xs text-[#643F2B]">{story.stage}</p></div>
              </div>
              <p role="img" aria-label={`Valoración ficticia: ${story.stars} de 5 estrellas`} className="mt-3 text-lg tracking-wider text-[#9A410C]">
                <span aria-hidden="true">{'★'.repeat(story.stars)}{'☆'.repeat(5-story.stars)}</span>
              </p>
              <blockquote className="mt-2 max-w-3xl text-sm leading-relaxed sm:text-base">“{story.quote}”</blockquote>
              <span className="sr-only">Testimonio {position+1} de {count}</span>
            </article>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <button type="button" className={careerLink+' px-2'} onClick={() => move(-1)}>Anterior</button>
          <span className={careerMono+' min-w-[42px] text-center tabular-nums text-[#663E27]'}>{index+1} / {count}</span>
          <button type="button" className={careerButton+' ml-1'} onClick={() => move(1)}>Siguiente testimonio <ArrowRight size={16} aria-hidden="true"/></button>
        </div>
      </div>
    </section>
  );
}

function CareerHero({ label, title, copy }: { label: string; title: string; copy: string }) {
  return <div className="border-b-4 border-[#FF681E] bg-[#201914] text-[#FFF3DF]"
    style={{backgroundImage:'linear-gradient(#3D2D23 1px,transparent 1px),linear-gradient(90deg,#3D2D23 1px,transparent 1px)',backgroundSize:'28px 28px'}}>
    <div className={careerPage + ' py-6 sm:py-8'}>
      <p className={careerMono + ' mb-2 text-[#FFB487]'}>{label}</p>
      <h1 className="max-w-[21ch] text-[clamp(2.2rem,5.4vw,4.25rem)] font-black leading-[.98] tracking-[-.055em]">{title}</h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#F5DBCA] sm:text-base">{copy}</p>
    </div>
  </div>;
}

export function MythsSection() {
  const [index, setIndex] = useState(0);
  const [choice, setChoice] = useState<boolean | null>(null);
  const [finished, setFinished] = useState(false);
  const heading = useRef<HTMLHeadingElement>(null);
  const myth = MYTHS[index];
  const seen = finished ? MYTHS.length : index + Number(choice !== null);

  function nextCard() {
    if (index === MYTHS.length - 1) {
      setFinished(true);
    } else {
      setIndex(index + 1);
      setChoice(null);
    }
    requestAnimationFrame(() => heading.current?.focus({preventScroll:true}));
  }

  function playAgain() {
    setIndex(0);
    setChoice(null);
    setFinished(false);
    requestAnimationFrame(() => heading.current?.focus({preventScroll:true}));
  }

  return <section className="bg-[#EEE6D9]">
    <CareerHero label="Construye el futuro / Orientación vocacional" title="Mitos y realidades" copy="Pon a prueba lo que has escuchado sobre estudiar Civil, elegir un área de trabajo y crecer en la profesión." />
    <div className={careerPage + ' grid gap-4 py-5 sm:py-7 lg:grid-cols-[1.65fr_1fr]'}>
      <article className="min-w-0 overflow-hidden rounded-xl border border-[#B99B82] bg-[#FFF8EE] shadow-[3px_3px_0_#D0B8A1]">
        <div className="flex items-center justify-between gap-2 border-b border-[#CCB19B] bg-[#F5E4D2] px-4 py-2.5">
          <p className={careerMono + ' text-[#743A1F]'}>{finished ? 'Reto terminado' : myth.category}</p>
          <p className={careerMono + ' shrink-0 text-[#583D2D]'} aria-live="polite">{seen}/{MYTHS.length} revisadas</p>
        </div>
        <div className="p-4 sm:p-6">
          <h2 ref={heading} tabIndex={-1} className="text-[clamp(1.55rem,3.6vw,2.5rem)] font-black leading-tight tracking-tight">{finished ? 'Ya puedes mirar la carrera con otros ojos.' : myth.quote}</h2>
          {finished ? (
            <div className="mt-3">
              <p className="max-w-xl text-sm leading-relaxed">Elige una actividad que te haya llamado la atención. Pruébala en el atlas o pregunta en Campus Norte cómo se aprende.</p>
              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2"><a href="#mapa" className={careerButton}>Ir al atlas <ArrowRight size={16} aria-hidden="true"/></a><button type="button" onClick={playAgain} className={careerLink}>Volver a jugar</button></div>
            </div>
          ) : (
            <>
              <div role="group" aria-label="Elige mito o realidad" className="mt-4 flex flex-wrap gap-2">
                {([false,true] as const).map(value => <button key={String(value)} type="button" aria-pressed={choice===value} disabled={choice!==null} onClick={()=>setChoice(value)}
                  className={`min-h-[46px] min-w-[112px] rounded-lg border px-4 font-extrabold ${choice===value?'border-[#40261A] bg-[#302118] text-[#FFF4E2]':'border-[#B99B82] bg-white text-[#542E1C] hover:bg-[#F8DFCA]'}`}>{value?'Realidad':'Mito'}</button>)}
              </div>
              {choice!==null && <div className={`mt-4 rounded-lg border p-3.5 ${choice === myth.truth
                ? 'border-[#9BB299] bg-[#E6EDDD] text-[#1F3D31]'
                : 'border-[#C5A489] bg-[#F0E0CF] text-[#573824]'}`}>
                <div role="status"><p className={careerMono}>{choice===myth.truth?'Acertaste':'Mira el contexto'} · {myth.truth?'Realidad':'Mito'}</p>
                <h3 className="mt-1 text-lg font-extrabold">{myth.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed">{myth.detail}</p></div>
                <div className="mt-2 flex flex-wrap gap-x-4"><a className={careerLink} href={myth.href} target={myth.href.startsWith('https:') ? '_blank' : undefined} rel={myth.href.startsWith('https:') ? 'noreferrer' : undefined}>{myth.action} <ArrowRight size={15} aria-hidden="true"/></a><a className={careerLink} href={myth.source} target="_blank" rel="noreferrer">Fuente <ExternalLink size={14} aria-hidden="true"/></a></div>
              </div>}
              {choice!==null && <button type="button" className={careerButton+' mt-4'} onClick={nextCard}>{index===MYTHS.length-1?'Terminar reto':'Siguiente tarjeta'} <ArrowRight size={16} aria-hidden="true"/></button>}
            </>
          )}
        </div>
      </article>
      <aside className="rounded-xl border border-[#B79D87] bg-[#FAF1E3] p-4 sm:p-5">
        <p className={careerMono+' text-[#743A1F]'}>Del salón al trabajo</p>
        <h2 className="mt-1 text-xl font-black">¿Por dónde empiezo?</h2>
        <ol className="mt-3 grid gap-3 text-sm leading-relaxed">
          <li><strong>01 · Explora una tarea.</strong> Compara qué te gusta más: medir, modelar, coordinar una obra o revisar materiales.</li>
          <li><strong>02 · Hazla en un proyecto.</strong> Cuenta qué problema encontraste, qué propusiste y qué aprendiste. Eso da contexto a tu CV.</li>
          <li><strong>03 · Busca por funciones.</strong> Revisa prácticas o puestos de entrada y lee qué harías en un día real.</li>
        </ol>
        <a href={EMPLOYMENT} target="_blank" rel="noreferrer" className={careerLink+' mt-2'}>Empleabilidad Anáhuac <ExternalLink size={14} aria-hidden="true"/></a>
        <a href="#conecta" className={careerButton+' mt-2 w-full'}>Preguntar a Anáhuac <ArrowRight size={16} aria-hidden="true"/></a>
      </aside>
    </div>
    <div className={careerPage+' pb-6 sm:pb-8'}><TestimonialCarousel /></div>
  </section>;
}

type ContactRole = 'adult' | 'minor' | 'guardian';
type ContactLink = { formUrl: string; noticeUrl: string };

function useInstitutionalContact() {
  const [institutional, setInstitutional] = useState<ContactLink | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch('/api/contacto-config', { signal: controller.signal })
      .then(response => response.ok ? response.json() : null)
      .then(value => {
        if (typeof value?.formUrl === 'string' && typeof value?.noticeUrl === 'string') setInstitutional(value);
      })
      .catch(() => {});
    return () => controller.abort();
  }, []);

  return institutional;
}

function CoordinationAction({ institutional, onOpen, children, className }: {
  institutional: ContactLink | null;
  onOpen: () => void;
  children: React.ReactNode;
  className: string;
}) {
  return institutional
    ? <a href={institutional.formUrl} target="_blank" rel="noreferrer" className={className}>{children} <ExternalLink size={15} aria-hidden="true"/></a>
    : <button type="button" onClick={onOpen} aria-haspopup="dialog" className={className}>{children} <ArrowRight size={15} aria-hidden="true"/></button>;
}

const COORDINATION_EMAIL = 'joseph.guevarafl@anahuac.mx';
const CONTACT_FIELDS = [
  { name: 'nombre', label: 'Nombre', type: 'text', maxLength: 70, autoComplete: 'given-name' },
  { name: 'apellido', label: 'Apellido', type: 'text', maxLength: 100, autoComplete: 'family-name' },
  { name: 'correo', label: 'Correo electrónico', type: 'email', maxLength: 150, autoComplete: 'email' },
  { name: 'preparatoria', label: 'Preparatoria de procedencia', type: 'text', maxLength: 120, autoComplete: 'off' },
] as const;
const contactInput = 'min-h-[44px] min-w-0 rounded border border-[#A99079] bg-white px-2.5 py-2 font-normal';

function CoordinationEmailDraft() {
  const [draftOpened, setDraftOpened] = useState(false);

  function openDraft(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const question = String(values.get('pregunta') ?? '').trim();
    if (!question) {
      const textarea = event.currentTarget.querySelector('textarea');
      textarea?.setCustomValidity('Escribe tu pregunta.');
      textarea?.reportValidity();
      return;
    }
    const body = CONTACT_FIELDS.map(({ name, label }) => `${label}: ${String(values.get(name) ?? '').trim()}`)
      .concat('', 'Pregunta:', question).join('\r\n');
    const subject = encodeURIComponent('Pregunta de Ingeniería Civil · Campus Norte');
    window.location.href = `mailto:${COORDINATION_EMAIL}?subject=${subject}&body=${encodeURIComponent(body)}`;
    setDraftOpened(true);
  }

  return (
    <form onSubmit={openDraft} className="mt-4 space-y-3">
      <p className="text-sm leading-relaxed">Escribe tu duda para preparar un correo a coordinación. Revisa el borrador en tu aplicación de correo y pulsa Enviar para que llegue al coordinador.</p>
      <div className="grid gap-3 sm:grid-cols-2">
        {CONTACT_FIELDS.map(field => (
          <label key={field.name} className="grid gap-1 text-sm font-bold">
            {field.label}
            <input name={field.name} type={field.type} maxLength={field.maxLength} autoComplete={field.autoComplete} className={contactInput} required />
          </label>
        ))}
      </div>
      <label className="grid gap-1 text-sm font-bold">
        ¿Qué te gustaría preguntar?
        <textarea name="pregunta" rows={4} maxLength={700} required onChange={event=>event.currentTarget.setCustomValidity('')}
          className={contactInput+' resize-y'} placeholder="Por ejemplo, ¿desde qué semestre hay prácticas de campo?" />
      </label>
      <label className="flex items-start gap-2 text-xs leading-relaxed">
        <input type="checkbox" required className="mt-0.5 size-4 shrink-0 accent-[#A83A08]" />
        Soy mayor de edad o envío la pregunta como madre, padre o representante legal.
      </label>
      <button type="submit" className={careerButton}>Abrir borrador en mi correo <ArrowRight size={15} aria-hidden="true" /></button>
      {draftOpened && <p role="status" className="text-sm text-[#693618]">Busca el borrador en tu aplicación de correo para enviarlo.</p>}
    </form>
  );
}

function CoordinationDialog({ open, onClose, institutional }: {
  open: boolean;
  onClose: () => void;
  institutional: ContactLink | null;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (open && !dialog.current?.open) dialog.current?.showModal();
  }, [open]);

  return (
    <dialog ref={dialog} aria-labelledby="coordinator-dialog-title" onClose={onClose}
      className="m-auto max-h-[90vh] w-[calc(100%_-_2rem)] max-w-lg overflow-auto rounded-2xl border border-[#B99B82] bg-[#FFF8EE] p-5 text-[#201914] shadow-2xl backdrop:bg-[#201914]/70 sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className={careerMono+' text-[#743A1F]'}>Ingeniería Civil · Campus Norte</p>
          <h2 id="coordinator-dialog-title" className="mt-1 text-2xl font-black">Habla con el coordinador</h2>
        </div>
        <button type="button" onClick={()=>dialog.current?.close()} className="grid size-11 shrink-0 place-items-center rounded border border-[#B99B82] bg-white" aria-label="Cerrar formulario">
          <X size={18} aria-hidden="true" />
        </button>
      </div>
      <p className="mt-2 text-sm">Mtro. Joseph Guevara · Coordinación de Ingeniería Civil</p>
      {institutional
        ? <p className="mt-4 text-sm">Escribe tu pregunta en el formulario institucional de Anáhuac. Coordinación te responderá por correo.</p>
        : open && <CoordinationEmailDraft />}
      <p className="mt-4 text-xs leading-relaxed">Si eres menor de edad, pide a tu madre, padre o representante legal que envíe la solicitud con su propio correo.</p>
      <div className="mt-3 flex flex-wrap gap-x-4">
        {institutional
          ? <a href={institutional.formUrl} target="_blank" rel="noreferrer" className={careerButton}>Abrir formulario institucional <ExternalLink size={15} aria-hidden="true"/></a>
          : <a href={CAMPUS_CONTACT} target="_blank" rel="noreferrer" className={careerButton}>Solicitar informes en Campus Norte <ExternalLink size={15} aria-hidden="true"/></a>}
        <a href={institutional?.noticeUrl ?? CONTACT_NOTICE} target="_blank" rel="noreferrer" className={careerLink}>Aviso de privacidad <ExternalLink size={14} aria-hidden="true"/></a>
      </div>
    </dialog>
  );
}

export function ContactSection() {
  const [role, setRole] = useState<ContactRole | null>(null);
  const institutional = useInstitutionalContact();
  const [coordinationOpen, setCoordinationOpen] = useState(false);

  return <section className="bg-[#EEE6D9]">
    <CareerHero label="Campus Norte / Ingeniería Civil" title="Conecta con Anáhuac." copy="Recibe información de la carrera, pregunta por visitas o actividades, o lleva tus dudas a la coordinación académica." />
    <div className={careerPage+' grid gap-4 py-5 sm:py-7 lg:grid-cols-[1.5fr_1fr]'}>
      <article className="rounded-xl border border-[#B99B82] bg-[#FFF8EE] p-4 shadow-[3px_3px_0_#D0B8A1] sm:p-6">
        <p className={careerMono+' text-[#743A1F]'}>Solicitud voluntaria</p>
        <h2 className="mt-1 text-2xl font-black">¿Quién solicita información?</h2>
        <div role="group" aria-label="Quién solicita información" className="mt-3 grid gap-2 sm:grid-cols-3">
          {([
            ['adult','Tengo 18 años o más'],
            ['minor','Soy menor de 18'],
            ['guardian','Soy madre, padre o tutor'],
          ] as const).map(([id,label])=><button type="button" key={id} aria-pressed={role===id} onClick={()=>setRole(id)}
            className={`min-h-[48px] rounded-lg border px-3 py-2 text-left text-sm font-bold ${role===id?'border-[#39291E] bg-[#302118] text-[#FFF4E2]':'border-[#B99B82] bg-white text-[#542E1C] hover:bg-[#F8DFCA]'}`}>{label}</button>)}
        </div>
        <div className="mt-4 text-sm leading-relaxed" aria-live="polite">
          {role===null && <p>Elige una opción para ver el paso que te corresponde.</p>}
          {role==='minor' && <div className="rounded-lg border border-[#C6A88A] bg-[#F5E5D2] p-3.5">
            <p>Pide a tu madre, padre o representante legal que haga la solicitud contigo. Podrá usar su propio correo para recibir información y avisos.</p>
            <button type="button" onClick={()=>setRole('guardian')} className={careerLink+' mt-1'}>Continuar con mi madre, padre o tutor</button>
          </div>}
          {(role==='adult'||role==='guardian') && <div className="rounded-lg border border-[#C6A88A] bg-[#F5E5D2] p-3.5">
            <p>{role==='adult'?'Usa tu propio correo si quieres que el equipo de Anáhuac te contacte.':'Usa tu correo como madre, padre o representante legal. La Universidad te indicará cómo dar el consentimiento que corresponda.'}</p>
            <a href={CAMPUS_CONTACT} target="_blank" rel="noreferrer" className={careerButton+' mt-3'}>Solicitar informes en Campus Norte <ExternalLink size={16} aria-hidden="true"/></a>
            <p className="mt-2 text-xs text-[#5C4637]">Se abre el sitio oficial de Campus Norte. Elige Ingeniería Civil en el formulario de informes.</p>
          </div>}
        </div>
        <div className="mt-4 border-t border-[#D4BAA4] pt-2">
          <CoordinationAction institutional={institutional} onOpen={()=>setCoordinationOpen(true)} className={careerButton+' my-2'}>Habla con el coordinador</CoordinationAction>
          <p className="text-sm font-semibold">Puedes escribir al coordinador o solicitar informes en el sitio oficial de Campus Norte.</p>
          <a href="#privacidad" className={careerLink}>Cómo se usan tus datos <ArrowRight size={15} aria-hidden="true"/></a>
          {institutional && <a href={institutional.noticeUrl} target="_blank" rel="noreferrer" className={careerLink+' ml-3'}>Aviso del formulario <ExternalLink size={15} aria-hidden="true"/></a>}
        </div>
      </article>
      <aside className="grid content-start gap-3">
        <div className="rounded-xl border border-[#B79D87] bg-[#FAF1E3] p-4">
          <p className={careerMono+' text-[#743A1F]'}>Conoce el campus</p><h2 className="mt-1 text-xl font-black">Agenda una cita informativa.</h2>
          <p className="mt-2 text-sm leading-relaxed">Pregunta por recorridos, laboratorios y actividades para aspirantes según disponibilidad. Selecciona Campus Norte.</p>
          {role!=='minor' && <a href={APPOINTMENT} target="_blank" rel="noreferrer" className={careerLink}>Ver citas de informes <ExternalLink size={15} aria-hidden="true"/></a>}
        </div>
        <div className="rounded-xl border border-[#B79D87] bg-[#FAF1E3] p-4">
          <p className={careerMono+' text-[#743A1F]'}>Habla con coordinación</p><h2 className="mt-1 text-xl font-black">Lleva tu pregunta.</h2>
          <p className="mt-2 text-sm leading-relaxed">Solicita seguimiento con el Mtro. Joseph Guevara para resolver preguntas sobre materias, proyectos y la experiencia en la carrera.</p>
          <CoordinationAction institutional={institutional} onOpen={()=>setCoordinationOpen(true)} className={careerButton+' mt-3'}>Abrir formulario de coordinación</CoordinationAction>
          <a href={PROGRAM} target="_blank" rel="noreferrer" className={careerLink+' ml-3'}>Ficha oficial <ExternalLink size={15} aria-hidden="true"/></a>
        </div>
      </aside>
    </div>
    <div className={careerPage+' pb-6 sm:pb-8'}>
      <div className="rounded-xl border border-[#B79D87] bg-[#FFF8EE] p-4 sm:p-6">
        <h2 className="mb-4 text-xl font-black">Redes y sitios oficiales</h2>
        <InstitutionalChannels />
      </div>
    </div>
    <CoordinationDialog open={coordinationOpen} onClose={()=>setCoordinationOpen(false)} institutional={institutional} />
  </section>;
}

export function PrivacySection() {
  return <section className="bg-[#EEE6D9]">
    <CareerHero label="Construye el futuro / Privacidad" title="Tus datos y tu decisión." copy="El atlas, las misiones y el juego de mitos se pueden usar sin registro. Solicitar contacto es una decisión aparte." />
    <div className={careerPage+' grid gap-3 py-5 sm:grid-cols-2 sm:py-7'}>
      <article className="rounded-xl border border-[#B99B82] bg-[#FFF8EE] p-4">
        <h2 className="text-xl font-black">Dentro de la app</h2><p className="mt-2 text-sm leading-relaxed">El juego guarda el avance y el nivel durante la sesión en tu navegador. La guía envía el tema seleccionado y el nivel si está conectada. El registro de orientación abre en otro sitio y no se vincula con tus respuestas del juego.</p>
      </article>
      <article className="rounded-xl border border-[#B99B82] bg-[#FFF8EE] p-4">
        <h2 className="text-xl font-black">Al solicitar informes</h2><p className="mt-2 text-sm leading-relaxed">La Universidad Anáhuac México, operada por Investigaciones y Estudios Superiores, S.C., dispone de canales institucionales de atención preuniversitaria. Antes de enviar, revisa el aviso que acompaña al formulario que uses, sus campos y los permisos que aceptas.</p>
        <a href={CONTACT_NOTICE} target="_blank" rel="noreferrer" className={careerLink}>Aviso de contacto preuniversitario <ExternalLink size={15} aria-hidden="true"/></a>
      </article>
      <article className="rounded-xl border border-[#B99B82] bg-[#FFF8EE] p-4">
        <h2 className="text-xl font-black">Si eres menor de edad</h2><p className="mt-2 text-sm leading-relaxed">Puedes jugar por tu cuenta. Para compartir datos y solicitar seguimiento, pide a tu madre, padre o representante legal que continúe contigo. Puede usar su propio correo.</p>
      </article>
      <article className="rounded-xl border border-[#B99B82] bg-[#FFF8EE] p-4">
        <h2 className="text-xl font-black">Si cambias de opinión</h2><p className="mt-2 text-sm leading-relaxed">Consulta cómo retirar tu consentimiento, dejar de recibir comunicaciones o solicitar acceso, corrección, cancelación u oposición al uso de tus datos.</p>
        <a href={PRIVACY_PORTAL} target="_blank" rel="noreferrer" className={careerLink}>Procedimientos de privacidad de Anáhuac <ExternalLink size={15} aria-hidden="true"/></a>
      </article>
    </div>
  </section>;
}
