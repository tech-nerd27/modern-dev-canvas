import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, MapPin } from 'lucide-react';

export const Education = () => {
  return (
    <section id="education" className="py-24 bg-black/40 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Education</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-8" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-10 md:p-12 rounded-[2.5rem] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8">
              <BookOpen className="w-24 h-24 text-primary/5 -rotate-12" />
            </div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <div>
                  <h3 className="text-3xl font-bold text-gradient mb-2">Bachelor of Information Systems</h3>
                  <p className="text-xl font-medium">Hawassa University Institute of Technology</p>
                </div>
                <div className="flex flex-col items-start md:items-end gap-2">
                  <div className="flex items-center gap-2 text-primary font-bold">
                    <Calendar className="w-4 h-4" />
                    <span>Expected Graduation: 2027</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>Hawassa, Ethiopia</span>
                  </div>
                </div>
              </div>

              <div className="h-px bg-white/10 w-full mb-8" />

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-lg mb-4">Core Focus Areas</h4>
                  <ul className="space-y-3">
                    {['Systems Analysis & Design', 'Database Management Systems', 'Software Engineering', 'Network Administration', 'Object-Oriented Analysis'].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-4">Academic Highlights</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Dedicated student with a strong focus on practical application of 
                    Information Systems principles. Active participant in university tech 
                    communities and collaborative software projects.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
