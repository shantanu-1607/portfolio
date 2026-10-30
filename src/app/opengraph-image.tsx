import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { profile } from "@/data/portfolio";

export const alt =
  "Shantanu Singh — Backend & distributed systems. Good systems. Built to hold.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const [displayFont, bodyFont] = await Promise.all([
    readFile(join(process.cwd(), "public/fonts/ClashDisplay-Semibold.ttf")),
    readFile(join(process.cwd(), "public/fonts/CabinetGrotesk-Medium.ttf")),
  ]);
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "#141413",
        color: "#eeede6",
        padding: "55px 65px",
        fontFamily: "Cabinet",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 22,
          color: "#aaa99f",
        }}
      >
        <span>{profile.shortName}</span>
        <span style={{ color: "#f58562", fontSize: 18 }}>
          BACKEND & DISTRIBUTED SYSTEMS
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontFamily: "Clash",
          fontSize: 105,
          lineHeight: 1.08,
          letterSpacing: "-3px",
          marginTop: 72,
        }}
      >
        <div style={{ display: "flex", gap: 22 }}>
          <span>Good</span>
          <span>systems.</span>
        </div>
        <div style={{ display: "flex", gap: 22, color: "#f58562" }}>
          <span>Built</span>
          <span>to</span>
          <span>hold.</span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "1px solid #34342e",
          paddingTop: 23,
          marginTop: "auto",
          color: "#aaa99f",
          fontSize: 20,
        }}
      >
        <span>Go · Distributed systems · Open source</span>
        <span>shantanu-1607</span>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Clash", data: displayFont, weight: 600 },
        { name: "Cabinet", data: bodyFont, weight: 400 },
      ],
    },
  );
}
