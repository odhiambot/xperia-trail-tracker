
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Mountain, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="p-2 bg-orange-500 rounded-lg">
              <Mountain className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Xperia Adventure</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-white hover:text-orange-400 transition-colors font-medium ${
                isActive('/') ? 'text-orange-400' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              to="/adventures" 
              className={`text-white hover:text-orange-400 transition-colors font-medium ${
                isActive('/adventures') ? 'text-orange-400' : ''
              }`}
            >
              Adventures
            </Link>
            <Link 
              to="/trails" 
              className={`text-white hover:text-orange-400 transition-colors font-medium ${
                isActive('/trails') ? 'text-orange-400' : ''
              }`}
            >
              Trails
            </Link>
            <Link 
              to="/gear" 
              className={`text-white hover:text-orange-400 transition-colors font-medium ${
                isActive('/gear') ? 'text-orange-400' : ''
              }`}
            >
              Gear
            </Link>
            <Link 
              to="/about" 
              className={`text-white hover:text-orange-400 transition-colors font-medium ${
                isActive('/about') ? 'text-orange-400' : ''
              }`}
            >
              About
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button className="gradient-sunset text-white hover:opacity-90 transition-opacity">
              Book Adventure
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-white hover:text-orange-400 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-800 pt-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`text-white hover:text-orange-400 transition-colors font-medium ${
                  isActive('/') ? 'text-orange-400' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/adventures" 
                className={`text-white hover:text-orange-400 transition-colors font-medium ${
                  isActive('/adventures') ? 'text-orange-400' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Adventures
              </Link>
              <Link 
                to="/trails" 
                className={`text-white hover:text-orange-400 transition-colors font-medium ${
                  isActive('/trails') ? 'text-orange-400' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Trails
              </Link>
              <Link 
                to="/gear" 
                className={`text-white hover:text-orange-400 transition-colors font-medium ${
                  isActive('/gear') ? 'text-orange-400' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Gear
              </Link>
              <Link 
                to="/about" 
                className={`text-white hover:text-orange-400 transition-colors font-medium ${
                  isActive('/about') ? 'text-orange-400' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Button className="gradient-sunset text-white hover:opacity-90 transition-opacity w-full">
                Book Adventure
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
