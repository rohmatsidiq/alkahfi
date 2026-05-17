// app/(admin)/admin/pesanan/[id]/page.jsx
"use client";

import React from "react";
import Link from "next/link";

const DUMMY_ORDER_DETAIL = {
  id: "TRX-1024",
  date: "17 Mei 2026, 14:20 WIB",
  status: "Completed",
  customer: {
    name: "Siti Aminah",
    email: "siti.aminah@example.com",
    phone: "081234567890",
    address: "Jl. Kebon Sirih No. 45, Blok C, Menteng, Jakarta Pusat, 10340",
  },
  shipping: {
    courier: "J&T Express",
    service: "Reguler (2-3 Hari)",
    trackingNumber: "JT91283748102",
    cost: 0,
  },
  products: [
    {
      id: 1,
      name: "Gamis Silk Premium Medina",
      variant: "Emerald Green, M",
      price: 385000,
      qty: 1,
      img: "https://i.pinimg.com/736x/77/4d/2f/774d2fee919f347b6a2d80d25a3926b4.jpg",
    },
  ],
  payment: {
    method: "BSI Transfer (Manual Verification)",
    subtotal: 385000,
    discount: 0,
    total: 385000,
  },
};

export default function AdminDetailPesanan({ params }) {
  const { id } = React.use(params);
  const order =
    DUMMY_ORDER_DETAIL.id === id
      ? DUMMY_ORDER_DETAIL
      : { ...DUMMY_ORDER_DETAIL, id: id };

  const formatRupiah = (value) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);
  };

  const steps = ["Paid", "Processing", "Dispatched", "Completed"];
  const currentStepIndex = steps.indexOf(order.status);

  return (
    <div className="space-y-8 bg-[#f8fafc] print:bg-white min-h-[calc(100vh-4rem)] p-2 print:p-0 font-sans antialiased text-slate-600">
      {/* ============================================================== */}
      {/* 1. INTERFACE HEADER - DISEMBUNYIKAN SAAT DICETAK (print:hidden) */}
      {/* ============================================================== */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-b border-slate-200/60 pb-6 print:hidden">
        <div className="space-y-1">
          <Link
            href="/admin/pesanan"
            className="inline-flex items-center text-xs font-medium text-emerald-600 hover:text-emerald-700 transition-colors gap-1 mb-1"
          >
            ← Back to Order Stream
          </Link>
          <div className="flex items-center space-x-3">
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              Order {order.id}
            </h2>
            <span className="text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-200/60 px-2 py-0.5 rounded-md font-medium">
              {order.status}
            </span>
          </div>
          <p className="text-xs text-slate-400 font-medium">
            Placed on {order.date}
          </p>
        </div>

        <div className="flex items-center space-x-2 text-xs">
          {/* Trigger print window */}
          <button
            onClick={() => window.print()}
            className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-3.5 py-2 rounded-xl font-semibold transition-all shadow-sm flex items-center space-x-2"
          >
            <span>Print Invoice</span>
          </button>
          <button className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-xl font-semibold transition-all shadow-sm">
            Update Status
          </button>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 2. STEPPER PROGRESS - DISEMBUNYIKAN SAAT DICETAK (print:hidden) */}
      {/* ============================================================== */}
      <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.01)] print:hidden">
        <div className="max-w-3xl mx-auto flex items-center justify-between relative">
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-slate-100 z-0" />
          {steps.map((step, index) => {
            const isDone = index <= currentStepIndex;
            const isCurrent = index === currentStepIndex;
            return (
              <div
                key={step}
                className="flex flex-col items-center relative z-10 flex-1"
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold border font-mono transition-all duration-300 ${
                    isCurrent
                      ? "bg-emerald-600 text-white border-emerald-600 shadow-md ring-4 ring-emerald-50"
                      : isDone
                        ? "bg-emerald-500 text-white border-emerald-500"
                        : "bg-white text-slate-400 border-slate-200"
                  }`}
                >
                  {isDone && !isCurrent ? "✓" : index + 1}
                </div>
                <span
                  className={`text-[10px] font-medium mt-2 tracking-wide uppercase ${isCurrent ? "text-slate-900 font-bold" : isDone ? "text-slate-500" : "text-slate-400"}`}
                >
                  {step}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* ============================================================== */}
      {/* 3. CORE PRINT LAYOUT INVOICE AREA                             */}
      {/* ============================================================== */}
      {/* Di browser berupa grid biasa, saat di-print dipaksa memanjang ke bawah format A4 */}
      <div className="print:block print:text-black print:text-sm space-y-6">
        {/* LOGO & NOMOR INVOICE RESMI (HANYA MUNCUL SAAT PRINT: print:flex) */}
        <div className="hidden print:flex items-center justify-between border-b-2 border-slate-900 pb-6">
          <div>
            <h1 className="text-2xl font-serif font-bold text-slate-950 tracking-wide">
              AL-KAHFI STORE
            </h1>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              Premium Modest Fashion Muslim
            </p>
          </div>
          <div className="text-right space-y-1">
            <h2 className="text-xl font-mono font-bold tracking-tight text-slate-900">
              INVOICE
            </h2>
            <p className="text-xs font-mono text-slate-600">ID: {order.id}</p>
            <p className="text-[11px] text-slate-400">{order.date}</p>
          </div>
        </div>

        {/* METADATA ALAMAT BILLING & SHIPPING INVOICE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 print:grid-cols-2">
          {/* Penerima / Ditagihkan kepada */}
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.01)] print:border-none print:p-0 print:shadow-none space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 print:text-slate-900 print:font-extrabold">
              Ditagihkan Kepada
            </h3>
            <div className="space-y-0.5 text-xs font-medium print:text-xs">
              <p className="text-slate-900 font-semibold print:text-black">
                {order.customer.name}
              </p>
              <p className="text-slate-500 print:text-slate-700">
                {order.customer.phone}
              </p>
              <p className="text-slate-400 font-normal leading-relaxed mt-1 print:text-slate-600">
                {order.customer.address}
              </p>
            </div>
          </div>

          {/* Logistik & Pengiriman */}
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.01)] print:border-none print:p-0 print:shadow-none space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 print:text-slate-900 print:font-extrabold">
              Detail Pengiriman
            </h3>
            <div className="space-y-1 text-xs font-medium print:text-xs">
              <p className="text-slate-900 font-semibold print:text-black">
                Kurir: {order.shipping.courier}
              </p>
              <p className="text-slate-400 font-normal print:text-slate-600">
                Layanan: {order.shipping.service}
              </p>
              <div className="pt-2 print:pt-1 space-y-1">
                <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold print:text-slate-900">
                  No. Resi Pengiriman
                </p>
                <p className="font-mono bg-slate-50 border border-slate-200 px-2.5 py-1.5 rounded-lg text-slate-700 inline-block font-bold print:bg-none print:border-none print:p-0 print:text-black">
                  {order.shipping.trackingNumber}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* TABEL DAFTAR BARANG YANG DIBELI (INVOICE STYLE) */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.01)] print:border-none print:shadow-none overflow-hidden">
          <table className="w-full text-left border-collapse text-xs print:text-xs">
            <thead>
              <tr className="bg-slate-50/70 border-b border-slate-100 print:bg-slate-100 print:border-b-2 print:border-slate-900 text-[11px] text-slate-400 font-bold uppercase tracking-wider print:text-black">
                <th className="px-6 py-4 print:px-2">Deskripsi Produk</th>
                <th className="px-6 py-4 print:px-2">Varian</th>
                <th className="px-6 py-4 print:px-2 text-center">Harga</th>
                <th className="px-6 py-4 print:px-2 text-center">Qty</th>
                <th className="px-6 py-4 print:px-2 text-right">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 print:divide-y print:divide-slate-300 text-slate-600 font-medium print:text-black">
              {order.products.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 print:px-2 flex items-center space-x-3 print:space-x-0">
                    <img
                      src={item.img}
                      alt=""
                      className="w-10 h-12 rounded-lg object-cover print:hidden"
                    />
                    <span className="font-semibold text-slate-900 print:text-black">
                      {item.name}
                    </span>
                  </td>
                  <td className="px-6 py-4 print:px-2 text-slate-400 print:text-slate-700">
                    {item.variant}
                  </td>
                  <td className="px-6 py-4 print:px-2 text-center font-mono">
                    {formatRupiah(item.price)}
                  </td>
                  <td className="px-6 py-4 print:px-2 text-center font-bold">
                    {item.qty}x
                  </td>
                  <td className="px-6 py-4 print:px-2 text-right font-semibold font-mono">
                    {formatRupiah(item.price * item.qty)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* SEKTOR BAWAH: RINKSAN KEUANGAN & TANDA TANGAN */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          {/* Info Tambahan Hukum / Keterangan (Kiri) */}
          <div className="md:col-span-7 space-y-1.5 p-2 print:p-0">
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider print:text-black">
              Metode Pembayaran
            </h4>
            <p className="text-xs font-semibold text-slate-800 print:text-black">
              {order.payment.method}
            </p>
            <p className="text-[10px] text-slate-400 font-light leading-relaxed print:text-slate-500">
              Barang yang sudah dibeli tidak dapat ditukar kembali kecuali
              terjadi cacat produksi dari pihak Al-Kahfi Store. Terima kasih
              telah berbelanja produk syar'i orisinal bersama kami.
            </p>
          </div>

          {/* Kotak Kalkulasi Total Uang (Kanan) */}
          <div className="md:col-span-5 bg-white p-6 rounded-3xl border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.01)] print:border-none print:shadow-none print:p-0 space-y-3 ml-auto w-full max-w-sm">
            <div className="space-y-2 text-xs text-slate-500 font-medium border-b border-slate-100 print:border-slate-300 pb-3">
              <div className="flex justify-between">
                <span>Subtotal Produk</span>
                <span className="text-slate-900 print:text-black font-mono">
                  {formatRupiah(order.payment.subtotal)}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Biaya Pengiriman</span>
                {order.shipping.cost === 0 ? (
                  <span className="text-emerald-600 font-medium print:text-black">
                    Free Shipping
                  </span>
                ) : (
                  <span className="text-slate-900 font-mono">
                    {formatRupiah(order.shipping.cost)}
                  </span>
                )}
              </div>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-slate-900 print:text-black uppercase tracking-wider text-[11px]">
                Total Akhir
              </span>
              <span className="text-base font-extrabold text-emerald-700 print:text-black font-mono">
                {formatRupiah(order.payment.total)}
              </span>
            </div>
          </div>
        </div>

        {/* TANDA TANGAN DAN STEMPEL RESMI TOKO (HANYA MUNCUL SAAT PRINT) */}
        <div className="hidden print:flex justify-end pt-12">
          <div className="text-center w-48 space-y-12">
            <p className="text-xs text-slate-800">Hormat Kami,</p>
            <div className="border-b border-slate-400 w-full mx-auto" />
            <p className="text-xs font-bold font-serif text-slate-950 uppercase tracking-wide">
              Al-Kahfi Management
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
