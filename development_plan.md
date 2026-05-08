# 📋 Setia Tani - Web Development Plan & Priorities

Dokumen ini berisi panduan langkah demi langkah dan prioritas pengerjaan untuk membangun website *company profile* Setia Tani agar terstruktur, responsif, dan rapi.

---

## 🟢 Fase 1: Inisialisasi Proyek & Setup Dasar (Prioritas Tertinggi)
*Fase ini fokus pada penyiapan fondasi proyek agar proses coding selanjutnya jauh lebih mudah dan konsisten.*

- [ ] **Inisialisasi Proyek Next.js**
  - Buka terminal dan jalankan: `npx create-next-app@latest setia-tani`
  - Pilih konfigurasi: App Router (Yes), Tailwind CSS (Yes), TypeScript (opsional, tapi disarankan).
- [ ] **Konfigurasi Tema & Desain Sistem (Tailwind)**
  - Buka `tailwind.config.ts` dan daftarkan warna-warna *brand* dari desain Figma kamu. Ini akan sangat mempermudah proses *styling*.
  - *Contoh Warna:*
    - Primary Teal: `#006767`, `#008282`
    - Secondary Teal/Cyan: `#8FF3F2`, `#5EEAD4`
    - Blue Accents: `#1C648E`, `#90CDFD`
    - Backgrounds: `#F6FAF9`, `#F0F4F4`, `#EAEFEE`
- [ ] **Setup Font Global**
  - Import `Plus Jakarta Sans` (untuk Heading) dan `Manrope` (untuk teks biasa) menggunakan `next/font/google` di dalam file `app/layout.tsx`.
- [ ] **Persiapan Aset Visual**
  - Export logo, gambar produk, gambar kegiatan, dan background dari Figma.
  - Pastikan ukurannya sudah dikompresi (gunakan format `.webp` untuk performa terbaik).
  - Masukkan ke dalam folder `public/images/`.

---

## 🟡 Fase 2: Pembuatan Komponen Inti (Prioritas Menengah)
*Daripada membuat seluruh halaman sekaligus, buatlah komponen-komponen kecil yang sering dipakai berulang kali terlebih dahulu.*

- [ ] **Buat Komponen `Button` (Tombol)**
  - Karena ada banyak tombol (Hubungi Kami, Pesan via WhatsApp), buat satu komponen *reusable* dengan berbagai variasi (*primary*, *outline*, dll).
- [ ] **Buat Komponen `Navbar` (Header)**
  - Buat dengan Flexbox (`flex justify-between items-center`).
  - *Challenge:* Buat agar navigasinya disembunyikan dan berubah jadi *Hamburger Menu* saat dibuka di HP.
- [ ] **Buat Komponen `ProductCard`**
  - Komponen berisi gambar produk, nama produk, harga, dan tombol pesan. Ini akan dipakai berulang di bagian "Produk Pilihan Kami".
- [ ] **Buat Komponen `Footer`**

---

## 🟠 Fase 3: Merakit Halaman Utama / Landing Page (Prioritas Lanjutan)
*Gabungkan komponen yang sudah dibuat menjadi satu halaman utuh `app/page.tsx`. Ingat: Gunakan Flexbox/Grid, jangan gunakan `position: absolute` seperti di Figma.*

- [ ] **Hero Section (Paling Atas)**
  - Tampilkan teks logo besar "SETIA" dan deskripsi produk lokal.
  - Terapkan background *gradient* putih/hijau muda.
- [ ] **Features Section (Keunggulan Kami)**
  - Gunakan **CSS Grid** (`grid-cols-1 md:grid-cols-2 lg:grid-cols-4`) agar berbaris ke samping di laptop, tapi bertumpuk ke bawah di HP.
- [ ] **Product Grid Section**
  - Gunakan CSS Grid lagi dan panggil komponen `ProductCard` yang sudah kamu buat di Fase 2.
- [ ] **Media Section (Kegiatan & Liputan)**
  - Tampilkan desain berita/artikel (Pemberdayaan Petani, dll).
- [ ] **CTA (Call To Action) Section**
  - *Banner* besar berwarna Teal di bawah halaman, lengkap dengan teks ajakan dan tombol "Hubungi Kami".

---

## 🔴 Fase 4: Finalisasi & Deployment (Tahap Akhir)
*Langkah pemolesan agar website siap rilis ke publik.*

- [ ] **Audit Responsivitas (Mobile-Friendly)**
  - Buka *Developer Tools* di browser (tekan F12), lalu tes tampilan di berbagai ukuran layar (iPhone, iPad, dsb). Pastikan font tidak kebesaran dan elemen tidak tumpah.
- [ ] **Optimasi SEO (Search Engine Optimization)**
  - Tambahkan meta data di `layout.tsx` (Title: "Setia Tani - The Real Local Product", Description, dan gambar Open Graph). Ini akan membuat *preview* link bagus saat di-*share* ke WhatsApp.
- [ ] **Deployment via Vercel**
  - Push kode terakhirmu ke repository GitHub.
  - Login ke [Vercel](https://vercel.com/), *import* repository GitHub tersebut, dan klik *Deploy*. Website kamu akan langsung online (contoh: `setia-tani.vercel.app`).
