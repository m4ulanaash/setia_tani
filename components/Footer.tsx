import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-16 px-6 lg:px-12 font-body mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
          <div>
            <h3 className="text-[#5EEAD4] text-2xl font-bold font-heading mb-1">SETIA</h3>
            <p className="text-xs uppercase tracking-widest text-slate-400">THE REAL LOCAL PRODUCT</p>
          </div>
          <p className="text-sm leading-relaxed max-w-sm mt-2 text-slate-400">
            Desa Cikarawang, Dramaga, Kab. Bogor UMKM Terpercaya untuk Kualitas Produk Olahan Singkong Sehat.
          </p>
        </div>
        
        <div className="flex flex-col gap-4">
          <h4 className="text-[#14B8A6] text-xs font-bold uppercase tracking-widest">Navigasi</h4>
          <nav className="flex flex-col gap-3 text-sm">
            <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
            <Link href="#produk" className="hover:text-white transition-colors">Produk Kami</Link>
            <Link href="#tentang" className="hover:text-white transition-colors">Tentang Kami</Link>
            <Link href="#kegiatan" className="hover:text-white transition-colors">Kegiatan Kami</Link>
          </nav>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-[#14B8A6] text-xs font-bold uppercase tracking-widest">Kontak & Sosial</h4>
          <nav className="flex flex-col gap-3 text-sm">
            <a href="#" className="hover:text-white transition-colors flex items-center gap-3">
              <div className="w-3 h-3 bg-slate-500 rounded-sm"></div> WhatsApp
            </a>
            <a href="#" className="hover:text-white transition-colors flex items-center gap-3">
              <div className="w-3 h-3 bg-slate-500 rounded-sm"></div> Instagram
            </a>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
        <p>© 2024 SETIA. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-slate-300 transition-colors">Kebijakan Privasi</a>
          <a href="#" className="hover:text-slate-300 transition-colors">Syarat & Ketentuan</a>
        </div>
      </div>
    </footer>
  );
}
