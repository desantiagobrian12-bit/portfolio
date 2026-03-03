import sharp from "sharp";
import { writeFileSync } from "fs";

// Geometric shapes from CanvasBackground.tsx, positioned for 1200×630
// Reference hero viewport: ~1440×900. Approx scale: x=0.833, y=0.7
const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Dot grid matching globals.css: radial-gradient 1px dots, 24px spacing -->
    <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
      <circle cx="1" cy="1" r="1" fill="#D1D5DB"/>
    </pattern>
  </defs>

  <!-- White background -->
  <rect width="1200" height="630" fill="white"/>
  <!-- Dot grid overlay -->
  <rect width="1200" height="630" fill="url(#dots)"/>

  <!--
    All shapes mirror CanvasBackground.tsx
    Coordinates derived from hero layout at 1200px wide
  -->

  <!-- Large circle: -right-16 -top-16, r=240 (h-[480px] w-[480px]) -->
  <circle cx="976" cy="224" r="240" fill="none" stroke="#D1D5DB" stroke-width="1"/>

  <!-- Small square: left-14, bottom-[38%], 80x80 viewBox -->
  <rect x="57" y="311" width="78" height="78" fill="none" stroke="#D1D5DB" stroke-width="1"/>

  <!-- Diagonal line: right-[16%], top-[24%], 176x176 -->
  <line x1="1184" y1="151" x2="1008" y2="327" stroke="#D1D5DB" stroke-width="1"/>

  <!-- Small circle: bottom-[26%], right-24, r=46 -->
  <circle cx="1056" cy="418" r="46" fill="none" stroke="#D1D5DB" stroke-width="1"/>

  <!-- Horizontal line: left-0, top-[55%], 112px wide -->
  <line x1="0" y1="347" x2="112" y2="347" stroke="#D1D5DB" stroke-width="1"/>

  <!-- Triangle: bottom-[16%], left-[12%], polygon 28,4 52,50 4,50 in 56x56 box -->
  <polygon points="172,477 196,523 148,523" fill="none" stroke="#D1D5DB" stroke-width="1"/>

  <!-- ── Text content matching hero ── -->

  <!-- Small gray intro -->
  <text x="80" y="192"
    font-family="Arial, sans-serif"
    font-size="20"
    font-weight="500"
    letter-spacing="0.5"
    fill="#6B7280">I&apos;m Brian.</text>

  <!-- Main heading — line 1 -->
  <text x="80" y="303"
    font-family="Arial, sans-serif"
    font-size="88"
    font-weight="900"
    letter-spacing="-3"
    fill="#171717">I design clarity</text>

  <!-- Main heading — line 2 -->
  <text x="80" y="399"
    font-family="Arial, sans-serif"
    font-size="88"
    font-weight="900"
    letter-spacing="-3"
    fill="#171717">within complexity.</text>

  <!-- Subtitle -->
  <text x="82" y="452"
    font-family="Arial, sans-serif"
    font-size="21"
    font-weight="400"
    fill="#6B7280">Product Designer · Business &amp; operational challenges into seamless user experiences.</text>
</svg>`;

await sharp(Buffer.from(svg))
  .jpeg({ quality: 97, mozjpeg: true })
  .toFile("public/og-image.jpg");

console.log("Generated: public/og-image.jpg");
