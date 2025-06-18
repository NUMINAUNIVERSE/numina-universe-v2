import React, { useState } from "react";

const mockWorks = [
  { id: 1001, title: "夢境之書", author: "妮可", type: "BlogeBook", status: "待審核" },
  { id: 1002, title: "星辰插畫", author: "光之畫師", type: "WonderLand", status: "待審核" }
];

export default function ContentReviewPage() {
  const [works, setWorks] = useState(mockWorks);

  const approve = (id: number) => {
    setWorks(ws => ws.map(w => w.id === id ? { ...w, status: "已通過" } : w));
  };
  const reject = (id: number) => {
    setWorks(ws => ws.map(w => w.id === id ? { ...w, status: "已拒絕" } : w));
  };

  return (
    <div style={{ background: "#0D1A2D", minHeight: "100vh", color: "#fff", fontFamily: "Poppins,Noto Sans TC,sans-serif" }}>
      <div style={{ maxWidth: 840, margin: "0 auto", padding: "58px 10px 38px" }}>
        <div style={{
          fontSize: 32, fontWeight: 900, color: "#d4af37",
          textAlign: "center", marginBottom: 32
        }}>
          NUMINA UNIVERSE 內容審核
        </div>
        <div style={{
          background: "#162346", borderRadius: 20, padding: "32px 26px",
          boxShadow: "0 1px 12px #d4af3720"
        }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 17 }}>
            <thead>
              <tr>
                <th style={{ color: "#d4af37", fontWeight: 700 }}>ID</th>
                <th style={{ color: "#d4af37", fontWeight: 700 }}>標題</th>
                <th style={{ color: "#d4af37", fontWeight: 700 }}>作者</th>
                <th style={{ color: "#d4af37", fontWeight: 700 }}>類型</th>
                <th style={{ color: "#d4af37", fontWeight: 700 }}>狀態</th>
                <th style={{ color: "#d4af37", fontWeight: 700 }}>操作</th>
              </tr>
            </thead>
            <tbody>
              {works.map(w => (
                <tr key={w.id} style={{ borderBottom: "1px solid #27304a" }}>
                  <td style={{ color: "#d4af37", fontWeight: 600, padding: "10px 0" }}>{w.id}</td>
                  <td>{w.title}</td>
                  <td>{w.author}</td>
                  <td>{w.type}</td>
                  <td style={{ color: w.status === "待審核" ? "#fff176" : "#d4af37", fontWeight: 700 }}>{w.status}</td>
                  <td>
                    {w.status === "待審核" ? (
                      <>
                        <button
                          style={{
                            background: "#d4af37", color: "#222",
                            fontWeight: 700, padding: "6px 14px", border: "none", borderRadius: 8,
                            cursor: "pointer", fontSize: 15, marginRight: 8
                          }}
                          onClick={() => approve(w.id)}
                        >
                          通過
                        </button>
                        <button
                          style={{
                            background: "#fff176", color: "#222",
                            fontWeight: 700, padding: "6px 14px", border: "none", borderRadius: 8,
                            cursor: "pointer", fontSize: 15
                          }}
                          onClick={() => reject(w.id)}
                        >
                          拒絕
                        </button>
                      </>
                    ) : (
                      <span>-</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ marginTop: 25, color: "#d4af37", fontWeight: 600, textAlign: "center" }}>
            作品待審核時可通過/拒絕，未來可接 AI 審查/人工審查流程
          </div>
        </div>
      </div>
    </div>
  );
}

