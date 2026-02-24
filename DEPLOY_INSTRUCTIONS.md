# Hướng dẫn Deploy Next.js lên Hostinger

## Bước 1: Upload source code

Upload các file/folder sau lên thư mục của bạn trên Hostinger (ví dụ: `/home/u280860462/domains/tintuc24h.blog/public_html/`):

```
✅ app/
✅ components/
✅ lib/
✅ public/
✅ package.json
✅ package-lock.json
✅ next.config.ts
✅ tsconfig.json
✅ tailwind.config.ts
✅ postcss.config.mjs
✅ .env.local (nếu có)

❌ node_modules/  (KHÔNG upload - sẽ cài lại trên server)
❌ .next/         (KHÔNG upload - sẽ build lại trên server)
❌ .git/          (KHÔNG upload)
```

## Bước 2: SSH vào Hostinger và chạy lệnh

```bash
# Di chuyển vào thư mục project
cd /home/u280860462/domains/tintuc24h.blog/public_html

# Xóa node_modules cũ (nếu có)
rm -rf node_modules

# Xóa .next cũ (nếu có)
rm -rf .next

# Cài đặt dependencies
npm install

# Build project
npm run build

# Khởi động server (hoặc restart nếu đang chạy)
npm run start
```

## Bước 3: Cấu hình PM2 (nếu chưa có)

Để app chạy liên tục và tự động restart khi crash:

```bash
# Cài PM2 globally
npm install -g pm2

# Start app với PM2
pm2 start npm --name "news-app" -- start

# Lưu danh sách process
pm2 save

# Setup auto-start khi server reboot
pm2 startup
```

## Các lệnh PM2 hữu ích:

```bash
pm2 list              # Xem danh sách app đang chạy
pm2 restart news-app  # Restart app
pm2 stop news-app     # Dừng app
pm2 logs news-app     # Xem logs
pm2 delete news-app   # Xóa app khỏi PM2
```

## Cập nhật code mới (Update):

Khi có code mới, làm theo các bước sau:

1. Upload các file đã thay đổi lên server (ghi đè file cũ)
2. SSH vào server và chạy:

```bash
cd /home/u280860462/domains/tintuc24h.blog/public_html

# Nếu có thay đổi package.json
npm install

# Build lại
npm run build

# Restart app
pm2 restart news-app
# HOẶC nếu không dùng PM2:
# pkill -f "next start" && npm run start
```

## Troubleshooting:

### Lỗi: "Permission denied" khi build
```bash
chmod -R +x node_modules/.bin
npm run build
```

### Lỗi: Port đã được sử dụng
```bash
# Tìm process đang chạy trên port 3000
lsof -ti:3000

# Kill process đó
kill -9 $(lsof -ti:3000)

# Restart app
npm run start
```

### Lỗi: Module not found
```bash
# Xóa hoàn toàn và cài lại
rm -rf node_modules package-lock.json
npm install
npm run build
```

## Environment Variables:

Nếu cần cấu hình biến môi trường, tạo file `.env.local`:

```bash
# Tạo file
nano .env.local

# Thêm các biến (ví dụ):
NEXT_PUBLIC_SITE_URL=https://tintuc24h.blog
NODE_ENV=production

# Lưu và thoát: Ctrl+X, Y, Enter
```

## Kiểm tra app có chạy không:

```bash
# Check process
ps aux | grep next

# Check port
netstat -tulpn | grep :3000

# Test app
curl http://localhost:3000
```
