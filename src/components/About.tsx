import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, MapPin } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">About Me</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-8" />
            <p className="text-xl text-muted-foreground leading-relaxed">
              Passionate developer dedicated to solving real-world problems through innovative 
              software solutions and data-driven insights.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-primary">My Story</h3>
              <p className="text-muted-foreground leading-relaxed">
                I am an Information Systems student at Hawassa University Institute of Technology. 
                My journey in technology is driven by a curiosity for how things work and a desire 
                to build tools that make a difference.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With a background spanning web development, programming, and data analysis, 
                I enjoy the challenge of bridging the gap between complex data and user-friendly 
                applications.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm glass px-4 py-2 rounded-lg">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Hawassa, Ethiopia</span>
                </div>
                <div className="flex items-center gap-2 text-sm glass px-4 py-2 rounded-lg">
                  <GraduationCap className="w-4 h-4 text-primary" />
                  <span>BS in Information Systems</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid gap-6"
            >
              <div className="glass p-6 rounded-2xl hover:bg-white/10 transition-colors">
                <Briefcase className="w-8 h-8 text-accent mb-4" />
                <h4 className="text-xl font-bold mb-2">Versatile Tech Professional</h4>
                <p className="text-sm text-muted-foreground">
                  Skilled in Full Stack development, Machine Learning, and Database Design.
                </p>
              </div>
              <div className="glass p-6 rounded-2xl hover:bg-white/10 transition-colors">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mb-4 text-primary font-bold">
                  Σ
                </div>
                <h4 className="text-xl font-bold mb-2">Data & AI Focused</h4>
                <p className="text-sm text-muted-foreground">
                  Experience in predictive modeling, analytics, and intelligent systems.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
