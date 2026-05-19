// src/app/(customer)/profil/page.jsx
"use client";

import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  ShoppingBag,
  Heart,
  Settings,
  ShieldCheck,
  ArrowUpRight,
  Sparkles,
  LogOut,
  Code,
} from "lucide-react";

// Data Akun User Login (Sesuai Konteks Rohmat Sidiq)
const USER_PROFILE = {
  name: "Rohmat Sidiq M.",
  email: "rohmat.sidiq@example.com",
  phone: "+62 812-3456-7890",
  occupation: "Freelance Software Engineer & Marketer",
  joinedDate: "Maret 2026",
  avatarInitials: "RS",
  address: {
    label: "Utama (Rumah)",
    fullAddress: "Jl. Kebon Sirih No. 45, Blok C, Menteng",
    city: "Jakarta Pusat",
    postalCode: "10340",
  },
  stats: {
    orders: 12,
    wishlist: 4,
    vouchers: 2,
  },
};

const RECENT_ORDERS = [
  {
    id: "ALK-90812",
    date: "15 Mei 2026",
    product: "Gamis Silk Premium Medina (Emerald)",
    total: 385000,
    status: "Dikirim",
    statusColor: "text-amber-600 bg-amber-50 border-amber-100",
  },
  {
    id: "ALK-89012",
    date: "02 Mei 2026",
    product: "Koko Kurta Modern Lengan 3/4 Minimalist",
    total: 185000,
    status: "Selesai",
    statusColor: "text-emerald-700 bg-emerald-50 border-emerald-100",
  },
];

export default function ProfilPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const formatRupiah = (value) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="bg-white min-h-screen py-16 antialiased text-gray-900 selection:bg-emerald-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* ================= HEADER PROFILE (STICKER BANNER EFFECT) ================= */}
        <div className="relative border border-gray-100 bg-gray-50/60 rounded-[2.5rem] p-8 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 overflow-hidden">
          <div className="absolute top-[-20%] right-[-10%] w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Info Avatar & Nama */}
          <div className="flex items-center gap-5 z-10">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-[2rem] bg-stone-900 text-emerald-400 border-4 border-white shadow-xl flex items-center justify-center font-serif text-3xl font-black tracking-tighter select-none">
              {USER_PROFILE.avatarInitials}
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-3xl font-bold tracking-tight text-gray-900">
                  {USER_PROFILE.name}
                </h1>
                <span className="bg-stone-900 text-white text-[9px] font-mono uppercase px-2 py-0.5 rounded-md tracking-widest hidden sm:inline-block">
                  PRO MEMBER
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-400 font-light flex items-center gap-1.5">
                <Code className="w-3.5 h-3.5 text-emerald-600" />{" "}
                {USER_PROFILE.occupation}
              </p>
              <p className="text-[11px] text-gray-400">
                Member sejak {USER_PROFILE.joinedDate}
              </p>
            </div>
          </div>

          {/* Quick Stats Grid Pinned Right */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full md:w-auto z-10 border-t md:border-t-0 border-gray-100 pt-4 md:pt-0">
            {[
              {
                label: "Orders",
                val: USER_PROFILE.stats.orders,
                icon: <ShoppingBag className="w-3.5 h-3.5" />,
              },
              {
                label: "Wishlist",
                val: USER_PROFILE.stats.wishlist,
                icon: <Heart className="w-3.5 h-3.5" />,
              },
              {
                label: "Vouchers",
                val: USER_PROFILE.stats.vouchers,
                icon: <Sparkles className="w-3.5 h-3.5" />,
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 p-3 sm:p-4 rounded-2xl shadow-sm text-center min-w-[85px] sm:min-w-[100px]"
              >
                <div className="text-gray-400 flex justify-center mb-1">
                  {stat.icon}
                </div>
                <p className="text-lg font-black text-gray-900 font-mono leading-none">
                  {stat.val}
                </p>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold mt-1.5">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= MAIN INTERFACE CONTROLLER ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* PIL-TAB NAVIGATION LEFT BAR (3 Kolom) */}
          <div className="lg:col-span-3 flex bg-gray-50 border border-gray-100 p-1.5 rounded-2xl lg:flex-col lg:bg-transparent lg:border-none lg:p-0 gap-1 text-xs font-bold uppercase tracking-widest text-gray-400">
            <button
              onClick={() => setActiveTab("overview")}
              className={`flex-1 lg:flex-none flex items-center gap-2.5 px-4 py-3.5 rounded-xl transition-all duration-300 ${
                activeTab === "overview"
                  ? "bg-stone-900 text-white shadow-md shadow-stone-900/10"
                  : "hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              <User className="w-4 h-4 shrink-0" />{" "}
              <span className="hidden sm:inline">Personal Info</span>
            </button>
            <button
              onClick={() => setActiveTab("orders")}
              className={`flex-1 lg:flex-none flex items-center gap-2.5 px-4 py-3.5 rounded-xl transition-all duration-300 ${
                activeTab === "orders"
                  ? "bg-stone-900 text-white shadow-md shadow-stone-900/10"
                  : "hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              <ShoppingBag className="w-4 h-4 shrink-0" />{" "}
              <span className="hidden sm:inline">Order History</span>
            </button>
            <button className="flex-1 lg:flex-none flex items-center gap-2.5 px-4 py-3.5 rounded-xl text-red-500 hover:bg-red-50/60 transition-all text-left mt-0 lg:mt-6">
              <LogOut className="w-4 h-4 shrink-0" />{" "}
              <span className="hidden sm:inline">Sign Out</span>
            </button>
          </div>

          {/* DYNAMIC CONTENT CONTAINER DISPLAY (9 Kolom) */}
          <div className="lg:col-span-9">
            {/* SCREEN A: OVERVIEW & PROFILE SETTINGS */}
            {activeTab === "overview" && (
              <div className="space-y-8 animate-fade-in">
                {/* Kontak Detail Card */}
                <div className="space-y-4">
                  <h3 className="text-[11px] font-bold uppercase tracking-widest text-gray-400 flex items-center gap-1.5">
                    <Settings className="w-3.5 h-3.5" />{" "}
                    <span>Account Credentials</span>
                  </h3>
                  <div className="border border-gray-100 rounded-2xl bg-white p-6 grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
                    <div className="space-y-1.5">
                      <p className="text-gray-400 font-medium">
                        Full Account Name
                      </p>
                      <div className="bg-gray-50/60 border border-gray-100 px-4 py-3 rounded-xl font-bold text-gray-800">
                        {USER_PROFILE.name}
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <p className="text-gray-400 font-medium">
                        Registered Email Address
                      </p>
                      <div className="bg-gray-50/60 border border-gray-100 px-4 py-3 rounded-xl font-medium text-gray-800 flex items-center justify-between">
                        <span className="truncate">{USER_PROFILE.email}</span>
                        <Mail className="w-4 h-4 text-gray-300" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <p className="text-gray-400 font-medium">
                        WhatsApp Number
                      </p>
                      <div className="bg-gray-50/60 border border-gray-100 px-4 py-3 rounded-xl font-medium text-gray-800 flex items-center justify-between">
                        <span>{USER_PROFILE.phone}</span>
                        <Phone className="w-4 h-4 text-gray-300" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <p className="text-gray-400 font-medium">
                        Security Verification
                      </p>
                      <div className="bg-emerald-50/40 border border-emerald-100/50 px-4 py-3 rounded-xl font-bold text-emerald-800 flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4" />{" "}
                        <span>Account Secured</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Shipping Address Box Component */}
                <div className="space-y-4">
                  <h3 className="text-[11px] font-bold uppercase tracking-widest text-gray-400 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />{" "}
                    <span>Default Shipping Address</span>
                  </h3>
                  <div className="border border-gray-100 rounded-2xl bg-white p-6 flex flex-col sm:flex-row justify-between sm:items-center gap-4 group hover:border-gray-200 transition-all duration-300">
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-1.5 bg-gray-100 px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider text-gray-600">
                        {USER_PROFILE.address.label}
                      </div>
                      <p className="text-sm font-semibold text-gray-800">
                        {USER_PROFILE.name}
                      </p>
                      <p className="text-xs text-gray-500 font-light leading-relaxed max-w-md">
                        {USER_PROFILE.address.fullAddress},{" "}
                        {USER_PROFILE.address.city},{" "}
                        {USER_PROFILE.address.postalCode}
                      </p>
                    </div>
                    <button className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 hover:bg-emerald-600 hover:text-white px-4 py-3 rounded-xl transition-all shrink-0 self-start sm:self-center">
                      Edit Address
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* SCREEN B: HISTORY TRANSAKSI */}
            {activeTab === "orders" && (
              <div className="space-y-4 animate-fade-in">
                <h3 className="text-[11px] font-bold uppercase tracking-widest text-gray-400 flex items-center gap-1.5">
                  <ShoppingBag className="w-3.5 h-3.5" />{" "}
                  <span>Recent Transactions</span>
                </h3>

                <div className="space-y-3">
                  {RECENT_ORDERS.map((order) => (
                    <div
                      key={order.id}
                      className="border border-gray-100 bg-white rounded-2xl p-5 flex flex-col sm:flex-row justify-between sm:items-center gap-4 transition-all hover:shadow-lg hover:shadow-gray-100/40 relative group"
                    >
                      <div className="space-y-1.5 min-w-0">
                        <div className="flex items-center gap-2 text-[11px]">
                          <span className="font-mono font-bold tracking-wider text-gray-400">
                            {order.id}
                          </span>
                          <span className="text-gray-200">•</span>
                          <span className="text-gray-400 font-light">
                            {order.date}
                          </span>
                        </div>
                        <h4 className="text-xs sm:text-sm font-semibold text-gray-800 truncate pr-6">
                          {order.product}
                        </h4>
                        <p className="text-xs font-black text-gray-900 tracking-tight">
                          {formatRupiah(order.total)}
                        </p>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end gap-3 border-t sm:border-t-0 border-gray-50 pt-2.5 sm:pt-0">
                        <span
                          className={`px-2.5 py-1 rounded-lg text-[10px] font-bold border ${order.statusColor}`}
                        >
                          {order.status}
                        </span>
                        <button className="p-2 bg-gray-50 hover:bg-stone-900 hover:text-white text-gray-400 rounded-xl transition-all duration-300">
                          <ArrowUpRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
