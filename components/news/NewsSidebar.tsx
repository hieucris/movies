"use client";

import Link from "next/link";
import { TrendingUp, Clock } from "lucide-react";
import { getTrendingNews, getRecentNews } from "@/lib/data";

const NewsSidebar = () => {
  const trending = getTrendingNews();
  const recent = getRecentNews();

  return (
    <aside className="space-y-8">
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="w-5 h-5 text-red-500" />
          <h3 className="text-xl font-bold text-gray-900">Tin Nổi Bật</h3>
        </div>
        
        <div className="space-y-4">
          {trending.map((article, index) => (
            <Link 
              key={article.id}
              href={`/news/${article.slug}`}
              className="group block pb-4 border-b border-gray-100 last:border-0 last:pb-0"
            >
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </span>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-primary-600 transition-colors mb-1">
                    {article.title}
                  </h4>
                  <span className="text-xs text-gray-500">{article.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center gap-2 mb-6">
          <Clock className="w-5 h-5 text-primary-600" />
          <h3 className="text-xl font-bold text-gray-900">Tin Mới Nhất</h3>
        </div>
        
        <div className="space-y-4">
          {recent.map((article) => (
            <Link 
              key={article.id}
              href={`/news/${article.slug}`}
              className="group block pb-4 border-b border-gray-100 last:border-0 last:pb-0"
            >
              <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-primary-600 transition-colors mb-2">
                {article.title}
              </h4>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{article.category}</span>
                <span>{article.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl shadow-md p-6 text-white">
        <h3 className="text-xl font-bold mb-3">Đăng Ký Nhận Tin</h3>
        <p className="text-primary-100 text-sm mb-4">
          Nhận tin tức mới nhất ngay trên email của bạn
        </p>
        <input
          type="email"
          placeholder="Email của bạn"
          className="w-full px-4 py-2 rounded-lg text-gray-900 mb-3 focus:outline-none focus:ring-2 focus:ring-primary-300"
        />
        <button className="w-full bg-white text-primary-700 py-2 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
          Đăng Ký
        </button>
      </div>
    </aside>
  );
};

export default NewsSidebar;
