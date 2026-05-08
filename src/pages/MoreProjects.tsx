import React, { useContext } from "react";
import { ThemeContext } from "../App";
import { ArrowLeft, Laptop, ArrowRight } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

const MoreProjects = () => {
  const { isDark } = useContext(ThemeContext);
  const navigate = useNavigate();

  const extraProjects = [
    { title: "Project Alpha", desc: "A creative exploration of grid systems and motion.", link: "#" },
    { title: "Project Beta", desc: "Advanced data visualization dashboard for crypto assets.", link: "#" },
    { title: "Project Gamma", desc: "Minimalist task management application for teams.", link: "#" }
  ];

  return (
    <div className={`min-h-screen pt-32 pb-40 px-8 ${isDark ? 'text-white' : 'text-black'}`}>
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Nav */}
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>

        {/* Header */}
        <div className="space-y-6">
          <span className={`text-[10px] font-bold uppercase tracking-[0.4em] ${isDark ? 'text-brand-purple' : 'text-neutral-400'}`}>
            Archive
          </span>
          <h1 className="text-6xl md:text-8xl font-display font-medium tracking-tighter">
            More Projects.
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {extraProjects.map((p, i) => (
             <div key={i} className={`p-12 rounded-[48px] border transition-all duration-500 group ${
               isDark ? 'glass-dark border-white/5 hover:bg-white/5' : 'bg-neutral-50 border-black/5 hover:bg-white'
             }`}>
                <div className={`w-16 h-16 rounded-2xl mb-8 flex items-center justify-center ${isDark ? 'bg-white/5' : 'bg-black/5'}`}>
                   <Laptop className="w-8 h-8 opacity-40 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-2xl font-display font-medium mb-4">{p.title}</h3>
                <p className={`text-sm leading-relaxed mb-8 ${isDark ? 'text-white/60' : 'text-neutral-500'}`}>
                   {p.desc}
                </p>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-all">
                   View Project <ArrowRight className="w-3 h-3" />
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default MoreProjects;
