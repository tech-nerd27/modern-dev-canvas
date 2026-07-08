import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Code2, User, Send, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      toast.success('Message sent successfully! I will get back to you soon.');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-1" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Let's <span className="text-gradient">Connect</span></h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Have a project in mind or just want to chat about technology? 
              Feel free to reach out. I'm always open to new opportunities 
              and collaborations.
            </p>

            <div className="space-y-8">
              {[
                { icon: Mail, label: 'Email', value: 'aregawmihert@gmail.com', href: 'mailto:aregawmihert@gmail.com' },
                { icon: Code2, label: 'GitHub', value: 'tech-nerd27', href: 'https://github.com/tech-nerd27' },
                { icon: User, label: 'LinkedIn', value: 'Mihret Argaw', href: 'https://www.linkedin.com/in/mihret-argaw-aa8520372' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 group"
                >
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-lg font-medium group-hover:text-primary transition-colors">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 md:p-12 rounded-[2.5rem]"
          >
            {isSent ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="text-green-500 w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                <p className="text-muted-foreground mb-8">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setIsSent(false)}
                  className="text-primary font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold ml-1 uppercase tracking-wider">Your Name</label>
                    <input
                      required
                      type="text"
                      className="w-full px-6 py-4 rounded-xl glass border-white/5 focus:border-primary/50 outline-none transition-all"
                      placeholder="Mihret Argaw"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold ml-1 uppercase tracking-wider">Your Email</label>
                    <input
                      required
                      type="email"
                      className="w-full px-6 py-4 rounded-xl glass border-white/5 focus:border-primary/50 outline-none transition-all"
                      placeholder="aregawmihert@gmail.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold ml-1 uppercase tracking-wider">Subject</label>
                  <input
                    required
                    type="text"
                    className="w-full px-6 py-4 rounded-xl glass border-white/5 focus:border-primary/50 outline-none transition-all"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold ml-1 uppercase tracking-wider">Message</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-6 py-4 rounded-xl glass border-white/5 focus:border-primary/50 outline-none transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full py-5 rounded-xl bg-primary text-primary-foreground font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(var(--primary),0.3)] transition-all disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="w-5 h-5" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
