import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

// ─── Skill data ───────────────────────────────────────────────────────────────
const skillGroups = [
  {
    category: "Frontend",
    skills: [
      "React.js",
      "React Native",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
      "Responsive Design",
      "Mobile-First",
    ],
  },
  {
    category: "Backend & Databases",
    skills: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "Flask",
      "REST APIs",
      "WebSockets",
      "JWT Auth",
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Firebase",
      "Supabase",
    ],
  },
  {
    category: "Tools, Design & CS",
    skills: [
      "Figma",
      "Git",
      "GitHub",
      "Postman",
      "Docker",
      "Vercel",
      "CI/CD",
      "TensorFlow",
      "HuggingFace",
      "DSA",
      "OOP",
      "Agile",
    ],
  },
];

// ─── SkillGroup — animated pill row ──────────────────────────────────────────
const SkillGroup = ({ category, skills, index }) => {
  const groupRef = useRef(null);

  useGSAP(
    () => {
      // Start from visible (opacity 1) so pills are never invisible if
      // ScrollTrigger misfires. We animate from slightly below.
      gsap.fromTo(
        groupRef.current.querySelectorAll(".skill-pill"),
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.04,
          duration: 0.45,
          ease: "power2.out",
          scrollTrigger: {
            trigger: groupRef.current,
            start: "top 90%",
            toggleActions: "play none none none", // never reverse — stays visible
          },
        }
      );
    },
    { scope: groupRef }
  );

  return (
    <div ref={groupRef} className="mb-10">
      {/* Category label */}
      <p
        className="mb-3 font-general text-xs uppercase tracking-widest text-amber"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        {category}
      </p>
      {/* Pills — visible by default, bright on hover */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="skill-pill rounded-full border border-snow/20 bg-obsidian-border px-4 py-1.5 text-sm font-medium text-snow transition-all duration-200 hover:border-amber hover:bg-amber hover:text-obsidian hover:shadow-[0_0_12px_#f59e0b66] cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

// ─── Skills section ───────────────────────────────────────────────────────────
const Skills = () => {
  return (
    <section id="skills" className="w-screen bg-obsidian py-24">
      <div className="container mx-auto px-5 md:px-10">
        {/* Section label */}
        <p className="mb-4 font-general text-sm uppercase tracking-widest text-amber md:text-[10px]">
          What I work with
        </p>

        {/* Two-column layout: title left, skills right */}
        <div className="flex flex-col gap-16 md:flex-row md:gap-24">
          {/* Left — animated title */}
          <div className="flex-shrink-0 md:w-[38%]">
            <AnimatedTitle
              title="Things I <b>k</b>now <br /> and lo<b>v</b>e"
              containerClass="!text-snow text-left !sm:px-0 !px-0 !text-5xl md:!text-6xl"
            />
            <p className="mt-6 max-w-xs font-circular-web text-sm text-snow/50">
              Technologies and tools I reach for when building products —
              refined through real projects, not just tutorials.
            </p>
          </div>

          {/* Right — skill groups */}
          <div className="flex-1">
            {skillGroups.map((group, index) => (
              <SkillGroup
                key={group.category}
                category={group.category}
                skills={group.skills}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Bottom divider */}
        <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-snow/10 to-transparent" />
      </div>
    </section>
  );
};

export default Skills;
