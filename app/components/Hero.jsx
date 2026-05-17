// src/app/components/Hero.jsx
import React from "react";

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 text-white overflow-hidden min-h-[85vh] flex items-center">
      {/* Ornamen Latar Belakang Estetik */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute -left-20 -top-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* KOLOM KIRI: TEKS & CALL TO ACTION (6 Kategori Grid) */}
          <div className="space-y-6 lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* Mini Badge Terkini */}
            <div className="inline-flex items-center gap-2 bg-emerald-800/60 border border-emerald-700/50 px-3 py-1.5 rounded-full backdrop-blur-sm shadow-sm animate-fade-in">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
              </span>
              <span className="text-[11px] sm:text-xs font-medium text-emerald-200 tracking-wide uppercase">
                Koleksi Eksklusif Khofifah Series Rilis Hari Ini
              </span>
            </div>

            {/* Judul Utama dengan Font Serif Elegan */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold tracking-wide leading-[1.15] text-white">
              Sempurnakan Hijrahmu <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-emerald-300 to-teal-200">
                dengan Anggun & Syar'i
              </span>
            </h1>

            {/* Sub-judul Deskriptif */}
            <p className="text-xs sm:text-base text-emerald-100/80 max-w-xl font-light leading-relaxed">
              Temukan harmoni sempurna antara syariat dan modernitas. Al-Kahfi
              menghadirkan busana muslim premium berbahan eksklusif yang adem,
              tidak menerawang, dan dirancang presisi untuk kenyamanan ibadah
              serta aktivitas harian Anda.
            </p>

            {/* Tombol Aksi Utama & Sekunder */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href="#produk-terbaru"
                className="group inline-flex items-center justify-center bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-emerald-950 font-semibold py-3 px-8 rounded-xl transition-all shadow-xl shadow-amber-950/20 text-sm active:scale-95"
              >
                Belanja Sekarang
                <span className="ml-2 group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/15 text-white font-medium py-3 px-6 rounded-xl border border-white/10 backdrop-blur-md transition-all text-sm"
              >
                Katalog Digital (PDF)
              </a>
            </div>

            {/* Statistik Mini / Social Proof */}
            <div className="pt-6 border-t border-emerald-800/60 w-full grid grid-cols-3 gap-4 max-w-md">
              <div>
                <p className="text-xl sm:text-2xl font-serif font-bold text-amber-300">
                  15k+
                </p>
                <p className="text-[10px] text-emerald-300 uppercase tracking-wider font-medium mt-0.5">
                  Produk Terjual
                </p>
              </div>
              <div className="border-x border-emerald-800/60 px-4">
                <p className="text-xl sm:text-2xl font-serif font-bold text-amber-300">
                  99%
                </p>
                <p className="text-[10px] text-emerald-300 uppercase tracking-wider font-medium mt-0.5">
                  Puas (Rating 4.9)
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-serif font-bold text-amber-300">
                  100%
                </p>
                <p className="text-[10px] text-emerald-300 uppercase tracking-wider font-medium mt-0.5">
                  Bahan Butik
                </p>
              </div>
            </div>
          </div>

          {/* KOLOM KANAN: SUSUNAN GAMBAR ESTETIK / LOOKBOOK GRID (5 Kategori Grid) */}
          <div className="hidden lg:block lg:col-span-5 relative h-[500px]">
            {/* Bingkai Foto Utama (Besar) */}
            <div className="absolute right-4 top-4 w-[280px] h-[400px] rounded-2xl overflow-hidden border-4 border-emerald-800/40 shadow-2xl z-20 group">
              <img
                src="https://i.pinimg.com/1200x/d0/f8/0b/d0f80b6d270963b8c3471bd99742998b.jpg"
                alt="Gamis Premium Medina"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex items-end">
                <p className="text-xs font-serif text-amber-200">
                  Medina Series Premium
                </p>
              </div>
            </div>

            {/* Bingkai Foto Sekunder (Kecil Menumpuk di Depan) */}
            <div className="absolute left-4 bottom-4 w-[200px] h-[260px] rounded-2xl overflow-hidden border-4 border-emerald-800/60 shadow-2xl z-30 group">
              <img
                src="https://i.pinimg.com/736x/a8/e6/36/a8e636ecd3e8e899d1fa12734d3a63e0.jpg"
                alt="Abaya Eksklusif Khofifah"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex items-end">
                <p className="text-[10px] font-serif text-amber-200">
                  Abaya Jetblack Series
                </p>
              </div>
            </div>

            {/* Aksen Label Aksesori Tambahan */}
            <div className="absolute right-12 bottom-12 bg-amber-500 text-emerald-950 px-4 py-2.5 rounded-xl font-serif font-bold text-xs shadow-lg z-30 transform rotate-6 tracking-wide">
              ✨ 100% Original
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
