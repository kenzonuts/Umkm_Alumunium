"use client"

import { MessageCircle, Phone, MapPin } from "lucide-react"
import { type FormEvent, useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const text = encodeURIComponent(`Halo, nama saya ${formData.name}\nNomor: ${formData.phone}\n\n${formData.message}`)
    window.open(`https://wa.me/6281391063945?text=${text}`, "_blank")
  }

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-32 bg-background px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">Hubungi Kami</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Konsultasi gratis, estimasi pengerjaan ±5 hari
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            {/* Phone */}
            <div className="flex gap-4 animate-slide-up">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <Phone className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">WhatsApp / Telepon</h3>
                <a href="tel:+6281391063945" className="text-primary hover:underline text-sm sm:text-base">
                  +62 813-9106-3945
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex gap-4 animate-slide-up">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <MapPin className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Lokasi</h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  Jl. Raya Babakan, Jati Wetan, Jati,
                  <br />
                  Kec. Binangun, Kabupaten Cilacap,
                  <br />
                  Jawa Tengah 53281
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="https://wa.me/6281391063945"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover-metallic hover:shadow-lg transition transform hover:scale-105 mt-4 sm:mt-8 text-sm sm:text-base animate-fade-in"
            >
              <MessageCircle size={18} />
              Chat & Pesan Sekarang
            </a>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-foreground mb-2">
                Nama Lengkap
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 sm:py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-sm sm:text-base"
                placeholder="Masukkan nama Anda"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-foreground mb-2">
                Nomor Telepon / WhatsApp
              </label>
              <input
                type="tel"
                id="phone"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2 sm:py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-sm sm:text-base"
                placeholder="0812-3456-7890"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-foreground mb-2">
                Pesan / Deskripsi Kebutuhan
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2 sm:py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition resize-none text-sm sm:text-base"
                placeholder="Jelaskan kebutuhan dan detail proyek Anda..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover-metallic hover:shadow-lg transition transform hover:scale-105 text-sm sm:text-base animate-fade-in"
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
