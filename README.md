# News & Movie Review Website

Một website tổng hợp tin tức và review phim được xây dựng với Next.js 15, TailwindCSS và Framer Motion.

## Tính Năng

- ✨ UI/UX hiện đại và đẹp mắt
- 📱 Responsive trên mọi thiết bị
- 🚀 Tối ưu SEO với Next.js App Router
- 🎬 Trang review phim chi tiết với đánh giá
- 📰 Trang tin tức với nhiều danh mục
- 🎨 Animations mượt mà với Framer Motion
- ⚡ Performance cao với Next.js 15
- 🎯 TypeScript cho type-safety

## Công Nghệ Sử Dụng

- **Framework**: Next.js 15
- **UI**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Font**: Inter (Google Fonts)

## Cấu Trúc Dự Án

```
news/
├── app/                    # Next.js App Router
│   ├── (routes)/          # Các route chính
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Trang chủ
├── components/            # React components
│   ├── home/             # Components cho trang chủ
│   ├── layout/           # Layout components (Navbar, Footer)
│   ├── movies/           # Components cho phim
│   └── news/             # Components cho tin tức
├── lib/                   # Utilities và data
│   ├── data.ts           # Mock data
│   └── utils.ts          # Helper functions
└── public/               # Static assets
```

## Cài Đặt và Chạy

1. **Cài đặt dependencies**:
```bash
npm install
```

2. **Chạy development server**:
```bash
npm run dev
```

3. **Build cho production**:
```bash
npm run build
npm start
```

4. **Linting**:
```bash
npm run lint
```

## Các Trang Chính

- `/` - Trang chủ với featured news và movies
- `/news` - Danh sách tin tức
- `/news/[slug]` - Chi tiết tin tức
- `/movies` - Danh sách review phim
- `/movies/[slug]` - Chi tiết review phim

## Tối Ưu SEO

- ✅ Metadata động cho từng trang
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Semantic HTML
- ✅ Image optimization với Next.js Image

## Customization

### Thay đổi màu sắc:
Chỉnh sửa file `tailwind.config.ts` để thay đổi color palette.

### Thêm/Sửa nội dung:
Chỉnh sửa file `lib/data.ts` để thêm hoặc sửa tin tức và phim.

### Thay đổi layout:
Chỉnh sửa các components trong thư mục `components/`.

## Performance

- ⚡ Lazy loading cho images
- 🎯 Code splitting tự động
- 📦 Optimized bundle size
- 🚀 Static generation cho tốc độ tải nhanh

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Author

Được tạo bởi AI Assistant cho dự án cá nhân.
