import React from "react";

const quickLinks = [
  { label: "用戶管理", path: "/admin/users" },
  { label: "創作者管理", path: "/admin/creators" },
  { label: "內容審核", path: "/admin/review" },
  { label: "訂單／金流管理", path: "/admin/orders" },
  { label: "權限管理設定", path: "/admin/permission" },
  { label: "網站數據儀表板", path: "/admin/dashboard" }
];

export default function AdminHome() {
  return (
    <div style={{
      background: "#0D1A2D", minHeight: "100vh", color: "#fff", fontFamily: "Poppins,Noto Sans TC,sans-serif"
    }}>
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "60px 20px 40px" }}>
        <div style={{
          fontSize: 33, fontWeight: 900, color: "#d4af37", letterSpacing: 2,
          textAlign: "center", marginBottom: 30
        }}>
          NUMINA UNIVERSE 管理後台主頁
        </div>
        <div style={{
          background: "#162346", borderRadius: 20, padding: "38px 32px",
          boxShadow: "0 1px 16px #d4af3724"
        }}>
          <div style={{ fontSize: 21, color: "#d4af37", fontWeight: 800, marginBottom: 18 }}>
            管理總覽
          </div>
          <ul style={{ margin: 0, padding: 0, listStyle: "none", fontSize: 18 }}>
            <li style={{ marginBottom: 22, color: "#fff" }}>
              👤 <b>全站註冊用戶：</b> <span style={{ color: "#d4af37" }}>1,823</span>
            </li>
            <li style={{ marginBottom: 22, color: "#fff" }}>
              🧑‍🎨 <b>創作者總數：</b> <span style={{ color: "#d4af37" }}>471</span>
            </li>
            <li style={{ marginBottom: 22, color: "#fff" }}>
              📝 <b>作品總量：</b> <span style={{ color: "#d4af37" }}>8,940</span>
            </li>
            <li style={{ marginBottom: 22, color: "#fff" }}>
              💰 <b>累積營收：</b> <span style={{ color: "#d4af37" }}>NT$1,920,000</span>
            </li>
            <li style={{ color: "#fff" }}>
              ⏰ <b>本月活躍用戶：</b> <span style={{ color: "#d4af37" }}>617</span>
            </li>
          </ul>
          <div style={{ margin: "34px 0 20px", borderTop: "1px solid #d4af3755" }} />
          <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 14, color: "#fff" }}>
            快速前往管理功能：
          </div>
          <div style={{
            display: "flex", flexWrap: "wrap", gap: 18
          }}>
            {quickLinks.map(l => (
              <a key={l.path} href={l.path} style={{
                background: "#d4af37", color: "#162346", fontWeight: 900, padding: "13px 25px",
                borderRadius: 12, fontSize: 17, textDecoration: "none", transition: "0.15s",
                boxShadow: "0 1px 8px #d4af3714"
              }}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
