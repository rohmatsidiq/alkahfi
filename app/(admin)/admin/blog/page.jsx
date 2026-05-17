// app/(admin)/admin/blog/page.jsx
"use client";

import React, { useState } from "react";

// Data Dummy Artikel Blog Al-Kahfi Store
const INITIAL_BLOGS = [
  {
    id: "POST-001",
    title: "Panduan Memilih Gamis Silk Premium Agar Tetap Syar'i dan Elegan",
    category: "Fashion Tips",
    views: 1420,
    status: "Published",
    date: "15 Mei 2026",
    author: "M. Sidiq",
    image:
      "https://i.pinimg.com/736x/00/5c/71/005c711563a6493c43c6f5c276f64e4b.jpg",
  },
  {
    id: "POST-002",
    title: "Mengenal Karakteristik Kain Jetblack Malikah: Hitam Pekat & Anggun",
    category: "Edukasi Kain",
    views: 948,
    status: "Published",
    date: "10 Mei 2026",
    author: "Siti Aminah",
    image:
      "https://i.pinimg.com/736x/92/26/ed/9226ed7a992a801b6db7648dccba8578.jpg",
  },
  {
    id: "POST-003",
    title: "Persiapan Menyambut Idul Adha 2026: Rekomendasi Koko Kurta Modern",
    category: "Katalog",
    views: 0,
    status: "Draft",
    date: "17 Mei 2026",
    author: "M. Sidiq",
    image:
      "https://i.pinimg.com/736x/dc/cb/8b/dccb8bf5ba3bb68b519b6c98b7e68600.jpg",
  },
];

export default function AdminBlog() {
  const [blogs, setBlogs] = useState(INITIAL_BLOGS);
  const [activeFilter, setActiveFilter] = useState("All");

  // Filter artikel berdasarkan tab status
  const filteredBlogs = blogs.filter((blog) => {
    if (activeFilter === "All") return true;
    return blog.status === activeFilter;
  });

  const handleDeletePost = (id, title) => {
    if (confirm(`Apakah Anda yakin ingin menghapus artikel: "${title}"?`)) {
      setBlogs(blogs.filter((blog) => blog.id !== id));
    }
  };

  return (
    <div className="space-y-8 min-h-[calc(100vh-4rem)] font-sans antialiased text-slate-600">
      {/* 1. EDITORIAL SYSTEM HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200/60 pb-6">
        <div className="space-y-0.5">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">
            Editorial Articles
          </h2>
          <p className="text-xs text-slate-400 font-normal">
            Tulis artikel edukasi fashion, kelola SEO produk, dan publikasikan
            tips berpakaian syar'i.
          </p>
        </div>

        {/* Tombol Buat Artikel Baru */}
        <button className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-sm flex items-center space-x-2 self-start sm:self-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-3.5 h-3.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          <span>Write Article</span>
        </button>
      </div>

      {/* 2. CONTROL TAB SEGMENTED & STATUS COUNTER */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center space-x-1 bg-slate-200/40 p-1 rounded-xl text-xs font-semibold text-slate-500 shadow-inner">
          {["All", "Published", "Draft"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-3.5 py-1.5 rounded-lg transition-all ${
                activeFilter === tab
                  ? "bg-white text-slate-900 shadow-sm"
                  : "hover:text-slate-900"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="text-[11px] text-slate-400 font-medium">
          Total:{" "}
          <span className="text-slate-900 font-bold">
            {blogs.length} Postings
          </span>
        </div>
      </div>

      {/* 3. ARTICLES FEED STREAM CONTENT LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredBlogs.length === 0 ? (
          <div className="col-span-full text-center py-16 bg-white rounded-3xl border border-slate-100 text-slate-400 text-xs font-medium">
            Tidak ada artikel dalam folder status ini.
          </div>
        ) : (
          filteredBlogs.map((blog) => {
            const isPublished = blog.status === "Published";

            return (
              <div
                key={blog.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/60 shadow-[0_4px_25px_rgba(0,0,0,0.01)] flex flex-col justify-between group hover:shadow-[0_12px_30px_rgba(0,0,0,0.03)] hover:border-slate-300/80 transition-all duration-300"
              >
                {/* Bagian Atas: Gambar Cover & Konten */}
                <div>
                  {/* Image Aspect Ratio Container */}
                  <div className="h-44 w-full bg-slate-50 relative overflow-hidden border-b border-slate-100">
                    <img
                      src={blog.image}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Category Floating Badge */}
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-slate-800 text-[10px] font-bold px-2.5 py-1 rounded-lg shadow-sm">
                      {blog.category}
                    </span>
                  </div>

                  {/* Teks Deskripsi Artikel */}
                  <div className="p-5 space-y-2.5">
                    <div className="flex items-center space-x-2 text-[10px] text-slate-400 font-mono">
                      <span>{blog.date}</span>
                      <span>•</span>
                      <span>BY {blog.author.toUpperCase()}</span>
                    </div>

                    <h3 className="font-bold text-slate-900 text-sm leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                  </div>
                </div>

                {/* Bagian Bawah: Data Indikator & Tombol Kontrol */}
                <div className="px-5 pb-5 pt-3 border-t border-slate-50 flex items-center justify-between text-xs font-medium">
                  {/* Status & Traffic Views Counter */}
                  <div className="flex items-center space-x-3">
                    <span
                      className={`text-[9px] px-2 py-0.5 rounded-md font-bold border ${
                        isPublished
                          ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                          : "bg-slate-100 text-slate-500 border-slate-200"
                      }`}
                    >
                      {blog.status}
                    </span>

                    {isPublished && (
                      <div className="flex items-center space-x-1 text-slate-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-3.5 h-3.5 text-slate-300"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          />
                        </svg>
                        <span className="font-mono text-[11px] font-semibold">
                          {blog.views}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Tombol Aksi Hapus / Sunting */}
                  <div className="flex items-center space-x-1">
                    <button className="text-slate-400 hover:text-slate-900 px-2 py-1 rounded-md hover:bg-slate-50 transition-colors text-[11px] font-bold">
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeletePost(blog.id, blog.title)}
                      className="text-rose-400 hover:text-rose-600 px-2 py-1 rounded-md hover:bg-rose-50 transition-colors text-[11px] font-bold"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
