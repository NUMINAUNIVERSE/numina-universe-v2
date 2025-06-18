import React from "react";

export default function CheckoutPage() {
  return (
    <div style={{ background: "#0D1A2D", minHeight: "100vh", color: "#fff", fontFamily: "Poppins,Noto Sans TC,sans-serif" }}>
      <div style={{ maxWidth: 500, margin: "0 auto", padding: "64px 12px 44px" }}>
        <div style={{ fontSize: 30, fontWeight: 900, color: "#d4af37", textAlign: "center", marginBottom: 28 }}>
          內容購買結帳
        </div>
        <div style={{
          background: "#162346", borderRadius: 20, padding: "24px 28px", boxShadow: "0 1px 12px #d4af3724"
        }}>
          <div style={{ fontSize: 19, fontWeight: 800, color: "#d4af37", marginBottom: 8 }}>
            🖼️ 作品：《宇宙魔法插畫集》
          </div>
          <div style={{ marginBottom: 10, fontWeight: 500 }}>作者：Lynn Liu</div>
          <div style={{ marginBottom: 16 }}>訂單金額：<span style={{ color: "#d4af37", fontWeight: 700 }}>NT$120</span></div>
          <div style={{ marginBottom: 18 }}>
            <span style={{ color: "#fff" }}>選擇付款方式：</span><br />
            <button style={{
              marginRight: 10, padding: "10px 20px", borderRadius: 8,
              border: "none", background: "#d4af37", color: "#222", fontWeight: 900, fontSize: 15
            }}>信用卡</button>
            <button style={{
              padding: "10px 20px", borderRadius: 8, border: "none",
              background: "#fff", color: "#111", fontWeight: 800, fontSize: 15, marginLeft: 8
            }}>Apple Pay</button>
            <button style={{
              padding: "10px 20px", borderRadius: 8, border: "none",
              background: "#131c2f", color: "#d4af37", fontWeight: 800, fontSize: 15, marginLeft: 8
            }}>Google Pay</button>
          </div>
          <button style={{
            width: "100%", padding: "14px 0", borderRadius: 12, border: "none",
            fontWeight: 900, fontSize: 17, background: "#d4af37", color: "#111", marginTop: 12
          }}>
            立即付款
          </button>
        </div>
        <div style={{ textAlign: "center", marginTop: 24, color: "#d4af37", fontWeight: 600 }}>
          完成付款即可開通所有內容，若遇問題請聯繫客服 numina.universe@gmail.com
        </div>
      </div>
    </div>
  );
}

