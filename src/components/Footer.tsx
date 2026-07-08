import React from 'react';
import { Cpu } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2">
          <Cpu className="text-primary w-6 h-6" />
          <span className="text-lg font-bold tracking-tighter">
            MIHRET<span className="text-primary">.</span>A
          </span>
        </div>
        
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Mihret Argaw. All rights reserved.
        </p>

        <div className="flex gap-8">
          {['Privacy Policy', 'Terms of Service'].map((link) => (
            <a key={link} href="#" className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors">
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
