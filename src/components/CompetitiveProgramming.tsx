import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { SiCodeforces, SiLeetcode, SiCodechef, SiGithub } from 'react-icons/si';

const CompetitiveProgramming = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  const stats = [
    { 
      label: 'Codeforces', 
      value: '1514', 
      sub: 'Specialist', 
      icon: <SiCodeforces size={22} />,
      href: 'https://codeforces.com/profile/notgodfather',
      color: '#1f8acb'
    },
    { 
      label: 'LeetCode', 
      value: '1516', 
      sub: 'Top ~25%', 
      icon: <SiLeetcode size={22} />,
      href: 'https://leetcode.com/u/mr_jerry_/',
      color: '#ffa116'
    },
    { 
      label: 'CodeChef', 
      value: '1438', 
      sub: '2-Star', 
      icon: <SiCodechef size={22} />,
      href: 'https://www.codechef.com/users/notgodfather15',
      color: '#5b4638'
    },
    { 
      label: 'GitHub', 
      value: '100+', 
      sub: 'Repositories', 
      icon: <SiGithub size={22} />,
      href: 'https://github.com/notgodfather',
      color: '#181717'
    },
  ];

  return (
    <section id="cp" ref={ref} style={{ padding: '8vh 0' }}>
      <div className="mono" style={{ color: 'var(--muted)', marginBottom: '3rem', letterSpacing: '0.15em', fontSize: '0.8rem', textAlign: 'center' }}>
        STATISTICS & COMPETITIVE PROGRAMMING
      </div>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
        gap: '1.5rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {stats.map((stat, i) => (
          <motion.a
            href={stat.href}
            target="_blank"
            rel="noopener noreferrer"
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.33, 1, 0.68, 1] }}
            style={{
              textDecoration: 'none',
              padding: '1.5rem',
              background: 'rgba(255, 255, 255, 0.02)',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.2rem',
              position: 'relative',
              overflow: 'hidden',
              textAlign: 'center',
              aspectRatio: '1 / 1', // Make it square
              transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
            }}
            whileHover={{ 
              y: -8, 
              background: 'rgba(255, 255, 255, 0.04)',
              borderColor: 'rgba(255, 255, 255, 0.1)',
              boxShadow: '0 15px 30px rgba(0,0,0,0.2)'
            }}
          >
            {/* White Icon Container */}
            <div style={{ 
              width: '40px',
              height: '40px',
              backgroundColor: 'white',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1,
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
              transition: 'transform 0.4s ease'
            }} className="stat-icon-wrapper">
              <div style={{ color: stat.color, display: 'flex' }}>
                {stat.icon}
              </div>
            </div>
            
            <div style={{ zIndex: 1, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <div className="mono" style={{ color: 'var(--muted)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                {stat.label}
              </div>
              
              <div style={{ 
                fontSize: '2.8rem', 
                fontFamily: 'Instrument Serif', 
                color: 'var(--fg)', 
                lineHeight: 1,
                letterSpacing: '-0.02em',
              }}>
                {stat.value}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                <div style={{ 
                  width: '4px', 
                  height: '4px', 
                  borderRadius: '50%', 
                  backgroundColor: stat.color,
                  boxShadow: `0 0 6px ${stat.color}`
                }} />
                <div className="mono" style={{ color: 'var(--muted)', fontSize: '0.75rem' }}>{stat.sub}</div>
              </div>
            </div>

            {/* Subtle Inner Glow */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: `radial-gradient(circle at center, ${stat.color}08 0%, transparent 70%)`,
              opacity: 0,
              transition: 'opacity 0.4s ease',
              zIndex: 0
            }} className="hover-glow" />
          </motion.a>
        ))}
      </div>
      <style>{`
        a:hover .hover-glow {
          opacity: 1 !important;
        }
        a:hover .stat-icon-wrapper {
          transform: scale(1.1) rotate(5deg);
        }
        @media (max-width: 768px) {
          #cp > div {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default CompetitiveProgramming;

