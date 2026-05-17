// app/(admin)/admin/pesanan/page.jsx
"use client"; // 🌟 TAMBAHKAN INI DI BARIS PALING ATAS UNTUK MENYEMBUHKAN ERROR

import React from "react";
import Link from "next/link";

const INCOMING_ORDERS = [
  {
    id: "TRX-1024",
    customer: "Siti Aminah",
    date: "Today, 14:20",
    items: "Gamis Silk Medina (Emerald Green - M) x1",
    total: 385000,
    payment: "BSI Transfer",
    status: "Completed",
    initial: "SA",
  },
  {
    id: "TRX-1023",
    customer: "Ahmad Fauzi",
    date: "Today, 11:05",
    items: "Koko Kurta Modern (Navy - L) x2, Peci Al-Kahfi x1",
    total: 410000,
    payment: "QRIS Paylater",
    status: "In Review",
    initial: "AF",
  },
  {
    id: "TRX-1022",
    customer: "Zahra Nabila",
    date: "Yesterday, 18:30",
    items: "Abaya Malikah Jetblack (XL) x1",
    total: 450000,
    payment: "BCA Virtual Account",
    status: "Processing",
    initial: "ZN",
  },
  {
    id: "TRX-1021",
    customer: "Dewi Sartika",
    date: "15 May 2026, 09:14",
    items: "Hijab Pashmina Ceruty (Hitam) x3",
    total: 195000,
    payment: "Mandiri Transfer",
    status: "Completed",
    initial: "DS",
  },
];

export default function AdminPesanan() {
  const formatRupiah = (value) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="space-y-8 min-h-[calc(100vh-4rem)] font-sans antialiased text-slate-600">
      {/* 1. ULTRA-CLEAN LIGHT HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200/60 pb-6">
        <div className="space-y-0.5">
          <div className="flex items-center space-x-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_6px_rgba(16,185,129,0.4)]" />
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              Order Streams
            </h2>
          </div>
          <p className="text-xs text-slate-400 font-medium">
            Real-time fulfillment terminal and secure transaction logs.
          </p>
        </div>

        {/* Export Action */}
        <button className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-xs font-semibold px-4 py-2.5 rounded-xl transition-all shadow-sm flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 text-slate-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
          <span>Export Dataset</span>
        </button>
      </div>

      {/* 2. MINIMALIST CONTROL TABS */}
      <div className="flex items-center space-x-1 bg-slate-200/40 p-1 rounded-xl text-xs font-semibold text-slate-500 max-w-sm shadow-inner">
        <button className="bg-white text-slate-900 px-4 py-1.5 rounded-lg shadow-sm flex items-center gap-1.5">
          All{" "}
          <span className="bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded text-[10px] font-mono">
            142
          </span>
        </button>
        <button className="px-3 py-1.5 rounded-lg hover:text-slate-900 transition-colors flex items-center gap-1.5">
          Review <span className="text-amber-600 font-mono text-[10px]">1</span>
        </button>
        <button className="px-3 py-1.5 rounded-lg hover:text-slate-900 transition-colors flex items-center gap-1.5">
          Process <span className="text-blue-600 font-mono text-[10px]">1</span>
        </button>
      </div>

      {/* 3. PREMIUM WHITE BENTO CARD-STREAM */}
      <div className="space-y-3">
        {INCOMING_ORDERS.map((order) => {
          const statusConfig = {
            Completed: {
              dot: "bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.4)]",
              label: "Completed",
              text: "text-emerald-600 bg-emerald-50 border-emerald-100",
            },
            "In Review": {
              dot: "bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.4)]",
              label: "In Review",
              text: "text-amber-700 bg-amber-50 border-amber-100",
            },
            Processing: {
              dot: "bg-blue-500 shadow-[0_0_6px_rgba(59,130,246,0.4)]",
              label: "Processing",
              text: "text-blue-700 bg-blue-50 border-blue-100",
            },
            Cancelled: {
              dot: "bg-slate-400 shadow-[0_0_6px_rgba(148,163,184,0.4)]",
              label: "Cancelled",
              text: "text-slate-600 bg-slate-50 border-slate-100",
            },
          }[order.status];

          return (
            <Link
              key={order.id}
              href={`/admin/pesanan/${order.id}`}
              className="bg-white rounded-2xl p-5 shadow-[0_4px_25px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.03)] border border-slate-100/80 transition-all duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-6 group block active:scale-[0.99]"
            >
              {/* SEKTOR KIRI */}
              <div className="flex items-center space-x-4 flex-1 min-w-0">
                <div className="w-9 h-9 rounded-xl bg-slate-50 text-slate-600 font-bold border border-slate-200/60 flex items-center justify-center text-xs flex-shrink-0 group-hover:border-emerald-500/30 group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-all duration-300">
                  {order.initial}
                </div>

                <div className="space-y-0.5 min-w-0">
                  <div className="flex items-center space-x-2.5">
                    <h3 className="font-semibold text-slate-900 text-sm tracking-tight group-hover:text-emerald-700 transition-colors">
                      {order.customer}
                    </h3>
                    <span className="text-[10px] font-mono font-bold text-slate-400 bg-slate-50 border border-slate-100 px-1.5 py-0.5 rounded">
                      {order.id}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-normal truncate max-w-xs md:max-w-md">
                    {order.items}
                  </p>
                </div>
              </div>

              {/* SEKTOR TENGAH */}
              <div className="hidden lg:flex flex-col space-y-0.5 text-left w-36 flex-shrink-0">
                <span className="text-xs text-slate-500 font-medium tracking-tight">
                  {order.date}
                </span>
                <span className="text-[10px] font-mono text-slate-400 uppercase">
                  {order.payment}
                </span>
              </div>

              {/* SISI KANAN */}
              <div className="flex items-center justify-between lg:justify-end gap-6 border-t lg:border-t-0 border-slate-50 pt-3 lg:pt-0 flex-shrink-0">
                <div className="text-left lg:text-right space-y-1 min-w-[110px]">
                  <p className="text-sm font-semibold text-slate-900 tracking-tight">
                    {formatRupiah(order.total)}
                  </p>
                  <div
                    className={`inline-flex items-center space-x-1.5 px-2 py-0.5 rounded-md border text-[10px] font-medium ${statusConfig.text}`}
                  >
                    <span
                      className={`w-1 h-1 rounded-full ${statusConfig.dot}`}
                    />
                    <span>{statusConfig.label}</span>
                  </div>
                </div>

                {/* Tombol Aksi - Aman di-klik */}
                <div className="w-32 text-right relative z-10">
                  {order.status === "Processing" ? (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        alert("Order dispatched!");
                      }}
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white text-[11px] font-semibold py-2 px-3 rounded-xl transition-all shadow-sm"
                    >
                      Dispatch
                    </button>
                  ) : order.status === "In Review" ? (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        alert("Payment approved!");
                      }}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-semibold py-2 px-3 rounded-xl transition-all shadow-md shadow-emerald-600/10"
                    >
                      Approve
                    </button>
                  ) : (
                    <span className="text-[11px] font-medium text-slate-300 pr-2 block select-none">
                      Archived
                    </span>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* 4. PAGINATION */}
      <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium pt-4">
        <p>
          Console log:{" "}
          <span className="text-slate-600 font-semibold">
            {INCOMING_ORDERS.length} active streams
          </span>
        </p>
        <div className="flex space-x-2">
          <button
            className="px-3 py-1.5 bg-white border border-slate-200 text-slate-400 rounded-lg cursor-not-allowed"
            disabled
          >
            Prev
          </button>
          <button className="px-3 py-1.5 bg-white border border-slate-200 text-slate-700 rounded-lg hover:border-slate-300 transition-colors shadow-sm">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
