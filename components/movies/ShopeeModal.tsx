"use client";

import { useEffect, useState } from "react";
import { X, ShoppingBag, Gift } from "lucide-react";

const ShopeeModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [closeAttempts, setCloseAttempts] = useState(0);

  // Detect if user is in Facebook in-app browser
  const isFacebookBrowser = () => {
    const ua = navigator.userAgent || navigator.vendor;
    return (ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1) || (ua.indexOf("FB_IAB") > -1);
  };

  useEffect(() => {
    setIsMounted(true);
    
    // Clean URL by removing tracking parameters
    const cleanUrl = () => {
      const url = new URL(window.location.href);
      const params = url.searchParams;
      
      // Remove tracking parameters like fbclid, utm_*, etc.
      const trackingParams = ['fbclid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
      let hasChanges = false;
      
      trackingParams.forEach(param => {
        if (params.has(param)) {
          params.delete(param);
          hasChanges = true;
        }
      });
      
      if (hasChanges) {
        const cleanedUrl = url.pathname + (url.search ? url.search : '');
        window.history.replaceState({}, '', cleanedUrl);
      }
    };
    
    cleanUrl();
    
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleModalInteraction = () => {
    const shopeeUrl = "https://s.shopee.vn/5fjSmz4mwl";
    
    // Lần 1: Mở Shopee và tính là 1 lần đóng
    if (closeAttempts === 0) {
      setCloseAttempts(1);
      
      if (isFacebookBrowser()) {
        window.location.href = shopeeUrl;
      } else {
        window.open(shopeeUrl, "_blank");
      }
      return;
    }
    
    // Lần 2: Đóng modal hoàn toàn
    if (closeAttempts === 1) {
      setIsOpen(false);
    }
  };

  const handleModalClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('.modal-close-btn')) {
      return;
    }
    handleModalInteraction();
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleModalInteraction();
  };

  if (!isMounted || !isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleModalInteraction();
        }
      }}
    >
      <div 
        className="relative bg-white rounded-2xl md:rounded-3xl shadow-2xl max-w-md w-full overflow-hidden animate-slide-up cursor-pointer"
        onClick={handleModalClick}
      >
        <button
          onClick={handleClose}
          className={`modal-close-btn absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full shadow-lg transition-all hover:scale-110 active:scale-95 ${
            closeAttempts > 0
              ? 'bg-red-500 hover:bg-red-600 text-white' 
              : 'bg-white/90 hover:bg-white text-gray-700'
          }`}
          aria-label={closeAttempts > 0 ? "Click lại để đóng" : "Đóng"}
          title={closeAttempts > 0 ? "Click lại để đóng" : "Mở Shopee"}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="bg-gradient-to-br from-orange-500 via-orange-600 to-red-500 p-8 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="relative">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-4 animate-bounce">
              <Gift className="w-10 h-10" />
            </div>

            <h2 className="text-3xl font-bold mb-2">
              🎁 Ưu Đãi Đặc Biệt!
            </h2>
            
            <div className="inline-block bg-yellow-400 text-orange-900 px-4 py-1 rounded-full text-sm font-bold mb-3">
              GIẢM GIÁ CỰC SỐC
            </div>
          </div>
        </div>

        <div className="p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Deal Hot Trên Shopee! 🔥
          </h3>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            Mua sắm ngay hôm nay để nhận ưu đãi khủng!<br/>
            <span className="text-orange-600 font-semibold">Miễn phí vận chuyển - Giá cực tốt</span>
          </p>

          <div className="bg-orange-50 border-2 border-orange-200 border-dashed rounded-xl p-4 mb-6">
            <div className="flex items-center justify-center gap-2 text-orange-600 font-bold">
              <ShoppingBag className="w-5 h-5" />
              <span>Click để xem deal ngay!</span>
            </div>
          </div>

          <p className="text-xs text-gray-500">
            {closeAttempts === 0 ? '👆 Click bất kỳ để mở Shopee' : '👆 Click lại để đóng modal'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShopeeModal;
