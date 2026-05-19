// src/app/(customer)/keranjang/page.jsx
"use client";

import React, { useState } from "react";
import {
  ShoppingBag,
  Trash2,
  Minus,
  Plus,
  MapPin,
  Truck,
  Ticket,
  CreditCard,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

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
  const [isVoucherApplied, setIsVoucherApplied] = useState(false);

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

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddressForm((prev) => ({ ...prev, [name]: value }));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const isFreeShipping = subtotal >= 400000;
  const currentShippingFee =
    subtotal === 0 ? 0 : isFreeShipping ? 0 : selectedCourier.price;
  const total = subtotal - discount + currentShippingFee;

  const handleApplyVoucher = () => {
    if (voucherCode.toUpperCase() === "BERKAH25" && subtotal >= 150000) {
      setDiscount(25000);
      setIsVoucherApplied(true);
    }
  };

  return (
    <div className="bg-white min-h-screen py-12 antialiased text-gray-900 selection:bg-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Judul Utama Minimalis */}
        <div className="border-b border-gray-100 pb-6 mb-10">
          <h1 className="text-2xl font-serif font-medium tracking-tight text-gray-900 flex items-center gap-3">
            Shopping Bag
            <span className="text-xs font-sans font-semibold bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full">
              {cartItems.reduce((acc, item) => acc + item.quantity, 0)} Items
            </span>
          </h1>
        </div>

        {cartItems.length === 0 ? (
          <div className="border border-gray-100 rounded-3xl p-16 text-center max-w-sm mx-auto space-y-5 shadow-sm">
            <div className="w-14 h-14 bg-stone-50 rounded-2xl flex items-center justify-center mx-auto text-gray-400">
              <ShoppingBag className="w-6 h-6 stroke-[1.5]" />
            </div>
            <div className="space-y-1">
              <h2 className="text-sm font-semibold text-gray-900">
                Your bag is empty
              </h2>
              <p className="text-xs text-gray-400 font-light">
                Sepertinya kamu belum menambahkan item apa pun ke dalam
                keranjang.
              </p>
            </div>
            <a
              href="/gamis"
              className="group inline-flex items-center justify-center gap-2 w-full bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold uppercase tracking-widest py-3.5 rounded-xl transition-all shadow-md shadow-emerald-800/5 active:scale-98"
            >
              Mulai Belanja{" "}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* ================= SISI KIRI: ITEMS, ADDRESS, & COURIERS ================= */}
            <div className="lg:col-span-8 space-y-10">
              {/* 1. SEKTOR DAFTAR PRODUK */}
              <div className="space-y-4">
                <h2 className="text-[11px] font-bold uppercase tracking-widest text-gray-400 flex items-center gap-2">
                  <span>01</span> <span>Review Bag Items</span>
                </h2>
                <div className="border border-gray-100 rounded-2xl overflow-hidden divide-y divide-gray-100/60 bg-white">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="p-5 sm:p-6 flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between group"
                    >
                      <div className="flex gap-4 items-center flex-1 min-w-0">
                        <div className="w-16 h-20 sm:w-20 sm:h-24 bg-gray-50 rounded-xl overflow-hidden flex-shrink-0 border border-gray-100">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                          />
                        </div>
                        <div className="space-y-1 min-w-0">
                          <h3 className="text-xs sm:text-sm font-medium text-gray-800 truncate pr-4">
                            {item.name}
                          </h3>
                          <p className="text-[11px] text-gray-400 font-medium">
                            Varian: {item.variant}
                          </p>
                          <p className="text-xs font-bold text-gray-900 sm:hidden pt-1">
                            {formatRupiah(item.price)}
                          </p>
                        </div>
                      </div>

                      <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-4 border-t sm:border-t-0 border-gray-50 pt-3 sm:pt-0">
                        <p className="text-sm font-bold text-gray-900 tracking-tight hidden sm:block">
                          {formatRupiah(item.price * item.quantity)}
                        </p>

                        <div className="flex items-center space-x-4">
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors p-1.5 hover:bg-red-50 rounded-lg"
                            title="Hapus Item"
                          >
                            <Trash2 className="w-4 h-4 stroke-[1.8]" />
                          </button>

                          {/* Controller Jumlah Minimalis */}
                          <div className="flex items-center border border-gray-200/80 rounded-xl overflow-hidden bg-gray-50/50 p-0.5">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="w-7 h-7 bg-white rounded-lg flex items-center justify-center border border-gray-100 shadow-sm font-bold hover:bg-gray-100 transition-colors"
                            >
                              <Minus className="w-3 h-3 text-gray-500" />
                            </button>
                            <span className="px-2 font-bold text-center w-8 text-xs text-gray-800">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="w-7 h-7 bg-white rounded-lg flex items-center justify-center border border-gray-100 shadow-sm font-bold hover:bg-gray-100 transition-colors"
                            >
                              <Plus className="w-3 h-3 text-gray-500" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. SEKTOR INFORMASI ALAMAT PENGIRIMAN */}
              <div className="space-y-4">
                <h2 className="text-[11px] font-bold uppercase tracking-widest text-gray-400 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5" />{" "}
                  <span>02 Shipping Destination</span>
                </h2>
                <div className="border border-gray-100 rounded-2xl bg-white p-6 grid grid-cols-1 sm:grid-cols-2 gap-5 text-xs">
                  <div className="space-y-2">
                    <label className="font-semibold text-gray-700">
                      Nama Penerima
                    </label>
                    <input
                      type="text"
                      name="recipientName"
                      value={addressForm.recipientName}
                      onChange={handleAddressChange}
                      className="w-full bg-gray-50/80 border border-gray-100 px-4 py-3 rounded-xl outline-none focus:border-emerald-600/30 focus:bg-white focus:ring-4 focus:ring-emerald-600/5 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-semibold text-gray-700">
                      No. Handphone
                    </label>
                    <input
                      type="text"
                      name="phoneNumber"
                      value={addressForm.phoneNumber}
                      onChange={handleAddressChange}
                      className="w-full bg-gray-50/80 border border-gray-100 px-4 py-3 rounded-xl outline-none focus:border-emerald-600/30 focus:bg-white focus:ring-4 focus:ring-emerald-600/5 transition-all"
                    />
                  </div>
                  <div className="sm:col-span-2 space-y-2">
                    <label className="font-semibold text-gray-700">
                      Alamat Lengkap
                    </label>
                    <textarea
                      rows={2}
                      name="fullAddress"
                      value={addressForm.fullAddress}
                      onChange={handleAddressChange}
                      className="w-full bg-gray-50/80 border border-gray-100 px-4 py-3 rounded-xl outline-none focus:border-emerald-600/30 focus:bg-white focus:ring-4 focus:ring-emerald-600/5 transition-all resize-none leading-relaxed"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-semibold text-gray-700">
                      Kota / Kabupaten
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={addressForm.city}
                      onChange={handleAddressChange}
                      className="w-full bg-gray-50/80 border border-gray-100 px-4 py-3 rounded-xl outline-none focus:border-emerald-600/30 focus:bg-white focus:ring-4 focus:ring-emerald-600/5 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-semibold text-gray-700">
                      Kode Pos
                    </label>
                    <input
                      type="text"
                      name="postalCode"
                      value={addressForm.postalCode}
                      onChange={handleAddressChange}
                      className="w-full bg-gray-50/80 border border-gray-100 px-4 py-3 rounded-xl outline-none focus:border-emerald-600/30 focus:bg-white focus:ring-4 focus:ring-emerald-600/5 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* 3. SEKTOR PILIHAN JASA EKSPEDISI KURIR */}
              <div className="space-y-4">
                <h2 className="text-[11px] font-bold uppercase tracking-widest text-gray-400 flex items-center gap-2">
                  <Truck className="w-3.5 h-3.5" />{" "}
                  <span>03 Delivery Services</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {SHIPPING_COURIERS.map((courier) => {
                    const isSelected = selectedCourier.id === courier.id;
                    return (
                      <button
                        key={courier.id}
                        type="button"
                        onClick={() => setSelectedCourier(courier)}
                        className={`p-5 rounded-2xl border text-left flex flex-col justify-between relative transition-all duration-300 ${
                          isSelected
                            ? "border-emerald-700 bg-emerald-50/30 shadow-sm scale-[0.99]"
                            : "border-gray-100 bg-white hover:border-gray-300 shadow-sm shadow-gray-100/40"
                        }`}
                      >
                        <div className="space-y-1">
                          <div className="text-xs font-bold text-gray-900 flex items-center justify-between">
                            <span>{courier.name}</span>
                            {isSelected && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-700 fill-emerald-50" />
                            )}
                          </div>
                          <p className="text-[11px] text-gray-400 font-light">
                            {courier.desc}
                          </p>
                        </div>
                        <p className="text-xs font-bold text-gray-800 mt-6 tracking-tight">
                          {isFreeShipping
                            ? "Rp 0 (Subsidi)"
                            : formatRupiah(courier.price)}
                        </p>
                      </button>
                    );
                  })}
                </div>

                {isFreeShipping && (
                  <div className="p-3.5 bg-emerald-50/60 border border-emerald-100/40 text-emerald-800 text-[11px] font-medium rounded-xl flex items-center gap-2 animate-fade-in">
                    <span>🎉</span>
                    <span>
                      Kamu berhak mendapatkan{" "}
                      <strong>Subsidi Bebas Ongkir</strong> karena total item
                      belanja di atas Rp 400.000.
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* ================= SISI KANAN: RINGKASAN & PEMBAYARAN ================= */}
            <div className="lg:col-span-4 space-y-5 sticky top-32">
              {/* Voucher Card Container */}
              <div className="border border-gray-100 p-5 rounded-2xl bg-white shadow-sm space-y-3">
                <label className="text-[11px] uppercase tracking-widest font-bold text-gray-400 flex items-center gap-2">
                  <Ticket className="w-3.5 h-3.5" /> <span>Promo Code</span>
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Masukkan Kode"
                    value={voucherCode}
                    onChange={(e) => setVoucherCode(e.target.value)}
                    disabled={isVoucherApplied}
                    className="flex-1 bg-gray-50 border border-gray-100 px-4 py-2.5 rounded-xl text-xs outline-none uppercase font-mono font-bold tracking-widest focus:bg-white focus:border-emerald-600/40 transition-colors disabled:opacity-60"
                  />
                  <button
                    onClick={handleApplyVoucher}
                    disabled={isVoucherApplied}
                    className="bg-stone-900 hover:bg-stone-950 text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-xl transition-all active:scale-95 disabled:bg-emerald-700 disabled:opacity-100"
                  >
                    {isVoucherApplied ? "Applied" : "Claim"}
                  </button>
                </div>
              </div>

              {/* Summary Finance Card */}
              <div className="border border-gray-100 p-6 rounded-2xl bg-white shadow-xl shadow-gray-100/40 space-y-5">
                <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2 border-b border-gray-50 pb-3">
                  <CreditCard className="w-3.5 h-3.5" />{" "}
                  <span>Payment Summary</span>
                </h3>

                <div className="space-y-3 text-xs font-light text-gray-500 border-b border-gray-100 pb-5">
                  <div className="flex justify-between items-center">
                    <span>Subtotal Produk</span>
                    <span className="font-semibold text-gray-900 tracking-tight">
                      {formatRupiah(subtotal)}
                    </span>
                  </div>

                  {discount > 0 && (
                    <div className="flex justify-between items-center text-emerald-700 font-medium">
                      <span>Diskon Voucher</span>
                      <span className="bg-emerald-50 px-1.5 py-0.5 rounded-md text-[10px] font-bold">
                        -{formatRupiah(discount)}
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between items-center">
                    <span>Ongkos Kirim ({selectedCourier.name})</span>
                    {isFreeShipping ? (
                      <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-md text-[10px] uppercase tracking-wider">
                        Free
                      </span>
                    ) : (
                      <span className="font-semibold text-gray-900 tracking-tight">
                        {formatRupiah(currentShippingFee)}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex justify-between items-center pt-1">
                  <span className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                    Grand Total
                  </span>
                  <span className="text-xl font-black text-emerald-800 tracking-tight">
                    {formatRupiah(total)}
                  </span>
                </div>

                <button className="w-full bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold uppercase tracking-widest py-4 px-4 rounded-xl transition-all shadow-md shadow-emerald-800/10 active:scale-98 mt-2">
                  Proceed To Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
