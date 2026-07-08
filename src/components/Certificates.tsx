import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certs = [
  {
    title: 'Data Analysis Fundamentals',
    issuer: 'Udacity',
    link: 'https://drive.google.com/file/d/105XgIIBTKZwfBwNh2J4v0WQtGXHIEA1b/view?usp=drive_link',
    icon: '📊'
  },
  {
    title: 'Introduction to Modern AI',
    issuer: 'Cisco Networking Academy',
    link: 'https://drive.google.com/file/d/10IZsk6UPf_m03uWZE8i2K65ZhB0SUUWu/view?usp=sharing',
    icon: '🤖'
  },
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    link: 'https://drive.google.com/file/d/1yNwbVR5LyvvP8MuuOPcJtJO1jt60XOro/vie',
    icon: '🛡️'
  },
  {
    title: 'Tech Product Development Program',
    issuer: 'Program Graduate',
    link: 'https://drive.google.com/file/d/1CSp-gktSOvjaP95avfY25bn0_QctJLei/view?usp=drive_link',
    icon: '🚀'
  }
];

export const Certificates = () => {
  return (
    <section id="certificates" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Certifications</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-8" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((cert, i) => (
            <motion.a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl hover:bg-white/10 transition-all group block text-center"
            >
              <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">{cert.icon}</div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{cert.title}</h3>
              <p className="text-sm text-muted-foreground mb-6">{cert.issuer}</p>
              <div className="flex items-center justify-center gap-2 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Verify Certificate
                <ExternalLink className="w-3 h-3" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
