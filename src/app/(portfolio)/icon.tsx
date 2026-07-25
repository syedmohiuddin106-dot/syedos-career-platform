import { ImageResponse } from "next/og";

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(145deg, #020617 0%, #0b1d45 55%, #073347 100%)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -95,
            left: -75,
            width: 330,
            height: 330,
            display: "flex",
            borderRadius: "999px",
            background:
              "radial-gradient(circle, rgba(37,99,235,0.58) 0%, rgba(37,99,235,0) 72%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            right: -110,
            bottom: -120,
            width: 360,
            height: 360,
            display: "flex",
            borderRadius: "999px",
            background:
              "radial-gradient(circle, rgba(6,182,212,0.38) 0%, rgba(6,182,212,0) 72%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 22,
            display: "flex",
            borderRadius: 92,
            border: "4px solid rgba(96,165,250,0.45)",
            boxShadow:
              "inset 0 0 55px rgba(37,99,235,0.16), 0 0 70px rgba(6,182,212,0.18)",
          }}
        />

        <div
          style={{
            width: 292,
            height: 292,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 78,
            border: "4px solid rgba(103,232,249,0.55)",
            background: "rgba(15,23,42,0.78)",
            color: "#67e8f9",
            fontSize: 206,
            lineHeight: 1,
            fontWeight: 800,
            letterSpacing: "-0.08em",
            textShadow: "0 0 28px rgba(34,211,238,0.4)",
          }}
        >
          S
        </div>
      </div>
    ),
    size,
  );
}