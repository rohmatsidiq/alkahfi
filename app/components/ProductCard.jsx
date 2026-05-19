// src/app/components/ProductCard.jsx
import React from "react";
// Pastikan kamu sudah menginstal lucide-react jika ingin menggunakan ikon,
// atau kamu bisa menggantinya dengan SVG/Emoji jika belum ada.
import { ShoppingCart, Star } from "lucide-react";

export default function ProductCard({ product }) {
  const formatRupiah = (value) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);
  };

  // Nilai tiruan (fallback) jika data di bawah tidak ada di object product
  const discount = product.discount || 10; // dalam persen
  const originalPrice = product.price / (1 - discount / 100);
  const rating = product.rating || 4.8;
  const reviewsCount = product.reviewsCount || 120;

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-emerald-100">
      {/* Bagian Gambar Produk */}
      <div className="aspect-square bg-gray-50 overflow-hidden relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Badge Kategori */}
        <span className="absolute top-3 left-3 inline-flex items-center rounded-lg bg-white/95 backdrop-blur-sm px-2.5 py-1 text-[11px] font-semibold text-gray-700 shadow-sm uppercase tracking-wider">
          {product.category}
        </span>

        {/* Badge Diskon (Opsional) */}
        {discount > 0 && (
          <span className="absolute top-3 right-3 inline-flex items-center rounded-lg bg-red-500 px-2 py-0.5 text-[11px] font-bold text-white shadow-sm">
            -{discount}%
          </span>
        )}
      </div>

      {/* Bagian Informasi Produk */}
      <div className="flex flex-1 flex-col p-4 justify-between">
        <div className="space-y-1.5">
          {/* Rating & Ulasan */}
          <div className="flex items-center space-x-1">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="text-xs font-semibold text-gray-700">
              {rating}
            </span>
            <span className="text-[11px] text-gray-400">({reviewsCount})</span>
          </div>

          {/* Nama Produk */}
          <h3 className="text-sm font-medium text-gray-700 line-clamp-2 group-hover:text-emerald-600 transition-colors duration-200 min-h-[40px] leading-snug">
            {product.name}
          </h3>
        </div>

        {/* Bagian Harga & Tombol Aksi */}
        <div className="mt-4 pt-3 border-t border-gray-50 flex items-end justify-between">
          <div className="flex flex-col">
            {discount > 0 && (
              <span className="text-xs text-gray-400 line-through decoration-gray-300">
                {formatRupiah(originalPrice)}
              </span>
            )}
            <span className="text-base font-bold text-gray-900 tracking-tight">
              {formatRupiah(product.price)}
            </span>
          </div>

          {/* Tombol Tambah ke Keranjang */}
          <button
            className="flex items-center justify-center p-2.5 rounded-xl bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all duration-300 transform active:scale-95 group/btn"
            title="Tambah ke Keranjang"
          >
            <ShoppingCart className="w-4 h-4 transition-transform group-hover/btn:animate-pulse" />
          </button>
        </div>
      </div>
    </div>
  );
}
