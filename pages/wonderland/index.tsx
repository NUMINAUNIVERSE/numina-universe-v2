import React from "react";

const mockWonderLand = [
  {
    id: 101,
    author: "星野光",
    images: [
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
      "https://images.unsplash.com/photo-1464983953574-0892a716854b",
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308"
    ],
    desc: "幻想與現實的交會。"
  },
  {
    id: 102,
    author: "艾莉絲",
    images: [
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
      "https://images.unsplash.com/photo-1519985176271-adb1088fa94c"
    ],
    desc: "色彩碰撞，造就全新異世界。"
  }
];

export default function WonderLandGalaxy() {
  return (
    <div style={{ background: "#0D1A2D", minHeight: "100vh", fontFamily: "Poppins,Noto Sans TC,sans-serif" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "36px 10px" }}>
        <h1 style={{ color: "#d4af37", fontSize: 36, fontWeight: 900, textAlign: "center", marginBottom: 32 }}>
          WonderLand 星系
        </h1>
        {mockWonderLand.map(w => (
          <div key={w.id} style={{
            background: "#192a41", borderRadius: 24,
            boxShadow: "0 1px 12px #d4af3720", marginBottom: 32, padding: 24, color: "#fff"
          }}>
            <div style={{
              display: "flex", gap: 18, overflowX: "auto", marginBottom: 10
            }}>
              {w.images.map((img, idx) => (
                <img key={idx} src={img} alt="" style={{
                  width: 140, height: 140, objectFit: "cover", borderRadius: 15, border: "2px solid #d4af37"
                }} />
              ))}
            </div>
            <div style={{ fontSize: 17, marginBottom: 8, color: "#e7e5d9" }}>{w.desc}</div>
            <div style={{ fontSize: 15, color: "#d4af37" }}>{w.author}</div>
          </div>
        ))}
        <div style={{ color: "#d4af37", fontWeight: 600, textAlign: "center" }}>向下滑動載入更多 WonderLand ...</div>
      </div>
    </div>
  );
}

