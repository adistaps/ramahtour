"use client"

import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const links = [
  ["Paket Tour", "paket"],
  ["Tentang Kami", "tentang"],
  ["Keunggulan", "keunggulan"],
  ["Alur Trip", "alur-trip"],
  ["FAQ", "faq"],
] as const

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 md:px-0 pointer-events-none transition-all duration-300">

      {/* Garis Putih dari Ujung ke Ujung di Bagian Paling Atas */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/50 z-0 pointer-events-none" />

      {/* Container Notch Utama - Glassmorphism */}
      <div className="relative flex items-center gap-5 md:gap-8 rounded-b-[28px] bg-white/10 backdrop-blur-md px-5 py-2.5 md:px-6 md:py-3 shadow-[0_8px_32px_rgba(0,0,0,0.1)] pointer-events-auto border-b border-x border-white/40 z-10">

        {/* Aksen Lekukan Kiri */}
        <div className="absolute top-0 -left-6 h-6 w-6 overflow-hidden pointer-events-none">
          <div className="absolute top-0 -left-6 h-12 w-12 rounded-full bg-transparent shadow-[0_0_0_40px_rgba(255,255,255,0.1)]" />
        </div>

        {/* Aksen Lekukan Kanan */}
        <div className="absolute top-0 -right-6 h-6 w-6 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 h-12 w-12 rounded-full bg-transparent shadow-[0_0_0_40px_rgba(255,255,255,0.1)]" />
        </div>

        {/* Logo Brand */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 transition-all hover:opacity-80 shrink-0"
        >
          <Image
            src="/logo.webp"
            alt="RAMAH Tour Logo"
            width={140}
            height={36}
            priority
            // Gunakan class `brightness-0 invert` jika logo asli Anda berwarna gelap agar berubah menjadi putih
            className="h-8 md:h-9 w-auto object-contain drop-shadow-md brightness-0 invert"
          />
        </a>

        {/* Menu Tengah (Font Putih) */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="px-3.5 py-1.5 text-[14px] font-semibold text-white hover:text-white/80 hover:bg-white/20 rounded-full transition-colors drop-shadow-sm"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Tombol Reservasi Dihapus - Sisa Toggle Mobile Saja */}
        <div className="flex items-center shrink-0">
          {/* Toggle Menu Mobile (Ikon Putih) */}
          <button
            aria-label={open ? "Tutup menu" : "Buka menu"}
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/40 md:hidden transition-colors"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {open && (
        <div className="absolute top-[110%] left-4 right-4 mx-auto max-w-sm pointer-events-auto z-20">
          <nav className="flex flex-col gap-1 rounded-[1.5rem] border border-white/40 bg-white/10 backdrop-blur-xl px-4 py-4 shadow-xl transition-all">
            {links.map(([label, id]) => (
              <a
                onClick={() => setOpen(false)}
                key={id}
                href={`#${id}`}
                className="rounded-xl px-4 py-3 text-[15px] font-semibold text-white hover:text-white/80 hover:bg-white/20 transition-colors drop-shadow-sm"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}