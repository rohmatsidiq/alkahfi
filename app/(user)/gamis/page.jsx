// src/app/(customer)/gamis/page.jsx
import React from "react";
import {
  SlidersHorizontal,
  ArrowUpDown,
  Sparkles,
  Star,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";

const GAMIS_PRODUCTS = [
  {
    id: 1,
    name: "Gamis Silk Premium Medina (Emerald Green)",
    price: 385000,
    rating: 5,
    sold: 120,
    image:
      "https://i.pinimg.com/736x/77/4d/2f/774d2fee919f347b6a2d80d25a3926b4.jpg",
    tag: "Best Seller",
    discount: 15,
  },
  {
    id: 2,
    name: "Gamis Abaya Malikah Bordir Komputer (Jetblack)",
    price: 450000,
    rating: 5,
    sold: 85,
    image:
      "https://i.pinimg.com/736x/26/dd/33/26dd33571a56c782fb31c6cb9c576370.jpg",
    tag: "Premium Quality",
    discount: 0,
  },
  {
    id: 3,
    name: "Gamis Anak Shalihah Set Hijab Khimar Kaia",
    price: 195000,
    rating: 5,
    sold: 230,
    image:
      "https://i.pinimg.com/1200x/39/35/75/39357557a026fdb9ce73e8656828a6c1.jpg",
    tag: "Kids Series",
    discount: 0,
  },
  {
    id: 4,
    name: "Gamis Crinkle Airflow Loose Fit Casual Style",
    price: 245000,
    rating: 4,
    sold: 94,
    image:
      "https://i.pinimg.com/736x/46/1b/44/461b441fa06bbfde7721d2c5c90b6254.jpg",
    tag: "Daily Wear",
    discount: 10,
  },
  {
    id: 5,
    name: "Abaya Inner Outer Ceruty 2 Layer Luxury Edition",
    price: 520000,
    rating: 5,
    sold: 42,
    image:
      "https://i.pinimg.com/1200x/d6/c9/b2/d6c9b20890ea70cc93e00f6e302e89b1.jpg",
    tag: "Exclusive Drop",
    discount: 0,
  },
  {
    id: 6,
    name: "Gamis Brokat Kondangan Syar’i Brukat Tile Luxurious",
    price: 399000,
    rating: 5,
    sold: 67,
    image:
      "https://i.pinimg.com/736x/e8/2e/6f/e82e6f8e6eb172e658f51f6f7c396fad.jpg",
    tag: "Formal Attire",
    discount: 5,
  },
  {
    id: 7,
    name: "Gamis Kaftan Premium Eid Series Statement Piece",
    price: 480000,
    rating: 5,
    sold: 110,
    image:
      "https://i.pinimg.com/1200x/ae/6b/ad/ae6bad3128a069f91e4dfa9597b079a1.jpg",
    tag: "Limited Stock",
    discount: 20,
  },
  {
    id: 8,
    name: "Gamis Rayon Viscose Motif Bunga Flowy & Adem",
    price: 165000,
    rating: 4,
    sold: 340,
    image:
      "https://i.pinimg.com/736x/5d/85/20/5d8520ae4cd9dd50928b9178c329cb99.jpg",
    tag: "Comfy Stay",
    discount: 0,
  },
];

export default function GamisKatalog() {
  const formatRupiah = (value) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="bg-white min-h-screen py-16 antialiased selection:bg-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= BANNER KATEGORI EDITORIAL ================= */}
        <div className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 rounded-[2rem] p-8 md:p-12 text-white mb-14 shadow-xl shadow-emerald-950/10 overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="absolute -right-10 -top-10 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-2xl space-y-3">
            <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase text-amber-300">
              <Sparkles className="w-3 h-3" /> Drop Katalog Utama
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif font-medium tracking-wide leading-tight">
              Koleksi Gamis & Abaya
            </h1>
            <p className="text-xs sm:text-sm text-emerald-100/70 max-w-xl font-light leading-relaxed">
              Temukan impresi siluet anggun nan bersahaja lewat kurasi gamis
              syar'i bermaterial premium. Dirancang dengan potongan loose yang
              flowy, adem, dan tidak menerawang untuk personal style kamu yang
              berkelas.
            </p>
          </div>
        </div>

        {/* ================= FILTER & UTILITY BAR CONTROLLER ================= */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center border-b border-gray-100 pb-6 mb-10 text-xs text-gray-500">
          <div className="space-y-1">
            <p className="font-semibold text-gray-900 tracking-wide text-sm">
              Semua Katalog Gamis
            </p>
            <p className="text-gray-400">
              Menampilkan{" "}
              <span className="font-bold text-gray-700">
                {GAMIS_PRODUCTS.length}
              </span>{" "}
              produk kurasi terbaik
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            {/* Quick Filter Pill Buttons */}
            <div className="flex bg-gray-50 border border-gray-100 p-1 rounded-xl font-medium">
              <button className="bg-white text-gray-900 shadow-sm px-4 py-2 rounded-lg">
                Semua
              </button>
              <button className="text-gray-400 hover:text-gray-900 px-3 py-2 transition-colors">
                Premium
              </button>
              <button className="text-gray-400 hover:text-gray-900 px-3 py-2 transition-colors">
                Casual
              </button>
            </div>

            {/* Dropdown Urutan */}
            <div className="relative inline-flex items-center bg-white border border-gray-200 rounded-xl px-3 py-2 font-medium text-gray-600 hover:border-gray-300 transition-colors ml-auto md:ml-0">
              <ArrowUpDown className="w-3.5 h-3.5 mr-2 text-gray-400" />
              <select className="bg-transparent outline-none appearance-none cursor-pointer pr-4 text-xs">
                <option>Urutan: Terpopuler</option>
                <option>Rilis Terbaru</option>
                <option>Harga: Rendah ke Tinggi</option>
                <option>Harga: Tinggi ke Rendah</option>
              </select>
            </div>
          </div>
        </div>

        {/* ================= GRID PRODUK CLEAN & RAPI ================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-6 xl:gap-x-8">
          {GAMIS_PRODUCTS.map((product) => {
            const originalPrice =
              product.discount > 0
                ? product.price / (1 - product.discount / 100)
                : null;

            return (
              <div
                key={product.id}
                className="group cursor-pointer flex flex-col justify-between rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-100/40 hover:border-emerald-100 relative"
              >
                {/* Bagian Media / Image Area */}
                <Link
                  href={`/gamis/${product.id}`}
                  className="aspect-square bg-gray-50 overflow-hidden relative rounded-t-2xl"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center scale-101 transition-transform duration-700 ease-out group-hover:scale-106"
                  />

                  {/* Badge Tag Kain/Koleksi */}
                  <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-lg text-[10px] font-bold text-gray-700 shadow-sm uppercase tracking-widest">
                    {product.tag}
                  </span>

                  {/* Badge Diskon Dinamis */}
                  {product.discount > 0 && (
                    <span className="absolute top-3 right-3 bg-red-500 px-2 py-0.5 rounded-md text-[10px] font-bold text-white shadow-sm">
                      -{product.discount}%
                    </span>
                  )}
                </Link>

                {/* Bagian Informasi Teks */}
                <Link
                  href={`/gamis/${product.id}`}
                  className="p-4 flex-1 flex flex-col justify-between"
                >
                  <div className="space-y-1.5">
                    {/* Rating Bintang & Sat-Set Terjual */}
                    <div className="flex items-center space-x-1 text-[11px] font-medium">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span className="text-gray-700 font-bold">
                        {product.rating}.0
                      </span>
                      <span className="text-gray-400 font-light">
                        ({product.sold} sold)
                      </span>
                    </div>

                    {/* Judul Tautan */}
                    <h3 className="text-xs sm:text-sm font-medium text-gray-700 line-clamp-2 group-hover:text-emerald-700 transition-colors leading-snug min-h-[38px]">
                      <p className="hover:underline decoration-emerald-200">
                        {product.name}
                      </p>
                    </h3>
                  </div>

                  {/* Bagian Harga Dinamis & Tombol Add-To-Cart Minimalis */}
                  <div className="mt-4 pt-3 border-t border-gray-50 flex items-end justify-between">
                    <div className="flex flex-col">
                      {originalPrice && (
                        <span className="text-[11px] text-gray-400 line-through decoration-gray-200">
                          {formatRupiah(originalPrice)}
                        </span>
                      )}
                      <span className="text-sm sm:text-base font-bold text-gray-900 tracking-tight">
                        {formatRupiah(product.price)}
                      </span>
                    </div>

                    {/* Tombol Keranjang Cepat */}
                    <button
                      className="flex items-center justify-center p-2.5 rounded-xl bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all duration-300 transform active:scale-95 group/btn"
                      title="Tambah ke Keranjang"
                    >
                      <ShoppingCart className="w-3.5 h-3.5 transition-transform group-hover/btn:scale-105" />
                    </button>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
