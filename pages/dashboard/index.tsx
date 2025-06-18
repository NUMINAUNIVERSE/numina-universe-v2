import React from "react";

const fakeStats = {
  earnings: 52310,
  likes: 1980,
  comments: 422,
  views: 29888,
  subscribers: 1221,
  works: 18
};

export default function Dashboard() {
  return (
    <div style={{ background: "#0D1A2D", minHeight: "100vh", fontFamily: "Poppins,Noto Sans TC,sans-serif" }}>
      <div style={{ maxWidth: 950, margin: "0 auto", padding: "55px 10px" }}>
        <div style={{ fontSize: 33, fontWeight: 900, color: "#d4af37", textAlign: "center", marginBottom: 42 }}>
          創作者儀表板
        </div>
        <div style={{ display: "flex", gap: 28, flexWrap: "wrap", justifyContent: "center" }}>
          {Object.entries(fakeStats).map(([key, val]) => (
            <div key={key} style={{
              background: "#192a41", border: "2px solid #d4af37",
              borderRadius: 14, width: 170, padding: 22,
              textAlign: "center", boxShadow: "0 1px 8px #d4af3720", color: "#fff", marginBottom: 20
            }}>
              <div style={{ fontWeight: 800, color: "#fff176", fontSize: 18, marginBottom: 6 }}>
                {{
                  earnings: "累積收益 (NT$)",
                  likes: "獲得讚數",
                  comments: "留言數",
                  views: "總瀏覽數",
                  subscribers: "訂閱人數",
                  works: "作品數"
                }[key]}
              </div>
              <div style={{ color: "#d4af37", fontWeight: 900, fontSize: 25 }}>{val}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

