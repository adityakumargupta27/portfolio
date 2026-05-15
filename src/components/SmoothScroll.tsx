import { ReactLenis } from 'lenis/react';
import { ReactNode } from 'react';

export const SmoothScroll = ({ children }: { children: ReactNode }) => {
  return (
    <ReactLenis root options={{ 
      lerp: 0.15, // Increased lerp for snappier scrolling
      duration: 1.0, // Reduced duration for faster scrolling
      smoothWheel: true,
      wheelMultiplier: 1.2, // Multiply scroll speed
    }}>
      {children}
    </ReactLenis>
  );
};
