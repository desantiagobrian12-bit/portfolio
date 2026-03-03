import { ImageResponse } from "next/og";

export const alt = "Brian De Santiago — Product Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          backgroundColor: "#ffffff",
          position: "relative",
          overflow: "hidden",
          fontFamily: "sans-serif",
        }}
      >
        {/* Dot grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, #D1D5DB 1.5px, transparent 1.5px)",
            backgroundSize: "28px 28px",
            opacity: 0.6,
          }}
        />

        {/* White fade overlay — left side for readability */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(105deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.97) 55%, rgba(255,255,255,0.55) 100%)",
          }}
        />

        {/* Blue accent bar — left edge */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 6,
            height: "100%",
            backgroundColor: "#3B82F6",
          }}
        />

        {/* Decorative circles — top right */}
        <div
          style={{
            position: "absolute",
            right: -80,
            top: -80,
            width: 420,
            height: 420,
            borderRadius: "50%",
            border: "1.5px solid #E5E7EB",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 40,
            top: 40,
            width: 260,
            height: 260,
            borderRadius: "50%",
            border: "1.5px solid #3B82F6",
            opacity: 0.25,
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 130,
            top: 130,
            width: 80,
            height: 80,
            borderRadius: "50%",
            backgroundColor: "#3B82F6",
            opacity: 0.12,
          }}
        />

        {/* Main content */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: 80,
            paddingRight: 120,
            paddingTop: 60,
            paddingBottom: 60,
            flex: 1,
            gap: 0,
          }}
        >
          {/* "B" logo mark */}
          <div
            style={{
              width: 52,
              height: 52,
              backgroundColor: "#171717",
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 44,
            }}
          >
            <span
              style={{
                color: "#ffffff",
                fontSize: 30,
                fontWeight: 700,
                lineHeight: 1,
                letterSpacing: -1,
              }}
            >
              B
            </span>
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: 68,
              fontWeight: 800,
              color: "#171717",
              letterSpacing: -2.5,
              lineHeight: 1.05,
              marginBottom: 18,
            }}
          >
            Brian De Santiago
          </div>

          {/* Role pill */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 36,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "#3B82F6",
              }}
            />
            <span
              style={{
                fontSize: 26,
                color: "#3B82F6",
                fontWeight: 600,
                letterSpacing: -0.5,
              }}
            >
              Product Designer
            </span>
          </div>

          {/* Divider */}
          <div
            style={{
              width: 56,
              height: 2,
              backgroundColor: "#E5E7EB",
              marginBottom: 36,
            }}
          />

          {/* Description */}
          <div
            style={{
              fontSize: 22,
              color: "#6B7280",
              lineHeight: 1.55,
              maxWidth: 660,
              fontWeight: 400,
            }}
          >
            I design clarity within complexity — translating intricate business
            and operational challenges into seamless user experiences.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
