import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#experience" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      textRef.current,
      {
        y: "75%",
        opacity: 0,
      },
      {
        y: "20%", // Keeps the bottom 20% hidden/clipped off the bottom of the page
        opacity: 0.18, // Increased opacity for clearer visibility
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "70% bottom", // Triggers when 70% of the footer enters the viewport (reaching bottom of page)
          toggleActions: "play none none reverse",
          invalidateOnRefresh: true,
        },
      }
    );
  }, { scope: footerRef });

  useEffect(() => {
    // Refresh ScrollTrigger to ensure correct heights after fonts/images load
    const handleLoad = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("load", handleLoad);

    // Fallback refresh for dev hot-reload & late image loads
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timer);
    };
  }, []);

  return (
    <footer ref={footerRef} className="w-screen bg-black border-t border-obsidian-border/50 pt-20 pb-48 text-snow relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start mb-16 relative z-10">
          
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            <h2 className="font-circular-web text-3xl lg:text-4xl font-bold leading-tight max-w-[280px] sm:max-w-[400px]">
              Building Scalable Software for the Future.
            </h2>
          </div>

          {/* Middle Column */}
          <div className="flex flex-col">
            <span className="text-snow/40 font-general uppercase tracking-widest text-xs mb-6 font-semibold">
              /Quick Links
            </span>
            <div className="flex flex-wrap gap-2.5 max-w-[280px]">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="bg-white text-black px-4 py-2 text-xs font-bold rounded-full hover:bg-amber transition-all duration-300 shadow-sm animate-button"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col">
            <span className="text-snow/40 font-general uppercase tracking-widest text-xs mb-6 font-semibold">
              /Contact
            </span>
            <a
              href="mailto:prdns.chintada27@gmail.com"
              className="text-snow font-circular-web text-base font-medium hover:text-amber transition-colors duration-300"
            >
              prdns.chintada27@gmail.com
            </a>
            <span className="text-snow/50 font-circular-web text-xs mt-2">
              Andhra Pradesh, India
            </span>
          </div>

        </div>

        {/* Small copyright and social links at the bottom */}
        <div className="w-full select-none pt-8 border-t border-white/[0.03] mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-snow/30 font-circular-web relative z-10">
          <p>© {currentYear} Pradnish Chintada. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/pradnish18"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/pradnish-chintada"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

      </div>

      {/* PRADNISH background watermark, aligned to the absolute bottom and shifted by 20% to hide the bottom portion */}
      <h1
        ref={textRef}
        className="absolute bottom-0 left-0 right-0 text-[20vw] font-black text-white tracking-widest uppercase leading-[0.75] font-zentry opacity-0 z-0 pointer-events-none select-none text-center"
      >
        PRADNISH
      </h1>
    </footer>
  );
};

export default Footer;
