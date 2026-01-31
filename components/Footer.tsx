import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 md:px-12 bg-brand-black border-t border-white/10 relative z-20">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm font-medium tracking-tight text-white/50">
          marcosmaciell © 2026
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://www.instagram.com/marcosmacielldg/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-brand-light transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>

          <a
            href="https://www.behance.net/marcosvmtenorio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-brand-light transition-colors"
            aria-label="Behance"
          >
            {/* Behance Icon SVG */}
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M11.143 12.223c.928.536 1.45 1.357 1.45 2.534 0 2.375-1.91 3.518-4.267 3.518h-4.326v-10.75h4.09c2.143 0 3.732 1.053 3.732 3.232 0 1.303-.893 2.053-1.804 2.303l1.125-1.16zm-2.822-2.303c0-1.197-.678-1.536-1.553-1.536h-1.625v3.125h1.59c1.035 0 1.588-.518 1.588-1.589zm.268 4.732c0-1.25-.768-1.66-1.786-1.66h-1.732v3.357h1.84c1.07 0 1.678-.518 1.678-1.697zm11.517-1.286c0-2.393-1.589-4.303-4.232-4.303-2.678 0-4.393 1.946-4.393 4.482 0 2.446 1.643 4.482 4.465 4.482 2.053 0 3.482-.964 3.964-2.607h-1.786c-.32.732-1.125 1.178-2.125 1.178-1.393 0-2.285-.893-2.375-2.268h6.464c.036-.321.018-.678.018-.964zm-6.732-.821c.107-1.232 1.018-1.982 2.321-1.982 1.25 0 2.125.75 2.25 1.982h-4.571zm6.732-6.572h-5.41v1.607h5.411v-1.607z" />
            </svg>
          </a>

          <a
            href="https://api.whatsapp.com/send?phone=5511948635387&text=Ol%C3%A1%2C%20vim%20pelo%20site%21"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-brand-light transition-colors"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;