# Submission: Integrasi Notes App dengan RESTful API

## Pengantar

Pada submission ini, Anda akan melanjutkan pengembangan aplikasi pencatatan (Notes App) dengan menambahkan fitur-fitur baru serta menghubungkannya dengan RESTful API.

## Tujuan Akhir

Aplikasi harus memenuhi kriteria berikut:

### 1. Mempertahankan Kriteria Submission Sebelumnya

- Pastikan aplikasi tetap memenuhi standar dari submission sebelumnya.

### 2. Menggunakan RESTful API sebagai Sumber Data

- Gunakan API dari Dicoding: [Ada di Dokumentasi API.md](https://notes-api.dicoding.dev/v2)
- Implementasikan fitur berikut:
  - Menambahkan catatan baru
  - Menampilkan daftar catatan
  - Menghapus catatan
- Data lokal atau dummy tidak boleh digunakan lagi.

### 3. Menggunakan Webpack sebagai Module Bundler

- Konfigurasi harus mencakup:
  - `html-webpack-plugin`
  - Perintah untuk development: `npm run start-dev` (menggunakan `webpack-dev-server`)
  - Perintah untuk production: `npm run build`

### 4. Menggunakan Fetch API

- Gunakan Fetch API untuk melakukan request ke API.

### 5. Menampilkan Indikator Loading

- Tambahkan indikator loading saat melakukan request ke API.
- Bisa menggunakan Web Component.

### 6. Menambahkan Fitur Arsip Catatan

- Implementasikan fitur arsip sesuai dokumentasi API.

### 7. Menampilkan Feedback Saat Terjadi Error

- Tampilkan pesan error jika request gagal.
- Bisa menggunakan `alert()` atau library seperti `sweetalert2`.

### 8. Animasi Halus

- Tambahkan efek pergerakan yang halus menggunakan library seperti `anime.js` atau sejenisnya.

## Opsional

- Gunakan Prettier sebagai code formatter.

## Batasan

- **Dilarang menggunakan framework JavaScript** seperti React, Angular, atau Vue.

---

Ikuti kriteria di atas agar submission Anda dapat diterima! 🚀
