import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  onAdminClick?: () => void;
}

export const Navigation = ({ onAdminClick }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass shadow-brand-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">H+</span>
            </div>
            <h2 className="text-2xl font-bold text-gradient-primary">HomeValue+</h2>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('recommendations')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Recommendations
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
            <Button 
              variant="outline"
              size="sm"
              onClick={onAdminClick}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Admin
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass border-t border-border/20 animate-fade-up">
            <div className="p-6 space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('recommendations')}
                className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Recommendations
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Contact
              </button>
              <Button 
                variant="outline"
                size="sm"
                onClick={() => {
                  onAdminClick?.();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Admin Login
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};