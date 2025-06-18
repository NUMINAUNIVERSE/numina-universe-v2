import React from "react";

const orders = [
  {
    title: "宇宙魔法插畫集",
    author: "Lynn Liu",
    amount: "NT$120",
    date: "2025/06/13",
    status: "已完成"
  },
  {
    title: "知識原鄉 BlogeBook",
    author: "Allen Chou",
    amount: "NT$80",
    date: "2025/06/12",
    status: "已完成"
  }
];

export default function OrdersPage() {
  return (
    <div style={{ background: "#0D1A2D", minHeight: "100vh", color: "#fff", fontFamily: "Poppins,Noto Sans TC,sans-serif" }}>
      <div style={{ maxWidth: 700, margin: "0 auto", padding: "56px 10px 44px" }}>
        <div style={{
          fontSize: 32, fontWeight: 900, color: "#d4af37",
          marginBottom: 32, textAlign: "center"
        }}>
          我的訂單記錄
        </div>
        <table style={{
          width: "100%", background: "#162346", borderRadius: 16,
          overflow: "hidden", boxShadow: "0 1px 12px #d4af3724"
        }}>
          <thead>
            <tr style={{ background: "#1a2145" }}>
              <th style={{ padding: "14px 10px", color: "#d4af37", fontWeight: 800 }}>作品名稱</th>
              <th style={{ padding: "14px 10px", color: "#d4af37", fontWeight: 800 }}>作者</th>
              <th style={{ padding: "14px 10px", color: "#d4af37", fontWeight: 800 }}>金額</th>
              <th style={{ padding: "14px 10px", color: "#d4af37", fontWeight: 800 }}>日期</th>
              <th style={{ padding: "14px 10px", color: "#d4af37", fontWeight: 800 }}>狀態</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o, i) => (
              <tr key={i} style={{ borderBottom: "1px solid #2224" }}>
                <td style={{ padding: "13px 10px", fontWeight: 600 }}>{o.title}</td>
                <td style={{ padding: "13px 10px", fontWeight: 600 }}>{o.author}</td>
                <td style={{ padding: "13px 10px", color: "#d4af37", fontWeight: 800 }}>{o.amount}</td>
                <td style={{ padding: "13px 10px" }}>{o.date}</td>
                <td style={{ padding: "13px 10px", color: "#2eea95", fontWeight: 700 }}>{o.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ color: "#d4af37", fontSize: 14, marginTop: 18 }}>
          如需發票或訂單問題，請聯繫官方客服。
        </div>
      </div>
    </div>
  );
}

