import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ThemeContext } from "../App";
import { ArrowLeft, ExternalLink, Github, Laptop } from "lucide-react";

const PROJECTS_DETAIL = {
  "uniguide": {
    title: "UniGuide",
    subtitle: "Empowering Students' Career Choices",
    description: "A career guidance platform to help students explore tech & non-tech courses, skills, and career paths. A project by Tech Inspire SL.",
    problem: "Many students in Sierra Leone lack access to comprehensive career guidance, making it difficult for them to make informed decisions about their future. They often struggle to find information about different courses, career paths, and the skills required for various jobs.",
    solution: "UniGuide provides a centralized platform where students can access all the information they need to make informed career choices. It includes detailed info about courses, universities, and a personalized recommendation system.",
    features: [
      "Comprehensive database of courses and universities",
      "Personalized recommendation system",
      "Scholarship and financial aid directory",
      "Mentor connectivity forum"
    ],
    stack: ["React", "Firebase", "Tailwind CSS"],
    link: "https://uniguide-b996d.web.app/"
  },
  "trackclass": {
    title: "TrackClass",
    subtitle: "Attendance Management System",
    description: "The most reliable verification system for higher education — using rotating tokens and precise geofencing to ensure physical presence.",
    problem: "Educational institutions face significant challenges with proxy attendance and class cutting, leading to inaccurate records and compromised academic integrity.",
    solution: "TrackClass uses rotating session codes and precision geofencing to verify that students are physically present in the classroom during the entire duration of the session.",
    features: [
      "Rotating token verification (30s interval)",
      "Surgical precision geofencing",
      "Real-time administrative dashboards",
      "Early warning system for attendance risks"
    ],
    stack: ["Next.js", "Firebase", "Geofencing API"],
    link: "https://trackclass.vercel.app/"
  },
  "treeventx": {
    title: "TreeventX",
    subtitle: "Event Management ecosystem",
    description: "TreeventX is the leading event management platform in Sierra Leone. Discover and create events, sell tickets, manage attendees, and get real-time analytics.",
    problem: "Organizers in Sierra Leone used to struggle with fake tickets, slow check-ins, and lack of real-time data for their events.",
    solution: "A comprehensive platform that digitizes the entire event lifecycle with secure QR ticketing and integrated local payment systems.",
    features: [
      "QR Code secure ticketing",
      "Real-time event analytics",
      "Local payment integration (Orange/Airtel Money)",
      "AI-powered event promotion tools"
    ],
    stack: ["React", "Node.js", "PostgreSQL"],
    link: "https://treeventx.vercel.app/"
  },
  "nourishwise": {
    title: "NourishWise",
    subtitle: "Personalized Nutrition Guide",
    description: "A smart nutrition guide that helps you make healthier food choices with personalized insights and recommendations.",
    problem: "People often find it hard to track their nutritional intake and understand the actual health impact of their food choices due to complex data and generic advice.",
    solution: "NourishWise uses AI to provide actionable insights based on personal health goals and dietary preferences.",
    features: [
      "Custom meal planning",
      "Nutritional breakdown of local foods",
      "Goal tracking",
      "Smart food rating system"
    ],
    stack: ["Python", "JavaScript", "REST API"],
    link: "https://nourishwise.vercel.app/"
  }
};

const CaseStudy = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isDark } = useContext(ThemeContext);
  const project = PROJECTS_DETAIL[id as keyof typeof PROJECTS_DETAIL];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Project not found</p>
        <button onClick={() => navigate('/')}>Back Home</button>
      </div>
    );
  }

  return (
    <div className={`min-h-screen pt-32 pb-40 px-8 ${isDark ? 'text-white' : 'text-black'}`}>
      <div className="max-w-4xl mx-auto space-y-24">
        {/* Nav */}
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>

        {/* Hero Section */}
        <div className="space-y-12">
          <div className="space-y-4">
            <span className={`text-[10px] font-bold uppercase tracking-[0.4em] ${isDark ? 'text-brand-purple' : 'text-neutral-400'}`}>
              Case Study
            </span>
            <h1 className="text-6xl md:text-9xl font-display font-medium tracking-tighter">
              {project.title}
            </h1>
          </div>
          <p className="text-2xl font-display italic opacity-60 max-w-2xl">
            {project.subtitle}
          </p>
        </div>

        {/* Visual Header */}
        <div className={`aspect-video rounded-[32px] flex items-center justify-center p-8 ${isDark ? 'bg-white/5 border border-white/5' : 'bg-neutral-50 border border-black/5'}`}>
           <div className={`w-full h-full rounded-[24px] shadow-2xl flex items-center justify-center ${isDark ? 'bg-neutral-900' : 'bg-white'}`}>
             <Laptop className={`w-40 h-40 opacity-20 ${isDark ? 'text-white' : 'text-black'}`} />
           </div>
        </div>

        {/* Detail Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20">
          <div className="md:col-span-8 space-y-20">
            <section className="space-y-6">
              <h2 className="text-3xl font-display italic">Overview</h2>
              <p className={`text-lg leading-relaxed ${isDark ? 'text-white/60' : 'text-neutral-500'}`}>
                {project.description}
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-display italic">The Problem</h2>
              <p className={`text-lg leading-relaxed ${isDark ? 'text-white/60' : 'text-neutral-500'}`}>
                {project.problem}
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-display italic">The Solution</h2>
              <p className={`text-lg leading-relaxed ${isDark ? 'text-white/60' : 'text-neutral-500'}`}>
                {project.solution}
              </p>
            </section>
          </div>

          <div className="md:col-span-4">
            <div className={`sticky top-32 p-8 rounded-[32px] border ${isDark ? 'bg-white/5 border-white/5' : 'bg-neutral-50 border-black/5'} space-y-10`}>
              <div className="space-y-4">
                <p className="text-[9px] font-bold uppercase tracking-widest opacity-40">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map(s => (
                    <span key={s} className={`px-4 py-1.5 rounded-full text-[10px] font-medium ${isDark ? 'bg-white/10 text-white' : 'bg-black/5 text-black'}`}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-[9px] font-bold uppercase tracking-widest opacity-40">Key Features</p>
                <ul className="space-y-3">
                  {project.features.map(f => (
                    <li key={f} className="text-xs flex items-center gap-3">
                      <div className="w-1 h-1 rounded-full bg-brand-purple" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className={`flex items-center justify-between w-full px-6 py-4 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                    isDark ? 'bg-white text-black hover:scale-[1.02]' : 'bg-black text-white hover:scale-[1.02]'
                  }`}
                >
                  Live Demo <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
