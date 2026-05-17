// components/SidebarAdmin.jsx
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarAdmin({ isOpen, onClose }) {
  const pathname = usePathname();

  // Kelompok 1: Manajemen Operasional Inti
  const coreMenus = [
    {
      name: "Dashboard",
      path: "/admin",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      ),
    },
    {
      name: "Products",
      path: "/admin/produk",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 7.5l-6 3m6-3v7.5m0-7.5l-6-3m6 3M3.75 7.5l6 3m-6-3v7.5m0-7.5l6-3m-6 3L9.75 12m0 0v7.5m0-7.5l6-3M9.75 19.5l6-3m0 0v-7.5m0 0L20.25 7.5M12 4.5L9.75 3.375c-.354-.177-.768-.177-1.122 0L3.75 5.625M12 4.5l2.25-1.125c.354-.177.768-.177 1.122 0l4.878 2.438M12 4.5v7.5m0 0l-2.25-1.125"
          />
        </svg>
      ),
    },
    {
      name: "Orders",
      path: "/admin/pesanan",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z"
          />
        </svg>
      ),
    },
    {
      name: "Users",
      path: "/admin/users",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19.128a9.38 9.38 0 0 0-2.625.372 9.337 9.337 0 0 0-4.121-1.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
          />
        </svg>
      ),
    },
    {
      name: "Financials",
      path: "/admin/keuangan",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.007m0-.008a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6h.008v.008H3.75V10.5Zm0 6h.008v.008H3.75v-.008ZM9.75 4.5h.008v.008H9.75V4.5Zm0 6h.008v.008H9.75V10.5Zm0 6h.008v.008H9.75v-.008ZM15.75 4.5h.008v.008H15.75V4.5Zm0 6h.008v.008H15.75V10.5Z"
          />
        </svg>
      ),
    },
  ];

  // Kelompok 2: Pemasaran & Konfigurasi Sistem
  const marketingMenus = [
    {
      name: "Affiliator & Payout",
      path: "/admin/affiliator",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0112 15c1.726 0 3.3.57 4.556 1.532m.94 2.188a9.092 9.092 0 01-4.556-2.188m.94 2.188H18.75a.75.75 0 00.75-.75V18a6.002 6.002 0 00-4.5-5.802M12 12a3 3 0 100-6 3 3 0 000 6zm6.5-1.5a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5z"
          />
        </svg>
      ),
    },
    {
      name: "Blog Articles",
      path: "/admin/blog",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125H3.375A1.125 1.125 0 012.25 20.25V4.625c0-.621.504-1.125 1.125-1.125H10.5M16.5 7.5V18a2.25 2.25 0 002.25 2.25h1.5A2.25 2.25 0 0022.5 18V7.5M16.5 7.5V4.625c0-.621.504-1.125 1.125-1.125H21a1.125 1.125 0 011.125 1.125V7.5m-6 0h6"
          />
        </svg>
      ),
    },
    {
      name: "Settings & Promos",
      path: "/admin/pengaturan",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.43l-1.003.767c-.307.235-.45.635-.366 1.022.01.047.016.095.016.143 0 .048-.007.096-.015.143-.084.387.058.787.366 1.022l1.003.767a1.125 1.125 0 01.26 1.43l-1.296 2.247a1.125 1.125 0 01-1.37.49l-1.216-.456c-.356-.133-.751-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.43l1.004-.767c.308-.235.45-.635.366-1.022a4.18 4.18 0 01-.016-.286c.004-.048.01-.096.015-.143.084-.387-.058-.787-.366-1.022l-1.004-.767a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.49l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.28z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* BACKGROUND BACKDROP OVERLAY (MOBILE ONLY) */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
        />
      )}

      {/* STRUKTUR SIDEBAR CORE */}
      <aside
        className={`w-64 bg-slate-950 text-slate-400 flex flex-col h-screen fixed left-0 top-0 border-r border-slate-900 p-4 justify-between z-50 transition-transform duration-300 md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="space-y-6">
          {/* BRAND LOGO AREA */}
          <div className="px-3 py-5 flex items-center justify-between border-b border-slate-900/60">
            <div className="flex items-center space-x-2.5">
              <div className="w-6 h-6 rounded-lg bg-emerald-500 flex items-center justify-center font-serif text-slate-950 font-bold text-xs shadow-lg">
                A
              </div>
              <span className="text-sm font-semibold text-slate-100 tracking-wider uppercase">
                Al-Kahfi
              </span>
            </div>

            <button
              onClick={onClose}
              className="md:hidden p-1 rounded-lg hover:bg-slate-900 text-slate-400 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* KELOMPOK 1: CORE SYSTEM */}
          <div>
            <p className="px-3 text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-2.5">
              Core System
            </p>
            <nav className="space-y-1">
              {coreMenus.map((menu) => {
                const isActive =
                  pathname === menu.path ||
                  (menu.path !== "/admin" && pathname.startsWith(menu.path));
                return (
                  <Link
                    key={menu.path}
                    href={menu.path}
                    onClick={onClose}
                    className={`flex items-center space-x-3 py-2.5 px-3.5 rounded-xl transition-all duration-200 text-xs font-medium ${
                      isActive
                        ? "bg-gradient-to-r from-emerald-950/40 to-slate-900/10 text-emerald-400 border border-emerald-500/20"
                        : "text-slate-400 hover:bg-slate-900/50 hover:text-slate-200 border border-transparent"
                    }`}
                  >
                    <span
                      className={
                        isActive ? "text-emerald-400" : "text-slate-500"
                      }
                    >
                      {menu.icon}
                    </span>
                    <span>{menu.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* KELOMPOK 2: MARKETING & CONFIGS */}
          <div>
            <p className="px-3 text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-2.5">
              Marketing & Configs
            </p>
            <nav className="space-y-1">
              {marketingMenus.map((menu) => {
                const isActive = pathname.startsWith(menu.path);
                return (
                  <Link
                    key={menu.path}
                    href={menu.path}
                    onClick={onClose}
                    className={`flex items-center space-x-3 py-2.5 px-3.5 rounded-xl transition-all duration-200 text-xs font-medium ${
                      isActive
                        ? "bg-gradient-to-r from-emerald-950/40 to-slate-900/10 text-emerald-400 border border-emerald-500/20"
                        : "text-slate-400 hover:bg-slate-900/50 hover:text-slate-200 border border-transparent"
                    }`}
                  >
                    <span
                      className={
                        isActive ? "text-emerald-400" : "text-slate-500"
                      }
                    >
                      {menu.icon}
                    </span>
                    <span>{menu.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>

        {/* UTILITY FOOTER */}
        <div className="space-y-4 pt-4 border-t border-slate-900/60">
          <Link
            href="/"
            className="flex items-center justify-center space-x-2 text-[11px] bg-slate-900 hover:bg-slate-850 text-slate-300 py-2.5 rounded-xl font-medium border border-slate-800/60 transition-all w-full"
          >
            <span>View Live Store ↗</span>
          </Link>

          <div className="px-3 text-center md:text-left">
            <p className="text-[9px] text-slate-700 font-sans mt-0.5">
              © 2026 Al-Kahfi Systems
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
