// src/app/components/Footer.jsx
import React from "react";
import {
  Instagram,
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  ShieldCheck,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 border-t border-stone-900 text-xs antialiased selection:bg-amber-400 selection:text-stone-950">
      {/* ================= BAGIAN UTAMA FOOTER ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Kolom 1: Tentang Brand & Sosial Media (Lebih Dominan di Grid) */}
          <div className="space-y-5 lg:col-span-4">
            <span className="text-xl font-serif font-bold tracking-wider text-white block">
              Al-Kahfi<span className="text-amber-400">.</span>
            </span>
            <p className="text-stone-400 leading-relaxed max-w-sm font-light">
              Pusat busana muslim premium modern yang mengedepankan kualitas
              bahan syar'i, kenyamanan optimal, dan desain anggun untuk menemani
              ibadah serta aktivitas harian generasi muda muslimah.
            </p>

            {/* Sosial Media Icons Minimalis Monokrom */}
            <div className="flex space-x-2.5 pt-2">
              {/* Instagram SVG Custom (Pasti Aman) */}
              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-stone-900 border border-stone-800/60 flex items-center justify-center text-stone-300 hover:text-white hover:bg-amber-500 hover:border-amber-500 transition-all duration-300 shadow-sm"
                aria-label="Instagram"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              {/* TikTok SVG Custom */}
              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-stone-900 border border-stone-800/60 flex items-center justify-center text-stone-300 hover:text-white hover:bg-emerald-600 hover:border-emerald-600 transition-all duration-300 shadow-sm"
                aria-label="TikTok"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
              {/* WhatsApp Icon */}
              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-stone-900 border border-stone-800/60 flex items-center justify-center text-stone-300 hover:text-white hover:bg-emerald-600 hover:border-emerald-600 transition-all duration-300 shadow-sm"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 stroke-[2.2]" />
              </a>
              {/* YouTube Icon */}
              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-stone-900 border border-stone-800/60 flex items-center justify-center text-stone-300 hover:text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300 shadow-sm"
                aria-label="YouTube"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
                  <polygon points="10 15 15 12 10 9" />
                </svg>
              </a>
            </div>
          </div>

          {/* Kolom 2: Jelajahi / Kategori */}
          <div className="space-y-4 lg:col-span-2 lg:pl-4">
            <h4 className="text-white font-bold uppercase tracking-widest text-[11px]">
              Koleksi Produk
            </h4>
            <ul className="space-y-2.5 font-light">
              <li>
                <a
                  href="#"
                  className="hover:text-amber-300 transition-colors duration-200 block py-0.5"
                >
                  Gamis & Abaya Premium
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-amber-300 transition-colors duration-200 block py-0.5"
                >
                  Hijab Segiempat & Pashmina
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-amber-300 transition-colors duration-200 block py-0.5"
                >
                  Koko Kurta Modern
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-amber-300 transition-colors duration-200 block py-0.5"
                >
                  Mukena Traveling Terusan
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-amber-300 transition-colors duration-200 block py-0.5"
                >
                  Busana Muslim Anak
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Layanan Pelanggan */}
          <div className="space-y-4 lg:col-span-2">
            <h4 className="text-white font-bold uppercase tracking-widest text-[11px]">
              Bantuan & Layanan
            </h4>
            <ul className="space-y-2.5 font-light">
              <li>
                <a
                  href="#"
                  className="hover:text-amber-300 transition-colors duration-200 block py-0.5"
                >
                  Cara Melakukan Pembelian
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-amber-300 transition-colors duration-200 block py-0.5"
                >
                  Informasi Pengiriman & Resi
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-amber-300 transition-colors duration-200 block py-0.5"
                >
                  Kebijakan Retur / Tukar Size
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-amber-300 transition-colors duration-200 block py-0.5"
                >
                  Panduan Standar Ukuran
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-amber-300 transition-colors duration-200 block py-0.5 font-medium text-emerald-400"
                >
                  Hubungi WhatsApp CS
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Kontak & Info Operasional */}
          <div className="space-y-4 lg:col-span-4">
            <h4 className="text-white font-bold uppercase tracking-widest text-[11px]">
              Hubungi Kami
            </h4>
            <ul className="space-y-3.5 font-light text-stone-400">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Jl. Kebon Sirih No. 45, Blok C, Jakarta Pusat, DKI Jakarta
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-stone-500 shrink-0" />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-stone-500 shrink-0" />
                <span className="hover:text-white transition-colors cursor-pointer">
                  support@alkahfistore.com
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-stone-500 shrink-0" />
                <span>Everyday: 08:00 - 21.00 WIB</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider Grid Tipis */}
        <hr className="border-stone-900 my-12" />

        {/* ================= TRUST BADGES (Metode Pembayaran & Kurir Monokrom) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center text-[11px]">
          {/* Pembayaran */}
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-stone-500 font-semibold tracking-wider uppercase text-[10px] block w-full sm:w-auto mb-2 sm:mb-0 mr-2">
              Payment Methods:
            </span>
            {["BCA", "MANDIRI", "BNI", "BSI", "QRIS"].map((pay) => (
              <span
                key={pay}
                className="bg-stone-900 border border-stone-850 text-stone-300 font-mono px-3 py-1.5 rounded-lg text-[10px] font-bold tracking-wider select-none shadow-inner"
              >
                {pay}
              </span>
            ))}
          </div>

          {/* Pengiriman */}
          <div className="flex flex-wrap gap-2 items-center lg:justify-end">
            <span className="text-stone-500 font-semibold tracking-wider uppercase text-[10px] block w-full sm:w-auto mb-2 sm:mb-0 mr-2">
              Shipping Partners:
            </span>
            {["J&T Express", "JNE", "Sicepat", "Anteraja"].map((ship) => (
              <span
                key={ship}
                className="bg-stone-900 border border-stone-850 text-stone-400 px-3 py-1.5 rounded-lg text-[10px] font-medium tracking-wide select-none shadow-inner"
              >
                {ship}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ================= REGULASI & COPRYIGHT BAR ================= */}
      <div className="bg-stone-950 border-t border-stone-900/60 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 space-y-3 sm:space-y-0">
          <div className="flex items-center gap-1.5">
            <p>
              &copy; {new Date().getFullYear()} Al-Kahfi Muslim Fashion. All
              Rights Reserved.
            </p>
          </div>
          <div className="flex space-x-5 font-light">
            <a href="#" className="hover:text-stone-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-stone-300 transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-stone-300 transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
