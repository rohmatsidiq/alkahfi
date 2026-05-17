// src/app/(customer)/gamis/page.jsx
import React from "react";

// Data dummy gamis diperbanyak menjadi 8 item agar grid padat
const GAMIS_PRODUCTS = [
  {
    id: 1,
    name: "Gamis Silk Premium Medina (Emerald Green)",
    price: 385000,
    rating: 5,
    sold: 120,
    image:
      "https://i.pinimg.com/736x/77/4d/2f/774d2fee919f347b6a2d80d25a3926b4.jpg",
    tag: "Terlaris",
  },
  {
    id: 2,
    name: "Gamis Abaya Malikah Bordir Komputer (Jetblack)",
    price: 450000,
    rating: 5,
    sold: 85,
    image:
      "https://i.pinimg.com/736x/26/dd/33/26dd33571a56c782fb31c6cb9c576370.jpg",
    tag: "Premium",
  },
  {
    id: 3,
    name: "Gamis Anak Shalihah Set Hijab Khimar",
    price: 195000,
    rating: 4,
    sold: 230,
    image:
      "https://i.pinimg.com/1200x/39/35/75/39357557a026fdb9ce73e8656828a6c1.jpg",
    tag: "Anak",
  },
  {
    id: 4,
    name: "Gamis Crinkle Airflow Loose Fit Casual",
    price: 245000,
    rating: 4,
    sold: 94,
    image:
      "https://i.pinimg.com/736x/46/1b/44/461b441fa06bbfde7721d2c5c90b6254.jpg",
    tag: "Kombinasi",
  },
  {
    id: 5,
    name: "Abaya Inner Outer Ceruty 2 Layer Luxury",
    price: 520000,
    rating: 5,
    sold: 42,
    image:
      "https://i.pinimg.com/1200x/d6/c9/b2/d6c9b20890ea70cc93e00f6e302e89b1.jpg",
    tag: "Eksklusif",
  },
  {
    id: 6,
    name: "Gamis Brokat Kondangan Syar’i Brukat Tile",
    price: 399000,
    rating: 5,
    sold: 67,
    image:
      "https://i.pinimg.com/736x/e8/2e/6f/e82e6f8e6eb172e658f51f6f7c396fad.jpg",
    tag: "Pesta",
  },
  {
    id: 7,
    name: "Gamis Kaftan Premium Eid Series",
    price: 480000,
    rating: 4,
    sold: 110,
    image:
      "https://i.pinimg.com/1200x/ae/6b/ad/ae6bad3128a069f91e4dfa9597b079a1.jpg",
    tag: "Edisi Terbatas",
  },
  {
    id: 8,
    name: "Gamis Rayon Viscose Motif Bunga Adem",
    price: 165000,
    rating: 4,
    sold: 340,
    image:
      "https://i.pinimg.com/736x/5d/85/20/5d8520ae4cd9dd50928b9178c329cb99.jpg",
    tag: "Harian",
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
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner Kategori */}
        <div className="bg-gradient-to-r from-emerald-800 to-teal-900 rounded-2xl p-8 text-white mb-10 shadow-sm relative overflow-hidden">
          <div className="absolute right-0 bottom-0 text-9xl opacity-10 font-serif translate-x-10 translate-y-10 select-none">
            👗
          </div>
          <h1 className="text-3xl font-serif font-bold">
            Koleksi Gamis & Abaya
          </h1>
          <p className="text-xs sm:text-sm text-emerald-200 mt-2 max-w-xl font-light">
            Tampil anggun nan bersahaja dengan pilihan gamis syar'i material
            premium. Potongan longgar, elegan, dan dijamin tidak menerawang.
          </p>
        </div>

        {/* Filter Mini Bar */}
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm mb-8 flex flex-col sm:flex-row gap-4 justify-between sm:items-center text-xs text-gray-500">
          <p>
            Menampilkan{" "}
            <span className="font-semibold text-gray-800">
              {GAMIS_PRODUCTS.length}
            </span>{" "}
            produk gamis pilihan
          </p>
          <div className="flex items-center gap-2">
            <span>Urutkan:</span>
            <select className="bg-gray-50 border border-gray-200 p-2 rounded-lg outline-none cursor-pointer text-gray-700">
              <option>Terpopuler</option>
              <option>Terbaru</option>
              <option>Harga: Rendah ke Tinggi</option>
              <option>Harga: Tinggi ke Rendah</option>
            </select>
          </div>
        </div>

        {/* Grid Produk - Padat 8 Item */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8">
          {GAMIS_PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              {/* Gambar dengan Badge Tag */}
              <div className="aspect-[3/4] bg-gray-50 relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2.5 left-2.5 inline-flex items-center rounded-md bg-emerald-600 px-2 py-0.5 text-[10px] font-medium text-white shadow-sm">
                  {product.tag}
                </span>
              </div>

              {/* Konten Teks */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                <div className="space-y-1">
                  <div className="flex items-center text-[10px] text-amber-500 gap-1">
                    <span>{"★".repeat(product.rating)}</span>
                    <span className="text-gray-400">
                      ({product.sold} terjual)
                    </span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-medium text-gray-800 group-hover:text-emerald-700 transition-colors line-clamp-2">
                    <a href={`/gamis/${product.id}`}>
                      <span className="absolute inset-0 z-0" />
                      {product.name}
                    </a>
                  </h3>
                </div>

                <div>
                  <p className="text-sm sm:text-base font-bold text-gray-900">
                    {formatRupiah(product.price)}
                  </p>
                  <button className="mt-3 w-full relative z-10 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium py-2 rounded-lg transition-colors shadow-sm">
                    Lihat Detail
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
