import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [clicks, setClicks] = useState<{ id: number; x: number; y: number }[]>([]);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const handleClick = (e: MouseEvent) => {
      const newClick = { id: Date.now(), x: e.clientX, y: e.clientY };
      setClicks(prev => [...prev, newClick]);
      setTimeout(() => {
        setClicks(prev => prev.filter(c => c.id !== newClick.id));
      }, 600);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleClick);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleClick);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div style={{ pointerEvents: 'none', position: 'fixed', top: 0, left: 0, zIndex: 999999 }}>
      {/* Click Animations */}
      <AnimatePresence>
        {clicks.map(click => (
          <motion.div
            key={click.id}
            initial={{ scale: 0.5, opacity: 1 }}
            animate={{ scale: 2.5, opacity: 0 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              left: click.x,
              top: click.y,
              width: 20,
              height: 20,
              borderRadius: '50%',
              border: '2px solid #ffffff',
              translateX: '-50%',
              translateY: '-50%',
            }}
          />
        ))}
      </AnimatePresence>

      {/* Instant Gaming Pointer */}
      <div
        style={{
          position: 'fixed',
          left: pos.x,
          top: pos.y,
          transform: `translate3d(-2px, -2px, 0) rotate(${isHovering ? '-15deg' : '0deg'})`,
          transition: 'transform 0.15s ease-out',
          zIndex: 999999,
        }}
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          style={{ 
            filter: isHovering ? 'drop-shadow(0 0 8px rgba(255,255,255,0.8))' : 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))',
            transition: 'filter 0.2s'
          }}
        >
          <path 
            d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" 
            fill={isHovering ? '#fff' : '#000'} 
            stroke="#fff" 
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path 
            d="M10 10L14 14" 
            stroke={isHovering ? '#000' : 'rgba(255,255,255,0.4)'} 
            strokeWidth="1.5" 
            strokeLinecap="round" 
          />
        </svg>
      </div>
    </div>
  );
};

export default CustomCursor;

