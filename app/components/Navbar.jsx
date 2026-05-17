// src/app/components/Navbar.jsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActiveMenu = (targetPath) => {
    if (targetPath === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(targetPath);
  };

  const navigationMenus = [
    { name: "Home", path: "/" },
    { name: "Gamis", path: "/gamis" },
    { name: "Hijab", path: "/hijab" },
    { name: "Koko", path: "/koko" },
  ];

  return (
    <div className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm backdrop-blur-md bg-white/95">
      {/* ============================================================== */}
      {/* 1. TOP BAR PENGUMUMAN DENGAN EFEK TEKS BERGERAK ELEGAN (MARQUEE EFFECT) */}
      {/* ============================================================== */}
      <div className="bg-emerald-950 text-white text-[10px] sm:text-xs py-2 overflow-hidden whitespace-nowrap relative flex items-center border-b border-emerald-900/40">
        <div className="inline-block animate-marquee tracking-wide font-medium">
          ✨ Promo Berkah Ramadhan: Gratis Ongkir Seluruh Indonesia Dengan
          Minimal Belanja Rp 200.000! • Dapatkan Voucher Potongan Rp 25.000
          dengan kode:{" "}
          <span className="text-amber-400 font-bold font-mono">BERKAH25</span> •
          Koleksi Khofifah Series Rilis Minggu Ini!
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      </div>

      {/* 2. MAIN NAVBAR CONTROLLER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center gap-4">
          {/* SISI KIRI: TOMBOL HAMBURGER & LOGO */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-500 hover:text-emerald-700 hover:bg-gray-50 rounded-lg transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>

            <Link
              href="/"
              className="text-xl sm:text-2xl font-bold text-emerald-700 tracking-wide font-serif"
            >
              Al-Kahfi<span className="text-amber-500">.</span>
            </Link>
          </div>

          {/* SISI TENGAH A: MENU NAVIGASI UTAMA */}
          <div className="hidden lg:flex space-x-6">
            {navigationMenus.map((menu) => {
              const active = isActiveMenu(menu.path);
              return (
                <Link
                  key={menu.path}
                  href={menu.path}
                  className={`text-xs uppercase tracking-wider font-semibold border-b-2 pb-1 transition-all ${
                    active
                      ? "text-emerald-700 border-emerald-600"
                      : "text-gray-500 border-transparent hover:text-emerald-600"
                  }`}
                >
                  {menu.name}
                </Link>
              );
            })}
          </div>

          {/* SISI TENGAH B: BAR PENCARIAN MINIMALIS */}
          <div className="flex-1 max-w-xs md:max-w-md hidden sm:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Cari gamis premium, hijab instan..."
                className="w-full bg-gray-50 border border-gray-200 text-gray-700 pl-4 pr-10 py-2 rounded-xl text-xs outline-none focus:border-emerald-600 focus:bg-white transition-all"
              />
              <span className="absolute right-3 top-2.5 cursor-pointer text-gray-400 hover:text-emerald-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.603 10.601z"
                  />
                </svg>
              </span>
            </div>
          </div>

          {/* SISI KANAN: UTILITY MENU */}
          <div className="flex items-center space-x-1 sm:space-x-4">
            <Link
              href="/admin"
              className="hidden md:inline-block text-[10px] bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200/60 px-2.5 py-1.5 rounded-lg font-medium transition-colors"
            >
              Admin View ↗
            </Link>

            {/* Menu Ikon 1: Wishlist */}
            <button className="text-gray-500 hover:text-red-500 p-2 transition-colors relative group">
              <span className="sr-only">Favorit</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
              <span className="absolute -top-0.5 -right-0.5 inline-flex items-center justify-center px-1.5 py-0.5 text-[9px] font-bold leading-none text-white bg-red-500 rounded-full">
                4
              </span>
            </button>

            {/* Menu Ikon 2: Keranjang Belanja */}
            <Link
              href="/keranjang"
              className="text-gray-500 hover:text-emerald-700 p-2 transition-colors relative group block"
            >
              <span className="sr-only">Keranjang</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z"
                />
              </svg>
              <span className="absolute -top-0.5 -right-0.5 inline-flex items-center justify-center px-1.5 py-0.5 text-[9px] font-bold leading-none text-white bg-emerald-600 rounded-full">
                2
              </span>
            </Link>

            <div className="h-5 w-px bg-gray-200 mx-1" />

            {/* Menu Akun 3: Profil Pengguna */}
            <div className="flex items-center space-x-2 group cursor-pointer relative py-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105 shadow-sm">
                <span className="font-bold text-xs text-emerald-800">RS</span>
              </div>
              <div className="hidden lg:block text-left">
                <p className="text-[10px] text-gray-400 leading-none">
                  Selamat datang,
                </p>
                <p className="text-xs font-semibold text-gray-700 mt-0.5 max-w-[80px] truncate">
                  Rohmat Sidiq
                </p>
              </div>

              {/* DROPDOWN MENU DESKTOP */}
              <div className="absolute right-0 top-12 w-48 bg-white border border-gray-100 rounded-xl shadow-xl py-2 opacity-0 group-hover:opacity-100 transition-all invisible group-hover:visible z-50">
                <div className="px-4 py-2 border-b border-gray-50">
                  <p className="text-xs font-semibold text-gray-800">
                    Akun Saya
                  </p>
                  <p className="text-[10px] text-gray-400 truncate">
                    rohmat@example.com
                  </p>
                </div>
                <Link
                  href="#"
                  className="block px-4 py-2 text-xs text-gray-600 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                >
                  Detail Profil
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-xs text-gray-600 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                >
                  Riwayat Pesanan
                </Link>
                <div className="border-t border-gray-50 my-1" />
                <button className="w-full text-left px-4 py-2 text-xs text-red-500 hover:bg-red-50 transition-colors">
                  Keluar Aplikasi
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. MENU DROPDOWN MOBILE */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-3 space-y-2 shadow-inner">
          <div className="relative mb-3 block sm:hidden">
            <input
              type="text"
              placeholder="Cari gamis premium..."
              className="w-full bg-gray-50 border border-gray-200 text-gray-700 pl-4 pr-10 py-2 rounded-xl text-xs outline-none"
            />
            <span className="absolute right-3 top-2.5 text-gray-400">🔍</span>
          </div>

          <div className="flex flex-col space-y-1">
            {navigationMenus.map((menu) => {
              const active = isActiveMenu(menu.path);
              return (
                <Link
                  key={menu.path}
                  href={menu.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider block transition-all ${
                    active
                      ? "bg-emerald-50 text-emerald-700 font-bold"
                      : "text-gray-600 hover:bg-gray-50 hover:text-emerald-600"
                  }`}
                >
                  {menu.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-2 border-t border-gray-50">
            <Link
              href="/admin"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-center text-xs bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200/60 py-2.5 rounded-xl font-medium"
            >
              Masuk Dashboard Admin View ↗
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
