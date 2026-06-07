# Digital Premium Shop — Landing Page & Design System

Sebuah storefront/landing page modern dan bersih untuk **Digital Premium Shop**, platform penjualan akun premium (seperti streaming, AI tools, produktivitas, cloud storage, platform belajar, dan design tools) yang menargetkan pasar Indonesia.

Desain ini dibuat agar terlihat profesional, terpercaya, dan ramah pengguna (*user-friendly*), sehingga calon pembeli dapat dengan mudah memahami produk yang ditawarkan dalam waktu singkat dan melakukan pemesanan via WhatsApp.

---

## 🛠️ Teknologi yang Digunakan

Proyek ini dibangun menggunakan teknologi web modern tanpa memerlukan proses build yang rumit:
- **HTML5 & CSS3**: Menggunakan CSS kustom (Vanilla CSS) untuk sistem desain yang fleksibel (warna, tipografi, grid spacing, efek bayangan, dan animasi).
- **React (v18)**: Digunakan untuk struktur komponen halaman yang dinamis dan modular.
- **Babel Standalone**: Berperan untuk melakukan *transpile* JSX secara langsung di browser tanpa perlu setup bundler (seperti Webpack atau Vite).
- **Lucide Icons**: Digunakan sebagai set ikon berbasis garis yang minimalis dan responsif.
- **Plus Jakarta Sans**: Font utama yang memberikan kesan modern dan premium.

---

## 🚀 Cara Menjalankan secara Lokal

Karena proyek ini menggunakan Babel untuk me-render file JSX secara langsung di browser, Anda memerlukan server lokal (HTTP server) untuk menghindari kendala keamanan browser (CORS).

Ikuti langkah-langkah berikut:

### 1. Buka Terminal / Command Prompt
Buka terminal dan masuk ke folder proyek ini:
```bash
cd "Digital Premium Shop Design System"
```

### 2. Jalankan HTTP Server
Jalankan salah satu server lokal instan di bawah ini (pilih salah satu yang sesuai dengan lingkungan Anda):

* **Menggunakan Node.js (Paling Direkomendasikan)**:
  ```bash
  npx http-server --port 3000
  # atau
  npx serve -l 3000
  ```

* **Menggunakan Python**:
  ```bash
  python -m http.server 3000
  ```

* **Menggunakan PHP**:
  ```bash
  php -S localhost:3000
  ```

### 3. Akses Halaman Utama
Setelah server berjalan, buka browser Anda dan akses alamat berikut:
👉 **[http://localhost:3000/ui_kits/landing/index.html](http://localhost:3000/ui_kits/landing/index.html)**

---

## 📁 Struktur Folder Utama
- `ui_kits/landing/` — Halaman landing page lengkap (HTML, data, dan komponen JSX).
- `tokens/` — Token desain untuk warna, tipografi, layout spacing, dll.
- `components/` — File komponen UI dasar sistem desain.
- `assets/` — Aset gambar dan logo SVG.
- `styles.css` — Entry point utama untuk seluruh CSS.
