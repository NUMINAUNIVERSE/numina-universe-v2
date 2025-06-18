import React from "react";

const stickers = [
  { id: 1, name: "開心星人", img: "https://em-content.zobj.net/source/microsoft-teams/363/grinning-face_1f600.png", price: 20 },
  { id: 2, name: "神性喵", img: "https://em-content.zobj.net/source/microsoft-teams/363/smiling-cat-face-with-heart-eyes_1f63b.png", price: 25 },
  { id: 3, name: "宇宙星光", img: "https://em-content.zobj.net/source/microsoft-teams/363/star_2b50.png", price: 15 }
];

export default function StickerMarket() {
  return (
    <div style={{ background: "#0D1A2D", minHeight: "100vh", fontFamily: "Poppins,Noto Sans TC,sans-serif" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "50px 10px 38px" }}>
        <h1 style={{ color: "#d4af37", fontSize: 30, fontWeight: 900, textAlign: "center", marginBottom: 36 }}>
          WonderLand 貼圖市集
        </h1>
        <div style={{ display: "flex", gap: 28, flexWrap: "wrap", justifyContent: "center" }}>
          {stickers.map(sticker => (
            <div key={sticker.id} style={{
              background: "#192a41",
              border: "2px solid #d4af37",
              borderRadius: 18, width: 170, padding: 22,
              textAlign: "center", boxShadow: "0 1px 8px #d4af3720"
            }}>
              <img src={sticker.img} alt={sticker.name} style={{ width: 75, marginBottom: 14 }} />
              <div style={{ fontWeight: 700, color: "#fff", marginBottom: 8 }}>{sticker.name}</div>
              <div style={{ color: "#d4af37", fontWeight: 600, marginBottom: 10 }}>NT$ {sticker.price}</div>
              <button style={{
                background: "#d4af37", color: "#2d2e36", fontWeight: 700, border: "none",
                borderRadius: 7, fontSize: 16, padding: "7px 15px", cursor: "pointer"
              }}>購買</button>
            </div>
          ))}
        </div>
        <div style={{ color: "#d4af37", textAlign: "center", marginTop: 36 }}>
          你購買的貼圖可以用於聊天室、留言、BlogeBook互動！
        </div>
      </div>
    </div>
  );
}

