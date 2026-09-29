import { ImageResponse } from "next/og";
export const alt = "SPX MGMT — Quantitative Investment Management";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 70,
          background: "#0b1111",
          color: "#e9eee7",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, letterSpacing: 3 }}>
          SPX MGMT
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 76,
            letterSpacing: -3,
          }}
        >
          <span>Find the signal.</span>
          <span style={{ color: "#c8e9ac" }}>Beyond the noise.</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 20,
            color: "#a9baa4",
          }}
        >
          <span>QUANTITATIVE INVESTMENT MANAGEMENT</span>
          <span>spxmgmt.com</span>
        </div>
      </div>
    ),
    size,
  );
}
