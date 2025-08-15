import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Rocket, Zap } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with modern best practices"
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing applications for speed and user experience"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Staying ahead with cutting-edge technologies and solutions"
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              About <span className="bg-cosmic-gradient bg-clip-text text-transparent">Me</span>
            </motion.h2>
            
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Passionate App developer with a keen eye for design and a love for 
              creating seamless digital experiences. I specialize in modern web technologies 
              and enjoy solving complex problems with elegant solutions.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6"
            >
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 text-primary">My Journey</h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Started my coding journey 4 years ago in my 1st year in college practical lab with a simple "Hello World" 
                  and never looked back. What began as curiosity evolved into a passion 
                  for crafting digital solutions that make a difference.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  I believe in the power of continuous learning and staying at the 
                  forefront of technology. Every project is an opportunity to push 
                  boundaries and create something extraordinary.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space-y-6"
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  className="glass-card p-6 rounded-xl hover:glow-primary transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 1 + (index * 0.1) }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg cosmic-gradient">
                      <highlight.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-1">
                        {highlight.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;