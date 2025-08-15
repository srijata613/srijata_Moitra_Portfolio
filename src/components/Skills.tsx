import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React Native (JavaScript)", level: 95 },
        { name: "Android Studio (Java, Kotlin)", level: 92 },
        { name: "TypeScript", level: 90 },
        { name: "Flutter (Dart)", level: 88 },
        { name: "Tailwind CSS", level: 92 },
          ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python + Django", level: 85 },
        { name: "Firebase", level: 88 },
        { name: "REST APIs Integration", level: 82 },
        { name: "Docker", level: 80 }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 95 },
        { name: "AWS", level: 85 },
        { name: "Figma", level: 88 },
        { name: "Postman", level: 82 },
        { name: "CI/CD", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Skills & <span className="bg-cosmic-gradient bg-clip-text text-transparent">Expertise</span>
            </motion.h2>
            
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Technologies and tools I use to bring ideas to life
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                className="glass-card p-8 rounded-2xl"
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                transition={{ duration: 0.8, delay: 0.6 + (categoryIndex * 0.2) }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-center">
                  <span className="bg-cosmic-gradient bg-clip-text text-transparent">
                    {category.title}
                  </span>
                </h3>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.8 + (categoryIndex * 0.2) + (skillIndex * 0.1) 
                      }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-foreground font-medium">
                          {skill.name}
                        </span>
                        <span className="text-muted-foreground text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-secondary rounded-full h-2">
                        <motion.div
                          className="h-2 cosmic-gradient rounded-full"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            duration: 1.5, 
                            delay: 1 + (categoryIndex * 0.2) + (skillIndex * 0.1),
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;