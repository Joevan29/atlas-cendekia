# Atlas Cendekia: An Immersive Learning Experience

[](https://shields.io/)
[](https://nextjs.org/)
[](https://tailwindcss.com/)
[](https://ui.shadcn.com/)

Selamat datang di **Atlas Cendekia**, sebuah platform *educourse* yang didesain ulang untuk mengubah cara belajar menjadi sebuah petualangan yang imersif dan adiktif. Proyek ini meninggalkan konsep e-learning tradisional yang membosankan dan menyajikannya dalam bentuk dunia fantasi yang bisa dijelajahi.

Daripada melihat daftar kursus yang statis, siswa diajak untuk menjelajahi peta dunia interaktif di mana setiap benua, kota, dan landmark merepresentasikan bidang ilmu dan bab pelajaran.

## 🌟 Fitur Utama

Platform ini dibangun dengan serangkaian komponen interaktif yang dirancang untuk memberikan pengalaman belajar yang terasa seperti game.

### 1\. **Peta Dunia Interaktif (Interactive World Map)**

Navigasi utama platform adalah sebuah peta fantasi yang indah. Setiap "landmark" di peta adalah modul pembelajaran yang bisa dieksplorasi.

  - **HUD (Heads-Up Display):** Informasi penting seperti profil pemain dan misi harian ditampilkan secara elegan di atas peta.
  - **Landmark Dinamis:** Ikon landmark memiliki animasi halus dan memberikan umpan balik visual saat berinteraksi.

### 2\. **Detail Ekspedisi (Landmark Detail Modal)**

Saat sebuah landmark diklik, sebuah panel detail holografik akan muncul, memberikan informasi lengkap tentang modul pelajaran tersebut.

  - **Informasi Lengkap:** Menampilkan deskripsi, estimasi waktu, hadiah (XP), tingkat kesulitan, dan prasyarat.
  - **Desain Imersif:** Tampilan dibuat menyerupai cetak biru (blueprint) atau gulungan kuno dengan sentuhan futuristik.

### 3\. **Indeks Atlas (Atlas Index)**

Sebuah panel *slide-in* yang berfungsi sebagai "daftar isi" dari semua lokasi yang telah atau akan ditemukan di peta, memungkinkan navigasi cepat.

  - **Pencarian & Filter:** Siswa dapat dengan mudah mencari lokasi atau subjek tertentu.
  - **Progres Sekilas:** Setiap entri menampilkan progres penyelesaian, memudahkan siswa melacak perjalanan belajar mereka.

### 4\. **Fitur Sosial & Personalisasi (Mendatang)**

Untuk meningkatkan keterlibatan, fitur-fitur sosial dan personalisasi sedang dalam pengembangan aktif.

  - **Guild Hall:** Memungkinkan siswa membentuk kelompok belajar, berkomunikasi, dan menyelesaikan misi bersama.
  - **Studiolo (Ruang Belajar Pribadi):** Area personal yang dapat dihias dengan piala dan artefak yang didapat dari pencapaian belajar.
  - **Cosmic Skill Tree:** Pohon keahlian untuk membuka bonus-bonus pasif yang mendukung gaya belajar siswa.
  - **World Events:** Event terbatas waktu yang memberikan bonus dan hadiah eksklusif untuk menjaga platform tetap dinamis.

## 💻 Teknologi yang Digunakan

Proyek ini dibangun menggunakan tumpukan teknologi modern untuk memastikan pengalaman pengguna yang cepat, responsif, dan kaya secara visual.

  - **Framework:** [Next.js](https://nextjs.org/) (App Router)
  - **Bahasa:** [TypeScript](https://www.typescriptlang.org/)
  - **Styling:** [Tailwind CSS](https://tailwindcss.com/)
  - **Komponen UI:** [shadcn/ui](https://ui.shadcn.com/) & [Radix UI](https://www.radix-ui.com/)
  - **Deployment:** [Vercel](https://vercel.com/)

## 🚀 Memulai Proyek

Ikuti langkah-langkah di bawah ini untuk menjalankan proyek ini di lingkungan lokal Anda.

### Prasyarat

Pastikan Anda telah menginstal versi terbaru dari:

  - [Node.js](https://nodejs.org/) (v18.18.0 atau lebih baru)
  - [pnpm](https://pnpm.io/installation) (direkomendasikan)

### Instalasi

1.  **Clone repositori:**
    ```bash
    git clone https://github.com/joevan29/atlas-cendekia.git
    ```
2.  **Masuk ke direktori proyek:**
    ```bash
    cd atlas-cendekia
    ```
3.  **Instal dependensi:**
    ```bash
    pnpm install
    ```

### Menjalankan Server Pengembangan

Setelah instalasi selesai, jalankan perintah berikut untuk memulai server pengembangan lokal:

```bash
pnpm dev
```

Buka [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) di browser Anda untuk melihat hasilnya.

## 🗺️ Cara Menggunakan

1.  **Jelajahi Peta:** Gunakan mouse untuk menggeser dan zoom pada peta dunia untuk menemukan berbagai landmark pembelajaran.
2.  **Pilih Landmark:** Klik pada ikon landmark yang bersinar untuk membuka detail ekspedisi.
3.  **Mulai Belajar:** Baca deskripsi dan jika Anda siap, klik tombol "Mulai Ekspedisi" untuk masuk ke modul pembelajaran.
4.  **Lacak Progres:** Gunakan "Atlas Index" untuk melihat semua lokasi dan progres Anda, atau buka "Misi Harian" untuk tantangan harian.
5.  **Kustomisasi (Mendatang):** Kunjungi "Studiolo" untuk mempersonalisasi ruang belajar Anda dan "Skill Tree" untuk meningkatkan kemampuan Anda.
