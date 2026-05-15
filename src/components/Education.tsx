import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section id="education" ref={ref}>
      <div style={{ borderTop: '1px solid var(--border)', paddingTop: '4rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '5vw' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          >
            <div className="mono" style={{ color: 'var(--muted)', marginBottom: '1rem' }}>Education</div>
            <div style={{ fontSize: '1.2rem', color: 'var(--muted)' }}>2024 — 2028</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
          >
            <h3 style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>
              B.Tech in Computer Science<br />
              <span style={{ color: 'var(--muted)', fontSize: '2rem' }}>BMS College of Engineering</span>
            </h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '4rem' }}>
              <div>
                <div className="mono" style={{ color: 'var(--muted)' }}>CGPA</div>
                <div style={{ fontSize: '2rem', fontFamily: 'Instrument Serif' }}>8.23 / 10.0</div>
              </div>
              <div>
                <div className="mono" style={{ color: 'var(--muted)' }}>JEE Mains</div>
                <div style={{ fontSize: '2rem', fontFamily: 'Instrument Serif' }}>97.2 %ile</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
