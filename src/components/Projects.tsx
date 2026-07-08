import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, ExternalLink, Filter } from 'lucide-react';

const projects = [
  {
    title: 'Startup Navigator AI',
    desc: 'Machine Learning project focused on intelligent startup analysis and insight generation.',
    tags: ['Machine Learning', 'AI', 'Python'],
    github: 'https://github.com/tech-nerd27',
    category: 'ML/AI',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'AI Student Performance Prediction',
    desc: 'Predictive analytics system using ML to forecast academic outcomes for students.',
    tags: ['Python', 'ML', 'Analytics'],
    github: 'https://github.com/tech-nerd27/AI-Student-Performance-Prediction-',
    category: 'ML/AI',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Game Sales Prediction System',
    desc: 'Data analysis and ML system to predict video game sales based on historical data.',
    tags: ['Python', 'Data Analysis', 'ML'],
    github: 'https://github.com/tech-nerd27/Games-Sales-Prediction-System',
    category: 'Data Science',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Paws and Hearts',
    desc: 'A comprehensive web application for animal adoption and management.',
    tags: ['Web Development', 'UI/UX', 'JS'],
    github: 'https://github.com/tech-nerd27/Paws-and-Hearts-Web-Application-',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Habesha Tour & Travel',
    desc: 'A vibrant website for a travel agency showcasing destinations in Ethiopia.',
    tags: ['Web Development', 'Design', 'Frontend'],
    github: 'https://github.com/tech-nerd27/habesha-tour-travel-Agency--website',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1523805081446-ed9a76899790?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'LinkedIn Redesign',
    desc: 'A modern UI/UX redesign project focusing on professional aesthetics and usability.',
    tags: ['Frontend', 'UI/UX', 'React'],
    github: 'https://github.com/tech-nerd27/Re-Design-of-LinkedIn',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1611944212129-29977ae1398c?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Student Grade Tracker',
    desc: 'Software system for managing and tracking student academic performance efficiently.',
    tags: ['Software Dev', 'Database', 'Java'],
    github: 'https://github.com/tech-nerd27/Student-Grader-Tracker-System',
    category: 'Software',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Online Blood Donation',
    desc: 'A critical management system for coordinating blood donations and inventory.',
    tags: ['Database', 'Web App', 'PHP'],
    github: 'https://github.com/tech-nerd27/Online-Blood-Donation-Management-System-',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1615461066841-6116ecaaba90?auto=format&fit=crop&q=80&w=800'
  }
];

const categories = ['All', 'Web', 'ML/AI', 'Data Science', 'Software', 'Design'];

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-8" />
          
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat 
                  ? 'bg-primary text-primary-foreground' 
                  : 'glass text-muted-foreground hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative glass rounded-[2rem] overflow-hidden flex flex-col h-full"
              >
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full glass-dark text-[10px] font-bold uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed">
                    {project.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold text-primary/80 uppercase">#{tag}</span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-bold text-foreground hover:text-primary transition-colors"
                    >
                      <Code2 className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
