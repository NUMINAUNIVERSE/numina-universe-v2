import React from "react";

const plans = [
  {
    title: "免費會員",
    price: "NT$0",
    features: [
      "不限數量內容發佈",
      "可被訂閱／被打賞",
      "基礎曝光",
      "完整參與 BlogeBook / WonderLand",
      "平台抽成 25%，其中 2%做公益"
    ],
    highlight: false
  },
  {
    title: "進階會員",
    price: "NT$200/月",
    features: [
      "不限內容數",
      "高曝光權重（系統推薦加乘）",
      "搜尋優先排序",
      "VIP 客服協助",
      "專屬活動邀請",
      "平台抽成 20%，2%做公益"
    ],
    highlight: true
  },
  {
    title: "超級會員",
    price: "NT$399/月",
    features: [
      "不限內容數",
      "全站置頂推薦保障",
      "優先參與平台合作分潤",
      "專屬流量加權／推播",
      "專屬身份徽章",
      "平台抽成 15%，2%做公益"
    ],
    highlight: true
  }
];

export default function SubscriptionPage() {
  return (
    <div style={{ background: "#0D1A2D", minHeight: "100vh", color: "#fff", fontFamily: "Poppins,Noto Sans TC,sans-serif" }}>
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "56px 10px 44px" }}>
        <div style={{
          fontSize: 34, fontWeight: 900, color: "#d4af37",
          letterSpacing: 2, marginBottom: 30, textAlign: "center"
        }}>
          會員升級／曝光加權
        </div>
        <div style={{
          display: "flex", flexWrap: "wrap", gap: 28, justifyContent: "center"
        }}>
          {plans.map((plan, i) => (
            <div key={i} style={{
              background: plan.highlight ? "#1a2145" : "#162346",
              borderRadius: 20,
              border: plan.highlight ? "2.5px solid #d4af37" : "2px solid #3a426b",
              boxShadow: plan.highlight ? "0 2px 16px #d4af3737" : "0 1px 6px #0001",
              width: 300,
              padding: "36px 24px 30px",
              display: "flex", flexDirection: "column", alignItems: "center",
              position: "relative"
            }}>
              {plan.highlight && (
                <div style={{
                  position: "absolute", top: 14, right: 14,
                  background: "#d4af37", color: "#222", fontWeight: 900, fontSize: 13,
                  borderRadius: 20, padding: "2px 12px"
                }}>推薦</div>
              )}
              <div style={{
                fontSize: 23, fontWeight: 900,
                color: "#d4af37", marginBottom: 8, letterSpacing: 1.5
              }}>{plan.title}</div>
              <div style={{
                fontSize: 27, fontWeight: 800,
                color: plan.highlight ? "#fff" : "#d4af37", marginBottom: 16
              }}>{plan.price}</div>
              <ul style={{ listStyle: "none", padding: 0, marginBottom: 22 }}>
                {plan.features.map((f, j) => (
                  <li key={j} style={{
                    color: "#fff", fontSize: 16, marginBottom: 8, fontWeight: 500, letterSpacing: 0.5
                  }}>
                    {f}
                  </li>
                ))}
              </ul>
              <button style={{
                background: "#d4af37", color: "#111", fontWeight: 900, fontSize: 17,
                border: "none", borderRadius: 14, padding: "12px 38px", marginTop: 8, cursor: "pointer"
              }}>
                升級
              </button>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 40, color: "#d4af37", fontSize: 16, textAlign: "center", fontWeight: 800 }}>
          NUMINA 會員方案：提升曝光、創作收益最大化、2%收益自動做公益，<br />
          所有會員皆享有不限數量內容發佈，打造宇宙級公平創作平台！
        </div>
      </div>
    </div>
  );
}

