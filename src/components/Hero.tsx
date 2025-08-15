import { motion } from 'framer-motion';
import { ChevronDown, Download } from 'lucide-react';
import { Button } from './ui/button';
import StarLogo from './StarLogo';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      {/* Background Gradient */}
      <div className="absolute inset-0 starfield-gradient" />
      
      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.div
          className="flex justify-center mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <StarLogo size={80} className="glow-star" />
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <span className="bg-cosmic-gradient bg-clip-text text-transparent">
            Hello, I am Srijata
          </span>{' '}
          <span className="text-foreground"> A Mobile App Developer</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-muted-foreground mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          Full-Stack Engineer
        </motion.p>

        <motion.div
          className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <p>
            Crafting elegant digital experiences with cutting-edge technology.
            Passionate about building scalable solutions that push the boundaries
            of what's possible.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <Button
            size="lg"
            className="cosmic-gradient text-white font-semibold px-8 py-4 rounded-xl hover:glow-primary transition-all duration-300"
          >
            View My Work
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="glass-card border-primary/20 hover:border-primary/40 px-8 py-4 rounded-xl transition-all duration-300"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </Button>
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ y: 20, opacity: 0 }}
          animate={{ 
            y: [20, 0, 10, 0],
            opacity: [0, 1, 1, 1]
          }}
          transition={{
            duration: 2,
            delay: 1.5,
            repeat: Infinity,
            repeatDelay: 2
          }}
        >
          <a href="#about" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors">
            <ChevronDown className="w-6 h-6" />
          </a>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
    </section>
  );
};

export default Hero;