import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Database, BrainCircuit, Layout } from 'lucide-react';

const services = [
  {
    title: 'Full Stack Development',
    desc: 'Building robust and scalable web applications from scratch with modern frameworks.',
    icon: Globe,
    color: 'text-blue-500'
  },
  {
    title: 'Data Analysis',
    desc: 'Transforming raw data into actionable insights through advanced statistical methods.',
    icon: Database,
    color: 'text-green-500'
  },
  {
    title: 'AI & Machine Learning',
    desc: 'Implementing intelligent algorithms and predictive models to solve complex problems.',
    icon: BrainCircuit,
    color: 'text-purple-500'
  },
  {
    title: 'UI/UX Design',
    desc: 'Creating intuitive and aesthetically pleasing digital experiences for users.',
    icon: Layout,
    color: 'text-pink-500'
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-black/40">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Expertise & Services</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-10 rounded-3xl hover:-translate-y-2 transition-transform duration-300"
            >
              <service.icon className={`w-12 h-12 mb-6 ${service.color}`} />
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
