import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#0b1220";
const PAPER = "#f7f5f0";
const STEEL = "#3a5a78";
const SIGNAL = "#c7622a";
const MUTED = "#5c6773";

export default async function OpengraphImage() {
  const photoData = await readFile(join(process.cwd(), "public/images/og-photo.jpg"));
  const photoSrc = `data:image/jpeg;base64,${photoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: PAPER,
          padding: 64,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
            paddingRight: 48,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 28,
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: SIGNAL,
              }}
            />
            <span
              style={{
                fontSize: 22,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: STEEL,
                fontWeight: 600,
              }}
            >
              Software Engineer
            </span>
          </div>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              color: INK,
              lineHeight: 1.05,
              marginBottom: 24,
            }}
          >
            Ivan Tan
          </div>
          <div
            style={{
              fontSize: 30,
              color: MUTED,
              lineHeight: 1.4,
              maxWidth: 560,
            }}
          >
            Building backend systems for national payment infrastructure at PayNet.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={photoSrc}
            alt=""
            width={420}
            height={420}
            style={{
              borderRadius: 32,
              objectFit: "cover",
              border: `4px solid ${INK}`,
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
