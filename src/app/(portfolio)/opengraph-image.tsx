import { ImageResponse } from "next/og";

export const alt =
  "SyedOS — Syed Mohiuddin, Full-Stack Developer and AI Builder";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #020617 0%, #07142f 52%, #06101f 100%)",
          color: "#f8fafc",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -180,
            left: -120,
            width: 520,
            height: 520,
            borderRadius: "999px",
            background:
              "radial-gradient(circle, rgba(37,99,235,0.42) 0%, rgba(37,99,235,0) 70%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            right: -160,
            bottom: -230,
            width: 600,
            height: 600,
            borderRadius: "999px",
            background:
              "radial-gradient(circle, rgba(6,182,212,0.28) 0%, rgba(6,182,212,0) 70%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            opacity: 0.13,
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.3) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "68px 76px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 18,
              }}
            >
              <div
                style={{
                  width: 66,
                  height: 66,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 18,
                  border: "1px solid rgba(96,165,250,0.55)",
                  background: "rgba(30,64,175,0.28)",
                  boxShadow: "0 0 40px rgba(37,99,235,0.24)",
                  color: "#67e8f9",
                  fontSize: 34,
                  fontWeight: 800,
                }}
              >
                S
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span
                  style={{
                    fontSize: 29,
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                  }}
                >
                  SyedOS
                </span>

                <span
                  style={{
                    marginTop: 4,
                    fontSize: 16,
                    color: "#94a3b8",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  Intelligent Career Platform
                </span>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                padding: "11px 19px",
                borderRadius: 999,
                border: "1px solid rgba(52,211,153,0.35)",
                background: "rgba(6,78,59,0.25)",
                color: "#6ee7b7",
                fontSize: 16,
                fontWeight: 700,
              }}
            >
              Available for opportunities
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 980,
            }}
          >
            <span
              style={{
                color: "#67e8f9",
                fontSize: 20,
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
              }}
            >
              Full-Stack Developer · AI Builder
            </span>

            <h1
              style={{
                margin: "22px 0 0",
                fontSize: 67,
                lineHeight: 1.05,
                letterSpacing: "-0.045em",
                fontWeight: 800,
              }}
            >
              Building intelligent software that solves real problems.
            </h1>

            <p
              style={{
                margin: "25px 0 0",
                maxWidth: 900,
                color: "#a8b6cb",
                fontSize: 24,
                lineHeight: 1.45,
              }}
            >
              Syed Mohiuddin · Next.js · TypeScript · PHP · MySQL · AI
              integration
            </p>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: 24,
              borderTop: "1px solid rgba(148,163,184,0.22)",
            }}
          >
            <span
              style={{
                fontSize: 18,
                color: "#94a3b8",
              }}
            >
              Portfolio · Projects · Skills · Career Journey
            </span>

            <span
              style={{
                color: "#60a5fa",
                fontSize: 18,
                fontWeight: 700,
              }}
            >
              syedos
            </span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}