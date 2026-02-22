import { ImageResponse } from "next/og";
import { getMovie } from "@/lib/data";

export const runtime = "edge";
export const alt = "Movie Poster";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

type Props = {
  params: Promise<{ slug: string }>;
};

const OpenGraphImage = async ({ params }: Props) => {
  const { slug } = await params;
  const movie = getMovie(slug);

  if (!movie) {
    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#000",
            color: "#fff",
            fontSize: 48,
          }}
        >
          Phim không tồn tại
        </div>
      ),
      { ...size }
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#0f172a",
          backgroundImage:
            "radial-gradient(circle at 25px 25px, #1e293b 2%, transparent 0%), radial-gradient(circle at 75px 75px, #1e293b 2%, transparent 0%)",
          backgroundSize: "100px 100px",
          padding: "60px",
        }}
      >
        {/* Movie Poster */}
        <div
          style={{
            display: "flex",
            width: "400px",
            height: "510px",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
          }}
        >
          <img
            src={movie.poster}
            alt={movie.title}
            width="400"
            height="510"
            style={{
              objectFit: "cover",
            }}
          />
        </div>

        {/* Movie Info */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "60px",
            maxWidth: "600px",
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: "bold",
              color: "#fff",
              marginBottom: 20,
              lineHeight: 1.2,
            }}
          >
            {movie.title}
          </div>

          <div
            style={{
              fontSize: 28,
              color: "#cbd5e1",
              marginBottom: 30,
              lineHeight: 1.4,
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {movie.description}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#fbbf24",
                color: "#000",
                padding: "12px 24px",
                borderRadius: "999px",
                fontSize: 28,
                fontWeight: "bold",
              }}
            >
              ⭐ {movie.rating}
            </div>

            <div
              style={{
                fontSize: 24,
                color: "#94a3b8",
              }}
            >
              {movie.releaseYear}
            </div>

            <div
              style={{
                fontSize: 24,
                color: "#94a3b8",
              }}
            >
              {movie.genres[0]}
            </div>
          </div>

          <div
            style={{
              marginTop: 40,
              fontSize: 20,
              color: "#64748b",
            }}
          >
            🎬 Xem ngay tại tintuc24h.blog
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
