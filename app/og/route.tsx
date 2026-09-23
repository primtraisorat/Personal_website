import { ImageResponse } from "next/og"

export const dynamic = "force-static"

/** Default link-preview image for pages without their own */
export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: 80,
          color: "#fafafa",
          background:
            "radial-gradient(circle at 20% 20%, #CEF889 0%, rgba(206,248,137,0) 45%), radial-gradient(circle at 85% 30%, #F2363E 0%, rgba(242,54,62,0) 55%), linear-gradient(135deg, #4E7DAA 0%, #F2363E 100%)",
        }}
      >
        <div style={{ fontSize: 96, fontWeight: 300, letterSpacing: -3, lineHeight: 1 }}>Prim Traisorat</div>
        <div style={{ marginTop: 24, fontSize: 36, opacity: 0.85 }}>Product Designer · Strategy, design, and growth</div>
      </div>
    ),
    { width: 1200, height: 630 },
  )
}
