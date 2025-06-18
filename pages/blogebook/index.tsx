import React from "react";

const mockBlogeBooks = [
  {
    id: 1,
    title: "靈魂轉生之路",
    author: "Wendy Tsai",
    cover: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    intro: "走進人生的轉折點，從挫折中浴火重生。",
    likes: 320,
    views: 5421,
    date: "2025-06-20"
  },
  {
    id: 2,
    title: "夢境記憶",
    author: "Alex Wang",
    cover: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
    intro: "用夢境重塑現實，寫出最真實的你。",
    likes: 210,
    views: 3789,
    date: "2025-06-17"
  }
];

export default function BlogeBookGalaxy() {
  return (
    <div style={{ background: "#0D1A2D", minHeight: "100vh", fontFamily: "Poppins,Noto Sans TC,sans-serif" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "36px 10px" }}>
        <h1 style={{ color: "#d4af37", fontSize: 36, fontWeight: 900, textAlign: "center", marginBottom: 32 }}>
          BlogeBook 星系
        </h1>
        <div style={{ display: "flex", gap: 32, overflowX: "auto", paddingBottom: 10, marginBottom: 38 }}>
          {mockBlogeBooks.map(b => (
            <div key={b.id} style={{
              minWidth: 270, maxWidth: 300, background: "#192a41",
              borderRadius: 24, boxShadow: "0 1px 12px #d4af3720",
              marginRight: 6, padding: 24, color: "#fff"
            }}>
              <img src={b.cover} alt="cover" style={{ width: "100%", borderRadius: 12, marginBottom: 15, border: "2px solid #d4af37" }} />
              <div style={{ fontSize: 21, fontWeight: 700, color: "#d4af37", marginBottom: 6 }}>{b.title}</div>
              <div style={{ fontSize: 16, marginBottom: 8, color: "#e7e5d9" }}>{b.intro}</div>
              <div style={{ fontSize: 15, color: "#fff176" }}>{b.author}</div>
              <div style={{ display: "flex", alignItems: "center", marginTop: 8, fontSize: 15, color: "#f6e58d" }}>
                <span style={{ marginRight: 15 }}>👍 {b.likes}</span>
                <span style={{ marginRight: 15 }}>👁️ {b.views}</span>
                <span>{b.date}</span>
              </div>
            </div>
          ))}
        </div>
        <div style={{ color: "#d4af37", fontWeight: 600, textAlign: "center" }}>向下滑動載入更多 BlogeBook ...</div>
      </div>
    </div>
  );
}

