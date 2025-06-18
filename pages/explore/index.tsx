import React, { useState } from "react";

const demoData = [
  { type: "BlogeBook", title: "創意之海", author: "光子", tag: "創意", hot: true },
  { type: "WonderLand", title: "星際奇旅", author: "YUI", tag: "漫畫", hot: false },
  { type: "BlogeBook", title: "寫作日記", author: "JENNY", tag: "日常", hot: true },
  { type: "WonderLand", title: "神性貓咪", author: "TOMO", tag: "貼圖", hot: false },
];

const tags = ["全部", "創意", "漫畫", "日常", "貼圖"];
const types = ["全部", "BlogeBook", "WonderLand"];

export default function ExplorePage() {
  const [tag, setTag] = useState("全部");
  const [type, setType] = useState("全部");
  const [hot, setHot] = useState(false);
  const [author, setAuthor] = useState("");

  const filtered = demoData.filter(d =>
    (tag === "全部" || d.tag === tag) &&
    (type === "全部" || d.type === type) &&
    (!hot || d.hot) &&
    (!author || d.author.toLowerCase().includes(author.toLowerCase()))
  );
  return (
    <div style={{ background: "#0D1A2D", minHeight: "100vh", padding: 32, color: "#fff" }}>
      <div style={{ maxWidth: 860, margin: "0 auto", background: "#162031", borderRadius: 14, padding: 26 }}>
        <h2 style={{ color: "#d4af37", fontSize: 28, fontWeight: 900, marginBottom: 20 }}>探索/搜尋</h2>
        <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
          <select value={type} onChange={e => setType(e.target.value)} style={selStyle}>
            {types.map(t => <option key={t}>{t}</option>)}
          </select>
          <select value={tag} onChange={e => setTag(e.target.value)} style={selStyle}>
            {tags.map(t => <option key={t}>{t}</option>)}
          </select>
          <input type="text" value={author} onChange={e => setAuthor(e.target.value)}
            placeholder="搜尋作者" style={selStyle} />
          <label style={{ color: "#fff", fontWeight: 700 }}>
            <input type="checkbox" checked={hot} onChange={e => setHot(e.target.checked)} />
            只顯示熱門
          </label>
        </div>
        <div>
          {filtered.length ? filtered.map((d, idx) => (
            <div key={idx} style={{
              background: "#1c2434", border: "2px solid #d4af37", borderRadius: 10,
              marginBottom: 15, padding: "15px 18px"
            }}>
              <b style={{ color: "#fff176", fontSize: 18 }}>{d.title}</b>（{d.type}）
              <span style={{ color: "#d4af37", fontWeight: 600, marginLeft: 8 }}>{d.author}</span>
              <span style={{ background: "#d4af37", color: "#132244", borderRadius: 7, padding: "1px 8px", marginLeft: 8 }}>
                {d.tag}
              </span>
              {d.hot && <span style={{
                background: "#fff176", color: "#403801", borderRadius: 7, padding: "1px 6px", marginLeft: 10
              }}>熱門</span>}
            </div>
          )) : <div style={{ color: "#fff", textAlign: "center" }}>查無資料</div>}
        </div>
      </div>
    </div>
  );
}
const selStyle = {
  borderRadius: 8, border: "none", padding: "7px 12px", fontSize: 16, marginRight: 6, color: "#222"
};
