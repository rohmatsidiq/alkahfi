// src/app/components/Navbar.jsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search,
  Heart,
  ShoppingBag,
  Menu,
  X,
  User,
  ChevronDown,
  LogOut,
  ArrowUpRight,
  Network,
} from "lucide-react";

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
    <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100/80 transition-all duration-300">
      {/* ================= 1. MARQUEE BAR PENGUMUMAN ELEGAN ================= */}
      <div className="bg-emerald-950 text-white text-[10px] sm:text-xs py-2.5 overflow-hidden whitespace-nowrap relative flex items-center border-b border-emerald-900/20 selection:bg-amber-400 selection:text-emerald-950">
        {/* Tambahkan style kustom inline animasi jika utilitas tailwind marquee belum diatur di config */}
        <div className="inline-block animate-marquee tracking-widest font-medium uppercase text-[10px]">
          ✨ Promo Berkah Ramadhan: Gratis Ongkir Seluruh Indonesia Min Belanja
          Rp 200.000! • Dapatkan Voucher Potongan Rp 25.000 dengan kode:{" "}
          <span className="text-amber-400 font-bold font-mono bg-white/10 px-1.5 py-0.5 rounded">
            BERKAH25
          </span>{" "}
          • Koleksi Khofifah Series Rilis Minggu Ini!
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      </div>

      {/* ================= 2. MAIN NAVBAR CONTROLLER ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center gap-4">
          {/* SISI KIRI: TOMBOL MOBILE & LOGO */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-500 hover:text-emerald-700 hover:bg-emerald-50/50 rounded-xl transition-all active:scale-95 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>

            <Link
              href="/"
              className="text-xl font-serif font-bold tracking-wider text-emerald-800 hover:opacity-90 transition-opacity"
            >
              Al-Kahfi<span className="text-amber-500">.</span>
            </Link>
          </div>

          {/* SISI TENGAH A: MENU NAVIGASI DESKTOP */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationMenus.map((menu) => {
              const active = isActiveMenu(menu.path);
              return (
                <Link
                  key={menu.path}
                  href={menu.path}
                  className={`text-[14px] tracking-widest font-bold relative py-1 transition-all duration-300 group ${
                    active
                      ? "text-emerald-700"
                      : "text-gray-400 hover:text-emerald-600"
                  }`}
                >
                  {menu.name}
                  {/* Efek Garis Hover Pinterest-Style */}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-emerald-600 transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* SISI TENGAH B: BAR PENCARIAN CLEAN MODERN */}
          <div className="flex-1 max-w-xs md:max-w-sm hidden sm:block">
            <div className="relative group">
              <input
                type="text"
                placeholder="Cari gamis premium, hijab instan..."
                className="w-full bg-gray-50/80 border border-gray-100 text-gray-700 pl-10 pr-4 py-2 rounded-xl text-xs outline-none focus:border-emerald-600/30 focus:bg-white focus:ring-4 focus:ring-emerald-600/5 transition-all duration-300"
              />
              <span className="absolute left-3 top-2.5 text-gray-400 group-focus-within:text-emerald-600 transition-colors">
                <Search className="w-4 h-4 stroke-[2.2]" />
              </span>
            </div>
          </div>

          {/* SISI KANAN: UTILITY CONTROLS */}
          <div className="flex items-center space-x-1 sm:space-x-3">
            <Link
              href="/admin"
              className="hidden md:inline-flex items-center gap-1 text-[10px] uppercase tracking-wider bg-stone-50 hover:bg-stone-100 text-stone-600 border border-stone-200/60 px-3 py-2 rounded-xl font-bold transition-all hover:border-stone-300"
            >
              Admin <ArrowUpRight className="w-3 h-3" />
            </Link>

            {/* Wishlist Icon */}
            <button className="text-gray-400 hover:text-red-500 p-2 rounded-xl hover:bg-gray-50 transition-all relative active:scale-95">
              <Heart className="w-5 h-5 stroke-2" />
              <span className="absolute top-1 right-1 inline-flex items-center justify-center min-w-3.5 h-3.5 px-1 text-[8px] font-bold leading-none text-white bg-red-500 rounded-full shadow-sm">
                4
              </span>
            </button>

            {/* Shopping Bag Icon */}
            <Link
              href="/keranjang"
              className="text-gray-400 hover:text-emerald-700 p-2 rounded-xl hover:bg-gray-50 transition-all relative block active:scale-95"
            >
              <ShoppingBag className="w-5 h-5 stroke-2" />
              <span className="absolute top-1 right-1 inline-flex items-center justify-center min-w-3.5 h-3.5 px-1 text-[8px] font-bold leading-none text-white bg-emerald-600 rounded-full shadow-sm">
                2
              </span>
            </Link>

            <div className="h-5 w-px bg-gray-100 mx-1 hidden sm:block" />

            {/* Profile Menu Dropdown */}
            <div className="flex items-center space-x-1.5 group cursor-pointer relative py-2 pl-1 select-none">
              <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center overflow-hidden transition-all group-hover:border-emerald-300 group-hover:scale-102 shadow-inner">
                <span className="font-bold text-xs text-emerald-800">RS</span>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-600 transition-transform duration-300 group-hover:rotate-180 hidden sm:block" />

              {/* DROPDOWN CARD (Premium Clean Floating Vibe) */}
              <div className="absolute right-0 top-14 w-52 bg-white/95 backdrop-blur-md border border-gray-100 rounded-2xl shadow-xl shadow-gray-200/40 py-2 opacity-0 group-hover:opacity-100 transition-all duration-300 invisible group-hover:visible z-50 translate-y-2 group-hover:translate-y-0">
                <div className="px-4 py-2.5 border-b border-gray-50">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    Logged In As
                  </p>
                  <p className="text-xs font-semibold text-gray-800 mt-0.5 truncate">
                    Rohmat Sidiq
                  </p>
                </div>
                <div className="p-1 space-y-0.5">
                  <Link
                    href="/profile"
                    className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-gray-600 hover:bg-gray-50 hover:text-emerald-700 transition-colors"
                  >
                    <User className="w-3.5 h-3.5" /> Detail Profil
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-gray-600 hover:bg-gray-50 hover:text-emerald-700 transition-colors"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" /> Riwayat Pesanan
                  </Link>
                  <Link
                    href="/affiliator"
                    className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-gray-600 hover:bg-gray-50 hover:text-emerald-700 transition-colors"
                  >
                    <Network className="w-3.5 h-3.5" /> Affiliator
                  </Link>
                  <div className="border-t border-gray-50 my-1 mx-2" />
                  <button className="flex items-center gap-2 w-full text-left px-3 py-2 rounded-xl text-xs text-red-500 hover:bg-red-50/60 transition-colors font-medium">
                    <LogOut className="w-3.5 h-3.5" /> Keluar Aplikasi
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= 3. MENU NAVIGASI MOBILE (Gaya Slide-In Ringan) ================= */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 px-4 py-4 space-y-3 shadow-inner animate-fade-in">
          {/* Search Bar Mobile */}
          <div className="relative block sm:hidden">
            <input
              type="text"
              placeholder="Cari produk impianmu..."
              className="w-full bg-gray-50 border border-gray-100 text-gray-700 pl-10 pr-4 py-2.5 rounded-xl text-xs outline-none"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
          </div>

          <div className="flex flex-col space-y-1">
            {navigationMenus.map((menu) => {
              const active = isActiveMenu(menu.path);
              return (
                <Link
                  key={menu.path}
                  href={menu.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-widest block transition-all ${
                    active
                      ? "bg-emerald-50 text-emerald-800"
                      : "text-gray-600 hover:bg-gray-50 hover:text-emerald-600"
                  }`}
                >
                  {menu.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-gray-100">
            <Link
              href="/admin"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-1.5 text-center text-xs bg-stone-50 hover:bg-stone-100 text-stone-600 border border-stone-200/60 py-3 rounded-xl font-bold uppercase tracking-wider transition-all"
            >
              Masuk Dashboard Admin <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
