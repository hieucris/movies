"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { getFeaturedNews } from "@/lib/data";

const FeaturedNews = () => {
  const news = getFeaturedNews();

  return (
    <section className="container-custom py-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Tin Tức Nổi Bật</h2>
          <p className="text-gray-600">Cập nhật tin tức mới nhất trong ngày</p>
        </div>
        <Link 
          href="/news"
          className="hidden md:flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold group"
        >
          Xem Tất Cả
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map((article, index) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={`/news/${article.slug}`} className="group block">
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {article.trending && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" />
                      Hot
                    </div>
                  )}
                  <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <span className="text-primary-600 font-medium group-hover:gap-2 flex items-center gap-1 transition-all">
                      Đọc thêm
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="md:hidden mt-8 text-center">
        <Link 
          href="/news"
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
        >
          Xem Tất Cả Tin Tức
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
};

export default FeaturedNews;
