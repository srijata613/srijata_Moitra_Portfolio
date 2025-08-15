import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-8 border-t border-border/20"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.div
          className="flex items-center justify-center gap-2 text-muted-foreground"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <span>Made with</span>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Heart className="w-4 h-4 text-red-500 fill-current" />
          </motion.div>
          <span>by</span>
          <motion.span
            className="cosmic-gradient bg-clip-text text-transparent font-semibold"
            whileHover={{ scale: 1.1 }}
          >
            Srijata
          </motion.span>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;