"use client";
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Front Page", href: "/", bold: true },
    { name: "UX/UI DESIGN", href: "/ux-design", size: "lg:text-sm", bold: false },
    { name: "Services", href: "/services", bold: true },
    { name: "GRAPHICS", href: "/graphics", size: "lg:text-sm", bold: false },
    { name: "About", href: "/about", bold: true },
    { name: "ART & EXPERIMENTAL", href: "/experimental", size: "lg:text-sm", bold: false },
  ];

  return (
    <header className="relative z-50 bg-transparent py-8 lg:py-16">
      <nav aria-label="Global" className="w-full px-6 lg:px-12 relative">
        
        {/* 1. THE LOGO (Absolute to the Left Edge of the Nav) */}
        <div className="lg:absolute lg:left-12 lg:top-0">
          <a href="/" className="-m-1.5 p-1.5 flex">
            <span className="sr-only">Julia Sand</span>
            <img src="/logo.gif" alt="Logo" className="h-14 lg:h-32 w-auto" />
          </a>
        </div>

        {/* 2. THE MENU WRAPPER (Aligned with Page Content) */}
        <div className="max-w-7xl mx-auto flex justify-end">
          
          {/* DESKTOP MENU (Centered to content, pushed far from right) */}
          <div className="hidden lg:grid grid-flow-col grid-rows-2 gap-x-12 gap-y-4 text-left lg:mr-20">
            {navLinks.map((link) => (
              <div key={link.name}>
                <a 
                  href={link.href}
                  className={`tracking-widest hover:text-[#00ffdd] transition-colors uppercase ${
                    link.bold ? 'text-lg font-bold' : 'text-sm font-normal'
                  }`}
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>

          {/* MOBILE TRIGGER (Right Edge) */}
          <div className="flex lg:hidden w-full justify-end items-center">
            <button onClick={() => setMobileMenuOpen(true)} className="p-2 text-black">
              <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU PANEL */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-white px-6 py-8 lg:hidden">
          <div className="flex items-center justify-between">
            <img src="/logo.gif" alt="Logo" className="h-14 w-auto" />
            <button onClick={() => setMobileMenuOpen(false)} className="p-2">
              <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="mt-16 flex flex-col gap-y-10 pl-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className={`text-3xl tracking-widest uppercase ${link.bold ? 'font-bold' : 'font-normal'}`} onClick={() => setMobileMenuOpen(false)}>
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}