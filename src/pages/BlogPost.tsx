import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ThemeContext } from "../App";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";
import { motion } from "motion/react";

const BLOG_CONTENT = {
  "tech-education-sl": {
    title: "Bridging the Gap: The Future of Tech Education in Sierra Leone",
    date: "May 5, 2025",
    readTime: "6 min read",
    author: "Mohamed Super",
    category: "Education",
    content: `
      <p>Technology is not just about code; it's about empowerment. In Sierra Leone, we are at a pivotal moment where digital literacy can transform our economy and society. The challenge isn't a lack of talent, but a lack of structured guidance and resources.</p>
      
      <h3>The Current Landscape</h3>
      <p>Most young people in Freetown or Lungi have smartphones, but there's a disconnect between high consumption and creative production. We need to move from being users to being builders.</p>
      
      <h3>The Role of Mentorship</h3>
      <p>Through Tech Inspire SL, we've seen that consistent mentorship is more effective than any one-off workshop. When a student sees someone from their own neighborhood building software for global clients, the "impossible" becomes a "task list."</p>
      
      <blockquote>"The mind is the limit. When you face your struggles, you overcome them."</blockquote>
      
      <h3>Next Steps</h3>
      <p>Our focus in 2025 is on decentralized learning. By bringing tech education to community hubs, we can ensure that every aspiring developer has a fair shot at the digital future.</p>
    `
  },
  "frontend-perf-2025": {
    title: "Why Frontend Performance is More Than Just Speed",
    date: "April 28, 2025",
    readTime: "8 min read",
    author: "Mohamed Super",
    category: "Development",
    content: `
      <p>In 2025, user experience is defined by perceived performance. It's not just about how fast your site loads, but how it feels while it's loading and how much energy it consumes on a user's device.</p>
      
      <h3>The Impact of 5G and Local Constraints</h3>
      <p>While global speeds are increasing, we must design for the lower bounds. Efficient bundling and server-side rendering (SSR) are critical in areas with fluctuating connectivity.</p>
      
      <h3>Sustainability in Code</h3>
      <p>Lightweight sites aren't just faster; they're better for the environment. Every kilobyte we save reduces the energy required for data transmission and processing.</p>
    `
  },
  "alx-journey": {
    title: "My Journey Through the ALX Software Engineering Program",
    date: "April 15, 2025",
    readTime: "10 min read",
    author: "Mohamed Super",
    category: "Personal",
    content: `
      <p>My journey through the ALX Software Engineering program was one of the most challenging and rewarding experiences of my life. 12 months of intense growth, complex algorithms, and late-night debugging sessions.</p>
      
      <h3>Hard Work and Dedication</h3>
      <p>The program demanded more than just intelligence; it demanded grit. From learning C and Python to mastering React and system architecture, every month was a deep dive into the unknown.</p>
      
      <h3>Building UniGuide</h3>
      <p>The culmination of my learning was UniGuide. It wasn't just a portfolio project; it was a solution to a problem I had faced myself. Seeing it come to life confirmed that my academic shift from business to science was the right path.</p>
    `
  }
};

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isDark } = useContext(ThemeContext);
  const post = BLOG_CONTENT[id as keyof typeof BLOG_CONTENT];

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-display mb-8">Post not found</h1>
        <button onClick={() => navigate('/blog')} className="px-8 py-3 bg-brand-purple text-white rounded-full">Back to Blog</button>
      </div>
    );
  }

  return (
    <div className={`min-h-screen pt-32 pb-40 px-8 ${isDark ? 'text-white' : 'text-black'}`}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto space-y-12"
      >
        <button 
          onClick={() => navigate('/blog')}
          className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </button>

        <div className="space-y-8">
          <div className="flex gap-4">
             <span className="text-[10px] font-bold uppercase tracking-widest text-brand-purple bg-brand-purple/10 px-4 py-1.5 rounded-full">
                {post.category}
             </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tighter leading-tight">
             {post.title}
          </h1>

          <div className="flex flex-wrap gap-8 items-center border-y border-white/5 py-8">
             <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold ${isDark ? 'bg-white text-black' : 'bg-black text-white'}`}>MS</div>
                <div className="space-y-1">
                   <p className="text-[9px] font-bold uppercase tracking-widest opacity-40">Author</p>
                   <p className="text-sm font-medium">{post.author}</p>
                </div>
             </div>
             
             <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 opacity-40" />
                <div className="space-y-1">
                   <p className="text-[9px] font-bold uppercase tracking-widest opacity-40">Date</p>
                   <p className="text-sm font-medium">{post.date}</p>
                </div>
             </div>

             <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 opacity-40" />
                <div className="space-y-1">
                   <p className="text-[9px] font-bold uppercase tracking-widest opacity-40">Read Time</p>
                   <p className="text-sm font-medium">{post.readTime}</p>
                </div>
             </div>
          </div>
        </div>

        <div 
          className={`blog-content prose prose-lg max-w-none ${isDark ? 'prose-invert' : ''}`}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </motion.div>
    </div>
  );
};

export default BlogPost;
