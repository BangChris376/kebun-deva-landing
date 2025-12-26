import farmImage from '@/assets/farm-landscape.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-card">
              <img
                src={farmImage}
                alt="Kebun buah Kebun Deva di Indonesia"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-2xl shadow-card border border-border">
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <p className="font-display text-3xl font-bold text-primary">10+</p>
                  <p className="text-sm text-muted-foreground">Tahun</p>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <p className="font-display text-3xl font-bold text-primary">500+</p>
                  <p className="text-sm text-muted-foreground">Mitra</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-tropical-orange font-semibold tracking-widest uppercase mb-3">
              Tentang Kami
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Langsung dari Kebun ke Bisnis Anda
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Kebun Deva adalah distributor buah-buahan tropis terpercaya yang menghubungkan petani lokal Indonesia dengan bisnis Anda. Kami berkomitmen untuk menyediakan produk berkualitas tinggi dengan harga yang kompetitif.
              </p>
              <p>
                Dengan jaringan petani yang tersebar di berbagai wilayah Indonesia, kami mampu menyediakan pasokan buah segar sepanjang tahun. Sistem cold chain kami memastikan buah tetap segar hingga sampai di tangan Anda.
              </p>
            </div>

            {/* Values */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg">🌱</span>
                </div>
                <span className="font-medium text-foreground">Berkelanjutan</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg">🤝</span>
                </div>
                <span className="font-medium text-foreground">Kemitraan Adil</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg">🎯</span>
                </div>
                <span className="font-medium text-foreground">Tepat Waktu</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg">💯</span>
                </div>
                <span className="font-medium text-foreground">Kualitas Terjamin</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
