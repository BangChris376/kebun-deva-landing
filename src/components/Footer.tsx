import { Instagram, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🌿</span>
              <span className="font-display text-2xl font-bold">Kebun Deva</span>
            </div>
            <p className="text-primary-foreground/70 max-w-md mb-6">
              Distributor buah-buahan tropis terpercaya di Indonesia. Menyediakan produk segar berkualitas tinggi untuk bisnis Anda.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-tropical-orange transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-tropical-orange transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-tropical-orange transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Navigasi</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-tropical-orange transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="text-primary-foreground/70 hover:text-tropical-orange transition-colors">
                  Produk
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/70 hover:text-tropical-orange transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/70 hover:text-tropical-orange transition-colors">
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Produk</h4>
            <ul className="space-y-3">
              <li>
                <a href="#products" className="text-primary-foreground/70 hover:text-tropical-orange transition-colors">
                  Alpukat
                </a>
              </li>
              <li>
                <a href="#products" className="text-primary-foreground/70 hover:text-tropical-orange transition-colors">
                  Durian
                </a>
              </li>
              <li>
                <a href="#products" className="text-primary-foreground/70 hover:text-tropical-orange transition-colors">
                  Pisang
                </a>
              </li>
              <li>
                <a href="#products" className="text-primary-foreground/70 hover:text-tropical-orange transition-colors">
                  Buah Lainnya
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © 2024 Kebun Deva. Seluruh hak cipta dilindungi.
          </p>
          <p className="text-primary-foreground/50 text-sm">
            Distributor Buah Tropis Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
