import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaTelegramPlane, FaTwitter } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Contact = () => {
  return (
    <section id="contact" style={{ position: 'relative', overflow: 'hidden', padding: '10vh 5vw', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Background Purple Glow */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '10%',
        width: '50vw',
        height: '50vw',
        background: 'radial-gradient(circle, rgba(138,43,226,0.15) 0%, rgba(0,0,0,0) 70%)',
        filter: 'blur(80px)',
        zIndex: -1,
        pointerEvents: 'none'
      }} />

      <h2 
        style={{ 
          fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
          fontWeight: 600,
          marginBottom: '5rem',
          textAlign: 'center'
        }}
      >
        Let's Connect<span style={{ color: 'var(--accent)' }}>.</span>
      </h2>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '4rem',
        width: '100%',
        maxWidth: '1200px'
      }}>
        {/* Left Side: Form */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            background: 'var(--glass)',
            border: '1px solid var(--border)',
            borderRadius: '12px',
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            backdropFilter: 'blur(20px)'
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <input 
              type="text" 
              placeholder="Your Name" 
              className="contact-input"
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="contact-input"
            />
          </div>
          
          <select className="contact-input" defaultValue="general">
            <option value="general" style={{ background: '#111' }}>General Inquiries</option>
            <option value="freelance" style={{ background: '#111' }}>Freelance Work</option>
            <option value="fulltime" style={{ background: '#111' }}>Full-time Opportunity</option>
          </select>

          <textarea 
            placeholder="Your Message" 
            rows={5}
            className="contact-input"
            style={{ resize: 'none' }}
          />

          <button 
            style={{
              background: 'var(--fg)',
              color: 'var(--bg)',
              border: 'none',
              borderRadius: '8px',
              padding: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              marginTop: '1rem',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            <Send size={18} />
            Send Message
          </button>
        </motion.div>

        {/* Right Side: Info & Socials */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '3rem', paddingTop: '1rem' }}
        >
          <div>
            <h3 className="mono-heading" style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Get In Touch</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ 
                  background: 'rgba(255, 255, 255, 0.05)', 
                  padding: '1rem', 
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Mail size={24} color="#a1a1aa" />
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--muted)', marginBottom: '0.25rem' }}>Email</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 500 }}>aarab.nishchal@gmail.com</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ 
                  background: 'rgba(255, 255, 255, 0.05)', 
                  padding: '1rem', 
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <MapPin size={24} color="#a1a1aa" />
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--muted)', marginBottom: '0.25rem' }}>Location</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 500 }}>Bhubaneswar, Odisha, India</div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '1rem' }}>
            <h3 className="mono-heading" style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Socials . . .</h3>
            <div style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <SocialIcon icon={<FaGithub size={20} />} href="https://github.com/notgodfather" color="#333" />
              <SocialIcon icon={<FaLinkedinIn size={20} />} href="https://linkedin.com/in/notgodfather" color="#0077b5" />
              <SocialIcon icon={<FaTelegramPlane size={20} />} href="https://t.me/notgodfather" color="#229ED9" />
              <SocialIcon icon={<FaTwitter size={20} />} href="https://twitter.com/notgodfather" color="#1DA1F2" />
              <SocialIcon icon={<SiLeetcode size={20} />} href="https://leetcode.com/u/mr_jerry_/" color="#ffa116" />
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .contact-input {
          background: transparent;
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 1rem 1.25rem;
          color: var(--fg);
          font-family: inherit;
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.2s;
          width: 100%;
        }

        .contact-input:focus {
          border-color: rgba(138, 43, 226, 0.6);
        }

        .contact-input::placeholder {
          color: var(--muted);
        }

        .mono-heading {
          font-family: 'Plus Jakarta Sans', sans-serif;
          color: var(--fg);
          letter-spacing: -0.02em;
        }

        @media (max-width: 768px) {
          .contact-input {
            grid-column: span 2;
          }
        }
      `}</style>
    </section>
  );
};

const SocialIcon = ({ icon, href, color }: { icon: React.ReactNode; href: string; color: string }) => {
  return (
    <motion.a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -5, scale: 1.1 }}
      style={{
        width: '45px',
        height: '45px',
        borderRadius: '50%',
        backgroundColor: color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        cursor: 'pointer',
        boxShadow: `0 4px 14px ${color}44`,
        textDecoration: 'none'
      }}
    >
      {icon}
    </motion.a>
  );
};

export default Contact;
