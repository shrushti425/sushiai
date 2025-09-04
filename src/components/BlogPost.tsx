import React from 'react';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';

interface BlogPostProps {
  onBack: () => void;
}

export default function BlogPost({ onBack }: BlogPostProps) {
  return (
    <div className="min-h-screen bg-slate-900 text-white pt-20">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </button>

        {/* Blog Post Header */}
        <article className="glass-card p-8 rounded-xl">
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-violet-400 mb-4 glow-text">
              The Unexpected Email That Changed My Life
            </h1>
            
            <div className="flex items-center gap-6 text-slate-400 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>January 15, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>5 min read</span>
              </div>
            </div>
          </div>

          {/* Blog Content */}
          <div className="prose prose-invert max-w-none">
            <div className="text-slate-300 leading-relaxed space-y-6">
              <p className="text-lg text-slate-200 font-medium">
                Sometimes life takes unexpected turns that lead you exactly where you need to be. This is the story of how one email changed my entire perspective on data science and set me on a path I never imagined.
              </p>

              <p>
                It was a Tuesday morning in my second year when I received an email that would reshape my entire academic and professional journey. The subject line was simple: "Research Internship Opportunity - IIM Ahmedabad." At first, I thought it might be spam or a mistake. After all, I was just a student studying AI & ML, not someone with extensive research experience.
              </p>

              <p>
                But curiosity got the better of me. I opened the email and discovered an opportunity to work on a data analytics project that would involve real business problems, actual datasets, and the chance to see how data science translates into business impact. The catch? I had to apply within 48 hours, and the competition was fierce.
              </p>

              <div className="bg-slate-800/50 border-l-4 border-violet-400 p-6 rounded-r-lg my-8">
                <p className="text-violet-300 italic">
                  "The best opportunities often come disguised as challenges that seem just beyond our reach."
                </p>
              </div>

              <p>
                I spent the next two days crafting what I thought was the most important application of my life. I highlighted every Python project I'd worked on, every SQL query I'd written, and every data visualization I'd created. But more importantly, I wrote about my passion for turning messy, complex data into clear, actionable insights.
              </p>

              <p>
                Three weeks later, I got the call. I was selected for the research internship at IIM Ahmedabad. What followed were some of the most challenging and rewarding months of my academic journey. I worked with real business data, collaborated with professors and industry experts, and learned that data science isn't just about algorithms and models—it's about storytelling, problem-solving, and creating value.
              </p>

              <p>
                That experience taught me that data has the power to transform not just businesses, but lives. It showed me that behind every dataset is a story waiting to be told, a problem waiting to be solved, and an opportunity to make a real difference.
              </p>

              <p>
                Today, as I continue my journey in AI & ML, I carry with me the lessons from that unexpected email. It reminded me that sometimes the best opportunities come when we least expect them, and that being ready to embrace the unknown can lead to extraordinary growth.
              </p>

              <div className="bg-gradient-to-r from-violet-900/30 to-purple-900/30 p-6 rounded-lg border border-violet-400/30 mt-8">
                <h3 className="text-xl font-semibold text-violet-400 mb-3">Key Takeaways</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• Always be open to unexpected opportunities</li>
                  <li>• Data science is as much about storytelling as it is about technical skills</li>
                  <li>• Real-world experience is invaluable for understanding business impact</li>
                  <li>• Sometimes the best growth happens outside your comfort zone</li>
                </ul>
              </div>

              <p className="text-slate-400 text-sm mt-8 pt-6 border-t border-slate-700">
                This is just the beginning of my journey. Stay tuned for more stories about data, insights, and the adventures of turning numbers into narratives.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}