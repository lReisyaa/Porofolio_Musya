# Mosyarofah | Personal Web Portfolio

Selamat datang di repository portofolio pribadi saya! Website ini dibuat sebagai wadah untuk menampilkan profil, keahlian, pengalaman, serta project yang telah saya kerjakan selama menempuh studi di Teknik Informatika.

## Preview Portofolio

![Preview Portofolio](screenshots/Screenshot 2026-10-28 221154.png)

## Tentang Project Ini

Portofolio ini didesain dengan gaya **Editorial/Luxury** yang memadukan tipografi elegan (Serif) dengan skema warna gelap (Dark Mode) dan aksen warna Rose/Merah. Tujuannya adalah untuk memberikan kesan profesional, modern, dan berbeda dari template portofolio pada umumnya.

## Teknologi yang Digunakan

Website ini dibangun menggunakan tech stack modern:

- **Framework:** [Next.js 15](https://nextjs.org/) (React.js)
- **Bahasa:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animasi:** Custom React `IntersectionObserver` (Scroll Reveal)
- **Ikon:** [Simple Icons](https://simpleicons.org/)

## Fitur Utama

- **Desain Editorial/Luxury:** Tampilan minimalis dengan perpaduan font Serif dan Sans-Serif.
- **Dark & Light Mode:** Fitur ganti tema yang tersimpan secara otomatis di localStorage browser.
- **Fully Responsive:** Nyaman dibuka di layar HP, Tablet, maupun Desktop.
- **Scroll Animations:** Efek transisi halus saat pengunjung melakukan scroll.
- **Real Projects Showcase:** Menampilkan screenshot asli dari project yang telah dikerjakan.

## Struktur Folder

```text
Porofolio_Musya/
├── public/              # Aset statis (gambar, favicon, dll)
├── screenshots/         # Gambar preview untuk README
├── src/
│   ├── app/             # Halaman utama Next.js (App Router)
│   ├── components/      # Komponen UI (Navbar, Hero, About, dll)
│   └── lib/             # Data statis (data.ts)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
