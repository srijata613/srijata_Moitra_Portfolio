import { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random positioning and properties
      const x = Math.random() * window.innerWidth;
      const delay = Math.random() * 8;
      const size = Math.random() * 3 + 1;
      const opacity = Math.random() * 0.5 + 0.2;
      
      particle.style.left = `${x}px`;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.animationDelay = `${delay}s`;
      particle.style.opacity = `${opacity}`;
      
      // Random color between primary and accent
      const colors = ['var(--primary)', 'var(--accent)', 'var(--star-primary)'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      particle.style.background = `hsl(${randomColor})`;
      
      container.appendChild(particle);
      
      // Remove particle after animation
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 8000);
    };

    // Create initial particles
    for (let i = 0; i < 50; i++) {
      setTimeout(() => createParticle(), i * 100);
    }

    // Continue creating particles
    const interval = setInterval(createParticle, 300);

    return () => {
      clearInterval(interval);
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return <div ref={containerRef} className="particles" />;
};

export default ParticleBackground;