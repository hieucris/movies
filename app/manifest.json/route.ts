import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    name: "News & Movie Review",
    short_name: "News Review",
    description: "Website tổng hợp tin tức mới nhất và review phim chi tiết",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2563eb",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  });
}
