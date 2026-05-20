"use client";

import React, { useState } from "react";

const OFFICIAL_PROFILE = {
  name: "Rohmat Sidiq M.",
  referralCode: "KAHFI-ROHMATSIDIQ",
  linkUrl: "https://alkahfistore.com/?ref=KAHFI-ROHMATSIDIQ",
  wallet: {
    available: 3450000,
    withdrawn: 12800000,
    pending: 770000,
  },
};

const LOG_SALES_STREAM = [
  {
    id: "SLS-9105",
    date: "20 Mei 2026",
    productName: "Gamis Silk Premium Medina",
    variant: "Emerald Green, M",
    price: 385000,
    qty: 1,
    commission: 38500,
  },
  {
    id: "SLS-9102",
    date: "19 Mei 2026",
    productName: "Abaya Jetblack Malikah Full Set",
    variant: "Hitam Pekat, XL",
    price: 550000,
    qty: 2,
    commission: 110000,
  },
  {
    id: "SLS-9087",
    date: "17 Mei 2026",
    productName: "Koko Kurta Modern Al-Kahfi",
    variant: "Soft Blue, L",
    price: 195000,
    qty: 1,
    commission: 19500,
  },
  {
    id: "SLS-9054",
    date: "14 Mei 2026",
    productName: "Gamis Silk Premium Medina",
    variant: "Choco Milk, S",
    price: 385000,
    qty: 1,
    commission: 38500,
  },
];

export default function AffiliatePartnerPortal() {
  const [profile] = useState(OFFICIAL_PROFILE);
  const [sales] = useState(LOG_SALES_STREAM);
  const [copied, setCopied] = useState(false);

  const formatRupiah = (value) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(profile.linkUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    // Mengunci font ke variabel CSS Geist yang sudah dikonfigurasi di root layout Anda
    <div className="space-y-10 bg-[#f8fafc] min-h-[calc(100vh-4rem)] p-4 font-sans font-normal tracking-tight text-slate-600 max-w-6xl mx-auto">
      {/* ============================================================== */}
      {/* 1. EXECUTIVE WELCOME HEADER                                    */}
      {/* ============================================================== */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200/50 pb-6">
        <div className="space-y-1">
          <div className="flex items-center space-x-2.5">
            <h2 className="text-xl font-bold font-sans text-slate-900 tracking-tight">
              Affiliate Partner Hub
            </h2>
            <div className="bg-blue-50 border border-blue-200/60 text-blue-700 font-bold font-sans text-[9px] uppercase tracking-widest px-2.5 py-0.5 rounded-md shadow-sm">
              Premium Promoter
            </div>
          </div>
          <p className="text-xs text-slate-400 font-medium font-sans">
            Selamat datang kembali,{" "}
            <span className="text-slate-900 font-bold">{profile.name}</span>.
            Tinjau tautan rujukan dan monitor performa penjualan Anda.
          </p>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 2. REFERRAL LINKS CONTROL KAPSUL                               */}
      {/* ============================================================== */}
      <div className="bg-white p-5 rounded-3xl border border-slate-200/60 shadow-[0_4px_25px_rgba(0,0,0,0.01)] grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Kode Referral */}
        <div className="lg:col-span-4 space-y-1.5 lg:border-r border-slate-100 pb-4 lg:pb-0 lg:pr-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block font-sans">
            Kupon Rujukan Anda
          </span>
          <span className="text-sm font-bold font-mono tracking-wide text-slate-900 bg-slate-50 border border-slate-200 px-3.5 py-1.5 rounded-xl inline-block shadow-inner">
            {profile.referralCode}
          </span>
        </div>

        {/* Link Salin URL Kapsul */}
        <div className="lg:col-span-8 space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block font-sans">
            Tautan Belanja Aktif (Referral URL)
          </span>
          <div className="flex items-center bg-slate-50 border border-slate-200 rounded-2xl p-1.5 pl-4 w-full justify-between gap-4">
            <p className="text-xs font-mono text-slate-600 truncate font-medium tracking-tight">
              {profile.linkUrl}
            </p>
            <button
              onClick={handleCopyLink}
              className={`text-xs font-bold font-sans px-4 py-2.5 rounded-xl transition-all shadow-md shrink-0 ${
                copied
                  ? "bg-emerald-600 text-white shadow-emerald-500/10"
                  : "bg-slate-900 hover:bg-slate-800 text-white shadow-slate-950/5"
              }`}
            >
              {copied ? "✓ Copied!" : "Copy Link"}
            </button>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 3. WALLET FINANCIAL DECK SYSTEM                                */}
      {/* ============================================================== */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {/* Available Wallet Balance (Deep Royal Blue) */}
        <div className="bg-linear-to-br from-blue-600 to-blue-700 text-white p-6 rounded-3xl shadow-md shadow-blue-600/5 flex flex-col justify-between min-h-32.5 relative overflow-hidden">
          <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white/4 rounded-full blur-2xl" />
          <p className="text-[10px] font-bold uppercase tracking-wider text-blue-100/80 font-sans">
            Komisi Tersedia (Available)
          </p>
          <div className="space-y-1.5">
            <p className="text-2xl font-bold font-mono tracking-tight">
              {formatRupiah(profile.wallet.available)}
            </p>
            <div className="flex items-center justify-between gap-2">
              <p className="text-[9px] text-blue-100/60 font-medium font-sans">
                Dana siap dicairkan ke rekening
              </p>
              <button className="bg-white hover:bg-blue-50 text-blue-700 text-[10px] font-bold font-sans px-3 py-1.5 rounded-xl transition-colors shadow-inner shrink-0">
                Request Payout
              </button>
            </div>
          </div>
        </div>

        {/* Total Withdrawn Balance (Slate Dark) */}
        <div className="bg-slate-900 text-white p-6 rounded-3xl shadow-sm flex flex-col justify-between min-h-32.5 relative overflow-hidden">
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-sans">
            Telah Dicairkan (Withdrawn)
          </p>
          <div className="space-y-0.5">
            <p className="text-2xl font-bold font-mono tracking-tight">
              {formatRupiah(profile.wallet.withdrawn)}
            </p>
            <p className="text-[9px] text-slate-500 font-medium font-sans">
              Akumulasi pencairan komisi sukses
            </p>
          </div>
        </div>

        {/* Pending Approval Balance (Pure White Card with Amber Accent) */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-[0_2px_10px_rgba(0,0,0,0.01)] flex flex-col justify-between min-h-32.5">
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-sans">
            Menunggu Verifikasi (Pending)
          </p>
          <div className="space-y-0.5">
            <p className="text-2xl font-bold font-mono tracking-tight text-amber-500">
              {formatRupiah(profile.wallet.pending)}
            </p>
            <p className="text-[9px] text-slate-400 font-medium font-sans">
              Pesanan konsumen dalam masa pengiriman
            </p>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 4. PREMIUM COMPACT PRODUCT SALES HISTORY STREAM                */}
      {/* ============================================================== */}
      <div className="bg-white rounded-3xl border border-slate-200/60 shadow-[0_4px_25px_rgba(0,0,0,0.01)] overflow-hidden">
        {/* Header Stream */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <div className="space-y-0.5">
            <h3 className="font-bold text-slate-900 text-sm tracking-tight font-sans">
              Pelacakan Produk Rujukan (Sales Audit Log)
            </h3>
            <p className="text-[11px] text-slate-400 font-medium font-sans">
              Rincian artikel katalog busana muslim yang terjual via kode
              rujukan.
            </p>
          </div>
          <span className="text-[10px] font-mono bg-slate-100 border border-slate-200/80 text-slate-500 px-2.5 py-0.5 rounded-md font-bold">
            {sales.length} Items Sold
          </span>
        </div>

        {/* Content Rows Fluid Stream */}
        <div className="divide-y divide-slate-100">
          {sales.map((item) => (
            <div
              key={item.id}
              className="p-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 text-xs font-medium font-sans hover:bg-slate-50/40 transition-colors group"
            >
              {/* Sektor Kiri: Tanggal & Nama Produk */}
              <div className="flex items-center space-x-3.5 min-w-0">
                <div className="w-8 h-8 rounded-xl bg-slate-50 border border-slate-200 text-slate-400 flex items-center justify-center shrink-0 group-hover:border-blue-500/30 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.2}
                    stroke="currentColor"
                    className="w-3.5 h-3.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.499m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                </div>

                <div className="min-w-0 space-y-0.5">
                  <p className="font-bold text-slate-900 truncate group-hover:text-blue-600 transition-colors text-sm tracking-tight">
                    {item.productName}
                  </p>
                  <div className="flex items-center space-x-2 text-[10px] text-slate-400 font-normal">
                    <span>{item.date}</span>
                    <span>•</span>
                    <span className="font-mono uppercase">REF: {item.id}</span>
                  </div>
                </div>
              </div>

              {/* Sektor Kanan: Keterangan Varian & Komisi */}
              <div className="flex items-center justify-between sm:justify-end gap-6 shrink-0">
                <div className="text-left sm:text-right space-y-0.5">
                  <p className="text-slate-700 font-bold text-[11px]">
                    {item.variant}
                  </p>
                  <p className="text-[10px] text-slate-400 font-normal font-mono">
                    Base: {formatRupiah(item.price)}{" "}
                    <span className="font-bold">({item.qty}x)</span>
                  </p>
                </div>

                {/* Nominal Keuntungan Hijau Bersih Monospace */}
                <p className="font-mono font-bold text-emerald-600 text-sm text-right min-w-27.5 tracking-tight">
                  +{formatRupiah(item.commission)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregation Footer */}
        <div className="bg-slate-50/50 px-5 py-3.5 border-t border-slate-100 text-[11px] text-slate-400 font-bold flex justify-between items-center">
          <p className="font-sans">
            Total Keuntungan Bersih Terhitung:{" "}
            <span className="text-slate-900 font-bold font-mono text-xs">
              {formatRupiah(
                sales.reduce((acc, curr) => acc + curr.commission, 0),
              )}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
