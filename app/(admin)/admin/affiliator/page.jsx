// app/(admin)/admin/affiliator/page.jsx
"use client";

import React, { useState } from "react";

// Data Dummy Antrean Pengajuan Pencairan Dana (Payout Requests)
const DUMMY_PAYOUT_REQUESTS = [
  {
    id: "PAY-8801",
    name: "Rendra Wijaya",
    amount: 450000,
    bank: "BCA - 841029311",
    date: "Today, 09:30",
    status: "Pending",
  },
  {
    id: "PAY-8802",
    name: "Siti Aminah",
    amount: 1200000,
    bank: "BSI - 771029344",
    date: "Yesterday, 15:10",
    status: "Pending",
  },
];

// Data Dummy List Performa Seluruh Afiliator Toko
const DUMMY_AFFILIATOR_LIST = [
  {
    id: 1,
    name: "Rendra Wijaya",
    code: "KAHFI-RENDRA",
    totalSales: 24,
    totalCommission: 1450000,
    joined: "10 Jan 2026",
  },
  {
    id: 2,
    name: "Siti Aminah",
    code: "AMINAH-SYARI",
    totalSales: 52,
    totalCommission: 4800000,
    joined: "15 Jan 2026",
  },
  {
    id: 3,
    name: "Ahmad Fauzi",
    code: "FAUZI-MODERN",
    totalSales: 12,
    totalCommission: 750000,
    joined: "02 Feb 2026",
  },
  {
    id: 4,
    name: "Fitri Handayani",
    code: "FITRI-STYLE",
    totalSales: 8,
    totalCommission: 400000,
    joined: "20 Mar 2026",
  },
];

export default function AdminAffiliator() {
  const [requests, setRequests] = useState(DUMMY_PAYOUT_REQUESTS);

  const formatRupiah = (value) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);
  };

  // Handler simulasi menyetujui payout transfer uang
  const handleApprovePayout = (requestId, name, amount) => {
    alert(
      `Payout ${requestId} sebesar ${formatRupiah(amount)} untuk ${name} BERHASIL disetujui & tercatat ditransfer!`,
    );
    setRequests(requests.filter((req) => req.id !== requestId));
  };

  return (
    <div className="space-y-8 bg-[#f8fafc] min-h-[calc(100vh-4rem)] p-2 font-sans antialiased text-slate-600">
      {/* 1. MARKETING MANAGEMENT HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200/60 pb-6">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">
            Affiliates & Payouts
          </h2>
          <p className="text-xs text-slate-400 font-medium mt-0.5">
            Kelola kemitraan komisi penjualan, tinjau performa link referral,
            dan cairkan saldo dana afiliasi.
          </p>
        </div>

        {/* Indikator Aturan Komisi Global */}
        <div className="bg-emerald-50 text-emerald-700 px-3 py-2 rounded-xl text-xs font-semibold border border-emerald-100 flex items-center space-x-2 self-start sm:self-auto">
          <span>Global Commission Rate:</span>
          <span className="bg-emerald-600 text-white px-2 py-0.5 rounded-md font-mono text-[11px]">
            10% per Item
          </span>
        </div>
      </div>

      {/* 2. FINANCIAL METRICS SYSTEM SUMMARY */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            Total Commission Paid
          </p>
          <p className="text-xl font-bold text-slate-900 mt-1">
            {formatRupiah(24350000)}
          </p>
          <p className="text-[10px] text-slate-400 mt-1">
            Akumulasi dana keluar sepanjang masa
          </p>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            Awaiting Payout Queue
          </p>
          <p className="text-xl font-bold text-amber-600 mt-1">
            {requests.length > 0
              ? formatRupiah(
                  requests.reduce((acc, curr) => acc + curr.amount, 0),
                )
              : "Rp 0"}
          </p>
          <p className="text-[10px] text-slate-400 mt-1">
            {requests.length} berkas pengajuan dalam antrean
          </p>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            Active Promoters
          </p>
          <p className="text-xl font-bold text-slate-900 mt-1">42 Registered</p>
          <p className="text-[10px] text-slate-400 mt-1">
            Mitra afiliasi terverifikasi aktif
          </p>
        </div>
      </div>

      {/* 3. BENTO LAYOUT: ANTREAN PAYOUT (KIRI) & LIST PERFORMA (KANAN) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* ============================================================== */}
        {/* KOTAK KIRI: ANTREAN PERMINTAAN REQUEST PAYOUT (5 Kolom)       */}
        {/* ============================================================== */}
        <div className="lg:col-span-5 bg-white p-6 rounded-3xl border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.01)] space-y-4">
          <div>
            <h3 className="font-semibold text-slate-900 text-sm tracking-tight">
              Payout Approvals
            </h3>
            <p className="text-[11px] text-slate-400">
              Segera transfer sesuai data bank lalu klik tombol setujui.
            </p>
          </div>

          <div className="space-y-3">
            {requests.length === 0 ? (
              <div className="text-center py-8 bg-slate-50 rounded-xl border border-dashed border-slate-200">
                <p className="text-xs text-slate-400 font-medium">
                  Semua permintaan pencairan dana selesai diproses ✨
                </p>
              </div>
            ) : (
              requests.map((req) => (
                <div
                  key={req.id}
                  className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 flex flex-col justify-between gap-3 text-xs"
                >
                  <div className="flex justify-between items-start">
                    <div className="space-y-0.5">
                      <p className="font-semibold text-slate-900 text-sm">
                        {req.name}
                      </p>
                      <p className="text-[10px] font-mono text-slate-400">
                        {req.id} • {req.date}
                      </p>
                    </div>
                    <p className="font-bold text-slate-900 text-sm font-mono">
                      {formatRupiah(req.amount)}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-slate-200/50 pt-2.5">
                    <div className="space-y-0.5">
                      <p className="text-[9px] uppercase tracking-wider text-slate-400 font-bold">
                        Rekening Tujuan
                      </p>
                      <p className="font-mono text-slate-700 font-semibold">
                        {req.bank}
                      </p>
                    </div>
                    {/* Tombol Eksekusi Cairkan Uang */}
                    <button
                      onClick={() =>
                        handleApprovePayout(req.id, req.name, req.amount)
                      }
                      className="bg-slate-900 hover:bg-slate-800 text-white text-[10px] font-bold py-1.5 px-3 rounded-lg transition-all shadow-sm"
                    >
                      Approve & Pay
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* ============================================================== */}
        {/* KOTAK KANAN: TABEL PERFORMA AFILIATOR (7 Kolom)                */}
        {/* ============================================================== */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.01)] overflow-hidden">
          <div className="p-6 border-b border-slate-100">
            <h3 className="font-semibold text-slate-900 text-sm tracking-tight">
              Leaderboard Affiliates
            </h3>
            <p className="text-[11px] text-slate-400">
              Peringkat performa rujukan tautan belanja berdasarkan nilai omzet
              komisi.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-100 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  <th className="px-5 py-3">Promoter</th>
                  <th className="px-5 py-3">Referral Code</th>
                  <th className="px-5 py-3 text-center">Sales Qty</th>
                  <th className="px-5 py-3 text-right">Total Commission</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600 font-medium">
                {DUMMY_AFFILIATOR_LIST.map((aff) => (
                  <tr
                    key={aff.id}
                    className="hover:bg-slate-50/40 transition-colors"
                  >
                    {/* Nama & Tanggal Gabung */}
                    <td className="px-5 py-4">
                      <p className="font-semibold text-slate-900">{aff.name}</p>
                      <p className="text-[10px] text-slate-400 font-normal mt-0.5">
                        Joined {aff.joined}
                      </p>
                    </td>
                    {/* Kode Unik Kupon/Referral */}
                    <td className="px-5 py-4">
                      <span className="font-mono bg-slate-100 border border-slate-200/50 text-slate-700 px-2 py-0.5 rounded text-[10px] font-bold">
                        {aff.code}
                      </span>
                    </td>
                    {/* Jumlah Barang Terjual */}
                    <td className="px-5 py-4 text-center font-bold text-slate-800">
                      {aff.totalSales}x sales
                    </td>
                    {/* Total Komisi Masuk */}
                    <td className="px-5 py-4 text-right font-semibold text-slate-900 font-mono">
                      {formatRupiah(aff.totalCommission)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
