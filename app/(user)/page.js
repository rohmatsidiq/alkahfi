// src/app/(customer)/page.jsx
import React from "react";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import {
  Truck,
  ShieldCheck,
  RefreshCw,
  ArrowRight,
  Sparkles,
  Clock,
  ArrowUpDown,
} from "lucide-react";

// Data Dummy Kategori dengan Warna Estetik Modern
const CATEGORIES = [
  {
    id: 1,
    name: "Gamis",
    icon: "👘",
    count: "120+ Item",
    bg: "bg-orange-50/70",
  },
  { id: 2, name: "Hijab", icon: "🧕", count: "80+ Item", bg: "bg-teal-50/70" },
  { id: 3, name: "Koko", icon: "👔", count: "50+ Item", bg: "bg-blue-50/70" },
  {
    id: 4,
    name: "Mukena",
    icon: "🕌",
    count: "30+ Item",
    bg: "bg-purple-50/70",
  },
  {
    id: 5,
    name: "Abaya",
    icon: "🧥",
    count: "45+ Item",
    bg: "bg-stone-100/70",
  },
  {
    id: 6,
    name: "Aksesoris",
    icon: "📿",
    count: "25+ Item",
    bg: "bg-amber-50/70",
  },
];

const DUMMY_PRODUCTS = [
  {
    id: 1,
    name: "Gamis Silk Premium Medina (Emerald Green)",
    price: 385000,
    category: "Gamis",
    image:
      "https://i.pinimg.com/736x/77/4d/2f/774d2fee919f347b6a2d80d25a3926b4.jpg",
    discount: 15,
  },
  {
    id: 2,
    name: "Abaya Malikah Bordir Komputer (Jetblack)",
    price: 450000,
    category: "Abaya",
    image:
      "https://i.pinimg.com/736x/26/dd/33/26dd33571a56c782fb31c6cb9c576370.jpg",
    discount: 0,
  },
  {
    id: 3,
    name: "Koko Kurta Modern Lengan 3/4 Minimalist",
    price: 185000,
    category: "Koko",
    image:
      "https://i.pinimg.com/736x/7d/5a/97/7d5a97e24db278b6dd78b677118f6d8b.jpg",
    discount: 10,
  },
  {
    id: 4,
    name: "Hijab Pashmina Ceruty Baby Doll Premium",
    price: 65000,
    category: "Hijab",
    image:
      "https://i.pinimg.com/736x/3a/69/7a/3a697a17aab691a6a3e0c2e879317cd1.jpg",
    discount: 0,
  },
  {
    id: 5,
    name: "Mukena Traveling Parasut Premium Ringan",
    price: 210000,
    category: "Mukena",
    image:
      "https://i.pinimg.com/1200x/b2/57/08/b257083c3473678ee9ce19d049895a53.jpg",
    discount: 5,
  },
  {
    id: 6,
    name: "Gamis Anak Shalihah Set Hijab Kaia",
    price: 195000,
    category: "Gamis",
    image:
      "https://i.pinimg.com/736x/52/14/97/521497d50851c431c25d0bc553c72663.jpg",
    discount: 0,
  },
  {
    id: 7,
    name: "Koko Premium Executive Pake Saku Slimfit",
    price: 275000,
    category: "Koko",
    image:
      "https://i.pinimg.com/736x/7b/a4/12/7ba4121ba47ba22b106b2b9248fdb47a.jpg",
    discount: 20,
  },
  {
    id: 8,
    name: "Khimar Syar’i Ceruty Soft Pet 2 Layer",
    price: 135000,
    category: "Hijab",
    image:
      "https://i.pinimg.com/736x/fc/b6/32/fcb63206529e528dcc98934a7cce9dcd.jpg",
    discount: 0,
  },
];

const TESTIMONIALS = [
  {
    id: 1,
    name: "Aisyah Rahma",
    role: "Verified Buyer",
    text: "Bahan gamisnya seadem itu, jahitannya rapi banget & gak menerawang. Bakal repurchase warna lain sih!",
    rating: 5,
    avatar: "AR",
  },
  {
    id: 2,
    name: "Muhammad Farhan",
    role: "Verified Buyer",
    text: "Koko kurtanya pas di badan, cuttingannya clean & modern. Dipakai ngantor atau ibadah tetep keliatan proper.",
    rating: 5,
    avatar: "MF",
  },
  {
    id: 3,
    name: "Siti Khadijah",
    role: "Verified Buyer",
    text: "Pashminanya gampang di-styling dan bahannya jatuh banget. Delivery-nya juga sat-set parah!",
    rating: 5,
    avatar: "SK",
  },
];

const DUMMY_BLOGS = [
  {
    id: 1,
    title: "Tips Memilih Bahan Hijab yang Sejuk untuk Cuaca Panas",
    date: "15 Mei 2026",
    readTime: "5 min read",
    category: "Edukasi Fabrics",
    img: "https://i.pinimg.com/736x/00/5c/71/005c711563a6493c43c6f5c276f64e4b.jpg",
  },
  {
    id: 2,
    title: "Inspirasi Padu Padan Abaya Hitam agar Tetap Modis & Elegan",
    date: "10 Mei 2026",
    readTime: "4 min read",
    category: "Style Guide",
    img: "https://i.pinimg.com/736x/92/26/ed/9226ed7a992a801b6db7648dccba8578.jpg",
  },
  {
    id: 3,
    title: "Panduan Ukuran Gamis Syar’i yang Tepat untuk Berbagai Bentuk Tubuh",
    date: "02 Mei 2026",
    readTime: "6 min read",
    category: "Fit & Sizing",
    img: "https://i.pinimg.com/736x/dc/cb/8b/dccb8bf5ba3bb68b519b6c98b7e68600.jpg",
  },
];

const INSTA_LOOKBOOKS = [
  "https://i.pinimg.com/736x/b7/74/84/b774842d0ab48262a7470923886d1c74.jpg",
  "https://i.pinimg.com/736x/b8/e2/4a/b8e24a014819c388e88a06d247afb690.jpg",
  "https://i.pinimg.com/736x/35/a4/0b/35a40b8126a631e14ae558781c33c148.jpg",
  "https://i.pinimg.com/736x/ff/f0/c0/fff0c0df3b85821332efb13406c75065.jpg",
  "https://i.pinimg.com/736x/8e/03/a9/8e03a90a958389109b9eadd550fb40a4.jpg",
  "https://i.pinimg.com/736x/eb/2b/aa/eb2baa1d4d03750fcc62cad75b4f0ad6.jpg",
];

export default function CustomerHome() {
  return (
    <div className="bg-white text-gray-900 space-y-24 pb-24 antialiased selection:bg-emerald-100">
      {/* 1. HERO BANNER */}
      <Hero />

      {/* 2. VALUE PROPOSITION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border border-gray-100 bg-gray-50/50 p-8 rounded-2xl">
          <div className="flex items-start space-x-4">
            <div className="bg-white shadow-sm border border-gray-100 p-3 rounded-xl text-emerald-600">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold tracking-wide text-gray-900">
                Free Shipping
              </h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                Minimal belanja Rp 200.000 bebas ongkir ke seluruh penjuru
                Indonesia.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4 md:border-x md:border-gray-200/60 md:px-6">
            <div className="bg-white shadow-sm border border-gray-100 p-3 rounded-xl text-emerald-600">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold tracking-wide text-gray-900">
                Premium Quality Assured
              </h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                Material eksklusif, serat kain rapat, dijamin tidak menerawang.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="bg-white shadow-sm border border-gray-100 p-3 rounded-xl text-emerald-600">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold tracking-wide text-gray-900">
                Easy 30-Day Returns
              </h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                Salah pilih ukuran atau kurang sreg? Tukar tanpa ribet dalam 30
                hari.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. KATEGORI UNGGULAN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-10">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full mb-2">
            Categories
          </span>
          <h2 className="text-2xl md:text-3xl font-serif font-medium text-gray-900">
            Cari Berdasarkan Kategori
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {CATEGORIES.map((cat) => (
            <a
              href="#"
              key={cat.id}
              className="group relative flex flex-col items-center p-6 rounded-2xl border border-gray-100 bg-white hover:border-transparent hover:shadow-xl hover:shadow-gray-100 transition-all duration-300 overflow-hidden"
            >
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 ${cat.bg} transition-opacity duration-300 -z-0`}
              />
              <div className="text-4xl mb-3 transform group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300 z-10">
                {cat.icon}
              </div>
              <h3 className="text-sm font-semibold text-gray-800 z-10 group-hover:text-emerald-700 transition-colors">
                {cat.name}
              </h3>
              <p className="text-[11px] text-gray-400 mt-1 z-10">{cat.count}</p>
            </a>
          ))}
        </div>
      </section>

      {/* 4. SECTION FLASH SALE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-amber-500 via-amber-500 to-orange-600 rounded-3xl p-8 md:p-10 text-white flex flex-col lg:flex-row justify-between items-center shadow-xl shadow-amber-500/10 relative overflow-hidden">
          <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute left-1/3 top-[-20%] w-40 h-40 bg-amber-400/20 rounded-full blur-xl" />

          <div className="space-y-3 text-center lg:text-left z-10 max-w-xl">
            <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase">
              <Clock className="w-3.5 h-3.5" /> Flash Sale Limited
            </div>
            <h2 className="text-2xl md:text-4xl font-serif font-medium tracking-tight">
              Diskon s/d 50% Khusus Hari Ini
            </h2>
            <p className="text-xs md:text-sm text-amber-50/90 font-light leading-relaxed">
              Segera amankan slot gamis idamanmu sebelum kehabisan stok.
              Penawaran berakhir dalam:
            </p>
          </div>

          <div className="mt-8 lg:mt-0 flex items-center space-x-3 z-10">
            {[
              ["02", "Jam"],
              ["45", "Menit"],
              ["12", "Detik"],
            ].map(([time, unit], idx) => (
              <div key={idx} className="flex items-center">
                <div className="text-center">
                  <div className="bg-white/95 text-gray-900 font-bold px-4 py-3 rounded-2xl text-xl min-w-[56px] shadow-sm tracking-tight">
                    {time}
                  </div>
                  <span className="text-[11px] text-amber-50/80 block mt-1.5 font-medium tracking-wide">
                    {unit}
                  </span>
                </div>
                {idx < 2 && (
                  <span className="text-xl font-bold text-white/60 mx-1.5 mb-6">
                    :
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FILTER UTAMA & GRID PRODUK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between border-b border-gray-100 pb-6 mb-10 space-y-4 md:space-y-0">
          <div className="space-y-1">
            <h2 className="text-2xl font-serif font-medium text-gray-900">
              Semua Koleksi Produk
            </h2>
            <p className="text-xs text-gray-400">
              Produk eksklusif dengan standar kurasi butik Al-Kahfi.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="flex bg-gray-100 p-1 rounded-xl text-xs font-medium">
              <button className="bg-white text-gray-900 px-4 py-2 rounded-lg shadow-sm transition-all">
                Semua
              </button>
              <button className="text-gray-500 hover:text-gray-900 px-4 py-2 rounded-lg transition-all">
                Best Seller
              </button>
              <button className="text-gray-500 hover:text-gray-900 px-4 py-2 rounded-lg transition-all">
                Terbaru
              </button>
            </div>

            <div className="relative inline-flex items-center bg-white border border-gray-200 rounded-xl px-3 py-2 text-xs font-medium text-gray-600 hover:border-gray-300 transition-colors">
              <ArrowUpDown className="w-3.5 h-3.5 mr-2 text-gray-400" />
              <select className="bg-transparent outline-none appearance-none cursor-pointer pr-4">
                <option>Urutan: Terpopuler</option>
                <option>Harga: Rendah ke Tinggi</option>
                <option>Harga: Tinggi ke Rendah</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-6 xl:gap-x-8">
          {DUMMY_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <button className="group inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 hover:text-emerald-600 hover:border-emerald-200 font-semibold py-3 px-8 rounded-xl text-xs md:text-sm transition-all shadow-sm hover:shadow-md active:scale-98">
            Muat Lebih Banyak Produk
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </section>

      {/* 6. SECTION TESTIMONI PELANGGAN */}
      <section className="bg-stone-900 text-white py-20 rounded-[2.5rem] max-w-[96%] mx-auto overflow-hidden relative">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-[10px] text-amber-400 font-bold uppercase tracking-widest border border-amber-400/20 px-3 py-1 rounded-full mb-3 inline-block">
              Reviews
            </span>
            <h2 className="text-2xl md:text-4xl font-serif font-medium">
              Apa Kata Mereka?
            </h2>
            <p className="text-xs text-stone-400 mt-2">
              Cerita jujur kenyamanan berpakaian dari sahabat Al-Kahfi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testi) => (
              <div
                key={testi.id}
                className="bg-stone-800/40 border border-stone-800 p-8 rounded-2xl flex flex-col justify-between hover:border-stone-700/60 transition-colors group"
              >
                <div className="space-y-4">
                  <div className="flex space-x-1 text-amber-400">
                    {[...Array(testi.rating)].map((_, i) => (
                      <span key={i} className="text-sm">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-stone-200 font-light leading-relaxed group-hover:text-white transition-colors">
                    "{testi.text}"
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-stone-800/80 flex items-center space-x-3.5">
                  <div className="w-9 h-9 rounded-full bg-emerald-800 text-emerald-200 flex items-center justify-center font-bold text-xs">
                    {testi.avatar}
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white tracking-wide">
                      {testi.name}
                    </h4>
                    <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 font-medium mt-0.5">
                      <Sparkles className="w-2.5 h-2.5" /> {testi.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SECTION ARTIKEL / JURNAL MUSLIMAH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex justify-between items-end mb-10">
          <div className="space-y-1">
            <h2 className="text-2xl font-serif font-medium text-gray-900">
              Jurnal & Inspirasi Al-Kahfi
            </h2>
            <p className="text-xs text-gray-400">
              Tips gaya hidup syar'i dan kurasi tren fashion terkini.
            </p>
          </div>
          <a
            href="#"
            className="group text-xs font-semibold text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1 transition-colors hidden sm:flex"
          >
            Lihat Semua Jurnal{" "}
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DUMMY_BLOGS.map((blog) => (
            <article
              key={blog.id}
              className="group flex flex-col justify-between rounded-2xl overflow-hidden bg-white border border-gray-100 transition-all duration-300 hover:shadow-lg hover:shadow-gray-100/50"
            >
              <div className="aspect-[16/10] overflow-hidden bg-gray-50 relative">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                />
                <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-lg text-[10px] font-bold text-gray-700 shadow-sm uppercase tracking-wider">
                  {blog.category}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center text-[11px] text-gray-400 space-x-2 font-medium">
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                  </div>
                  <h3 className="font-serif font-medium text-gray-800 text-base leading-snug group-hover:text-emerald-600 transition-colors line-clamp-2">
                    <a href="#">{blog.title}</a>
                  </h3>
                </div>
                <a
                  href="#"
                  className="text-xs font-semibold text-emerald-600 inline-flex items-center gap-1 group-hover:text-emerald-700 pt-1"
                >
                  Read Story &rarr;
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 8. INSTAGRAM GALERI (Dengan Perbaikan SVG Instagram Yang Aman) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex p-2.5 rounded-full bg-gradient-to-tr from-amber-500 to-orange-500 text-white mb-3 shadow-md shadow-orange-500/10">
            {/* SVG Instagram Custom Bawaan (Anti Build Error) */}
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </div>
          <h2 className="text-2xl font-serif font-medium text-gray-900 tracking-tight">
            #AlKahfiLookbook
          </h2>
          <p className="text-xs text-gray-400 mt-1.5 max-w-xs leading-relaxed">
            Tag outfit kamu di Instagram buat dapet kesempatan mejeng di galeri
            utama kami!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
          {INSTA_LOOKBOOKS.map((imgUrl, idx) => (
            <div
              key={idx}
              className="aspect-square bg-gray-100 relative group overflow-hidden rounded-2xl shadow-sm border border-gray-100"
            >
              <img
                src={imgUrl}
                alt={`Lookbook ${idx}`}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-emerald-950/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center text-white text-xs font-medium backdrop-blur-[2px]">
                <span className="bg-white/20 px-3 py-1.5 rounded-xl border border-white/20 tracking-wide">
                  View Style
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. NEWSLETTER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-50/60 rounded-3xl p-8 md:p-14 text-center max-w-4xl mx-auto border border-emerald-100/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100/30 rounded-full blur-2xl" />

          <div className="space-y-4 max-w-xl mx-auto">
            <span className="text-emerald-700 text-xs font-bold uppercase tracking-widest bg-emerald-100/60 px-3 py-1 rounded-full inline-block">
              Join Our Circle
            </span>
            <h2 className="text-2xl md:text-4xl font-serif font-medium text-gray-900 tracking-tight">
              Klaim Voucher Potongan Rp 25.000
            </h2>
            <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-light">
              Dapatkan update drop katalog terbaru, restock berkala, dan akses
              diskon rahasia mingguan langsung di email-mu.
            </p>
          </div>

          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-2.5 mt-8 relative z-10">
            <input
              type="email"
              placeholder="Masukkan alamat email terbaikmu..."
              className="flex-1 bg-white border border-gray-200/80 px-4 py-3.5 rounded-xl text-sm outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600/20 transition-all text-center sm:text-left"
            />
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3.5 rounded-xl text-xs md:text-sm transition-all shadow-md shadow-emerald-700/10 active:scale-98 whitespace-nowrap">
              Unlock Voucher
            </button>
          </div>
          <p className="text-[11px] text-gray-400 mt-4">
            Zero spam. Kamu bisa berhenti berlangganan kapan saja secara instan.
          </p>
        </div>
      </section>
    </div>
  );
}
