import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-4 bg-gray-900 text-white shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-xl font-bold">Moje Portfolio</h1>
        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-blue-400">O mně</a>
          <a href="#projects" className="hover:text-blue-400">Projekty a zkušenosti</a>
          <a href="#contact" className="hover:text-blue-400">Kontakt</a>
        </div>
        {/* Hamburger icon */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Otevřít menu"
        >
          <span className={`block w-7 h-1 bg-white rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block w-7 h-1 bg-white rounded my-1 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-7 h-1 bg-white rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gray-900 shadow-lg flex flex-col items-center py-4 animate-fade-in z-50">
          <a
            href="#about"
            className="py-2 px-6 w-full text-center hover:text-blue-400 text-lg"
            onClick={() => setMenuOpen(false)}
          >
            O mně
          </a>
          <a
            href="#projects"
            className="py-2 px-6 w-full text-center hover:text-blue-400 text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Projekty a zkušenosti
          </a>
          <a
            href="#contact"
            className="py-2 px-6 w-full text-center hover:text-blue-400 text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Kontakt
          </a>
        </div>
      )}
    </nav>
  );
}
