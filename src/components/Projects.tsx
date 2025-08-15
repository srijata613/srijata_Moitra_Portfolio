import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Button } from './ui/button';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Frontend', 'Full-Stack', 'Mobile'];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with React, Node.js, and Stripe integration. Features include real-time inventory, user authentication, and payment processing.",
      category: "Full-Stack",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Docker"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "Habit Tracker App",
      description: "A simple app to build and track daily habits with reminders and progress insights.",
      category: "Mobile",
      image: "/api/placeholder/600/400",
      technologies: ["Dart", "Swift", "C++", "Flutter"],
      github: "https://github.com/srijata613/habit_tracker.git",
    },
    {
      title: "Meditation App",
      description: "Cross-platform mobile app for guided meditation with audio sessions, progress tracking, and user-friendly interface.",
      category: "Mobile",
      image: "/api/placeholder/600/400",
      technologies: ["JavaScript", "Dart", "Kotlin", "HTML"],
      github: "https://github.com/srijata613/Auranest_meditation.git",
      live: "https://example.com"
    },
    {
      title: "AI Chat Dashboard",
      description: "Interactive dashboard for AI chatbot analytics with real-time metrics, conversation insights, and performance monitoring.",
      category: "Full-Stack",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "Python", "Gemini", "Firebase"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio website with cosmic theme, smooth animations, and optimized performance for showcasing development work.",
      category: "Frontend",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Framer Motion", "Tailwind", "TypeScript"],
      github: "https://github.com/srijata613/Portfolio.git",
      live: "https://example.com"
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative">
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
              Featured <span className="bg-cosmic-gradient bg-clip-text text-transparent">Projects</span>
            </motion.h2>
            
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A collection of projects that showcase my skills and passion for development
            </motion.p>

            {/* Filter Buttons */}
            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {filters.map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? "default" : "outline"}
                  className={`glass-card transition-all duration-300 ${
                    activeFilter === filter 
                      ? 'cosmic-gradient text-white' 
                      : 'border-primary/20 hover:border-primary/40'
                  }`}
                  onClick={() => setActiveFilter(filter)}
                >
                  <Filter className="w-4 h-4 mr-2" />
                  {filter}
                </Button>
              ))}
            </motion.div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                className="glass-card p-6 rounded-2xl hover:glow-primary transition-all duration-500 group"
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                transition={{ duration: 0.8, delay: 0.8 + (index * 0.1) }}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-4xl font-bold text-primary/40">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a 
                      href={project.github}
                      className="p-3 glass-card rounded-lg hover:glow-primary transition-all duration-300"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                    <a 
                      href={project.live}
                      className="p-3 glass-card rounded-lg hover:glow-primary transition-all duration-300"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-foreground">
                      {project.title}
                    </h3>
                    <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
