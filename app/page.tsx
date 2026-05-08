import Image from "next/image";
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function Home() {
  const products = await client.fetch(`*[_type == "product"] | order(_createdAt desc) {
    name, price, image, linkWA
  }`);

  const articles = await client.fetch(`*[_type == "article"] | order(_createdAt desc) {
    title, publisher, image, link
  }`);

  const displayProducts = products;
  const displayArticles = articles;
  return (
    <>
      <Navbar />
      <div className="flex-1 pt-20">
        <main className="flex flex-col items-center w-full overflow-x-hidden">
          {/* HERO SECTION */}
      <section id="beranda" className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 pt-8 lg:pt-12 pb-16 lg:pb-24 flex flex-col lg:flex-row items-center justify-between min-h-[75vh] gap-12">
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
          
          <div className="flex flex-wrap items-center gap-4">
            <a href="https://wa.me/6285776571945" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 px-8 py-4 border-2 border-primary-teal text-primary-teal bg-white rounded-xl font-bold hover:bg-primary-teal hover:text-white transition-all shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:scale-110">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              WhatsApp
            </a>
            <a href="https://www.instagram.com/official__setia?igsh=aW9sczhibWFwczY4" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 px-8 py-4 border-2 border-primary-teal text-primary-teal bg-white rounded-xl font-bold hover:bg-primary-teal hover:text-white transition-all shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:scale-110">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              Instagram
            </a>
          </div>
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

      {/* TENTANG KAMI & FEATURES SECTION */}
      <section id="tentang" className="relative w-full py-24 bg-cover bg-center" style={{ backgroundImage: "url('/bg-tentang-kami.jpg')" }}>
        {/* Overlay agar teks bisa terbaca jelas di atas gambar */}
        <div className="absolute inset-0 bg-white/85 backdrop-blur-[3px] z-0"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          
          {/* Tentang Kami Text */}
          <div className="mb-24 max-w-4xl">

            <h2 className="text-4xl md:text-5xl font-bold text-primary-teal font-heading mb-8 tracking-tight leading-tight">Tentang Kami</h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed text-justify">
              Berawal dari dedikasi Pak Ujang dan semangat petani di Desa Cikarawang pada tahun 2008, Kelompok Tani Setia telah bertransformasi dari sekadar pembudidaya singkong menjadi pelopor pengolahan tepung mocaf (modified cassava flour) yang inovatif. Sejak mendapatkan pelatihan strategis pada tahun 2015, kami berkomitmen untuk meningkatkan nilai jual potensi lokal melalui produk turunan yang sehat, seperti mie mocaf dan berbagai bahan ramah lingkungan lainnya. Lebih dari sekadar bisnis, misi utama kami adalah memperkuat ekonomi desa dengan menciptakan lapangan kerja, mengasah keterampilan masyarakat, serta menghadirkan solusi pangan alternatif yang berkualitas bagi konsumen luas.
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-primary-teal font-heading mb-12 tracking-tight">
            Keunggulan Kami
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Bahan Lokal",
                desc: "Menggunakan singkong pilihan langsung dari petani lokal Indonesia.",
                iconBg: "bg-gradient-to-br from-primary-teal to-primary-dark",
                iconColor: "text-white",
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
              },
              {
                title: "Lebih Sehat",
                desc: "Alternatif tepung gluten-free yang kaya nutrisi dan rendah glikemik.",
                iconBg: "bg-[#90CDFD]",
                iconColor: "text-[#004D4D]",
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/></svg>
              },
              {
                title: "Produk Lokal",
                desc: "Dukungan nyata untuk ekosistem UMKM Indonesia yang berkelanjutan.",
                iconBg: "bg-gradient-to-br from-primary-teal to-primary-dark",
                iconColor: "text-white",
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"/><path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"/><path d="M12 3v6"/></svg>
              },
              {
                title: "Higienis",
                desc: "Proses produksi terstandarisasi untuk menjamin kualitas terbaik.",
                iconBg: "bg-[#90CDFD]",
                iconColor: "text-[#004D4D]",
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-bg-card p-8 rounded-3xl shadow-sm hover:shadow-md transition-all border border-transparent hover:border-teal-100 group">
                <div className={`w-14 h-14 rounded-xl ${feature.iconBg} ${feature.iconColor} flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300`}>
                   {feature.icon}
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

          <div className="flex overflow-x-auto gap-6 lg:gap-8 pb-8 snap-x snap-mandatory scroll-smooth hide-scrollbar w-full pt-4">
            {displayProducts.map((product: any, idx: number) => (
              <div key={idx} className="snap-start flex-none w-[80vw] sm:w-[260px] lg:w-[270px] bg-white rounded-3xl p-4 border border-slate-100 shadow-sm hover:shadow-xl transition-shadow flex flex-col self-stretch">
                <div className="w-full h-48 bg-slate-100 rounded-2xl mb-5 flex items-center justify-center text-slate-400 text-sm overflow-hidden relative">
                  {product.image ? (
                    <img src={urlFor(product.image).url()} alt={product.name} className="w-full h-full object-cover" />
                  ) : (
                    "[ Gambar Produk ]"
                  )}
                </div>
                <div className="flex-1 flex flex-col">
                  <h4 className="text-lg font-bold text-slate-900 mb-2 font-body leading-snug">{product.name}</h4>
                  <p className="text-xl font-black text-accent-blue mb-4">{product.price}</p>
                  <div className="mt-auto">
                    <a 
                      href={product.linkWA || `https://wa.me/6285776571945?text=Halo,%20saya%20tertarik%20dengan%20${encodeURIComponent(product.name)}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="group w-full py-3.5 bg-[#25D366]/10 text-[#25D366] rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#25D366] hover:text-white transition-colors shadow-sm"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:scale-110">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      Pesan via WhatsApp
                    </a>
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

          <div className="flex overflow-x-auto gap-6 lg:gap-8 pb-8 snap-x snap-mandatory scroll-smooth hide-scrollbar w-full pt-4">
            {displayArticles.map((article: any, idx: number) => (
              <a key={idx} href={article.link} target="_blank" rel="noopener noreferrer" className="snap-start flex-none w-[85vw] sm:w-[350px] lg:w-[350px] bg-white rounded-3xl border border-teal-50 shadow-sm overflow-hidden group cursor-pointer hover:shadow-lg transition-all flex flex-col hover:-translate-y-1 self-stretch">
                <div className="h-48 bg-slate-100 w-full overflow-hidden">
                  <img 
                    src={article.image ? urlFor(article.image).url() : article.fallbackImg} 
                    alt={article.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="inline-flex self-start px-3 py-1 rounded-md bg-teal-50 text-[#0D9488] border border-teal-100 text-[10px] font-bold mb-4 uppercase tracking-wider">
                    LIPUTAN MEDIA
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 font-heading mb-3 group-hover:text-primary-teal transition-colors line-clamp-3">
                    {article.title}
                  </h3>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
                    <p className="text-slate-500 text-sm font-medium">{article.publisher}</p>
                    <span className="text-primary-teal font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      Baca <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </span>
                  </div>
                </div>
              </a>
            ))}
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
            <div className="mt-4 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href="https://wa.me/6285776571945" target="_blank" rel="noopener noreferrer" className="group px-8 md:px-10 py-4 md:py-5 rounded-2xl border-2 border-white/40 text-white font-black text-lg hover:bg-white hover:text-primary-teal transition-all flex justify-center items-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:scale-110">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                WhatsApp
              </a>
              <a href="https://www.instagram.com/official__setia?igsh=aW9sczhibWFwczY4" target="_blank" rel="noopener noreferrer" className="group px-8 md:px-10 py-4 md:py-5 rounded-2xl border-2 border-white/40 text-white font-black text-lg hover:bg-white hover:text-primary-teal transition-all flex justify-center items-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:scale-110">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
    </div>
    <Footer />
  </>
  );
}
