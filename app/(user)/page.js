// src/app/(customer)/page.jsx
import React from "react";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";

// Data Dummy Kategori
const CATEGORIES = [
  { id: 1, name: "Gamis", icon: "👘", count: "120+ Item" },
  { id: 2, name: "Hijab", icon: "🧕", count: "80+ Item" },
  { id: 3, name: "Koko", icon: "👔", count: "50+ Item" },
  { id: 4, name: "Mukena", icon: "🕌", count: "30+ Item" },
  { id: 5, name: "Abaya", icon: "🧥", count: "45+ Item" },
  { id: 6, name: "Aksesoris", icon: "📿", count: "25+ Item" },
];

// Data Dummy Produk Lebih Banyak
const DUMMY_PRODUCTS = [
  {
    id: 1,
    name: "Gamis Silk Premium Medina (Emerald Green)",
    price: 385000,
    category: "Gamis",
    image:
      "https://i.pinimg.com/736x/77/4d/2f/774d2fee919f347b6a2d80d25a3926b4.jpg",
  },
  {
    id: 2,
    name: "Abaya Malikah Bordir Komputer (Jetblack)",
    price: 450000,
    category: "Abaya",
    image:
      "https://i.pinimg.com/736x/26/dd/33/26dd33571a56c782fb31c6cb9c576370.jpg",
  },
  {
    id: 3,
    name: "Koko Kurta Modern Lengan 3/4",
    price: 185000,
    category: "Koko",
    image:
      "https://i.pinimg.com/736x/7d/5a/97/7d5a97e24db278b6dd78b677118f6d8b.jpg",
  },
  {
    id: 4,
    name: "Hijab Pashmina Ceruty Baby Doll",
    price: 65000,
    category: "Hijab",
    image:
      "https://i.pinimg.com/736x/3a/69/7a/3a697a17aab691a6a3e0c2e879317cd1.jpg",
  },
  {
    id: 5,
    name: "Mukena Traveling Parasut Premium",
    price: 210000,
    category: "Mukena",
    image:
      "https://i.pinimg.com/1200x/b2/57/08/b257083c3473678ee9ce19d049895a53.jpg",
  },
  {
    id: 6,
    name: "Gamis Anak Shalihah Set Hijab",
    price: 195000,
    category: "Gamis",
    image:
      "https://i.pinimg.com/736x/52/14/97/521497d50851c431c25d0bc553c72663.jpg",
  },
  {
    id: 7,
    name: "Koko Premium Executive Pake Saku",
    price: 275000,
    category: "Koko",
    image:
      "https://i.pinimg.com/736x/7b/a4/12/7ba4121ba47ba22b106b2b9248fdb47a.jpg",
  },
  {
    id: 8,
    name: "Khimar Syar’i Ceruty 2 Layer",
    price: 135000,
    category: "Hijab",
    image:
      "https://i.pinimg.com/736x/fc/b6/32/fcb63206529e528dcc98934a7cce9dcd.jpg",
  },
];

// Data Dummy Testimoni
const TESTIMONIALS = [
  {
    id: 1,
    name: "Aisyah Rahma",
    role: "Ibu Rumah Tangga",
    text: "Bahan gamisnya adem banget, jahitan rapi, dan tidak menerawang sama sekali. Suami juga suka kokonya!",
    rating: 5,
  },
  {
    id: 2,
    name: "Muhammad Farhan",
    role: "Karyawan Swasta",
    text: "Koko kurtanya pas di badan, cuttingannya modern tapi tetep sopan buat dipakai ke masjid maupun kantor.",
    rating: 5,
  },
  {
    id: 3,
    name: "Siti Khadijah",
    role: "Mahasiswi",
    text: "Pashminanya gampang dibentuk dan harganya ramah di kantong mahasiswa. Pengiriman super cepat!",
    rating: 4,
  },
];

// Data Dummy Artikel / Blog Baru
const DUMMY_BLOGS = [
  {
    id: 1,
    title: "Tips Memilih Bahan Hijab yang Sejuk untuk Cuaca Panas",
    date: "15 Mei 2026",
    readTime: "5 min read",
    img: "https://i.pinimg.com/736x/00/5c/71/005c711563a6493c43c6f5c276f64e4b.jpg",
  },
  {
    id: 2,
    title: "Inspirasi Padu Padan Abaya Hitam agar Tetap Modis & Elegan",
    date: "10 Mei 2026",
    readTime: "4 min read",
    img: "https://i.pinimg.com/736x/92/26/ed/9226ed7a992a801b6db7648dccba8578.jpg",
  },
  {
    id: 3,
    title: "Panduan Ukuran Gamis Syar’i yang Tepat untuk Berbagai Bentuk Tubuh",
    date: "02 Mei 2026",
    readTime: "6 min read",
    img: "https://i.pinimg.com/736x/dc/cb/8b/dccb8bf5ba3bb68b519b6c98b7e68600.jpg",
  },
];

// Data Dummy Instagram Grid
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
    <div className="bg-gray-50 space-y-16 pb-16">
      {/* 1. HERO BANNER */}
      <Hero />

      {/* 2. VALUE PROPOSITION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center space-x-4 p-2">
            <div className="text-3xl bg-emerald-50 text-emerald-600 p-3 rounded-xl">
              📦
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-800">
                Gratis Ongkir
              </h4>
              <p className="text-xs text-gray-500 mt-0.5">
                Minimal belanja Rp 200.000 se-Indonesia
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-2 sm:border-x sm:border-gray-100">
            <div className="text-3xl bg-emerald-50 text-emerald-600 p-3 rounded-xl">
              ✨
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-800">
                Garansi Syar'i & Premium
              </h4>
              <p className="text-xs text-gray-500 mt-0.5">
                Bahan tebal, tidak nerawang, kualitas butik
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-2">
            <div className="text-3xl bg-emerald-50 text-emerald-600 p-3 rounded-xl">
              🔄
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-800">
                30 Hari Retur
              </h4>
              <p className="text-xs text-gray-500 mt-0.5">
                Ukuran tidak pas? Bisa ditukar tanpa ribet
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. KATEGORI UNGGULAN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-8">
          <h2 className="text-2xl font-serif font-bold text-gray-900">
            Cari Berdasarkan Kategori
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            Pilih kategori produk yang sedang Anda cari hari ini
          </p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {CATEGORIES.map((cat) => (
            <a
              href="#"
              key={cat.id}
              className="bg-white p-4 rounded-xl border border-gray-100 text-center hover:border-emerald-500 transition-all group shadow-sm"
            >
              <div className="text-3xl group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>
              <h3 className="text-sm font-medium text-gray-800 mt-2">
                {cat.name}
              </h3>
              <p className="text-[10px] text-gray-400 mt-0.5">{cat.count}</p>
            </a>
          ))}
        </div>
      </section>

      {/* 4. SECTION FLASH SALE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-6 md:p-8 text-white flex flex-col md:flex-row justify-between items-center shadow-md relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-xl" />
          <div className="space-y-2 text-center md:text-left">
            <span className="bg-amber-700/50 px-2.5 py-1 rounded text-xs font-bold uppercase tracking-wider">
              Flash Sale Terbatas!
            </span>
            <h2 className="text-xl md:text-3xl font-serif font-bold">
              Diskon s/d 50% Khusus Hari Ini
            </h2>
            <p className="text-xs md:text-sm text-amber-50 font-light">
              Segera amankan slot gamis idamanmu sebelum kehabisan stok.
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex items-center space-x-4">
            <div className="text-center">
              <div className="bg-white text-amber-600 font-bold px-3 py-2 rounded-lg text-lg">
                02
              </div>
              <span className="text-[10px] text-amber-100">Jam</span>
            </div>
            <div className="text-center">
              <div className="bg-white text-amber-600 font-bold px-3 py-2 rounded-lg text-lg">
                45
              </div>
              <span className="text-[10px] text-amber-100">Menit</span>
            </div>
            <div className="text-center">
              <div className="bg-white text-amber-600 font-bold px-3 py-2 rounded-lg text-lg">
                12
              </div>
              <span className="text-[10px] text-amber-100">Detik</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FILTER UTAMA & GRID PRODUK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between border-b border-gray-200 pb-5 mb-8 space-y-4 md:space-y-0">
          <div>
            <h2 className="text-2xl font-serif font-bold text-gray-900">
              Semua Koleksi Produk
            </h2>
            <p className="text-xs text-gray-500 mt-1">
              Produk fashion muslim high quality siap kirim.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 items-center text-xs">
            <button className="bg-emerald-600 text-white px-3 py-2 rounded-md font-medium">
              Semua
            </button>
            <button className="bg-white border border-gray-200 text-gray-600 px-3 py-2 rounded-md hover:border-emerald-600">
              Best Seller
            </button>
            <button className="bg-white border border-gray-200 text-gray-600 px-3 py-2 rounded-md hover:border-emerald-600">
              Terbaru
            </button>
            <div className="h-6 w-px bg-gray-200 mx-1 hidden sm:block" />
            <select className="bg-white border border-gray-200 text-gray-600 px-2 py-2 rounded-md outline-none cursor-pointer">
              <option>Urutkan: Terpopuler</option>
              <option>Harga: Rendah ke Tinggi</option>
              <option>Harga: Tinggi ke Rendah</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6 xl:gap-x-8">
          {DUMMY_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-white border border-gray-200 text-gray-700 hover:text-emerald-600 font-medium py-2.5 px-6 rounded-lg text-sm transition-all shadow-sm">
            Muat Lebih Banyak Produk
          </button>
        </div>
      </section>

      {/* 6. SECTION TESTIMONI PELANGGAN */}
      <section className="bg-emerald-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-2xl font-serif font-bold">Apa Kata Mereka?</h2>
            <p className="text-xs text-emerald-300 mt-1">
              Ulasan jujur dari para pelanggan setia Al-Kahfi Store
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testi) => (
              <div
                key={testi.id}
                className="bg-emerald-900/50 backdrop-blur-sm border border-emerald-800 p-6 rounded-2xl flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="text-amber-400 text-sm">
                    {"★".repeat(testi.rating)}
                    {"☆".repeat(5 - testi.rating)}
                  </div>
                  <p className="text-xs sm:text-sm text-emerald-100 font-light italic leading-relaxed">
                    "{testi.text}"
                  </p>
                </div>
                <div className="mt-6 border-t border-emerald-800/60 pt-4 flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-700 flex items-center justify-center font-bold text-xs text-amber-300">
                    {testi.name[0]}
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white">
                      {testi.name}
                    </h4>
                    <p className="text-[10px] text-emerald-400">{testi.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* BERIKUT ADALAH UPDATE STRATEGIS FITUR BARU DI BAWAH TESTIMONI */}
      {/* ============================================================== */}

      {/* 7. SECTION ARTIKEL / JURNAL MUSLIMAH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl font-serif font-bold text-gray-900">
              Jurnal & Inspirasi Al-Kahfi
            </h2>
            <p className="text-xs text-gray-500 mt-1">
              Tips gaya hidup syar'i, inspirasi fashion, dan info bermanfaat
              lainnya.
            </p>
          </div>
          <a
            href="#"
            className="text-xs font-semibold text-emerald-600 hover:underline hidden sm:block"
          >
            Lihat Semua Edukasi &rarr;
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DUMMY_BLOGS.map((blog) => (
            <article
              key={blog.id}
              className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow"
            >
              <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center text-[11px] text-gray-400 space-x-2">
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                  </div>
                  <h3 className="font-medium text-gray-800 text-sm md:text-base leading-snug group-hover:text-emerald-600 transition-colors">
                    <a href="#">{blog.title}</a>
                  </h3>
                </div>
                <a
                  href="#"
                  className="text-xs font-semibold text-emerald-600 inline-flex items-center group-hover:translate-x-1 transition-transform pt-2"
                >
                  Baca Selengkapnya <span className="ml-1">&rarr;</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 8. INSTAGRAM GALERI / LOOKBOOK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-8">
          <h2 className="text-2xl font-serif font-bold text-gray-900">
            #AlKahfiLookbook
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            Tag kami di Instagram untuk kesempatan tampil di galeri eksklusif
            ini!
          </p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
          {INSTA_LOOKBOOKS.map((imgUrl, idx) => (
            <div
              key={idx}
              className="aspect-square bg-gray-200 relative group overflow-hidden rounded-lg shadow-sm"
            >
              <img
                src={imgUrl}
                alt={`Lookbook ${idx}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-emerald-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-sm">
                📸 View Style
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. NEWSLETTER / VOUCHER LANGGANAN DISKON */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-50 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto border border-emerald-100 shadow-sm space-y-6">
          <div className="space-y-2">
            <span className="text-emerald-700 text-xs font-bold uppercase tracking-wider">
              Gabung Komunitas Kami
            </span>
            <h2 className="text-xl md:text-3xl font-serif font-bold text-gray-800">
              Dapatkan Voucher Diskon Potongan Rp 25.000
            </h2>
            <p className="text-xs md:text-sm text-gray-500 max-w-md mx-auto">
              Jadilah yang pertama tahu rilis produk terbaru, restock berkala,
              dan promo eksklusif mingguan langsung di email Anda.
            </p>
          </div>

          {/* Form Input Dummy */}
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Masukkan alamat email Anda..."
              className="flex-1 bg-white border border-gray-200 px-4 py-3 rounded-lg text-xs md:text-sm outline-none focus:border-emerald-500"
            />
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-3 rounded-lg text-xs md:text-sm transition-colors whitespace-nowrap shadow-sm">
              Dapatkan Voucher
            </button>
          </div>
          <p className="text-[10px] text-gray-400">
            Kami menjaga privasi Anda. Tenang, Anda dapat berhenti berlangganan
            kapan saja.
          </p>
        </div>
      </section>
    </div>
  );
}
