import React, { useContext } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Laptop, ArrowRight } from "lucide-react";
import { ThemeContext, PROJECTS, EDUCATION, SKILL_CATEGORIES } from "../App";
import { Link } from "react-router-dom";

// --- Sub-components ---

const Magnetic = ({ children }: { children: React.ReactNode }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

const SectionHeading = ({ subtitle, title, centered = false }: { subtitle: string, title: string, centered?: boolean }) => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div className={`space-y-4 ${centered ? 'text-center' : ''}`}>
      <span className={`text-[10px] font-bold uppercase tracking-[0.4em] ${isDark ? 'text-brand-purple' : 'text-neutral-400'}`}>
        {subtitle}
      </span>
      <h2 className={`text-5xl md:text-7xl font-display font-medium tracking-tighter ${isDark ? 'text-white' : 'text-black'}`}>
        {title}
      </h2>
    </div>
  );
};

const Hero = () => {
  const { isDark } = useContext(ThemeContext);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 800], [0.8, 0]);

  return (
    <section id="hero" className="min-h-screen pt-32 pb-40 px-8 relative flex items-center justify-center">
      {/* Background Image with Parallax */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div
          style={{ y, opacity }}
          className="w-full h-[120vh] -mt-20" 
        >
          <img 
            src="/msd.png"
            alt="Background Portrait"
            className="w-full h-full object-cover grayscale-0 opacity-100 object-center"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (target.src !== "https://msdumbuya.vercel.app/images/img7.png") {
                target.src = "https://msdumbuya.vercel.app/images/img7.png";
              }
            }}
          />
          <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-[#0a0a0c]/20 via-transparent to-[#0a0a0c]' : 'bg-gradient-to-b from-[#f8f9fa]/20 via-transparent to-[#f8f9fa]'}`} />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-12"
        >
          <div className="space-y-6">
            <h1 className={`text-[48px] md:text-[80px] lg:text-[110px] font-display font-medium leading-[0.85] tracking-tighter transition-colors duration-500 ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              Hi, <br />
              I'M <span className={isDark ? 'text-white/40' : 'text-black/20'}>MOHAMED</span> <br />
              SUPER DUMBUYA
            </h1>
            <h2 className={`text-xl md:text-2xl font-display font-medium italic ${isDark ? 'text-brand-purple' : 'text-neutral-500'}`}>
              Software Engineer & Tech Educator
            </h2>
            <p className={`max-w-xl mx-auto text-base md:text-lg leading-relaxed font-medium transition-colors duration-500 ${
              isDark ? 'text-white/60' : 'text-neutral-500'
            }`}>
              Building digital experiences & inspiring the next generation of tech leaders. Dedicated to turning ideas into innovative digital solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Magnetic>
              <a href="#projects" className={`px-10 py-4 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] transition-all shadow-xl hover:scale-105 active:scale-95 ${
                isDark ? 'bg-brand-purple text-white shadow-brand-purple/20' : 'bg-black text-white shadow-black/10'
              }`}>
                View My Work
              </a>
            </Magnetic>
            <Magnetic>
              <a href="/resume.pdf" className={`px-10 py-4 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] transition-all border transition-colors ${
                isDark ? 'border-white/20 text-white hover:bg-white/10' : 'border-black/10 text-black hover:bg-black/5'
              }`}>
                Download Resume
              </a>
            </Magnetic>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <section id="about" className="py-40 px-8 md:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
        <div className="space-y-12">
          <SectionHeading subtitle="About Me" title="Frontend Engineer with a passion." />
          <div className="space-y-8">
            <p className={`text-xl leading-relaxed ${isDark ? 'text-white/60' : 'text-neutral-500'}`}>
              Hi, I'm Mohamed Super, a frontend Software engineer with a strong foundation in crafting user-friendly and visually appealing digital educations. With a keen eye for detail and a commitment to innovation, I aim to bridge the gap between creativity and technology.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 pt-4">
            <Magnetic>
              <a href="#contact" className={`block text-center px-8 sm:px-12 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                isDark ? 'bg-white text-black' : 'bg-black text-white'
              }`}>
                Hire Me
              </a>
            </Magnetic>
            <Magnetic>
              <Link to="/about" className={`block text-center px-8 sm:px-12 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest border ${
                isDark ? 'border-white/10 text-white' : 'border-black/10 text-black'
              }`}>
                Learn More
              </Link>
            </Magnetic>
          </div>
        </div>
        
        <div className="relative">
          <div className={`rounded-[32px] aspect-[4/5] overflow-hidden border-8 transition-colors duration-500 ${
            isDark ? 'border-white/5 bg-white/5' : 'border-white bg-neutral-100'
          }`}>
            <img 
               src="/msd.png"
               alt="Process"
               className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-all duration-1000"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Education = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <section id="education" className="py-20 sm:py-40 px-4 sm:px-8 md:px-24 border-t border-white/5 bg-black/20">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-32">
        <div className="text-center">
           <h2 className="text-5xl md:text-7xl font-display font-medium text-brand-purple tracking-tight">
             Education
           </h2>
           <div className="w-full max-w-5xl mx-auto h-[2px] bg-brand-purple/40 mt-10" />
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical central line - aligned to left on mobile and centered on desktop */}
          <div className="absolute left-[30px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[4px] bg-brand-purple/30 rounded-full" />
          
          <div className="space-y-16 sm:space-y-24 relative">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className={`relative flex items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}>
                
                {/* Timeline Dot - scaled down on mobile and perfectly centered with vertical line */}
                <div className={`absolute left-[16px] md:left-1/2 md:-translate-x-1/2 w-8 h-8 md:w-12 md:h-12 rounded-full bg-brand-purple border-[4px] md:border-[6px] ${isDark ? 'border-[#0a0a0c]' : 'border-white'} z-20 shadow-[0_0_20px_rgba(46,138,86,0.5)]`} />
                
                {/* Content Card - optimized paddings and spacing on narrow screens */}
                <div className={`w-full md:w-[48%] pl-16 sm:pl-20 md:pl-0 ${idx % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                    className={`p-5 sm:p-8 md:p-10 rounded-[16px] border transition-all duration-500 relative group hover:shadow-[0_0_40px_rgba(46,138,86,0.1)] ${
                      isDark 
                        ? 'bg-[#0a0a0c]/80 backdrop-blur-sm border-white/10 hover:border-brand-purple/50' 
                        : 'bg-white border-black/5 shadow-2xl hover:border-brand-purple/50'
                    }`}
                  >
                    <div className="inline-block border-b-2 border-brand-purple mb-4 sm:mb-6">
                      <span className={`text-sm font-bold font-mono tracking-wider ${isDark ? 'text-white' : 'text-black'}`}>
                        {edu.period}
                      </span>
                    </div>
                    
                    <h4 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-brand-purple mb-3 sm:mb-4 leading-tight">
                      {edu.title}
                    </h4>
                    
                    <p className={`text-lg sm:text-xl font-bold mb-4 sm:mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
                      {edu.institution}
                    </p>
                    
                    <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                      {edu.description}
                    </p>
                  </motion.div>
                </div>
                
                {/* Spacer for the other side */}
                <div className="hidden md:block md:w-[50%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <section id="skills" className="py-40 px-8 md:px-24">
      <div className="max-w-7xl mx-auto space-y-24">
        <SectionHeading subtitle="Capabilities" title="My Tech Stack." />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div key={idx} className="space-y-8">
              <h4 className={`text-[10px] font-bold uppercase tracking-[0.3em] pb-4 border-b ${isDark ? 'text-white/20 border-white/10' : 'text-black/20 border-black/10'}`}>
                {cat.title}
              </h4>
              <div className="flex flex-wrap gap-4">
                {cat.skills.map((skill, si) => (
                  <motion.div
                    key={si}
                    whileHover={{ scale: 1.1, y: -4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className={`px-5 py-2 rounded-full text-xs font-medium transition-all duration-300 border cursor-default ${
                      isDark 
                        ? 'bg-white/5 border-white/5 text-white/60 hover:text-white hover:bg-brand-purple/20 hover:border-brand-purple/40 hover:shadow-[0_10px_20px_rgba(46,138,86,0.15)]' 
                        : 'bg-black/5 border-black/5 text-black/60 hover:text-black hover:bg-brand-purple/10 hover:border-brand-purple/30 hover:shadow-[0_10px_20px_rgba(46,138,86,0.1)]'
                    }`}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <section id="projects" className="py-40 px-8 md:px-24 bg-black/10">
      <div className="max-w-7xl mx-auto space-y-32">
        <div className="flex justify-between items-end">
          <SectionHeading subtitle="Selected Work" title="Projects." />
          <Link to="/more-projects" className={`text-[10px] font-bold uppercase tracking-widest pb-2 border-b transition-colors ${
            isDark ? 'text-white/40 border-white/10 hover:text-white hover:border-white' : 'text-black/40 border-black/10 hover:text-black hover:border-black'
          }`}>
            View More Projects
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-40">
          {PROJECTS.map((p, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-24 items-center`}>
              <motion.div 
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className={`w-full lg:w-1/2 aspect-square rounded-[32px] flex items-center justify-center p-8 transition-all duration-700 overflow-hidden relative group cursor-pointer ${
                isDark 
                  ? 'bg-white/5 border border-white/5 hover:shadow-[0_40px_80px_rgba(46,138,86,0.15)] focus-within:shadow-[0_40px_80px_rgba(46,138,86,0.15)]' 
                  : 'bg-neutral-50 border border-black/5 hover:shadow-[0_40px_80px_rgba(46,138,86,0.1)] focus-within:shadow-[0_40px_80px_rgba(46,138,86,0.1)]'
              }`}>
                 <div className={`w-full h-full rounded-[24px] shadow-2xl flex items-center justify-center transition-all duration-700 overflow-hidden ${
                   isDark ? 'bg-neutral-900' : 'bg-white'
                 }`}>
                    <motion.img 
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      src={p.image} 
                      alt={p.title}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-700"
                    />
                    <h3 className={`absolute text-[12rem] font-display font-bold tabular-nums opacity-[0.03] ${isDark ? 'text-white' : 'text-black'}`}>0{idx+1}</h3>
                    <Laptop className={`absolute w-32 h-32 opacity-10 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100 ${isDark ? 'text-white' : 'text-black'}`} />
                 </div>
                 {/* Visual indicator from inspiration */}
                 <div className="absolute top-12 left-12 flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-purple" />
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">{p.percentage} Complete</span>
                 </div>
              </motion.div>
              <div className="w-full lg:w-1/2 space-y-8">
                 <span className="text-[10px] font-bold text-neutral-300 uppercase tracking-[0.3em]">{p.tags.join(' • ')}</span>
                 <h3 className={`text-6xl font-display font-medium tracking-tight ${isDark ? 'text-white' : 'text-black'}`}>{p.title}</h3>
                 <p className={`text-xl leading-relaxed ${isDark ? 'text-white/60' : 'text-neutral-500'}`}>{p.description}</p>
                 <Magnetic>
                    <Link to={p.link} className={`inline-flex px-12 py-5 rounded-2xl text-[12px] font-bold uppercase tracking-widest flex items-center gap-4 group transition-all ${
                      isDark ? 'bg-white text-black shadow-xl shadow-white/5' : 'bg-black text-white shadow-xl shadow-black/10'
                    }`}>
                      View Case Study <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </Link>
                 </Magnetic>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ArticlesPreview = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <section id="articles-preview" className="py-40 px-8 md:px-24">
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="flex justify-between items-end">
          <SectionHeading subtitle="Writing" title="Latest Articles." />
          <Link to="/blog" className={`text-[10px] font-bold uppercase tracking-widest pb-2 border-b transition-colors ${
            isDark ? 'text-white/40 border-white/10 hover:text-white hover:border-white' : 'text-black/40 border-black/10 hover:text-black hover:border-black'
          }`}>
            View All Articles
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {[
             { title: "Bridging the Gap: Tech Education in SL", date: "May 5, 2025", cat: "Education" },
             { title: "Frontend Performance in 2025", date: "April 28, 2025", cat: "Development" }
           ].map((article, i) => (
             <Link key={i} to="/blog" className={`p-10 rounded-[32px] border transition-all duration-500 group ${
               isDark ? 'glass-dark border-white/5 hover:bg-white/5' : 'bg-neutral-50 border-black/5 hover:bg-white'
             }`}>
                <div className="space-y-6">
                   <span className="text-[9px] font-bold uppercase tracking-widest text-brand-purple">{article.cat}</span>
                   <h3 className="text-3xl font-display font-medium group-hover:text-brand-purple transition-colors">{article.title}</h3>
                   <div className="flex items-center gap-4 opacity-40 text-[9px] font-bold uppercase tracking-widest">
                      <span>{article.date}</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                   </div>
                </div>
             </Link>
           ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <section id="contact" className="py-40 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          <div className="space-y-12">
            <SectionHeading subtitle="Engagement" title="Contact Me." />
            <div className="space-y-12 pt-12">
              {[
                { label: 'Location', val: '106 AirPort Ferry Road - Sierra Leone' },
                { label: 'Phone & WhatsApp', val: '+23290471725', href: 'https://wa.me/23290471725' },
                { label: 'Email', val: 'msdumbuya1475@email.com', href: 'mailto:msdumbuya1475@email.com' }
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <p className={`text-[10px] font-bold uppercase tracking-widest ${isDark ? 'text-brand-purple' : 'text-neutral-300'}`}>{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className={`text-3xl font-display transition-colors ${isDark ? 'text-white hover:text-brand-purple' : 'text-black hover:text-neutral-500'}`}>
                      {item.val}
                    </a>
                  ) : (
                    <p className={`text-3xl font-display ${isDark ? 'text-white' : 'text-black'}`}>{item.val}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className={`p-12 md:p-14 rounded-[32px] transition-all duration-500 ${
            isDark ? 'glass-dark border-white/5' : 'bg-neutral-50 border border-black/5'
          }`}>
             <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-4">
                   <label className={`text-[10px] font-bold uppercase tracking-widest ${isDark ? 'text-white/40' : 'text-black/40'}`}>Name</label>
                   <input type="text" className={`w-full bg-transparent border-b py-4 focus:outline-none transition-colors ${
                     isDark ? 'border-white/10 focus:border-white text-white' : 'border-black/10 focus:border-black text-black'
                   }`} />
                </div>
                <div className="space-y-4">
                   <label className={`text-[10px] font-bold uppercase tracking-widest ${isDark ? 'text-white/40' : 'text-black/40'}`}>Email</label>
                   <input type="email" className={`w-full bg-transparent border-b py-4 focus:outline-none transition-colors ${
                     isDark ? 'border-white/10 focus:border-white text-white' : 'border-black/10 focus:border-black text-black'
                   }`} />
                </div>
                <div className="space-y-4">
                   <label className={`text-[10px] font-bold uppercase tracking-widest ${isDark ? 'text-white/40' : 'text-black/40'}`}>Message</label>
                   <textarea rows={4} className={`w-full bg-transparent border-b py-4 focus:outline-none transition-colors resize-none ${
                     isDark ? 'border-white/10 focus:border-white text-white' : 'border-black/10 focus:border-black text-black'
                   }`} />
                </div>
                <button className={`w-full py-6 rounded-2xl text-[11px] font-bold uppercase tracking-widest transition-all shadow-xl hover:scale-[1.02] active:scale-95 ${
                  isDark ? 'bg-white text-black shadow-white/5' : 'bg-black text-white shadow-black/10'
                }`}>
                   Send Message
                </button>
             </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <ArticlesPreview />
      <Contact />
    </>
  );
};

export default Home;
