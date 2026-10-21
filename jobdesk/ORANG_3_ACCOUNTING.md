# 👤 Jobdesk: Orang 3 - Audit & Accounting Specialist

- **Role:** Audit & Accounting Specialist
- **Fokus Utama:** Akunting *(Accounting / Audit Trail & Activity Logging - "Apa yang Anda Lakukan?")*
- **Git Branch:** `feat/audit-accounting`
- **Terkoneksi dengan:** Orang 1 (Log Event Login/Logout), Orang 2 (Log Pergantian Role), Orang 4 (Tabel Viewer Audit Log & Export CSV)

---

## 🎯 Ringkasan Tanggung Jawab
Bertanggung jawab membangun sistem pencatatan jejak digital (**Audit Logging & Activity Tracking**) untuk merekam setiap aksi penting di sistem (siapa yang melakukan, aksi apa, kapan, perubahan nilai data lama vs baru, dan IP address), serta modul pembacaan & pelaporan data log untuk kebutuhan audit.

---

## 📋 Checklist Tugas (To-Do List)

### 1. Perancangan Skema Database Audit Log
- [ ] Buat skema tabel `AuditLog` di database (Prisma / Drizzle):
  - `id`: UUID (Primary Key)
  - `userId`: UUID (Nullable, jika aksi dilakukan oleh guest/unauthenticated)
  - `userName`: String (Snapshot nama user saat aksi berlangsung)
  - `action`: String / Enum (`USER_LOGIN`, `USER_LOGOUT`, `LOGIN_FAILED`, `CREATE_PRODUCT`, `UPDATE_PRODUCT`, `DELETE_PRODUCT`, `ROLE_CHANGE`)
  - `resource`: String (contoh: "Product", "User", "Auth")
  - `details`: JSON / String (informasi detail perubahan, misal `{ oldPrice: 50000, newPrice: 55000 }`)
  - `ipAddress`: String
  - `userAgent`: String (Device / Browser)
  - `createdAt`: DateTime (Timestamp pencatatan)
- [ ] Jalankan migrasi database untuk tabel `AuditLog`.

### 2. Modul Helper Service Logger Terpusat
- [ ] Buat fungsi reusable `createAuditLog(data)` di `src/lib/audit-logger.ts`:
  - Mengambil IP address dan User Agent dari request headers secara otomatis.
  - Menyimpan record log ke database secara asinkron (jangan sampai error logging menghentikan flow utama transaksi).
- [ ] Integrasikan helper logger ini ke modul rekan satu tim:
  - Event Auth (dari Orang 1): Catat saat user login berhasil, login gagal, dan logout.
  - Event RBAC (dari Orang 2): Catat saat admin mengubah role user.
  - Event Produk/Stok: Catat saat ada penambahan atau pengubahan produk pertanian.

### 3. API Query, Pagination & Filter Log
- [ ] Buat Server Action / API `getAuditLogs(params)`:
  - Dukungan **Pagination** (limit misal 20 data per halaman, page index).
  - Dukungan **Filter**:
    - Filter berdasarkan tanggal (`startDate` s/d `endDate`).
    - Filter berdasarkan tipe aksi (`action`).
    - Filter / Search berdasarkan nama user atau resource.
  - Proteksi: Hanya boleh diakses oleh user dengan role `SUPER_ADMIN`.

### 4. Fitur Export Laporan Audit
- [ ] Buat fungsi export log ke format **CSV / Excel**:
  - Konversi hasil query log menjadi file CSV (`audit-log-export-[tanggal].csv`).
  - Sediakan endpoint download atau Server Action yang menghasilkan buffer file CSV.

---

## 📦 Output / Deliverables
1. Skema database & migrasi tabel `AuditLog`.
2. Utility terpusat `src/lib/audit-logger.ts` (`createAuditLog()`).
3. Server Action untuk query log dengan filter & pagination: `src/actions/audit/get-logs.ts`.
4. Server Action untuk export CSV: `src/actions/audit/export-csv.ts`.

---

## 💡 Catatan Koordinasi
- **Ke Orang 1 & 2:** Berikan petunjuk 1-baris kode bagaimana cara memanggil `createAuditLog(...)` di dalam Server Action mereka.
- **Ke Orang 4:** Sediakan format response data log (JSON lengkap dengan pagination meta: `totalCount`, `currentPage`, `totalPages`) agar Orang 4 bisa membuat UI tabel dan pagination dengan mulus.
