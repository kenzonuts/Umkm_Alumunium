"use client"

import { MessageCircle } from "lucide-react"

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/6281391063945"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover-metallic hover:scale-110 transition z-40 group"
    >
      <MessageCircle size={28} />
      <span className="absolute right-20 bg-primary text-primary-foreground px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none">
        Chat dengan kami
      </span>
    </a>
  )
}
