'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { registerUser } from '@/lib/frontend-contracts';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const passwordsMatch = confirmPassword.length > 0 && password === confirmPassword;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    setNotice('');
    if (password.length < 8) return setError('Password minimal 8 karakter.');
    if (password !== confirmPassword) return setError('Konfirmasi password tidak cocok.');
    setLoading(true);
    try {
      const result = await registerUser({ name: name.trim(), email: email.trim(), password });
      if (result.ok) setNotice(result.message ?? 'Registrasi berhasil.');
      else setError(result.message ?? 'Registrasi gagal.');
    } catch {
      setError('Terjadi kesalahan. Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex flex-1 items-center justify-center px-4 py-12 sm:px-6">
      <section className="w-full max-w-lg rounded-3xl border border-teal-100 bg-white p-7 shadow-xl shadow-teal-900/5 sm:p-9">
        <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-primary-teal">← Kembali ke Setia Tani</Link>
        <div className="mb-7"><p className="mb-2 text-xs font-extrabold uppercase tracking-[0.22em] text-primary-teal">Setia Tani</p><h1 className="font-heading text-3xl font-extrabold tracking-tight text-slate-900">Buat akun baru</h1><p className="mt-2 text-sm leading-6 text-slate-500">Isi informasi berikut untuk membuat akun.</p></div>
        <div className="mb-5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs leading-5 text-amber-900">Mode integrasi: backend autentikasi Orang 1 belum tersedia.</div>
        {error && <div role="alert" className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>}
        {notice && <div role="status" className="mb-4 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">{notice}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div><label htmlFor="name" className="mb-2 block text-sm font-bold text-slate-700">Nama Lengkap</label><input id="name" autoComplete="name" required minLength={2} value={name} onChange={(e) => setName(e.target.value)} placeholder="Nama sesuai identitas" className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-primary-teal focus:ring-4 focus:ring-teal-100" /></div>
          <div><label htmlFor="email" className="mb-2 block text-sm font-bold text-slate-700">Email</label><input id="email" type="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="nama@email.com" className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-primary-teal focus:ring-4 focus:ring-teal-100" /></div>
          <div><label htmlFor="password" className="mb-2 block text-sm font-bold text-slate-700">Password</label><input id="password" type="password" autoComplete="new-password" required minLength={8} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Minimal 8 karakter" className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-primary-teal focus:ring-4 focus:ring-teal-100" /><p className="mt-1.5 text-xs text-slate-500">Gunakan minimal 8 karakter.</p></div>
          <div><label htmlFor="confirmPassword" className="mb-2 block text-sm font-bold text-slate-700">Konfirmasi Password</label><input id="confirmPassword" type="password" autoComplete="new-password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Ulangi password" className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-primary-teal focus:ring-4 focus:ring-teal-100" />{confirmPassword && <p className={`mt-1.5 text-xs font-semibold ${passwordsMatch ? 'text-green-700' : 'text-red-600'}`}>{passwordsMatch ? 'Password cocok' : 'Password belum cocok'}</p>}</div>
          <button type="submit" disabled={loading} className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-primary-teal px-4 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-teal-900/15 transition hover:bg-primary-dark disabled:opacity-60">{loading && <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />}{loading ? 'Memproses...' : 'Buat Akun'}</button>
        </form>
        <p className="mt-7 text-center text-sm text-slate-500">Sudah punya akun? <Link href="/login" className="font-extrabold text-primary-teal hover:underline">Masuk</Link></p>
      </section>
    </main>
  );
}
