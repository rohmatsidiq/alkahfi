// src/app/components/Hero.jsx
import React from "react";
import { ArrowUpRight, Sparkles, ShoppingBag, Globe } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative bg-black text-white overflow-hidden min-h-[95vh] flex items-center selection:bg-emerald-400 selection:text-black antialiased">
      {/* ================= BACKGROUND: NEO-GRID GENERATION ================= */}
      {/* Pola Garis Grid Tipis Cyber-Minimalist */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:3rem_3rem]" />

      {/* Abstract Aura Glow (Muted & Premium) */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-emerald-400/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-stone-900/40 rounded-full blur-[120px]" />

      {/* Teks Berjalan Latar Belakang (Ghost Text Marquee) */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full text-[14vw] font-black font-sans text-white/[0.01] uppercase tracking-tighter select-none pointer-events-none whitespace-nowrap hidden lg:block">
        AL-KAHFI DROP 2026 • MODEST CULTURE •
      </div>

      {/* ================= KONTEN UTAMA LAYOUT ================= */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-0 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-4 items-center">
          {/* KOLOM KIRI: OVERSIZED STATEMENT & HERO BUTTONS */}
          <div className="lg:col-span-6 flex flex-col items-center text-center lg:items-start lg:text-left space-y-10">
            {/* Status Live Tag */}
            <div className="inline-flex items-center gap-2 bg-stone-900 border border-stone-800 px-3.5 py-1.5 rounded-full shadow-inner">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-stone-300 flex items-center gap-1">
                <Globe className="w-3 h-3 text-stone-500" /> Collection Online
              </span>
            </div>

            {/* Judul Utama: Bold Street-Editorial Typeface */}
            <div className="space-y-3">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black font-sans tracking-tight leading-[0.95] uppercase text-white">
                Wear Your <br />
                <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-stone-200 to-amber-200 lowercase tracking-normal">
                  hijrah.
                </span>
              </h1>
            </div>

            {/* Deskripsi Minimalis (Micro-text) */}
            <p className="text-stone-400 text-xs sm:text-sm max-w-md font-light leading-relaxed tracking-wide">
              Kombinasi siluet *oversized loose fit* dengan material silk
              premium kurasi butik Al-Kahfi. Dirancang flowy, super adem, dan
              berkarakter tegas tanpa berkompromi pada syariat.
            </p>

            {/* Tombol Aksi Kapsul Monokrom (Asymmetrical Hover) */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href="#produk-terbaru"
                className="group inline-flex items-center justify-center gap-2 bg-emerald-400 text-black font-black py-4 px-8 rounded-full transition-all duration-300 text-xs uppercase tracking-widest hover:bg-white active:scale-95 shadow-lg shadow-emerald-400/10"
              >
                <ShoppingBag className="w-4 h-4" />
                Shop Drop 01
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center bg-white/5 hover:bg-white/10 text-white font-bold py-4 px-7 rounded-full border border-white/10 backdrop-blur-md transition-all duration-300 text-xs uppercase tracking-widest"
              >
                Digital Archives
              </a>
            </div>

            {/* Row Statistik Gaya Minimalis Bersih */}
            <div className="pt-8 w-full grid grid-cols-3 gap-8 border-t border-stone-900 text-left">
              <div>
                <p className="text-xs font-bold text-stone-500 uppercase tracking-widest">
                  Est. Volume
                </p>
                <p className="text-lg font-bold text-white mt-0.5 font-mono">
                  15,000+
                </p>
              </div>
              <div>
                <p className="text-xs font-bold text-stone-500 uppercase tracking-widest">
                  Satisfaction
                </p>
                <p className="text-lg font-bold text-white mt-0.5 font-mono">
                  99.2%
                </p>
              </div>
              <div>
                <p className="text-xs font-bold text-stone-500 uppercase tracking-widest">
                  Fabric Class
                </p>
                <p className="text-lg font-bold text-emerald-400 mt-0.5 uppercase tracking-wide">
                  A++ Silk
                </p>
              </div>
            </div>
          </div>

          {/* KOLOM KANAN: STREETWEAR EDITORIAL LOOKBOOK (Frameless Floating Stack) */}
          <div className="hidden lg:flex lg:col-span-6 justify-center items-center relative h-[650px] w-full pl-12 select-none">
            {/* Foto Utama Belakang (Besar / Clean Crop) */}
            <div className="absolute right-4 top-16 w-[320px] h-[460px] rounded-[1.5rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,1)] z-10 group transition-all duration-500">
              <img
                src="https://i.pinimg.com/1200x/d0/f8/0b/d0f80b6d270963b8c3471bd99742998b.jpg"
                alt="Gamis Premium Medina"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
              />
              {/* Minimal Text Overlay */}
              <div className="absolute bottom-6 left-6 text-white z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-[10px] font-mono tracking-widest text-emerald-400 font-bold uppercase">
                  MODEL NO. 01
                </p>
                <p className="text-sm font-serif font-medium mt-0.5">
                  Medina Premium Dress
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Foto Depan Kedua (Asimetris Miring / Overlapping Lembut) */}
            <div className="absolute left-0 bottom-14 w-[220px] h-[310px] rounded-[1.5rem] overflow-hidden shadow-[0_50px_70px_-15px_rgba(0,0,0,1)] z-20 group transform -rotate-6 hover:rotate-0 hover:scale-102 transition-all duration-550 ease-out">
              <img
                src="https://i.pinimg.com/736x/a8/e6/36/a8e636ecd3e8e899d1fa12734d3a63e0.jpg"
                alt="Abaya Eksklusif Khofifah"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
              />
            </div>

            {/* Floating Sticker Stamp (Stiker Melingkar Berputar Estetik) */}
            <div className="absolute right-0 bottom-28 bg-emerald-400 text-black px-4 py-2.5 rounded-xl font-mono text-[9px] font-black tracking-widest z-30 shadow-2xl transform rotate-12 hover:rotate-0 transition-transform duration-300">
              <Sparkles className="w-3 h-3 inline mr-1 fill-black" /> ORIGINAL
              DROP
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
