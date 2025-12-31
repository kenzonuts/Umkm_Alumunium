import Image from "next/image"
import bufetTv from "./Galeri/Bufet_Tv.png"
import etalaseObat from "./Galeri/Etalase_obat_elektronik.png"
import kitchenSet from "./Galeri/Kitchen_set.png"
import lemari from "./Galeri/Lemari.png"
import lemariHias from "./Galeri/Lemari_Hias.png"
import partisiKaca from "./Galeri/Partisi_Kaca.png"
import partisiKaca2 from "./Galeri/Partisi_Kaca2.png"
import pintuKamar from "./Galeri/Pintu_Kamar.png"
import rakPiring from "./Galeri/Rak_Piring.png"

const galleryItems = [
  { id: 1, title: "Bufet Tv", description: "Bufet Tv", image: bufetTv },
  { id: 2, title: "Etalase Obat Elektronik", description: "Etalase Obat Elektronik", image: etalaseObat },
  { id: 3, title: "Kitchen Set", description: "Kitchen Set", image: kitchenSet },
  { id: 4, title: "Lemari", description: "Lemari", image: lemari },
  { id: 5, title: "Lemari Hias", description: "Lemari Hias", image: lemariHias },
  { id: 6, title: "Partisi Kaca", description: "Partisi Kaca", image: partisiKaca },
  { id: 7, title: "Partisi Kaca 2", description: "Partisi Kaca 2", image: partisiKaca2 },
  { id: 8, title: "Pintu Kamar", description: "Pintu Kamar", image: pintuKamar },
  { id: 9, title: "Rak Piring", description: "Rak Piring", image: rakPiring },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 sm:py-20 md:py-32 bg-background px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">Galeri Kami</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Galeri proyek-proyek terbaru dan terbaik dari Gespheng Aluminium
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg border border-border bg-secondary hover-metallic transition cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative w-full aspect-square bg-gradient-to-br from-secondary to-muted flex items-center justify-center overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-primary/10 opacity-60 sm:opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4 sm:p-6">
                  <h3 className="text-sm sm:text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-accent text-xs sm:text-sm font-medium">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
