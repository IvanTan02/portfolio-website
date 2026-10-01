import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default async function Icon() {
  const photoData = await readFile(join(process.cwd(), "public/images/og-photo.jpg"));
  const photoSrc = `data:image/jpeg;base64,${photoData.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: "#0b1220",
        borderRadius: "50%",
        padding: 3,
      }}
    >
      <img
        src={photoSrc}
        alt=""
        width={58}
        height={58}
        style={{
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
    </div>,
    { ...size }
  );
}
