"use client";

import Link from "next/link";
import Image from "next/image";
import { Star, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";
import type { Movie } from "@/lib/data";

interface RelatedEpisodesProps {
  episodes: Movie[];
  seriesName: string;
}

const RelatedEpisodes = ({ episodes, seriesName }: RelatedEpisodesProps) => {
  if (episodes.length === 0) {
    return null;
  }

  return (
    <section className="container-custom px-4 py-8 md:py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            📺 Các Tập Khác
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Tất cả các tập của <span className="font-semibold">{seriesName}</span>
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
          {episodes.map((episode, index) => (
            <motion.div
              key={episode.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="h-full"
            >
              <Link href={`/movies/${episode.slug}`} className="group block h-full">
                <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all active:scale-95 h-full flex flex-col">
                  <div className="relative aspect-[2/3] overflow-hidden bg-gray-200 flex-shrink-0">
                    <Image
                      src={episode.poster}
                      alt={episode.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    />
                    
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <PlayCircle className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                    </div>
                    
                    <div className="absolute top-2 right-2 bg-yellow-500 text-gray-900 px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                      <Star className="w-3 h-3 fill-current" />
                      {episode.rating}
                    </div>
                    
                    {episode.trending && (
                      <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        HOT
                      </div>
                    )}
                  </div>
                  
                  <div className="p-3 flex flex-col flex-grow">
                    <h3 className="text-sm sm:text-base font-bold text-gray-900 line-clamp-2 group-hover:text-primary-600 transition-colors leading-snug min-h-[2.5rem] sm:min-h-[3rem]">
                      {episode.title}
                    </h3>
                    
                    <div className="mt-auto pt-2">
                      <div className="flex items-center gap-1 text-xs text-gray-500 mb-2">
                        <span>{episode.releaseYear}</span>
                        <span>•</span>
                        <span className="line-clamp-1">{episode.genres[0]}</span>
                      </div>
                      
                      <div className="text-xs text-primary-600 font-medium">
                        Xem Ngay →
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedEpisodes;
