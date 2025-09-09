import React, { useState, useEffect } from 'react';
import BlogPost from './components/BlogPost';
import ShaderShowcase from './components/ui/hero';
import { NavBar } from './components/ui/tubelight-navbar';
import { motion } from 'framer-motion';
import { 
  Home, 
  User, 
  Code2, 
  Briefcase, 
  FileText, 
  BookOpen, 
  Mail,
  Github,
  Linkedin,
  Twitter,
  ChevronRight,
  Download,
  Brain,
  Database,
  LineChart,
  Terminal,
  BarChart,
  PieChart,
  Table
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showBlog, setShowBlog] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const navItems = [
    { name: 'Home', url: '#home', icon: Home },
    { name: 'About', url: '#about', icon: User },
    { name: 'Skills', url: '#skills', icon: Code2 },
    { name: 'Projects', url: '#projects', icon: Briefcase },
    { name: 'Blog', url: '#blog', icon: BookOpen },
    { name: 'Contact', url: '#contact', icon: Mail }
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Add delay to glow effect for smooth following
      setTimeout(() => {
        setGlowPosition({ x: e.clientX, y: e.clientY });
      }, 100);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = {
    programming: ['Python', 'SQL', 'Excel', 'Tableau', 'Power BI', 'IBM Cognos Analytics', 'Data Analytics', 'Data Visualization', 'Web Scraping', 'Dashboard Development', 'Data Cleaning', 'Data Transformation'],
    ml: ['Machine Learning (ML)', 'Natural Language Processing (NLP)', 'Predictive Modeling', 'Streamlit', 'API Integration'],
    tools: ['Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn', 'Tensorflow', 'PyTorch', 'BeautifulSoup', 'Seaborn'],
    soft: ['Leadership', 'Communication', 'Problem-Solving', 'Critical Thinking', 'Analytical Storytelling', 'Team Collaboration', 'Content Creation', 'Presentation Skills']
  };

  const projects = [
    {
      title: 'Business Data Analysis Dashboard',
      description: 'Interactive dashboard made using IBM Cognos for comprehensive business metrics analysis and data visualization.',
      tech: ['IBM Cognos', 'Data Analytics'],
      icon: <BarChart className="w-8 h-8 text-violet-400" />,
      link: 'https://github.com/shrushti425/Business-Dashboard'
    },
    {
      title: 'Regional Sales Analysis',
      description: 'Analysed regional sales data using Python to find market trends and consumer behaviour patterns with comprehensive data insights.',
      tech: ['Python', 'Pandas', 'Matplotlib'],
      icon: <PieChart className="w-8 h-8 text-violet-400" />,
      link: 'https://github.com/shrushti425/Regional_sales_analysis'
    },
    {
      title: 'Airline Ticket Booking System',
      description: 'Created a comprehensive airline ticket booking system using DBMS and Python with full booking functionality.',
      tech: ['Python', 'SQL'],
      icon: <Table className="w-8 h-8 text-violet-400" />,
      link: 'https://github.com/shrushti425/flightbookingsystem'
    }
  ];

  const handleDownload = () => {
    window.open('https://drive.google.com/file/d/1mst_GHQ8Dd43djv1buHRAFNp9RPgs14a/view', '_blank');
  };

  if (showBlog) {
    return <BlogPost onBack={() => setShowBlog(false)} />;
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Interactive background effect */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(600px at ${glowPosition.x}px ${glowPosition.y}px, rgba(124, 58, 237, 0.15), transparent 80%),
            radial-gradient(800px at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.07), transparent 80%)
          `,
          transition: 'background 0.3s ease'
        }}
      />

      {/* Tubelight Navigation */}
      <NavBar items={navItems} />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen">
        <ShaderShowcase onBlogClick={() => setShowBlog(true)} />
      </section>

<section id="about" className="section-container">
  <h2 className="text-3xl font-bold mb-6 glow-text">About Me</h2>
  <div className="grid md:grid-cols-2 gap-8 items-start">
    {/* Text Section */}
    <div className="glass-card p-8 rounded-xl space-y-6 flex-1">
      <p className="text-slate-300">
        Currently third-year AI & ML enthusiast who loves turning raw data into insights that matter. Whether it's building predictive models, crafting interactive dashboards, or diving into NLP projects, I thrive on solving real-world problems with data.
      </p>
      <p className="text-slate-300">
        I'm all about making numbers tell a story, uncovering trends that drive smart decisions, and exploring innovative solutions. Along the way, I enjoy leading initiatives that bridge data and business impact, while learning something new every day.
      </p>

      {/* Elegant Quote + Signature */}
      <div className="text-center mt-6">
        <p className="text-violet-300 italic font-semibold text-lg md:text-xl leading-relaxed font-serif glow-text">
          "Turning data into decisions,<br />
          dreams into ventures."
        </p>
        <p className="text-slate-400 mt-2 text-sm md:text-base tracking-wide">– Shrushti</p>
      </div>
    </div>

    {/* Image Section (refined) */}
    <div className="flex justify-center items-center mt-6 md:mt-0">
      <img
        src="/sushi.jpeg"
        alt="Shrushti"
        className="rounded-2xl shadow-lg w-[300px] object-cover object-top transition-transform duration-300 hover:scale-105"
      />
    </div>
  </div>
</section>

      {/* Skills Section */}
      <section id="skills" className="section-container bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-3xl">
        <h2 className="text-3xl font-bold mb-6 glow-text text-center">💡 Skills & Expertise</h2>
        <p className="text-slate-300 text-center mb-12 max-w-2xl mx-auto">
          A comprehensive toolkit for turning data into actionable insights and building intelligent solutions.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Programming & Analytics */}
          <div className="glass-card p-8 rounded-xl group hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg shadow-violet-500/30">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-violet-400">
                Programming & Analytics
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {skills.programming.map((skill) => (
                <span key={skill} className="skill-tag-modern text-center">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          {/* Machine Learning & AI */}
          <div className="glass-card p-8 rounded-xl group hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg shadow-emerald-500/30">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-violet-400">
                Machine Learning & AI
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {skills.ml.map((skill) => (
                <span key={skill} className="skill-tag-modern text-center">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools & Libraries */}
          <div className="glass-card p-8 rounded-xl group hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg shadow-orange-500/30">
                <Terminal className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-violet-400">
                Tools & Libraries
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {skills.tools.map((skill) => (
                <span key={skill} className="skill-tag-modern text-center">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          {/* Soft Skills */}
          <div className="glass-card p-8 rounded-xl group hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg shadow-pink-500/30">
                <User className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-violet-400">
                Soft Skills
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {skills.soft.map((skill) => (
                <span key={skill} className="skill-tag-modern text-center">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-container">
        <h2 className="text-3xl font-bold mb-6 glow-text text-center">Featured Projects</h2>
        <p className="text-slate-300 text-center mb-12 max-w-2xl mx-auto">
          Explore my latest work in data analysis, visualization, and system development
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a 
              key={project.title} 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-8 rounded-xl group hover:scale-[1.02] transition-all duration-300 
                         hover:shadow-[0_0_40px_rgba(124,58,237,0.3)] border border-slate-700/50 
                         hover:border-violet-500/50 cursor-pointer block"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl 
                               flex items-center justify-center shadow-lg shadow-violet-500/30 
                               group-hover:shadow-violet-500/50 transition-all duration-300">
                  {project.icon}
                </div>
                <div className="w-8 h-8 bg-slate-700/50 rounded-full flex items-center justify-center 
                               group-hover:bg-violet-500/20 transition-all duration-300">
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-violet-400 
                                         group-hover:translate-x-0.5 transition-all duration-300" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-violet-400 group-hover:text-violet-300 
                           transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-slate-300 mb-6 leading-relaxed group-hover:text-slate-200 
                          transition-colors duration-300">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1.5 bg-gradient-to-r from-slate-700/50 to-slate-800/50 
                                           text-slate-200 rounded-lg text-xs font-medium border border-slate-600/30
                                           group-hover:border-violet-400/50 group-hover:bg-gradient-to-r 
                                           group-hover:from-violet-900/30 group-hover:to-purple-900/30 
                                           group-hover:text-violet-200 transition-all duration-300">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center text-sm text-slate-400 group-hover:text-violet-400 
                            transition-colors duration-300 font-medium">
                <span>View on GitHub</span>
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Resume Section */}
      <section className="section-container text-center">
        <h2 className="text-3xl font-bold mb-6 glow-text">Resume</h2>
        <p className="text-slate-300 mb-8">Download my resume to learn more about my experience and qualifications.</p>
        <button 
          onClick={handleDownload}
          className="btn-primary group"
        >
          Download Resume 
          <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
        </button>
      </section>

      {/* Blog Section */}
      <section id="blog" className="section-container">
        <h2 className="text-3xl font-bold mb-6 glow-text">Blog</h2>
        <div className="grid gap-6">
          <article className="card group cursor-pointer" onClick={() => setShowBlog(true)}>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-violet-400 mb-2 group-hover:text-violet-300 transition-colors">
                  The Unexpected Email That Changed My Life
                </h3>
                <p className="text-slate-300 mb-3">
                  Sometimes life takes unexpected turns that lead you exactly where you need to be. This is the story of how one email changed my entire perspective on data science...
                </p>
                <div className="flex items-center gap-4 text-sm text-slate-400">
                  <span>8 August, 2025</span>
                  <span>•</span>
                  <span>5 min read</span>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-violet-400 group-hover:translate-x-1 transition-all" />
            </div>
          </article>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-container">
        <h2 className="text-3xl font-bold mb-12 glow-text">Get in Touch</h2>
        <div className="flex justify-center space-x-8">
          <a href="https://github.com/shrushti425" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-violet-400 transition-colors p-3 hover:bg-violet-400/10 rounded-full">
            <Github className="w-8 h-8" />
          </a>
          <a href="https://linkedin.com/in/shrushti-raut4" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-violet-400 transition-colors p-3 hover:bg-violet-400/10 rounded-full">
            <Linkedin className="w-8 h-8" />
          </a>
          <a href="https://x.com/codewithsushi" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-violet-400 transition-colors p-3 hover:bg-violet-400/10 rounded-full">
            <Twitter className="w-8 h-8" />
          </a>
          <a href="mailto:smraut3434@gmail.com" className="text-slate-400 hover:text-violet-400 transition-colors p-3 hover:bg-violet-400/10 rounded-full">
            <Mail className="w-8 h-8" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-400 border-t border-slate-800">
        <p>© 2025 Shrushti Raut. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;