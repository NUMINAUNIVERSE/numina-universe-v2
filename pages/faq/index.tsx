import React from "react";

const faqs = [
  {
    q: "NUMINA UNIVERSE 是什麼？",
    a: "NUMINA UNIVERSE 是全新世代的華人智慧原鄉，以神性宇宙感、AI 技術結合內容創作，讓每個人都能用最公平的方式，發表、分享並價值化你的知識、故事、插畫、漫畫、電子書與貼圖！"
  },
  {
    q: "BlogeBook 跟 WonderLand 有什麼不同？",
    a: "BlogeBook 星系是多元網誌、圖文電子書的主場，支援多內容卡片彈性組合。WonderLand 則是插畫、漫畫、貼圖、角色創作的異世界展區。兩大星系都能訂閱、購買、互動、打賞！"
  },
  {
    q: "如何付費訂閱或解鎖創作者內容？",
    a: "你可直接用信用卡、Apple Pay 或 Google Pay 購買單篇、訂閱創作者，系統自動計算收益並保障內容安全，未來支援多幣種、公益分潤。"
  },
  {
    q: "我可以免費使用嗎？容量有限嗎？",
    a: "是的！NUMINA 開放所有人免費註冊，初期不限制內容數量，鼓勵你勇敢創作。進階與超級會員可享有曝光提升、更多流量、置頂推薦等權益。"
  },
  {
    q: "NUMINA 平台安全嗎？",
    a: "採用國際級雲端架構、加密存儲與金流第三方串接，嚴格審核內容與防止侵權。你所有的作品都歸你所有，NUMINA 只做價值放大與公益支持。"
  },
  {
    q: "遇到問題可以找誰？",
    a: "請直接點擊本頁下方【聯絡我們】表單或信箱 numina.universe@gmail.com，創辦人團隊親自回覆所有用戶。"
  }
];

export default function FAQPage() {
  return (
    <div style={{ background: "#0D1A2D", minHeight: "100vh", color: "#fff", fontFamily: "Poppins,Noto Sans TC,sans-serif" }}>
      <div style={{ maxWidth: 740, margin: "0 auto", padding: "56px 10px 44px" }}>
        <div style={{
          fontSize: 34, fontWeight: 900, color: "#d4af37",
          letterSpacing: 2, marginBottom: 24, textAlign: "center"
        }}>
          FAQ・幫助中心
        </div>
        {faqs.map((item, i) => (
          <div key={i} style={{
            background: "#162346", borderRadius: 16, marginBottom: 20,
            padding: "20px 26px", boxShadow: "0 1px 12px #d4af3724"
          }}>
            <div style={{ fontWeight: 800, fontSize: 18, color: "#d4af37", marginBottom: 6 }}>
              Q{i + 1}：{item.q}
            </div>
            <div style={{ fontSize: 16, color: "#fff", lineHeight: 1.7 }}>{item.a}</div>
          </div>
        ))}
        <div style={{
          textAlign: "center", marginTop: 30,
          fontSize: 15, color: "#d4af37"
        }}>
          聯絡我們：<a href="mailto:numina.universe@gmail.com" style={{ color: "#d4af37", textDecoration: "underline", fontWeight: 700 }}>numina.universe@gmail.com</a>
        </div>
      </div>
    </div>
  );
}

