import React from "react";

export default function FAQPage() {
  return (
    <div style={{
      background: "#0D1A2D", minHeight: "100vh", color: "#fff",
      fontFamily: "Poppins,Noto Sans TC,sans-serif"
    }}>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "58px 16px 40px" }}>
        <div style={{
          fontSize: 32, fontWeight: 900, color: "#d4af37",
          marginBottom: 22, textAlign: "center"
        }}>
          NUMINA UNIVERSE FAQ / 幫助中心
        </div>

        {/* 品牌宣言 */}
        <div style={{
          background: "#162346", borderRadius: 18, padding: "30px 26px",
          color: "#fff", boxShadow: "0 1px 10px #d4af3720", fontSize: 18, marginBottom: 40
        }}>
          <div style={{ fontWeight: 800, color: "#d4af37", fontSize: 20, marginBottom: 10 }}>品牌宣言</div>
          <div>
            <span style={{ color: "#d4af37", fontWeight: 700 }}>NUMINA UNIVERSE</span>
            ，是 AI 時代的智慧原鄉，我們以人為本，利用科技幫助人類，提升人類價值。這不只是平台，更是一場人類文明的進化。<br />
            <br />
            我們要帶領世界由
            <span style={{ color: "#d4af37" }}>「注意力經濟」</span>
            走向
            <span style={{ color: "#d4af37" }}>「價值經濟」</span>
            ，共創公平、多元、神性宇宙級的未來。
          </div>
        </div>

        {/* FAQ 常見問題 */}
        <div style={{
          background: "#162346", borderRadius: 18, padding: "30px 26px",
          color: "#fff", boxShadow: "0 1px 10px #d4af3720", fontSize: 17, marginBottom: 35
        }}>
          <div style={{ fontWeight: 800, color: "#d4af37", fontSize: 19, marginBottom: 12 }}>
            常見問題 FAQ
          </div>
          <ul style={{ marginLeft: 16, marginBottom: 0, lineHeight: 2 }}>
            <li>
              <span style={{ color: "#d4af37", fontWeight: 700 }}>Q：</span>
              如何註冊與登入 NUMINA UNIVERSE？
              <br />
              <span style={{ color: "#fff", fontWeight: 500 }}>A：</span>
              可用 Google 或 Email 快速註冊／登入，加入會員即可享用全部功能。
            </li>
            <li>
              <span style={{ color: "#d4af37", fontWeight: 700 }}>Q：</span>
              創作者如何上傳 BlogeBook 或 WonderLand 作品？
              <br />
              <span style={{ color: "#fff", fontWeight: 500 }}>A：</span>
              登入後進入「創作上傳中心」，選擇要上傳的星系即可彈性編輯各式作品。
            </li>
            <li>
              <span style={{ color: "#d4af37", fontWeight: 700 }}>Q：</span>
              收益如何領取？平台怎麼分潤？
              <br />
              <span style={{ color: "#fff", fontWeight: 500 }}>A：</span>
              平台抽成 25%，2%收益做公益，餘額可累積到一定金額後申請提款至個人帳戶。
            </li>
            <li>
              <span style={{ color: "#d4af37", fontWeight: 700 }}>Q：</span>
              內容安全嗎？平台如何保障權益？
              <br />
              <span style={{ color: "#fff", fontWeight: 500 }}>A：</span>
              NUMINA 以多重資料備份及人工智慧審核，確保內容安全且創作者擁有自主權。
            </li>
            <li>
              <span style={{ color: "#d4af37", fontWeight: 700 }}>Q：</span>
              如果遇到問題或檢舉侵權怎麼辦？
              <br />
              <span style={{ color: "#fff", fontWeight: 500 }}>A：</span>
              可用網站聯絡表單或寄信至 numina.universe@gmail.com，團隊將盡速協助。
            </li>
          </ul>
        </div>

        {/* 聯絡資訊 */}
        <div style={{
          background: "#131c2f", borderRadius: 14, padding: "18px 18px",
          textAlign: "center", fontWeight: 600, color: "#d4af37", fontSize: 16
        }}>
          更多問題，歡迎來信：numina.universe@gmail.com
        </div>
      </div>
    </div>
  );
}

