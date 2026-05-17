// src/app/(customer)/keranjang/page.jsx
"use client";

import React, { useState } from "react";

// Data Awal Dummy untuk isi keranjang
const INITIAL_CART_ITEMS = [
  {
    id: 1,
    name: "Gamis Silk Premium Medina",
    variant: "Emerald Green, M",
    price: 385000,
    quantity: 1,
    image:
      "https://i.pinimg.com/736x/f3/9f/b6/f39fb6d69e7b4b66399415af67eaa758.jpg",
  },
  {
    id: 2,
    name: "Hijab Pashmina Ceruty Baby Doll Premium",
    variant: "Hitam, Standar",
    price: 65000,
    quantity: 2,
    image:
      "https://i.pinimg.com/736x/9b/be/de/9bbede1b5a65271a53b3b1a33ea5f3be.jpg",
  },
];

// Opsi Kurir Ekspedisi Dummy beserta tarifnya
const SHIPPING_COURIERS = [
  { id: "jnt", name: "J&T Express", desc: "Reguler (2-3 Hari)", price: 18000 },
  { id: "jne", name: "JNE Reguler", desc: "Reguler (3-4 Hari)", price: 21000 },
  {
    id: "sicepat",
    name: "Sicepat Gokil",
    desc: "Kargo/Hemat (4-6 Hari)",
    price: 15000,
  },
];

export default function KeranjangBelanja() {
  const [cartItems, setCartItems] = useState(INITIAL_CART_ITEMS);
  const [voucherCode, setVoucherCode] = useState("");
  const [discount, setDiscount] = useState(0);

  // State Baru untuk Form Alamat & Ekspedisi
  const [selectedCourier, setSelectedCourier] = useState(SHIPPING_COURIERS[0]);
  const [addressForm, setAddressForm] = useState({
    recipientName: "Rohmat Sidiq M",
    phoneNumber: "081234567890",
    fullAddress: "Jl. Kebon Sirih No. 45, Blok C, Menteng",
    city: "Jakarta Pusat",
    postalCode: "10340",
  });

  const formatRupiah = (value) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);
  };

  const updateQuantity = (id, newQty) => {
    if (newQty < 1) return;
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQty } : item,
      ),
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Handler Perubahan Input Alamat
  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddressForm((prev) => ({ ...prev, [name]: value }));
  };

  // Perhitungan Keuangan
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  // Logika Gratis Ongkir: Jika belanjaan >= Rp 400.000, ongkir kurir terpilih jadi Rp 0
  const isFreeShipping = subtotal >= 400000;
  const currentShippingFee =
    subtotal === 0 ? 0 : isFreeShipping ? 0 : selectedCourier.price;

  const total = subtotal - discount + currentShippingFee;

  const handleApplyVoucher = () => {
    if (voucherCode.toUpperCase() === "BERKAH25" && subtotal >= 150000) {
      setDiscount(25000);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8 md:py-12 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 mb-8 flex items-center gap-2">
          Shopping Cart & Checkout{" "}
          <span className="text-xs font-sans font-normal text-gray-400">
            ({cartItems.length} Produk)
          </span>
        </h1>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center shadow-sm max-w-md mx-auto space-y-4">
            <div className="text-5xl">🛍️</div>
            <h2 className="text-base font-semibold text-gray-800">
              Keranjang Belanjamu Kosong
            </h2>
            <a
              href="/gamis"
              className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold py-2.5 px-6 rounded-xl transition-colors"
            >
              Mulai Belanja Sekarang
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* ================= SISI KIRI: PRODUK, ALAMAT & EKSPEDISI (8 Kolom) ================= */}
            <div className="lg:col-span-8 space-y-6">
              {/* 1. SEKTOR DAFTAR PRODUK */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden divide-y divide-gray-100">
                <div className="p-4 bg-gray-50/50 border-b border-gray-100">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-gray-600">
                    1. Detail Item Belanja
                  </h2>
                </div>
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 sm:p-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between"
                  >
                    <div className="flex gap-4 items-center flex-1 min-w-0">
                      <div className="w-16 h-20 sm:w-20 sm:h-24 bg-gray-50 rounded-xl overflow-hidden flex-shrink-0 border border-gray-100">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="space-y-0.5 min-w-0">
                        <h3 className="text-xs sm:text-sm font-medium text-gray-900 truncate pr-4">
                          {item.name}
                        </h3>
                        <p className="text-[10px] text-gray-400 font-medium">
                          Varian: {item.variant}
                        </p>
                        <p className="text-xs font-bold text-emerald-700 sm:hidden pt-1">
                          {formatRupiah(item.price)}
                        </p>
                      </div>
                    </div>

                    <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-4 border-t sm:border-t-0 border-gray-50 pt-2 sm:pt-0">
                      <p className="text-sm font-bold text-gray-900 hidden sm:block">
                        {formatRupiah(item.price * item.quantity)}
                      </p>
                      <div className="flex items-center space-x-3 text-xs">
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-red-500 text-[11px]"
                        >
                          Hapus
                        </button>
                        <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-white text-[11px]">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="px-2 py-1 bg-gray-50"
                          >
                            -
                          </button>
                          <span className="px-3 py-1 font-semibold text-center w-8">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="px-2 py-1 bg-gray-50"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* 2. SEKTOR INFORMASI ALAMAT PENGIRIMAN */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-4 bg-gray-50/50 border-b border-gray-100">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-gray-600">
                    2. Alamat Tujuan Pengiriman
                  </h2>
                </div>
                <div className="p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="space-y-1.5">
                    <label className="font-semibold text-gray-700">
                      Nama Penerima
                    </label>
                    <input
                      type="text"
                      name="recipientName"
                      value={addressForm.recipientName}
                      onChange={handleAddressChange}
                      className="w-full bg-gray-50 border border-gray-200 px-3 py-2 rounded-lg outline-none focus:border-emerald-600 focus:bg-white"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-semibold text-gray-700">
                      No. Handphone
                    </label>
                    <input
                      type="text"
                      name="phoneNumber"
                      value={addressForm.phoneNumber}
                      onChange={handleAddressChange}
                      className="w-full bg-gray-50 border border-gray-200 px-3 py-2 rounded-lg outline-none focus:border-emerald-600 focus:bg-white"
                    />
                  </div>
                  <div className="sm:col-span-2 space-y-1.5">
                    <label className="font-semibold text-gray-700">
                      Alamat Lengkap (Nama Jalan, No Rumah, RT/RW)
                    </label>
                    <textarea
                      rows={2}
                      name="fullAddress"
                      value={addressForm.fullAddress}
                      onChange={handleAddressChange}
                      className="w-full bg-gray-50 border border-gray-200 px-3 py-2 rounded-lg outline-none focus:border-emerald-600 focus:bg-white resize-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-semibold text-gray-700">
                      Kota / Kabupaten
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={addressForm.city}
                      onChange={handleAddressChange}
                      className="w-full bg-gray-50 border border-gray-200 px-3 py-2 rounded-lg outline-none focus:border-emerald-600 focus:bg-white"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-semibold text-gray-700">
                      Kode Pos
                    </label>
                    <input
                      type="text"
                      name="postalCode"
                      value={addressForm.postalCode}
                      onChange={handleAddressChange}
                      className="w-full bg-gray-50 border border-gray-200 px-3 py-2 rounded-lg outline-none focus:border-emerald-600 focus:bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* 3. SEKTOR PILIHAN JASA EKSPEDISI KURIR */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-4 bg-gray-50/50 border-b border-gray-100">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-gray-600">
                    3. Pilih Opsi Jasa Pengiriman
                  </h2>
                </div>
                <div className="p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {SHIPPING_COURIERS.map((courier) => {
                    const isSelected = selectedCourier.id === courier.id;
                    return (
                      <button
                        key={courier.id}
                        type="button"
                        onClick={() => setSelectedCourier(courier)}
                        className={`p-4 rounded-xl border text-left flex flex-col justify-between transition-all ${
                          isSelected
                            ? "border-emerald-600 bg-emerald-50/40 shadow-sm"
                            : "border-gray-200 bg-white hover:border-emerald-600"
                        }`}
                      >
                        <div className="space-y-0.5">
                          <p className="text-xs font-bold text-gray-900 flex items-center justify-between">
                            {courier.name}
                            {isSelected && (
                              <span className="text-emerald-600 text-[10px]">
                                🟢 Terpilih
                              </span>
                            )}
                          </p>
                          <p className="text-[10px] text-gray-400 font-medium">
                            {courier.desc}
                          </p>
                        </div>
                        <p className="text-xs font-semibold text-gray-700 mt-4">
                          {isFreeShipping
                            ? "Rp 0 (Subsidi)"
                            : formatRupiah(courier.price)}
                        </p>
                      </button>
                    );
                  })}
                </div>
                {isFreeShipping && (
                  <div className="mx-5 sm:mx-6 mb-5 p-2.5 bg-emerald-50 text-emerald-700 text-[10px] font-medium rounded-lg">
                    🎉 Selamat! Anda berhak mendapatkan subsidi Gratis Ongkir
                    karena total belanja produk di atas Rp 400.000.
                  </div>
                )}
              </div>
            </div>

            {/* ================= SISI KANAN: RINGKASAN & PEMBAYARAN (4 Kolom) ================= */}
            <div className="lg:col-span-4 space-y-4">
              {/* Voucher */}
              <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm space-y-2.5">
                <label className="text-xs font-semibold text-gray-700 block">
                  Voucher Toko
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="KODE VOUCHER"
                    value={voucherCode}
                    onChange={(e) => setVoucherCode(e.target.value)}
                    className="flex-1 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-xl text-xs outline-none uppercase font-mono"
                  />
                  <button
                    onClick={handleApplyVoucher}
                    className="bg-gray-800 text-white text-xs px-4 py-1.5 rounded-xl"
                  >
                    Pasang
                  </button>
                </div>
              </div>

              {/* Rincian Finansial Nota */}
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm space-y-4">
                <h3 className="text-xs font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-100 pb-2">
                  Ringkasan Pembayaran
                </h3>

                <div className="space-y-2 text-xs text-gray-600 border-b border-gray-100 pb-4">
                  <div className="flex justify-between">
                    <span>Subtotal Produk</span>
                    <span className="font-medium text-gray-900">
                      {formatRupiah(subtotal)}
                    </span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-emerald-600">
                      <span>Diskon</span>
                      <span>-{formatRupiah(discount)}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Ongkos Kirim ({selectedCourier.name})</span>
                    {isFreeShipping ? (
                      <span className="text-emerald-600 font-medium bg-emerald-50 px-1 rounded text-[10px]">
                        Rp 0
                      </span>
                    ) : (
                      <span className="font-medium text-gray-900">
                        {formatRupiah(currentShippingFee)}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-gray-900">
                    Total Pembayaran
                  </span>
                  <span className="text-base font-extrabold text-emerald-700">
                    {formatRupiah(total)}
                  </span>
                </div>

                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold py-3 px-4 rounded-xl transition-all shadow-md mt-2">
                  Bayar Sekarang (Checkout) &rarr;
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
