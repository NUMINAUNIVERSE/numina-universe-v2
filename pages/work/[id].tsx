import React from "react";
import { useRouter } from "next/router";

// 假資料，可後續串接API
const fakeWorks = [
  {
    id: "101",
    type: "BlogeBook",
    title: "量子心靈漫遊",
    author: "Aurora Lin",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    cover: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    date: "2025-06-14",
    tags: ["靈性", "科幻"],
    intro: "一場穿越時空的心靈之旅，AI與人類的交匯。",
    cards: [
      { type: "text", value: "這是一段感性開場，討論AI時代的人類價值…" },
      { type: "image", value: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99" },
      { type: "ebook", value: "https://www.gutenberg.org/files/84/84-0.txt" },
      { type: "text", value: "「未來，由人類與AI共同開創！」" }
    ],
    viewCount: 680,
    likeCount: 89,
    commentCount: 4
  },
  {
    id: "102",
    type: "WonderLand",
    title: "宇宙插畫集",
    author: "Chris Wu",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    cover: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa",
    date: "2025-06-13",
    tags: ["插畫", "科幻", "療癒"],
    intro: "異世界角色×星雲插畫，療癒你每一天！",
    images: [
      "https://images.unsplash.com/photo-1549880186-7e059c6f9e99",
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308"
    ],
    viewCount: 520,
    likeCount: 67,
    commentCount: 2
  }
];

export default function WorkDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const work = fakeWorks.find(w => w.id === id) || fakeWorks[0]; // 預設顯示第一篇
  return (
    <div style={{ background: "#0D1A2D", minHeight: "100vh", color: "#fff", fontFamily: "Poppins,Noto Sans TC,sans-serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "50px 10px 32px" }}>
        {/* 標題區與作者 */}
        <div style={{ display: "flex", gap: 18, alignItems: "center", marginBottom: 18 }}>
          <img src={work.avatar} alt={work.author} style={{ width: 60, height: 60, borderRadius: "50%", border: "2px solid #d4af37", objectFit: "cover" }} />
          <div>
            <div style={{ fontSize: 28, fontWeight: 900, color: "#fff", letterSpacing: 2 }}>{work.title}</div>
            <div style={{ color: "#d4af37", fontWeight: 700 }}>{work.author} ｜ {work.date} ｜ <span style={{ fontWeight: 600, fontSize: 15 }}>{work.tags.map(t => <span key={t} style={{ marginRight: 6 }}>#{t}</span>)}</span></div>
            <div style={{ color: "#d4af37", fontSize: 14, fontWeight: 800, marginTop: 4 }}>{work.type}</div>
          </div>
        </div>
        {/* 封面圖+簡介 */}
        <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 24 }}>
          <img src={work.cover} alt={work.title} style={{
            width: 130, height: 94, objectFit: "cover", borderRadius: 13, border: "2px solid #d4af37"
          }} />
          <div style={{ fontSize: 17, color: "#fff", fontWeight: 500 }}>{work.intro}</div>
        </div>
        {/* 內容卡片（BlogeBook） */}
        {work.type === "BlogeBook" && work.cards && work.cards.map((c, i) => (
          <div key={i} style={{
            background: "#162346", borderRadius: 12, padding: "18px", marginBottom: 12
          }}>
            {c.type === "text" && <div style={{ fontSize: 17, marginBottom: 8 }}>{c.value}</div>}
            {c.type === "image" && <img src={c.value} style={{
              width: "100%", maxWidth: 380, borderRadius: 8, border: "1px solid #d4af37", margin: "8px 0"
            }} alt="插圖" />}
            {c.type === "ebook" && <a href={c.value} style={{
              color: "#d4af37", textDecoration: "underline", fontWeight: 800
            }} target="_blank" rel="noopener noreferrer">📖 點我閱讀內嵌電子書</a>}
          </div>
        ))}
        {/* WonderLand 作品：插圖/漫畫區 */}
        {work.type === "WonderLand" && work.images && (
          <div style={{ display: "flex", gap: 20, overflowX: "auto", marginBottom: 14 }}>
            {work.images.map((img, i) => (
              <img key={i} src={img} alt={`wonder-${i}`} style={{
                width: 200, height: 140, objectFit: "cover", borderRadius: 14, border: "2px solid #d4af37"
              }} />
            ))}
          </div>
        )}
        {/* 互動區 */}
        <div style={{ display: "flex", gap: 22, alignItems: "center", marginTop: 18 }}>
          <span style={{ color: "#d4af37", fontWeight: 700 }}>👍 {work.likeCount}</span>
          <span style={{ color: "#d4af37", fontWeight: 700 }}>💬 {work.commentCount}</span>
          <span style={{ color: "#d4af37", fontWeight: 700 }}>👀 {work.viewCount}</span>
          <button style={{
            background: "#d4af37", color: "#111", fontWeight: 800, border: "none", borderRadius: 10, padding: "6px 20px", marginLeft: 16
          }}>付費解鎖／訂閱作者</button>
        </div>
        {/* 留言區佔位 */}
        <div style={{ background: "#1b2847", borderRadius: 14, padding: "16px", marginTop: 34 }}>
          <div style={{ fontWeight: 900, color: "#d4af37", marginBottom: 10, fontSize: 18 }}>留言區（敬請期待互動 MVP！）</div>
          <div style={{ color: "#ccc" }}>此區可留言、貼圖、@標註作者，NUMINA V2 功能逐步啟動！</div>
        </div>
      </div>
    </div>
  );
}

