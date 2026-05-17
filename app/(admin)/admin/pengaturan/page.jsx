// app/(admin)/admin/pengaturan/page.jsx
"use client";

import React, { useState } from "react";

export default function AdminPengaturan() {
  // 🌟 STATE UTAMA UNTUK MENGONTROL TEKS BERJALAN DI HOME
  const [runningPromoText, setRunningPromoText] = useState(
    "Diskon Spesial Idul Adha 2026! Dapatkan Gratis Ongkir ke Seluruh Indonesia dengan Kupon: KAHFIADHA ✨",
  );

  // State Pembantu untuk Konfigurasi Toko Lainnya
  const [storeName, setStoreName] = useState("Al-Kahfi Store");
  const [isMaintenance, setIsMaintenance] = useState(false);
  const [isAutoApprovePayout, setIsAutoApprovePayout] = useState(false);

  const handleSaveSettings = (e) => {
    e.preventDefault();
    // Simulasi aksi simpan data ke database / backend API
    alert(
      `Konfigurasi Berhasil Diperbarui!\n\nTeks Promo Berjalan Aktif:\n"${runningPromoText}"`,
    );
  };

  return (
    <div className="space-y-8 min-h-[calc(100vh-4rem)] font-sans antialiased text-slate-600">
      {/* 1. CONSOLE CONTROL CONFIG HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200/60 pb-6">
        <div className="space-y-0.5">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">
            Global Settings
          </h2>
          <p className="text-xs text-slate-400 font-normal">
            Konfigurasi variabel sistem toko, kelola bar teks pengumuman, dan
            sinkronisasi gerbang operasional.
          </p>
        </div>
      </div>

      {/* 2. CORE CONFIGURATION FORM STRUCTURE */}
      <form
        onSubmit={handleSaveSettings}
        className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
      >
        {/* ============================================================== */}
        {/* SEKTOR KIRI: FORM KENDALI PROMO & IDENTITAS (7 Kolom)            */}
        {/* ============================================================== */}
        <div className="lg:col-span-7 space-y-6">
          {/* BOX UTAMA: KENDALI TEKS ANNOUNCEMENT PROMO HOME */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-[0_4px_25px_rgba(0,0,0,0.01)] space-y-5">
            <div className="border-b border-slate-100 pb-3 flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse shadow-sm" />
              <div>
                <h3 className="font-bold text-slate-900 text-sm tracking-tight">
                  Etalase Promo Home
                </h3>
                <p className="text-[11px] text-slate-400">
                  Atur kalimat pesan berjalan (marquee banner) di baris paling
                  atas beranda pembeli.
                </p>
              </div>
            </div>

            <div className="space-y-2 text-xs font-semibold">
              <label className="text-slate-400 font-bold uppercase text-[10px] tracking-wider block">
                Kalimat Teks Berjalan
              </label>
              <textarea
                rows="3"
                value={runningPromoText}
                onChange={(e) => setRunningPromoText(e.target.value)}
                placeholder="Tulis pesan promosi atau pengumuman penting toko di sini..."
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 font-medium text-slate-800 outline-none focus:border-slate-900 focus:bg-white transition-all shadow-inner leading-relaxed"
              />
              {/* Live Preview Monitor Struk Mini */}
              <div className="mt-2 bg-slate-950 p-2.5 rounded-xl text-[11px] text-slate-400 font-mono overflow-hidden relative">
                <span className="absolute left-2 text-amber-500 font-bold uppercase text-[8px] tracking-wider border border-amber-500/30 px-1 rounded bg-amber-950/20 z-10 shadow-sm">
                  Live Preview
                </span>
                <div className="whitespace-nowrap animate-[marquee_20s_linear_infinite] pl-16 text-slate-200 font-medium tracking-wide select-none">
                  {runningPromoText ||
                    "Ketik sesuatu untuk melihat pratinjau teks berjalan..."}
                </div>
              </div>
            </div>
          </div>

          {/* BOX KEDUA: CORE IDENTITY CONSOLE STORE */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-[0_4px_25px_rgba(0,0,0,0.01)] space-y-4">
            <div className="border-b border-slate-100 pb-2">
              <h3 className="font-bold text-slate-900 text-sm tracking-tight">
                Identitas Utama Toko
              </h3>
              <p className="text-[11px] text-slate-400">
                Variabel nama badan niaga dan hak cipta footer sistem.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold">
              <div className="space-y-1.5">
                <label className="text-slate-400 font-bold uppercase text-[10px] tracking-wider">
                  Nama Platform/Brand
                </label>
                <input
                  type="text"
                  value={storeName}
                  onChange={(e) => setStoreName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 font-medium text-slate-800 outline-none focus:border-slate-900 focus:bg-white transition-all"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-slate-400 font-bold uppercase text-[10px] tracking-wider">
                  Sistem Mata Uang
                </label>
                <input
                  type="text"
                  disabled
                  value="IDR (Rupiah Indonesia)"
                  className="w-full bg-slate-100 border border-slate-200 text-slate-400 rounded-xl px-3.5 py-2.5 font-medium cursor-not-allowed"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* SEKTOR KANAN: TOGGLE SISTEM MODERASI & TRIGGER (5 Kolom)         */}
        {/* ============================================================== */}
        <div className="lg:col-span-5 space-y-6">
          {/* BOX OPSI SISTEM AKTIVASI (SWITCH HOVER) */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-[0_4px_25px_rgba(0,0,0,0.01)] space-y-5">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="font-bold text-slate-900 text-sm tracking-tight">
                Gerbang Modus Operasi
              </h3>
              <p className="text-[11px] text-slate-400">
                Aktifkan sakelar pembatas kendali akses global.
              </p>
            </div>

            <div className="space-y-4 text-xs font-medium">
              {/* Toggle 1: Maintenance Mode */}
              <div className="flex items-center justify-between p-3 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                <div className="space-y-0.5 max-w-[80%]">
                  <p className="font-bold text-slate-900 text-xs">
                    Mode Perbaikan (Maintenance)
                  </p>
                  <p className="text-[10px] text-slate-400 leading-relaxed font-normal">
                    Kunci halaman depan toko dan tampilkan halaman info
                    perbaikan teknis.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={isMaintenance}
                  onChange={(e) => setIsMaintenance(e.target.checked)}
                  className="w-4 h-4 rounded text-slate-900 focus:ring-slate-900 cursor-pointer accent-slate-900"
                />
              </div>

              {/* Toggle 2: Auto Approve Payout */}
              <div className="flex items-center justify-between p-3 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                <div className="space-y-0.5 max-w-[80%]">
                  <p className="font-bold text-slate-900 text-xs">
                    Persetujuan Payout Otomatis
                  </p>
                  <p className="text-[10px] text-slate-400 leading-relaxed font-normal">
                    Izinkan sistem mencairkan dana komisi affiliator di bawah Rp
                    500rb secara instan.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={isAutoApprovePayout}
                  onChange={(e) => setIsAutoApprovePayout(e.target.checked)}
                  className="w-4 h-4 rounded text-slate-900 focus:ring-slate-900 cursor-pointer accent-slate-900"
                />
              </div>
            </div>
          </div>

          {/* MASTER SUBMIT TRIGGER CONTROLLER BAR */}
          <div className="bg-slate-50 p-4 rounded-3xl border border-slate-200/60 text-right space-y-3">
            <p className="text-[10px] text-slate-400 font-medium text-center sm:text-left pl-1 leading-relaxed">
              Pastikan seluruh modifikasi teks promo beranda dan variabel
              sakelar operasi sudah sesuai sebelum menerapkan pembaruan ke
              peladen produksi.
            </p>
            <button
              type="submit"
              className="w-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold py-3 px-4 rounded-2xl transition-all shadow-md active:scale-95 text-center block"
            >
              Simpan Perubahan Panel
            </button>
          </div>
        </div>
      </form>

      {/* STYLES ANIMASI KHUSUS UNTUK MARQUEE LIVE PREVIEW BANNER */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translate3d(100%, 0, 0);
          }
          100% {
            transform: translate3d(-100%, 0, 0);
          }
        }
      `}</style>
    </div>
  );
}
