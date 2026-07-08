import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Database, BrainCircuit, Terminal } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Terminal,
    skills: [
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'Java', level: 75 },
      { name: 'C++', level: 70 },
      { name: 'PHP/Laravel', level: 80 },
    ],
  },
  {
    title: 'Web Development',
    icon: Globe,
    skills: [
      { name: 'React', level: 85 },
      { name: 'Node.js', level: 80 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'UI/UX Design', level: 75 },
    ],
  },
  {
    title: 'Data & AI',
    icon: BrainCircuit,
    skills: [
      { name: 'Data Analysis', level: 85 },
      { name: 'Machine Learning', level: 80 },
      { name: 'Predictive Modeling', level: 75 },
      { name: 'Recommendation Systems', level: 70 },
    ],
  },
  {
    title: 'Database & Tools',
    icon: Database,
    skills: [
      { name: 'MySQL', level: 85 },
      { name: 'Linux/WSL', level: 80 },
      { name: 'VS Code', level: 90 },
      { name: 'Git', level: 85 },
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-black/40">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Technical Skills</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-8" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive set of tools and technologies I've mastered through projects 
            and continuous learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <cat.icon className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-6">{cat.title}</h3>
              <div className="space-y-6">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-linear-to-r from-primary to-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
