import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 pt-8 lg:pt-12 pb-16 lg:pb-24 flex flex-col lg:flex-row items-center justify-between min-h-[75vh] gap-12">
        {/* Decorative Background Elements */}
        <div className="absolute right-0 top-0 w-2/3 h-full bg-gradient-to-l from-[#90CDFD]/20 to-transparent rounded-bl-[200px] -z-10 blur-2xl"></div>
        <div className="absolute -left-16 -top-16 w-96 h-96 bg-[#99F6E4]/20 blur-[64px] rounded-full -z-10"></div>
        
        {/* Left Content */}
        <div className="flex flex-col items-start w-full lg:w-1/2 relative z-10">
          <div className="flex items-center gap-3 px-4 py-2 bg-[#90CDFD]/30 rounded-full mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-accent-blue"></span>
            <span className="text-xs font-bold text-accent-blue tracking-wide">100% Produk Indonesia</span>
          </div>
          
          <h1 className="text-7xl md:text-[100px] lg:text-[130px] font-black text-primary-teal font-heading leading-none mb-6">
            SETIA
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-slate-700 leading-relaxed mb-10 max-w-lg">
            Dari bahan alami menjadi produk bernilai tinggi untuk keluarga Indonesia. Nikmati kebaikan alam dalam setiap gigitan.
          </p>
          
          <button className="group flex items-center gap-3 px-8 py-4 border-2 border-primary-teal text-primary-teal rounded-xl font-bold hover:bg-primary-teal hover:text-white transition-all shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:scale-110">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            Hubungi Kami
          </button>
        </div>

        {/* Right Content - Giant Logo */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative z-10">
          <div className="relative w-full max-w-[320px] md:max-w-[450px] lg:max-w-[600px] aspect-square">
            <Image 
              src="/logo setia tani.png"
              alt="Logo Setia Tani"
              fill
              className="object-contain drop-shadow-[0_20px_50px_rgba(0,103,103,0.3)] hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="w-full bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-teal font-heading mb-16 tracking-tight">
            Keunggulan Kami
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Bahan Lokal",
                desc: "Menggunakan singkong pilihan langsung dari petani lokal Indonesia.",
                iconBg: "bg-gradient-to-br from-primary-teal to-primary-dark"
              },
              {
                title: "Lebih Sehat",
                desc: "Alternatif tepung gluten-free yang kaya nutrisi dan rendah glikemik.",
                iconBg: "bg-[#90CDFD]"
              },
              {
                title: "Produk Lokal",
                desc: "Dukungan nyata untuk ekosistem UMKM Indonesia yang berkelanjutan.",
                iconBg: "bg-gradient-to-br from-primary-teal to-primary-dark"
              },
              {
                title: "Higienis",
                desc: "Proses produksi terstandarisasi untuk menjamin kualitas terbaik.",
                iconBg: "bg-[#90CDFD]"
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-bg-card p-8 rounded-3xl shadow-sm hover:shadow-md transition-all border border-transparent hover:border-teal-100">
                <div className={`w-14 h-14 rounded-xl ${feature.iconBg} flex items-center justify-center mb-6 shadow-sm`}>
                   <div className={`w-6 h-6 rounded-sm ${idx % 2 === 0 ? 'bg-white' : 'bg-accent-blue'}`}></div>
                </div>
                <h3 className="text-2xl font-semibold text-primary-teal font-heading mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT GRID SECTION */}
      <section id="produk" className="w-full bg-white py-24 border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary-teal font-heading mb-4 tracking-tight">
                Produk Pilihan Kami
              </h2>
              <p className="text-lg text-slate-600">Hadirkan kelezatan lokal yang sehat untuk meja makan Anda.</p>
            </div>
            <a href="#produk" className="group text-accent-blue font-bold text-lg hover:text-primary-teal flex items-center gap-2 transition-colors">
              Lihat Semua Produk
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Tepung Mocaf (500 gram)", price: "Rp 18.000" },
              { name: "Mie Mocaf Rasa Soto (70g)", price: "Rp 10.000" },
              { name: "Mie Mocaf Mie Goreng (70g)", price: "Rp 10.000" },
              { name: "Egg Roll (200 gram)", price: "Rp 25.000" }
            ].map((product, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm hover:shadow-xl transition-shadow flex flex-col h-full">
                <div className="w-full h-56 bg-bg-card rounded-2xl mb-6 flex items-center justify-center text-slate-400 text-sm">
                  [ Gambar Produk ]
                </div>
                <div className="flex-1 flex flex-col">
                  <h4 className="text-lg font-bold text-slate-900 mb-2 font-body leading-snug">{product.name}</h4>
                  <p className="text-xl font-black text-accent-blue mb-6">{product.price}</p>
                  <div className="mt-auto">
                    <button className="group w-full py-3.5 bg-bg-card rounded-xl font-bold text-slate-900 flex items-center justify-center gap-2 hover:bg-primary-teal hover:text-white transition-colors shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:scale-110">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      Hubungi Kami
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEDIA SECTION */}
      <section id="kegiatan" className="w-full py-24 bg-white border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center">
          <div className="text-center mb-16 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-[#004D4D] font-heading mb-4 tracking-tight">
              Kegiatan & Liputan
            </h2>
            <p className="text-slate-600 text-lg">Langkah kami dalam memberdayakan komunitas dan inovasi pangan.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
            {/* Card 1 */}
            <div className="bg-white rounded-3xl border border-teal-50 shadow-sm overflow-hidden group cursor-pointer hover:shadow-lg transition-all flex flex-col">
              <div className="h-48 bg-bg-card w-full flex items-center justify-center text-slate-400">[ Gambar 1 ]</div>
              <div className="p-6 flex flex-col flex-1">
                <div className="inline-flex self-start px-3 py-1 rounded bg-[#CAE6FF] text-[#90CDFD] text-[10px] font-bold mb-4 uppercase">
                  FARMER EMPOWERMENT
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-heading mb-3 group-hover:text-primary-teal transition-colors">
                  Pemberdayaan Petani Singkong di Wilayah Bogor Barat
                </h3>
                <p className="text-slate-500 text-sm mt-auto">12 September 2024</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl border border-teal-50 shadow-sm overflow-hidden group cursor-pointer hover:shadow-lg transition-all flex flex-col">
              <div className="h-48 bg-bg-card w-full flex items-center justify-center text-slate-400">[ Gambar 2 ]</div>
              <div className="p-6 flex flex-col flex-1">
                <div className="inline-flex self-start px-3 py-1 rounded bg-[#8FF3F2] text-[#008282] text-[10px] font-bold mb-4 uppercase">
                  PRODUCT LAUNCH
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-heading mb-3 group-hover:text-primary-teal transition-colors">
                  Peluncuran Varian Mie Mocaf Bebas Gluten Terbaru
                </h3>
                <p className="text-slate-500 text-sm mt-auto">05 Agustus 2024</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-3xl border border-teal-50 shadow-sm overflow-hidden group cursor-pointer hover:shadow-lg transition-all flex flex-col">
              <div className="h-48 bg-bg-card w-full flex items-center justify-center text-slate-400">[ Gambar 3 ]</div>
              <div className="p-6 flex flex-col flex-1">
                <div className="inline-flex self-start px-3 py-1 rounded bg-[#FFDBCB] text-[#AC6138] text-[10px] font-bold mb-4 uppercase">
                  UMKM EXHIBITION
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-heading mb-3 group-hover:text-primary-teal transition-colors">
                  Partisipasi SETIA dalam Pameran UMKM Unggulan 2024
                </h3>
                <p className="text-slate-500 text-sm mt-auto">20 Juli 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-16 mb-24">
        <div className="w-full bg-gradient-to-r from-primary-teal to-primary-dark rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-teal-900/20">
          <div className="absolute top-0 left-0 w-full h-full bg-white opacity-5"></div>
          
          <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto gap-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white font-heading tracking-tight">
              Dukung Produk Lokal Mulai Hari Ini
            </h2>
            <p className="text-lg md:text-xl text-[#8FF3F2] max-w-2xl">
              Setiap pembelian produk SETIA berkontribusi langsung pada kesejahteraan keluarga petani lokal dan kesehatan keluarga Anda.
            </p>
            <button className="group mt-4 px-10 py-5 rounded-2xl border-2 border-white/40 text-white font-black text-lg hover:bg-white hover:text-primary-teal transition-all flex items-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:scale-110">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Hubungi Kami
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
