// app/(admin)/admin/keuangan/page.jsx
"use client";

import React, { useState } from "react";

const DATA_LEDGER_MASTER = [
  {
    id: "LED-9021",
    date: "2026-05-17",
    desc: "Penjualan Produk (TRX-1024)",
    type: "Credit",
    amount: 385000,
    category: "Sales",
  },
  {
    id: "LED-9020",
    date: "2026-05-17",
    desc: "Payout Komisi Afiliasi (PAY-8801)",
    type: "Debit",
    amount: 450000,
    category: "Marketing",
  },
  {
    id: "LED-9019",
    date: "2026-05-16",
    desc: "Restock Kain Silk Medina & Jetblack",
    type: "Debit",
    amount: 3200000,
    category: "Inventory (HPP)",
  },
  {
    id: "LED-9018",
    date: "2026-05-15",
    desc: "Penjualan Produk (TRX-1021)",
    type: "Credit",
    amount: 195000,
    category: "Sales",
  },
  {
    id: "LED-9017",
    date: "2026-05-12",
    desc: "Biaya Iklan Facebook & Instagram Ads",
    type: "Debit",
    amount: 1200000,
    category: "Marketing",
  },
  {
    id: "LED-9016",
    date: "2026-05-10",
    desc: "Langganan Server Cloud & Domain Toko",
    type: "Debit",
    amount: 350000,
    category: "Operational",
  },
  {
    id: "LED-9015",
    date: "2026-04-28",
    desc: "Penjualan Produk Grosir Kloter 4",
    type: "Credit",
    amount: 8900000,
    category: "Sales",
  },
  {
    id: "LED-9014",
    date: "2026-04-25",
    desc: "Sewa Studio Foto & Talent Catalog",
    type: "Debit",
    amount: 1500000,
    category: "Operational",
  },
  {
    id: "LED-9013",
    date: "2026-04-20",
    desc: "Penjualan Produk (TRX-0982)",
    type: "Credit",
    amount: 450000,
    category: "Sales",
  },
  {
    id: "LED-9012",
    date: "2026-04-15",
    desc: "Gaji Penjahit & Tim Packing Bulanan",
    type: "Debit",
    amount: 4200000,
    category: "Operational",
  },
  {
    id: "LED-9011",
    date: "2026-04-05",
    desc: "Endorsement Selebgram Hijab Premium",
    type: "Debit",
    amount: 2500000,
    category: "Marketing",
  },
];

export default function AdminKeuangan() {
  const [ledgerData, setLedgerData] = useState(DATA_LEDGER_MASTER);
  const [startDate, setStartDate] = useState("2026-04-01");
  const [endDate, setEndDate] = useState("2026-05-31");

  // State Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expenseDesc, setExpenseDesc] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseCategory, setExpenseCategory] = useState("Operational");

  const formatRupiah = (value) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);
  };

  // Engine Filter (Murni Logika Anda)
  const filteredLedger = ledgerData.filter((log) => {
    const matchStart = startDate ? log.date >= startDate : true;
    const matchEnd = endDate ? log.date <= endDate : true;
    return matchStart && matchEnd;
  });

  // Accumulator Akuntansi (Murni Logika Anda)
  const incomeStatement = filteredLedger.reduce(
    (acc, curr) => {
      if (curr.type === "Credit") {
        acc.revenue += curr.amount;
      } else {
        if (curr.category === "Inventory (HPP)") acc.cos += curr.amount;
        else if (curr.category === "Marketing") acc.marketing += curr.amount;
        else if (curr.category === "Operational")
          acc.operational += curr.amount;
      }
      return acc;
    },
    { revenue: 0, cos: 0, marketing: 0, operational: 0 },
  );

  const grossProfit = incomeStatement.revenue - incomeStatement.cos;
  const totalExpenses = incomeStatement.marketing + incomeStatement.operational;
  const netProfit = grossProfit - totalExpenses;
  const profitMargin =
    incomeStatement.revenue > 0
      ? (netProfit / incomeStatement.revenue) * 100
      : 0;

  const handleAddExpense = (e) => {
    e.preventDefault();
    if (!expenseDesc || !expenseAmount) return;

    const amountNum = parseFloat(expenseAmount);
    const newLedgerId = `LED-${Math.floor(1000 + Math.random() * 9000)}`;

    const newEntry = {
      id: newLedgerId,
      date: "2026-05-17",
      desc: expenseDesc,
      type: "Debit",
      amount: amountNum,
      category: expenseCategory,
    };

    setLedgerData([newEntry, ...ledgerData]);
    setExpenseDesc("");
    setExpenseAmount("");
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-8 bg-[#f8fafc] min-h-[calc(100vh-4rem)] p-2 font-sans antialiased text-slate-600 relative">
      {/* ============================================================== */}
      {/* 1. COMPACT INTERACTIVE TOP HEADER                              */}
      {/* ============================================================== */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 border-b border-slate-200/60 pb-5 print:hidden">
        <div className="space-y-0.5">
          <div className="flex items-center space-x-2">
            <h2 className="text-lg font-bold text-slate-900 tracking-tight">
              Panel Keuangan & Karyawan
            </h2>
            <div className="flex items-center space-x-1 bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-lg text-[10px] font-bold border border-emerald-200/40">
              <span className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse" />
              <span>System Live</span>
            </div>
          </div>
          <p className="text-xs text-slate-400 font-normal">
            Sistem pemantauan HPP, arus modal mutasi, dan indeks margin
            profitabilitas.
          </p>
        </div>

        {/* Date Filter & Action Group */}
        <div className="flex flex-wrap items-center gap-3 text-xs w-full lg:w-auto">
          <div className="flex items-center bg-white border border-slate-200 rounded-xl px-3 py-2 shadow-sm text-slate-700 flex-1 sm:flex-initial gap-2">
            <div className="flex items-center space-x-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                From
              </span>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="outline-none bg-transparent font-semibold text-slate-800 text-xs cursor-pointer border-none p-0 focus:ring-0"
              />
            </div>
            <span className="text-slate-300 text-xs select-none">/</span>
            <div className="flex items-center space-x-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                To
              </span>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="outline-none bg-transparent font-semibold text-slate-800 text-xs cursor-pointer border-none p-0 focus:ring-0"
              />
            </div>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2 rounded-xl transition-all shadow-sm flex items-center justify-center space-x-2 flex-shrink-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-3.5 h-3.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <span>Record Expense</span>
          </button>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 2. DUAL-PANE EXECUTIVE LAYOUT GRID                             */}
      {/* ============================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* ------------------------------------------------------------ */}
        {/* DECK KIRI: HERO BALANCE BANNER & STATEMENT P&L (5 Kolom)      */}
        {/* ------------------------------------------------------------ */}
        <div className="lg:col-span-5 space-y-6">
          {/* Deep Royal Blue Net Profit Banner */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6 rounded-3xl shadow-md shadow-blue-600/5 flex flex-col justify-between min-h-[140px] relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white/[0.04] rounded-full blur-2xl" />
            <p className="text-[10px] font-bold uppercase tracking-wider text-blue-100/70">
              Laba Bersih Terfilter
            </p>
            <div className="space-y-0.5">
              <p className="text-3xl font-extrabold font-mono tracking-tight">
                {formatRupiah(netProfit)}
              </p>
              <p className="text-[10px] text-blue-100/60 font-medium">
                Ikhtisar Arus Kas Aktual Terkonsolidasi
              </p>
            </div>
          </div>

          {/* Statement Laba Rugi Formal (P&L Card) */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-[0_4px_25px_rgba(0,0,0,0.01)] space-y-5">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="font-bold text-slate-900 text-sm tracking-tight">
                HPP & Laba Rugi
              </h3>
              <p className="text-[11px] text-slate-400">
                Struktur performa finansial neraca kas berjalan.
              </p>
            </div>

            <div className="space-y-3.5 text-xs font-semibold">
              <div className="flex justify-between text-slate-600">
                <span className="font-medium">Pendapatan Penjualan Kotor</span>
                <span className="font-mono text-slate-900">
                  {formatRupiah(incomeStatement.revenue)}
                </span>
              </div>
              <div className="flex justify-between text-slate-400 border-b border-slate-100 pb-3">
                <span className="font-medium">Harga Pokok Penjualan (HPP)</span>
                <span className="font-mono text-rose-500">
                  -{formatRupiah(incomeStatement.cos)}
                </span>
              </div>

              <div className="flex justify-between text-slate-900 font-bold bg-slate-50 px-3 py-2 rounded-xl border border-slate-100/60">
                <span>Laba Kotor (Gross Profit)</span>
                <span className="font-mono">{formatRupiah(grossProfit)}</span>
              </div>

              <div className="space-y-2.5 pt-1 text-slate-600">
                <div className="flex justify-between">
                  <span className="font-medium">Biaya Promosi & Afiliasi</span>
                  <span className="font-mono">
                    -{formatRupiah(incomeStatement.marketing)}
                  </span>
                </div>
                <div className="flex justify-between text-slate-400 border-b border-slate-100 pb-3">
                  <span className="font-medium">
                    Biaya Operasional & Server
                  </span>
                  <span className="font-mono">
                    -{formatRupiah(incomeStatement.operational)}
                  </span>
                </div>
              </div>

              {/* Net Margin Ring Indicator Widget */}
              <div className="pt-2 flex items-center justify-between bg-slate-50/50 p-3 rounded-2xl border border-slate-100">
                <div className="space-y-0.5">
                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">
                    Net Margin Index
                  </span>
                  <p className="text-xs text-slate-500 font-medium">
                    Rasio profitabilitas bersih
                  </p>
                </div>
                <span className="text-base font-black text-indigo-600 font-mono">
                  {profitMargin.toFixed(1)}%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------ */}
        {/* DECK KANAN: RADAR METRIKS MINI & DATA STREAM LEDGER (7 Kolom) */}
        {/* ------------------------------------------------------------ */}
        <div className="lg:col-span-7 space-y-4">
          {/* Baris Atas Ledger: Radar Metriks Kecil */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-2xl border border-slate-200/60 shadow-sm space-y-1">
              <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                Total Omzet Masuk
              </span>
              <p className="text-base font-bold text-slate-900 font-mono truncate">
                {formatRupiah(incomeStatement.revenue)}
              </p>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-200/60 shadow-sm space-y-1">
              <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                Total Beban Keluar
              </span>
              <p className="text-base font-bold text-rose-600 font-mono truncate">
                {formatRupiah(incomeStatement.cos + totalExpenses)}
              </p>
            </div>
          </div>

          {/* Master Ledger List Cards Stream */}
          <div className="bg-white rounded-3xl border border-slate-200/60 shadow-[0_4px_25px_rgba(0,0,0,0.01)] overflow-hidden">
            <div className="p-4 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-slate-900 text-sm tracking-tight">
                  The Master Ledger
                </h3>
                <p className="text-[11px] text-slate-400">
                  Jurnal rekaman mutasi dana masuk dan pengeluaran beban kas.
                </p>
              </div>
              <span className="text-[10px] font-mono bg-slate-100 text-slate-500 px-2 py-0.5 rounded-md font-bold">
                {filteredLedger.length} Transaksi
              </span>
            </div>

            {/* List Element Rows Stream */}
            <div className="divide-y divide-slate-100 max-h-[500px] overflow-y-auto">
              {filteredLedger.length === 0 ? (
                <div className="text-center py-16 text-slate-400 text-xs font-medium bg-slate-50/20">
                  Tidak ada aktivitas finansial terekam di rentang tanggal ini.
                </div>
              ) : (
                filteredLedger.map((log) => {
                  const isCredit = log.type === "Credit";

                  return (
                    <div
                      key={log.id}
                      className="p-4 flex items-center justify-between gap-4 text-xs font-medium hover:bg-slate-50/50 transition-colors group"
                    >
                      {/* Sektor Kiri: Ikon Logistik & Judul Transaksi */}
                      <div className="flex items-center space-x-3.5 min-w-0">
                        {/* Box Icon Indicator */}
                        <div
                          className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 border ${
                            isCredit
                              ? "bg-emerald-50 text-emerald-600 border-emerald-100"
                              : "bg-rose-50 text-rose-500 border-rose-100"
                          }`}
                        >
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
                              d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.007m0-.008a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6h.008v.008H3.75V10.5Zm0 6h.008v.008H3.75v-.008ZM9.75 4.5h.008v.008H9.75V4.5Zm0 6h.008v.008H9.75V10.5Zm0 6h.008v.008H9.75v-.008ZM15.75 4.5h.008v.008H15.75V4.5Zm0 6h.008v.008H15.75V10.5Z"
                            />
                          </svg>
                        </div>

                        <div className="min-w-0 space-y-0.5">
                          <p className="font-bold text-slate-900 truncate group-hover:text-blue-600 transition-colors">
                            {log.desc}
                          </p>
                          <div className="flex items-center space-x-2 text-[10px] text-slate-400 font-normal">
                            <span>{log.date}</span>
                            <span>•</span>
                            <span className="font-mono uppercase tracking-wide">
                              ID: {log.id}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Sektor Kanan: Alokasi Budget & Nominal Mutasi */}
                      <div className="flex items-center space-x-4 flex-shrink-0">
                        <span className="hidden sm:inline-block bg-slate-50 border border-slate-200 text-slate-500 text-[9px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider">
                          {log.category.replace(" (HPP)", "")}
                        </span>

                        <p
                          className={`font-mono font-bold text-sm text-right min-w-[110px] tracking-tight ${isCredit ? "text-emerald-600" : "text-rose-500"}`}
                        >
                          {isCredit ? "+" : "-"}
                          {formatRupiah(log.amount)}
                        </p>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Pagination Footer */}
            <div className="bg-slate-50/60 px-4 py-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
              <p>
                Kas Terdata:{" "}
                <span className="text-slate-700 font-semibold">
                  {filteredLedger.length} mutasi
                </span>
              </p>
              <div className="flex space-x-1">
                <button
                  className="px-2.5 py-1 bg-white border border-slate-200 rounded-lg cursor-not-allowed text-slate-300"
                  disabled
                >
                  Prev
                </button>
                <button className="px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-slate-700 hover:border-slate-300 transition-colors shadow-sm">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 3. MODAL RECORD EXPENSE POP-UP                                 */}
      {/* ============================================================== */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl p-6 w-full max-w-md border border-slate-100 shadow-2xl space-y-5 animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <div>
                <h3 className="font-bold text-slate-900 text-sm tracking-tight">
                  Record Outflow Expense
                </h3>
                <p className="text-[11px] text-slate-400">
                  Input pengeluaran kas operasional baru.
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-900 p-1 rounded-lg hover:bg-slate-50 transition-all"
              >
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <form
              onSubmit={handleAddExpense}
              className="space-y-4 text-xs font-semibold"
            >
              <div className="space-y-1.5">
                <label className="text-slate-500 font-bold uppercase text-[10px] tracking-wider">
                  Keterangan Biaya
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Pembelian Plastik Packing"
                  value={expenseDesc}
                  onChange={(e) => setExpenseDesc(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200/80 rounded-xl px-3.5 py-2.5 outline-none focus:border-slate-900 focus:bg-white transition-all font-medium text-slate-800"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-slate-500 font-bold uppercase text-[10px] tracking-wider">
                  Jumlah Pengeluaran (Rp)
                </label>
                <input
                  type="number"
                  required
                  placeholder="Contoh: 150000"
                  value={expenseAmount}
                  onChange={(e) => setExpenseAmount(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200/80 rounded-xl px-3.5 py-2.5 outline-none focus:border-slate-900 focus:bg-white transition-all font-mono text-slate-800"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-slate-500 font-bold uppercase text-[10px] tracking-wider">
                  Alokasi Pos Anggaran
                </label>
                <select
                  value={expenseCategory}
                  onChange={(e) => setExpenseCategory(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 outline-none cursor-pointer font-medium text-slate-800"
                >
                  <option value="Operational">
                    Operational Expense (Listrik, Server, Gaji)
                  </option>
                  <option value="Marketing">
                    Marketing Expense (Iklan Ads, Afiliasi)
                  </option>
                  <option value="Inventory (HPP)">
                    Inventory/HPP (Restock Kain, Konveksi)
                  </option>
                </select>
              </div>
              <div className="flex space-x-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 bg-white border border-slate-200 text-slate-700 py-2.5 rounded-xl font-semibold hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-slate-900 text-white py-2.5 rounded-xl font-semibold shadow-md hover:bg-slate-800 transition-colors"
                >
                  Save Entry
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
