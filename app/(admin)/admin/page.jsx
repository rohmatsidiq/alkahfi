// src/app/(admin)/admin/page.jsx
import React from "react";

const RECENT_ORDERS = [
  {
    id: "TRX-1024",
    customer: "Siti Aminah",
    product: "Gamis Silk Medina",
    total: 385000,
    status: "Completed",
    time: "14:20",
  },
  {
    id: "TRX-1023",
    customer: "Ahmad Fauzi",
    product: "Koko Kurta Modern",
    total: 370000,
    status: "In Review",
    time: "11:05",
  },
  {
    id: "TRX-1022",
    customer: "Zahra Nabila",
    product: "Abaya Malikah Jetblack",
    total: 450000,
    status: "Processing",
    time: "Yesterday",
  },
];

export default function AdminDashboard() {
  const formatRupiah = (value) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="space-y-12 min-h-[calc(100vh-4rem)] font-sans antialiased">
      {/* 1. ELEGANT MINIMALIST HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-b border-slate-200/40 pb-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Metrics Console
          </h2>
          <p className="text-xs text-slate-400 font-medium">
            Real-time store activity and financial health overview.
          </p>
        </div>

        {/* Minimalist Switcher */}
        <div className="flex items-center space-x-1 bg-slate-200/50 p-1 rounded-xl text-[11px] font-semibold text-slate-600 self-start sm:self-auto shadow-inner">
          <button className="bg-white text-slate-900 px-3 py-1.5 rounded-lg shadow-sm">
            Overview
          </button>
          <button className="px-3 py-1.5 rounded-lg hover:text-slate-900 transition-colors">
            Analytics
          </button>
        </div>
      </div>

      {/* 2. HIGH-END GRADIENT METRICS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* Card 1: Gross Revenue */}
        <div className="bg-gradient-to-br from-emerald-900 via-emerald-950 to-slate-900 p-7 rounded-[24px] shadow-lg shadow-emerald-950/10 text-white space-y-4 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 border border-emerald-800/30">
          <div className="absolute -right-6 -top-6 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center justify-between relative z-10">
            <span className="text-[10px] font-bold text-emerald-200/60 uppercase tracking-widest">
              Gross Revenue
            </span>
            <span className="text-[10px] font-bold text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded-md border border-emerald-500/30">
              +12.4%
            </span>
          </div>
          <div className="space-y-1 relative z-10">
            <p className="text-3xl font-light tracking-tight">
              {formatRupiah(14250000)}
            </p>
            <p className="text-[10px] text-emerald-200/40 font-medium">
              Net profit margin adjusted
            </p>
          </div>
        </div>

        {/* Card 2: Incoming Volume */}
        <div className="bg-gradient-to-br from-teal-950 via-slate-900 to-slate-950 p-7 rounded-[24px] shadow-lg shadow-slate-950/10 text-white space-y-4 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 border border-teal-900/30">
          <div className="absolute -right-6 -top-6 w-24 h-24 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center justify-between relative z-10">
            <span className="text-[10px] font-bold text-teal-200/60 uppercase tracking-widest">
              Incoming Volume
            </span>
            <span className="text-[10px] font-bold text-teal-300 bg-teal-500/20 px-2 py-0.5 rounded-md border border-teal-500/30">
              +8.1%
            </span>
          </div>
          <div className="space-y-1 relative z-10">
            <p className="text-3xl font-light tracking-tight">24 Orders</p>
            <p className="text-[10px] text-teal-200/40 font-medium">
              Awaiting fulfillment dispatch
            </p>
          </div>
        </div>

        {/* Card 3: Conversion Index */}
        <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-7 rounded-[24px] shadow-lg shadow-indigo-950/10 text-white space-y-4 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 border border-indigo-900/20">
          <div className="absolute -right-6 -top-6 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center justify-between relative z-10">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              Conversion Index
            </span>
            <span className="text-[10px] font-bold text-slate-300 bg-white/5 px-2 py-0.5 rounded-md border border-white/10">
              Steady
            </span>
          </div>
          <div className="space-y-1 relative z-10">
            <p className="text-3xl font-light tracking-tight">4.82%</p>
            <p className="text-[10px] text-slate-400 font-medium">
              Session to checkout ratio
            </p>
          </div>
        </div>
      </div>

      {/* 3. BENTO LAYOUT: VISIBLE GRADIENT CHART WITH TOOLTIP NOMINAL */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* KANVAS KIRI: VELOCITY CHART */}
        <div className="lg:col-span-7 bg-white p-8 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between min-h-[320px]">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="space-y-0.5">
              <h3 className="font-semibold text-slate-900 text-sm tracking-tight">
                Velocity Chart
              </h3>
              <p className="text-[11px] text-slate-400">
                Weekly revenue distribution curves.
              </p>
            </div>
            <div className="flex items-center space-x-2 text-[11px] text-slate-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)] animate-pulse" />
              <span>Live Console</span>
            </div>
          </div>

          {/* DIAGRAM UTRAMODERN DENGAN PERSENTASE & NOMINAL HOVER */}
          <div className="h-40 flex items-end justify-between gap-4 pt-10 relative">
            <div className="absolute inset-x-0 top-12 border-b border-slate-100/70" />
            <div className="absolute inset-x-0 top-24 border-b border-slate-100/70" />

            {[50, 35, 75, 45, 90, 65, 100].map((height, idx) => {
              // Simulasi nominal rupiah berdasarkan persentase tinggi grafik (basis Rp 20.000 per 1%)
              const nominalValue = height * 20000;

              return (
                <div
                  key={idx}
                  className="flex-1 flex flex-col items-center justify-end h-full group relative z-10"
                >
                  {/* FLOATING VOUCHER / TOOLTIP NOMINAL (MUNCUL SAAT HOVER) */}
                  <div className="absolute bottom-full mb-2 bg-slate-900 text-white text-[9px] font-medium font-mono py-1 px-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-md transform translate-y-1 group-hover:translate-y-0 whitespace-nowrap z-30">
                    {formatRupiah(nominalValue)}
                    {/* Segitiga kecil di bawah tooltip */}
                    <div className="w-1.5 h-1.5 bg-slate-900 rotate-45 absolute top-full left-1/2 -translate-x-1/2 -translate-y-0.5" />
                  </div>

                  {/* Diagram Batang Gradasi */}
                  <div
                    style={{ height: `${height}%` }}
                    className="w-full bg-gradient-to-t from-emerald-500 to-teal-400 rounded-2xl transition-all duration-300 flex items-start justify-center relative shadow-md shadow-emerald-500/10 border border-emerald-400/40 group-hover:brightness-110 group-hover:shadow-emerald-500/25 cursor-pointer"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white opacity-40 group-hover:opacity-100 transition-opacity mt-2 shadow-sm" />
                  </div>

                  {/* Label Hari */}
                  <span className="text-[10px] text-slate-400 font-medium mt-3 transition-colors group-hover:text-slate-900">
                    {["S", "S", "R", "K", "J", "S", "M"][idx]}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* KANVAS KANAN: STREAM TRANSAKSI MINIMALIS */}
        <div className="lg:col-span-5 bg-white p-8 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between">
          <div className="border-b border-slate-100 pb-4">
            <h3 className="font-semibold text-slate-900 text-sm tracking-tight">
              Activity Stream
            </h3>
            <p className="text-[11px] text-slate-400">
              Latest checkout completions.
            </p>
          </div>

          {/* STREAM LIST DATA */}
          <div className="space-y-5 flex-1 pt-4">
            {RECENT_ORDERS.map((order) => {
              const dotColors = {
                Completed:
                  "bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.4)]",
                "In Review":
                  "bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.4)]",
                Processing: "bg-blue-500 shadow-[0_0_6px_rgba(59,130,246,0.4)]",
              }[order.status];

              return (
                <div
                  key={order.id}
                  className="flex items-center justify-between text-xs group transition-all"
                >
                  <div className="flex items-center space-x-3 min-w-0">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${dotColors} flex-shrink-0`}
                    />
                    <div className="min-w-0">
                      <p className="font-medium text-slate-800 truncate">
                        {order.customer}
                      </p>
                      <p className="text-[10px] text-slate-400 font-light mt-0.5">
                        {order.product} • {order.time}
                      </p>
                    </div>
                  </div>

                  <div className="text-right flex flex-col items-end space-y-0.5 pl-3 flex-shrink-0">
                    <p className="font-semibold text-slate-900">
                      {formatRupiah(order.total)}
                    </p>
                    <p className="text-[9px] text-slate-400 font-medium tracking-wide">
                      {order.status}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
