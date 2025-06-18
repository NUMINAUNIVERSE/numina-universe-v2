import React, { useState } from "react";

const mockCreators = [
  { id: 101, name: "天空之城", email: "castle@numina.com", level: "VIP創作者", status: "啟用", featured: true },
  { id: 102, name: "妮可", email: "nicole@numina.com", level: "一般創作者", status: "啟用", featured: false },
  { id: 103, name: "光之畫師", email: "light@numina.com", level: "超級VIP", status: "凍結", featured: false }
];

export default function CreatorAdminPage() {
  const [creators, setCreators] = useState(mockCreators);

  const toggleStatus = (id: number) => {
    setCreators(c =>
      c.map(creator =>
        creator.id === id
          ? { ...creator, status: creator.status === "啟用" ? "凍結" : "啟用" }
          : creator
      )
    );
  };
  const toggleFeatured = (id: number) => {
    setCreators(c =>
      c.map(creator =>
        creator.id === id
          ? { ...creator, featured: !creator.featured }
          : creator
      )
    );
  };

  return (
    <div style={{ background: "#0D1A2D", minHeight: "100vh", color: "#fff", fontFamily: "Poppins,Noto Sans TC,sans-serif" }}>
      <div style={{ maxWidth: 840, margin: "0 auto", padding: "58px 10px 38px" }}>
        <div style={{
          fontSize: 32, fontWeight: 900, color: "#d4af37",
          textAlign: "center", marginBottom: 32
        }}>
          NUMINA UNIVERSE 創作者管理
        </div>
        <div style={{
          background: "#162346", borderRadius: 20, padding: "32px 26px",
          boxShadow: "0 1px 12px #d4af3720"
        }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 17 }}>
            <thead>
              <tr>
                <th style={{ color: "#d4af37", fontWeight: 700 }}>ID</th>
                <th style={{ color: "#d4af37", fontWeight: 700 }}>名稱</th>
                <th style={{ color: "#d4af37", fontWeight: 700 }}>Email</th>
                <th style={{ color: "#d4af37", fontWeight: 700 }}>等級</th>
                <th style={{ color: "#d4af37", fontWeight: 700 }}>精選作者</th>
                <th style={{ color: "#d4af37", fontWeight: 700 }}>狀態</th>
                <th style={{ color: "#d4af37", fontWeight: 700 }}>操作</th>
              </tr>
            </thead>
            <tbody>
              {creators.map(c => (
                <tr key={c.id} style={{ borderBottom: "1px solid #27304a" }}>
                  <td style={{ color: "#d4af37", fontWeight: 600, padding: "10px 0" }}>{c.id}</td>
                  <td>{c.name}</td>
                  <td>{c.email}</td>
                  <td>{c.level}</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={c.featured}
                      onChange={() => toggleFeatured(c.id)}
                      style={{ accentColor: "#d4af37", width: 20, height: 20 }}
                    />
                  </td>
                  <td style={{ color: c.status === "啟用" ? "#d4af37" : "#fff176", fontWeight: 700 }}>{c.status}</td>
                  <td>
                    <button
                      style={{
                        background: c.status === "啟用" ? "#fff176" : "#d4af37",
                        color: "#222", fontWeight: 700,
                        padding: "6px 16px", border: "none", borderRadius: 8,
                        cursor: "pointer", fontSize: 15
                      }}
                      onClick={() => toggleStatus(c.id)}
                    >
                      {c.status === "啟用" ? "凍結" : "啟用"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ marginTop: 25, color: "#d4af37", fontWeight: 600, textAlign: "center" }}>
            可切換精選／狀態，後續可串審核等功能
          </div>
        </div>
      </div>
    </div>
  );
}

