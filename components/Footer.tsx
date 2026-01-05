export default function Footer() {
  return (
    <footer className="bg-transparent rounded-lg m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="fixed right-0 bottom-10 h-screen w-20 flex flex-col items-center justify-end pb-12 z-50 pointer-events-none">
  
  {/* NAME + BUTTON GROUP - Anchored to bottom right */}
  <div className="flex items-center gap-8 -rotate-90 origin-center pointer-events-auto whitespace-nowrap translate-y-[-100px]">
    
    {/* THE BUTTON */}
    <a 
      href="#contact" 
      className="border-2 border-black px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-[#00ffdd] hover:border-[#00ffdd] transition-all rounded-full"
    >
      Contact
    </a>

    {/* THE NAME */}
    <span className="font-sans font-bold text-xl uppercase tracking-[0.4em] text-black">
      Julia Sand
    </span>

    
  </div>

</div>
          
          <ul className="flex flex-wrap items-center mb-2 text-sm font-medium text-gray-500 sm:mb-0 gap-y-4">
  <li><a href="mailto:juliasanddesign@gmail.com" className="hover:underline me-4">juliasanddesign@gmail.com</a></li>
  <li><a href="tel:+358445700427" className="hover:underline me-4">+358 (0) 44 57 00 427</a></li>
  
  {/* THE FIX: Fixed width and horizontal margins */}
  <li className="flex items-center">
    <div className="w-12 md:w-80 h-[3px] bg-black mx-4 md:mx-8"></div> {/* h-px */}
  </li>

  <li>
    <img src="/insta.png" className="me-4 h-10 w-auto grayscale hover:grayscale-0 transition-all" alt="Instagram" />
  </li>
  <li>
    <img src="/linkedin.png" className="me-4 h-10 w-auto grayscale hover:grayscale-0 transition-all" alt="LinkedIn" />
  </li>
</ul>
        </div>
      </div>
    </footer>
  );
}


