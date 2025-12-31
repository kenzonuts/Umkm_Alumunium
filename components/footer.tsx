import { Facebook, Instagram, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="animate-fade-in">
            <h3 className="text-base sm:text-lg font-bold text-foreground mb-3 sm:mb-4">Gespheng Aluminium</h3>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
              Spesialis lemari & konstruksi aluminium berkualitas tinggi untuk kebutuhan Anda.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in">
            <h4 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Link Cepat</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition text-xs sm:text-sm">
                  Layanan
                </a>
              </li>
              <li>
                <a href="#why" className="text-muted-foreground hover:text-primary transition text-xs sm:text-sm">
                  Kenapa Kami
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-muted-foreground hover:text-primary transition text-xs sm:text-sm">
                  Galeri
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition text-xs sm:text-sm">
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in">
            <h4 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Kontak</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="tel:+6281391063945" className="text-muted-foreground hover:text-primary transition">
                  +62 813-9106-3945
                </a>
              </li>
              <li className="text-muted-foreground leading-relaxed">
                Jl. Raya Babakan, Jati Wetan
                <br />
                Cilacap, Jawa Tengah 53281
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="animate-fade-in">
            <h4 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Ikuti Kami</h4>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/gespheng.aluminium/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary transition"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/gesphengaluminium/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary transition"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://wa.me/6281391063945"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary transition"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-6 sm:pt-8">
          <p className="text-center text-muted-foreground text-xs sm:text-sm">
            © 2025 Gespheng Aluminium. Semua hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  )
}
