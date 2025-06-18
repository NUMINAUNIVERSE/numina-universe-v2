import React, { useState } from "react";

const mockRoles = [
  { role: "管理員", key: "admin" },
  { role: "創作者", key: "creator" },
  { role: "一般用戶", key: "user" }
];

const mockPermissions = [
  { key: "upload_blogebook", label: "上傳 BlogeBook" },
  { key: "upload_wonderland", label: "上傳 WonderLand 作品" },
  { key: "留言／評論", label: "發表留言／貼圖" },
  { key: "群組聊天", label: "參加群組聊天室" },
  { key: "私訊聊天", label: "私訊功能" },
  { key: "購買／打賞", label: "購買／打賞內容" },
  { key: "管理後台", label: "管理後台功能" }
];

// 明確定義角色 Key 型別
type RoleKey = "admin" | "creator" | "user";
type PermissionState = { [key in RoleKey]: boolean[] };

const defaultPermissions: PermissionState = {
  admin: [true, true, true, true, true, true, true],
  creator: [true, true, true, true, true, true, false],
  user: [false, false, true, true, true, true, false]
};

export default function PermissionPage() {
  // useState 型別註明
  const [permissions, setPermissions] = useState<PermissionState>(defaultPermissions);

  // 參數 roleKey 明確為 RoleKey
  const toggle = (roleKey: RoleKey, i: number) => {
    setPermissions(p => ({
      ...p,
      [roleKey]: p[roleKey].map((v, idx) => (idx === i ? !v : v))
    }));
  };

  return (
    <div style={{
      background: "#0D1A2D", minHeight: "100vh", color: "#fff",
      fontFamily: "Poppins,Noto Sans TC,sans-serif"
    }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "60px 10px 50px" }}>
        <div style={{
          fontSize: 33, fontWeight: 900, color: "#d4af37", letterSpacing: 2,
          textAlign: "center", marginBottom: 32
        }}>
          NUMINA UNIVERSE 權限管理設定
        </div>
        <div style={{
          background: "#162346", borderRadius: 20, padding: "34px 24px",
          boxShadow: "0 1px 16px #d4af3728"
        }}>
          <div style={{ fontWeight: 800, color: "#d4af37", fontSize: 20, marginBottom: 18 }}>
            功能權限表
          </div>
          <table style={{
            width: "100%", borderCollapse: "collapse", marginTop: 14
          }}>
            <thead>
              <tr>
                <th style={{ textAlign: "left", color: "#d4af37", fontSize: 17, paddingBottom: 10 }}></th>
                {mockRoles.map(r => (
                  <th key={r.key} style={{ color: "#d4af37", fontWeight: 700, fontSize: 17 }}>{r.role}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {mockPermissions.map((perm, i) => (
                <tr key={perm.key} style={{ borderBottom: "1px solid #222a3d" }}>
                  <td style={{
                    color: "#fff", padding: "11px 8px", fontWeight: 600
                  }}>{perm.label}</td>
                  {mockRoles.map(r => (
                    <td key={r.key} style={{ textAlign: "center" }}>
                      <label style={{ cursor: "pointer" }}>
                        <input
                          type="checkbox"
                          checked={permissions[r.key as RoleKey][i]}
                          onChange={() => toggle(r.key as RoleKey, i)}
                          style={{
                            accentColor: "#d4af37",
                            width: 21, height: 21
                          }}
                        />
                      </label>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{
            marginTop: 28, textAlign: "center", color: "#d4af37", fontWeight: 700
          }}>
            權限變更將即時套用（僅管理員可見此頁）
          </div>
        </div>
      </div>
    </div>
  );
}

