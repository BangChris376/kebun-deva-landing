import { Button } from '@/components/ui/button';

const products = [
  {
    name: 'Alpukat Mentega',
    category: 'Alpukat',
    emoji: '🥑',
    minOrder: '100 kg',
  },
  {
    name: 'Kopi Arabika',
    category: 'Kopi',
    emoji: '☕',
    minOrder: '50 kg',
  },
  {
    name: 'Pete Super',
    category: 'Pete',
    emoji: '🫛',
    minOrder: '50 kg',
  },
  {
    name: 'Nangka Madu',
    category: 'Nangka',
    emoji: '🍈',
    minOrder: '100 kg',
  },
  {
    name: 'Durian Montong',
    category: 'Durian',
    emoji: '🍃',
    minOrder: '50 kg',
  },
  {
    name: 'Salak Pondoh',
    category: 'Salak',
    emoji: '🥥',
    minOrder: '100 kg',
  },
  {
    name: 'Rambutan Binjai',
    category: 'Rambutan',
    emoji: '🍒',
    minOrder: '100 kg',
  },
  {
    name: 'Pisang Cavendish',
    category: 'Pisang',
    emoji: '🍌',
    minOrder: '100 kg',
  },
  {
    name: 'Jeruk Bali',
    category: 'Jeruk Bali',
    emoji: '🍊',
    minOrder: '100 kg',
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-tropical-orange font-semibold tracking-widest uppercase mb-3">
            Produk Unggulan
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Buah Tropis Premium
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Kami menyediakan berbagai jenis buah tropis berkualitas tinggi langsung dari petani Indonesia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/30 shadow-soft hover:shadow-card transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="text-5xl animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                  {product.emoji}
                </div>
                <div className="flex-1">
                  <span className="text-xs font-semibold text-tropical-orange uppercase tracking-wider">
                    {product.category}
                  </span>
                  <h3 className="font-display text-xl font-bold text-foreground mt-1 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Min. Order: {product.minOrder}
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <Button variant="ghost" className="w-full text-primary hover:bg-primary/5">
                  Minta Penawaran →
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="tropical" size="lg">
            Lihat Semua Produk
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
