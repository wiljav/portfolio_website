export default function Footer() {
  return (
    <footer className="bg-transparent rounded-lg m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src="/logo.gif" className="h-8 w-auto" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">JuliaSand</span>
          </a>
          
          <ul className="flex flex-wrap items-center mb-2 text-sm font-medium text-gray-500 sm:mb-0">
            <li><a href="mailto:juliasanddesign@gmail.com" className="hover:underline me-2 md:me-4">juliasanddesign@gmail.com</a></li>
            <li><a href="tel:+358445700427" className="hover:underline me-2 md:me-4">+358 (0) 44 57 00 427</a></li>
            <li><hr className="md:me-4 w-40 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10" /></li>
            <li>
              <img src="/logo.gif" className="md:me-4 h-8 w-auto opacity-50 grayscale" alt="Seal" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}