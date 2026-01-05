import React from 'react';

const brands = [
  { icon: "/brands/hsl.png" }, { icon: "/brands/hls.png" },
  { icon: "/brands/atria.png" }, { icon: "/brands/he.png" },
  { icon: "/brands/dna.jpg" }, { icon: "/brands/malaco.png" },
  { icon: "/brands/coca.png" }
];

export default function Brands() {
  return (
    <section className="relative isolate mt-20 px-6 py-24 lg:px-8 bg-transparent overflow-hidden" >
      <div className="mx-auto max-w-7xl">
        
        {/* MAIN PARENT GRID - Flipped via Column Ordering */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT COLUMN: TEXT CONTENT (Order 1) */}
          <div className="order-1 text-left z-20">
            <h2 className="text-[45px] lg:text-[80px] tracking-tight text-[#00ffdd] leading-[0.9]  antialiased">
              Brands I've designed for.
            </h2>
            <p style={{ fontFamily: 'var(--font-karla), sans-serif' }} className="mt-8 text-sm lg:text-base font-medium text-gray-500 uppercase leading-relaxed max-w-md">
              While working with top design agencies, I have created graphics for international brands.
              <br /><br />
              <span className="text-black lowercase font-bold">juliasanddesign@gmail.com</span>
            </p>
            
            <div className="mt-10">
              <a href="mailto:juliasanddesign@gmail.com" className="inline-flex items-center justify-center border-[2px] border-black rounded-full px-8 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-[#00ffdd] hover:border-[#00ffdd] transition-all duration-300">
                Contact Me
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: THE LOGO GRID (Order 2) */}
          <div className="order-2">
            <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase mb-10 text-gray-400 text-center lg:text-left">
              Clients & Partners
            </h3>
            
            {/* 4 COLUMNS x 2 ROWS INTERNAL GRID */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-12">
              {brands.map((brand, index) => (
                <div key={index} className="flex items-center justify-center group">
                  <div className="w-full h-12 lg:h-16 flex items-center justify-center">
                    <img 
                      src={brand.icon} 
                      alt="Brand Logo"
                      className="max-h-full max-w-full object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}