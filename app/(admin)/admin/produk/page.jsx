// app/(admin)/admin/produk/page.jsx
import React from "react";
import Link from "next/link";

// Data Dummy Inventori Produk Fashion Muslim
const INVENTORY_PRODUCTS = [
  {
    id: 1,
    sku: "ALK-GMS-001",
    name: "Gamis Silk Premium Medina (Emerald Green)",
    category: "Gamis",
    price: 385000,
    stock: 45,
    status: "In Stock",
    image:
      "https://i.pinimg.com/736x/f3/9f/b6/f39fb6d69e7b4b66399415af67eaa758.jpg",
  },
  {
    id: 2,
    sku: "ALK-ABY-002",
    name: "Abaya Malikah Bordir Komputer (Jetblack)",
    category: "Abaya",
    price: 450000,
    stock: 5,
    status: "Low Stock",
    image:
      "https://i.pinimg.com/736x/07/ab/c2/07abc2ba15d09c1902ed36344903144d.jpg",
  },
  {
    id: 3,
    sku: "ALK-KKM-003",
    name: "Koko Kurta Modern Lengan 3/4",
    category: "Baju Koko",
    price: 185000,
    stock: 82,
    status: "In Stock",
    image:
      "https://i.pinimg.com/736x/9b/be/de/9bbede1b5a65271a53b3b1a33ea5f3be.jpg",
  },
  {
    id: 4,
    sku: "ALK-HJB-004",
    name: "Hijab Pashmina Ceruty Baby Doll Premium",
    category: "Hijab",
    price: 65000,
    stock: 0,
    status: "Out of Stock",
    image:
      "https://i.pinimg.com/736x/77/4d/2f/774d2fee919f347b6a2d80d25a3926b4.jpg",
  },
];

export default function AdminProduk() {
  const formatRupiah = (value) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="space-y-8 min-h-[calc(100vh-4rem)] font-sans antialiased text-gray-800">
      {/* 1. MANAGEMENT HEADER SECTION */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200/40 pb-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Products
          </h2>
          <p className="text-xs text-slate-400 font-medium mt-0.5">
            Kelola informasi, harga, kategori, dan ketersediaan stok produk.
          </p>
        </div>

        {/* Tombol Tambah Produk Premium */}
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all shadow-md shadow-emerald-600/10 self-start sm:self-auto flex items-center space-x-2">
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
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          <span>Add Product</span>
        </button>
      </div>

      {/* 2. FILTER & SEARCH CONTROL CONSOLE */}
      <div className="bg-white p-4 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] border border-slate-100 flex flex-col sm:flex-row gap-3 items-center justify-between">
        {/* Search Input */}
        <div className="relative w-full sm:max-w-xs">
          <input
            type="text"
            placeholder="Search products by name or SKU..."
            className="w-full bg-slate-50 border border-slate-200 pl-9 pr-4 py-2 rounded-xl text-xs outline-none focus:border-emerald-600 focus:bg-white transition-all text-gray-700"
          />
          <span className="absolute left-3 top-2.5 text-slate-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-3.5 h-3.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.603 10.601z"
              />
            </svg>
          </span>
        </div>

        {/* Category Filter Switcher */}
        <div className="flex gap-2 w-full sm:w-auto text-[11px] font-semibold text-slate-500 overflow-x-auto pb-1 sm:pb-0">
          <button className="bg-slate-900 text-white px-3 py-1.5 rounded-lg shadow-sm">
            All
          </button>
          <button className="bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg hover:text-slate-900 transition-colors">
            Gamis
          </button>
          <button className="bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg hover:text-slate-900 transition-colors">
            Abaya
          </button>
          <button className="bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg hover:text-slate-900 transition-colors">
            Hijab
          </button>
        </div>
      </div>

      {/* 3. PREMIUM INVENTORY TABLE CONTAINER */}
      <div className="bg-white rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] overflow-hidden border border-slate-100">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-50/70 border-b border-slate-100 text-[11px] text-slate-400 font-bold uppercase tracking-wider">
                <th className="px-6 py-4">Product Info</th>
                <th className="px-6 py-4">SKU</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Price</th>
                <th className="px-6 py-4">Stock Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
              {INVENTORY_PRODUCTS.map((product) => {
                // Konfigurasi Badge Status Stok Berdasarkan Kondisi Real
                const statusStyles = {
                  "In Stock":
                    "bg-emerald-50 text-emerald-700 border-emerald-200/50",
                  "Low Stock": "bg-amber-50 text-amber-700 border-amber-200/50",
                  "Out of Stock": "bg-rose-50 text-rose-700 border-rose-200/50",
                }[product.status];

                return (
                  <tr
                    key={product.id}
                    className="hover:bg-slate-50/40 transition-colors group"
                  >
                    {/* Kolom Info Gambar & Nama */}
                    <td className="px-6 py-4 flex items-center space-x-3">
                      <div className="w-10 h-12 bg-slate-50 rounded-lg overflow-hidden border border-slate-100 flex-shrink-0 shadow-inner">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="max-w-[220px] sm:max-w-[300px]">
                        <p className="font-semibold text-slate-900 truncate group-hover:text-emerald-700 transition-colors">
                          {product.name}
                        </p>
                      </div>
                    </td>

                    {/* Kolom SKU (Kode Barang) */}
                    <td className="px-6 py-4 font-mono text-slate-500 tracking-tight">
                      {product.sku}
                    </td>

                    {/* Kolom Kategori */}
                    <td className="px-6 py-4 text-slate-500">
                      {product.category}
                    </td>

                    {/* Kolom Harga */}
                    <td className="px-6 py-4 text-slate-900 font-semibold">
                      {formatRupiah(product.price)}
                    </td>

                    {/* Kolom Status Ketersediaan & Angka Stok */}
                    <td className="px-6 py-4">
                      <div className="flex flex-col space-y-1 items-start">
                        <span
                          className={`text-[9px] px-2 py-0.5 rounded-md font-bold border ${statusStyles}`}
                        >
                          {product.status}
                        </span>
                        <p className="text-[10px] text-slate-400 font-medium pl-0.5">
                          {product.stock} Pcs available
                        </p>
                      </div>
                    </td>

                    {/* Kolom Aksi Kontrol (Edit & Delete Monokrom) */}
                    <td className="px-6 py-4 text-right">
                      <div className="inline-flex items-center space-x-1">
                        {/* Tombol Edit */}
                        <button
                          className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                          title="Edit Product"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                            />
                          </svg>
                        </button>
                        {/* Tombol Hapus */}
                        <button
                          className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                          title="Delete Product"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* 4. DUMMY PAGINATION FOOTER */}
        <div className="bg-slate-50/50 px-6 py-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
          <p>
            Showing{" "}
            <span className="text-slate-700 font-semibold">
              {INVENTORY_PRODUCTS.length}
            </span>{" "}
            of <span className="text-slate-700 font-semibold">142</span>{" "}
            products
          </p>
          <div className="flex space-x-1.5">
            <button
              className="px-3 py-1 bg-white border border-slate-200 text-slate-600 rounded-lg shadow-sm font-semibold cursor-not-allowed"
              disabled
            >
              Previous
            </button>
            <button className="px-3 py-1 bg-white border border-slate-200 text-slate-600 rounded-lg shadow-sm font-semibold hover:border-slate-300 transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
