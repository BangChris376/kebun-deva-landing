import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-fruits.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Buah-buahan tropis Indonesia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl animate-fade-in-up">
          <p className="text-tropical-orange font-semibold tracking-widest uppercase mb-4 animate-slide-in" style={{ animationDelay: '0.2s' }}>
            Distributor Buah Segar Indonesia
          </p>
          
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight" style={{ animationDelay: '0.3s' }}>
            Wholesale <br />
            <span className="text-primary">Kebun Deva</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg" style={{ animationDelay: '0.4s' }}>
            Terima kasih atas minat Anda untuk bermitra dengan Kebun Deva. Misi kami adalah menyediakan buah-buahan tropis berkualitas tinggi untuk bisnis Anda di seluruh Indonesia.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4" style={{ animationDelay: '0.5s' }}>
            <Button variant="hero" size="xl">
              Mulai Bermitra
            </Button>
            <Button variant="outline-forest" size="xl">
              Lihat Katalog
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap items-center gap-8 text-muted-foreground" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span className="text-sm font-medium">100% Buah Segar</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span className="text-sm font-medium">Pengiriman Cepat</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span className="text-sm font-medium">Harga Grosir</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
