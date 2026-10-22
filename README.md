# Jobdesk Orang 4 — Setia Tani UI scaffold

Scaffold UI untuk proyek Next.js App Router + TypeScript + Tailwind CSS 4. Mengikuti tema pada dokumen `tugas github.docx`: teal `#006767`, background `#F6FAF9`, Plus Jakarta Sans dan Manrope.

## File
- `app/login/page.tsx`
- `app/register/page.tsx`
- `app/admin/users/page.tsx`
- `app/admin/audit-logs/page.tsx`
- `components/Navbar.tsx`
- `lib/frontend-contracts.ts` — adapter sementara supaya UI dapat dibuat sebelum backend tim tersedia.

## Cara pakai
Salin file ke root proyek Setia Tani, pertahankan `app/layout.tsx`, `app/globals.css`, `components/Footer.tsx`, dan aset yang sudah ada. Jangan mengganti seluruh proyek dengan folder ini.

## Status integrasi penting
Backend Orang 1, 2, dan 3 belum tersedia. Karena itu, adapter dalam `lib/frontend-contracts.ts` sengaja mengembalikan error untuk login/register/logout dan memberi data demo untuk halaman admin. Ini bukan autentikasi sungguhan dan tidak boleh dianggap aman untuk deployment. Setelah Server Actions tersedia, ganti fungsi adapter dengan import Server Action yang sebenarnya.

Kontrak yang diharapkan:
- Auth: `loginUser({ email, password, rememberMe })`, `registerUser({ name, email, password })`, `logoutUser()`.
- User management: `getUsers()`, `changeUserRole({ userId, role })`.
- Audit: `getAuditLogs({ page, limit, search, action })` mengembalikan `{ data, totalCount, currentPage, totalPages }`; `exportAuditLogsCsv()` atau endpoint download.

Role yang digunakan UI: `SUPER_ADMIN`, `STAFF`, `USER`. Validasi role dan proteksi halaman wajib dilakukan di server, bukan hanya dengan menyembunyikan menu.

## Catatan
- Navbar mempertahankan link beranda/tentang/produk/kegiatan dan menambah tautan login/register. Data sesi belum dihubungkan karena backend belum ada.
- UI admin menampilkan data demo berlabel DEMO agar tidak menyesatkan.
