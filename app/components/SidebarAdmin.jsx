// components/SidebarAdmin.jsx
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Box,
  ShoppingCart,
  Users,
  DollarSign,
  UserCheck,
  FileText,
  Settings,
  ArrowUpRight,
  X,
  Sparkles,
} from "lucide-react";

export default function SidebarAdmin({ isOpen, onClose }) {
  const pathname = usePathname();

  const coreMenus = [
    {
      name: "Dashboard",
      path: "/admin",
      icon: <LayoutDashboard className="w-4 h-4" />,
    },
    {
      name: "Products",
      path: "/admin/produk",
      icon: <Box className="w-4 h-4" />,
    },
    {
      name: "Orders",
      path: "/admin/pesanan",
      icon: <ShoppingCart className="w-4 h-4" />,
    },
    {
      name: "Users",
      path: "/admin/users",
      icon: <Users className="w-4 h-4" />,
    },
    {
      name: "Financials",
      path: "/admin/keuangan",
      icon: <DollarSign className="w-4 h-4" />,
    },
  ];

  const marketingMenus = [
    {
      name: "Affiliator & Payout",
      path: "/admin/affiliator",
      icon: <UserCheck className="w-4 h-4" />,
    },
    {
      name: "Blog Articles",
      path: "/admin/blog",
      icon: <FileText className="w-4 h-4" />,
    },
    {
      name: "Settings & Promos",
      path: "/admin/pengaturan",
      icon: <Settings className="w-4 h-4" />,
    },
  ];

  const renderNavLinks = (menus) => {
    return menus.map((menu) => {
      const isActive =
        pathname === menu.path ||
        (menu.path !== "/admin" && pathname.startsWith(menu.path));

      return (
        <Link
          key={menu.path}
          href={menu.path}
          onClick={onClose}
          className={`flex items-center space-x-3 py-3 px-4 rounded-xl transition-all duration-300 group border ${
            isActive
              ? "bg-emerald-50 border-emerald-100 text-emerald-800 font-semibold shadow-sm"
              : "border-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-900"
          }`}
        >
          <span
            className={`transition-colors stroke-[2] ${isActive ? "text-emerald-700" : "text-gray-400 group-hover:text-gray-600"}`}
          >
            {menu.icon}
          </span>
          <span className="text-xs tracking-wide">{menu.name}</span>
        </Link>
      );
    });
  };

  return (
    <>
      {/* OVERLAY MOBILE BACKDROP (SOFT BLUR) */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-gray-900/20 backdrop-blur-md z-40 md:hidden transition-opacity duration-300"
        />
      )}

      {/* CORE SIDEBAR STRUCT */}
      <aside
        className={`w-64 bg-white text-gray-900 flex flex-col h-screen fixed left-0 top-0 border-r border-gray-100 p-5 justify-between z-50 transition-transform duration-300 md:translate-x-0 selection:bg-emerald-100 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="space-y-8">
          {/* BRAND AREA (LUXURY BUTIK SYAR'I FEEL) */}
          <div className="px-2 py-3 flex items-center justify-between border-b border-gray-50">
            <div className="flex items-center space-x-3">
              <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-emerald-800 to-teal-950 flex items-center justify-center text-white font-serif font-bold text-xs shadow-md shadow-emerald-900/20">
                A
              </div>
              <span className="text-sm font-serif font-bold tracking-wider text-emerald-950">
                Al-Kahfi<span className="text-amber-500">.</span>
              </span>
              <span className="bg-amber-50 text-amber-700 border border-amber-200/50 text-[9px] font-bold px-1.5 py-0.5 rounded-md">
                Admin
              </span>
            </div>

            <button
              onClick={onClose}
              className="md:hidden p-2 rounded-xl border border-gray-100 hover:bg-gray-50 text-gray-400 hover:text-gray-700 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* MENUS 01: CORE SYSTEM */}
          <div className="space-y-2">
            <p className="px-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1">
              <span>Main Operations</span>
            </p>
            <nav className="space-y-1">{renderNavLinks(coreMenus)}</nav>
          </div>

          {/* MENUS 02: MARKETING */}
          <div className="space-y-2">
            <p className="px-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              Growth & Promos
            </p>
            <nav className="space-y-1">{renderNavLinks(marketingMenus)}</nav>
          </div>
        </div>

        {/* UTILITY FOOTER CARD */}
        <div className="space-y-4 pt-4 border-t border-gray-50">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 text-xs font-semibold bg-gray-900 hover:bg-stone-900 text-white py-3.5 rounded-xl transition-all w-full shadow-sm active:scale-98 group"
          >
            <span>Live Store View</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-colors" />
          </Link>
        </div>
      </aside>
    </>
  );
}
