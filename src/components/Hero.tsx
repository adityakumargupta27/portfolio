import { motion } from 'framer-motion';
import { WordReveal } from './WordReveal';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: [0.33, 1, 0.68, 1] },
    },
  };

  return (
    <section id="hero" style={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ width: '100%' }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div style={{ fontSize: 'clamp(4rem, 8vw, 6rem)', marginBottom: '1rem', lineHeight: 1.2 }} className="cursive">
            <WordReveal text="Aditya Kumar Gupta" delay={0.2} />
          </div>

          <motion.div variants={itemVariants} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '6rem', flexWrap: 'wrap', gap: '2rem' }}>
            <p style={{ maxWidth: '500px', fontSize: '1.2rem', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.6 }}>
              Full-stack engineer building AI-native systems. Crafting digital experiences with precision and purpose. Focused on performance, architecture, and impact.
            </p>
            <div className="mono" style={{ textAlign: 'right' }}>
              <motion.div 
                animate={{ y: [0, 10, 0] }} 
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                style={{ color: 'var(--accent)', marginBottom: '1rem' }}
              >
                ↓ SCROLL TO EXPLORE
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
