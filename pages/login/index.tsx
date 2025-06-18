import React from "react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div style={{ background: "#0D1A2D", minHeight: "100vh", color: "#fff", fontFamily: "Poppins, Noto Sans TC, sans-serif" }}>
      <div style={{ maxWidth: 460, margin: "0 auto", padding: "80px 10px" }}>
        <div style={{ textAlign: "center", fontSize: 36, fontWeight: 900, color: "#d4af37", marginBottom: 30 }}>
          登入 NUMINA
        </div>

        {/* Google 登入 */}
        <button style={{
          width: "100%", padding: 16, borderRadius: 14, border: "none", fontWeight: 800, fontSize: 16,
          background: "#d4af37", color: "#111", marginBottom: 26
        }}>
          使用 Google 帳號登入
        </button>

        {/* Email 登入 */}
        <div style={{ background: "#162346", borderRadius: 14, padding: "20px 26px", boxShadow: "0 1px 12px #d4af3724" }}>
          <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>使用 Email 登入：</div>
          <input type="email" placeholder="Email" style={{
            width: "100%", padding: 12, borderRadius: 10, border: "none", marginBottom: 14,
            background: "#131c2f", color: "#fff", fontSize: 15
          }} />
          <input type="password" placeholder="密碼" style={{
            width: "100%", padding: 12, borderRadius: 10, border: "none", marginBottom: 14,
            background: "#131c2f", color: "#fff", fontSize: 15
          }} />
          <button style={{
            width: "100%", padding: 14, borderRadius: 10, border: "none", fontWeight: 800, fontSize: 16,
            background: "#d4af37", color: "#111"
          }}>
            登入
          </button>
        </div>

        <div style={{ textAlign: "center", marginTop: 24, fontSize: 14 }}>
          還沒有帳號？{" "}
          <Link href="/register">
            <span style={{ color: "#d4af37", fontWeight: 700, textDecoration: "underline", cursor: "pointer" }}>
              立即註冊
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
