// app/(admin)/admin/layout.jsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SidebarAdmin from "../components/SidebarAdmin";

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const getPageTitle = () => {
    if (pathname === "/admin") return "Overview";
    if (pathname.startsWith("/admin/produk")) return "Products Management";
    if (pathname.startsWith("/admin/pesanan")) return "Orders Console";
    if (pathname.startsWith("/admin/users")) return "Users Directory";
    if (pathname.startsWith("/admin/affiliator")) return "Affiliates & Payouts";
    if (pathname.startsWith("/admin/blog")) return "Editorial Articles";
    if (pathname.startsWith("/admin/pengaturan")) return "Global Settings";
    return "Admin Console";
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] print:bg-white font-sans antialiased text-slate-800 flex flex-col">
      {/* ============================================================== */}
      {/* SIDEBAR ADMIN - SEMBUNYIKAN SAAT DICETAK (print:hidden)       */}
      {/* ============================================================== */}
      <div className="print:hidden">
        <SidebarAdmin
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      </div>

      {/* SISI KANAN AREA */}
      {/* print:pl-0 memastikan saat cetak tidak ada jarak kosong di sebelah kiri bekas ruang sidebar desktop */}
      <div className="md:pl-64 print:pl-0 flex flex-col flex-1 min-h-screen">
        {/* ============================================================== */}
        {/* GLOBAL HEADER BAR - SEMBUNYIKAN SAAT DICETAK (print:hidden)     */}
        {/* ============================================================== */}
        <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/50 h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8 sticky top-0 z-30 shadow-[0_1px_2px_rgba(0,0,0,0.01)] print:hidden">
          {/* SISI KIRI HEADER */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors md:hidden"
              aria-label="Open menu"
            >
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
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>

            {/* <h1 className="text-sm font-semibold text-slate-900 uppercase tracking-wider hidden md:block">
              {getPageTitle()}
            </h1>
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider md:hidden">
              Al-Kahfi Panel
            </span> */}
          </div>

          {/* SISI KANAN HEADER */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2 bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-lg text-[11px] font-medium border border-emerald-200/40">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>System Live</span>
            </div>

            <div className="h-5 w-px bg-slate-200 hidden sm:block" />

            {/* USER PROFILE WIDGET */}
            <div className="flex items-center space-x-3 group cursor-pointer relative py-2">
              <div className="w-8 h-8 rounded-full bg-slate-900 text-slate-100 font-bold flex items-center justify-center text-xs border border-slate-800">
                MS
              </div>
              <div className="text-left hidden sm:block">
                <p className="text-xs font-semibold text-slate-800 leading-none">
                  M. Sidiq
                </p>
                <p className="text-[10px] text-slate-400 font-medium mt-1">
                  Super Administrator
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-3 h-3 text-slate-400 hidden sm:block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>

              {/* DROPDOWN PANEL */}
              <div className="absolute right-0 top-14 w-48 bg-white border border-slate-200/60 rounded-xl shadow-xl py-1.5 opacity-0 group-hover:opacity-100 transition-all duration-200 invisible group-hover:visible z-50">
                <Link
                  href="#"
                  className="block px-4 py-2 text-xs text-slate-600 hover:bg-slate-50 transition-colors"
                >
                  Account Settings
                </Link>
                <div className="border-t border-slate-100 my-1" />
                <Link
                  href="/"
                  className="block px-4 py-2 text-xs text-red-500 hover:bg-rose-50 transition-colors font-medium"
                >
                  Sign Out Console
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* ============================================================== */}
        {/* AREA KONTEN UTAMA                                              */}
        {/* ============================================================== */}
        {/* print:p-0 memastikan tidak ada batasan margin/padding halaman saat dicetak */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-[1600px] w-full mx-auto min-h-[calc(100vh-4rem)] print:p-0 print:max-w-full">
          {children}
        </main>
      </div>
    </div>
  );
}
