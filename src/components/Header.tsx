import { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Produk', href: '#products' },
  { name: 'Tentang Kami', href: '#about' },
  { name: 'Kontak', href: '#contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top announcement bar */}
      <div className="bg-primary text-primary-foreground py-2 text-center text-sm">
        <p className="animate-pulse-soft">
          🍇 Pengiriman Gratis untuk Pesanan di Atas Rp 5.000.000 ke Seluruh Indonesia 🍇
        </p>
      </div>
      
      {/* Main header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-card/95 backdrop-blur-md shadow-soft' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <span className="text-3xl">🌿</span>
              <span className="font-display text-2xl md:text-3xl font-bold text-primary">
                Kebun Deva
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground/80 hover:text-primary font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-tropical-orange after:transition-all hover:after:w-full"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop CTA & Social */}
            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <a href="#" className="hover:text-primary transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <Facebook size={20} />
                </a>
              </div>
              <Button variant="hero" size="default">
                Hubungi Kami
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-foreground p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card border-t border-border animate-fade-in">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground/80 hover:text-primary font-medium py-2 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button variant="hero" className="mt-2">
                Hubungi Kami
              </Button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
