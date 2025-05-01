import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, ChevronDown } from 'lucide-react';
import { categories } from '../data/visualizers';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const toggleDropdown = (category: string) => {
    setActiveDropdown(activeDropdown === category ? null : category);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-md shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 text-white">
            <Code2 className="h-7 w-7" />
            <span className="text-xl font-bold">AlgoViz</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a 
              href="/" 
              className="text-white/90 hover:text-white transition-colors text-sm font-medium"
            >
              Home
            </a>
            
            <div className="relative group">
              <button 
                onClick={() => toggleDropdown('algorithms')}
                className="flex items-center gap-1 text-white/90 hover:text-white transition-colors text-sm font-medium"
              >
                Algorithms
                <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'algorithms' ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`absolute left-0 top-full bg-black/80 backdrop-blur-md p-3 rounded-lg shadow-lg mt-2 w-56 transition-all duration-200 ${activeDropdown === 'algorithms' ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                <div className="flex flex-col gap-1.5">
                  {categories.map(category => (
                    <a
                      key={category.id}
                      href={`#${category.id}`}
                      className="text-sm text-white/80 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {category.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <a 
              href="#about" 
              className="text-white/90 hover:text-white transition-colors text-sm font-medium"
            >
              About
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-1 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md transition-all duration-300 ${
          isOpen 
            ? 'max-h-screen opacity-100' 
            : 'max-h-0 opacity-0 pointer-events-none'
        } overflow-hidden`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
          <a 
            href="/" 
            className="text-white/90 hover:text-white py-2 transition-colors"
            onClick={toggleMenu}
          >
            Home
          </a>
          
          <div>
            <button 
              onClick={() => toggleDropdown('mobileAlgorithms')}
              className="flex items-center justify-between w-full text-white/90 hover:text-white py-2 transition-colors"
            >
              <span>Algorithms</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'mobileAlgorithms' ? 'rotate-180' : ''}`} />
            </button>
            
            <div className={`overflow-hidden transition-all duration-200 ${activeDropdown === 'mobileAlgorithms' ? 'max-h-60' : 'max-h-0'}`}>
              <div className="flex flex-col gap-1 pl-4 py-2">
                {categories.map(category => (
                  <a
                    key={category.id}
                    href={`#${category.id}`}
                    className="text-sm text-white/80 hover:text-white py-2 transition-colors"
                    onClick={toggleMenu}
                  >
                    {category.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <a 
            href="#about" 
            className="text-white/90 hover:text-white py-2 transition-colors"
            onClick={toggleMenu}
          >
            About
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;