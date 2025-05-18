import React, { useEffect, useState } from 'react';
import { Menu, X, Monitor, Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background shadow py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center">
            <Monitor className="h-8 w-8 text-accent" />
            <span className="ml-2 text-xl font-bold text-foreground">SoftSell</span>
          </div>
        </div>

        <nav className="hidden md:flex md:items-center md:space-x-8">
          <a href="#how-it-works" className="text-foreground/80 hover:text-accent transition-colors">How It Works</a>
          <a href="#why-choose-us" className="text-foreground/80 hover:text-accent transition-colors">Why Choose Us</a>
          <a href="#testimonials" className="text-foreground/80 hover:text-accent transition-colors">Testimonials</a>
          <a href="#contact" className="btn-primary">Get a Quote</a>
          <button 
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full hover:bg-secondary transition-colors"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        <div className="flex items-center md:hidden">
          <button 
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 mr-2 rounded-full hover:bg-secondary transition-colors"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            type="button"
            className="text-foreground"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-background shadow-md">
          <div className="container py-4 space-y-3">
            <a 
              href="#how-it-works" 
              className="block py-2 text-foreground hover:text-accent"
              onClick={closeMenu}
            >
              How It Works
            </a>
            <a 
              href="#why-choose-us" 
              className="block py-2 text-foreground hover:text-accent"
              onClick={closeMenu}
            >
              Why Choose Us
            </a>
            <a 
              href="#testimonials" 
              className="block py-2 text-foreground hover:text-accent"
              onClick={closeMenu}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="block py-2 text-foreground hover:text-accent"
              onClick={closeMenu}
            >
              Contact Us
            </a>
            <a 
              href="#contact" 
              className="block btn-primary w-full text-center"
              onClick={closeMenu}
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;