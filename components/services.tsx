import { Package, UtensilsCrossed, Grid3X3, Maximize2, Palette } from "lucide-react"

const services = [
  {
    icon: Package,
    title: "Lemari Aluminium",
    description: "Lemari custom dengan desain modern, tahan karat, dan pengerjaan rapi",
  },
  {
    icon: UtensilsCrossed,
    title: "Kitchen Set Aluminium",
    description: "Peralatan dapur premium dengan material berkualitas dan tahan lama",
  },
  {
    icon: Grid3X3,
    title: "Rak & Etalase Aluminium",
    description: "Display dan rak display untuk kebutuhan retail dan home organization",
  },
  {
    icon: Maximize2,
    title: "Pintu & Jendela Aluminium",
    description: "Solusi akses berkualitas dengan desain elegan dan sealing sempurna",
  },
  {
    icon: Palette,
    title: "Custom Aluminium",
    description: "Produk custom sesuai kebutuhan dan spesifikasi Anda yang unik",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 md:py-32 bg-background px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">Layanan Kami</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Kami menyediakan solusi aluminium lengkap dengan kualitas terbaik dan pengerjaan profesional
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group p-6 sm:p-8 bg-card border border-border rounded-lg hover-metallic hover:border-primary/50 hover:bg-card/80 transition animate-fade-in hover:translate-y--2 transform duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:from-primary/40 group-hover:to-accent/20 transition duration-300 group-hover:scale-110">
                  <Icon className="text-primary group-hover:text-accent transition duration-300" size={24} />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
