"use client";
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Front Page", href: "/", bold: true },
    { name: "UX/UI DESIGN", href: "/ux-ui", bold: false },
    { name: "Services", href: "/services", bold: true },
    { name: "GRAPHICS", href: "/graphics", bold: false },
    { name: "About", href: "/about", bold: true },
    { name: "ART & EXPERIMENTAL", href: "/experimental", bold: false },
  ];

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav aria-label="Global" className="mx-auto max-w-7xl p-6 lg:px-8 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Julia Sand</span>
            <img src="/logo.gif" alt="Julia Sand Logo" className="h-12 lg:h-16 w-auto" />
          </a>
        </div>

        {/* SANDWICH BUTTON (Mobile Only) */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 text-black"
          >
            <span className="sr-only">Open menu</span>
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>

        {/* DESKTOP MENU (Hidden on Mobile) */}
        <div className="hidden lg:grid grid-flow-col grid-rows-2 gap-x-8 gap-y-2 text-right">
          {navLinks.map((link) => (
            <div key={link.name}>
              <a 
                href={link.href} 
                className={`text-sm lg:text-lg tracking-widest hover:text-[#00ffdd] transition-colors uppercase ${link.bold ? 'font-bold' : 'font-normal'}`}
              >
                {link.name}
              </a>
            </div>
          ))}
        </div>
      </nav>

      {/* MOBILE MENU PANEL */}
      {/* MOBILE MENU PANEL */}
{mobileMenuOpen && (
  <div className="fixed inset-0 z-[100] bg-white px-6 py-6 lg:hidden">
    {/* HEADER INSIDE MENU: Added 'items-center' and 'justify-between' */}
    <div className="flex items-center justify-between">
      {/* LOGO */}
      <img src="/logo.gif" alt="Logo" className="h-12 w-auto" />
      
      {/* THE CLOSE BUTTON: Added pr-2 to ensure it doesn't hit the screen edge */}
      <button 
        onClick={() => setMobileMenuOpen(false)} 
        className="p-2 mr-2 text-black hover:text-[#00ffdd] transition-colors"
      >
        <span className="sr-only">Close menu</span>
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    {/* MENU LINKS */}
    <div className="mt-10 flex flex-col gap-y-8 pl-4">
      {navLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className={`text-3xl tracking-widest uppercase ${link.bold ? 'font-bold' : 'font-normal'}`}
          onClick={() => setMobileMenuOpen(false)}
        >
          {link.name}
        </a>
      ))}
    </div>
  </div>
)}
    </header>
  );
}