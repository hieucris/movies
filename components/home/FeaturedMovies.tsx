"use client";

import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { getFeaturedMovies } from "@/lib/data";

const FeaturedMovies = () => {
  const movies = getFeaturedMovies();

  return (
    <section className="bg-gray-100 py-12">
      <div className="container-custom">
        <div className="mb-6 px-2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">🎬 Phim Hot</h2>
          <p className="text-gray-600 text-sm md:text-base">Những bộ phim đáng xem nhất</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 px-2">
          {movies.map((movie, index) => (
            <motion.div
              key={movie.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Link href={`/movies/${movie.slug}`} className="group block h-full">
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all active:scale-95 h-full flex flex-col">
                  <div className="relative aspect-[2/3] overflow-hidden bg-gray-200 flex-shrink-0">
                    <Image
                      src={movie.poster}
                      alt={movie.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    />
                    <div className="absolute top-2 right-2 bg-yellow-500 text-gray-900 px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                      <Star className="w-3 h-3 fill-current" />
                      {movie.rating}
                    </div>
                  </div>
                  
                  <div className="p-3 flex flex-col flex-grow">
                    <h3 className="text-sm sm:text-base font-bold text-gray-900 line-clamp-2 group-hover:text-primary-600 transition-colors leading-snug min-h-[2.5rem] sm:min-h-[3rem]">
                      {movie.title}
                    </h3>
                    
                    <div className="mt-auto pt-2 text-xs text-primary-600 font-medium">
                      Xem Ngay →
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 text-center px-2">
          <Link 
            href="/movies"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition-all shadow-md active:scale-95"
          >
            Xem Tất Cả Phim
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMovies;
