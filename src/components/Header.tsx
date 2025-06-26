
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mountain, Menu, X, ShoppingCart, User, LogOut, Heart } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useCart } from '@/hooks/useCart';
import { useWishlist } from '@/hooks/useWishlist';
import { AuthModal } from './AuthModal';
import { CartModal } from './CartModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [cartModalOpen, setCartModalOpen] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();
  const { getTotalItems } = useCart();
  const { wishlistItems } = useWishlist();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActive = (path: string) => location.pathname === path;

  const handleAuthAction = (mode: 'signin' | 'signup') => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
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
              <button 
                onClick={() => scrollToSection('adventures')}
                className="text-white hover:text-orange-400 transition-colors font-medium"
              >
                Adventures
              </button>
              <button 
                onClick={() => scrollToSection('trails')}
                className="text-white hover:text-orange-400 transition-colors font-medium"
              >
                Trails
              </button>
              <button 
                onClick={() => scrollToSection('gear')}
                className="text-white hover:text-orange-400 transition-colors font-medium"
              >
                Gear
              </button>
              <Link 
                to="/about" 
                className={`text-white hover:text-orange-400 transition-colors font-medium ${
                  isActive('/about') ? 'text-orange-400' : ''
                }`}
              >
                About
              </Link>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              {user ? (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setCartModalOpen(true)}
                    className="text-white hover:text-orange-400 relative"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    {getTotalItems() > 0 && (
                      <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center text-xs bg-orange-500">
                        {getTotalItems()}
                      </Badge>
                    )}
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:text-orange-400 relative"
                  >
                    <Heart className="h-5 w-5" />
                    {wishlistItems.length > 0 && (
                      <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center text-xs bg-red-500">
                        {wishlistItems.length}
                      </Badge>
                    )}
                  </Button>

                  <Button asChild className="gradient-sunset text-white hover:opacity-90 transition-opacity">
                    <Link to="/booking">Book Adventure</Link>
                  </Button>

                  <Button
                    variant="ghost"
                    onClick={signOut}
                    className="text-white hover:text-orange-400"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="ghost"
                    onClick={() => handleAuthAction('signin')}
                    className="text-white hover:text-orange-400"
                  >
                    <User className="h-4 w-4 mr-2" />
                    Sign In
                  </Button>
                  
                  <Button
                    onClick={() => handleAuthAction('signup')}
                    className="gradient-sunset text-white hover:opacity-90 transition-opacity"
                  >
                    Book Adventure
                  </Button>
                </>
              )}
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
                <button 
                  onClick={() => scrollToSection('adventures')}
                  className="text-white hover:text-orange-400 transition-colors font-medium text-left"
                >
                  Adventures
                </button>
                <button 
                  onClick={() => scrollToSection('trails')}
                  className="text-white hover:text-orange-400 transition-colors font-medium text-left"
                >
                  Trails
                </button>
                <button 
                  onClick={() => scrollToSection('gear')}
                  className="text-white hover:text-orange-400 transition-colors font-medium text-left"
                >
                  Gear
                </button>
                <Link 
                  to="/about" 
                  className={`text-white hover:text-orange-400 transition-colors font-medium ${
                    isActive('/about') ? 'text-orange-400' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                
                {user ? (
                  <>
                    <Button
                      onClick={() => {
                        setCartModalOpen(true);
                        setIsMenuOpen(false);
                      }}
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700 justify-start"
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Cart ({getTotalItems()})
                    </Button>
                    
                    <Button asChild className="gradient-sunset text-white hover:opacity-90 transition-opacity w-full">
                      <Link to="/booking" onClick={() => setIsMenuOpen(false)}>Book Adventure</Link>
                    </Button>
                    
                    <Button
                      onClick={() => {
                        signOut();
                        setIsMenuOpen(false);
                      }}
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700 justify-start"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      onClick={() => {
                        handleAuthAction('signin');
                        setIsMenuOpen(false);
                      }}
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700 justify-start"
                    >
                      <User className="h-4 w-4 mr-2" />
                      Sign In
                    </Button>
                    
                    <Button
                      onClick={() => {
                        handleAuthAction('signup');
                        setIsMenuOpen(false);
                      }}
                      className="gradient-sunset text-white hover:opacity-90 transition-opacity w-full"
                    >
                      Book Adventure
                    </Button>
                  </>
                )}
              </div>
            </nav>
          )}
        </div>
      </header>

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        mode={authMode}
        onModeChange={setAuthMode}
      />

      <CartModal
        isOpen={cartModalOpen}
        onClose={() => setCartModalOpen(false)}
      />
    </>
  );
};

export default Header;
