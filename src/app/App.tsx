import { useCallback, useEffect, useRef, useState } from "react";
import clockFace from "../Assets/Images/clock-face.webp";
import tickMarks from "../Assets/Images/tick-marks.webp";
import hourHand from "../Assets/Images/hour-hand.webp";
import centerCap from "../Assets/Images/center-cap.webp";
import imghero from "../Assets/Images/relojreloj.png";
import servicio1 from "../Assets/Images/servicio1.webp";
import servicio2 from "../Assets/Images/servicio2.webp";
import servicio3 from "../Assets/Images/servicio3.webp";
import servicio4 from "../Assets/Images/servicio4.webp";
import izqb from "../Assets/Images/izqb.webp";
import derb from "../Assets/Images/derb.webp";
import centroimagen from "../Assets/Images/centroimagen.webp";
import logofull from "../Assets/Images/logofull.webp";
import i1 from "../Assets/Images/i1.webp";
import i2 from "../Assets/Images/i2.webp";
import i3 from "../Assets/Images/i3.webp";
import i4 from "../Assets/Images/i4.webp";
import i5 from "../Assets/Images/i5.webp";
import mision from "../Assets/Images/mision.webp";
import vision from "../Assets/Images/vision.webp";
import { SmoothCursor } from "../app/components/ui/smooth-cursor";
import workBg from "../Assets/Images/Fondoreloj.png";

const animVideo = new URL("../imports/Anim-inicial.webm", import.meta.url).href;
const philosophyVideo = new URL("../imports/Backgroundvideo.mp4", import.meta.url).href;
const statsVideo = new URL("../imports/Creacion.mp4", import.meta.url).href;


const blocks = [

  {
    id: "01",
    label: "Manifiesto",
    bg: "#ffffff",
    accent: "#BF3E53",
    content: {
      type: "hero",
      title: "El tiempo se inclina ante las marcas que forjamos",
      sub: "Diseñando identidades precisas para marcas que aspiran a permanencia, prestigio y autoridad cultural.",
    },
  },
  {
    id: "02",
    label: "Filosofía",
    bg: "#1F2B24",
    accent: "#BF3E53",
    content: {
      type: "philosophy",
      title: "Tres principios que gobiernan cada proyecto.",
      items: [
        { n: "I", h: "Claridad antes que ornamento", b: "Cada elemento debe justificar su existencia. Lo que no comunica, elimina." },
        { n: "II", h: "Estructura como lenguaje", b: "La rejilla no es una restricción — es la gramática con la que hablamos." },
        { n: "III", h: "Tiempo como material", b: "El diseño que dura es aquel que anticipó cómo envejece." },
      ],
    },
  },
  {
    id: "03",
    label: "Trabajo",
    bg: "#171C1A",
    accent: "#BF3E53",
    content: {
      type: "work",
      title: "Proyectos seleccionados.",
      projects: [
        { title: "Sistema identidad — Banco Central", year: "2024", cat: "Identidad corporativa", img: "photo-1486406146926-c627a92ad1ab" },
        { title: "Campaña — Feria del Libro", year: "2023", cat: "Diseño editorial", img: "photo-1481627834876-b7833e8f5570" },
        { title: "Señalética — Aeropuerto Regional", year: "2023", cat: "Diseño ambiental", img: "photo-1436491865332-7a61a109cc05" },
      ],
    },
  },
  {
    id: "04",
    label: "Números",
    bg: "#ffffff",
    accent: "#0c0c0c",
    content: {
      type: "stats",
      title: "Evidencia.",
      stats: [
        { value: "147", unit: "proyectos", desc: "completados desde 2019" },
        { value: "38", unit: "clientes", desc: "retienen el servicio > 3 años" },
        { value: "12", unit: "países", desc: "en los que opera nuestra obra" },
        { value: "96%", unit: "satisfacción", desc: "medida post-entrega" },
      ],
    },
  },
  {
    id: "05",
    label: "Proceso",
    bg: "#ffffff",
    accent: "#BF3E53",
    content: {
      type: "process",
      title: "Nuestros valores",
      steps: [
        { n: "01", title: "Prestigio y Exclusividad", desc: "Llevaremos cualquier marca al Olimpo relojero, sin importar su origen. Todos lo desearán; pocos lo merecerán. Cada proyecto inspirará deseo exclusivo, el valor percibido eterno y la excelencia incuestionable." },
        { n: "02", title: "Complicación visible", desc: "Hacemos gráfica la precisión y complejidad mecánica que define la haute horlogerie." },
        { n: "03", title: "Atención singular", desc: "Soluciones radicalmente únicas y originales para cada maison, sin fórmulas repetidas." },
        { n: "04", title: "Innovación cultural", desc: "Interpretamos con respeto la historia del relojero, visibilizando su cultura para el mundo moderno." },
        { n: "05", title: "Artesanía narrada", desc: "Mostramos al público todo lo que implica crear un ejemplar de alta relojería; cada pieza, herramienta, material, sin importar lo insignificante que sea, es indispensable en la creación de nuestras indentidades." },
      ],
    },
  },
  {
    id: "06",
    label: "Equipo",
    bg: "#171C1A",
    accent: "#e8001f",
    content: {
      type: "team",
      title: "Nuestros servicios",
      members: [
        { name: "Valentina Ríos", role: "Directora creativa", since: "Desde 2019", img: "photo-1573496359142-b8d87734a5a2" },
        { name: "Mateo Fuentes", role: "Director de estrategia", since: "Desde 2019", img: "photo-1507003211169-0a1dd7228f2d" },
        { name: "Sofía Mendoza", role: "Diseñadora senior", since: "Desde 2021", img: "photo-1580489944761-15a19d654956" },
        { name: "Lucas Vera", role: "Tipógrafo", since: "Desde 2022", img: "photo-1472099645785-5658abf4ff4e" },
      ],
    },
  },
  {
    id: "07",
    label: "Reconocimientos",
    bg: "#DDC9B4",
    accent: "#BF3E53",
    content: {
      type: "awards",
      title: "Reconocido por quienes definen el campo.",
      awards: [
        { org: "Red Dot Award", year: "2024", cat: "Brand & Communication Design" },
        { org: "D&AD", year: "2023", cat: "Graphic Design — Wood Pencil" },
        { org: "Lápiz de Platino", year: "2023", cat: "Identidad Corporativa" },
        { org: "ADC Annual Awards", year: "2022", cat: "Typography Excellence" },
        { org: "Type Directors Club", year: "2022", cat: "Communication Design" },
        { org: "Cannes Lions", year: "2021", cat: "Design — Silver" },
      ],
    },
  },
  {
    id: "08",
    label: "Contacto",
    bg: "#fFffff",
    accent: "#BF3E53",
    content: {
      type: "contact",
      title: "Construyamos\nalgo que dure.",
      email: "hola@estudio-rigor.com",
      address: "Calle Lastarria 247, Santiago · Chile",
      note: "Respondemos en menos de 48 horas. Proyectos para 2025 con disponibilidad limitada.",
    },
  },
];

// Block 2 (index 2) has 3 internal sub-stages triggered by scroll
const BLOCK_HEIGHTS = [1, 1, 1, 1, 1, 1, 1, 1]; // vh units per block
const SPECIAL_IDX = 2;
const MISSION_IDX = 6;
const TOTAL_SCROLL_UNITS = BLOCK_HEIGHTS.reduce((a, b) => a + b, 0); // 8
const FOOTER_MENU_ITEMS: Array<{ label: string; index: number }> = [
  { label: "Inicio", index: 0 },
  { label: "perpectus", index: 1 },
  { label: "Contexto", index: 2 },
  { label: "Insight", index: 3 },
  { label: "Principios", index: 4 },
  { label: "Servicios", index: 5 },
  { label: "Mision", index: 6 },
  { label: "Universo", index: 7 },
];
const SECTION_TITLE_STYLE = {
  fontFamily: "Barlow Condensed, sans-serif",
  fontWeight: 700,
  fontSize: "clamp(28px, 4vw, 70px)",
  lineHeight: 1,
  letterSpacing: "-0.01em",
} as const;


function getBlockStart(idx: number, vh: number) {
  return BLOCK_HEIGHTS.slice(0, idx).reduce((a, b) => a + b, 0) * vh;
}
function getBlockEnd(idx: number, vh: number) {
  return BLOCK_HEIGHTS.slice(0, idx + 1).reduce((a, b) => a + b, 0) * vh;
}

// ── Clock face ──────────────────────────────────────────────────────────────
// subStage: 0 = 12:00 (0°), 1 = 6:00 (180°), 2 = 12:00 again (360°)
function ClockFace({ subStage }: { subStage: number }) {
  const hourRef      = useRef<SVGGElement>(null);
  const degRef       = useRef(0);   // accumulated degrees (never resets backward)
  const prevStageRef = useRef(-1);  // -1 = initial mount

  useEffect(() => {
    const el = hourRef.current;
    if (!el) return;
    const prev = prevStageRef.current;
    prevStageRef.current = subStage;

    const applyRotation = (deg: number, transition: string) => {
      el.style.transition = transition;
      el.setAttribute("transform", `rotate(${deg} 0 0)`);
    };

    // Re-entering block from next block (stage jumped 2→0): snap, no animation
    if (prev === 2 && subStage === 0) {
      const snapTo = Math.round(degRef.current / 360) * 360;
      degRef.current = snapTo;
      applyRotation(snapTo, "none");
      return;
    }

    // Initial mount
    if (prev === -1) {
      degRef.current = 0;
      applyRotation(0, "none");
      return;
    }

    // Normal advance/retreat: accumulate delta
    degRef.current += (subStage - prev) * 180;
    applyRotation(degRef.current, "transform 900ms cubic-bezier(0.76,0,0.24,1)");
  }, [subStage]);

  const R = 80;
  const handScale = 3.2;

  return (
    <svg viewBox="-50 -100 200 200" style={{ width: "200%", height: "200%" }}>
      <image href={clockFace} x={-100} y={-100} width={200} height={200} preserveAspectRatio="xMidYMid meet" />
      <image href={tickMarks} x={-100 / 1.18} y={-100 / 1.18} width={200 / 1.18} height={200 / 1.18} preserveAspectRatio="xMidYMid meet" />
 
      <g ref={hourRef}>
        <image
          href={hourHand}
          x={-16 * handScale}
          y={-18 * handScale}
          width={32 * handScale}
          height={36 * handScale}
          preserveAspectRatio="xMidYMid meet"
        />
      </g>

      <image
        href={centerCap}
        x={-12}
        y={-12}
        width={24}
        height={24}
        preserveAspectRatio="xMidYMid meet"
      />
    </svg>
  );
}

const WORK_STAGES = [
  {
    title: "La Haute Horlogerie",
    body: "La haute horlogerie es el segmento más alto de la relojería mecánica, donde los relojes se fabrican casi íntegramente a mano, con movimientos propios, complicaciones avanzadas, acabados artísticos y una extrema precisión . Además de la técnica, este mundo valora la historia, el legado, la legitimidad cultural de la firma y la capacidad de proyectar excelencia con sobriedad. define quiénes somos. Cada pieza fue elegida por lo que resolvió, no solo por cómo se ve.",
  },
  {
    title: "LO QUE EXIGE COMUNICAR",
    body: "En este universo, el valor no se agota en la pieza terminada, sino en todo lo que sostiene su existencia: precisión, complejidad, oficio, historia y legitimidad cultural. Comunicar alta relojería exige hacer visible esa profundidad sin recurrir al exceso, manteniendo control visual, claridad y una sofisticación indispensable.",
  },
  {
    title: "Nuestra respuesta",
    body: "PERPECTUS Atelier traduce ese lenguaje técnico y cultural en sistemas de identidad precisos, sobrios y duraderos. No se trata solo de construir una marca elegante, sino de forjar una presencia capaz de expresar complejidad, prestigio y permanencia con la misma disciplina con la que se compone un mecanismo de alta relojería.",
  },
];

function WorkScrollBlock({
  data, textColor, subStage,
}: {
  data: typeof blocks[0];
  textColor: string;
  subStage: number;
}) {
  const [displayStage, setDisplayStage] = useState(subStage);
  const titleElRef   = useRef<HTMLDivElement>(null);
  const bodyElRef    = useRef<HTMLDivElement>(null);
  const prevStageRef = useRef(subStage);
  const pendingRef   = useRef<ReturnType<typeof setTimeout>[]>([]);

  const instant = (el: HTMLElement | null, opacity: number, y: number) => {
    if (!el) return;
    el.style.transition = "none";
    el.style.opacity = String(opacity);
    el.style.transform = `translateY(${y}px)`;
  };
  const animTo = (el: HTMLElement | null, opacity: number, y: number, delay: number, dur: number) => {
    if (!el) return;
    const t = setTimeout(() => {
      el.style.transition = `opacity ${dur}ms cubic-bezier(0.4,0,0.2,1), transform ${dur}ms cubic-bezier(0.4,0,0.2,1)`;
      el.style.opacity = String(opacity);
      el.style.transform = `translateY(${y}px)`;
    }, delay);
    pendingRef.current.push(t);
  };

  useEffect(() => {
    const pending = pendingRef.current;
    if (subStage === prevStageRef.current) return;
    const dir = (subStage > prevStageRef.current ? 1 : -1) as 1 | -1;
    prevStageRef.current = subStage;

    pending.forEach(clearTimeout);
    pending.length = 0;

    const title   = titleElRef.current;
    const body    = bodyElRef.current;
    const EXIT_Y  =  dir * 22;
    const ENTER_Y = -dir * 22;
    const DUR     = 760;
    const STAGGER = 70;
    const EXIT_END = DUR + STAGGER + 40;

    if (dir === 1) {
      animTo(body,  0, EXIT_Y, 0,       DUR);
      animTo(title, 0, EXIT_Y, STAGGER, DUR);
    } else {
      animTo(title, 0, EXIT_Y, 0,       DUR);
      animTo(body,  0, EXIT_Y, STAGGER, DUR);
    }

    const t = setTimeout(() => {
      setDisplayStage(subStage);
      instant(title, 0, ENTER_Y);
      instant(body,  0, ENTER_Y);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (dir === 1) {
            animTo(body,  1, 0, 0,       DUR);
            animTo(title, 1, 0, STAGGER, DUR);
          } else {
            animTo(title, 1, 0, 0,       DUR);
            animTo(body,  1, 0, STAGGER, DUR);
          }
        });
      });
    }, EXIT_END);
    pending.push(t);

    return () => { pending.forEach(clearTimeout); pending.length = 0; };
  }, [subStage]);

  const stage = WORK_STAGES[displayStage];

  return (
    <div
      style={{
        position: "relative",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        height: "100%",
        overflow: "hidden",
        isolation: "isolate",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${workBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.22,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Left — clock */}
      <div style={{
        position: "relative",
        zIndex: 1,
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "clamp(2rem, 5vw, 4rem)",
        borderRight: `1px solid ${textColor}0d`,
      }}>
        <div style={{ width: "min(42vh, 100%)", aspectRatio: "1" }}>
          <ClockFace subStage={subStage} />
        </div>
      </div>

      {/* Right — animated text */}
      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "4rem 3.5rem", overflow: "hidden" }}>
        {/* Headline */}
        <div ref={titleElRef} style={{ marginBottom: "1.75rem", willChange: "transform, opacity" }}>
          <h2 style={{
            ...SECTION_TITLE_STYLE,
            color: textColor,
            margin: 0,
          }}>
            {stage.title}
          </h2>
        </div>

        {/* Body text */}
        <div ref={bodyElRef} style={{ willChange: "transform, opacity" }}>
          <p style={{
            fontFamily: "DM Sansina, sans-serif",
            fontSize: "clamp(15px, 1.25vw, 28px)",
            color: "#ffffffb4",
            opacity: 1,
            lineHeight: 1.5,
            maxWidth: "700px",
            margin: 0,
          }}>
            {stage.body}
          </p>
        </div>
      </div>
    </div>
  );
}
// ────────────────────────────────────────────────────────────────────────────

function HeroBlock({ data, textColor }: { data: typeof blocks[0]; textColor: string }) {
  const c = data.content as {
    type: "hero";
    title: string;
    sub: string;
  };
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, scale: 1 });

  const handleTiltMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    setTilt({
      rotateX: -(y * 28),
      rotateY: x * 28,
      scale: 1.04,
    });
  };

  const resetTilt = () => {
    setTilt({ rotateX: 0, rotateY: 0, scale: 1 });
  };

  return (
    <div
      style={{
        height: "90%",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        paddingBottom: "7.8vh",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: "600px" }}>
        {/* RELOJ ARRIBA */}
        <div
          onMouseMove={handleTiltMove}
          onMouseLeave={resetTilt}
          style={{
            display: "inline-block",
            transform: `perspective(900px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(${tilt.scale})`,
            transition: "transform 140ms ease-out",
            willChange: "transform",
            margin: "0 auto 10 rem",
            marginTop: "800px",
          }}
        >
          <img
            src={imghero}
            alt="Reloj"
            style={{
              display: "block",
              maxWidth: "400px",
              height: "auto",
              filter: "drop-shadow(0 20px 40px rgba(5, 5, 5, 0.23))",
            }}
          />
        </div>

        {/* TEXTO ABAJO */}
        <h1
          style={{
            fontFamily: "Barlow Condensed, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(18px, 2vw, 26px)",
            color: textColor,
            letterSpacing: "0.02em",
            marginBottom: "0.90rem",
            lineHeight: 1.2,
          }}
        >
          {c.title}
        </h1>
        <p
          style={{
            fontFamily: "DM Sans, sans-serif",
            fontSize: "clamp(14px, 1.1vw, 18px)",
            color: "#a5a5a1",
            opacity: 1,
            lineHeight: 1.2,
            letterSpacing: "0.01em",
          }}
        >
          {c.sub}
        </p>
      </div>
    </div>
  );
}

function PhilosophyBlock({ textColor, isActive }: { data: typeof blocks[1]; textColor: string; isActive?: boolean }) {
  const quoteRef = useRef<HTMLParagraphElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = quoteRef.current;
    if (!el) return;
    let timer: ReturnType<typeof setTimeout>;

    if (isActive) {
      timer = setTimeout(() => {
        el.style.transition = "none";
        el.style.opacity = "0";
        requestAnimationFrame(() => requestAnimationFrame(() => {
          el.style.transition = "opacity 1400ms cubic-bezier(0.4,0,0.2,1)";
          el.style.opacity = "0.88";
        }));
      }, 600);
    } else {
      el.style.transition = "opacity 400ms cubic-bezier(0.4,0,0.2,1)";
      el.style.opacity = "0";
    }

    return () => clearTimeout(timer);
  }, [isActive]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isActive) {
      video.currentTime = 0;
      video.play().catch(() => undefined);
    }
  }, [isActive]);

  return (
    <div style={{ position: "relative", height: "100%", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", padding: "4rem" }}>
      <video
        ref={videoRef}
        src={philosophyVideo}
        muted
        loop
        playsInline
        preload="auto"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.28,
          pointerEvents: "none",
        }}
      />
      <p ref={quoteRef} style={{
        position: "relative",
        zIndex: 1,
        fontFamily: "DM Sans, sans-serif",
        fontStyle: "italic",
        fontWeight: 300,
        fontSize: "clamp(16px, 2vw, 24px)",
        color: textColor,
        lineHeight: 1.6,
        textAlign: "center",
        maxWidth: "560px",
        opacity: 0,
      }}>
        "Perpectus Atelier es el taller selecto donde forjamos identidades perpetuas para maisons de haute horlogerie, elevando cualquier marca al Olimpo relojero mediante estrategias exclusivas y soluciones radicalmente originales para cada casa relojera, sin fórmulas repetidas ni concesiones genéricas"
      </p>
    </div>
  );
}

function WorkBlock({ data, textColor }: { data: typeof blocks[2]; textColor: string }) {
  const c = data.content as {
    type: "work";
    title: string;
    projects: Array<{ title: string; year: string; cat: string; img: string }>;
  };

  return (
    <div
      className="flex flex-col justify-between h-full p-12 md:p-20"
      style={{
        backgroundImage: `linear-gradient(rgba(23, 28, 26, 0.78), rgba(23, 28, 26, 0.78)), url(${workBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <BlockHeader id={data.id} label={data.label} textColor={textColor} />

      <div>
        <h2
          style={{
            ...SECTION_TITLE_STYLE,
            color: textColor,
            marginBottom: "2.5rem",
          }}
        >
          {c.title}
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {c.projects.map((p, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                alignItems: "center",
                padding: "1.25rem 0",
                borderTop: `1px solid ${textColor}18`,
                cursor: "pointer",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <div>
                <span
                  style={{
                    fontFamily: "DM Mono, monospace",
                    fontSize: "20px",
                    color: textColor,
                    opacity: 0.4,
                    letterSpacing: "0.15em",
                  }}
                >
                  {p.cat.toUpperCase()}
                </span>
                <h3
                  style={{
                    fontFamily: "Barlow Condensed, sans-serif",
                    fontWeight: 600,
                    fontSize: "clamp(20px, 3vw, 32px)",
                    color: textColor,
                    marginTop: "0.25rem",
                  }}
                >
                  {p.title}
                </h3>
              </div>
              <span
                style={{
                  fontFamily: "DM Mono, monospace",
                  fontSize: "20px",
                  color: textColor,
                  opacity: 0.4,
                }}
              >
                {p.year}
              </span>
            </div>
          ))}
          <div style={{ height: "1px", background: `${textColor}18` }} />
        </div>
      </div>
    </div>
  );
}

function StatsBlock({ data, textColor, isActive }: { data: typeof blocks[3]; textColor: string; isActive?: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    if (!isActive) {
      setAnimateIn(false);
      return;
    }

    setAnimateIn(false);
    const frame = requestAnimationFrame(() => setAnimateIn(true));
    return () => cancelAnimationFrame(frame);
  }, [isActive]);

  const enterStyle = (delayMs: number, durationMs = 420, targetOpacity = 1) => ({
    opacity: animateIn ? targetOpacity : 0,
    transform: animateIn ? "translateY(0)" : "translateY(14px)",
    transition: `opacity ${durationMs}ms cubic-bezier(0.22, 1, 0.36, 1) ${delayMs}ms, transform ${durationMs}ms cubic-bezier(0.22, 1, 0.36, 1) ${delayMs}ms`,
    willChange: "opacity, transform",
  } as const);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      const duration = video.duration || 0;
      const currentTime = video.currentTime || 0;
      setProgress(duration > 0 ? (currentTime / duration) * 100 : 0);
    };

    const handleEnded = () => {
      video.currentTime = 0;
      video.play().catch(() => undefined);
    };

    video.addEventListener("timeupdate", updateProgress);
    video.addEventListener("ended", handleEnded);
    video.play().catch(() => undefined);

    return () => {
      video.removeEventListener("timeupdate", updateProgress);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <div style={{ height: "100%", background: data.bg, display: "grid", gridTemplateColumns: "1.05fr 0.95fr", overflow: "hidden", alignItems: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", padding: "clamp(2rem, 5vw, 4rem)", borderRight: "0px solid rgb(243, 241, 241)" }}>
        <h2 style={{ ...SECTION_TITLE_STYLE, color: "#BF3E53", margin: 50, maxWidth: "1000px", ...enterStyle(40, 440) }}>
          El lugar donde el oficio, la historia y el legado toman forma.
        </h2>
        <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "clamp(15px, 1.2vw, 28px)", color: "#4b4b4b", lineHeight: 1.7, margin: 50, maxWidth: "700px", ...enterStyle(130, 460) }}>
          En la alta relojería, el verdadero valor no reside únicamente en el objeto terminado, sino en todo lo que permanece invisible para el observador casual: la precisión, la complejidad, la historia, la tensión entre mecanismo y estética, y la dignidad de cada componente indispensable. El cliente ideal de Perpectus Atelier no busca solo diseño, busca una identidad capaz de revelar con sofisticación esa profundidad cultural y mecánica sin trivalizarlo.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "clamp(1rem, 2.5vw, 2rem)", background: "#cec6c600", width: "100%", height: "100%" }}>
        <div style={{ width: "100%", maxWidth: "350px", display: "flex", alignItems: "center", justifyContent: "center", ...enterStyle(220, 460) }}>
          <video
            ref={videoRef}
            src={statsVideo}
            muted={isMuted}
            loop
            playsInline
            preload="auto"
            style={{ width: "100%", height: "auto", objectFit: "contain", borderRadius: "200px" }}
          />
        </div>

        <div style={{ width: "100%", maxWidth: "300px", marginTop: "0.9rem", display: "flex", alignItems: "center", gap: "0.6rem", ...enterStyle(300, 420) }}>
          <div style={{ flex: 1, height: "3px", background: "rgba(70, 65, 65, 0.48)", borderRadius: "999px", overflow: "hidden" }}>
            <div style={{ width: `${progress}%`, height: "100%", background: "#BF3E53", transition: "width 0.15s linear" }} />
          </div>
          <button
            onClick={() => setIsMuted((v) => !v)}
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.4)",
              background: "rgba(255,255,255,0.16)",
              color: "#ffffff",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(8px)",
            }}
            aria-label={isMuted ? "Activar sonido" : "Desactivar sonido"}
          >
            {isMuted ? "🔈" : "🔊"}
          </button>
        </div>
      </div>
    </div>
  );
}

function ProcessBlock({ data, textColor, isActive }: { data: typeof blocks[4]; textColor: string; isActive?: boolean }) {
  const c = data.content as {
    type: "process";
    title: string;
    steps: Array<{ n: string; title: string; desc: string; dur?: string }>;
  };
  const [animateIn, setAnimateIn] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    if (!isActive) {
      setAnimateIn(false);
      return;
    }

    setAnimateIn(false);
    const frame = requestAnimationFrame(() => setAnimateIn(true));
    return () => cancelAnimationFrame(frame);
  }, [isActive]);

  const enterStyle = (delayMs: number, durationMs = 420, targetOpacity = 1) => ({
    opacity: animateIn ? targetOpacity : 0,
    transform: animateIn ? "translateY(0)" : "translateY(14px)",
    transition: `opacity ${durationMs}ms cubic-bezier(0.22, 1, 0.36, 1) ${delayMs}ms, transform ${durationMs}ms cubic-bezier(0.22, 1, 0.36, 1) ${delayMs}ms`,
    willChange: "opacity, transform",
  } as const);

  const renderStep = (s: { n: string; title: string; desc: string; dur?: string }, i: number, delayMs: number) => (
    <div
      key={i}
      onMouseEnter={() => setHoveredItem(`step-${i}`)}
      onMouseLeave={() => setHoveredItem((current) => (current === `step-${i}` ? null : current))}
      style={{
        position: "relative",
        paddingLeft: 0,
        paddingBottom: "1.5rem",
        maxWidth: "360px",
        width: "100%",
        margin: "0 auto",
        transform: hoveredItem === `step-${i}` ? "translateY(-5px)" : "translateY(0)",
        opacity: hoveredItem === `step-${i}` ? 1 : 0.94,
        filter: hoveredItem === `step-${i}` ? "saturate(1.02)" : "saturate(1)",
        transition: "transform 220ms ease, opacity 220ms ease, filter 220ms ease",
      }}
    >
      <h3
        style={{
          fontFamily: "Barlow Condensed, sans-serif",
          fontWeight: 700,
          fontSize: "36px",
          lineHeight: 0.95,
          color: "#BF3E53",
          margin: "0.3rem 0 0.6rem",
          ...enterStyle(delayMs),
        }}
      >
        {s.title}
      </h3>

      <p
        style={{
          fontFamily: "DM Sans, sans-serif",
          fontSize: "20px",
          color: textColor,
          lineHeight: 1.4,
          ...enterStyle(delayMs + 80, 460, 0.7),
        }}
      >
        {s.desc}
      </p>
    </div>
  );

  return (
    <div className="flex flex-col justify-between h-full p-12 md:p-20">
      <BlockHeader id={data.id} label={data.label} textColor={textColor} />

      <div style={{ marginTop: "2rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) 300px minmax(0, 1fr)",
            columnGap: "2rem",
            rowGap: "2.5rem",
            alignItems: "start",
            justifyItems: "center",
          }}
        >
          <div style={{ width: "100%", display: "flex", justifyContent: "center", paddingTop: "7rem" }}>{renderStep(c.steps[0], 0, 220)}</div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              minHeight: "100%",
              paddingTop: "0.25rem",
              gap: "1.5rem",
              width: "100%",
            }}
          >
            <h2
              style={{
                ...SECTION_TITLE_STYLE,
                color: textColor,
                margin: 0,
                textAlign: "center",
                alignSelf: "center",
                whiteSpace: "nowrap",
                ...enterStyle(40, 440),
              }}
            >
              {c.title}
            </h2>
            <div
              onMouseEnter={() => setHoveredItem("center-image")}
              onMouseLeave={() => setHoveredItem((current) => (current === "center-image" ? null : current))}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: "auto",
                transform: hoveredItem === "center-image" ? "translateY(-4px) scale(1.03)" : "translateY(0) scale(1)",
                opacity: hoveredItem === "center-image" ? 1 : 0.94,
                transition: "transform 220ms ease, opacity 220ms ease",
              }}
            >
              <img
                src={centroimagen}
                alt="Centro"
                style={{
                  width: "100%",
                  maxWidth: "220px",
                  height: "auto",
                  objectFit: "contain",
                  display: "block",
                  ...enterStyle(120, 500),
                }}
              />
            </div>
          </div>

          <div style={{ width: "100%", display: "flex", justifyContent: "center", paddingTop: "7rem" }}>{renderStep(c.steps[1], 1, 290)}</div>

          <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>{renderStep(c.steps[2], 2, 360)}</div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: "100%", maxWidth: "360px" }}>{renderStep(c.steps[4], 4, 500)}</div>
          </div>

          <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>{renderStep(c.steps[3], 3, 430)}</div>
        </div>
      </div>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          [data-process-anim="true"] {
            transition: none !important;
            transform: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>
    </div>
  );
}

function TeamBlock({ data, textColor, isActive }: { data: typeof blocks[5]; textColor: string; isActive?: boolean }) {
  const c = data.content as {
    type: "team";
    title: string;
  };
  const [activeIndex, setActiveIndex] = useState(0);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    if (!isActive) {
      setAnimateIn(false);
      return;
    }

    setAnimateIn(false);
    const frame = requestAnimationFrame(() => setAnimateIn(true));
    return () => cancelAnimationFrame(frame);
  }, [isActive]);

  const enterStyle = (delayMs: number, durationMs = 420, targetOpacity = 1) => ({
    opacity: animateIn ? targetOpacity : 0,
    transform: animateIn ? "translateY(0)" : "translateY(14px)",
    transition: `opacity ${durationMs}ms cubic-bezier(0.22, 1, 0.36, 1) ${delayMs}ms, transform ${durationMs}ms cubic-bezier(0.22, 1, 0.36, 1) ${delayMs}ms`,
    willChange: "opacity, transform",
  } as const);

  const slides = [
    { image: servicio1, title: "Arquitectura de Identidad", caption: "Construcción estratégica y visual de marca. " },
    { image: servicio2, title: "Aplicaciones Editoriales y Físicas", caption: "Publicidad, papelería, impresos y activos físicos de calidad." },
    { image: servicio4, title: "Representación 3D de Productos", caption: "Mockups y representación tridimensional de relojes y mecanismos." },
    { image: servicio3, title: "Fotografía profesional", caption: "Producción fotográfica profesional para piezas y colecciones. " },
  ];
  const navButtonStyle = {
    width: "64px",
    height: "64px",
    border: "none",
    background: "transparent",
    color: textColor,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    transition: "transform 0.2s ease, opacity 0.2s ease",
    opacity: 0.9,
    transformOrigin: "center center",
  } as const;

  const prev = () => setActiveIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setActiveIndex((i) => (i + 1) % slides.length);
  const activeSlide = slides[activeIndex];

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "6rem 3rem 5rem" }}>
      <BlockHeader id={data.id} label={data.label} textColor={textColor} />

      <div style={{ marginTop: "2.2rem", display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: "3rem", alignItems: "center", justifyItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start" }}>
          <h2 style={{ ...SECTION_TITLE_STYLE, color: textColor, marginBottom: "1rem", ...enterStyle(40, 440) }}>
            {c.title}
          </h2>
          <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "clamp(15px, 1.2vw, 18px)", color: textColor, lineHeight: 1.8, maxWidth: "600px", ...enterStyle(120, 460, 0.72) }}>
            Cada servicio está pensado como una pieza del sistema completo: identidad, comunicación y presencia de marca, con rigor visual y coherencia en todos sus puntos de contacto.
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", width: "100%" }}>
          <div style={enterStyle(200, 420, 0.9)}>
            <button
              onClick={prev}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.3)";
                e.currentTarget.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.opacity = "0.9";
              }}
              style={navButtonStyle}
              aria-label="Anterior"
            >
              <img src={izqb} alt="Anterior" style={{ width: "30px", height: "30px", objectFit: "contain", display: "block" }} />
            </button>
          </div>

          <div style={{ width: "100%", maxWidth: "550.6px", borderRadius: "24px", overflow: "hidden", background: "rgba(184, 71, 90, 0.84)", boxShadow: "0 24px 60px rgba(0,0,0,0.18)", ...enterStyle(260, 460) }}>
            <div key={activeIndex} style={{ animation: "fadeIn 0.4s ease" }}>
              <img src={activeSlide.image} alt={activeSlide.title} style={{ width: "100%", height: "585px", objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ padding: "0.55rem 0.95rem 1rem" }}>
              <h3 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "25.92px", color: textColor, margin: 0, ...enterStyle(330, 420) }}>{activeSlide.title}</h3>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "14.96px", color: textColor, lineHeight: 1.7, margin: "0.324rem 0 0", ...enterStyle(390, 440, 0.72) }}>{activeSlide.caption}</p>
            </div>
          </div>

          <div style={enterStyle(250, 420, 0.9)}>
            <button
              onClick={next}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.3)";
                e.currentTarget.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.opacity = "0.9";
              }}
              style={navButtonStyle}
              aria-label="Siguiente"
            >
              <img src={derb} alt="Siguiente" style={{ width: "30px", height: "30px", objectFit: "contain", display: "block" }} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
function AwardsBlock({ data, textColor, stage }: { data: typeof blocks[6]; textColor: string; stage: number }) {
  const slides = [
    {
      title: "Misión",
      text: "Forjar identidades para maisons de alta relojería que traduzcan con precisión su esencia, su historia y su carácter en un lenguaje visual exclusivo, refinado y atemporal, capaz de proyectar su valor con claridad, distinción y permanencia en el tiempo.",
      image: mision,
    },
    {
      title: "Visión",
      text: "Consolidarse como un atelier de referencia en la creación de identidades visuales para la alta relojería, reconocido por desarrollar marcas que no solo destaquen por su excelencia estética, sino también por su capacidad de trascender lo inmediato, construir legado y permanecer vigentes con presencia a lo largo del tiempo.",
      image: vision,
    },
  ];

  const activeIndex = Math.max(0, Math.min(stage, slides.length - 1));

  const renderSlideContent = (slide: { title: string; text: string; image: string }) => (
    <>
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${slide.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(110deg, rgba(18, 24, 22, 0.58) 0%, rgba(18, 24, 22, 0.22) 42%, rgba(18, 24, 22, 0.35) 100%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: "clamp(2rem, 5vw, 4.5rem)",
          bottom: "clamp(2rem, 7vh, 4.5rem)",
          maxWidth: "min(640px, 58vw)",
          zIndex: 3,
        }}
      >
        <h2
          style={{
            ...SECTION_TITLE_STYLE,
            textTransform: "uppercase",
            color: "#f0ede6",
            margin: 0,
          }}
        >
          {slide.title}
        </h2>
        <p
          style={{
            marginTop: "1.2rem",
            fontFamily: "DM Sans, sans-serif",
            fontSize: "clamp(14px, 1.25vw, 22px)",
            lineHeight: 1.55,
            color: "rgba(240, 237, 230, 0.9)",
          }}
        >
          {slide.text}
        </p>
      </div>
    </>
  );

  return (
    <div style={{ height: "100%", position: "relative", overflow: "hidden", background: data.bg }}>
      {slides.map((slide, index) => (
        <div
          key={slide.title}
          style={{
            position: "absolute",
            inset: 0,
            opacity: activeIndex === index ? 1 : 0,
            transition: "opacity 560ms cubic-bezier(0.22, 1, 0.36, 1)",
            pointerEvents: activeIndex === index ? "auto" : "none",
          }}
        >
          {renderSlideContent(slide)}
        </div>
      ))}
    </div>
  );
}

const CAROUSEL_IMGS = [i1, i2, i3, i4, i5];

function ContactBlock({ data, textColor, isActive, footerRevealed }: { data: typeof blocks[7]; textColor: string; isActive?: boolean; footerRevealed?: boolean }) {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    let timer: ReturnType<typeof setTimeout>;

    if (isActive && !footerRevealed) {
      timer = setTimeout(() => {
        // Snap to start position without transition
        el.style.transition = "none";
        el.style.opacity = "0";
        el.style.transform = "translateY(18px)";
        // Double rAF ensures the browser has painted the start state
        requestAnimationFrame(() => requestAnimationFrame(() => {
          el.style.transition = "opacity 1000ms cubic-bezier(0.4,0,0.2,1), transform 1000ms cubic-bezier(0.4,0,0.2,1)";
          el.style.opacity = "1";
          el.style.transform = "translateY(0px)";
        }));
      }, 420);
    } else {
      // Exit: opacity only, no position change
      el.style.transition = "opacity 400ms cubic-bezier(0.4,0,0.2,1)";
      el.style.opacity = "0";
    }

    return () => clearTimeout(timer);
  }, [isActive, footerRevealed]);
  const N            = CAROUSEL_IMGS.length;
  const CARD_SPACING = 270;  // px between card centers (linear)
  const PEAK_Z       = 200;  // translateZ at center (peak of hill)
  const HILL_A       = 22;   // parabola steepness
  const HILL_T       = 1.6;  // offset threshold where parabola becomes linear
  const MAX_DROP_Y   = 48;   // max vertical drop at extremes (px per unit²)

  // Hill trajectory: parabolic near center, linear beyond threshold
  const hillZ = (offset: number) => {
    const abs = Math.abs(offset);
    if (abs <= HILL_T) return PEAK_Z - HILL_A * abs * abs;
    const zAtT   = PEAK_Z - HILL_A * HILL_T * HILL_T;
    const slope  = 2 * HILL_A * HILL_T;
    return zAtT - slope * (abs - HILL_T);
  };
  const hillY = (offset: number) => {
    const abs = Math.abs(offset);
    const K = MAX_DROP_Y;
    if (abs <= HILL_T) return K * abs * abs;
    const yAtT  = K * HILL_T * HILL_T;
    const slope = 2 * K * HILL_T;
    return yAtT + slope * (abs - HILL_T);
  };

  const centerRef = useRef(0);
  const [centerF, setCenterF]   = useState(0);
  const [active,  setActive]    = useState<number | null>(null);
  const [hovered, setHovered]   = useState<number | null>(null);
  const rafRef    = useRef<number | null>(null);

  useEffect(() => {
    if (active !== null) return;
    let prev: number | undefined;
    const tick = (t: number) => {
      if (prev !== undefined) centerRef.current += (t - prev) * 0.00022;
      prev = t;
      setCenterF(centerRef.current);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [active]);

  const handleClick = (i: number) => {
    if (active === i) { setActive(null); }
    else { centerRef.current = i; setCenterF(i); setActive(i); }
  };

  // Wrapped offset of item i from floating center (±N/2)
  const getOffset = (i: number, center: number) => {
    let d = i - ((center % N) + N) % N;
    if (d >  N / 2) d -= N;
    if (d < -N / 2) d += N;
    return d;
  };

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: data.bg, overflow: "hidden" }}>

      {/* Title — top 25% */}
      <div style={{ height: "25%", display: "flex", alignItems: "flex-end", justifyContent: "center", flexShrink: 0, padding: "0 3rem 0" }}>
        <h2 style={{
          ...SECTION_TITLE_STYLE,
          color: textColor,
          margin: 0,
          textAlign: "center",
          marginTop: "0",
          opacity: 0,
        }}
          ref={titleRef}
        >Universo visual</h2>
      </div>

      {/* Carousel — bottom 75% */}
      <div style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        perspective: "1200px",
        perspectiveOrigin: "50% 40%",
        overflow: "hidden",
        position: "relative",
      }}>
        {/* preserve-3d stage — zero-size anchor at center */}
        <div style={{ position: "relative", width: "0px", height: "264px", transformStyle: "preserve-3d" }}>
          {CAROUSEL_IMGS.map((src, i) => {
            const offset  = getOffset(i, centerF);
            const tx      = offset * CARD_SPACING;
            const tz      = hillZ(offset);
            const ty      = hillY(offset);
            const absOff  = Math.abs(offset);
            const scale   = active === i ? 1.4 : Math.max(0.72, 1 - 0.1 * absOff);
            const opacity = active !== null && active !== i
              ? 0.08
              : Math.max(0, 1 - 0.28 * absOff * absOff);
            const isHov   = hovered === i && active === null;

            return (
              <div
                key={i}
                onClick={() => handleClick(i)}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  position: "absolute",
                  top: 0,
                  left: "-132px",
                  width: "264px",
                  height: "264px",
                  cursor: "pointer",
                  borderRadius: "4px",
                  overflow: "hidden",
                  transform: `translateX(${tx}px) translateZ(${tz}px) scale(${isHov ? scale * 1.04 : scale})`,
                  opacity,
                  zIndex: Math.round((1 - absOff / N) * 10 + 10),
                  transition: active !== null
                    ? "transform 0.75s cubic-bezier(0.4,0,0.2,1), opacity 0.6s ease"
                    : "opacity 0.5s ease",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                  willChange: "transform, opacity",
                }}
              >
                <img
                  src={src}
                  alt=""
                  draggable={false}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    filter: isHov ? "brightness(1.12)" : "brightness(0.92)",
                    transition: "filter 0.4s ease",
                    userSelect: "none",
                  }}
                />
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}

function BlockHeader({ id, label, textColor }: { id: string; label: string; textColor: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      
      
    </div>
  );
}

function easeInOutQuart(t: number): number {
  return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
}

// ─── INTRO GRAPHIC ────────────────────────────────────────────────────────────
// To replace the animated graphic with an image, set INTRO_IMAGE to any URL:
//   const INTRO_IMAGE = "https://images.unsplash.com/photo-xxx?w=800&h=800&fit=crop"
// Set to null to show the default animated SVG mark.
const INTRO_IMAGE: string | null = null;

function IntroGraphic() {
  if (INTRO_IMAGE) {
    return (
      <img
        src={INTRO_IMAGE}
        alt="Intro"
        style={{ width: "240px", height: "240px", objectFit: "cover", borderRadius: "2px" }}
      />
    );
  }

  // Animated SVG — swiss geometric mark
  const R = 100; // circle radius
  const circ = 2 * Math.PI * R;

  return (
    <svg
      viewBox="-140 -140 280 280"
      width="180"
      height="180"
      style={{ overflow: "visible" }}
    >
      <style>{`
        @keyframes drawCircle {
          from { stroke-dashoffset: ${circ.toFixed(1)}; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes growH {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes growV {
          from { transform: scaleY(0); }
          to   { transform: scaleY(1); }
        }
        @keyframes popDot {
          0%   { opacity: 0; transform: scale(0); }
          60%  { transform: scale(1.4); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes rotateSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes cornerIn {
          from { opacity: 0; transform: scale(0.6); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>

      {/* Outer rotating ring — faint */}
      <circle
        cx="0" cy="0" r="130"
        fill="none"
        stroke="#f0ede6"
        strokeWidth="0.5"
        strokeOpacity="0.12"
        strokeDasharray="4 8"
        style={{ transformOrigin: "center", animation: "rotateSlow 18s linear infinite" }}
      />

      {/* Main circle — draws itself */}
      <circle
        cx="0" cy="0" r={R}
        fill="none"
        stroke="#f0ede6"
        strokeWidth="1.2"
        strokeDasharray={`${circ.toFixed(1)}`}
        strokeDashoffset={`${circ.toFixed(1)}`}
        strokeLinecap="round"
        style={{ animation: `drawCircle 1.2s cubic-bezier(0.76,0,0.24,1) 0.2s forwards`, transformOrigin: "center", transform: "rotate(-90deg)" }}
      />

      {/* Horizontal crosshair */}
      <line
        x1="-100" y1="0" x2="100" y2="0"
        stroke="#e8001f"
        strokeWidth="1"
        style={{ transformOrigin: "center", animation: "growH 0.6s cubic-bezier(0.76,0,0.24,1) 1.0s both" }}
      />

      {/* Vertical crosshair */}
      <line
        x1="0" y1="-100" x2="0" y2="100"
        stroke="#e8001f"
        strokeWidth="1"
        style={{ transformOrigin: "center", animation: "growV 0.6s cubic-bezier(0.76,0,0.24,1) 1.0s both" }}
      />

      {/* Center dot */}
      <circle
        cx="0" cy="0" r="4"
        fill="#e8001f"
        style={{ transformOrigin: "center", animation: "popDot 0.5s cubic-bezier(0.34,1.56,0.64,1) 1.4s both" }}
      />

      {/* Corner brackets */}
      {([[-118,-118],[118,-118],[118,118],[-118,118]] as [number,number][]).map(([x,y], i) => {
        const sx = x > 0 ? -1 : 1;
        const sy = y > 0 ? -1 : 1;
        const len = 18;
        return (
          <g key={i} style={{ animation: `cornerIn 0.4s ease ${1.2 + i * 0.06}s both` }}>
            <line x1={x} y1={y} x2={x + sx * len} y2={y} stroke="#f0ede6" strokeWidth="1" strokeOpacity="0.4" />
            <line x1={x} y1={y} x2={x} y2={y + sy * len} stroke="#f0ede6" strokeWidth="1" strokeOpacity="0.4" />
          </g>
        );
      })}

      {/* Studio name — bottom */}
      <text
        x="0" y="148"
        textAnchor="middle"
        fontFamily="DM Mono, monospace"
        fontSize="10"
        letterSpacing="4"
        fill="#f0ede6"
        fillOpacity="0.45"
        style={{ animation: "fadeUp 0.7s ease 1.6s both" }}
      >
        ESTUDIO RIGOR
      </text>

      {/* Year — top */}
      <text
        x="0" y="-136"
        textAnchor="middle"
        fontFamily="DM Mono, monospace"
        fontSize="9"
        letterSpacing="3"
        fill="#f0ede6"
        fillOpacity="0.25"
        style={{ animation: "fadeIn 0.7s ease 1.8s both" }}
      >
        EST. 2019
      </text>
    </svg>
  );
}

function IntroScreen({ onExitStart, onComplete }: { onExitStart: () => void; onComplete: () => void }) {
  const [exiting, setExiting] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const holdTimer = setTimeout(() => { setExiting(true); onExitStart(); }, 4600);
    const doneTimer = setTimeout(() => onComplete(), 6400);
    return () => { clearTimeout(holdTimer); clearTimeout(doneTimer); };
  }, [onExitStart, onComplete]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.load();
    video.play().catch(() => setVideoError(true));
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: exiting ? 0 : 1,
        transition: exiting ? "opacity 1.8s ease" : "none",
        pointerEvents: "none",
      }}
    >
      {videoError ? (
        <div
          style={{
            width: "576px",
            height: "324px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #0c0c0c, #e8001f)",
            color: "#f0ede6",
            fontFamily: "DM Sans, sans-serif",
            fontSize: "16px",
            borderRadius: "8px",
          }}
        >
          Animación no disponible
        </div>
      ) : (
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          preload="auto"
          onError={() => setVideoError(true)}
          style={{ width: "576px", height: "324px", objectFit: "contain", background: "transparent" }}
        >
          <source src={animVideo} type="video/webm" />
        </video>
      )}
    </div>
  );
}
// ─────────────────────────────────────────────────────────────────────────────

function Isotipo({ size = 24 }: { size?: number }) {
  const aspect = 41.25 / 33.06;
  return (
    <svg className="bg-[#bf3e5300]" width={size} height={size * aspect} viewBox="0 0 33.06 41.25" style={{ display: "block" }}>
      <path fill="#BF3E53" d="M33.06,31.14l-2.54,3.81-3.96-2.64c-.28.3-.57.58-.87.85-.28.25-.57.49-.87.71-1.74,1.32-3.81,2.24-6.06,2.61v4.77h-4.57v-4.78c-2.22-.38-4.26-1.29-5.98-2.59-.3-.23-.59-.46-.86-.71-.3-.27-.59-.56-.87-.85l-3.95,2.63-2.54-3.81,3.96-2.64c-.31-.69-.56-1.4-.75-2.14-.27-1.06-.42-2.17-.44-3.31,0-.05,0-.09,0-.14.04,0,.09,0,.14,0h4.45c-.05,2.36,1.11,4.44,1.54,5.09.42.63.92,1.21,1.48,1.72.52.47,1.09.88,1.71,1.22.66.37,1.37.65,2.11.85v-4.92c-.6-.35-1.11-.83-1.49-1.41-.44-.66-.78-1.59-.77-2.54-1.86,0-3.46-1.11-4.18-2.7-.09-.19-.16-.38-.22-.58h0c-.12-.41-.19-.85-.19-1.3h0c0-2.53-2.05-4.58-4.59-4.59,0-.86.24-1.67.65-2.36.8-1.34,2.26-2.23,3.93-2.23,1.27,0,2.41.51,3.24,1.34.83.83,1.34,1.98,1.34,3.24v.03c0,1.68.91,3.2,2.26,4V4.57l.03-.07,2.29-4.5,2.25,4.56v13.2c1.36-.76,2.29-2.2,2.34-3.86,0-.05,0-.09,0-.14,0-.04,0-.08,0-.12h0c.02-1.23.53-2.34,1.34-3.15.83-.83,1.97-1.34,3.24-1.34,1.67,0,3.13.89,3.93,2.23.41.69.65,1.5.65,2.36h0c-2.49,0-4.52,1.99-4.58,4.47,0,.04,0,.08,0,.12v.04c0,.44-.07.86-.19,1.26h0c-.06.2-.13.4-.22.58-.72,1.59-2.32,2.7-4.18,2.7.03.97-.33,1.88-.77,2.54h0c-.4.6-.94,1.1-1.57,1.45v4.89c.78-.19,1.51-.49,2.19-.87.62-.34,1.19-.75,1.71-1.22.56-.51,1.06-1.09,1.48-1.72.43-.65.78-1.35,1.04-2.1.32-.94.5-1.94.5-2.99h4.47s.08,0,.12,0h0c0,1.19-.15,2.35-.44,3.45-.19.74-.44,1.46-.75,2.14l3.96,2.64Z"/>
    </svg>
  );
}

function Navbar({
  currentIndex,
  visible,
  onNavigate,
  textColor,
}: {
  currentIndex: number;
  visible: boolean;
  onNavigate: (i: number) => void;
  textColor: string;
}) {
  const [hovered, setHovered] = useState(false);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isFirst = currentIndex === 0;
  const expanded = isFirst || hovered;

  const handleEnter = () => {
    if (isFirst) return;
    if (leaveTimer.current !== null) clearTimeout(leaveTimer.current);
    setHovered(true);
  };

  const handleLeave = () => {
    if (isFirst) return;
    leaveTimer.current = setTimeout(() => setHovered(false), 200);
  };

  useEffect(() => {
    if (isFirst) { if (leaveTimer.current !== null) clearTimeout(leaveTimer.current); setHovered(false); }
  }, [isFirst]);

  const EASE = "0.48s cubic-bezier(0.76, 0, 0.24, 1)";

  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "18vh",
        zIndex: 9000,
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        // Gradient mask: full blur at top, fades to nothing at bottom
        maskImage: "linear-gradient(to bottom, black 30%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, black 30%, transparent 100%)",
        background: "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 3rem",
        opacity: visible ? 1 : 0,
        transition: visible ? "opacity 1.8s ease" : "none",
        pointerEvents: visible ? "all" : "none",
      }}
    >
      {/* Center — imagotype / isotipo */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "40%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.50rem",
          cursor: "pointer",
        }}
        onClick={() => onNavigate(0)}
      >
        {/* Isotipo — always present, scales slightly when collapsed */}
        <div
          style={{
            transform: expanded ? "scale(1)" : "scale(1.8)",
            transition: `transform ${EASE}`,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Isotipo size={28} />
        </div>

        {/* Name — collapses vertically */}
        <div
          style={{
            maxHeight: expanded ? "30px" : "0px",
            overflow: "hidden",
            opacity: expanded ? 1 : 0,
            transition: `max-height ${EASE}, opacity ${EASE}`,
            whiteSpace: "nowrap",
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 201.01 37.03" style={{ height: "25px", width: "auto", display: "block" }}>
            <g fill={textColor}>
              <path d="M18.65,5.76c0-3.22-2.16-5.38-5.38-5.38H0v18.27h3.26v-7.7h10.01c3.22,0,5.38-2.09,5.38-5.19ZM3.26,3.26h10.01c1.27,0,2.13.85,2.13,2.13v.56c0,1.27-.85,2.13-2.13,2.13H3.26V3.26Z"/>
              <polygon points="41.55 3.26 41.55 .38 23.65 .38 23.65 18.65 41.55 18.65 41.55 15.77 26.91 15.77 26.91 10.95 37.8 10.95 37.8 8.07 26.91 8.07 26.91 3.26 41.55 3.26"/>
              <path d="M61.91,18.65h3.66l-4.01-6.45c-.13-.23-.37-.54-.65-.87l-.32-.36.48-.05c2.85-.29,4.69-2.31,4.69-5.16,0-3.22-2.16-5.38-5.38-5.38h-13.27v18.27h3.26v-7.7h6.77l4.77,7.7ZM50.38,3.26h10.01c1.27,0,2.13.85,2.13,2.13v.56c0,1.27-.85,2.13-2.13,2.13h-10.01V3.26Z"/>
              <path d="M89.8,5.76c0-3.22-2.16-5.38-5.38-5.38h-13.27v18.27h3.26v-7.7h10.01c3.22,0,5.38-2.09,5.38-5.19ZM74.4,3.26h10.01c1.27,0,2.13.85,2.13,2.13v.56c0,1.27-.85,2.13-2.13,2.13h-10.01V3.26Z"/>
              <polygon points="112.7 3.26 112.7 .38 94.8 .38 94.8 18.65 112.7 18.65 112.7 15.77 98.06 15.77 98.06 10.95 108.95 10.95 108.95 8.07 98.06 8.07 98.06 3.26 112.7 3.26"/>
              <path d="M132.28.31h-6.44c-5.48.02-9.45,3.87-9.45,9.15s3.92,9.07,9.34,9.15h.12s6.44,0,6.44,0v-2.94h-6.48c-3.46-.04-5.97-2.66-5.97-6.21s2.53-6.18,6.01-6.21h6.44V.31Z"/>
              <polygon points="155.95 .38 137.68 .38 137.68 3.26 145.19 3.26 145.19 18.65 148.44 18.65 148.44 3.26 155.95 3.26 155.95 .38"/>
              <path d="M169.53,19.03c5.08,0,8.76-3.84,8.76-9.14V.38h-3.26v9.51c0,3.52-2.32,6.07-5.51,6.07s-5.51-2.55-5.51-6.07V.38h-3.26v9.51c0,5.29,3.68,9.14,8.76,9.14Z"/>
              <path d="M192.25,19.03c4,0,8.76-1.02,8.76-5.87,0-3.69-2.56-5.27-8.57-5.27-2.76,0-5.32-.27-5.32-2.24,0-1.26.89-2.76,5.13-2.76,2.92,0,4.93,1.05,5.12,2.63h3.27c-.16-3.31-3.49-5.51-8.38-5.51-3.83,0-8.39.98-8.39,5.65,0,3.64,2.39,5.12,8.24,5.12,2.8,0,5.66.28,5.66,2.39,0,1.12-.72,2.99-5.51,2.99-3.18,0-5.29-1.02-5.49-2.63h-3.26c.17,3.31,3.64,5.51,8.76,5.51Z"/>
              <path d="M71.87,35.08l.81,1.95h1.59l-3.85-9.25h-2.63l-3.85,9.25h1.55l.81-1.95h5.56ZM68.82,29.03h.54l1.99,4.79h-4.51l1.99-4.79Z"/>
              <polygon points="84.08 27.78 74.7 27.78 74.7 29.03 78.65 29.03 78.65 37.03 80.12 37.03 80.12 29.03 84.08 29.03 84.08 27.78"/>
              <polygon points="96.04 29.03 96.04 27.78 86.86 27.78 86.86 37.03 96.04 37.03 96.04 35.77 88.33 35.77 88.33 33.03 94.06 33.03 94.06 31.77 88.33 31.77 88.33 29.03 96.04 29.03"/>
              <polygon points="99.22 27.78 99.22 37.03 106.62 37.03 106.62 35.77 100.69 35.77 100.69 27.78 99.22 27.78"/>
              <rect x="109.4" y="27.78" width="1.47" height="9.25"/>
              <polygon points="123.53 29.03 123.53 27.78 114.34 27.78 114.34 37.03 123.53 37.03 123.53 35.77 115.81 35.77 115.81 33.03 121.55 33.03 121.55 31.77 115.81 31.77 115.81 29.03 123.53 29.03"/>
              <path d="M134.44,37.03h1.64l-1.99-3.17c-.07-.12-.19-.27-.33-.44l-.32-.36.49-.05c1.44-.14,2.36-1.15,2.36-2.56,0-1.62-1.07-2.68-2.71-2.68h-6.87v9.25h1.47v-4h3.76l2.51,4ZM128.17,29.03h5.39c.73,0,1.24.5,1.24,1.22v.29c0,.72-.51,1.22-1.24,1.22h-5.39v-2.74Z"/>
            </g>
          </svg>
        </div>
      </div>

      {/* Right — CTA */}
      <div
        style={{
          opacity: expanded ? 1 : 0,
          transform: expanded ? "translateY(-15px)" : "translateY(-10px)",
          transition: `opacity ${EASE}, transform ${EASE}`,
          pointerEvents: expanded ? "all" : "none",
        }}
      >
        <button
          onClick={() => window.open("/BRANDBOOK_Perpectus.pdf", "_blank")}
          style={{
            fontFamily: "DM Mono, monospace",
            fontSize: "12px",
            letterSpacing: "0.14em",
            color: "#BF3E53",
            background: "none",
            border: "2px solid rgba(192, 46, 70, 0.86)",
            cursor: "pointer",
            padding: "0.45rem 1.1rem",
            transition: "border-color 0.4s, background 0.4s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(141, 68, 68, 0.49)";
            e.currentTarget.style.borderColor = "#BF3E53";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "none";
            e.currentTarget.style.borderColor = "rgba(232,0,31,0.35)";
          }}
        >
          Conoce el Brandbook →
        </button>
      </div>
    </div>
  );
}

function SiteFooter({ onNavigate }: { onNavigate: (i: number) => void }) {
  return (
    <div
      style={{
        height: "20vh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        alignItems: "center",
        padding: "0 3rem",
        borderTop: "1px solid rgba(240,237,230,0.08)",
      }}
    >
      {/* Left — wordmark */}
      <div>
        <img
          src={logofull}
          alt="Perpectus"
          style={{ width: "auto", height: "59px", display: "block" }}
        />
      </div>

      {/* Center — nav links */}
      <div style={{ display: "flex", gap: "2.8rem", justifyContent: "center" }}>
        {FOOTER_MENU_ITEMS.map((item) => (
          <button
            key={item.index}
            onClick={() => onNavigate(item.index)}
            style={{
              fontFamily: "DM Mono, monospace",
              fontSize: "14px",
              letterSpacing: "0.15em",
              color: "#f0ede6",
              opacity: 1,
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            {item.label.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Right — copyright */}
      <div style={{ textAlign: "right" }}>
        <div style={{ fontFamily: "DM Mono, monospace", fontSize: "14px", color: "#f0ede6", opacity: 0.28, letterSpacing: "0.12em" }}>© 2026 PERPECTUS ATELIER</div>
        <div style={{ fontFamily: "DM Mono, monospace", fontSize: "14px", color: "#f0ede6", opacity: 1, letterSpacing: "0.12em", marginTop: "0.42rem" }}>
          nivasqueza@unal.edu.co
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [introGone, setIntroGone] = useState(false);
  const [mainVisible, setMainVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isNavigating, setIsNavigating] = useState(false);
  const [hoveredNavDot, setHoveredNavDot] = useState<number | null>(null);
  const FOOTER_ANIMATION_MS = 900;

  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const currentIndexRef = useRef(0);
  const isAnimatingRef = useRef(false);
  const animFrameRef = useRef<number | null>(null);
  const footerRevealedRef = useRef(false);
  const [footerVisible, setFooterVisible] = useState(false);

  const [subStage, setSubStage] = useState(0);
  const subStageRef = useRef(0);
  const subStageAnimatingRef = useRef(false);
  const [missionStage, setMissionStage] = useState(0);
  const missionStageRef = useRef(0);
  const missionStageAnimatingRef = useRef(false);

  // Animate wrapper's translateY directly via DOM to avoid React re-render lag
  const animateWrapper = useCallback((fromY: number, toY: number) => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const duration = 900;
    const startTime = performance.now();
    isAnimatingRef.current = true;
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);

    const step = (now: number) => {
      const t = Math.min((now - startTime) / duration, 1);
      const v = fromY + (toY - fromY) * easeInOutQuart(t);
      wrapper.style.transform = `translateY(${v}px)`;
      if (t < 1) {
        animFrameRef.current = requestAnimationFrame(step);
      } else {
        wrapper.style.transform = `translateY(${toY}px)`;
        isAnimatingRef.current = false;
      }
    };
    animFrameRef.current = requestAnimationFrame(step);
  }, []);

  const goTo = useCallback((index: number) => {
    if (isAnimatingRef.current) return;
    if (index < 0 || index >= blocks.length) return;
    if (index === currentIndexRef.current) return;
    const container = containerRef.current;
    if (!container) return;

    const vh = container.clientHeight;
    const startTop = container.scrollTop;
    const targetTop = getBlockStart(index, vh);
    const duration = 900;
    const startTime = performance.now();

    const prevIndex = currentIndexRef.current;
    isAnimatingRef.current = true;
    setIsNavigating(true);
    currentIndexRef.current = index;
    setCurrentIndex(index);
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);

    // Always enter the special block at stage 0
    if (index === SPECIAL_IDX) {
      subStageRef.current = 0;
      setSubStage(0);
    }
    if (index === MISSION_IDX) {
      missionStageRef.current = 0;
      setMissionStage(0);
    }

    const step = (now: number) => {
      const t = Math.min((now - startTime) / duration, 1);
      container.scrollTop = startTop + (targetTop - startTop) * easeInOutQuart(t);
      if (t < 1) {
        animFrameRef.current = requestAnimationFrame(step);
      } else {
        container.scrollTop = targetTop;
        isAnimatingRef.current = false;
        setIsNavigating(false);
      }
    };
    animFrameRef.current = requestAnimationFrame(step);
  }, [animateWrapper]);

  const revealFooter = useCallback(() => {
    if (footerRevealedRef.current) return;
    footerRevealedRef.current = true;
    setFooterVisible(true);
    const footerH = window.innerHeight * 0.2;
    animateWrapper(0, -footerH);
  }, [animateWrapper]);

  const hideFooter = useCallback(() => {
    if (!footerRevealedRef.current) return;
    footerRevealedRef.current = false;
    setFooterVisible(false);
    const footerH = window.innerHeight * 0.2;
    animateWrapper(-footerH, 0);
  }, [animateWrapper]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    let touchStartY = 0;

    const advanceSpecialStage = (dir: 1 | -1) => {
      if (subStageAnimatingRef.current) return;
      const next = subStageRef.current + dir;
      if (next >= 0 && next <= 2) {
        subStageAnimatingRef.current = true;
        subStageRef.current = next;
        setSubStage(next);
        // Lock for the duration of the text transition
        setTimeout(() => { subStageAnimatingRef.current = false; }, 800);
      } else if (dir > 0) {
        goTo(SPECIAL_IDX + 1);
      } else {
        goTo(SPECIAL_IDX - 1);
      }
    };

    const advanceMissionStage = (dir: 1 | -1) => {
      if (missionStageAnimatingRef.current) return;
      const next = missionStageRef.current + dir;
      if (next >= 0 && next <= 1) {
        missionStageAnimatingRef.current = true;
        missionStageRef.current = next;
        setMissionStage(next);
        setTimeout(() => { missionStageAnimatingRef.current = false; }, 620);
      } else if (dir > 0) {
        goTo(MISSION_IDX + 1);
      } else {
        goTo(MISSION_IDX - 1);
      }
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isAnimatingRef.current) return;
      if (Math.abs(e.deltaY) < 5) return;

      if (currentIndexRef.current === SPECIAL_IDX) {
        advanceSpecialStage(e.deltaY > 0 ? 1 : -1);
        return;
      }
      if (currentIndexRef.current === MISSION_IDX) {
        advanceMissionStage(e.deltaY > 0 ? 1 : -1);
        return;
      }

      if (e.deltaY > 0) {
        if (footerRevealedRef.current) return;
        if (currentIndexRef.current === blocks.length - 1) revealFooter();
        else goTo(currentIndexRef.current + 1);
      } else {
        if (footerRevealedRef.current) hideFooter();
        else goTo(currentIndexRef.current - 1);
      }
    };

    const onTouchStart = (e: TouchEvent) => { touchStartY = e.touches[0].clientY; };
    const onTouchEnd = (e: TouchEvent) => {
      const delta = touchStartY - e.changedTouches[0].clientY;
      if (Math.abs(delta) < 40) return;

      if (currentIndexRef.current === SPECIAL_IDX) {
        advanceSpecialStage(delta > 0 ? 1 : -1);
        return;
      }
      if (currentIndexRef.current === MISSION_IDX) {
        advanceMissionStage(delta > 0 ? 1 : -1);
        return;
      }

      if (delta > 0) {
        if (footerRevealedRef.current) return;
        if (currentIndexRef.current === blocks.length - 1) revealFooter();
        else goTo(currentIndexRef.current + 1);
      } else {
        if (footerRevealedRef.current) hideFooter();
        else goTo(currentIndexRef.current - 1);
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (["ArrowDown", "PageDown"].includes(e.key)) {
        e.preventDefault();
        if (currentIndexRef.current === SPECIAL_IDX) {
          advanceSpecialStage(1);
          return;
        }
        if (currentIndexRef.current === MISSION_IDX) {
          advanceMissionStage(1);
          return;
        }
        if (footerRevealedRef.current) return;
        if (currentIndexRef.current === blocks.length - 1) revealFooter();
        else goTo(currentIndexRef.current + 1);
      }
      if (["ArrowUp", "PageUp"].includes(e.key)) {
        e.preventDefault();
        if (currentIndexRef.current === SPECIAL_IDX) {
          advanceSpecialStage(-1);
          return;
        }
        if (currentIndexRef.current === MISSION_IDX) {
          advanceMissionStage(-1);
          return;
        }
        if (footerRevealedRef.current) hideFooter();
        else goTo(currentIndexRef.current - 1);
      }
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    container.addEventListener("touchstart", onTouchStart, { passive: true });
    container.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    return () => {
      container.removeEventListener("wheel", onWheel);
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [goTo, revealFooter, hideFooter]);

  const getTextColor = (block: typeof blocks[0]) => {
    if (block.id === "07") return "#f0ede6";

    const hex = block.bg.replace("#", "");
    const normalized = hex.length === 3 ? hex.split("").map((c) => c + c).join("") : hex;

    if (normalized.length !== 6) return "#ffffff";

    const r = parseInt(normalized.slice(0, 2), 16) / 255;
    const g = parseInt(normalized.slice(2, 4), 16) / 255;
    const b = parseInt(normalized.slice(4, 6), 16) / 255;
    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

    return luminance > 0.6 ? "#1F2B24" : "#ffffff";
  };

  const renderBlock = (block: typeof blocks[0], index: number) => {
    const textColor = getTextColor(block);

    // Special 3× scrollable block with clock
    if (index === SPECIAL_IDX) {
      return (
        <div
          key={block.id}
          style={{ height: `${BLOCK_HEIGHTS[SPECIAL_IDX] * 100}vh`, position: "relative", zIndex: index + 1 }}
        >
          <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden", background: block.bg }}>
            <WorkScrollBlock data={block as any} textColor={textColor} subStage={subStage} />
          </div>
        </div>
      );
    }

    const props = { data: block as any, textColor };
    const content = (() => {
      switch (block.content.type) {
        case "hero":        return <HeroBlock {...props} />;
        case "philosophy":  return <PhilosophyBlock {...props} isActive={currentIndex === index} />;
        case "work":        return <WorkBlock {...props} />;
        case "stats":       return <StatsBlock {...props} isActive={currentIndex === index && !isNavigating} />;
        case "process":     return <ProcessBlock {...props} isActive={currentIndex === index && !isNavigating} />;
        case "team":        return <TeamBlock {...props} isActive={currentIndex === index && !isNavigating} />;
        case "awards":      return <AwardsBlock {...props} stage={missionStage} />;
        case "contact":     return <ContactBlock {...props} isActive={currentIndex === index} footerRevealed={footerVisible} />;
        default:            return null;
      }
    })();

    return (
      <div
        key={block.id}
        style={{ position: "sticky", top: 0, height: "100vh", zIndex: index + 1, overflow: "hidden" }}
      >
        <div style={{ width: "100%", height: "100%", background: block.bg, overflow: "hidden" }}>
          {content}
        </div>
      </div>
    );
  };

  const handleNavDotClick = (i: number) => {
    if (footerRevealedRef.current) hideFooter();
    goTo(i);
  };

  const navGoTo = useCallback((i: number) => {
    if (footerRevealedRef.current) hideFooter();
    goTo(i);
  }, [goTo, hideFooter]);

  return (

    <>
      <SmoothCursor
        cursor={
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: "999px",
              border: "1px solid rgba(240, 237, 230, 0.9)",
              background: "rgb(191, 62, 84)",
              boxShadow: "0 8px 24px rgba(185, 104, 117, 0.14)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 4,
                height: 4,
                borderRadius: "999px",
                background: "#ffffff",
              }}
            />
          </div>
        }
      />
      
      {!introGone && (
        <IntroScreen
          onExitStart={() => setMainVisible(true)}
          onComplete={() => setIntroGone(true)}
        />
      )}

      {/* Navbar — outside wrapper so wrapper's translateY doesn't drag it */}
      <Navbar
        currentIndex={currentIndex}
        visible={mainVisible}
        onNavigate={navGoTo}
        textColor={getTextColor(blocks[currentIndex])}
      />

      {/* Footer — static, sits at the very bottom, revealed when wrapper slides up */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          height: "20vh",
          zIndex: 5,
          background: "#1F2B24",
        }}
      >
        <SiteFooter onNavigate={(i) => { hideFooter(); setTimeout(() => goTo(i), FOOTER_ANIMATION_MS + 40); }} />
      </div>

      {/* Main wrapper — slides up via translateY to reveal footer */}
      <div
        ref={wrapperRef}
        style={{
          position: "relative",
          zIndex: 10,
          opacity: 1,
          transition: "none",
          willChange: "transform",
        }}
      >
        <style>{`
          ::-webkit-scrollbar { display: none; }
          * { scrollbar-width: none; }
        `}</style>

        {/* Navigation dots */}
        <nav
          style={{
            position: "fixed",
            right: "1.5rem",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
            gap: "0.6rem",
          }}
        >
          {blocks.map((block, i) => (
            <div
              key={block.id}
              onMouseEnter={() => setHoveredNavDot(i)}
              onMouseLeave={() => setHoveredNavDot((prev) => (prev === i ? null : prev))}
              style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "flex-end" }}
            >
              <span
                style={{
                  position: "absolute",
                  right: "28px",
                  fontFamily: "DM Mono, monospace",
                  fontSize: "11px",
                  letterSpacing: "0.14em",
                  color: "#BF3E53",
                  whiteSpace: "nowrap",
                  opacity: hoveredNavDot === i ? 0.95 : 0,
                  transform: hoveredNavDot === i ? "translateX(0)" : "translateX(8px)",
                  transition: "opacity 0.24s ease, transform 0.24s ease",
                  pointerEvents: "none",
                }}
              >
                {(FOOTER_MENU_ITEMS.find((item) => item.index === i)?.label ?? block.label).toUpperCase()}
              </span>
              <button
                onClick={() => handleNavDotClick(i)}
                title={block.label}
                style={{
                  width: currentIndex === i ? "20px" : "6px",
                  height: "6px",
                  borderRadius: "3px",
                  background: currentIndex === i ? "#BF3E53" : "rgba(221, 50, 49, 0.3)",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "all 0.35s ease",
                }}
              />
            </div>
          ))}
        </nav>

        <div
          ref={containerRef}
          style={{ height: "100vh", overflowY: "scroll", background: "#0c0c0c" }}
        >
          <div style={{ height: `${TOTAL_SCROLL_UNITS * 100}vh` }}>
            {blocks.map((block, i) => renderBlock(block, i))}
          </div>
        </div>
      </div>
    </>
  );
}
