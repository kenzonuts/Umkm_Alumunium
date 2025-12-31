import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Bapak Agus",
    location: "Cilacap",
    text: "Pengerjaan cepat, hasil rapi dan kuat. Tidak sampai seminggu sudah jadi. Sangat puas dengan hasilnya!",
    rating: 5,
  },
  {
    name: "Ibu Siti",
    location: "Binangun",
    text: "Kitchen set aluminium yang saya pesan terselesaikan dengan sangat profesional. Desain sesuai yang saya inginkan.",
    rating: 5,
  },
  {
    name: "Pak Hendra",
    location: "Cilacap",
    text: "Layanan konsultasi gratis mereka sangat membantu. Hasilnya melebihi ekspektasi saya. Rekomendasi untuk semua orang!",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 md:py-32 bg-card px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Testimoni Pelanggan
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Kepuasan pelanggan adalah prioritas utama kami
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 bg-background border border-border rounded-lg hover-metallic transition animate-fade-in hover:translate-y--2 transform duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground mb-6 leading-relaxed italic text-sm sm:text-base">"{testimonial.text}"</p>

              {/* Author */}
              <div>
                <p className="font-semibold text-foreground text-sm sm:text-base">{testimonial.name}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
