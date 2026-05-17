// src/app/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 border-t border-gray-800 text-xs sm:text-sm">
      {/* Bagian Utama Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Kolom 1: Tentang Brand */}
          <div className="space-y-4">
            <span className="text-xl font-bold text-white font-serif tracking-wide block">
              Al-Kahfi Store
            </span>
            <p className="text-gray-400 leading-relaxed text-xs">
              Pusat busana muslim premium modern yang mengedepankan kualitas
              bahan syar'i, kenyamanan optimal, dan desain anggun untuk menemani
              ibadah serta aktivitas harian Anda.
            </p>
            {/* Sosial Media Icons Dummy */}
            <div className="flex space-x-3 pt-2">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-emerald-600 transition-colors"
              >
                📸
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-emerald-600 transition-colors"
              >
                🎵
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-emerald-600 transition-colors"
              >
                💬
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-emerald-600 transition-colors"
              >
                📺
              </a>
            </div>
          </div>

          {/* Kolom 2: Jelajahi / Kategori */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold uppercase tracking-wider text-xs">
              Koleksi Produk
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Gamis & Abaya Premium
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Hijab Segiempat & Pashmina
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Koko Kurta Modern
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Mukena Traveling & Terusan
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Busana Muslim Anak
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Layanan Pelanggan */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold uppercase tracking-wider text-xs">
              Bantuan & Layanan
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Cara Melakukan Pembelian
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Informasi Pengiriman & Resi
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Kebijakan Retur / Tukar Size
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Panduan Standar Ukuran
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Hubungi WhatsApp CS
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Kontak & Alamat */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold uppercase tracking-wider text-xs">
              Hubungi Kami
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li className="flex items-start space-x-2">
                <span>📍</span>
                <span>
                  Jl. Kebon Sirih No. 45, Blok C, Jakarta Pusat, DKI Jakarta
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <span>📞</span>
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>✉️</span>
                <span>support@alkahfistore.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>⏰</span>
                <span>Setiap Hari: 08.00 - 21.00 WIB</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider Pembatas */}
        <hr className="border-gray-800 my-10" />

        {/* Bagian Bawah: Partner Logistik & Pembayaran (Trust Badges) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center text-xs">
          <div className="flex flex-wrap gap-4 items-center">
            <span className="text-gray-500 font-medium block w-full sm:w-auto mb-1 sm:mb-0">
              Metode Pembayaran:
            </span>
            <span className="bg-gray-800 text-gray-300 px-2 py-1 rounded font-mono font-bold tracking-tight">
              BCA
            </span>
            <span className="bg-gray-800 text-gray-300 px-2 py-1 rounded font-mono font-bold tracking-tight">
              Mandiri
            </span>
            <span className="bg-gray-800 text-gray-300 px-2 py-1 rounded font-mono font-bold tracking-tight">
              BNI
            </span>
            <span className="bg-gray-800 text-gray-300 px-2 py-1 rounded font-mono font-bold tracking-tight">
              BSI
            </span>
            <span className="bg-gray-800 text-gray-300 px-2 py-1 rounded font-mono font-bold tracking-tight">
              QRIS
            </span>
          </div>
          <div className="flex flex-wrap gap-4 items-center md:justify-end">
            <span className="text-gray-500 font-medium block w-full sm:w-auto mb-1 sm:mb-0">
              Mitra Pengiriman:
            </span>
            <span className="bg-gray-800 text-gray-300 px-2 py-1 rounded font-semibold italic text-[11px]">
              J&T Express
            </span>
            <span className="bg-gray-800 text-gray-300 px-2 py-1 rounded font-semibold italic text-[11px]">
              JNE
            </span>
            <span className="bg-gray-800 text-gray-300 px-2 py-1 rounded font-semibold italic text-[11px]">
              Sicepat
            </span>
            <span className="bg-gray-800 text-gray-300 px-2 py-1 rounded font-semibold italic text-[11px]">
              Anteraja
            </span>
          </div>
        </div>
      </div>

      {/* Bagian Paling Bawah: Hak Cipta */}
      <div className="bg-gray-950 border-t border-gray-800/50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 space-y-2 sm:space-y-0">
          <p>&copy; 2026 Al-Kahfi Muslim Fashion. Hak Cipta Dilindungi.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">
              Kebijakan Privasi
            </a>
            <a href="#" className="hover:underline">
              Syarat & Ketentuan
            </a>
            <a href="#" className="hover:underline">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
