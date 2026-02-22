import type { Metadata } from "next";
import NewsGrid from "@/components/news/NewsGrid";
import NewsSidebar from "@/components/news/NewsSidebar";

export const metadata: Metadata = {
  title: "Tin Tức Mới Nhất",
  description: "Cập nhật tin tức nóng hổi nhất trong ngày. Thông tin chính xác, cập nhật liên tục 24/7.",
  openGraph: {
    title: "Tin Tức Mới Nhất",
    description: "Cập nhật tin tức nóng hổi nhất trong ngày",
  },
};

export default function NewsPage() {
  return (
    <div className="container-custom py-12">
      <div className="mb-8 animate-slide-down">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Tin Tức</h1>
        <p className="text-lg text-gray-600">Cập nhật tin tức mới nhất trong ngày</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <NewsGrid />
        </div>
        <div className="lg:col-span-1">
          <NewsSidebar />
        </div>
      </div>
    </div>
  );
}
