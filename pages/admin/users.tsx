import React, { useState } from "react";

const mockUsers = [
  { id: 1, name: "李小龍", email: "brucelee@gmail.com", role: "一般用戶", status: "啟用" },
  { id: 2, name: "星宇", email: "star.yu@mail.com", role: "創作者", status: "啟用" },
  { id: 3, name: "雨婷", email: "rainy.t@gmail.com", role: "一般用戶", status: "凍結" },
  { id: 4, name: "沛軒", email: "px.hsu@mail.com", role: "創作者", status: "啟用" },
  { id: 5, name: "Admin", email: "numina.universe@gmail.com", role: "管理員", status: "啟用" }
];

export default function UserAdminPage() {
  const [users, setUsers] = useState(mockUsers);

  const toggleStatus = (id: number) => {
    setUsers(u =>
      u.map(user =>
        user.id === id
          ? { ...user, status: user.status === "啟用" ? "凍結" : "啟用" }
          : user
      )
    );
  };

  return (
    <div style={{
      background: "#0D1A2D", minHeight: "100vh", color: "#fff", fontFamily: "Poppins,Noto Sans TC,sans-serif"
    }}>
      <div style={{ maxWidth: 840, margin: "0 auto", padding: "58px 10px 38px" }}>
        <div style={{
          fontSize: 32, fontWeight: 900, color: "#d4af37",
          textAlign: "center", marginBottom: 32
        }}>
          NUMINA UNIVERSE 用戶管理
        </div>
        <div style={{
          background: "#162346", borderRadius: 20, padding: "32px 26px",
          boxShadow: "0 1px 12px #d4af3720"
        }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 17 }}>
            <thead>
              <tr>
                <th style={{ color: "#d4af37", fontWeight: 700, paddingBottom: 10 }}>ID</th>
                <th style={{ color: "#d4af37", fontWeight: 700 }}>姓名</th>
                <th style={{ color: "#d4af37", fontWeight: 700 }}>Email</th>
                <th style={{ color: "#d4af37", fontWeight: 700 }}>角色</th>
                <th style={{ color: "#d4af37", fontWeight: 700 }}>狀態</th>
                <th style={{ color: "#d4af37", fontWeight: 700 }}>操作</th>
              </tr>
            </thead>
            <tbody>
              {users.map(u => (
                <tr key={u.id} style={{ borderBottom: "1px solid #27304a" }}>
                  <td style={{ color: "#d4af37", fontWeight: 600, padding: "10px 0" }}>{u.id}</td>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.role}</td>
                  <td style={{ color: u.status === "啟用" ? "#d4af37" : "#fff176", fontWeight: 700 }}>{u.status}</td>
                  <td>
                    <button
                      style={{
                        background: u.status === "啟用" ? "#fff176" : "#d4af37",
                        color: "#222", fontWeight: 700,
                        padding: "6px 16px", border: "none", borderRadius: 8,
                        cursor: "pointer", fontSize: 15
                      }}
                      onClick={() => toggleStatus(u.id)}
                    >
                      {u.status === "啟用" ? "凍結" : "啟用"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{
            marginTop: 25, color: "#d4af37", fontWeight: 600,
            textAlign: "center"
          }}>
            （點擊操作可即時切換帳號狀態）
          </div>
        </div>
      </div>

      {/* ----------- 追蹤任務表 ----------- */}
      <div style={{
        maxWidth: 740, margin: "60px auto 0", background: "#131c2f",
        color: "#fff", borderRadius: 14, padding: "24px 22px"
      }}>
        <div style={{ color: "#d4af37", fontWeight: 800, fontSize: 21, marginBottom: 12 }}>NUMINA UNIVERSE Test V2 進度追蹤</div>
        <ol style={{ fontSize: 17, lineHeight: 1.7, color: "#fff" }}>
          <li>首頁/品牌宣言/FAQ（已完成）</li>
          <li>條款／隱私政策頁（已完成）</li>
          <li>管理後台主頁（已完成）</li>
          <li>權限管理設定（已完成）</li>
          <li><b>用戶管理（本頁）</b></li>
          <li>創作者管理</li>
          <li>內容審核</li>
          <li>訂單／金流管理</li>
          <li>網站數據儀表板</li>
          <li>會員升級／曝光升級</li>
          <li>留言／群組聊天／貼圖／私訊</li>
          <li>BlogeBook/WonderLand/創作上傳功能</li>
          <li>…其餘需求功能</li>
        </ol>
      </div>
    </div>
  );
}
