import React, { useState, useEffect } from 'react';
import BlogPost from './components/BlogPost';
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
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard for business metrics analysis using Cognos Analytics and Power BI.',
      tech: ['Cognos', 'Power BI', 'SQL'],
      icon: <BarChart className="w-8 h-8 text-violet-400" />,
      link:"https://github.com/shrushti425/Business-Dashboard",
    },
    {
      title: 'Market Data Analysis',
      description: 'Python-based analysis pipeline for market trends and consumer behavior patterns.',
      tech: ['Python', 'Pandas', 'Matplotlib'],
      icon: <PieChart className="w-8 h-8 text-violet-400" />,
      link:"https://github.com/shrushti425/Market-Data-Analysis",
    },
    {
      title: 'Airline Ticket Booking System',
      description: 'Automated data collection system using Python Scrapy for market research.',
      tech: ['Python', 'Scrapy', 'SQL'],
      icon: <Table className="w-8 h-8 text-violet-400" />,
      link:"https://github.com/shrushti425/flightbookingsystem",
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

      {/* Navigation */}
      <nav className="fixed w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <span className="text-xl font-semibold text-violet-400 flex items-center gap-2">
              Shrushti Raut
            </span>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="nav-link">Home</a>
              <a href="#about" className="nav-link">About</a>
              <a href="#skills" className="nav-link">Skills</a>
              <a href="#projects" className="nav-link">Projects</a>
              <a href="#blog" className="nav-link">Blog</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
     <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
  {/* Video Background */}
  <div className="absolute inset-0 z-0">
    <iframe
      className="w-full h-full object-cover"
      src="https://www.youtube.com/embed/sQ22pm-xvrE?autoplay=1&mute=1&controls=0&loop=1&playlist=sQ22pm-xvrE&modestbranding=1&showinfo=0"
      title="About Me Video"
      allow="autoplay; encrypted-media"
      allowFullScreen
    />
    {/* Dark overlay for readability */}
    <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm z-10" />
  </div>

  {/* Hero Content */}
  <div className="relative z-20 text-center max-w-3xl px-4">
    <div className="mb-4 text-violet-300 text-sm md:text-base font-medium tracking-wide">
      Ex-Research Intern @ IIM Ahmedabad | AI/ML Enthusiast | Python Developer
    </div>
    <h1 className="text-4xl md:text-6xl font-bold text-violet-400 mb-6 animate-fade-in glow-text">
      Shrushti Raut
    </h1>
    <p className="text-lg text-slate-300 mb-8 animate-fade-in">
      Hey! I'm Shrushti, a third-year AI & ML student who loves turning messy data into insights that actually matter. From building predictive models to crafting dashboards and diving into NLP, I'm all about solving real-world problems with data and having fun while doing it.
    </p>
    
    {/* Blog Highlight Popup */}
    <div className="mb-8 animate-fade-in">
      <div 
        onClick={() => setShowBlog(true)}
        className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600/20 to-purple-600/20 
                   border border-violet-400/30 rounded-full px-4 py-2 text-sm text-violet-300 
                   hover:border-violet-400/60 hover:bg-gradient-to-r hover:from-violet-600/30 
                   hover:to-purple-600/30 transition-all duration-300 cursor-pointer group"
      >
        <div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse"></div>
        <span>Read my new blog: How I landed IIM Ahm internship</span>
        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>

    {/* Social Links */}
    <div className="flex justify-center items-center gap-6 mb-8 animate-fade-in">
      <a 
        href="https://github.com/shrushti425" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-slate-400 hover:text-violet-400 transition-all duration-300 p-3 hover:bg-violet-400/10 rounded-full hover:scale-110"
      >
        <Github className="w-6 h-6" />
      </a>
      <a 
        href="https://linkedin.com/in/shrushti-raut4" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-slate-400 hover:text-violet-400 transition-all duration-300 p-3 hover:bg-violet-400/10 rounded-full hover:scale-110"
      >
        <Linkedin className="w-6 h-6" />
      </a>
      <a 
        href="https://x.com/codewithsushi" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-slate-400 hover:text-violet-400 transition-all duration-300 p-3 hover:bg-violet-400/10 rounded-full hover:scale-110"
      >
        <Twitter className="w-6 h-6" />
      </a>
      <a 
        href="mailto:smraut3434@gmail.com" 
        className="text-slate-400 hover:text-violet-400 transition-all duration-300 p-3 hover:bg-violet-400/10 rounded-full hover:scale-110"
      >
        <Mail className="w-6 h-6" />
      </a>
    </div>

    <a href="#contact" className="btn-primary group inline-flex items-center justify-center">
      Let's Connect 
      <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
    </a>
  </div>
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
        src="/sushi.jpg"
        alt="Shrushti"
        className="rounded-2xl shadow-lg w-[300px] object-cover object-top transition-transform duration-300 hover:scale-105"
      />
    </div>
  </div>
</section>

      {/* What I Do Section */}
      <section className="section-container">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="glass-card p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-6 glow-text flex items-center gap-3">
              💡 What I Do
            </h2>
            <div className="space-y-4 text-slate-300">
              <p>
                I turn data into decisions. From cleaning and transforming raw datasets to building predictive models, I thrive on making information actionable and insightful. I enjoy uncovering patterns that not only solve problems but also drive business strategy.
              </p>
              <p>
                I work with Python, SQL, and Excel to crunch numbers, and bring data stories to life using Tableau, Power BI, and IBM Cognos Analytics. I also love web scraping and integrating APIs to gather the right data for the job.
              </p>
              <p>
                On the machine learning side, I design models for prediction, NLP, and automation using tools like Scikit-learn, TensorFlow, and PyTorch. Visualizing trends with Matplotlib, Seaborn, and interactive dashboards is my way of helping teams make smarter, data-driven decisions.
              </p>
            </div>
          </div>

          <div className="glass-card p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-6 glow-text flex items-center gap-3">
              🤝 How I Work
            </h2>
            <div className="space-y-4 text-slate-300">
              <p>
                I combine analytical thinking with creative problem-solving. Leading projects, collaborating with teams, and presenting insights in a clear, impactful way are my strengths.
              </p>
              <p>
                I enjoy building initiatives that bring together data and strategy, mentoring peers, and creating opportunities for others to explore business analytics and real-world applications.
              </p>
              <p>
                I believe data isn't just numbers — it's a story waiting to be told, and I'm here to tell it.
              </p>
            </div>
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
        <h2 className="text-3xl font-bold mb-12 glow-text">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card group block p-4 rounded-lg hover:scale-105 transition-transform duration-300">
            
              <div className="mb-4">{project.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-violet-400">{project.title}</h3>
              <p className="text-slate-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-violet-900/30 text-violet-300 rounded-full text-xs">
                    {tech}
                  </span>
                ))}
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
                  <span>January 15, 2025</span>
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
        <p>© 2024 Shrushti Raut. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;