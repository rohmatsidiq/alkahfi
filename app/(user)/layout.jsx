// src/app/(customer)/layout.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CustomerLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      <div>
        {/* Navigasi khusus User */}
        <Navbar />

        {/* Konten Halaman */}
        {children}
      </div>

      {/* Footer Toko */}
      <Footer />
    </div>
  );
}
