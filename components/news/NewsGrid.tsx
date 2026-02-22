"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar, User, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { getAllNews } from "@/lib/data";

const NewsGrid = () => {
  const news = getAllNews();

  return (
    <div className="space-y-6">
      {news.map((article, index) => (
        <motion.div
          key={article.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
        >
          <Link href={`/news/${article.slug}`} className="group">
            <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 sm:gap-6">
                <div className="relative h-64 sm:h-full sm:col-span-1">
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
                  <div className="absolute bottom-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </div>
                </div>
                
                <div className="p-6 sm:col-span-2 flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
                      {article.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <time dateTime={article.date}>{article.date}</time>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default NewsGrid;
