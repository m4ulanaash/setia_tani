# 👤 Jobdesk: Orang 2 - Security & Authorization Specialist

- **Role:** Security & Authorization Engineer
- **Fokus Utama:** Autorisasi *(Authorization / RBAC - "Apa Hak Akses Anda?")*
- **Git Branch:** `feat/rbac-authorization`
- **Terkoneksi dengan:** Orang 1 (Session & User Schema), Orang 3 (Audit Log saat Role Diubah), Orang 4 (Kondisional Menu & Halaman Unauthorized)

---

## 🎯 Ringkasan Tanggung Jawab
Bertanggung jawab menentukan aturan hak akses pengguna (**Role-Based Access Control / RBAC**), menjaga gerbang rute halaman web menggunakan Next.js `middleware.ts`, serta melindungi endpoint Server Action / API dari akses ilegal (*privilege escalation*).

---

## 📋 Checklist Tugas (To-Do List)

### 1. Perancangan Skema Role & Permission
- [ ] Definisikan tingkatan peran (Roles) untuk Setia Tani:
  - `SUPER_ADMIN`: Akses penuh ke seluruh fitur dan pengaturan sistem.
  - `STAFF`: Pengelola operasional (bisa tambah/edit pupuk, produk, update stok).
  - `USER`: Pengguna umum / pembeli terdaftar (hanya bisa melihat katalog, profil diri).
- [ ] Buat enum / tabel `Role` di database yang terelasi dengan tabel `User` dari Orang 1.
- [ ] Buat pemetaan izin (*permission matrix*), contoh:
  - `CAN_MANAGE_USERS`: hanya `SUPER_ADMIN`
  - `CAN_EDIT_PRODUCT`: `SUPER_ADMIN`, `STAFF`
  - `CAN_VIEW_AUDIT_LOG`: `SUPER_ADMIN`

### 2. Implementasi Next.js Route Guard (`middleware.ts`)
- [ ] Buat file `middleware.ts` di root proyek.
- [ ] Atur filter `matcher` untuk rute-rute sensitif (contoh: `/admin/:path*`, `/dashboard/:path*`).
- [ ] Logika proteksi rute:
  - Jika user belum login dan mengakses rute admin/dashboard ➔ redirect ke `/login?callbackUrl=...`.
  - Jika user sudah login tetapi role-nya tidak memenuhi syarat (misal role `USER` mencoba akses `/admin`) ➔ redirect ke halaman `/unauthorized`.

### 3. Server-Side Guard Utility (Proteksi API & Server Action)
- [ ] Buat utility helper `requireAuth()` dan `requireRole(allowedRoles: Role[])` di folder `lib/auth-guards.ts`.
- [ ] Pasang guard tersebut di setiap Server Action sensitif, sehingga request yang di-bypass (misal lewat Postman/curl) tetap tertolak di sisi server:
  ```typescript
  // Contoh pola guard
  export async function updateProductAction(data: ProductInput) {
    const user = await requireRole(['SUPER_ADMIN', 'STAFF']);
    // Lanjutkan proses update...
  }
  ```

### 4. Modul Manajemen User & Role (Admin Feature)
- [ ] Buat Server Action `updateUserRole(targetUserId, newRole)`:
  - Hanya bisa dipanggil oleh `SUPER_ADMIN`.
  - Mengubah role user di database.
  - Memicu pencatatan audit log ke modul Orang 3.
- [ ] Siapkan halaman statis/error: `app/unauthorized/page.tsx` (tampilan pesan "403 - Anda tidak memiliki izin untuk mengakses halaman ini").

---

## 📦 Output / Deliverables
1. File `middleware.ts` aktif dengan aturan rute publik vs terproteksi.
2. File guard utilitas: `src/lib/auth-guards.ts`.
3. Server Action manajemen role: `src/actions/users/update-role.ts`.
4. Halaman `app/unauthorized/page.tsx`.

---

## 💡 Catatan Koordinasi
- **Ke Orang 1:** Pastikan fungsi pembaca sesi (`getCurrentUser()`) sudah mengembalikan data `role` user.
- **Ke Orang 3:** Panggil fungsi `createAuditLog()` setiap kali admin berhasil mengubah role seorang user.
- **Ke Orang 4:** Sediakan utility helper di sisi client `hasRole(user, 'STAFF')` agar Orang 4 bisa menyembunyikan tombol/menu tertentu jika role user tidak sesuai.
