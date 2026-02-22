import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "News & Movies - Tin Tức & Xem Phim Online",
    template: "%s | News & Movies",
  },
  description: "Website tổng hợp tin tức mới nhất và xem phim online miễn phí. Cập nhật thông tin nhanh chóng, chất lượng phim cao.",
  keywords: ["tin tức", "news", "xem phim", "phim online", "xem phim miễn phí", "phim mới"],
  authors: [{ name: "News & Movies" }],
  metadataBase: new URL("https://tintuc24h.blog"),
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://tintuc24h.blog",
    siteName: "News & Movies",
    title: "News & Movies - Tin Tức & Xem Phim Online",
    description: "Website tổng hợp tin tức mới nhất và xem phim online miễn phí",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "News & Movies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "News & Movies - Tin Tức & Xem Phim Online",
    description: "Website tổng hợp tin tức mới nhất và xem phim online miễn phí",
    images: ["/og-image.jpg"],
  },
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
