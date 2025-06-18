import React from "react";

const plans = [
  { name: "曝光升級", desc: "在首頁/星系頁優先顯示，增加粉絲與訂閱", price: 399 },
  { name: "推播置頂", desc: "你的作品進入推播、置頂區，吸引更多曝光", price: 799 }
];

export default function ExposureBuyPage() {
  return (
    <div style={{ background: "#0D1A2D", minHeight: "100vh", padding: 32 }}>
      <div style={{ maxWidth: 600, margin: "0 auto", background: "#162031", borderRadius: 15, padding: 36 }}>
        <h2 style={{ color: "#d4af37", fontSize: 28, fontWeight: 900, marginBottom: 18 }}>曝光升級／推播購買</h2>
        <div style={{ display: "flex", gap: 22, flexDirection: "column" }}>
          {plans.map((p, idx) => (
            <div key={idx} style={{
              background: "#192a41", border: "2px solid #d4af37", borderRadius: 12, padding: 20, marginBottom: 10
            }}>
              <b style={{ color: "#fff176", fontSize: 18 }}>{p.name}</b>
              <p style={{ color: "#fff", margin: "7px 0" }}>{p.desc}</p>
              <div style={{ color: "#d4af37", fontWeight: 700, fontSize: 22, marginBottom: 6 }}>NT$ {p.price}</div>
              <button style={{
                background: "#d4af37", color: "#132244", borderRadius: 7, fontWeight: 700,
                fontSize: 16, padding: "7px 20px", border: "none", cursor: "pointer"
              }}>立即升級</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
