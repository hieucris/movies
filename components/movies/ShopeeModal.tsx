"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const SHOPEE_URL = "https://s.shopee.vn/5fjSmz4mwl";
const SHOPEE_AD_IMAGE = "/images/shopee-ad-reference.jpg";

const ShopeeModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [closeAttempts, setCloseAttempts] = useState(0);
  const [adImageError, setAdImageError] = useState(false);

  const isFacebookBrowser = () => {
    const ua = navigator.userAgent || navigator.vendor;
    return (
      ua.indexOf("FBAN") > -1 ||
      ua.indexOf("FBAV") > -1 ||
      ua.indexOf("FB_IAB") > -1
    );
  };

  useEffect(() => {
    setIsMounted(true);

    const cleanUrl = () => {
      const url = new URL(window.location.href);
      const params = url.searchParams;
      const trackingParams = [
        "fbclid",
        "utm_source",
        "utm_medium",
        "utm_campaign",
        "utm_term",
        "utm_content",
      ];
      let hasChanges = false;

      trackingParams.forEach((param) => {
        if (params.has(param)) {
          params.delete(param);
          hasChanges = true;
        }
      });

      if (hasChanges) {
        const cleanedUrl = url.pathname + (url.search ? url.search : "");
        window.history.replaceState({}, "", cleanedUrl);
      }
    };

    cleanUrl();

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleModalInteraction = () => {
    if (closeAttempts === 0) {
      setCloseAttempts(1);

      if (isFacebookBrowser()) {
        window.location.href = SHOPEE_URL;
      } else {
        window.open(SHOPEE_URL, "_blank");
      }
      return;
    }

    if (closeAttempts === 1) {
      setIsOpen(false);
    }
  };

  const handleModalClick = () => {
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
        className="relative bg-white rounded-3xl shadow-2xl w-[90%] max-w-md p-6 sm:p-8 animate-slide-up cursor-pointer"
        onClick={handleModalClick}
      >
        <p className="text-sm font-bold uppercase text-red-600 text-center mb-2">
          QUẢNG CÁO
        </p>

        <h2 className="text-2xl sm:text-3xl font-extrabold uppercase text-red-600 text-center leading-tight mb-4">
          NỘI DUNG ĐÃ BỊ ẨN
        </h2>

        <p className="text-base text-gray-800 text-center leading-relaxed mb-5">
          Bạn cần click vào nội dung quảng cáo bên dưới để tiếp tục xem bài viết
          này.
        </p>

        <p className="text-lg font-bold text-blue-600 text-center mb-5">
          Click để xem 👉 MỞ QUẢNG CÁO
        </p>

        <div className="w-full rounded-2xl overflow-hidden mb-5">
          {!adImageError ? (
            <Image
              src={SHOPEE_AD_IMAGE}
              alt="Quảng cáo Shopee"
              width={400}
              height={220}
              className="w-full h-44 sm:h-48 rounded-2xl object-cover object-[center_58%]"
              onError={() => setAdImageError(true)}
              unoptimized
            />
          ) : (
            <div className="w-full aspect-[16/9] bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400 text-sm">
              Quảng cáo Shopee
            </div>
          )}
        </div>

        <p className="text-xs text-gray-400 text-center">
          {closeAttempts === 0
            ? "Chạm vào popup để mở quảng cáo và tiếp tục."
            : "Chạm lại để tiếp tục xem nội dung."}
        </p>
      </div>
    </div>
  );
};

export default ShopeeModal;
