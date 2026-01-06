import { Button } from '@/components/ui/button';
import durianIcon from '@/assets/durian-icon.png';
import salakIcon from '@/assets/salak-icon.png';

type Product = {
  name: string;
  category: string;
  emoji?: string;
  image?: string;
  minOrder: string;
};

const products: Product[] = [
  {
    name: 'Alpukat',
    category: 'Alpukat',
    emoji: '🥑',
    minOrder: '10 kg',
  },
  {
    name: 'Kopi',
    category: 'Kopi',
    emoji: '☕',
    minOrder: '5 kg',
  },
  {
    name: 'Pete',
    category: 'Pete',
    emoji: '🫛',
    minOrder: '5 kg',
  },
  {
    name: 'Nangka',
    category: 'Nangka',
    emoji: '🍈',
    minOrder: '10 kg',
  },
  {
    name: 'Durian ',
    category: 'Durian',
    image: durianIcon,
    minOrder: '5 kg',
  },
  {
    name: 'Salak',
    category: 'Salak',
    image: salakIcon,
    minOrder: '10 kg',
  },
  {
    name: 'Rambutan',
    category: 'Rambutan',
    emoji: '🍒',
    minOrder: '10 kg',
  },
  {
    name: 'Pisang',
    category: 'Pisang',
    emoji: '🍌',
    minOrder: '10 kg',
  },
  {
    name: 'Jeruk Bali',
    category: 'Jeruk Bali',
    emoji: '🍊',
    minOrder: '10 kg',
  },
];

const ProductsSection = () => {

  const phoneNumber = "6281390468670";

 
  const getWhatsAppLink = (productName: string) => {
    const message = `Halo! Admin KebunDeva! saya tertarik dengan ${productName}, bolehkah saya mengetahui harga dan penawaran nya?`;
  
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

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
                {product.image ? (
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-14 h-14 object-contain animate-float"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  />
                ) : (
                  <div className="text-5xl animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                    {product.emoji}
                  </div>
                )}
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
               
                <Button asChild variant="ghost" className="w-full text-primary hover:bg-primary/5 cursor-pointer">
                  <a 
                    href={getWhatsAppLink(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Minta Penawaran →
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;