'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { logoutUser } from '@/lib/frontend-contracts';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');
  const [logoutMessage, setLogoutMessage] = useState('');

  useEffect(() => {
    const sections = ['beranda', 'tentang', 'produk', 'kegiatan'];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) setActiveSection(visible[0].target.id);
    }, { rootMargin: '-20% 0px -60% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] });
    sections.forEach((id) => { const element = document.getElementById(id); if (element) observer.observe(element); });
    return () => observer.disconnect();
  }, []);

  async function handleLogout() {
    const result = await logoutUser();
    setLogoutMessage(result.message ?? 'Logout belum tersedia.');
  }

  const links = [ ['beranda', 'Beranda'], ['tentang', 'Tentang Kami'], ['produk', 'Produk'], ['kegiatan', 'Kegiatan'] ];

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-teal-50 bg-white/90 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-12">
          <div className="flex items-center gap-3">
            <Link href="/" aria-label="Setia Tani beranda"><Image src="/logo setia tani.png" alt="Setia Tani Logo" width={48} height={48} className="object-contain" /></Link>
            <div className="flex flex-col"><Link href="/" className="mb-1 font-heading text-2xl font-black leading-none tracking-tighter text-primary-teal">SETIA</Link><span className="font-body text-[10px] font-bold uppercase leading-none tracking-widest text-accent-blue">The Real Local Product</span></div>
          </div>
          <nav className="hidden items-center gap-6 font-heading text-sm font-semibold text-slate-600 md:flex">
            {links.map(([id, label]) => <Link key={id} href={`/#${id}`} className={`transition hover:text-primary-teal ${activeSection === id ? 'text-primary-teal' : ''}`}>{label}</Link>)}
          </nav>
          <div className="hidden items-center gap-2 md:flex"><Link href="/login" className="rounded-xl px-4 py-2.5 text-sm font-bold text-primary-teal transition hover:bg-teal-50">Masuk</Link><Link href="/register" className="rounded-xl bg-primary-teal px-4 py-2.5 text-sm font-bold text-white transition hover:bg-primary-dark">Daftar</Link></div>
          <button type="button" aria-label={isOpen ? 'Tutup menu' : 'Buka menu'} aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)} className="rounded-lg border border-slate-200 p-2 text-slate-700 md:hidden"><svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d={isOpen ? 'M6 6l12 12M18 6L6 18' : 'M3 6h18M3 12h18M3 18h18'} strokeLinecap="round" /></svg></button>
        </div>
        {isOpen && <div className="border-t border-slate-100 bg-white px-4 pb-5 pt-3 md:hidden"><nav className="flex flex-col gap-1">{links.map(([id, label]) => <Link key={id} href={`/#${id}`} onClick={() => setIsOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-teal-50">{label}</Link>)}<div className="mt-2 grid grid-cols-2 gap-2"><Link href="/login" onClick={() => setIsOpen(false)} className="rounded-xl border border-primary-teal px-4 py-3 text-center text-sm font-bold text-primary-teal">Masuk</Link><Link href="/register" onClick={() => setIsOpen(false)} className="rounded-xl bg-primary-teal px-4 py-3 text-center text-sm font-bold text-white">Daftar</Link></div></nav></div>}
      </header>
      {logoutMessage && <div role="status" className="fixed right-4 top-24 z-[60] max-w-sm rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900 shadow-lg">{logoutMessage}<button onClick={() => setLogoutMessage('')} className="ml-3 font-bold">Tutup</button></div>}
    </>
  );
}
