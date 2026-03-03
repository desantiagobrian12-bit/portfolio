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
        {/* Dot grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(circle, #D1D5DB 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            display: "flex",
          }}
        />

        {/* Large circle top-right (CanvasBackground: -right-16 -top-16, 480px) */}
        <div
          style={{
            position: "absolute",
            top: -16,
            right: -16,
            width: 480,
            height: 480,
            borderRadius: "50%",
            border: "1px solid #D1D5DB",
            display: "flex",
          }}
        />

        {/* Small square left (CanvasBackground: left-14, bottom-[38%]) */}
        <div
          style={{
            position: "absolute",
            left: 56,
            top: 311,
            width: 78,
            height: 78,
            border: "1px solid #D1D5DB",
            display: "flex",
          }}
        />

        {/* Small circle bottom-right (CanvasBackground: bottom-[26%], right-24) */}
        <div
          style={{
            position: "absolute",
            right: 72,
            top: 372,
            width: 92,
            height: 92,
            borderRadius: "50%",
            border: "1px solid #D1D5DB",
            display: "flex",
          }}
        />

        {/* Horizontal line left (CanvasBackground: left-0, top-[55%]) */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 347,
            width: 112,
            height: 1,
            backgroundColor: "#D1D5DB",
            display: "flex",
          }}
        />

        {/* Diagonal line (CanvasBackground: right-[16%], top-[24%], 176×176)
            Simulated as a rotated thin bar */}
        <div
          style={{
            position: "absolute",
            left: 1008,
            top: 151,
            width: 249,
            height: 1,
            backgroundColor: "#D1D5DB",
            transform: "rotate(45deg)",
            transformOrigin: "0 0",
            display: "flex",
          }}
        />

        {/* Triangle bottom-left (CanvasBackground: bottom-[16%], left-[12%])
            Approximated as a rotated square outline clipped */}
        <div
          style={{
            position: "absolute",
            left: 154,
            top: 487,
            width: 44,
            height: 44,
            border: "1px solid #D1D5DB",
            transform: "rotate(45deg)",
            display: "flex",
          }}
        />

        {/* ── Text content ── */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: 80,
            paddingRight: 80,
            paddingTop: 60,
            paddingBottom: 60,
          }}
        >
          {/* "I'm Brian." */}
          <div
            style={{
              display: "flex",
              fontSize: 20,
              fontWeight: 500,
              color: "#6B7280",
              letterSpacing: "0.03em",
              marginBottom: 28,
            }}
          >
            I&apos;m Brian.
          </div>

          {/* Heading line 1 */}
          <div
            style={{
              display: "flex",
              fontSize: 88,
              fontWeight: 900,
              color: "#171717",
              letterSpacing: "-3px",
              lineHeight: 1.05,
            }}
          >
            I design clarity
          </div>

          {/* Heading line 2 */}
          <div
            style={{
              display: "flex",
              fontSize: 88,
              fontWeight: 900,
              color: "#171717",
              letterSpacing: "-3px",
              lineHeight: 1.05,
              marginBottom: 20,
            }}
          >
            within complexity.
          </div>

          {/* Subtitle */}
          <div
            style={{
              display: "flex",
              fontSize: 21,
              fontWeight: 400,
              color: "#6B7280",
              lineHeight: 1.5,
            }}
          >
            Product Designer · Business &amp; operational challenges into seamless user experiences.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
