import { Truck, Leaf, Award, Users } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'Buah Segar Pilihan',
    description: 'Dipilih langsung dari kebun terbaik di Indonesia, menjamin kesegaran dan kualitas premium.',
  },
  {
    icon: Truck,
    title: 'Pengiriman Cepat',
    description: 'Sistem logistik terintegrasi untuk pengiriman cepat ke seluruh Indonesia.',
  },
  {
    icon: Award,
    title: 'Jaminan Kualitas',
    description: 'Standar kualitas ketat dengan jaminan penggantian jika tidak sesuai.',
  },
  {
    icon: Users,
    title: 'Mitra Terpercaya',
    description: 'Sudah dipercaya oleh ratusan bisnis retail, hotel, dan restoran.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-tropical-orange font-semibold tracking-widest uppercase mb-3">
            Mengapa Memilih Kami
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Keunggulan Kebun Deva
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <feature.icon size={28} className="text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
