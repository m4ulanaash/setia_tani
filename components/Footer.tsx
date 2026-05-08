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
            UMKM Terpercaya untuk Kualitas Produk Olahan Singkong Sehat.
          </p>
          <a href="https://maps.app.goo.gl/MFuH9LUnuLKxADod9?g_st=aw" target="_blank" rel="noopener noreferrer" className="inline-flex items-start gap-2 mt-1 text-sm text-slate-400 hover:text-[#5EEAD4] transition-colors group">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5 group-hover:-translate-y-1 transition-transform">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span className="leading-relaxed max-w-sm">
              Desa Cikarawang, Dramaga, Kab. Bogor
            </span>
          </a>
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
            <a href="https://wa.me/6285776571945" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors flex items-center gap-3 group">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="transition-transform group-hover:scale-110 text-slate-400 group-hover:text-[#25D366]">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg> WhatsApp
            </a>
            <a href="https://www.instagram.com/official__setia?igsh=aW9sczhibWFwczY4" target="_blank" rel="noopener noreferrer" className="hover:text-[#E1306C] transition-colors flex items-center gap-3 group">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:scale-110 text-slate-400 group-hover:text-[#E1306C]">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg> Instagram
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
