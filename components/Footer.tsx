export default function Footer() {
  return (
    <footer className="bg-transparent m-4 mt-20" style={{ fontFamily: 'var(--font-karla), sans-serif' }}>
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        
        {/* VERTICAL SIDEBAR - SHARP RENDERED */}
        <div className="hidden lg:flex fixed right-0 bottom-40 w-24 flex-col items-center justify-end pb-12 z-50 pointer-events-none">
          <div className="flex items-center gap-10 -rotate-90 origin-center pointer-events-auto whitespace-nowrap">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center border-[1.5px] border-black border-solid px-6 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-black antialiased rounded-full hover:bg-[#00ffdd] hover:border-[#00ffdd] transition-all duration-300 select-none"
            >
              Contact
            </a>
            <span className="font-bold text-lg uppercase tracking-[0.5em] text-black antialiased">
              Julia Sand
            </span>
          </div>
        </div>

        {/* FOOTER BOTTOM BAR */}
        <div className="z-10">
          <h2 className="text-[11px] font-bold tracking-[0.3em] mb-6 text-center md:text-left antialiased" style={{ fontFamily: 'var(--font-sans), sans-serif' }}>
            Contact
          </h2>
          
          <ul className="flex flex-col md:flex-row items-center gap-y-8 md:gap-x-10 antialiased">
            
            {/* EMAIL & PHONE */}
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10">
              <li>
                <a href="mailto:juliasanddesign@gmail.com" className="text-gray-500 hover:text-black transition-colors text-sm md:text-base font-medium">
                  juliasanddesign@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+358445700427" className="text-gray-500 hover:text-black transition-colors text-sm md:text-base font-medium">
                  +358 (0) 44 57 00 427
                </a>
              </li>
            </div>

            {/* DYNAMIC STRETCHING LINE - Desktop Only */}
            <li className="hidden md:flex flex-grow items-center px-4">
              <div className="w-full h-[1px] bg-black opacity-20"></div>
            </li>

            {/* LOGOS - Increased Size & Mobile Friendly */}
            <li className="flex gap-8 items-center">
              <a href="#" className="block transform active:scale-90 transition-transform">
                <img src="/insta.png" className="h-8 lg:h-9 w-auto grayscale hover:grayscale-0 transition-all duration-300" alt="Instagram" />
              </a>
              <a href="#" className="block transform active:scale-90 transition-transform">
                <img src="/linkedin.png" className="h-8 lg:h-9 w-auto grayscale hover:grayscale-0 transition-all duration-300" alt="LinkedIn" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}