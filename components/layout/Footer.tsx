import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "Youtube" },
  ];

  const footerLinks = [
    {
      title: "Danh Mục",
      links: [
        { label: "Trang Chủ", href: "/" },
        { label: "Tin Tức", href: "/news" },
        { label: "Xem Phim", href: "/movies" },
      ],
    },
    {
      title: "Thông Tin",
      links: [
        { label: "Giới Thiệu", href: "#" },
        { label: "Liên Hệ", href: "#" },
        { label: "Quảng Cáo", href: "#" },
      ],
    },
    {
      title: "Chính Sách",
      links: [
        { label: "Điều Khoản", href: "#" },
        { label: "Bảo Mật", href: "#" },
        { label: "Cookie", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">News & Movies</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Website tổng hợp tin tức mới nhất và xem phim online miễn phí. 
              Cập nhật thông tin nhanh chóng, chất lượng phim cao.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-primary-500 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} News & Movies. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Mail className="w-4 h-4" />
              <a href="mailto:contact@newsreview.com" className="hover:text-primary-500 transition-colors">
                contact@newsreview.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
