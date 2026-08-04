import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";

// ─── BentoTilt — 3D mouse-tilt wrapper (preserved exactly) ───────────────────
export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;
    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();
    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;
    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;
    setTransformStyle(
      `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`
    );
  };

  const handleMouseLeave = () => setTransformStyle("");

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

// ─── ProjectCard ─────────────────────────────────────────────────────────────
export const ProjectCard = ({
  src,
  imgSrc,
  title,
  description,
  tech,
  liveUrl,
  githubUrl,
}) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();
    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  return (
    <div className="relative size-full">
      {src ? (
        <video
          src={src}
          loop
          muted
          autoPlay
          className="absolute left-0 top-0 size-full object-cover object-center"
        />
      ) : (
        <img
          src={imgSrc || "/img/gallery-1.jpg"}
          alt={title}
          className="absolute left-0 top-0 size-full object-cover object-center"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/40 to-transparent" />

      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-snow">
        <div>
          <h1 className="bento-title special-font text-snow">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs text-snow/70 md:text-sm">
              {description}
            </p>
          )}
          {tech && tech.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1">
              {tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-amber/30 bg-amber/10 px-2 py-0.5 text-[10px] text-amber"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="flex gap-2">
          {liveUrl && (
            <div
              ref={hoverButtonRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setHoverOpacity(1)}
              onMouseLeave={() => setHoverOpacity(0)}
              className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-obsidian/80 px-4 py-2 text-xs uppercase text-snow/80 transition-colors hover:text-amber"
              onClick={() => window.open(liveUrl, "_blank")}
            >
              <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                  opacity: hoverOpacity,
                  background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #f59e0b44, #00000026)`,
                }}
              />
              <TiLocationArrow className="relative z-20" />
              <p className="relative z-20">Live</p>
            </div>
          )}
          {githubUrl && (
            <div
              className="flex w-fit cursor-pointer items-center gap-1 rounded-full border border-snow/10 bg-obsidian/80 px-4 py-2 text-xs uppercase text-snow/60 transition-colors hover:border-amber/40 hover:text-amber"
              onClick={() => window.open(githubUrl, "_blank")}
            >
              <FaGithub className="text-sm" />
              <p>Code</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ─── Projects section ─────────────────────────────────────────────────────────
const Projects = () => (
  <section id="projects" className="bg-obsidian-surface pb-52">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <p className="font-circular-web text-lg text-amber">Selected Work</p>
        <p className="max-w-md font-circular-web text-lg text-snow/50">
          A range of products I&apos;ve shipped — from AI-powered web apps and
          full-stack dashboards to cross-platform mobile experiences. Each one
          built with care for performance, design, and real users.
        </p>
      </div>

      {/* ── Featured: Hotel Guest Sentiment Dashboard ── */}
      <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <ProjectCard
          src="videos/feature-1.mp4"
          title={
            <>
              Ho<b>t</b>el Senti<b>m</b>ent
            </>
          }
          description="NLP analytics pipeline — full-stack review analysis using FastAPI, HuggingFace DistilBERT, and Aspect-Based Sentiment Analysis across 6 hotel domains. Handles bulk CSV ingestion asynchronously."
          tech={["FastAPI", "Python", "React 19", "TypeScript", "PostgreSQL", "HuggingFace", "Docker"]}
          liveUrl="#"
          githubUrl="https://github.com/pradnish18/hotel-sentiment"
        />
      </BentoTilt>

      {/* ── Bento grid ── */}
      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">

        {/* GroomIQ */}
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <ProjectCard
            imgSrc="/img/gallery-1.jpg"
            title={
              <>
                Gr<b>o</b>om<b>IQ</b>
              </>
            }
            description="AI Hairstyle Analyzer — full-stack computer vision app achieving 90% image classification accuracy. JWT + Google OAuth auth, deployed via Vercel CI/CD."
            tech={["TensorFlow", "EfficientNetB0", "Flask", "PostgreSQL", "JWT", "Google OAuth", "OpenCV"]}
            liveUrl="https://groom-iq-xi.vercel.app/"
            githubUrl="https://github.com/pradnish18/GroomIQ"
          />
        </BentoTilt>

        {/* UniRide */}
        <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
          <ProjectCard
            src="/img/gallery-2.mp4"
            title={
              <>
                Uni<b>R</b>ide
              </>
            }
            description="Real-time campus ride-sharing — cross-platform React Native app with WebSockets for live tracking under 200ms sync delay, supporting 150+ concurrent users."
            tech={["React Native", "TypeScript", "Node.js", "PostgreSQL", "WebSockets", "Mapbox", "Expo"]}
            liveUrl="#"
            githubUrl="#"
          />
        </BentoTilt>

        {/* SRM Sports Council */}
        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <ProjectCard
            imgSrc="/img/gallery-3.gif"
            title={
              <>
                SR<b>M</b> Sp<b>o</b>rts
              </>
            }
            description="Full-stack sports management dashboard for university clubs — role-based CRUD, SWR caching, and Framer Motion animations for a polished UX."
            tech={["React.js", "Node.js", "Express.js", "MongoDB", "SWR", "Framer Motion"]}
            liveUrl="#"
            githubUrl="#"
          />
        </BentoTilt>

        {/* GitHub CTA */}
        <BentoTilt className="bento-tilt_2">
          <div
            className="flex size-full cursor-pointer flex-col justify-between bg-amber p-5 transition-opacity hover:opacity-90"
            onClick={() => window.open("https://github.com/pradnish18", "_blank")}
          >
            <h1 className="bento-title special-font max-w-64 text-obsidian">
              Mo<b>r</b>e on Git<b>H</b>ub
            </h1>
            <FaGithub className="m-5 scale-[4] self-end text-obsidian" />
          </div>
        </BentoTilt>

        {/* Restaurant Management Platform */}
        <BentoTilt className="bento-tilt_2">
          <ProjectCard
            imgSrc="/img/gallery-4.png"
            title={
              <>
                Res<b>t</b>aurant <b>D</b>ash
              </>
            }
            description="UX-focused restaurant management platform — reservation, inventory, and menu workflows designed in Figma with a full design system."
            tech={["Figma", "UX Research", "Design System", "React.js"]}
            liveUrl="#"
            githubUrl="#"
          />
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Projects;
