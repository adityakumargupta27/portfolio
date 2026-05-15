import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import CompetitiveProgramming from './components/CompetitiveProgramming';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { SmoothScroll } from './components/SmoothScroll';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

function App() {
  const { scrollY } = useScroll();
  
  // Smooth parallax for the background
  const bgY = useTransform(scrollY, [0, 5000], [0, 500]);
  const bgSpringY = useSpring(bgY, { stiffness: 100, damping: 30, mass: 1 });

  return (
    <SmoothScroll>
      <div className="app">
        {/* Parallax Revolving Background. Restored Earth Background */}
        <motion.div 
          className="black-hole-bg" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=2048')",
            y: bgSpringY
          }} 
        />
        <div className="bg-overlay" />
        
        <CustomCursor />
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <HorizontalProjects />
          
          <div className="container" style={{ paddingBottom: '10vh', position: 'relative', zIndex: 10 }}>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-20%" }}
              className="glass-card" 
              style={{ marginBottom: '10vh' }}
            >
              <CompetitiveProgramming />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-20%" }}
              className="glass-card" 
              style={{ marginBottom: '10vh' }}
            >
              <Education />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-20%" }}
              className="glass-card"
            >
              <Contact />
            </motion.div>
          </div>
        </main>
        
        <Footer />
      </div>

      <style>{`
        @keyframes revolve {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .black-hole-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-size: cover;
          background-position: center;
          transform: scale(1.5);
          animation: revolve 240s linear infinite;
          z-index: -3;
          opacity: 0.7;
          pointer-events: none;
        }

        .bg-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: radial-gradient(circle at center, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.95) 100%);
          z-index: -2;
          pointer-events: none;
        }
      `}</style>
    </SmoothScroll>
  );
}

const HorizontalProjects = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);
  const springX = useSpring(x, { stiffness: 100, damping: 30, mass: 1 });

  return (
    <section id="work" ref={targetRef} style={{ height: "400vh", position: "relative" }}>
      <div className="sticky-container" style={{ position: "sticky", top: 0, height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", overflow: "hidden" }}>
        
        <div className="container" style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--fg)' }}>My Projects<span style={{ color: 'var(--accent)' }}>.</span></h2>
        </div>

        <motion.div style={{ x: springX, paddingLeft: '5vw', display: 'flex', width: 'max-content' }} className="horizontal-scroll-container">
          <ProjectSlide 
            title="WingmanAI" 
            desc="Career Intelligence Engine built to streamline job search and evaluation pipelines with automated ATS resume generation, scoring, and portfolio extraction." 
            tags={['Node.js', 'AI', 'SQLite', 'React']}
            githubUrl="https://github.com/aditya/wingman"
            demoUrl="https://wingman.demo.com"
          />
          <ProjectSlide 
            title="Starvis" 
            desc="A complete productivity ecosystem offering task management, focused workspaces, and integrations tailored for students and professionals." 
            tags={['Firebase', 'Android', 'Java']}
            githubUrl="https://github.com/aditya/starvis"
            demoUrl="https://starvis.demo.com"
          />
          <ProjectSlide 
            title="Prashikshana" 
            desc="Institutional platform designed for SIH 2025. It centralizes educational resources, tracking, and management for academic institutions." 
            tags={['React', 'Node.js', 'MongoDB']}
            githubUrl="https://github.com/aditya/prashikshana"
            demoUrl="https://prashikshana.demo.com"
          />
          <ProjectSlide 
            title="BMS Connect" 
            desc="A dedicated student portal used by 500+ users. Features real-time announcements, resource sharing, and community forums." 
            tags={['Next.js', 'Tailwind', 'PostgreSQL']}
            githubUrl="https://github.com/aditya/bms-connect"
            demoUrl="https://bms.demo.com"
          />
        </motion.div>

      </div>
    </section>
  );
};

const ProjectSlide = ({ title, desc, tags, githubUrl, demoUrl }: any) => {
  return (
    <motion.div 
      className="project-slide" 
      style={{ 
        width: 'clamp(320px, 35vw, 450px)', 
        height: '55vh', 
        marginRight: '3vw', 
        display: 'flex', 
        alignItems: 'center' 
      }}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div style={{ 
        padding: '2.5rem', 
        width: '100%', 
        height: '100%', 
        background: 'var(--glass)', 
        border: '1px solid var(--border)',
        borderRadius: '16px',
        display: 'flex',
        flexDirection: 'column',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)'
      }}>
        
        <h3 style={{ 
          fontSize: '1.8rem', 
          color: '#ffffff',
          marginBottom: '1rem',
        }}>
          {title}
        </h3>
        
        <p style={{ 
          fontSize: '0.95rem', 
          color: 'var(--muted)', 
          lineHeight: 1.6,
          marginBottom: '2rem',
          flexGrow: 1
        }}>
          {desc}
        </p>

        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '0.5rem',
          marginBottom: '2rem'
        }}>
          {tags.map((tag: string) => (
            <span key={tag} className="mono" style={{
              padding: '0.4rem 0.8rem',
              border: '1px solid var(--border)',
              borderRadius: '6px',
              fontSize: '0.75rem',
              color: 'var(--muted)',
              background: 'rgba(255,255,255,0.02)'
            }}>
              {tag}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
          <a 
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              padding: '0.75rem',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              color: 'var(--fg)',
              fontSize: '0.9rem',
              transition: 'background 0.2s',
              background: 'transparent'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
          >
            <FaGithub size={16} />
            Code
          </a>
          
          <a 
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              padding: '0.75rem',
              background: 'var(--fg)',
              color: 'var(--bg)',
              borderRadius: '8px',
              fontSize: '0.9rem',
              fontWeight: 500,
              transition: 'opacity 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            <ExternalLink size={16} />
            Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default App;
