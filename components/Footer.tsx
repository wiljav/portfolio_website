export default function Footer() {
  return (
    <footer className="bg-transparent m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          
          {/* VERTICAL SIDEBAR - Hidden on mobile, clean on desktop */}
          <div className="hidden lg:flex fixed right-0 bottom-40 w-20 flex-col items-center justify-end pb-12 z-50 pointer-events-none">
            <div className="flex items-center gap-8 -rotate-90 origin-center pointer-events-auto whitespace-nowrap">
              <a href="#contact" className="border-2 border-black px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-[#00ffdd] transition-all rounded-full bg-white">
                Contact
              </a>
              <span className="font-bold text-xl uppercase tracking-[0.4em] text-black">
                Julia Sand
              </span>
            </div>
          </div>

          {/* CONTACT INFO */}
          <div className="z-10">
            <h2 className="text-sm font-bold uppercase tracking-widest mb-4">Contact</h2>
            <ul className="flex flex-wrap items-center font-medium text-gray-500 gap-4 md:gap-8">
              <li><a href="mailto:juliasanddesign@gmail.com" className="hover:underline text-sm md:text-base">juliasanddesign@gmail.com</a></li>
              <li><a href="tel:+358445700427" className="hover:underline text-sm md:text-base">+358 (0) 44 57 00 427</a></li>
              
              <li className="hidden md:block">
                <div className="w-12 lg:w-32 h-[2px] bg-black"></div>
              </li>

              <li className="flex gap-4">
                <img src="/insta.png" className="h-6 w-auto grayscale hover:grayscale-0 transition-all" alt="Instagram" />
                <img src="/linkedin.png" className="h-6 w-auto grayscale hover:grayscale-0 transition-all" alt="LinkedIn" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}