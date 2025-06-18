import React, { useState } from "react";

type BlockType = "text" | "image" | "ebook" | "sticker" | "audio";
interface Block {
  type: BlockType;
  content: string;
}

const initialBlocks: Block[] = [
  { type: "text", content: "" }
];

export default function EditorPage() {
  const [blocks, setBlocks] = useState<Block[]>(initialBlocks);

  function addBlock(type: BlockType) {
    setBlocks([...blocks, { type, content: "" }]);
  }
  function updateBlock(idx: number, content: string) {
    setBlocks(blocks.map((b, i) => (i === idx ? { ...b, content } : b)));
  }
  function removeBlock(idx: number) {
    setBlocks(blocks.filter((_, i) => i !== idx));
  }
  function moveBlock(idx: number, dir: "up" | "down") {
    const newBlocks = [...blocks];
    const [removed] = newBlocks.splice(idx, 1);
    newBlocks.splice(dir === "up" ? idx - 1 : idx + 1, 0, removed);
    setBlocks(newBlocks);
  }
  return (
    <div style={{ background: "#0D1A2D", minHeight: "100vh", padding: 32 }}>
      <div style={{ maxWidth: 720, margin: "0 auto", background: "#162031", borderRadius: 18, padding: 30 }}>
        <h2 style={{ color: "#d4af37", fontSize: 30, fontWeight: 900, marginBottom: 18 }}>創作進階編輯器</h2>
        {blocks.map((block, idx) => (
          <div key={idx} style={{ background: "#192a41", borderRadius: 10, padding: 16, marginBottom: 15, position: "relative" }}>
            <div style={{ marginBottom: 8 }}>
              <span style={{
                color: "#d4af37", fontWeight: 700, fontSize: 16, marginRight: 9
              }}>
                {({
                  text: "文字段落",
                  image: "圖片",
                  ebook: "電子書",
                  sticker: "貼圖",
                  audio: "音檔"
                } as any)[block.type]}
              </span>
              <button onClick={() => removeBlock(idx)} style={{
                color: "#e05a5a", border: "none", background: "none", marginRight: 7, fontSize: 15, cursor: "pointer"
              }}>刪除</button>
              <button onClick={() => idx > 0 && moveBlock(idx, "up")} disabled={idx === 0} style={{
                marginRight: 4, fontSize: 15, cursor: "pointer"
              }}>↑</button>
              <button onClick={() => idx < blocks.length - 1 && moveBlock(idx, "down")} disabled={idx === blocks.length - 1} style={{
                fontSize: 15, cursor: "pointer"
              }}>↓</button>
            </div>
            {block.type === "text" && (
              <textarea
                style={{ width: "100%", minHeight: 60, borderRadius: 6, fontSize: 16, padding: 7 }}
                placeholder="輸入文字內容..."
                value={block.content}
                onChange={e => updateBlock(idx, e.target.value)}
              />
            )}
            {block.type === "image" && (
              <input type="url" placeholder="貼上圖片網址（MVP版）"
                style={{ width: "100%", borderRadius: 6, padding: 7 }}
                value={block.content}
                onChange={e => updateBlock(idx, e.target.value)}
              />
            )}
            {block.type === "ebook" && (
              <input type="url" placeholder="電子書/檔案連結"
                style={{ width: "100%", borderRadius: 6, padding: 7 }}
                value={block.content}
                onChange={e => updateBlock(idx, e.target.value)}
              />
            )}
            {block.type === "sticker" && (
              <input type="url" placeholder="貼圖網址"
                style={{ width: "100%", borderRadius: 6, padding: 7 }}
                value={block.content}
                onChange={e => updateBlock(idx, e.target.value)}
              />
            )}
            {block.type === "audio" && (
              <input type="url" placeholder="音檔連結"
                style={{ width: "100%", borderRadius: 6, padding: 7 }}
                value={block.content}
                onChange={e => updateBlock(idx, e.target.value)}
              />
            )}
          </div>
        ))}
        <div style={{ marginBottom: 20 }}>
          <button style={btnStyle} onClick={() => addBlock("text")}>+ 文字</button>
          <button style={btnStyle} onClick={() => addBlock("image")}>+ 圖片</button>
          <button style={btnStyle} onClick={() => addBlock("ebook")}>+ 電子書</button>
          <button style={btnStyle} onClick={() => addBlock("sticker")}>+ 貼圖</button>
          <button style={btnStyle} onClick={() => addBlock("audio")}>+ 音檔</button>
        </div>
        <button style={{ ...btnStyle, background: "#d4af37", color: "#132244", fontWeight: 700 }}>發佈作品</button>
      </div>
    </div>
  );
}
const btnStyle = {
  background: "#212946", color: "#d4af37", border: "2px solid #d4af37", fontWeight: 700,
  borderRadius: 7, fontSize: 16, padding: "7px 15px", marginRight: 8, marginBottom: 10, cursor: "pointer"
};

