import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
      ease: "power1.inOut",
    });
  });

  return (
    <div id="about" className="w-screen bg-obsidian">
      {/* ── Text block — fully above the clip frame ── */}
      <div className="flex flex-col items-center gap-5 px-5 pb-16 pt-36 text-center">
        <p className="font-general text-sm uppercase tracking-widest text-amber md:text-[10px]">
          About Me
        </p>

        <AnimatedTitle
          title="Crafting digital <b>e</b>xperiences <br /> with code <b>a</b>nd design"
          containerClass="mt-5 !text-snow text-center"
        />
        {/* ── Clip-path reveal container ── */}
        {/* The 200×200 frame sits centered; on scroll it expands to full screen */}
        <div className="h-dvh w-screen" id="clip">
          <div className="mask-clip-path about-image">
            <img
              src="img/about.webp"
              alt="About me"
              className="absolute left-0 top-0 size-full object-cover"
            />
            <div className="absolute inset-0 bg-obsidian/40" />
          </div>
        </div>

        <div className="mt-4 w-full max-w-96 font-circular-web text-lg md:max-w-[34rem]">
          <p className="text-snow/90">
            I&apos;m Pradnish Chintada — a Frontend Engineer with strong CS
            fundamentals, experienced in building responsive web and mobile UIs
            using React and React Native.
          </p>
          <p className="mt-2 text-snow/50">
            Adept at translating Figma wireframes into reusable code,
            integrating REST APIs, and applying performance optimization
            techniques end-to-end.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
