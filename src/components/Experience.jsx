import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

import Button from "./Button";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

// ─── Work experience entries ──────────────────────────────────────────────────
const workEntries = [
  {
    period: "June 2025 — July 2025",
    role: "Software Development Intern",
    company: "Purple Techno Solutions",
    description: [
      "Translated Figma designs into production-ready, reusable React components — maximizing cross-device UI/UX consistency.",
      "Integrated REST APIs via Axios, managing async data flows and reducing payload latency by 25%.",
      "Built an AI Prompt Navigator using iterative prompt engineering, boosting prompt precision by 40%.",
      "Performed UI validation, API debugging via Postman, and regression testing in Agile sprints.",
    ],
    tech: ["React", "Node.js", "Express", "Axios", "Postman", "Git"],
  },
];

// ─── Education entries ────────────────────────────────────────────────────────
const educationEntries = [
  {
    period: "2023 — 2027",
    role: "B.Tech — Computer Science & Engineering",
    company: "SRM University AP",
    description:
      "CGPA: 8.23 / 10.0. Focused on Data Structures, Algorithms, OOP, Operating Systems, and DBMS. Shipped multiple full-stack projects spanning AI, mobile, and web.",
    badge: "8.23 GPA",
  },
  {
    period: "2021 — 2023",
    role: "Class 12th",
    company: "Board of Secondary Education",
    description: "Scored 92.5% — strong foundation in Mathematics and Science.",
    badge: "92.5%",
  },
];

// ─── TimelineEntry ────────────────────────────────────────────────────────────
const TimelineEntry = ({ entry, accentColor, isWork }) => (
  <div className="relative border-l-2 border-snow/10 pl-6 pb-8 last:pb-0">
    {/* Dot */}
    <div
      className={`absolute -left-[7px] top-1.5 size-3 rounded-full border-2 ${
        accentColor === "amber"
          ? "border-amber bg-obsidian-surface"
          : "border-indigo bg-obsidian-surface"
      }`}
    />

    {/* Period badge */}
    <span className="inline-block rounded-full border border-snow/10 bg-obsidian/60 px-2.5 py-0.5 font-general text-[10px] uppercase tracking-widest text-snow/40">
      {entry.period}
    </span>

    {/* Role */}
    <p className="mt-2 font-robert-medium text-base text-snow leading-snug">
      {entry.role}
    </p>

    {/* Company + badge */}
    <div className="mt-0.5 flex items-center gap-2 flex-wrap">
      <p className={`font-general text-xs ${accentColor === "amber" ? "text-amber" : "text-indigo"}`}>
        {entry.company}
      </p>
      {entry.badge && (
        <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
          accentColor === "amber"
            ? "bg-amber/15 text-amber"
            : "bg-indigo/15 text-indigo"
        }`}>
          {entry.badge}
        </span>
      )}
    </div>

    {/* Description — bullet list for work, paragraph for education */}
    {isWork ? (
      <ul className="mt-2 space-y-1">
        {entry.description.map((point, i) => (
          <li key={i} className="flex gap-2 text-xs text-snow/55 leading-relaxed">
            <span className="mt-1 shrink-0 text-amber">›</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    ) : (
      <p className="mt-2 text-xs text-snow/55 leading-relaxed">
        {entry.description}
      </p>
    )}

    {/* Tech pills */}
    {entry.tech && entry.tech.length > 0 && (
      <div className="mt-3 flex flex-wrap gap-1">
        {entry.tech.map((t) => (
          <span
            key={t}
            className="rounded-full border border-amber/20 bg-amber/10 px-2.5 py-0.5 text-[10px] text-amber"
          >
            {t}
          </span>
        ))}
      </div>
    )}
  </div>
);

// ─── Experience section ───────────────────────────────────────────────────────
const Experience = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  // Animate columns in on scroll
  useGSAP(() => {
    gsap.fromTo(
      leftRef.current,
      { opacity: 0, x: -40 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: leftRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
    gsap.fromTo(
      rightRef.current,
      { opacity: 0, x: 40 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: rightRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  return (
    <div id="experience" className="w-screen bg-obsidian-surface text-snow">
      <div className="container mx-auto px-5 py-24 md:px-10">

        {/* Section header */}
        <p className="mb-2 font-general text-sm uppercase tracking-widest text-amber md:text-[10px]">
          Experience &amp; Education
        </p>
        <AnimatedTitle
          title="My <b>j</b>ourney <br /> so f<b>a</b>r"
          containerClass="mt-4 !text-snow !text-left !sm:px-0 !px-0"
        />

        {/* Two-column layout */}
        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">

          {/* ── LEFT — Work Experience ── */}
          <div ref={leftRef}>
            {/* Column header */}
            <div className="mb-8 flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-amber/40 to-transparent" />
              <span className="font-general text-xs uppercase tracking-widest text-amber">
                Work Experience
              </span>
              <div className="size-1.5 rounded-full bg-amber" />
            </div>

            {/* Work entries */}
            <div>
              {workEntries.map((entry, i) => (
                <TimelineEntry
                  key={i}
                  entry={entry}
                  accentColor="amber"
                  isWork={true}
                />
              ))}
            </div>

            {/* Download Resume button sits under work */}
            <Button
              id="resume-exp-btn"
              title="Download Resume"
              containerClass="mt-8 bg-amber text-obsidian !text-black font-bold hover:bg-amber-light"
              onClick={() => window.open("/resume.pdf", "_blank")}
            />
          </div>

          {/* ── RIGHT — Education ── */}
          <div ref={rightRef}>
            {/* Column header */}
            <div className="mb-8 flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-indigo/40 to-transparent" />
              <span className="font-general text-xs uppercase tracking-widest text-indigo">
                Education
              </span>
              <div className="size-1.5 rounded-full bg-indigo" />
            </div>

            {/* Education entries */}
            <div>
              {educationEntries.map((entry, i) => (
                <TimelineEntry
                  key={i}
                  entry={entry}
                  accentColor="indigo"
                  isWork={false}
                />
              ))}
            </div>

            {/* Certifications block */}
            <div className="mt-10">
              <p className="mb-4 font-general text-xs uppercase tracking-widest text-snow/30">
                Certifications
              </p>
              <div className="space-y-3">
                <div className="rounded-lg border border-snow/10 bg-obsidian/60 p-4">
                  <p className="font-robert-medium text-sm text-snow">
                    Oracle Certified Professional
                  </p>
                  <p className="text-xs text-indigo">Java SE 17 — OOP, Multithreading</p>
                  <p className="mt-1 text-[10px] text-snow/30">Feb 2026</p>
                </div>
                <div className="rounded-lg border border-snow/10 bg-obsidian/60 p-4">
                  <p className="font-robert-medium text-sm text-snow">
                    Google Cloud — Vertex AI
                  </p>
                  <p className="text-xs text-indigo">Prompt Design, Engineering & Multimodal AI</p>
                  <p className="mt-1 text-[10px] text-snow/30">Nov 2024</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom divider */}
        <div className="mt-20 h-px w-full bg-gradient-to-r from-transparent via-snow/10 to-transparent" />
      </div>
    </div>
  );
};

export default Experience;
