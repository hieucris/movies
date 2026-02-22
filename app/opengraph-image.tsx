import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "News & Movies - Tin Tức & Xem Phim Online";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const OpenGraphImage = () => {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0f172a",
          backgroundImage:
            "radial-gradient(circle at 25px 25px, #1e293b 2%, transparent 0%), radial-gradient(circle at 75px 75px, #1e293b 2%, transparent 0%)",
          backgroundSize: "100px 100px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "80px",
          }}
        >
          <div
            style={{
              fontSize: 80,
              fontWeight: "bold",
              background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
              backgroundClip: "text",
              color: "transparent",
              marginBottom: 20,
              textAlign: "center",
            }}
          >
            🎬 News & Movies
          </div>
          <div
            style={{
              fontSize: 40,
              color: "#cbd5e1",
              textAlign: "center",
              maxWidth: 900,
            }}
          >
            Tin Tức Mới Nhất & Xem Phim Online Miễn Phí
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#64748b",
              marginTop: 30,
              textAlign: "center",
            }}
          >
            Cập nhật hàng ngày • Chất lượng cao
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
};

export default OpenGraphImage;
