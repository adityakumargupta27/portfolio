import Magnetic from './Magnetic';

const Navbar = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav style={{
      position: 'fixed',
      top: '2rem',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
      width: 'max-content',
      padding: '0.5rem 1.5rem',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)',
      borderRadius: '100px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
    }}>
      <div style={{ display: 'flex', gap: '1rem' }}>
        {['About', 'Work', 'Contact'].map((item) => (
          <Magnetic key={item}>
            <a 
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleScroll(e, item.toLowerCase())}
              className="mono"
              style={{ 
                fontSize: '0.7rem', 
                color: 'var(--muted)', 
                padding: '8px 12px',
                display: 'block',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--fg)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--muted)'}
            >
              {item}
            </a>
          </Magnetic>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
