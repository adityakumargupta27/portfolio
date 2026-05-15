const Footer = () => {
  return (
    <footer style={{
      padding: '4rem 0',
      borderTop: '1px solid var(--glass-border)',
      background: 'rgba(0,0,0,0.5)',
      backdropFilter: 'blur(10px)',
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'var(--muted)',
      }}>
        <div className="mono"></div>
        <div className="mono"></div>
      </div>
    </footer>
  );
};

export default Footer;
