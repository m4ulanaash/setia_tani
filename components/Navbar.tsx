import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-teal-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/logo setia tani.png" alt="Setia Tani Logo" width={48} height={48} className="object-contain" />
          <div className="flex flex-col">
            <Link href="/" className="text-2xl font-black tracking-tighter text-[#0D9488] font-heading leading-none mb-1">
              SETIA
            </Link>
            <span className="text-[10px] font-bold uppercase tracking-widest text-accent-blue font-body leading-none">
              The Real of Local Product
            </span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 font-heading text-sm font-medium text-slate-600">
          <Link href="/" className="text-[#0D9488] font-bold border-b-2 border-[#0D9488] pb-1">Beranda</Link>
          <Link href="#tentang" className="hover:text-[#0D9488] transition-colors">Tentang Kami</Link>
          <Link href="#produk" className="hover:text-[#0D9488] transition-colors">Produk</Link>
          <Link href="#kegiatan" className="hover:text-[#0D9488] transition-colors">Kegiatan</Link>
        </nav>

        <button className="group hidden md:flex items-center justify-center gap-2 h-10 px-6 rounded-lg bg-gradient-to-r from-primary-teal to-primary-dark text-white font-body font-semibold text-sm shadow-md hover:opacity-90 transition-all hover:-translate-y-0.5">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:scale-110">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          Hubungi Kami
        </button>
      </div>
    </header>
  );
}
