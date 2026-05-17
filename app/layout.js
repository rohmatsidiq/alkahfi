// app/layout.jsx
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ==============================================================
// 🌟 ADVANCED PRODUCTION SEO METADATA FOR AL-KAHFI STORE
// ==============================================================
export const metadata = {
  title: {
    default: "Al-Kahfi Store | Premium Modest Fashion Syar'i",
    template: "%s | Al-Kahfi Store", // Otomatis menambahkan akhiran di halaman anak (Contoh: "Orders Console | Al-Kahfi Store")
  },
  description:
    "Pusat busana muslim modest premium orisinal. Temukan koleksi gamis silk Medina, abaya jetblack premium, jilbab syar'i, dan koko kurta modern yang anggun, elegan, dan nyaman digunakan sehari-hari.",
  keywords: [
    "Al-Kahfi Store",
    "Gamis Silk Premium",
    "Abaya Jetblack Malikah",
    "Koko Kurta Modern",
    "Busana Muslim Premium",
    "Fashion Syar'i Elegan",
    "Hijab Pashmina Ceruty",
  ],
  authors: [{ name: "Al-Kahfi Hub Team" }],
  creator: "Al-Kahfi Systems",
  metadataBase: new URL("https://alkahfistore.com"), // Ganti dengan domain asli Anda saat production
  alternates: {
    canonical: "/",
  },

  // OpenGraph: Untuk Optimasi Tampilan Share di WhatsApp, Telegram & FB
  openGraph: {
    title: "Al-Kahfi Store | Premium Modest Fashion Syar'i",
    description:
      "Koleksi busana muslim modest premium terbaik. Anggun, elegan, dan nyaman dengan material kain silk premium dan jetblack berkualitas tinggi.",
    url: "https://alkahfistore.com",
    siteName: "Al-Kahfi Store",
    images: [
      {
        url: "/og-image.jpg", // Pastikan Anda menaruh foto banner toko di folder public/og-image.jpg
        width: 1200,
        height: 630,
        alt: "Al-Kahfi Store Official Catalog Banner",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  // Twitter Cards: Untuk Tampilan Share di Media Sosial X
  twitter: {
    card: "summary_large_image",
    title: "Al-Kahfi Store | Premium Modest Fashion Syar'i",
    description:
      "Pusat busana muslim modest premium orisinal. Anggun, elegan, dan nyaman digunakan sehari-hari.",
    images: ["/og-image.jpg"],
  },

  // Robot Crawlers Rule (Google Indexing)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f8fafc] text-slate-800">
        {children}
      </body>
    </html>
  );
}
