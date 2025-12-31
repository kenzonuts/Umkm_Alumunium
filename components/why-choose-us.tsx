import { CheckCircle2 } from "lucide-react"

const features = [
  {
    title: "Pengerjaan Cepat ±5 Hari",
    description: "Kami berkomitmen menyelesaikan proyek Anda dalam waktu singkat tanpa mengorbankan kualitas",
  },
  {
    title: "Anti Karat & Tahan Lama",
    description: "Material berkualitas premium dengan perlakuan khusus untuk ketahanan maksimal",
  },
  {
    title: "Custom Desain Sesuai Kebutuhan",
    description: "Desain fleksibel yang dapat disesuaikan dengan preferensi dan spesifikasi Anda",
  },
  {
    title: "Pengerjaan Rapi & Profesional",
    description: "Tim berpengalaman dengan standar kualitas tinggi dalam setiap detail",
  },
  {
    title: "Harga Bersahabat",
    description: "Kualitas premium dengan harga yang kompetitif untuk UMKM lokal",
  },
  {
    title: "Survey Lokasi Cilacap",
    description: "Melayani pengukuran lokasi dan konsultasi gratis untuk area Cilacap dan sekitarnya",
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why" className="py-16 sm:py-20 md:py-32 bg-card px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Kenapa Pilih Kami?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Komitmen kami adalah memberikan solusi aluminium terbaik dengan layanan profesional
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex gap-4 animate-in hover:translate-x-1 transform transition duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0 mt-1">
                <CheckCircle2 className="text-primary animate-pulse-glow" size={24} />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1 sm:mb-2">{feature.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
