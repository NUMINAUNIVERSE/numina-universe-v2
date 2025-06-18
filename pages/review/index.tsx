import React, { useState } from "react";

const mockReviews = [
  {
    user: "🌟 Mia Lee",
    avatar: "https://randomuser.me/api/portraits/women/48.jpg",
    date: "2025/06/14",
    rating: 5,
    text: "超喜歡這本BlogeBook！圖文內容很有靈魂，已推薦給朋友💎",
    stickers: ["✨", "🌈"]
  },
  {
    user: "🦄 John Wang",
    avatar: "https://randomuser.me/api/portraits/men/23.jpg",
    date: "2025/06/12",
    rating: 4,
    text: "插畫超美、設計感很棒，期待更多新作品！",
    stickers: ["🔥"]
  }
];

const stickersLib = ["✨", "🌈", "🔥", "💖", "🌟", "🦄"];

export default function ReviewPage() {
  const [reviews, setReviews] = useState(mockReviews);
  const [input, setInput] = useState("");
  const [rating, setRating] = useState(0);
  const [stickers, setStickers] = useState<string[]>([]);

  const submitReview = () => {
    if (input && rating) {
      setReviews([
        {
          user: "你",
          avatar: "https://randomuser.me/api/portraits/men/5.jpg",
          date: new Date().toISOString().slice(0, 10),
          rating,
          text: input,
          stickers
        },
        ...reviews
      ]);
      setInput("");
      setRating(0);
      setStickers([]);
    }
  };

  return (
    <div style={{
      background: "#0D1A2D", minHeight: "100vh", color: "#fff",
      fontFamily: "Poppins,Noto Sans TC,sans-serif", paddingBottom: 56
    }}>
      <div style={{ maxWidth: 600, margin: "0 auto", padding: "54px 8px 20px" }}>
        <div style={{ fontSize: 30, fontWeight: 900, color: "#d4af37", textAlign: "center", marginBottom: 18 }}>
          內容評價／留言
        </div>

        {/* 新增評價 */}
        <div style={{
          background: "#162346", borderRadius: 18, padding: "22px 20px", boxShadow: "0 1px 12px #d4af3724",
          marginBottom: 30
        }}>
          <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 8 }}>你的評價</div>
          <div style={{ marginBottom: 10 }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                onClick={() => setRating(i + 1)}
                style={{
                  fontSize: 28,
                  cursor: "pointer",
                  color: i < rating ? "#d4af37" : "#fff",
                  marginRight: 2
                }}
              >★</span>
            ))}
          </div>
          <textarea
            placeholder="請輸入你的心得留言..."
            value={input}
            onChange={e => setInput(e.target.value)}
            style={{
              width: "100%", minHeight: 56, borderRadius: 10, border: "none",
              background: "#131c2f", color: "#fff", fontSize: 16, padding: 12, marginBottom: 10
            }}
          />
          <div style={{ marginBottom: 14 }}>
            <span style={{ fontWeight: 600 }}>貼圖：</span>
            {stickersLib.map((s, i) => (
              <span
                key={i}
                onClick={() =>
                  setStickers(stickers.includes(s)
                    ? stickers.filter(st => st !== s)
                    : [...stickers, s])
                }
                style={{
                  fontSize: 23, cursor: "pointer", marginLeft: 8,
                  filter: stickers.includes(s) ? "drop-shadow(0 0 2px #d4af37)" : "none"
                }}
              >
                {s}
              </span>
            ))}
          </div>
          <button
            onClick={submitReview}
            style={{
              width: "100%", padding: 13, borderRadius: 10, border: "none",
              background: "#d4af37", color: "#111", fontWeight: 900, fontSize: 17
            }}
          >
            送出評價
          </button>
        </div>

        {/* 評價列表 */}
        <div>
          {reviews.map((r, i) => (
            <div key={i} style={{
              background: "#131c2f", borderRadius: 14, padding: "17px 16px", marginBottom: 20,
              display: "flex", alignItems: "flex-start", gap: 15, boxShadow: "0 1px 6px #d4af3722"
            }}>
              <img src={r.avatar} alt="" width={42} height={42}
                style={{ borderRadius: "50%", border: "2px solid #d4af37" }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, color: "#d4af37", fontSize: 15 }}>
                  {r.user} &nbsp;
                  <span style={{ fontSize: 13, color: "#fff" }}>{r.date}</span>
                  <span style={{ marginLeft: 12 }}>
                    {Array.from({ length: r.rating }).map((_, j) => (
                      <span key={j} style={{ color: "#d4af37", fontSize: 17 }}>★</span>
                    ))}
                  </span>
                  {r.stickers && r.stickers.length > 0 && (
                    <span style={{ marginLeft: 12 }}>
                      {r.stickers.map((s, idx) => <span key={idx} style={{ fontSize: 20 }}>{s}</span>)}
                    </span>
                  )}
                </div>
                <div style={{ fontSize: 16, marginTop: 6 }}>{r.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
