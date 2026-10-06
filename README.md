# Portal Kaunseling Inhaler Pediatrik | Hospital Tunku Azizah (HTA)

Portal panduan teknik inhaler dan spacer untuk pesakit pediatrik Jabatan Kecemasan & Farmasi Hospital Tunku Azizah (HTA). Panduan video KKM, risalah interaktif, checklist keyakinan diri, dan tempahan kaunseling maya percuma.

---

## 📖 Panduan Lengkap Langkah Demi Langkah: Terbitkan ke GitHub Pages

Mengapa aplikasi React + Vite memerlukan langkah ini? Kerana fail TypeScript/React (`.tsx`) perlu dibina (*build*) menjadi fail HTML/CSS/JS statik sebelum pelayar web (browser) boleh memaparkannya.

Kami telah menyediakan fail automasi **`.github/workflows/deploy.yml`** di dalam repositori ini supaya GitHub membina dan menerbitkan laman web anda secara **100% automatik**.

---

### Langkah 1: Cipta Repositori di GitHub
1. Buka pelayar web dan layari [https://github.com/new](https://github.com/new) (pastikan anda telah log masuk ke akaun GitHub anda).
2. Di bahagian **Repository name**, masukkan nama (contoh: `inhaler-pediatrik-hta` atau `portal-inhaler`).
3. Tetapkan status kepada **Public**.
4. **PENTING:** **JANGAN** tanda pada *Add a README file*, *Add .gitignore*, atau *Choose a license*. Biarkan repositori kosong.
5. Klik butang hijau **Create repository**.

---

### Langkah 2: Muat Naik Kod Projek ke GitHub
Buka terminal / command prompt pada komputer anda di dalam folder projek ini, kemudian salin dan jalankan arahan berikut satu demi satu:

```bash
# 1. Mulakan repositori git tempatan
git init

# 2. Tambah semua fail
git add .

# 3. Buat komit pertama
git commit -m "feat: Portal Kaunseling Inhaler Pediatrik HTA"

# 4. Namakan branch utama sebagai main
git branch -M main

# 5. Sambungkan ke repositori GitHub anda
# (GANTIKAN 'USERNAME' dan 'NAMA-REPOSITORI' dengan nama akaun dan repositori anda!)
git remote add origin https://github.com/USERNAME/NAMA-REPOSITORI.git

# 6. Tolak kod ke GitHub
git push -u origin main
```

---

### Langkah 3: Aktifkan GitHub Pages di GitHub (Sangat Penting!)
Selepas kod berjaya dimuat naik ke GitHub:

1. Di halaman repositori anda di GitHub, klik tab **Settings** (ikon gear di bahagian atas sebelah kanan).
2. Di bar menu sebelah kiri, klik menu **Pages** (di bawah seksyen *Code and automation*).
3. Di bahagian **Build and deployment**:
   - Cari bahagian dropdown **Source**.
   - Tukar pilihan daripada *"Deploy from a branch"* kepada **GitHub Actions**.
4. Selesai! Anda tidak perlu ubah tetapan lain.

---

### Langkah 4: Semak Status dan Buka Laman Web Anda
1. Klik tab **Actions** di bahagian atas repositori anda.
2. Anda akan melihat satu proses kerja bernama **"Deploy ke GitHub Pages"** sedang berjalan dengan ikon bulat kuning/hijau.
3. Tunggu kira-kira 1 minit sehingga proses selesai (bertukar menjadi tanda rait hijau ✅).
4. Kembali ke **Settings** > **Pages**.
5. Di bahagian paling atas, anda akan melihat URL laman web rasmi anda yang telah aktif:
   ```
   https://USERNAME.github.io/NAMA-REPOSITORI/
   ```
6. Klik pada pautan tersebut untuk melayari laman web portal anda!

---

## ❓ Penyelesaian Masalah Lazim (Troubleshooting)

### Masalah 1: "File too large, cant commit" (Melebihi Had 100 MB di GitHub)
- **Punca:** Folder `node_modules` mengandungi ratusan fail binari (seperti *esbuild*) yang melebihi had saiz fail 100 MB GitHub. Folder ini **tidak sepatutnya** dikomit ke Git.
- **Penyelesaian di GitHub Desktop:**
  1. Di senarai fail di sebelah kiri (*Changes*), cari `node_modules`.
  2. **Klik kanan** pada `node_modules` dan pilih **"Ignore folder"** (atau buang tanda rait jika ada).
  3. Tekan butang **Commit to main**.
- **Penyelesaian di Terminal:**
  ```bash
  # Buang node_modules dari Git tanpa memadam fail tempatan anda:
  git rm -r --cached node_modules 2>/dev/null
  # Batalkan komit fail besar lama jika tersangkut:
  git reset HEAD~1
  # Tambah fail kod sumber sahaja dan tolak:
  git add -A
  git commit -m "feat: Portal Inhaler Pediatrik HTA"
  git push -u origin main
  ```

### Masalah 2: Skrin Putih (Blank Screen) atau Ralat 404 pada fail CSS & JS
- **Punca:** Laluan aset (assets path) tidak tepat apabila dihoskan di bawah sub-folder nama repositori.
- **Penyelesaian:** Kami telah menetapkan `base: './'` di dalam fail `vite.config.ts`. Ini memastikan semua fail gaya CSS dan skrip JavaScript merujuk kepada laluan relatif yang selamat tanpa ralat 404.

### Masalah 2: Laman web memaparkan teks README atau kod mentah, bukan paparan web
- **Punca:** Di menu Settings > Pages, anda memilih *Deploy from a branch > main*.
- **Penyelesaian:** Sila tukar **Source** kepada **GitHub Actions** seperti dalam Langkah 3 di atas.

---

## 💻 Menjalankan Projek di Komputer Sendiri (Local Development)

```bash
# 1. Pasang modul dependencies
npm install

# 2. Jalankan server pembangunan tempatan (port 3000)
npm run dev

# 3. Uji binaan produksi tempatan
npm run build
npm run preview
```
