// src/app/(admin)/admin/produk/page.jsx
import React from "react";
import {
  Plus,
  Search,
  SlidersHorizontal,
  Edit2,
  Trash2,
  ChevronLeft,
  ChevronRight,
  Package,
} from "lucide-react";

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
    statusStyle: "text-emerald-700 bg-emerald-50/60 border-emerald-100/50",
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
    statusStyle: "text-amber-700 bg-amber-50/60 border-amber-100/50",
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
    statusStyle: "text-emerald-700 bg-emerald-50/60 border-emerald-100/50",
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
    statusStyle: "text-rose-700 bg-rose-50/60 border-rose-100/50",
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
    <div className="space-y-8 min-h-screen text-stone-800 antialiased selection:bg-emerald-100">
      {/* ================= 1. LUXURY MANAGEMENT HEADER ================= */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-stone-200/40 pb-6">
        <div className="space-y-1">
          <h1 className="text-2xl font-serif font-medium text-stone-900 tracking-tight">
            Product Inventory
          </h1>
          <p className="text-xs text-stone-400 font-light">
            Kelola informasi utama, kurasi harga, rumpun kategori, dan
            ketersediaan stok drop produk.
          </p>
        </div>

        {/* Button Add Product Minimalis Premium */}
        <button className="group inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-950 text-white text-xs font-bold uppercase tracking-widest py-3.5 px-6 rounded-xl transition-all shadow-sm active:scale-98 self-start sm:self-auto">
          <Plus className="w-4 h-4 text-stone-300 group-hover:text-white transition-colors" />
          <span>Add Product</span>
        </button>
      </div>

      {/* ================= 2. CLEAN FILTER CONTROLLER CONSOLE ================= */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white p-4 rounded-2xl border border-stone-100/40 shadow-[0_8px_30px_rgb(0,0,0,0.01)]">
        {/* Input Pencarian dengan Sizing Clean */}
        <div className="relative w-full md:max-w-xs group">
          <input
            type="text"
            placeholder="Search products by name or SKU..."
            className="w-full bg-stone-50 border border-stone-100/80 pl-10 pr-4 py-2.5 rounded-xl text-xs outline-none focus:border-emerald-600/30 focus:bg-white focus:ring-4 focus:ring-emerald-600/5 transition-all text-stone-700"
          />
          <Search className="w-4 h-4 text-stone-400 absolute left-3 top-3 group-focus-within:text-emerald-700 transition-colors" />
        </div>

        {/* Pills Tab Filter Rapi */}
        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0 text-xs font-semibold text-stone-400">
          <div className="flex bg-stone-50 p-1 rounded-xl">
            <button className="bg-white text-stone-900 shadow-sm px-4 py-1.5 rounded-lg">
              All Drop
            </button>
            <button className="hover:text-stone-900 px-3 py-1.5 transition-colors">
              Gamis
            </button>
            <button className="hover:text-stone-900 px-3 py-1.5 transition-colors">
              Abaya
            </button>
            <button className="hover:text-stone-900 px-3 py-1.5 transition-colors">
              Hijab
            </button>
          </div>

          <button
            className="p-2 border border-stone-200 hover:border-stone-400 rounded-xl transition-colors shrink-0 ml-auto md:ml-0"
            title="Advanced Filter"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-stone-500" />
          </button>
        </div>
      </div>

      {/* ================= 3. INVENTORY TABLE WORKSPACE ================= */}
      <div className="bg-white rounded-2xl border border-stone-100/60 shadow-[0_8px_30px_rgb(0,0,0,0.01)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-stone-50/50 border-b border-stone-100 text-[10px] text-stone-400 font-bold uppercase tracking-widest">
                <th className="px-6 py-4.5">Product Info</th>
                <th className="px-6 py-4.5">SKU</th>
                <th className="px-6 py-4.5">Category</th>
                <th className="px-6 py-4.5">Price</th>
                <th className="px-6 py-4.5">Stock Status</th>
                <th className="px-6 py-4.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-600 font-medium">
              {INVENTORY_PRODUCTS.map((product) => {
                return (
                  <tr
                    key={product.id}
                    className="hover:bg-stone-50/30 transition-all group"
                  >
                    {/* Media Thumbnail & Name Info */}
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3.5">
                        <div className="w-11 h-14 bg-stone-50 rounded-xl overflow-hidden border border-stone-100/80 flex-shrink-0 shadow-sm relative group-hover:shadow transition-shadow">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                          />
                        </div>
                        <div className="max-w-[240px] sm:max-w-[320px]">
                          <p className="font-semibold text-stone-800 line-clamp-2 leading-snug group-hover:text-emerald-800 transition-colors cursor-pointer">
                            {product.name}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* SKU Code */}
                    <td className="px-6 py-4 font-mono text-stone-400 tracking-wider text-[11px]">
                      {product.sku}
                    </td>

                    {/* Category Label */}
                    <td className="px-6 py-4 text-stone-400 font-light">
                      {product.category}
                    </td>

                    {/* Pricing */}
                    <td className="px-6 py-4 text-stone-900 font-bold font-mono tracking-tight text-sm">
                      {formatRupiah(product.price)}
                    </td>

                    {/* Status Badge & Dynamic Stock Alert */}
                    <td className="px-6 py-4">
                      <div className="flex flex-col space-y-1.5 items-start">
                        <span
                          className={`text-[9px] px-2 py-0.5 rounded-md font-bold uppercase tracking-wider border ${product.statusStyle}`}
                        >
                          {product.status.replace(/ /g, "_")}
                        </span>
                        <p className="text-[10px] text-stone-400 font-light pl-0.5 inline-flex items-center gap-1">
                          <Package className="w-3 h-3 text-stone-300" />{" "}
                          {product.stock} Pcs available
                        </p>
                      </div>
                    </td>

                    {/* Action Panel Controllers */}
                    <td className="px-6 py-4 text-right">
                      <div className="inline-flex items-center space-x-1">
                        <button
                          className="p-2 text-stone-400 hover:text-stone-900 hover:bg-stone-50 rounded-xl transition-all border border-transparent hover:border-stone-100 active:scale-95"
                          title="Edit Product"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          className="p-2 text-stone-400 hover:text-red-500 hover:bg-red-50/60 rounded-xl transition-all border border-transparent hover:border-red-100/50 active:scale-95"
                          title="Delete Product"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* ================= 4. SEAMLESS PAGINATION FOOTER ================= */}
        <div className="bg-stone-50/40 px-6 py-4 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400 font-medium">
          <p>
            Showing{" "}
            <span className="text-stone-700 font-semibold">
              {INVENTORY_PRODUCTS.length}
            </span>{" "}
            of <span className="text-stone-700 font-semibold">142</span> premium
            drops
          </p>
          <div className="flex gap-2">
            <button
              className="p-2 bg-white border border-stone-200 text-stone-400 rounded-xl font-bold cursor-not-allowed opacity-50"
              disabled
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button className="p-2 bg-white border border-stone-200 hover:border-stone-300 text-stone-700 rounded-xl font-bold transition-all shadow-sm active:scale-95">
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
