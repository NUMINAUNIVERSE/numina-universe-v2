import React, { useState } from "react";

const mockOrders = [
  { id: 1, user: "小明", product: "夢境之書", amount: 120, status: "已付款", date: "2025/06/20" },
  { id: 2, user: "Sandy", product: "星辰插畫", amount: 300, status: "待付款", date: "2025/06/21" }
];

export default function OrderAdminPage() {
  const [orders, setOrders] = useState(mockOrders);

  const markPaid = (id: number) => {
    setOrders(orders => orders.map(o => o.id === id ? { ...o, status: "已付款" } : o));
  };

  return (
    <div style={{ background: "#0D1A2D", minHeight: "100vh", color: "#fff", fontFamily: "Poppins,Noto Sans TC,sans-serif" }}>
      <div style={{ maxWidth: 840, margin: "0 auto", padding: "58px 10px 38px" }}>
        <div style={{
          fontSize: 32, fontWeight: 900, color: "#d4af37",
          textAlign: "center", marginBottom: 32
        }}>
          NUMINA UNIVERSE 訂單／金流管理
        </div>
        <div style={{
          background: "#162346", borderRadius: 20, padding: "32px 26px",
          boxShadow: "0 1px 12px #d4af3720"
        }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 17 }}>
            <thead>
              <tr>
                <th style={{ color: "#d4af37", fontWeight: 700 }}>訂單編號</th>
                <th style={{ color: "#d4af37", fontWeight: 700 }}>用戶</th>
                <th style={{ color: "#d4af37", fontWeight: 700 }}>商品/作品</th>
                <th style={{ color: "#d4af37", fontWeight: 700 }}>金額</th>
                <th style={{ color: "#d4af37", fontWeight: 700 }}>狀態</th>
                <th style={{ color: "#d4af37", fontWeight: 700 }}>日期</th>
                <th style={{ color: "#d4af37", fontWeight: 700 }}>操作</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(o => (
                <tr key={o.id} style={{ borderBottom: "1px solid #27304a" }}>
                  <td style={{ color: "#d4af37", fontWeight: 600, padding: "10px 0" }}>{o.id}</td>
                  <td>{o.user}</td>
                  <td>{o.product}</td>
                  <td>NT${o.amount}</td>
                  <td style={{ color: o.status === "已付款" ? "#d4af37" : "#fff176", fontWeight: 700 }}>{o.status}</td>
                  <td>{o.date}</td>
                  <td>
                    {o.status !== "已付款" && (
                      <button
                        style={{
                          background: "#d4af37", color: "#222",
                          fontWeight: 700, padding: "6px 14px", border: "none", borderRadius: 8,
                          cursor: "pointer", fontSize: 15
                        }}
                        onClick={() => markPaid(o.id)}
                      >
                        標記為已付款
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ marginTop: 25, color: "#d4af37", fontWeight: 600, textAlign: "center" }}>
            支援查詢/手動標記金流狀態，日後可串真實金流API
          </div>
        </div>
      </div>
    </div>
  );
}
