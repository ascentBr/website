import { ImageResponse } from "next/og";

export const alt = "Ascent - Sites rápidos para pequenos empreendedores";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0a0a",
          color: "#ededed",
        }}
      >
        <div style={{ fontSize: 40, fontWeight: 700, color: "#ffa800" }}>ASCENT</div>
        <div style={{ marginTop: 24, fontSize: 80, fontWeight: 800, lineHeight: 1.05 }}>
          Sites rápidos para pequenos empreendedores
        </div>
        <div style={{ marginTop: 32, fontSize: 32, opacity: 0.8 }}>
          Seu negócio no Google, com um site rápido no celular.
        </div>
      </div>
    ),
    size,
  );
}
