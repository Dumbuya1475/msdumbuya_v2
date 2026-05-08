import React, { useContext } from "react";
import { ThemeContext } from "../App";
import { ArrowLeft, ArrowRight, MessageSquare, Clock, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

const ARTICLES = [
  {
    id: "tech-education-sl",
    title: "Bridging the Gap: The Future of Tech Education in Sierra Leone",
    excerpt: "Exploring how mentorship and accessible resources can empower the next generation of digital innovators in Lungi and beyond.",
    date: "May 5, 2025",
    readTime: "6 min read",
    author: "Mohamed Super",
    category: "Education"
  },
  {
    id: "frontend-perf-2025",
    title: "Why Frontend Performance is More Than Just Speed",
    excerpt: "In 2025, user experience is defined by perceived performance and inclusive design. Let's dive into modern optimization strategies.",
    date: "April 28, 2025",
    readTime: "8 min read",
    author: "Mohamed Super",
    category: "Development"
  },
  {
    id: "alx-journey",
    title: "My Journey Through the ALX Software Engineering Program",
    excerpt: "Reflecting on 12 months of intense growth, complex algorithms, and building UniGuide.",
    date: "April 15, 2025",
    readTime: "10 min read",
    author: "Mohamed Super",
    category: "Personal"
  }
];

const Blog = () => {
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
            Articles & Insights
          </span>
          <h1 className="text-6xl md:text-8xl font-display font-medium tracking-tighter">
            Digital Thoughts.
          </h1>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {ARTICLES.map((article, i) => (
             <motion.div
               key={article.id}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               onClick={() => navigate(`/blog/${article.id}`)}
               className={`p-10 rounded-[32px] border flex flex-col justify-between transition-all duration-500 group cursor-pointer ${
                 isDark ? 'glass-dark border-white/5 hover:bg-white/5' : 'bg-neutral-50 border-black/5 hover:bg-white'
               }`}
             >
                <div className="space-y-6">
                   <div className="flex justify-between items-center">
                      <span className="text-[9px] font-bold uppercase tracking-widest text-brand-purple bg-brand-purple/10 px-4 py-1.5 rounded-full">
                         {article.category}
                      </span>
                      <div className="flex items-center gap-2 opacity-40 text-[9px] font-bold uppercase tracking-widest">
                         <Clock className="w-3 h-3" /> {article.readTime}
                      </div>
                   </div>
                   
                   <div className="space-y-4">
                      <h3 className="text-2xl font-display font-medium group-hover:text-brand-purple transition-colors leading-tight">
                        {article.title}
                      </h3>
                      <p className={`text-sm leading-relaxed line-clamp-3 ${isDark ? 'text-white/60' : 'text-neutral-500'}`}>
                        {article.excerpt}
                      </p>
                   </div>
                </div>

                <div className="pt-8 flex items-center justify-between border-t border-white/5 mt-8">
                   <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold ${isDark ? 'bg-white text-black' : 'bg-black text-white'}`}>MS</div>
                      <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">{article.author}</span>
                   </div>
                   <ArrowRight className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
