import { motion } from 'framer-motion';

const skillsData = [
  {
    category: "FRONTEND",
    items: [
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", invert: true },
      { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "GSAP", icon: "https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg" },
      { name: "Framer Motion", icon: "https://pagepro.co/blog/wp-content/uploads/2020/03/framer-motion.png" },
      { name: "Sass", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" }
    ]
  },
  {
    category: "BACKEND",
    items: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
      { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" },
      { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", invert: true }
    ]
  },
  {
    category: "DATABASE",
    items: [
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
      { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg", invert: true }
    ]
  },
  {
    category: "TOOLS",
    items: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", invert: true }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Staggering the slide-up effect
    },
  },
};

const slideUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5, 
      ease: "easeOut" 
    } 
  }
};

const Skills = () => {
  return (
    <section id="skills" style={{ padding: '15vh 0' }}>
      <div className="container">
        <div className="mono" style={{ color: 'var(--muted)', marginBottom: '4rem' }}>My Stack</div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
          {skillsData.map((section) => (
            <div 
              key={section.category}
              style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr 2fr', 
                gap: '2rem',
                alignItems: 'start' 
              }}
              className="skills-row"
            >
              {/* Left Column: Title sliding up */}
              <motion.div
                variants={slideUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-10%" }} 
              >
                <h3 
                  style={{ 
                    fontSize: 'clamp(2.5rem, 4vw, 3rem)', 
                    textTransform: 'uppercase',
                    color: 'var(--muted)',
                    margin: 0,
                    lineHeight: 1,
                    letterSpacing: '-0.02em'
                  }}
                >
                  {section.category}
                </h3>
              </motion.div>

              {/* Right Column: Badges sliding up with stagger */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-10%" }}
                style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem 2rem', paddingTop: '0.5rem' }}
              >
                {section.items.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={slideUpVariants}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.8rem',
                      cursor: 'pointer',
                    }}
                  >
                    <div style={{
                      width: '40px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: item.invert ? 'white' : 'transparent',
                      borderRadius: item.invert ? '8px' : '0',
                      padding: item.invert ? '6px' : '0'
                    }}>
                      <img 
                        src={item.icon} 
                        alt={item.name} 
                        style={{ 
                          maxHeight: '40px',
                          maxWidth: '40px',
                          objectFit: 'contain'
                        }} 
                      />
                    </div>
                    <span style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--fg)' }}>
                      {item.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @media (max-width: 768px) {
          .skills-row {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
