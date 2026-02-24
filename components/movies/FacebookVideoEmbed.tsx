"use client";

import { useState, useEffect } from "react";
import { Maximize2, Minimize2 } from "lucide-react";

interface FacebookVideoEmbedProps {
  embedHtml: string;
  title?: string;
}

const FacebookVideoEmbed = ({ embedHtml, title }: FacebookVideoEmbedProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    
    return () => {
      window.removeEventListener("resize", checkMobile);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const handleFullscreen = async () => {
    const container = document.getElementById("video-container");
    if (!container) return;

    try {
      if (!document.fullscreenElement) {
        await container.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch {
      // Fullscreen not supported or denied
    }
  };

  return (
    <div className="relative w-full">
      <div
        id="video-container"
        className={`relative w-full bg-gray-900 rounded-lg overflow-hidden transition-all ${
          isFullscreen 
            ? "aspect-video" 
            : "aspect-[9/16] md:aspect-video"
        }`}
      >
        <div
          className="absolute inset-0 w-full h-full flex items-center justify-center"
          dangerouslySetInnerHTML={{ __html: embedHtml }}
        />
        
        {/* Custom Fullscreen Button - Always show on mobile, hide on desktop */}
        {isMobile && (
          <button
            onClick={handleFullscreen}
            className="absolute bottom-4 right-4 z-[60] bg-black/80 hover:bg-black text-white p-3 rounded-full transition-all backdrop-blur-sm shadow-lg active:scale-95"
            aria-label={isFullscreen ? "Thu nhỏ" : "Phóng to"}
            title={isFullscreen ? "Thu nhỏ" : "Phóng to toàn màn hình"}
          >
            {isFullscreen ? (
              <Minimize2 className="w-5 h-5" />
            ) : (
              <Maximize2 className="w-5 h-5" />
            )}
          </button>
        )}
      </div>
      
      {title && !isFullscreen && (
        <p className="mt-2 text-sm text-gray-600 text-center">{title}</p>
      )}
    </div>
  );
};

export default FacebookVideoEmbed;
