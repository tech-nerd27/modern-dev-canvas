import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, User, Mail } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse delay-1000" />

      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full glass border-primary/20 text-primary text-xs font-bold mb-6"
          >
            AVAILABLE FOR NEW OPPORTUNITIES
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Building <span className="text-gradient">Intelligent</span> <br />
            Solutions
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
            I'm <span className="text-foreground font-semibold">Mihret Argaw</span>, a versatile software developer 
            and data enthusiast focused on creating practical, high-impact applications using 
            modern technology stacks.
          </p>

          <div className="flex flex-wrap gap-4 mb-10 justify-center">
            <a
              href="#projects"
              className="flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:shadow-[0_0_30px_rgba(var(--primary),0.4)] transition-all group"
            >
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex items-center gap-3">
              {[
                { icon: Code2, href: 'https://github.com/tech-nerd27' },
                { icon: User, href: 'https://www.linkedin.com/in/mihret-argaw-aa8520372' },
                { icon: Mail, href: 'mailto:aregawmihert@gmail.com' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl glass hover:bg-white/10 text-muted-foreground hover:text-foreground transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
