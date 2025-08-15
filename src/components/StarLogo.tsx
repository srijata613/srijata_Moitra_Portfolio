import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const StarLogo = ({ size = 40, className = "" }: { size?: number; className?: string }) => {
  const [isTransformed, setIsTransformed] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransformed(prev => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      animate={{
        rotate: isTransformed ? 180 : 0,
      }}
      transition={{
        duration: 1.5,
        ease: "easeInOut"
      }}
    >
      {!isTransformed ? (
        // Star Shape
        <motion.svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="drop-shadow-[0_0_20px_hsl(var(--star-primary))]"
        >
          <motion.path
            d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"
            fill="hsl(var(--star-primary))"
            stroke="hsl(var(--star-secondary))"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut"
            }}
          />
        </motion.svg>
      ) : (
        // Letter S
        <motion.div
          className="w-full h-full flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            className="text-star-primary font-bold glow-star"
            style={{ fontSize: size * 0.6 }}
            initial={{ y: 10 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            S
          </motion.span>
        </motion.div>
      )}
    </motion.div>
  );
};

export default StarLogo;