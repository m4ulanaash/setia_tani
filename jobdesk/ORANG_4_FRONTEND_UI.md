# 👤 Jobdesk: Orang 4 - Frontend UI/UX & Integration Specialist

- **Role:** Frontend UI/UX & Dashboard Engineer
- **Fokus Utama:** Antarmuka Pengguna & Integrasi *(Interface, User Experience & Dashboard)*
- **Git Branch:** `feat/ui-auth-dashboard`
- **Terkoneksi dengan:** Orang 1 (Form Login & Register), Orang 2 (Kondisional Menu RBAC & Page 403), Orang 3 (Tabel Audit Viewer & Filter UI)

---

## 🎯 Ringkasan Tanggung Jawab
Bertanggung jawab atas seluruh visual antarmuka pengguna (UI/UX) terkait fitur Triple AAA, mulai dari halaman form Login & Register, navigasi dinamis (Navbar), hingga halaman Dashboard Admin untuk mengelola Role User dan melihat Audit Trail log aktivitas.

---

## 📋 Checklist Tugas (To-Do List)

### 1. Desain & Slicing Halaman Autentikasi
- [ ] Buat halaman Login: `app/login/page.tsx`:
  - Input field: Email dan Password.
  - Checkbox "Ingat Saya" (Remember Me) dan link "Lupa Password".
  - Desain konsisten dengan tema Setia Tani (Teal primary `#006767`, font Plus Jakarta Sans).
  - Tampilkan status loading (spinner pada tombol submit) dan inline alert jika email/password salah.
- [ ] Buat halaman Register: `app/register/page.tsx`:
  - Input field: Nama Lengkap, Email, Password, Konfirmasi Password.
  - Validasi form client-side (indikator password cocok, minimal karakter).
  - Link kembali ke halaman Login jika sudah memiliki akun.

### 2. Navigasi Dinamis & State Autentikasi
- [ ] Update komponen `Navbar` (`components/Navbar.tsx`):
  - **Kondisi Belum Login:** Tampilkan tombol "Masuk" dan "Daftar".
  - **Kondisi Sudah Login:** Tampilkan nama user, badge role (misal: "Admin" / "Staff"), dropdown menu (Profil, Dashboard Admin, Tombol Keluar).
  - Tombol Logout memicu Server Action milik Orang 1 dan membersihkan state.
- [ ] Sembunyikan link menu tertentu sesuai role pengguna (menggunakan helper dari Orang 2).

### 3. Halaman User Management (Dashboard Admin)
- [ ] Buat halaman `app/admin/users/page.tsx`:
  - Tampilkan tabel daftar seluruh pengguna (Nama, Email, Role, Tanggal Terdaftar).
  - Tambahkan tombol atau dropdown "Ubah Role" di setiap baris user (Super Admin, Staff, User).
  - Tampilkan pop-up / modal konfirmasi sebelum perubahan role disimpan.
  - Berikan feedback notifikasi toast berhasil/gagal saat memanggil Server Action milik Orang 2.

### 4. Halaman Audit Trail Viewer (Dashboard Admin)
- [ ] Buat halaman `app/admin/audit-logs/page.tsx`:
  - Tampilkan tabel log riwayat aktivitas:
    - Kolom: Waktu/Tanggal, Nama User, Aksi (Badge warna-warni: Hijau untuk Create, Kuning untuk Edit, Merah untuk Delete/Fail, Biru untuk Login), Resource, dan Alamat IP.
  - Fitur UI Filter & Search:
    - Input pencarian (search bar nama user/aksi).
    - Dropdown filter tipe aksi (All, Login, Update, Delete).
  - Komponen Pagination (Tombol Next, Prev, Nomor Halaman).
  - Tombol "Export CSV" yang memicu fungsi download dari Orang 3.

---

## 📦 Output / Deliverables
1. Halaman Login (`app/login/page.tsx`) dan Register (`app/register/page.tsx`).
2. Komponen Navbar responsif dengan navigasi dinamis berbasis status login.
3. Halaman Dashboard Admin:
   - User Management (`app/admin/users/page.tsx`).
   - Audit Trail Viewer (`app/admin/audit-logs/page.tsx`).
4. Komponen reusable: Table, Pagination, Badge Status, Modal Konfirmasi, Alert/Toast notification.

---

## 💡 Catatan Koordinasi
- **Ke Orang 1:** Gunakan Server Action `loginUser()` dan `registerUser()`. Tangani error message dari backend dan tampilkan di banner merah / alert form.
- **Ke Orang 2:** Pastikan menu "Dashboard Admin" hanya muncul jika user memiliki role `SUPER_ADMIN` atau `STAFF`.
- **Ke Orang 3:** Panggil Server Action `getAuditLogs()` untuk mengisi data tabel Audit Trail dan tombol download CSV.
