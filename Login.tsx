'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { loginUser } from '@/lib/frontend-contracts';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    setLoading(true);
    try {
      const result = await loginUser({ email: email.trim(), password, rememberMe });
      if (!result.ok) setError(result.message ?? 'Login gagal. Periksa email dan password.');
    } catch {
      setError('Terjadi kesalahan. Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex flex-1 items-center justify-center px-4 py-14 sm:px-6">
      <section className="w-full max-w-md rounded-3xl border border-teal-100 bg-white p-7 shadow-xl shadow-teal-900/5 sm:p-9">
        <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-primary-teal">← Kembali ke Setia Tani</Link>
        <div className="mb-8">
          <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.22em] text-primary-teal">Setia Tani</p>
          <h1 className="font-heading text-3xl font-extrabold tracking-tight text-slate-900">Masuk ke akun</h1>
          <p className="mt-2 text-sm leading-6 text-slate-500">Masuk untuk mengakses akun dan fitur sesuai peran Anda.</p>
        </div>
        <div className="mb-5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs leading-5 text-amber-900">Mode integrasi: backend autentikasi Orang 1 belum tersedia.</div>
        {error && <div role="alert" className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-bold text-slate-700">Email</label>
            <input id="email" type="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="nama@email.com" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-primary-teal focus:ring-4 focus:ring-teal-100" />
          </div>
          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-bold text-slate-700">Password</label>
            <input id="password" type="password" autoComplete="current-password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Masukkan password" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-primary-teal focus:ring-4 focus:ring-teal-100" />
          </div>
          <div className="flex items-center justify-between gap-3 text-sm">
            <label className="flex items-center gap-2 text-slate-600"><input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} className="h-4 w-4 accent-[#006767]" /> Ingat Saya</label>
            <button type="button" onClick={() => setError('Fitur lupa password belum tersedia di backend.')} className="font-bold text-primary-teal hover:underline">Lupa Password?</button>
          </div>
          <button type="submit" disabled={loading} className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary-teal px-4 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-teal-900/15 transition hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60">{loading && <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />}{loading ? 'Memproses...' : 'Masuk'}</button>
        </form>
        <p className="mt-7 text-center text-sm text-slate-500">Belum punya akun? <Link href="/register" className="font-extrabold text-primary-teal hover:underline">Daftar sekarang</Link></p>
      </section>
    </main>
  );
}
