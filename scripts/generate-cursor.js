const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const SIZE = 24;

const arrowSvg = Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="${SIZE}" height="${SIZE}" viewBox="0 0 32 32">
  <path fill="#000000" d="M2 1v22l8-6 4 8 2.5-2-4-7 10-6z"/>
</svg>
`);

async function main() {
  const outPath = path.join(__dirname, "..", "public", "cursor.png");
  await sharp({
    create: {
      width: SIZE,
      height: SIZE,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([{ input: arrowSvg }])
    .png()
    .toFile(outPath);
  console.log("Written", outPath);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
