"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Film } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { href: "/", label: "Trang Chủ" },
    { href: "/news", label: "Tin Tức" },
    { href: "/movies", label: "Xem Phim" },
    { href: "/sports", label: "Thể Thao" },
    { href: "/health", label: "Sức Khỏe" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 sm:h-20 px-2 sm:px-0">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-to-r from-primary-600 to-primary-800 p-1.5 sm:p-2 rounded-lg group-hover:scale-105 transition-transform">
              <Film className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <span className="text-lg sm:text-xl font-bold text-gray-900">
              News & Movies
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8 lg:space-x-10 gap-6">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors active:scale-95"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 animate-slide-down border-t">
            <div className="flex flex-col space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors px-4 py-3 hover:bg-gray-50 rounded-lg active:bg-gray-100"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
