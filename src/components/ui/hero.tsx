"use client"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import AnimatedGradientBackground from "./animated-gradient-background"
import { 
  Github,
  Linkedin,
  Twitter,
  ChevronRight,
  Mail
} from 'lucide-react';

interface HeroProps {
  onBlogClick: () => void;
}

export default function ShaderShowcase({ onBlogClick }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const handleMouseEnter = () => setIsActive(true)
    const handleMouseLeave = () => setIsActive(false)

    const container = containerRef.current
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter)
      container.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter)
        container.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Animated Gradient Background with your brand colors */}
      <AnimatedGradientBackground
        startingGap={120}
        Breathing={true}
        gradientColors={[
          "#0f172a", // slate-900 - base dark
          "#1e293b", // slate-800 - subtle dark
          "#334155", // slate-700 - muted
          "#475569", // slate-600 - soft gray
          "#64748b", // slate-500 - gentle gray
          "#1e293b", // slate-800 - back to dark
          "#0f172a"  // slate-900 - deep dark
        ]}
        gradientStops={[20, 35, 50, 65, 80, 90, 100]}
        animationSpeed={0.015}
        breathingRange={3}
        topOffset={10}
      />

      <main className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            className="mb-6 text-slate-400 text-sm md:text-base font-light tracking-widest"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ex-Research Intern @ IIM Ahmedabad | AI/ML Enthusiast | Python Developer
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-thin mb-8 leading-tight tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.span
              className="block bg-gradient-to-br from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent"
              style={{
                background: "linear-gradient(135deg, #a78bfa 0%, #c084fc 30%, #818cf8 70%, #a78bfa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textShadow: "0 0 30px rgba(167, 139, 250, 0.3)",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              Shrushti Raut
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-lg text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Hey! I'm Shrushti, a third-year AI & ML student who loves turning messy data into insights that actually matter. From building predictive models to crafting dashboards and diving into NLP, I'm all about solving real-world problems with data and having fun while doing it.
          </motion.p>

          {/* Blog Highlight Popup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.0,
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="mb-10"
          >
            <div 
              onClick={onBlogClick}
              className="liquid-glass-button group cursor-pointer"
            >
              <div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse"></div>
              <span>Read my new blog: How I landed IIM Ahm internship</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.2,
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="flex justify-center items-center gap-6 mb-10"
          >
            <a 
              href="https://github.com/shrushti425" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="liquid-glass-social-button"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/shrushti-raut4" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="liquid-glass-social-button"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://x.com/codewithsushi" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="liquid-glass-social-button"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a 
              href="mailto:smraut3434@gmail.com" 
              className="liquid-glass-social-button"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>

          <motion.a 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.4,
              duration: 0.6,
              ease: "easeInOut",
            }}
            href="#contact" 
            className="liquid-glass-primary-button group inline-flex items-center justify-center"
          >
            Let's Connect 
            <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>
      </main>
    </div>
  )
}