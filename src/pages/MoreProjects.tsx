import React, { useContext } from "react";
import { FEATURED_PROJECT_IDS, ThemeContext, PROJECTS } from "../App";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

const MoreProjects = () => {
  const { isDark } = useContext(ThemeContext);
  const navigate = useNavigate();

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
           {PROJECTS.filter((project) => !FEATURED_PROJECT_IDS.includes(project.id)).map((p) => (
             <div key={p.id} className={`p-6 sm:p-8 rounded-[32px] border transition-all duration-500 group ${
               isDark ? 'glass-dark border-white/5 hover:bg-white/5' : 'bg-neutral-50 border-black/5 hover:bg-white'
             }`}>
                <div className="w-full aspect-video rounded-2xl mb-8 overflow-hidden bg-black/10">
                   <img
                     src={p.image}
                     alt={`${p.title} project preview`}
                     className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                   />
                </div>
                <h3 className="text-2xl font-display font-medium mb-4">{p.title}</h3>
                <p className={`text-sm leading-relaxed mb-8 ${isDark ? 'text-white/60' : 'text-neutral-500'}`}>
                   {p.description}
                </p>
                <Link to={p.link} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-all">
                  View Project <ArrowRight className="w-3 h-3" />
                </Link>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default MoreProjects;
