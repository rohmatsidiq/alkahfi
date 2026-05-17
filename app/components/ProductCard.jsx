// src/app/components/ProductCard.jsx
import React from "react";

export default function ProductCard({ product }) {
  const formatRupiah = (value) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="aspect-[3/4] bg-gray-50 overflow-hidden relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 inline-flex items-center rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-700/10">
          {product.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4 space-y-2">
        <h3 className="text-sm font-medium text-gray-800 group-hover:text-emerald-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-base font-semibold text-gray-900">
          {formatRupiah(product.price)}
        </p>

        <button className="mt-3 w-full bg-emerald-600 text-white text-xs font-medium py-2 px-4 rounded-md hover:bg-emerald-700 transition-colors">
          Tambah ke Keranjang
        </button>
      </div>
    </div>
  );
}
