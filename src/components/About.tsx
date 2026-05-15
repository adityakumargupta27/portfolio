import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section id="about" style={{ position: 'relative', overflow: 'hidden', padding: '10vh 0' }}>
      {/* Purple Glow Background similar to screenshot */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '-10%',
        width: '50vw',
        height: '50vw',
        background: 'radial-gradient(circle, rgba(138,43,226,0.15) 0%, rgba(0,0,0,0) 70%)',
        filter: 'blur(80px)',
        zIndex: -1,
        pointerEvents: 'none'
      }} />

      <div className="container" ref={ref}>
        {/* NEW ABOUT ME SECTION (Replica) */}
        <motion.div 
          className="about-replica-container"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.2fr',
            gap: '4vw',
            marginBottom: '15vh',
            alignItems: 'center'
          }}
        >
          {/* Left Side: Image */}
          <div style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '1 / 1', // Approximate aspect ratio from screenshot
            borderRadius: '16px',
            overflow: 'hidden',
            border: '2px solid rgba(255, 255, 255, 0.8)', // Thick white border from screenshot
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
          }}>
            <img 
              src="/profile.jpg" // User can replace with their actual image
              alt="Profile" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'grayscale(100%)' // The image in the screenshot is black and white
              }}
              onError={(e) => {
                // Fallback if image doesn't exist yet
                e.currentTarget.src = "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=1000";
              }}
            />
          </div>

          {/* Right Side: Text & Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <h2 style={{ 
              fontSize: 'clamp(3rem, 6vw, 4.5rem)', 
              color: 'var(--fg)',
              margin: 0
            }}>
              About Me
            </h2>

            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1.5rem',
              color: 'var(--muted)', // Light gray text
              fontSize: '1.1rem',
              lineHeight: 1.7,
              fontWeight: 400
            }}>
              <p>
                Hi, I'm a student developer who likes breaking things just to figure out how to fix them usually with JavaScript and snacks. I build web apps that try their best to work on the first try (no promises though).
              </p>
              <p>
                React and Tailwind are my daily tools, and I'm currently exploring the mysterious land of backend development where bugs go to multiply. Full-stack dreams, coffee-fueled nights, and lots of console.log.
              </p>
              <p>
                When I'm not coding, I'm either daydreaming startup ideas, lurking on GitHub, or explaining to my friends why 'it works on my machine' is totally valid. I love creating stuff that's fun, functional, and maybe a little chaotic.
              </p>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.8rem 1.5rem',
              border: '1px solid var(--border)',
              borderRadius: '30px',
              width: 'fit-content',
              marginTop: '1rem',
              backgroundColor: 'rgba(255, 255, 255, 0.03)'
            }}>
              <MapPin size={20} color="#a1a1aa" />
              <span style={{ 
                color: 'var(--fg)',
                fontWeight: 500,
                fontSize: '1rem'
              }}>
                Bhubaneswar, Odisha
              </span>
            </div>
          </div>
        </motion.div>


        {/* ORIGINAL VISION SECTION */}
        <motion.div 
          className="glass-card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5vw' }}>
            <div>
              <div className="mono" style={{ color: 'var(--accent)', marginBottom: '2rem' }}>Philosophy</div>
              <h2 style={{ fontSize: '4.5rem', marginBottom: '2rem' }}>The Vision<span style={{ color: 'var(--accent)' }}>.</span></h2>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <p style={{ fontSize: '1.4rem', fontWeight: 300, color: 'var(--fg)', lineHeight: 1.5, marginBottom: '2rem' }}>
                I build production systems — not demos. My work includes a Telegram-native LLM career bot (WingmanAI), a shipped Android app (Starvis), and a student portal used by 500+ people.
              </p>
              <p style={{ fontSize: '1.1rem', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.6, marginBottom: '2rem' }}>
                I think in systems. When I build something, I own the full stack: schema design, API contracts, auth, deployment, monitoring. I use Docker, PM2, Fly.io, and Vercel in production.
              </p>
              <motion.a 
                href="https://codeforces.com/profile/notgodfather"
                target="_blank"
                rel="noopener noreferrer"
                className="mono" 
                style={{ 
                  color: 'var(--accent)', 
                  borderBottom: '1px solid var(--accent)', 
                  width: 'fit-content', 
                  paddingBottom: '2px',
                  textDecoration: 'none',
                  display: 'block'
                }}
                whileHover={{ x: 5, color: 'var(--fg)', borderBottomColor: 'var(--fg)' }}
              >
                Codeforces Specialist (1514) →
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-replica-container {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          #about .glass-card > div { 
            grid-template-columns: 1fr !important; 
          }
        }
      `}</style>
    </section>
  );
};

export default About;
