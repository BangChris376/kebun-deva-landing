import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-tropical-yellow font-semibold tracking-widest uppercase mb-3">
            Mari Bermitra
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Siap Meningkatkan Bisnis Anda?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Hubungi tim kami sekarang untuk mendapatkan penawaran terbaik dan mulai bermitra dengan Kebun Deva.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              variant="tropical"
              size="xl"
              className="gap-2"
              asChild
            >
              <a
                href="https://wa.me/6281390468670?text=Halo!%20saya%20ingin%20memesan%20%5Btuliskan%20keperluan%5D%2C%20apakah%20bisa%3F"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone size={20} />
                Hubungi Kami
              </a>
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              asChild
            >
              <a href="mailto:netdeva12@gmail.com">
                <Mail size={20} className="mr-2" />
                Kirim Email
              </a>
            </Button>
          </div>

          {/* Contact info cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-primary-foreground/10 rounded-2xl p-6 backdrop-blur-sm">
              <Phone className="mx-auto mb-4 opacity-80" size={28} />
              <h3 className="font-semibold mb-2">Telepon</h3>
              <p className="text-primary-foreground/80">+62 813-9046-8670</p>
            </div>
            <div className="bg-primary-foreground/10 rounded-2xl p-6 backdrop-blur-sm">
              <Mail className="mx-auto mb-4 opacity-80" size={28} />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-primary-foreground/80">netdeva12@gmail.com</p>
            </div>
            <div className="bg-primary-foreground/10 rounded-2xl p-6 backdrop-blur-sm">
              <MapPin className="mx-auto mb-4 opacity-80" size={28} />
              <h3 className="font-semibold mb-2">Lokasi</h3>
              <p className="text-primary-foreground/80">Kebondalem, Jambu, Semarang, Jateng</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
