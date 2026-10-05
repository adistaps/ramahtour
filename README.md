# RAMAH Tour Lombok — Dokumentasi Website

Landing page untuk **RAMAH Tour Lombok** ("Your Lombok Escape, Made Easy"): private trip, custom itinerary, airport transfer, hotel & villa, island hopping, serta dokumentasi foto & video.

## Menjalankan Secara Lokal

Prasyarat: Node.js 18+ dan pnpm.

```bash
pnpm install
pnpm dev
```

Buka `http://localhost:3000`.

## Build Produksi

```bash
pnpm build
pnpm start
```

## Cara Update Konten

Semua konten ada di `src/components/sections/`. Tidak ada CMS atau database.

| Yang Ingin Diubah | File |
|---|---|
| Nomor WhatsApp (6282342200038) | cari `wa.me/` di `src/components/sections/*` |
| Paket & harga | `Pricing.tsx` (dan daftar paket di `Hero.tsx`) |
| Contoh itinerary | `Schedule.tsx` |
| FAQ | `FAQ.tsx` (array `faqs`) |
| Ulasan pelanggan | `Testimonials.tsx` (array `reviews`, masih placeholder) |
| Menu navigasi | `Navbar.tsx` (array `links`) |
| SEO, domain, JSON-LD | `src/app/layout.tsx`, `robots.ts`, `sitemap.ts` |

## Aset

Logo dan foto ada di folder `public/` (`logo.webp`, `hero.webp`, `banner.webp`, `about.webp`, `about1.webp`, `1.webp` – `4.webp`). Timpa file dengan nama yang sama untuk mengganti.

## Kontak

WhatsApp: 0823 4220 0038 · Instagram: @ramahtourlombok · Lombok, Indonesia
