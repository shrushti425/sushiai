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
            <h1 className="text-2xl md:text-3xl font-bold text-violet-400 mb-4 glow-text leading-tight">
              The Unexpected Reply That Changed My Life: How I Landed My Internship at IIM Ahmedabad
            </h1>
            
            <div className="flex items-center gap-6 text-slate-400 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>January 15, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>12 min read</span>
              </div>
            </div>
          </div>

          {/* Blog Content */}
          <div className="prose prose-invert max-w-none">
            <div className="text-slate-300 leading-relaxed space-y-6">
              <p className="text-lg text-slate-200 font-medium">
                Sometimes, one unexpected reply can change the entire course of your career. For me, that reply came from a professor at IIM Ahmedabad, the place every MBA aspirant dreams of. What started as a simple cold email soon turned into a life-changing 1-month On-Campus Research Internship at India's most prestigious management institute IIM Ahmedabad.
              </p>

              <p>
                Hi, I'm Shrushti, currently pursuing my B.Tech at MIT-WPU, Pune. Like many students, I've always aspired to pursue an MBA from a top institute, and IIM Ahmedabad has been my dream. When I saw a LinkedIn post of someone completing their internship at IIM-A, I felt inspired but also slightly intimidated, how could someone like me, still in undergrad, make it there?
              </p>

              <p>
                Being from a tier-3 college getting a research internship at IIMA in the second year felt almost impossible. But sometimes many things in life are about having the right mind-set, if I had never tried to get an internship I would've never got it in the first place. So I decided to give it a shot. After weeks of research, sending emails, and navigating countless rejections, I finally got that life-changing reply.
              </p>

              {/* Image 1 - Journey/Application Process */}
              <div className="my-8 text-center">
                <img 
                  src="/pic1.jpg" 
                  alt="Application journey and preparation" 
                  className="rounded-lg shadow-lg mx-auto max-w-full h-auto"
                />
              </div>

              <p>
                In this blog, I'll share my journey step by step, along with practical advice and detailed resources so you too can land a research internship at an IIM.
              </p>

              <h2 className="text-2xl font-bold text-violet-400 mt-8 mb-4">What's the STEP 0 before you start applying?</h2>
              
              <div className="bg-slate-800/50 border-l-4 border-violet-400 p-6 rounded-r-lg my-6">
                <p className="text-violet-300 font-semibold">"Find your area of interest."</p>
              </div>

              <p>
                Before reaching out to professors, I figured out where my interests lay. I've always been fascinated by a mix of analytics, technology and leadership, so I narrowed my choices to professors working on those areas. Since I am good with python and data, I already had an edge in the application process.
              </p>

              <p>
                Every IIM has professors across diverse areas. Before sending emails, shortlist 2–3 fields you genuinely care about. Here are some areas that you can explore: Economics, Finance & Accounting, Marketing, Operations, Analytics & IT, Strategy & Entrepreneurship, HR & Leadership, Public Policy & Ethics.
              </p>

              <p>
                I would say pick wisely, its not always what area of study interests you but it also matters if you have an expertise or at least basic knowledge of that field or related domains.
              </p>

              <h2 className="text-2xl font-bold text-violet-400 mt-8 mb-4">How to find the right professor?</h2>
              
              <p>
                For finding the right professor I would highly recommend you to go to the faculty and research page on the official website of that institution.
              </p>

              <p>
                Here's the link to the faculty page for IIM-Ahmedabad - <a href="https://www.iima.ac.in/faculty-research/faculty-directory" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300 underline">https://www.iima.ac.in/faculty-research/faculty-directory</a>
              </p>

              <p>
                Go through the page and find the professors working in your desired domain, make a list of their email IDs or other social media handles like LinkedIn or X. Once that is done, go through their research work as in what sort of papers they have published and what sort of projects they are working on.
              </p>

              <h2 className="text-2xl font-bold text-violet-400 mt-8 mb-4">Connecting with the professors</h2>
              
              <p>
                I started small, sending connection requests on LinkedIn and X, followed by emails. My strategy was consistency: I sent 15–20 personalised emails daily. Out of 30+ emails that I sent, I got 4 replies. The one that stood out was from Prof. Vishal Gupta, whose work blended AI + Leadership. It was the perfect match for me considering my interest in AI and management studies, so I immediately grabbed the opportunity.
              </p>

              <p>
                The second most important thing after finding out the professors is writing the perfect email and here's the real effort. Since we live in the AI era and we use ChatGPT for literally everything you can use it to draft emails for you yes, but writing the email yourself will be beneficial for your interviews too.
              </p>

              {/* Image 2 - Professor Reply */}
              <div className="my-8 text-center">
                <img 
                  src="/profreply.jpg" 
                  alt="Professor's reply email" 
                  className="rounded-lg shadow-lg mx-auto max-w-full h-auto"
                />
                <p className="text-sm text-slate-400 mt-2 italic">The life-changing reply from Prof. Vishal Gupta</p>
              </div>

              <div className="bg-gradient-to-r from-violet-900/30 to-purple-900/30 p-6 rounded-lg border border-violet-400/30 my-6">
                <h3 className="text-lg font-semibold text-violet-400 mb-3">Email Writing Tips:</h3>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• Write personalised emails (never copy-paste the same one)</li>
                  <li>• Go through every professor's research work and draft your mail accordingly</li>
                  <li>• Show genuine curiosity about their work</li>
                  <li>• Mention something specific from their papers/projects</li>
                  <li>• Avoid generic lines like "I'm hardworking and sincere" - they don't work</li>
                  <li>• Instead highlight your skills and what you have to offer</li>
                  <li>• Don't be discouraged if only 1 in 30 replies. You just need one yes.</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-violet-400 mt-8 mb-4">The selection process</h2>
              
              <p>
                My professor asked for my resume and later took a short Zoom interview. I was asked questions on how AI could be applied to leadership problems and how can I use my skills in the making of the AI Chatbot about which I have mentioned later in this article. After the resume submission and interview, I got a selection mail from my professor along with the further details and some documents that had to be submitted like an NOC from the university.
              </p>

              <p>
                On completing the entire process, the professor asked me to study different ways to optimize data for training models. An important thing to note is that selection varies from professor to professor and depending on what project you are assigned some only ask for a resume so make sure your resume is well crafted, some may assign a mini-project/test while others may schedule an interview. Prepare in advance. Read about their field and think of how your skills can contribute.
              </p>

              <h2 className="text-2xl font-bold text-violet-400 mt-8 mb-4">Life at IIM Ahmedabad</h2>
              
              <p>
                I had the privilege of staying on IIM-A's new campus dorm and the whole experience was magical right from the fancy dorm rooms to the unforgettable food experience at various cafes and food places on campus and I was fascinated to see how well planned the campus is because name one thing and it was there on the campus.
              </p>

              <p>
                I spent most of my working hours (typically 5-6 hours daily) in the Vikram Sarabhai Library one of the most resourceful and beautiful libraries I've seen. The campus, spread over 100 acres of greenery (filled with loads of squirrels), was inspiring in itself. The staff, students and literally everyone on campus was super helpful and understanding.
              </p>

              <p>
                Beyond work, I interacted with IIM students, learning about CV building, MBA prep, and entrepreneurship. It wasn't just an internship, it was a glimpse into the world I aspire to enter one day. An internship at IIM is not just about research or adding a fancy tag to my resume but its about experiencing the campus culture, networking with some of the brightest students and getting exposure that sets your profile apart.
              </p>

              {/* Image 3 - Campus Life/Experience */}
              <div className="my-8 text-center">
                <img 
                  src="/pic3.jpg" 
                  alt="Life at IIM Ahmedabad campus" 
                  className="rounded-lg shadow-lg mx-auto max-w-full h-auto"
                />
                <p className="text-sm text-slate-400 mt-2 italic">Life at IIM Ahmedabad - Campus experience</p>
              </div>

              <h2 className="text-2xl font-bold text-violet-400 mt-8 mb-4">My Work During the Internship</h2>
              
              <p>
                During my time here I worked under Prof. Dr Vishal Gupta who is an associate professor in Leadership and Organisational behaviour department at IIMA and the creator of the globally top-rated Coursera course on Leadership Skills. Prof. Gupta is working on an AI-driven Leadership Chatbot project named LEAP-AI, designed to foster resilience, enable self-discovery, cultivate value-driven leadership rooted in Indian ethos. The bot was trained on his 40 years of research + renowned leadership articles.
              </p>

              <p>
                My job was to basically build the brain of this AI. Sounds fancy, right? In reality, it meant turning complex research into bite-sized coaching prompts, blending insights from decades of leadership studies with wisdom from ancient Indian texts like the Bhagavad Gita and Upanishads, and curating smart, human-like dialogues that actually felt personal.
              </p>

              <p>
                Every word I wrote, every script I shaped, was meant to make the AI feel like a 24/7 mentor, ready to guide users through real-life challenges. The fun part was this wasn't just tech work. It was a mix of psychology, leadership, and a dash of Indian philosophy. The AI had to feel human, thoughtful, and practical all at once. It was a time-consuming task but I loved every bit of it. Apart from that my professor was really supportive and guided me wherever needed.
              </p>

              <p>
                One thing to note is, not every project will be technical. Some interns work on case studies, while some conduct background research, analyse dataset and assist in writing papers. One of my fellow interns was asked to design an end to end teaching and visualisation software for the professor. Your role depends entirely on the professor and project availability.
              </p>

              <h2 className="text-2xl font-bold text-violet-400 mt-8 mb-4">Who Should Apply?</h2>
              
              <p>
                If you're an MBA aspirant, someone curious about management, leadership, or economics, a student who wants real exposure at a top B-school or simply someone excited to push their boundaries and work on multidisciplinary projects…then this internship is for you.
              </p>

              <h2 className="text-2xl font-bold text-violet-400 mt-8 mb-4">My Biggest Takeaway</h2>
              
              <p>
                That single unexpected reply from a professor changed my life. If I had stopped after the first 10 unanswered emails, I wouldn't have made it here. If you dream of interning at an IIM research, reach out, stay consistent and most importantly, don't give up.
              </p>

              <div className="bg-slate-800/50 border-l-4 border-violet-400 p-6 rounded-r-lg my-8">
                <p className="text-violet-300 font-semibold text-lg">
                  Remember: You just need one professor to say yes and anyways what is the harm in applying? After all an IIM Internship will not be anything less than a profile booster!
                </p>
              </div>


            </div>
          </div>
        </article>
      </div>
    </div>
  );
}