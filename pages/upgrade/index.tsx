import React from "react";

const plans = [
  {
    name: "免費會員",
    price: 0,
    features: ["作品數量無上限", "基本曝光", "留言互動", "貼圖市集"],
    highlight: false
  },
  {
    name: "進階會員",
    price: 200,
    features: ["提升曝光", "VIP創作者標記", "作品優先排序"],
    highlight: true
  },
  {
    name: "超級會員",
    price: 399,
    features: ["專屬首頁Banner", "星系優先推播", "專屬社群功能"],
    highlight: true
  }
];

export default function UpgradePage() {
  return (
    <div style={{ background: "#0D1A2D", minHeight: "100vh", fontFamily: "Poppins,Noto Sans TC,sans-serif" }}>
      <div style={{ maxWidth: 820, margin: "0 auto", padding: "58px 10px 38px" }}>
        <div style={{ fontSize: 33, fontWeight: 900, color: "#d4af37", textAlign: "center", marginBottom: 32 }}>
          會員升級與曝光方案
        </div>
        <div style={{ display: "flex", gap: 36, justifyContent: "center", marginBottom: 38 }}>
          {plans.map(plan => (
            <div key={plan.name} style={{
              background: plan.highlight ? "#1e212d" : "#212c47",
              border: plan.highlight ? "2.5px solid #d4af37" : "1px solid #474e58",
              borderRadius: 18, boxShadow: "0 1px 8px #d4af3720", padding: 32, width: 240
            }}>
              <div style={{ fontWeight: 800, color: "#d4af37", fontSize: 23, marginBottom: 16 }}>{plan.name}</div>
              <div style={{ color: "#fff176", fontSize: 21, fontWeight: 600, marginBottom: 10 }}>
                {plan.price === 0 ? "免費" : `NT$${plan.price}/月`}
              </div>
              <ul style={{ paddingLeft: 18, color: "#fff", marginBottom: 18 }}>
                {plan.features.map((f, i) => <li key={i} style={{ marginBottom: 6 }}>{f}</li>)}
              </ul>
              {plan.price !== 0 && (
                <button style={{
                  background: "#d4af37", color: "#222",
                  fontWeight: 700, padding: "9px 22px", border: "none", borderRadius: 9,
                  cursor: "pointer", fontSize: 17, marginBottom: 5, marginTop: 7
                }}>
                  升級
                </button>
              )}
            </div>
          ))}
        </div>
        <div style={{ color: "#d4af37", fontWeight: 600, textAlign: "center" }}>
          每筆收益2%自動投入公益計畫，與NUMINA共創公平未來
        </div>
      </div>
    </div>
  );
}

