// src/app/(customer)/gamis/[id]/page.jsx
"use client";

import React, { useState } from "react";
import {
  Star,
  Share2,
  Heart,
  ShieldCheck,
  Truck,
  RotateCcw,
  Minus,
  Plus,
  ShoppingBag,
  ThumbsUp,
  ChevronRight,
  Copy,
  Check,
} from "lucide-react";

const ALL_GAMIS_DATA = {
  1: {
    id: 1,
    name: "Gamis Silk Premium Medina (Emerald Green)",
    price: 385000,
    rating: 5,
    sold: 120,
    sku: "ALK-GMS-001",
    description:
      "Gamis Medina Series menggunakan bahan Silk Premium yang memiliki karakteristik sangat halus, berkilau elegan (glossy pas), jatuh dengan anggun, dan super adem. Sangat cocok dipakai untuk acara formal maupun hari raya.",
    features: [
      "Bahan Silk Premium High Quality",
      "Busui Friendly (Resleting depan)",
      "Wudhu Friendly (Kancing manset di pergelangan tangan)",
      "Saku sembunyi di bagian kanan",
    ],
    images: [
      "https://i.pinimg.com/736x/77/4d/2f/774d2fee919f347b6a2d80d25a3926b4.jpg",
      "https://i.pinimg.com/736x/26/dd/33/26dd33571a56c782fb31c6cb9c576370.jpg",
      "https://i.pinimg.com/736x/46/1b/44/461b441fa06bbfde7721d2c5c90b6254.jpg",
    ],
  },
  2: {
    id: 2,
    name: "Gamis Abaya Malikah Bordir Komputer (Jetblack)",
    price: 450000,
    rating: 5,
    sold: 85,
    sku: "ALK-ABY-002",
    description:
      "Abaya eksklusif potongan khas Timur Tengah menggunakan bahan Jetblack Sahara super pekat. Dilengkapi aksen bordir komputer benang emas timbul yang sangat rapi di sepanjang manset lengan dan bagian dada.",
    features: [
      "Bahan Jetblack Sahara (Hitam pekat, adem, jatuh)",
      "Bordir komputer presisi tinggi",
      "Potongan loose abaya lebar (Syar’i)",
      "Kain tidak menerawang",
    ],
    images: [
      "https://i.pinimg.com/736x/26/dd/33/26dd33571a56c782fb31c6cb9c576370.jpg",
    ],
  },
};

const PRODUCT_REVIEWS = [
  {
    id: 1,
    name: "Hana Atikah",
    date: "12 Mei 2026",
    rating: 5,
    variant: "Emerald Green, M",
    comment:
      "MasyaAllah tabarakallah, gamisnya anggun sekali! Bahannya beneran silk premium yang jatuh, adem, dan mengkilapnya mewah banget, ga norak. Pas dipakai untuk silaturahmi lebaran kemarin langsung ditanyain sama sodara-sodara. Recommended butik!",
    likes: 12,
  },
  {
    id: 2,
    name: "Wardah Aliyyah",
    date: "08 Mei 2026",
    rating: 5,
    variant: "Emerald Green, XL",
    comment:
      "Jujur awalnya ragu beli online takut nerawang, pas dateng langsung dicoba dan kainnya tebal tapi tetep ringan! Cuttingannya juga lebar syar'i jadi ga membentuk lekuk tubuh. Pengiriman ke Surabaya cuma 2 hari.",
    likes: 5,
  },
  {
    id: 3,
    name: "Fathimah Azzahra",
    date: "30 April 2026",
    rating: 4,
    variant: "Emerald Green, L",
    comment:
      "Kualitas jahitan rapi banget standar butik, resleting depannya kokoh ga gampang macet (penting banget buat busui). Cuma di bagian tangan agak kepanjangan dikit di saya, tapi tinggal dilipet beres. Syukron Al-Kahfi!",
    likes: 2,
  },
];

const RECOMMENDATIONS = [
  {
    id: 3,
    name: "Gamis Shalihah Set Hijab",
    price: 195000,
    img: "https://i.pinimg.com/736x/f3/9f/b6/f39fb6d69e7b4b66399415af67eaa758.jpg",
  },
  {
    id: 4,
    name: "Gamis Crinkle Airflow Loose Fit",
    price: 245000,
    img: "https://i.pinimg.com/736x/07/ab/c2/07abc2ba15d09c1902ed36344903144d.jpg",
  },
  {
    id: 1,
    name: "Abaya Inner Outer Ceruty 2 Layer",
    price: 520000,
    img: "https://i.pinimg.com/736x/9b/be/de/9bbede1b5a65271a53b3b1a33ea5f3be.jpg",
  },
];

export default function DetailGamis({ params }) {
  const { id } = React.use(params);
  const product = ALL_GAMIS_DATA[id] || ALL_GAMIS_DATA[1];

  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("deskripsi");
  const [currentImage, setCurrentImage] = useState(product.images[0]);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // 🌟 STATE UNTUK TRACKING SALIN LINK AFILIASI
  const [isCopied, setIsCopied] = useState(false);

  // Variabel Kupon & URL Afiliasi Resmi Mas Rohmat
  const AFFILIATE_CODE = "KAHFI-ROHMAT2026";
  const generatedAffiliateUrl = `https://alkahfistore.com/gamis/${product.id}?ref=${AFFILIATE_CODE}`;

  const formatRupiah = (value) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);
  };

  const handleCopyAffiliateLink = () => {
    navigator.clipboard.writeText(generatedAffiliateUrl);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="bg-white min-h-screen py-10 antialiased text-gray-900 selection:bg-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* ================= BREADCRUMB MINIMALIS ================= */}
        <nav className="text-[11px] uppercase tracking-widest text-gray-400 flex items-center space-x-2">
          <a href="/" className="hover:text-emerald-700 transition-colors">
            Home
          </a>
          <ChevronRight className="w-3 h-3" />
          <a href="/gamis" className="hover:text-emerald-700 transition-colors">
            Gamis
          </a>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-900 font-bold max-w-60 truncate">
            {product.name}
          </span>
        </nav>

        {/* ================= MAIN INTERFACE LAYOUT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* SISI KIRI: MEDIA GALLERY COMPONENT (5 Kolom) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="aspect-3/4 bg-gray-50 rounded-2xl overflow-hidden relative border border-gray-100">
              <img
                src={currentImage}
                alt={product.name}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm text-gray-400 hover:text-red-500 transition-all active:scale-95 border border-gray-100"
              >
                <Heart
                  className={`w-4 h-4 transition-colors ${isWishlisted ? "fill-red-500 text-red-500" : ""}`}
                />
              </button>
            </div>

            {product.images.length > 1 && (
              <div className="flex gap-2.5 overflow-x-auto pb-1">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(img)}
                    className={`w-20 h-24 rounded-xl overflow-hidden bg-gray-50 shrink-0 border-2 transition-all duration-200 ${
                      currentImage === img
                        ? "border-emerald-700 shadow-sm scale-98"
                        : "border-gray-100 hover:border-gray-300"
                    }`}
                  >
                    <img
                      src={img}
                      alt="thumbnail"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* SISI KANAN: BUYING CONTROLLER (7 Kolom) */}
          <div className="lg:col-span-7 space-y-6 lg:py-2">
            <div className="space-y-3 pb-6 border-b border-gray-100">
              <span className="inline-flex bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                Boutique Exclusive Drop
              </span>
              <h1 className="text-xl sm:text-3xl font-serif font-medium tracking-wide text-gray-900 leading-snug">
                {product.name}
              </h1>

              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-gray-400 font-medium">
                <div className="flex items-center space-x-1 text-amber-500">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="text-gray-900 font-bold">4.9</span>
                  <span className="text-gray-400 font-normal">
                    ({product.sold} reviews)
                  </span>
                </div>
                <span className="hidden sm:inline text-gray-200">|</span>
                <p>
                  SKU:{" "}
                  <span className="text-gray-700 font-mono tracking-wider font-semibold">
                    {product.sku}
                  </span>
                </p>
                <span className="hidden sm:inline text-gray-200">|</span>
                <div className="flex items-center text-emerald-600 gap-1">
                  <ShieldCheck className="w-4 h-4" />{" "}
                  <span>Original Guarantee</span>
                </div>
              </div>
            </div>

            {/* Price Tag Box */}
            <div className="py-2">
              <p className="text-3xl font-bold text-gray-900 tracking-tight">
                {formatRupiah(product.price)}
              </p>
              <p className="text-[11px] text-gray-400 mt-1">
                ⚡ Cicilan 0% tersedia via QRIS Paylater & ShopeePayLater tanpa
                biaya penanganan.
              </p>
            </div>

            {/* ============================================================== */}
            {/* 🌟 INTEGRATED PREMIUM AFFILIATE SHARE PANEL                   */}
            {/* ============================================================== */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2.5 shadow-inner">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                    Affiliate Promoter Toolkit
                  </span>
                </div>
                <span className="text-[10px] font-mono font-bold text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded-md">
                  Est. Komisi 10%: {formatRupiah(product.price * 0.1)}
                </span>
              </div>

              <div className="flex items-center bg-white border border-slate-200 rounded-xl p-1.5 pl-3 justify-between gap-4 shadow-sm">
                <p className="text-[11px] font-mono text-slate-400 truncate font-semibold select-all">
                  {generatedAffiliateUrl}
                </p>
                <button
                  onClick={handleCopyAffiliateLink}
                  className={`inline-flex cursor-pointer items-center space-x-1.5 text-xs font-bold px-3.5 py-2 rounded-lg transition-all tracking-tight shrink-0 shadow-sm ${
                    isCopied
                      ? "bg-emerald-600 text-white shadow-emerald-500/10"
                      : "bg-slate-900 hover:bg-slate-800 text-white shadow-slate-950/5"
                  }`}
                >
                  {isCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Aff Link</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Sizing Section */}
            <div className="space-y-2.5">
              <div className="flex justify-between items-center text-xs font-semibold text-gray-700">
                <span>Pilih Ukuran:</span>
                <button className="text-emerald-700 hover:underline font-bold text-[11px] tracking-wide">
                  Size Guide PDF ↗
                </button>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                {["S", "M", "L", "XL", "XXL"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-13 h-11 rounded-xl border font-bold transition-all duration-300 ${
                      selectedSize === size
                        ? "border-emerald-700 bg-emerald-50 text-emerald-800 shadow-sm scale-98"
                        : "border-gray-200 text-gray-500 hover:border-gray-400 bg-white"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Controller */}
            <div className="space-y-2.5">
              <span className="text-xs font-semibold text-gray-700 block">
                Jumlah Pakaian:
              </span>
              <div className="flex items-center space-x-4 text-xs">
                <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden bg-gray-50/50 p-1">
                  <button
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                    className="w-8 h-8 rounded-lg bg-white flex items-center justify-center border border-gray-100 hover:bg-gray-100 font-bold transition-colors shadow-sm"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-4 font-bold text-center text-gray-800 w-12 text-sm">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 rounded-lg bg-white flex items-center justify-center border border-gray-100 hover:bg-gray-100 font-bold transition-colors shadow-sm"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-gray-400 text-[11px] font-medium">
                  Sisa Stok Tersedia:{" "}
                  <span className="text-gray-800 font-bold">45 Pcs</span>
                </span>
              </div>
            </div>

            {/* Logistics Info Bar */}
            <div className="bg-gray-50/60 border border-gray-100 p-4 rounded-2xl text-xs space-y-3 text-gray-600 font-light">
              <div className="flex items-center space-x-3">
                <Truck className="w-4 h-4 text-emerald-700" />
                <p>
                  Ongkos Kirim:{" "}
                  <span className="font-semibold text-gray-900">
                    Bebas Ongkir Seluruh Indonesia
                  </span>{" "}
                  (Min. Belanja Rp200rb)
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <RotateCcw className="w-4 h-4 text-emerald-700" />
                <p>
                  Garansi Penukaran:{" "}
                  <span className="font-semibold text-gray-900">
                    Bisa Retur Size 30 Hari
                  </span>{" "}
                  jika ukuran kurang pas
                </p>
              </div>
            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2 text-xs font-bold uppercase tracking-widest">
              <button className="flex-1 cursor-pointer bg-emerald-700 hover:bg-emerald-800 text-white py-4 px-6 rounded-xl transition-all shadow-md shadow-emerald-800/10 active:scale-98">
                Beli Langsung
              </button>
              <button className="flex-1 cursor-pointer sm:flex-none inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-950 text-white py-4 px-8 rounded-xl transition-all shadow-sm active:scale-98">
                <ShoppingBag className="w-4 h-4 shrink-0" /> Add To Bag
              </button>
            </div>
          </div>
        </div>

        {/* ================= TABS DETAIL INFORMASI TEKNIS ================= */}
        <div className="max-w-4xl border border-gray-100 rounded-2xl p-6 bg-white shadow-sm">
          <div className="flex border-b border-gray-100 text-xs sm:text-sm font-bold uppercase tracking-wider mb-6">
            <button
              onClick={() => setActiveTab("deskripsi")}
              className={`pb-3 pr-8 border-b-2 transition-all ${activeTab === "deskripsi" ? "border-emerald-700 text-emerald-800" : "border-transparent text-gray-400 hover:text-gray-600"}`}
            >
              Deskripsi Produk
            </button>
            <button
              onClick={() => setActiveTab("fitur")}
              className={`pb-3 pr-8 border-b-2 transition-all ${activeTab === "fitur" ? "border-emerald-700 text-emerald-800" : "border-transparent text-gray-400 hover:text-gray-600"}`}
            >
              Karakteristik Kain
            </button>
          </div>

          <div className="text-xs sm:text-sm leading-relaxed text-gray-600 font-light max-w-3xl">
            {activeTab === "deskripsi" ? (
              <p>{product.description}</p>
            ) : (
              <ul className="space-y-2.5">
                {product.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* ================= SECTION ULASAN / RATING MARKETPLACE ================= */}
        <div className="max-w-4xl space-y-8 pt-4">
          <div className="space-y-1">
            <h2 className="text-lg font-serif font-medium text-gray-900">
              Ulasan Pengguna ({PRODUCT_REVIEWS.length})
            </h2>
            <p className="text-xs text-gray-400">
              Review murni dari pembeli terverifikasi Al-Kahfi Store.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 bg-gray-50/80 p-6 rounded-2xl border border-gray-100 items-center">
            <div className="text-center sm:pr-10 sm:border-r sm:border-gray-200/60 shrink-0">
              <p className="text-5xl font-black tracking-tighter text-gray-900">
                4.9
              </p>
              <div className="flex justify-center text-amber-400 space-x-0.5 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mt-2">
                Kepuasan 98%
              </p>
            </div>

            <div className="flex-1 w-full space-y-2 text-xs font-medium text-gray-500">
              {[
                ["Bintang 5", "92%", "w-[92%]"],
                ["Bintang 4", "8%", "w-[8%]"],
                ["Bintang 3", "0%", "w-0"],
              ].map(([label, percent, widthClass], idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="w-14 text-[11px] text-gray-400">
                    {label}
                  </span>
                  <div className="flex-1 h-2 bg-gray-200/60 rounded-full overflow-hidden">
                    <div
                      className={`bg-amber-400 h-full ${widthClass} rounded-full`}
                    />
                  </div>
                  <span className="w-8 text-[11px] text-gray-400 text-right">
                    {percent}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="divide-y divide-gray-100 border-t border-gray-100">
            {PRODUCT_REVIEWS.map((review) => (
              <div key={review.id} className="py-6 space-y-3 animate-fade-in">
                <div className="flex justify-between items-start text-xs">
                  <div className="space-y-1">
                    <div className="flex text-amber-400 space-x-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-[11px]">
                      <span className="font-bold text-gray-800">
                        {review.name}
                      </span>
                      <span className="text-gray-300">•</span>
                      <span className="text-gray-400">{review.date}</span>
                    </div>
                  </div>
                  <span className="text-[10px] bg-gray-50 border border-gray-100 text-gray-500 px-2.5 py-1 rounded-lg font-medium">
                    Variant: {review.variant}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed pr-4">
                  "{review.comment}"
                </p>

                <div className="pt-1">
                  <button className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-gray-500 hover:text-emerald-700 transition-colors bg-white border border-gray-200 px-3 py-1.5 rounded-xl shadow-sm hover:shadow active:scale-95">
                    <ThumbsUp className="w-3.5 h-3.5" /> Helpful ({review.likes}
                    )
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= SECTION PRODUK REKOMENDASI TERKAIT ================= */}
        <div className="space-y-6 pt-4">
          <div className="space-y-0.5">
            <h2 className="text-xl font-serif font-medium tracking-wide text-gray-900">
              Mungkin Kamu Juga Menyukai
            </h2>
            <p className="text-xs text-gray-400">
              Koleksi pelengkap penampilan syar'i harianmu.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {RECOMMENDATIONS.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-100 rounded-2xl p-3.5 flex items-center space-x-4 hover:border-transparent hover:shadow-xl hover:shadow-gray-100/70 transition-all duration-300 group relative"
              >
                <div className="w-20 h-24 bg-gray-50 rounded-xl overflow-hidden shrink-0 border border-gray-50">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-104"
                  />
                </div>
                <div className="space-y-1.5 flex-1 min-w-0">
                  <h3 className="text-xs sm:text-sm font-semibold text-gray-700 group-hover:text-emerald-700 transition-colors truncate">
                    <a href={`/gamis/${item.id}`}>
                      <span className="absolute inset-0" />
                      {item.name}
                    </a>
                  </h3>
                  <p className="text-sm font-bold text-gray-900">
                    {formatRupiah(item.price)}
                  </p>
                  <span className="inline-flex items-center gap-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                    View Drop &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
