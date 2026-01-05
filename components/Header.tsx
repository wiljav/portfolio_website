"use client";

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav aria-label="Global" className="mx-auto max-w-7xl p-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT COLUMN: Logo */}
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Julia Sand</span>
              <img src="/logo.gif" alt="Julia Sand Logo" className="h-16 w-auto" />
            </a>
          </div>

          {/* RIGHT COLUMN: Menu */}
          <div className="hidden lg:grid grid-flow-col grid-rows-2 gap-x-8 gap-y-2">
            <div>
              <a href="/" className="text-m font-bold uppercase tracking-widest hover:text-[#00ffdd] transition-colors">
                Front Page
              </a>
            </div>
            <div>
              {/* NORMAL WEIGHT HERE */}
              <a href="/ux-ui" className="text-m font-normal uppercase tracking-widest hover:text-[#00ffdd] transition-colors">
                UX/UI DESIGN
              </a>
            </div>
            <div>
              <a href="/services" className="text-m font-bold uppercase tracking-widest hover:text-[#00ffdd] transition-colors">
                Services
              </a>
            </div>
            <div>
              {/* NORMAL WEIGHT HERE */}
              <a href="/graphics" className="text-m font-normal uppercase tracking-widest hover:text-[#00ffdd] transition-colors">
                GRAPHICS
              </a>
            </div>
            <div>
              <a href="/about" className="text-m font-bold uppercase tracking-widest hover:text-[#00ffdd] transition-colors">
                About
              </a>
            </div>
            <div>
              {/* NORMAL WEIGHT HERE */}
              <a href="/experimental" className="text-m font-normal uppercase tracking-widest hover:text-[#00ffdd] transition-colors">
                ART & EXPERIMENTAL
              </a>
            </div>
          </div>

        </div>
      </nav>
    </header>
  );
}