import AnimatedTitle from "./AnimatedTitle";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const mailtoUrl = `mailto:prdns.chintada27@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  const handleEmailRedirect = () => {
    window.location.href = "mailto:prdns.chintada27@gmail.com";
  };

  return (
    <div id="contact" className="my-20 w-screen px-5 sm:px-10 md:px-20 lg:px-32">
      {/* ── Top Orange Banner ── */}
      <div 
        onClick={handleEmailRedirect}
        className="relative mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between bg-[#f25222] p-6 sm:p-10 rounded-2xl shadow-lg text-white cursor-pointer hover:bg-[#ea4819] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 select-none"
      >
        <div>
          <h2 className="text-2xl sm:text-4xl font-bold font-circular-web tracking-tight uppercase">
            Let's Build Together
          </h2>
          <p className="text-xs sm:text-sm font-circular-web text-white/80 mt-2 font-medium">
            Available for Full-Time • Internships • Freelance
          </p>
        </div>
        <div className="mt-4 sm:mt-0 text-3xl sm:text-5xl font-light leading-none select-none text-white/90">
          →
        </div>
      </div>

      {/* ── Bottom Form Block ── */}
      <div className="relative rounded-2xl border border-obsidian-border bg-gradient-to-b from-[#22130e] via-[#100b09] to-[#0a0a0f] p-8 sm:p-12 md:p-16 text-snow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Left Column - Get In Touch */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="mb-6 font-general text-xs uppercase tracking-widest text-amber font-semibold">
                Get In Touch
              </p>
              <AnimatedTitle
                title="let&#39;s <br /> b<b>u</b>ild <br /> something <br /> great <br /> t<b>o</b>gether."
                containerClass="special-font font-zentry !text-5xl sm:!text-6xl md:!text-7xl !font-black !leading-[0.85] !text-snow text-left"
                alignLeft={true}
              />
            </div>
            <p className="mt-8 md:mt-16 max-w-sm font-circular-web text-sm sm:text-base text-snow/60 leading-relaxed">
              Have a project in mind, a role to fill, or just want to say hello? My inbox is always open.
            </p>
          </div>

          {/* Right Column - Contact Form */}
          <div className="flex flex-col">
            <h3 className="font-circular-web text-xl sm:text-2xl font-bold text-snow">
              Send me a message
            </h3>
            <p className="mt-1 font-circular-web text-xs sm:text-sm text-snow/50 mb-8">
              Fill out the form below and I'll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full bg-white/[0.03] border border-white/[0.05] focus:border-amber/40 rounded-xl px-4 py-3 text-sm text-snow placeholder:text-snow/30 outline-none transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="w-full bg-white/[0.03] border border-white/[0.05] focus:border-amber/40 rounded-xl px-4 py-3 text-sm text-snow placeholder:text-snow/30 outline-none transition-colors"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full bg-white/[0.03] border border-white/[0.05] focus:border-amber/40 rounded-xl px-4 py-3 text-sm text-snow placeholder:text-snow/30 outline-none transition-colors"
              />
              <textarea
                name="message"
                placeholder="Write your message..."
                rows="5"
                required
                className="w-full bg-white/[0.03] border border-white/[0.05] focus:border-amber/40 rounded-xl px-4 py-3 text-sm text-snow placeholder:text-snow/30 outline-none transition-colors resize-none"
              ></textarea>

              <button
                type="submit"
                className="group relative flex items-center gap-2 rounded-full bg-white text-black px-6 py-2.5 text-xs font-bold font-general transition-all duration-300 hover:bg-amber hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                Send Message
                <span className="text-[10px] transform group-hover:translate-x-1 transition-transform">➔</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
