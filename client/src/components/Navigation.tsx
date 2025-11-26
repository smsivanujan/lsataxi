import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md shadow-md' : 'bg-black/60 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 text-white font-bold text-xl md:text-2xl tracking-tight hover-elevate rounded-md px-3 py-2"
            data-testid="button-logo"
          >
            <span className="text-primary">LSA</span> Taxi
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-primary transition-colors font-medium"
              data-testid="link-services"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('fleet')}
              className="text-white hover:text-primary transition-colors font-medium"
              data-testid="link-fleet"
            >
              Fleet
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-primary transition-colors font-medium"
              data-testid="link-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-primary transition-colors font-medium"
              data-testid="link-contact"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection('booking')}
              variant="default"
              data-testid="button-book-now"
            >
              Book Now
            </Button>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-white hover:text-primary transition-colors font-medium py-2 px-3 rounded-md hover-elevate"
              data-testid="mobile-link-services"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('fleet')}
              className="block w-full text-left text-white hover:text-primary transition-colors font-medium py-2 px-3 rounded-md hover-elevate"
              data-testid="mobile-link-fleet"
            >
              Fleet
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-white hover:text-primary transition-colors font-medium py-2 px-3 rounded-md hover-elevate"
              data-testid="mobile-link-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-white hover:text-primary transition-colors font-medium py-2 px-3 rounded-md hover-elevate"
              data-testid="mobile-link-contact"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection('booking')}
              variant="default"
              className="w-full"
              data-testid="mobile-button-book-now"
            >
              Book Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
