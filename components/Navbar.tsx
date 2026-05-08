"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");

  useEffect(() => {
    const sections = ["beranda", "tentang", "produk", "kegiatan"];
    
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

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
      
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-heading text-sm font-medium text-slate-600">
          <a href="#beranda" className={`${activeSection === 'beranda' ? 'text-[#0D9488] font-bold border-b-2 border-[#0D9488]' : 'hover:text-[#0D9488]'} pb-1 transition-colors`}>Beranda</a>
          <a href="#tentang" className={`${activeSection === 'tentang' ? 'text-[#0D9488] font-bold border-b-2 border-[#0D9488]' : 'hover:text-[#0D9488]'} pb-1 transition-colors`}>Tentang Kami</a>
          <a href="#produk" className={`${activeSection === 'produk' ? 'text-[#0D9488] font-bold border-b-2 border-[#0D9488]' : 'hover:text-[#0D9488]'} pb-1 transition-colors`}>Produk</a>
          <a href="#kegiatan" className={`${activeSection === 'kegiatan' ? 'text-[#0D9488] font-bold border-b-2 border-[#0D9488]' : 'hover:text-[#0D9488]'} pb-1 transition-colors`}>Kegiatan</a>
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a href="https://wa.me/6285776571945" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-2 h-10 px-4 rounded-lg border-2 border-primary-teal text-primary-teal bg-white font-body font-semibold text-sm hover:bg-primary-teal hover:text-white transition-all hover:-translate-y-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:scale-110">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            WhatsApp
          </a>
          <a href="https://www.instagram.com/official__setia?igsh=aW9sczhibWFwczY4" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-2 h-10 px-4 rounded-lg border-2 border-primary-teal text-primary-teal bg-white font-body font-semibold text-sm hover:bg-primary-teal hover:text-white transition-all hover:-translate-y-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:scale-110">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            Instagram
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-[#0D9488] hover:bg-teal-50 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      <div className={`md:hidden absolute w-full bg-white border-b border-teal-50 shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="flex flex-col px-6 py-6 gap-4">
          <a href="#beranda" onClick={() => setIsOpen(false)} className={`${activeSection === 'beranda' ? 'text-[#0D9488] font-bold' : 'text-slate-600 font-medium hover:text-[#0D9488]'} border-b border-slate-100 pb-3 transition-colors`}>Beranda</a>
          <a href="#tentang" onClick={() => setIsOpen(false)} className={`${activeSection === 'tentang' ? 'text-[#0D9488] font-bold' : 'text-slate-600 font-medium hover:text-[#0D9488]'} border-b border-slate-100 pb-3 transition-colors`}>Tentang Kami</a>
          <a href="#produk" onClick={() => setIsOpen(false)} className={`${activeSection === 'produk' ? 'text-[#0D9488] font-bold' : 'text-slate-600 font-medium hover:text-[#0D9488]'} border-b border-slate-100 pb-3 transition-colors`}>Produk</a>
          <a href="#kegiatan" onClick={() => setIsOpen(false)} className={`${activeSection === 'kegiatan' ? 'text-[#0D9488] font-bold' : 'text-slate-600 font-medium hover:text-[#0D9488]'} border-b border-slate-100 pb-3 transition-colors`}>Kegiatan</a>
          
          <div className="flex flex-col gap-2 mt-2">
            <a href="https://wa.me/6285776571945" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 h-12 w-full rounded-xl border-2 border-primary-teal text-primary-teal bg-white font-bold text-sm hover:bg-primary-teal hover:text-white transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Hubungi via WhatsApp
            </a>
            <a href="https://www.instagram.com/official__setia?igsh=aW9sczhibWFwczY4" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 h-12 w-full rounded-xl border-2 border-primary-teal text-primary-teal bg-white font-bold text-sm shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              Kunjungi Instagram
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
