import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-card to-background overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 sm:left-10 w-52 sm:w-72 h-52 sm:h-72 rounded-full border border-primary/20 opacity-20 animate-pulse-glow"></div>
        <div className="absolute -bottom-20 right-0 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 rounded-full border border-accent/15 opacity-15 animate-float"></div>
        <div className="absolute top-1/2 left-1/3 w-60 sm:w-80 h-60 sm:h-80 rounded-full blur-3xl bg-primary/5 opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
        <div className="animate-in space-y-6 sm:space-y-8">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-secondary rounded-full border border-primary/40 hover-metallic animate-slide-down text-xs sm:text-sm">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-muted-foreground">Pengerjaan Cepat • Custom • UMKM Lokal</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight animate-fade-in">
            Spesialis Lemari &<br className="hidden sm:block" />
            <span className="text-primary animate-pulse">Konstruksi Aluminium</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-slide-up px-2">
            Kuat, tahan karat, custom desain, pengerjaan ±5 hari
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4 px-2">
            <Link
              href="https://wa.me/6281391063945"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover-metallic hover:shadow-lg transition transform hover:scale-110 duration-300 animate-fade-in text-sm sm:text-base"
            >
              Konsultasi Gratis
              <ArrowRight size={18} className="hidden sm:block" />
            </Link>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-secondary text-foreground border border-primary/40 rounded-lg font-semibold hover-metallic hover:border-primary hover:bg-secondary/80 transition duration-300 animate-fade-in text-sm sm:text-base"
            >
              Lihat Layanan Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
