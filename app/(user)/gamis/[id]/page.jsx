// src/app/(customer)/gamis/[id]/page.jsx
"use client";

import React, { useState } from "react";

const ALL_GAMIS_DATA = {
  1: {
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
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&q=80",
    ],
  },
};

// Data Dummy Testimoni Khusus untuk Produk Ini
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

  const formatRupiah = (value) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8 md:py-12 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Navigation Breadcrumb */}
        <nav className="text-xs text-gray-400 flex space-x-2 bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
          <a href="/" className="hover:text-emerald-600">
            Home
          </a>
          <span>/</span>
          <a href="/gamis" className="hover:text-emerald-600">
            Gamis
          </a>
          <span>/</span>
          <span className="text-gray-600 truncate max-w-[200px] font-medium">
            {product.name}
          </span>
        </nav>

        {/* MAIN BODY LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* GALERI FOTO (5 Kolom) */}
          <div className="lg:col-span-5 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm space-y-4">
            <div className="aspect-[3/4] bg-gray-50 rounded-xl overflow-hidden relative">
              <img
                src={currentImage}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-2">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(img)}
                    className={`w-16 h-16 rounded-lg overflow-hidden border-2 ${currentImage === img ? "border-emerald-600" : "border-gray-200"}`}
                  >
                    <img
                      src={img}
                      alt="thumb"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* INFORMASI PEMBELIAN (7 Kolom) */}
          <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-6">
            <div className="border-b border-gray-100 pb-4 space-y-2">
              <span className="bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded text-xs font-semibold">
                Premium Butik
              </span>
              <h1 className="text-lg sm:text-2xl font-serif font-bold text-gray-900 leading-snug mt-1">
                {product.name}
              </h1>
              <div className="flex items-center space-x-3 text-xs pt-1 text-gray-400">
                <div className="text-amber-500">
                  {"★".repeat(product.rating)}{" "}
                  <span className="text-gray-600 font-medium">(4.9)</span>
                </div>
                <span>•</span>
                <p>
                  <span className="text-gray-700 font-semibold">
                    {product.sold}
                  </span>{" "}
                  Terjual
                </p>
                <span>•</span>
                <p>
                  SKU:{" "}
                  <span className="text-gray-600 font-mono">{product.sku}</span>
                </p>
              </div>
            </div>

            <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100/40">
              <p className="text-2xl font-bold text-emerald-700">
                {formatRupiah(product.price)}
              </p>
              <p className="text-[10px] text-emerald-600 font-medium mt-1">
                ✨ Tersedia cicilan 0% via QRIS Paylater & bebas biaya admin.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-semibold text-gray-700 block">
                Pilih Ukuran:
              </span>
              <div className="flex gap-2 text-xs">
                {["S", "M", "L", "XL", "XXL"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-10 rounded-lg border font-medium transition-all ${selectedSize === size ? "border-emerald-600 bg-emerald-50 text-emerald-700 font-bold shadow-sm" : "border-gray-200 text-gray-600 hover:border-emerald-600 bg-white"}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-semibold text-gray-700 block">
                Jumlah Baju:
              </span>
              <div className="flex items-center space-x-3 text-xs">
                <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-white">
                  <button
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                    className="px-3 py-2 bg-gray-50 hover:bg-gray-100 font-bold border-r border-gray-200 text-sm"
                  >
                    -
                  </button>
                  <span className="px-5 py-2 font-semibold text-center w-12">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 bg-gray-50 hover:bg-gray-100 font-bold border-l border-gray-200 text-sm"
                  >
                    +
                  </button>
                </div>
                <span className="text-gray-400 text-[11px]">
                  Sisa Stok:{" "}
                  <span className="text-gray-700 font-semibold">45 Pcs</span>
                </span>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-4 text-xs space-y-2 text-gray-600">
              <div className="flex items-center space-x-2">
                <span>🚚</span>
                <p>
                  Ongkos Kirim:{" "}
                  <span className="font-semibold text-gray-800">
                    Gratis Ongkir
                  </span>{" "}
                  (Min. Belanja Rp200rb)
                </p>
              </div>
              <div className="flex items-center space-x-2 pl-6 text-gray-400 text-[11px]">
                <span>⏱️</span>
                <p>
                  Estimasi Tiba:{" "}
                  <span className="text-gray-500 font-medium">
                    2-4 Hari Kerja
                  </span>{" "}
                  (Dikirim dari Jakarta)
                </p>
              </div>
            </div>

            <div className="flex gap-3 pt-2 text-sm">
              <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3.5 px-6 rounded-xl transition-all shadow-md">
                Beli Sekarang
              </button>
              <button className="bg-amber-500 hover:bg-amber-600 text-emerald-950 font-semibold py-3.5 px-5 rounded-xl transition-all shadow-sm">
                🛒 + Keranjang
              </button>
            </div>
          </div>
        </div>

        {/* TABS KETERANGAN TEKNIS */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm max-w-4xl">
          <div className="flex border-b border-gray-200 text-xs sm:text-sm font-medium mb-6">
            <button
              onClick={() => setActiveTab("deskripsi")}
              className={`pb-3 pr-6 border-b-2 ${activeTab === "deskripsi" ? "border-emerald-600 text-emerald-700 font-bold" : "border-transparent text-gray-400"}`}
            >
              Deskripsi Lengkap
            </button>
            <button
              onClick={() => setActiveTab("fitur")}
              className={`pb-3 pr-6 border-b-2 ${activeTab === "fitur" ? "border-emerald-600 text-emerald-700 font-bold" : "border-transparent text-gray-400"}`}
            >
              Spesifikasi Syar’i
            </button>
          </div>

          <div className="text-xs sm:text-sm leading-relaxed text-gray-600">
            {activeTab === "deskripsi" ? (
              <p>{product.description}</p>
            ) : (
              <ul className="list-disc pl-5 space-y-1">
                {product.features.map((feat, i) => (
                  <li key={i}>{feat}</li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* ============================================================== */}
        {/* NEW SECTION: TOTAL REVIEWS / TESTIMONI PRODUK (MARKETPLACE STYLE) */}
        {/* ============================================================== */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm max-w-4xl space-y-8">
          <div>
            <h2 className="text-lg font-serif font-bold text-gray-900">
              Ulasan Pembeli ({PRODUCT_REVIEWS.length})
            </h2>
            <p className="text-xs text-gray-500 mt-0.5">
              Ulasan real dari konsumen yang telah menyelesaikan transaksi.
            </p>
          </div>

          {/* Bagan Rincian Akumulasi Rating */}
          <div className="flex flex-col sm:flex-row gap-6 bg-gray-50 p-5 rounded-xl border border-gray-100 items-center">
            <div className="text-center sm:pr-8 sm:border-r sm:border-gray-200">
              <p className="text-4xl md:text-5xl font-extrabold text-gray-900">
                4.9
              </p>
              <div className="text-amber-500 text-sm mt-1">★★★★★</div>
              <p className="text-[10px] text-gray-400 font-medium mt-1">
                Kepuasan 98%
              </p>
            </div>

            {/* Rincian Bar Bintang */}
            <div className="flex-1 w-full space-y-1.5 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-14 text-gray-500 text-[11px]">
                  Bintang 5
                </span>
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="bg-amber-500 h-full w-[90%]" />
                </div>
                <span className="w-6 text-gray-400 text-[11px] text-right">
                  92
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-14 text-gray-500 text-[11px]">
                  Bintang 4
                </span>
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="bg-amber-500 h-full w-[8%]" />
                </div>
                <span className="w-6 text-gray-400 text-[11px] text-right">
                  8
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-14 text-gray-500 text-[11px]">
                  Bintang 3
                </span>
                <div className="flex-1 h-2 bg-gray-200 rounded-full">
                  <div className="bg-amber-500 h-full w-0" />
                </div>
                <span className="w-6 text-gray-400 text-[11px] text-right">
                  0
                </span>
              </div>
            </div>
          </div>

          {/* List Review Konsumen */}
          <div className="divide-y divide-gray-100">
            {PRODUCT_REVIEWS.map((review) => (
              <div
                key={review.id}
                className="py-5 first:pt-0 last:pb-0 space-y-2"
              >
                <div className="flex justify-between items-start text-xs">
                  <div>
                    <div className="text-amber-500">
                      {"★".repeat(review.rating)}
                      {"☆".repeat(5 - review.rating)}
                    </div>
                    <div className="flex items-center gap-2 mt-1 text-[11px]">
                      <span className="font-semibold text-gray-800">
                        {review.name}
                      </span>
                      <span className="text-gray-300">•</span>
                      <span className="text-gray-400">{review.date}</span>
                    </div>
                  </div>
                  <span className="text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-md font-mono">
                    Variasi: {review.variant}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pt-1">
                  {review.comment}
                </p>

                {/* Tombol Suka Ulasan (Dummy Interaction) */}
                <div className="pt-2">
                  <button className="inline-flex items-center gap-1.5 text-[11px] text-gray-400 hover:text-emerald-600 transition-colors bg-gray-50 border border-gray-200/60 px-2.5 py-1 rounded-md">
                    👍 Membantu ({review.likes})
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION REKOMENDASI PRODUK */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-serif font-bold text-gray-900">
              Mungkin Anda Juga Menyukai
            </h2>
            <p className="text-xs text-gray-500 mt-0.5">
              Koleksi busana muslimah pelengkap penampilan syar'i Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {RECOMMENDATIONS.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm p-3 flex items-center space-x-4 hover:border-emerald-500 transition-colors group relative"
              >
                <div className="w-20 h-24 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-1 flex-1 min-w-0">
                  <h3 className="text-xs sm:text-sm font-medium text-gray-800 group-hover:text-emerald-700 transition-colors truncate">
                    <a href={`/gamis/${item.id}`}>
                      <span className="absolute inset-0" />
                      {item.name}
                    </a>
                  </h3>
                  <p className="text-xs font-bold text-gray-900">
                    {formatRupiah(item.price)}
                  </p>
                  <span className="inline-block text-[10px] text-emerald-600 font-medium bg-emerald-50 px-1.5 py-0.5 rounded mt-1">
                    Lihat detail &rarr;
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
