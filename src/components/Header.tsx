
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mountain, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-primary rounded-lg">
              <Mountain className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Xperia Adventure</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="#adventures" className="text-foreground hover:text-primary transition-colors font-medium">
              Adventures
            </a>
            <a href="#trails" className="text-foreground hover:text-primary transition-colors font-medium">
              Trails
            </a>
            <a href="#gear" className="text-foreground hover:text-primary transition-colors font-medium">
              Gear
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </a>
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
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
                Home
              </a>
              <a href="#adventures" className="text-foreground hover:text-primary transition-colors font-medium">
                Adventures
              </a>
              <a href="#trails" className="text-foreground hover:text-primary transition-colors font-medium">
                Trails
              </a>
              <a href="#gear" className="text-foreground hover:text-primary transition-colors font-medium">
                Gear
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
                About
              </a>
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
