"use client";

import { useState } from "react";
import { Mail, Send } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setEmail("");
    
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section className="bg-gradient-to-r from-primary-600 to-primary-800 py-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Đăng Ký Nhận Tin
          </h2>
          
          <p className="text-xl text-primary-100 mb-8">
            Nhận thông báo về tin tức mới nhất và review phim hot nhất mỗi ngày
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Nhập email của bạn"
              required
              className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-primary-300"
            />
            
            <button
              type="submit"
              disabled={isSubmitted}
              className="bg-white text-primary-700 px-8 py-4 rounded-full font-semibold hover:bg-primary-50 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitted ? (
                "Đã Đăng Ký ✓"
              ) : (
                <>
                  Đăng Ký
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
          
          {isSubmitted && (
            <p className="mt-4 text-primary-100 animate-slide-down">
              Cảm ơn bạn đã đăng ký! Chúng tôi sẽ gửi tin tức mới nhất đến email của bạn.
            </p>
          )}
          
          <p className="mt-6 text-sm text-primary-200">
            Chúng tôi cam kết bảo mật thông tin của bạn. Không spam!
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
