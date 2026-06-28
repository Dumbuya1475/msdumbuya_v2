import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "motion/react";
import { Moon, Sun } from "lucide-react";
import React, { useState, useEffect, useRef, createContext, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Lenis from "lenis";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import CaseStudy from "./pages/CaseStudy";
import MoreProjects from "./pages/MoreProjects";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Loader from "./components/Loader"; 

// --- Types ---

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  repo?: string;
  image: string;
  percentage?: string;
  id: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

// --- Data ---

export const PROJECTS: Project[] = [
  {
    id: "uniguide",
    title: "UniGuide",
    description: "A platform designed to guide students in selecting their career paths with detailed insights into courses, jobs, and skills.",
    tags: ["React", "Firebase", "Tailwind CSS"],
    link: "/project/uniguide",
    image: "https://images.unsplash.com/photo-1523240715630-3987502f5283?auto=format&fit=crop&q=80&w=1200",
    percentage: "95%"
  },
  {
    id: "trackclass",
    title: "TrackClass",
    description: "Advanced attendance management system using geofencing and rotating tokens to ensure academic integrity.",
    tags: ["Next.js", "Geofencing", "Security"],
    link: "/project/trackclass",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200",
    percentage: "90%"
  },
  {
    id: "treeventx",
    title: "TreeventX",
    description: "The leading event management platform in Sierra Leone. Discover, create, and manage events with real-time analytics.",
    tags: ["React", "Analytics", "Events"],
    link: "/project/treeventx",
    image: "https://images.unsplash.com/photo-1540575861501-7ad0582371f1?auto=format&fit=crop&q=80&w=1200",
    percentage: "85%"
  },
  {
    id: "nourishwise",
    title: "NourishWise",
    description: "A smart nutrition guide that helps you make healthier food choices with personalized insights and recommendations.",
    tags: ["JavaScript", "Python", "REST API"],
    link: "/project/nourishwise",
    image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&q=80&w=1200",
    percentage: "88%"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  { title: "Skills", skills: ["Python", "JavaScript", "HTML5", "CSS3"] },
  { title: "Tools", skills: ["Git", "Github", "VSC"] },
  { title: "Frameworks", skills: ["ReactJS", "NextJS"] },
  { title: "Others", skills: ["Ubuntu", "Terminal/CLI"] },
];

export const EDUCATION = [
  /*
  {
    title: "BSc in Software Engineering",
    institution: "Limkokwing University Sierra Leone",
    description: "Started my university journey in 2026, focusing on deepening my theoretical knowledge and practical application of software engineering principles in a global academic environment.",
    period: "2026 - Present"
  },
  */
  {
    title: "Diploma in Information Technology",
    institution: "Limkokwing University Sierra Leone",
    description: "Started my university journey in 2026, focusing on deepening my theoretical knowledge and practical application of software engineering principles in a global academic environment.",
    period: "2026 - Present"
  },
  {
    title: "Software Engineering Program",
    institution: "ALX Africa",
    description: "Completed a comprehensive 12-month software engineering program focused on full-stack development. Gained hands-on experience with modern frameworks and tools, improving coding proficiency and problem-solving skills.",
    period: "12 Months"
  },
  {
    title: "Senior Secondary School - Business Stream",
    institution: "Prince of Wales Senior Secondary School",
    description: "Completed senior secondary education with a focus on business subjects. Developed skills in critical thinking, business management, and economics.",
    period: "Secondary Education"
  }
];

// --- Context ---

export const ThemeContext = createContext<{ isDark: boolean; toggleTheme: () => void }>({
  isDark: true,
  toggleTheme: () => {},
});

// --- Components ---

const Background = () => {
  const { isDark } = useContext(ThemeContext);
  
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className={`absolute inset-0 transition-colors duration-1000 ${isDark ? 'bg-[#0a0a0c]' : 'bg-[#f8f9fa]'}`} />
      
      <motion.div 
        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] right-[-10%] w-[60%] aspect-square rounded-full bg-brand-blue/10 blur-[120px]"
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], x: [0, -40, 0], y: [0, -60, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-20%] left-[-10%] w-[70%] aspect-square rounded-full bg-brand-purple/10 blur-[150px]"
      />
      
      <div className={`absolute inset-0 opacity-[0.03] ${isDark ? 'invert' : ''}`} 
        style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />
    </div>
  );
};

const Nav = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== '/') return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = ['hero', 'about', 'education', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Blog', href: '/blog', id: 'blog' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith('/')) {
      navigate(href);
      return;
    }
    if (location.pathname !== '/') {
      navigate('/' + href);
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 py-6 ${
        isScrolled ? (isDark ? 'py-4 glass-dark border-b border-white/5' : 'py-4 bg-white/90 backdrop-blur-md border-b border-black/5') : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="relative z-10 flex items-center gap-3">
          <div className={`px-4 h-10 rounded-full flex items-center justify-center text-xs font-bold tracking-wider transition-all duration-500 scale-110 lowercase ${
            isDark ? 'bg-white text-black' : 'bg-black text-white'
          }`}>
            msdumbuya
          </div>
        </a>

        <div className={`hidden md:flex items-center px-4 py-1 rounded-full border transition-all duration-500 ${
          isDark ? 'glass-dark border-white/5' : 'bg-white/80 backdrop-blur-md border-black/5 shadow-sm'
        }`}>
          <div className="flex gap-1 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-4 py-2 text-[9px] font-bold uppercase tracking-widest transition-colors group ${
                  (location.pathname === '/' && activeSection === link.id) || (location.pathname === link.href)
                    ? (isDark ? 'text-black' : 'text-white')
                    : (isDark ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black')
                }`}
              >
                <span className="relative z-10">{link.name}</span>
                {((location.pathname === '/' && activeSection === link.id) || (location.pathname === link.href)) && (
                  <motion.div
                    layoutId="nav-pill"
                    className={`absolute inset-0 rounded-full -z-0 ${isDark ? 'bg-white' : 'bg-black'}`}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-500 ${
              isDark ? 'border-white/10 text-white hover:bg-white/10' : 'border-black/10 text-black hover:bg-black/5'
            }`}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });
  const [isLoading, setIsLoading] = useState(true);

  const toggleTheme = () => setIsDark(prev => !prev);

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <Router>
      <ThemeContext.Provider value={{ isDark, toggleTheme }}>
        <AnimatePresence mode="wait">
          {isLoading && <Loader isDark={isDark} onComplete={() => setIsLoading(false)} />}
        </AnimatePresence>
        
        <div className={`min-h-screen font-sans selection:bg-brand-purple selection:text-white transition-colors duration-1000 ${isDark ? 'dark bg-[#0a0a0c]' : 'bg-[#f8f9fa]'}`}>
          <Background />
          <Nav />
          <ScrollToTop />
          
          <main className="relative z-10">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home key="home" />} />
                <Route path="/about" element={<AboutMe key="about" />} />
                <Route path="/blog" element={<Blog key="blog" />} />
                <Route path="/blog/:id" element={<BlogPost key="blog-post" />} />
                <Route path="/project/:id" element={<CaseStudy key="case-study" />} />
                <Route path="/more-projects" element={<MoreProjects key="more-projects" />} />
              </Routes>
            </AnimatePresence>
          </main>

          <footer className={`py-20 px-8 border-t transition-colors duration-500 ${isDark ? 'border-white/5 bg-[#0a0a0c]' : 'border-black/5 bg-white'}`}>
             <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                <div className="flex items-center gap-4">
                   <div className={`px-4 h-10 rounded-full flex items-center justify-center text-[10px] font-bold lowercase ${isDark ? 'bg-white text-black' : 'bg-black text-white'}`}>msdumbuya</div>
                   <span className={`text-[10px] font-bold uppercase tracking-widest ${isDark ? 'text-white/40' : 'text-neutral-400'}`}>© 2026 Mohamed Super Dumbuya</span>
                </div>
                <div className="flex gap-12">
                   {[
                     { name: 'Twitter', url: 'https://twitter.com/msdumbuya' },
                     { name: 'Github', url: 'https://github.com/msdumbuya' },
                     { name: 'LinkedIn', url: 'https://linkedin.com/in/msdumbuya' }
                   ].map(social => (
                     <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className={`text-[10px] font-bold uppercase tracking-widest hover:text-brand-purple transition-colors ${isDark ? 'text-white/40' : 'text-neutral-400'}`}>
                        {social.name}
                     </a>
                   ))}
                </div>
             </div>
          </footer>
        </div>
      </ThemeContext.Provider>
    </Router>
  );
}
