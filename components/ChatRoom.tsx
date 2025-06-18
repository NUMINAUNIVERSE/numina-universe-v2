import React, { useState } from "react";

const demoMsgs = [
  { from: "你", text: "NUMINA UNIVERSE 超神性！", sticker: "" },
  { from: "星野光", text: "期待V2開放！", sticker: "" },
  { from: "艾莉絲", text: "", sticker: "https://em-content.zobj.net/source/microsoft-teams/363/star_2b50.png" }
];

export default function ChatRoom() {
  const [messages, setMessages] = useState(demoMsgs);
  const [input, setInput] = useState("");
  // 貼圖送出範例
  function sendSticker(url: string) {
    setMessages([...messages, { from: "你", text: "", sticker: url }]);
  }
  function sendMsg() {
    if (input.trim()) setMessages([...messages, { from: "你", text: input, sticker: "" }]);
    setInput("");
  }
  return (
    <div style={{
      background: "#1a2336", borderRadius: 16, maxWidth: 500, margin: "30px auto",
      boxShadow: "0 2px 12px #d4af3720", padding: 25, color: "#fff"
    }}>
      <div style={{ fontWeight: 800, color: "#d4af37", fontSize: 22, marginBottom: 12 }}>聊天室</div>
      <div style={{
        height: 240, overflowY: "auto", marginBottom: 14, background: "#182036", borderRadius: 10, padding: "12px 10px"
      }}>
        {messages.map((m, idx) => (
          <div key={idx} style={{ marginBottom: 11, textAlign: m.from === "你" ? "right" : "left" }}>
            <span style={{ fontWeight: 700, color: "#fff176" }}>{m.from}</span>{" "}
            {m.text && <span style={{ color: "#fff" }}>{m.text}</span>}
            {m.sticker && <img src={m.sticker} alt="貼圖" style={{ width: 38, verticalAlign: "middle", marginLeft: 7 }} />}
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        <input
          type="text" value={input}
          placeholder="輸入訊息"
          style={{ flex: 1, borderRadius: 8, border: "none", padding: "7px 10px", fontSize: 16 }}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && sendMsg()}
        />
        <button onClick={sendMsg} style={{
          background: "#d4af37", color: "#2d2e36", fontWeight: 700, border: "none",
          borderRadius: 7, fontSize: 16, padding: "7px 15px", cursor: "pointer"
        }}>送出</button>
        <button onClick={() => sendSticker("https://em-content.zobj.net/source/microsoft-teams/363/star_2b50.png")}
          style={{
            background: "none", border: "none", cursor: "pointer"
          }}>
          <img src="https://em-content.zobj.net/source/microsoft-teams/363/star_2b50.png" alt="貼圖" style={{ width: 34 }} />
        </button>
      </div>
    </div>
  );
}
