import type { Metadata } from "next";
import MoviesGrid from "@/components/movies/MoviesGrid";

export const metadata: Metadata = {
  title: "Xem Phim Online",
  description: "Xem phim online miễn phí với chất lượng cao. Cập nhật phim mới nhất hàng ngày.",
  openGraph: {
    title: "Xem Phim Online",
    description: "Xem phim online miễn phí với chất lượng cao",
  },
};

export default function MoviesPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-8 px-4 shadow-lg">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">🎬 Xem Phim Online</h1>
          <p className="text-primary-100 text-sm md:text-base">Phim mới cập nhật hàng ngày</p>
        </div>
      </div>
      
      <div className="container-custom py-6">
        <MoviesGrid />
      </div>
    </div>
  );
}
