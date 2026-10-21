# 👤 Jobdesk: Orang 1 - Backend & Authentication Specialist

- **Role:** Backend & Authentication Engineer
- **Fokus Utama:** Autentikasi *(Authentication - "Siapa Anda?")*
- **Git Branch:** `feat/authentication-core`
- **Terkoneksi dengan:** Orang 2 (Role & Permissions), Orang 3 (Audit Log saat Login), Orang 4 (Form Login & Register)

---

## 🎯 Ringkasan Tanggung Jawab
Bertanggung jawab atas seluruh siklus hidup akun pengguna (*user lifecycle*), mulai dari pendaftaran akun, validasi kredensial, hashing password, hingga penerbitan sesi login (*session management*) yang aman di sisi server.

---

## 📋 Checklist Tugas (To-Do List)

### 1. Fondasi Database & Skema Pengguna
- [ ] Setup koneksi database PostgreSQL (bisa via Supabase / Neon / Docker lokal).
- [ ] Buat skema tabel `User` dan `Session` menggunakan ORM (Prisma / Drizzle):
  - `id`: UUID (Primary Key)
  - `name`: String
  - `email`: String (Unique)
  - `passwordHash`: String
  - `roleId`: UUID / String (Foreign Key ke tabel Role milik Orang 2)
  - `createdAt`, `updatedAt`: DateTime
- [ ] Jalankan migrasi database (`npx prisma migrate dev` atau `drizzle-kit push`).

### 2. Modul Registrasi (Sign Up)
- [ ] Buat Server Action / API endpoint `registerUser(formData)`:
  - Sanitasi dan validasi input (email format valid, password minimal 8 karakter).
  - Cek duplikasi email di database (kembalikan pesan error jika sudah terdaftar).
  - Hashing password menggunakan `bcryptjs` (salt rounds: 10-12) atau `argon2`.
  - Simpan data user ke database dengan default role: `USER`.

### 3. Modul Login (Sign In)
- [ ] Buat Server Action / API endpoint `loginUser(email, password)`:
  - Cari user berdasarkan email.
  - Bandingkan password input dengan `passwordHash` menggunakan `bcrypt.compare()`.
  - Jika valid, buat token sesi (JWT) atau simpan sesi login di database.
  - Simpan session identifier ke dalam Cookie HTTP-Only dengan flags:
    - `httpOnly: true` (mencegah pencurian token lewat XSS)
    - `secure: process.env.NODE_ENV === 'production'`
    - `sameSite: 'lax'`
    - `maxAge: 7 * 24 * 60 * 60` (7 hari)

### 4. Modul Logout & Session Getter
- [ ] Buat Server Action / API `logoutUser()` untuk menghapus cookie sesi di browser.
- [ ] Buat utility server `getCurrentUser()` yang membaca cookie request dan mengembalikan profil user yang sedang login (tanpa password hash).

### 5. Keamanan & Rate Limiting
- [ ] Tambahkan proteksi anti brute-force sederhana (misal batasi maksimal 5x percobaan login per IP dalam 15 menit).
- [ ] Buat kontrak tipe data TypeScript (`types/auth.ts`) dan bagikan ke Orang 2, 3, dan 4.

---

## 📦 Output / Deliverables
1. File migrasi database untuk tabel `User` & `Session`.
2. File kontrak data `types/auth.ts`.
3. Server Actions / API:
   - `src/actions/auth/register.ts`
   - `src/actions/auth/login.ts`
   - `src/actions/auth/logout.ts`
   - `src/lib/session.ts` (helper `getCurrentUser()`)
4. Dokumentasi cara koneksi database di file `.env.example`.

---

## 💡 Catatan Koordinasi
- **Ke Orang 2:** Pastikan kolom `roleId` atau `role` di tabel `User` sinkron dengan enum role yang dirancang Orang 2.
- **Ke Orang 3:** Panggil fungsi `createAuditLog()` saat ada user yang berhasil login atau gagal login.
- **Ke Orang 4:** Informasikan format response JSON / Server Action (sukses/gagal) agar Orang 4 bisa menampilkan pesan error di form UI.
