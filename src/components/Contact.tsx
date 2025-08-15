import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, MapPin, Phone, Download, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "srijata.maitra05@gmail.com",
      href: "mailto:stellar@example.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6290 534 749",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "West Bengal, India",
      href: "#"
    }
  ];

const socialLinks = [
    {
        icon: Github,
        label: "GitHub",
        href: "https://github.com/srijata613",
        color: "hover:text-white"
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/srijata-maitra-a455062ba/",
        color: "hover:text-blue-400"
    },
    {
        icon: Instagram,
        label: "Instagram",
        href: "https://www.instagram.com/shini_095/",
        color: "hover:text-pink-500"
    }
];

  return (
    <section id="contact" className="py-24 relative">
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
              Get In <span className="bg-cosmic-gradient bg-clip-text text-transparent">Touch</span>
            </motion.h2>
            
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Ready to bring your ideas to life? Let's discuss your next project
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -60 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 bg-cosmic-gradient bg-clip-text text-transparent">
                  Let's Connect
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      className="flex items-center space-x-4 p-4 rounded-xl hover:bg-secondary/50 transition-all duration-300 group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                      whileHover={{ x: 10 }}
                    >
                      <div className="p-3 cosmic-gradient rounded-lg group-hover:glow-primary transition-all duration-300">
                        <info.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="text-foreground font-medium">{info.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="text-lg font-semibold mb-4 text-foreground">
                    Follow Me
                  </h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        className={`p-3 glass-card rounded-lg transition-all duration-300 ${social.color}`}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ duration: 0.5, delay: 1.2 + (index * 0.1) }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Resume Download */}
                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 1.5 }}
                >
                  <Button
                    className="w-full cosmic-gradient text-white font-semibold py-4 rounded-xl hover:glow-primary transition-all duration-300"
                    size="lg"
                  >
                    <a href="resume/Resume.pdf" download className="flex items-center justify-center">
                    <Download className="w-5 h-5 mr-2" />
                    Download Resume
                    </a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="glass-card p-8 rounded-2xl"
              initial={{ opacity: 0, x: 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-6 bg-cosmic-gradient bg-clip-text text-transparent">
                Send Message
              </h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 1 }}
                  >
                    <Input
                      type="text"
                      placeholder="Your Name"
                      className="glass-card border-primary/20 focus:border-primary/40"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                  >
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="glass-card border-primary/20 focus:border-primary/40"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <Input
                    type="text"
                    placeholder="Subject"
                    className="glass-card border-primary/20 focus:border-primary/40"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 1.3 }}
                >
                  <Textarea
                    placeholder="Your Message"
                    rows={6}
                    className="glass-card border-primary/20 focus:border-primary/40 resize-none"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                >
                  <Button
                    type="submit"
                    className="w-full cosmic-gradient text-white font-semibold py-4 rounded-xl hover:glow-primary transition-all duration-300"
                    size="lg"
                  >
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;