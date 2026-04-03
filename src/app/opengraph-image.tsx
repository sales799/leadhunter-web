import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "LeadHunterIQ — AI Signal Intelligence for Indian IT Staffing";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0B1D3A",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, #162D50 0%, transparent 50%), radial-gradient(circle at 75% 75%, #0F2440 0%, transparent 50%)",
        }}
      >
        {/* Grid pattern overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "60px",
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "rgba(16, 185, 129, 0.15)",
              padding: "8px 20px",
              borderRadius: "999px",
              marginBottom: "32px",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#10B981",
              }}
            />
            <span
              style={{
                color: "#34D399",
                fontSize: "16px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase" as const,
              }}
            >
              AI Signal Intelligence
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              color: "#FFFFFF",
              fontSize: "64px",
              fontWeight: 800,
              textAlign: "center",
              lineHeight: 1.1,
              letterSpacing: "-0.04em",
              margin: 0,
              maxWidth: "900px",
            }}
          >
            LeadHunterIQ
          </h1>

          {/* Subtitle */}
          <p
            style={{
              color: "#94A3B8",
              fontSize: "24px",
              textAlign: "center",
              margin: "20px 0 0 0",
              maxWidth: "700px",
              lineHeight: 1.4,
            }}
          >
            50+ sources. Proprietary AI scoring. Verified data. Dossier-grade intelligence for
            Indian IT staffing.
          </p>

          {/* Stats row */}
          <div
            style={{
              display: "flex",
              gap: "40px",
              marginTop: "48px",
            }}
          >
            {[
              { value: "50+", label: "Sources" },
              { value: "AI", label: "Scoring" },
              { value: "Verified", label: "Data" },
              { value: "₹170", label: "Per Lead" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    color: "#3B82F6",
                    fontSize: "36px",
                    fontWeight: 800,
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    color: "#64748B",
                    fontSize: "14px",
                    fontWeight: 500,
                    textTransform: "uppercase" as const,
                    letterSpacing: "0.05em",
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: "24px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span
            style={{ color: "#475569", fontSize: "14px", fontWeight: 500 }}
          >
            leadhunteriq.in
          </span>
          <span style={{ color: "#334155" }}>|</span>
          <span
            style={{ color: "#475569", fontSize: "14px", fontWeight: 500 }}
          >
            Talpro India Pvt Ltd
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
