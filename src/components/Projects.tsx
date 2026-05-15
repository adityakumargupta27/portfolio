const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-label reveal">Projects</div>

        {/* Featured Project: WingmanAI */}
        <div className="reveal" style={{ marginBottom: '24px' }}>
          <div className="project-card featured" style={{
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-default)',
            padding: '48px',
            borderRadius: '4px',
            transition: 'border-color 200ms ease, background-color 200ms ease',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div className="highlight-border"></div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
              <h3 style={{ fontSize: '2rem', fontStyle: 'italic', color: 'var(--text-primary)' }}>
                01 — WingmanAI
              </h3>
              <div className="mono" style={{ fontSize: '0.68rem', color: 'var(--text-tertiary)' }}>
                Jan 2026 → Present
              </div>
            </div>

            <div className="mono" style={{ fontSize: '0.65rem', color: 'var(--signal-green)', marginBottom: '32px' }}>
              <span className="pulse-dot"></span>live in production
            </div>

            <div className="grid-12">
              <div style={{ gridColumn: 'span 7' }}>
                <p style={{ fontFamily: 'DM Sans', fontWeight: 300, fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: '32px' }}>
                  A Telegram-native career intelligence system powered by OpenAI and Claude. Containerised with Docker, deployed on Fly.io, with SQLite persistence and PM2 process management.<br /><br />
                  The core is a WMDR (Weighted Multi-Dimensional Ranking) engine that scores job postings across 7 dimensions — Skills, Experience, Location, Freshness — producing a real-time Fit Score for every posting.<br /><br />
                  An autonomous background scout scrapes 100+ job boards every 6 hours. Matches above 85% are pushed directly to users via Telegram without any manual trigger.
                </p>
              </div>

              <div style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {[
                  { title: 'WMDR ENGINE', desc: 'Scores postings across Skills, Experience, Location, Freshness, Salary, Role Level, Domain — instant Fit Score output.' },
                  { title: 'SCM ENGINE', desc: 'Rewrites resume bullet points to semantically align with a target JD. Exports ATS-optimised PDFs and Word documents.' },
                  { title: 'AUTO SCOUT', desc: 'Scrapes Greenhouse, Lever, LinkedIn, Internshala every 6h. Pushes >85% matches to Telegram. Zero manual triggers.' },
                ].map((feature) => (
                  <div key={feature.title}>
                    <div className="mono" style={{ fontSize: '0.65rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', marginBottom: '8px' }}>
                      {feature.title}
                    </div>
                    <div style={{ fontFamily: 'DM Sans', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      {feature.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: '48px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['Node.js', 'JavaScript', 'OpenAI API', 'Claude API', 'Playwright', 'SQLite', 'Telegram Bot API', 'Docker', 'Fly.io'].map((tech) => (
                <span key={tech} className="tech-pill mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Secondary Projects Grid */}
        <div className="grid-12" style={{ marginTop: '24px' }}>
          {/* Starvis */}
          <div className="reveal stagger-child" style={{ gridColumn: 'span 4' }}>
            <div className="project-card secondary">
              <div className="highlight-border"></div>
              <div className="card-header">
                <h3>02 — Starvis</h3>
                <span className="mono date">Jan → Apr 2026</span>
              </div>
              <div className="mono status" style={{ color: 'var(--signal-green)' }}>
                <span className="pulse-dot"></span>shipped · Android APK
              </div>
              <p>Full-stack productivity app: assignment tracker, interactive calendar, to-do manager, study analytics dashboard. Ships as a native Android APK via Capacitor — full feature parity with the web version.</p>
              <ul className="highlights">
                <li>→ Gemini AI floating assistant</li>
                <li>→ Google OAuth + Email/Password auth</li>
                <li>→ Native Android APK via Capacitor</li>
              </ul>
              <div className="tech-stack">
                React 18 · TypeScript · Firebase · Gemini AI · Capacitor · Tailwind · Vite
              </div>
            </div>
          </div>

          {/* Prashikshana */}
          <div className="reveal stagger-child" style={{ gridColumn: 'span 4' }}>
            <div className="project-card secondary">
              <div className="highlight-border"></div>
              <div className="card-header">
                <h3>03 — Prashikshana</h3>
                <span className="mono date">Aug → Nov 2025</span>
              </div>
              <div className="mono status" style={{ color: 'var(--signal-amber)' }}>
                <span className="pulse-dot" style={{ backgroundColor: 'var(--signal-amber)' }}></span>SIH 2025 · Internal Round Selected
              </div>
              <p>Web platform for institutional training and academic support, built for Smart India Hackathon 2025 in a cross-functional team. Owned backend logic, data flow design, and all third-party REST API integrations.</p>
              <div className="tech-stack" style={{ marginTop: 'auto' }}>
                HTML · CSS · JavaScript · REST APIs
              </div>
            </div>
          </div>

          {/* BMS Connect */}
          <div className="reveal stagger-child" style={{ gridColumn: 'span 4' }}>
            <div className="project-card secondary">
              <div className="highlight-border"></div>
              <div className="card-header">
                <h3>04 — BMS Connect</h3>
                <span className="mono date">Oct → Dec 2025</span>
              </div>
              <div className="mono status" style={{ color: 'var(--signal-green)' }}>
                <span className="pulse-dot"></span>500+ active users
              </div>
              <p>Centralised portal for study materials and department resources across BMS College of Engineering. Fully responsive, desktop and mobile optimised. Adopted by 500+ students.</p>
              <div className="tech-stack" style={{ marginTop: 'auto' }}>
                HTML · CSS · JavaScript
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .project-card {
          background-color: var(--bg-surface);
          border: 1px solid var(--border-default);
          border-radius: 4px;
          transition: border-color 200ms ease, background-color 200ms ease;
          position: relative;
        }
        
        .project-card.secondary {
          padding: 28px;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .project-card:hover {
          background-color: var(--bg-raised) !important;
          border-color: var(--border-strong) !important;
        }

        .project-card:hover .highlight-border {
          opacity: 1;
        }

        .project-card:hover .tech-pill {
          border-color: var(--border-default);
          color: var(--text-secondary);
        }

        .highlight-border {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(74, 158, 255, 0.4), transparent);
          opacity: 0;
          transition: opacity 200ms ease;
        }

        .tech-pill {
          font-size: 0.68rem;
          padding: 3px 10px;
          border: 1px solid var(--border-subtle);
          color: var(--text-tertiary);
          border-radius: 100px;
          transition: all 200ms ease;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 8px;
        }

        .card-header h3 {
          font-size: 1.4rem;
          font-style: italic;
          color: var(--text-primary);
        }

        .date {
          font-size: 0.6rem;
          color: var(--text-tertiary);
        }

        .status {
          font-size: 0.65rem;
          margin-bottom: 24px;
        }

        .project-card p {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 20px;
        }

        .highlights {
          padding: 0;
          margin-bottom: 24px;
        }

        .highlights li {
          font-family: 'Geist Mono', monospace;
          font-size: 0.78rem;
          color: var(--text-secondary);
          margin-bottom: 6px;
        }

        .tech-stack {
          font-family: 'Geist Mono', monospace;
          font-size: 0.68rem;
          color: var(--text-tertiary);
          margin-top: 16px;
        }

        @media (max-width: 768px) {
          .project-card.featured { padding: 24px; }
          .project-card.featured .grid-12 > div { grid-column: span 12 !important; }
        }
      `}</style>
    </section>
  );
};

export default Projects;
