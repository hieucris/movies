import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ThumbsUp, ShoppingBag, ArrowRight } from "lucide-react";
import { getMovie } from "@/lib/data";
import ShopeeModalWrapper from "@/components/movies/ShopeeModalWrapper";
import FacebookVideoEmbed from "@/components/movies/FacebookVideoEmbed";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const movie = getMovie(slug);
  
  if (!movie) {
    return {
      title: "Phim không tồn tại",
    };
  }
  
  const movieUrl = `https://tintuc24h.blog/movies/${movie.slug}`;
  
  return {
    title: `${movie.title} - Xem Phim Online`,
    description: movie.description,
    openGraph: {
      title: `${movie.title} - Xem Phim Online`,
      description: movie.description,
      url: movieUrl,
      siteName: "News & Movies",
      type: "video.movie",
    },
    twitter: {
      card: "summary_large_image",
      title: `${movie.title} - Xem Phim Online`,
      description: movie.description,
    },
  };
}

export default async function MoviePage({ params }: Props) {
  const { slug } = await params;
  const movie = getMovie(slug);
  
  if (!movie) {
    notFound();
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      <ShopeeModalWrapper />
      
      {/* Mobile: Sticky header */}
      <div className="md:hidden bg-white shadow-sm sticky top-0 z-10 py-4 px-4">
        <h1 className="text-xl font-bold text-gray-900 text-center leading-tight">
          {movie.title}
        </h1>
      </div>
      
      {/* Desktop: Large title */}
      <div className="hidden md:block container-custom pt-8 pb-6">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 text-center">
          {movie.title}
        </h1>
      </div>
      
      {/* Video Section - Full width mobile, contained desktop */}
      <div className="md:container-custom md:px-4">
        <div className="bg-black md:rounded-2xl md:shadow-2xl overflow-hidden">
          <FacebookVideoEmbed 
            embedHtml={movie.facebookVideoEmbed}
            title={movie.title}
          />
        </div>
      </div>
      
      {/* Shopee Affiliate Banner */}
      <div className="container-custom px-4 py-4 md:py-6">
        <div className="max-w-4xl mx-auto">
          <a
            href="https://s.shopee.vn/5fjSmz4mwl"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all group active:scale-[0.98]"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 md:gap-4 flex-1">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-2.5 md:p-3 flex-shrink-0">
                  <ShoppingBag className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                
                <div className="flex-1 text-white">
                  <div className="text-xs md:text-sm font-medium text-orange-100 mb-0.5">
                    🎁 Ưu đãi đặc biệt
                  </div>
                  <div className="text-base md:text-lg font-bold leading-tight">
                    Mua Sắm Ngay Trên Shopee
                  </div>
                  <div className="text-xs md:text-sm text-orange-100 mt-1 hidden sm:block">
                    Giảm giá cực sốc - Miễn phí vận chuyển 🔥
                  </div>
                </div>
              </div>
              
              <div className="flex-shrink-0 bg-white text-orange-600 px-4 md:px-6 py-2 md:py-3 rounded-full font-bold text-sm md:text-base group-hover:bg-orange-50 transition-colors flex items-center gap-2">
                <span>Mua Ngay</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </a>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="container-custom px-4 py-6 md:py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-xl">
            <div className="flex flex-col items-center text-center text-white">
              {/* Icon */}
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 md:p-5 mb-6">
                <ThumbsUp className="w-8 h-8 md:w-12 md:h-12" />
              </div>
              
              {/* Heading */}
              <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
                Thích phim này?
              </h2>
              
              {/* Description */}
              <p className="text-blue-100 text-base md:text-xl mb-6 md:mb-8 leading-relaxed max-w-2xl">
                Follow trang để cập nhật phim mới mỗi ngày!<br/>
                Hàng trăm phim hay đang chờ bạn 🎬
              </p>
              
              {/* CTA Button */}
              <a
                href="https://www.facebook.com/reviewphimhaylam"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto bg-white text-blue-700 py-4 md:py-5 px-8 md:px-16 rounded-full font-bold text-lg md:text-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-2xl active:scale-95 flex items-center justify-center gap-3 md:gap-4"
              >
                <svg className="w-7 h-7 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Follow Ngay</span>
              </a>
              
              {/* Sub text */}
              <p className="text-blue-200 text-xs md:text-sm mt-4 md:mt-6">
                👉 Nhấn Follow để không bỏ lỡ phim hay
              </p>
            </div>
          </div>
          
          {/* Tip - Mobile only */}
          <div className="md:hidden mt-4 bg-white rounded-xl p-4 shadow-sm">
            <p className="text-sm text-gray-600 text-center leading-relaxed">
              💡 <strong>Mẹo:</strong> Xoay ngang điện thoại để xem phim full màn hình
            </p>
          </div>
          
          {/* Desktop tip */}
          <div className="hidden md:block mt-8 text-center">
            <p className="text-gray-500 text-sm">
              💡 Nhấn vào video để phát và điều chỉnh âm lượng
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
