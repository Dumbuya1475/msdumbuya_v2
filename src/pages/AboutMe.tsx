import React, { useContext } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ThemeContext } from "../App";
import { ArrowLeft, Github, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AboutMe = () => {
  const { isDark } = useContext(ThemeContext);
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 800], [0.8, 0]);

  const timeline = [
    {
      year: "2026",
      title: "University Journey",
      content: "Began my BSc in Software Engineering at Limkokwing University Sierra Leone. A significant milestone where I am bridging my self-taught and bootcamp experience with formal higher education to build more scalable and complex systems."
    },
    {
      year: "2025",
      title: "Portfolio & Growth",
      content: "Built my portfolio website, showcasing my work and solidifying my passion for front-end development. This experience deepened my interest in software engineering and motivated me to further explore creating innovative digital solutions."
    },
    {
      year: "2023-2024",
      title: "ALX & Tech Inspire SL",
      content: "Co-founded Tech Inspire SL to mentor young Sierra Leoneans in tech and creative fields. Enrolled in the ALX Software Engineering Program to formalize my skills while starting my freelancing journey as a web developer."
    },
    {
      year: "2021-2023",
      title: "High School",
      content: "Completed high school at Prince of Wales School, where I was placed in the business stream, but developed a growing interest in software development."
    }
  ];

  const experience = [
    {
      title: "Co-Founder & Lead Developer",
      company: "Tech Inspire SL",
      period: "November 2024 - Present",
      tasks: [
        "Established a tech-focused organization aimed at inspiring and educating students about technology careers in Sierra Leone",
        "Developed educational platforms and resources to guide students through tech career paths",
        "Spearheaded the development of UniGuide, an interactive platform connecting students to educational opportunities",
        "Organized workshops and mentorship programs to foster tech skills in underserved communities"
      ]
    },
    {
      title: "Freelance Web Developer",
      company: "Remote",
      period: "December 2021 - Present",
      tasks: [
        "Designed and developed websites for small businesses to improve their online presence",
        "Created portfolio websites for local artists, including Ayrann (musician) and Hasjal (poet/photographer)",
        "Specialized in responsive design, clean user interfaces, and performance optimization",
        "Consulted with clients to translate business needs into effective digital solutions"
      ]
    }
  ];

  return (
    <div className={`min-h-screen relative ${isDark ? 'text-white' : 'text-black'}`}>
      {/* Background Image with Parallax (Symmetry with Home Page) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div
          style={{ y, opacity }}
          className="w-full h-[120vh] -mt-20" // Pull up slightly
        >
          <img 
            src="/msd.png"
            alt="Background Portrait"
            className="w-full h-full object-cover grayscale-0 opacity-100 object-top"
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

      <div className="max-w-7xl mx-auto space-y-32 relative z-10 pt-32 pb-40 px-8">
        {/* Back Button */}
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity bg-black/20 backdrop-blur-md px-4 py-2 rounded-full w-fit"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-6">
              <span className={`text-[10px] font-bold uppercase tracking-[0.4em] ${isDark ? 'text-brand-purple' : 'text-neutral-400'}`}>
                About Me
              </span>
              <h1 className="text-6xl md:text-8xl font-display font-medium tracking-tighter leading-[0.9]">
                Building digital experiences that inspire.
              </h1>
              <p className={`text-xl leading-relaxed max-w-2xl bg-black/10 backdrop-blur-sm p-6 rounded-2xl ${isDark ? 'text-white/80' : 'text-neutral-700'}`}>
                My journey in tech has been fueled by a passion for solving real-world problems and empowering individuals through accessible, user-centered digital solutions.
              </p>
            </div>
            <div className="flex flex-wrap gap-8">
               <a href="/resume.pdf" className={`px-10 py-4 rounded-full text-[11px] font-bold uppercase tracking-widest ${isDark ? 'bg-white text-black' : 'bg-black text-white shadow-2xl'}`}>
                  Download Resume
               </a>
               <a href="#contact" className={`px-10 py-4 rounded-full text-[11px] font-bold uppercase tracking-widest border backdrop-blur-md ${isDark ? 'border-white/10 text-white bg-white/5' : 'border-black/10 text-black bg-black/5'}`}>
                  Let's Work Together
               </a>
            </div>
          </div>
          <div className="lg:col-span-5 relative group">
            <div className={`aspect-[4/5] rounded-[32px] overflow-hidden border-[12px] ${isDark ? 'border-white/5 bg-white/5' : 'border-white shadow-2xl bg-white'}`}>
              <img 
                src="/msd.png" 
                alt="Mohamed Super Dumbuya" 
                className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
              />
            </div>
            {/* Soft Glow */}
            <div className="absolute -inset-4 bg-brand-purple/20 blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>
        </div>

        {/* My Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-4">
            <h2 className="text-4xl font-display italic">My Story</h2>
          </div>
          <div className="lg:col-span-8 space-y-8">
            <p className={`text-lg leading-relaxed ${isDark ? 'text-white/60' : 'text-neutral-500'}`}>
              Growing up in Sierra Leone, I dreamed of becoming a civil or architectural engineer. However, due to being placed in the business stream at Prince of Wales instead of the science stream, my academic journey took an unexpected turn. While this initially felt like a setback, it would eventually shape my path in ways I never anticipated.
            </p>
            <p className={`text-lg leading-relaxed ${isDark ? 'text-white/60' : 'text-neutral-500'}`}>
              Despite this shift, my curiosity for technology grew steadily. I began to explore programming and web development on my own, fascinated by how technology could solve real-world problems. In 2023, I joined ALX’s Software Engineering program to formalize my skills and deepen my understanding of the field.
            </p>
            <p className={`text-lg leading-relaxed ${isDark ? 'text-white/60' : 'text-neutral-500'}`}>
              Today, I’m focused on creating solutions like UniGuide, a platform designed to help students make informed decisions about their education and career paths. In 2026, I took the next big step in my academic career by enrolling at Limkokwing University Sierra Leone to pursue a degree in Software Engineering. By combining my passion for technology and mentorship, I strive to contribute to a more inclusive and innovative tech ecosystem in West Africa.
            </p>
            
            <div className={`mt-12 p-12 rounded-[32px] border ${isDark ? 'bg-white/5 border-white/5' : 'bg-neutral-50 border-black/5'} italic`}>
               <p className="text-2xl font-display mb-4">"The mind is the limit. When you face your struggles, you overcome them."</p>
               <cite className="text-[10px] uppercase tracking-widest opacity-40">— Mohamed Super, Aspiring Software Engineer</cite>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-4">
             <h2 className="text-4xl font-display italic">Timeline</h2>
          </div>
          <div className="lg:col-span-8 space-y-12">
            {timeline.map((item, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-1">
                   <span className="text-2xl font-display tabular-nums opacity-40">{item.year}</span>
                </div>
                <div className="md:col-span-3 space-y-2">
                   <h3 className="text-xl font-bold uppercase tracking-widest text-xs">{item.title}</h3>
                   <p className={`text-base leading-relaxed ${isDark ? 'text-white/60' : 'text-neutral-500'}`}>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-4">
             <h2 className="text-4xl font-display italic">Professional Experience</h2>
          </div>
          <div className="lg:col-span-8 space-y-16">
            {experience.map((exp, i) => (
              <div key={i} className="space-y-6">
                <div>
                   <h3 className="text-2xl font-bold uppercase tracking-widest text-sm">{exp.title}</h3>
                   <p className="text-brand-purple text-xs font-bold uppercase tracking-widest mt-1">{exp.company} • {exp.period}</p>
                </div>
                <ul className="space-y-4">
                   {exp.tasks.map((task, ti) => (
                     <li key={ti} className="flex gap-4 text-base leading-relaxed opacity-60">
                        <span className="text-brand-purple mt-1">•</span>
                        {task}
                     </li>
                   ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
