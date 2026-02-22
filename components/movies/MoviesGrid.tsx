"use client";

import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { getAllMovies } from "@/lib/data";

const MoviesGrid = () => {
  const movies = getAllMovies();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
      {movies.map((movie, index) => (
        <motion.div
          key={movie.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
        >
          <Link href={`/movies/${movie.slug}`} className="group block">
            <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all active:scale-95">
              <div className="relative aspect-[2/3] overflow-hidden bg-gray-200">
                <Image
                  src={movie.poster}
                  alt={movie.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute top-2 right-2 bg-yellow-500 text-gray-900 px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                  <Star className="w-3 h-3 fill-current" />
                  {movie.rating}
                </div>
                {movie.trending && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    HOT
                  </div>
                )}
              </div>
              
              <div className="p-3">
                <h3 className="text-sm sm:text-base font-bold text-gray-900 line-clamp-2 group-hover:text-primary-600 transition-colors leading-snug">
                  {movie.title}
                </h3>
                
                <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
                  <span>{movie.releaseYear}</span>
                  <span>•</span>
                  <span className="line-clamp-1">{movie.genres[0]}</span>
                </div>
              </div>
            </article>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default MoviesGrid;
