import React, { useState } from "react"

const fakeCreator = {
  name: "星界創作者 Sharon Liu",
  avatar: "https://randomuser.me/api/portraits/women/32.jpg",
  intro: "宇宙靈感、畫作與知識的探索者，NUMINA 讓我找到共鳴！",
  isSubscribed: false,
  blogebooks: [
    {
      id: 1,
      title: "靈性之書",
      cover: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
      intro: "結合東西方神祕學的靈魂旅程，書中文字與插畫交融。",
      date: "2025-06-16",
      views: 3092,
      likes: 122,
    },
    {
      id: 2,
      title: "AI夢境日誌",
      cover: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
      intro: "AI生成夢境，科技與藝術的交錯。",
      date: "2025-06-14",
      views: 1502,
      likes: 63,
    },
  ],
  wonderlands: [
    {
      id: 3,
      title: "星河守護獸",
      cover: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa",
      intro: "原創插畫系列，描繪想像中的宇宙靈獸。",
      date: "2025-06-13",
      views: 2457,
      likes: 77,
    },
    {
      id: 4,
      title: "幻彩神域",
      cover: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
      intro: "色彩斑斕的夢境世界。",
      date: "2025-06-12",
      views: 1122,
      likes: 51,
    },
  ]
}

export default function CreatorHome() {
  const [tab, setTab] = useState("BlogeBook")
  const [subscribed, setSubscribed] = useState(fakeCreator.isSubscribed)

  return (
    <div style={{background:'#0D1A2D',minHeight:'100vh',color:'#fff',fontFamily:'Poppins,Noto Sans TC,sans-serif'}}>
      <div style={{
        maxWidth:900,margin:'0 auto',padding:'48px 10px 20px'
      }}>
        {/* 創作者資訊區塊 */}
        <div style={{
          display:'flex',alignItems:'center',justifyContent:'space-between',gap:30,marginBottom:34
        }}>
          <div style={{display:'flex',alignItems:'center',gap:22}}>
            <img src={fakeCreator.avatar} style={{width:72,height:72,borderRadius:'50%',boxShadow:'0 2px 16px #d4af3755'}} />
            <div>
              <div style={{fontSize:30,fontWeight:900,letterSpacing:1.5,color:'#d4af37',marginBottom:5}}>
                {fakeCreator.name}
              </div>
              <div style={{fontSize:17,color:'#e5e7eb'}}>{fakeCreator.intro}</div>
            </div>
          </div>
          {/* 訂閱按鈕 */}
          <button
            style={{
              background: subscribed ? "#111" : "#d4af37",
              color: subscribed ? "#d4af37" : "#111",
              border: "none",
              borderRadius: 20,
              fontWeight: 900,
              fontSize: 18,
              padding: "10px 34px",
              cursor: "pointer",
              boxShadow: "0 1px 10px #d4af3740",
              transition:'0.2s'
            }}
            onClick={() => setSubscribed(!subscribed)}
          >
            {subscribed ? "已訂閱" : "訂閱"}
          </button>
        </div>
        {/* 星系分頁 */}
        <div style={{display:'flex',gap:28,marginBottom:30}}>
          <button
            style={{
              background: tab==="BlogeBook" ? "#d4af37" : "#1b2847",
              color: tab==="BlogeBook" ? "#111" : "#fff",
              border:'none',
              fontWeight:900,
              fontSize:19,
              borderRadius:16,
              padding:'8px 36px',
              cursor:'pointer',
              boxShadow:tab==="BlogeBook"?"0 2px 12px #d4af3760":"none",
              letterSpacing:1.2
            }}
            onClick={()=>setTab("BlogeBook")}
          >
            BlogeBook
          </button>
          <button
            style={{
              background: tab==="WonderLand" ? "#d4af37" : "#1b2847",
              color: tab==="WonderLand" ? "#111" : "#fff",
              border:'none',
              fontWeight:900,
              fontSize:19,
              borderRadius:16,
              padding:'8px 36px',
              cursor:'pointer',
              boxShadow:tab==="WonderLand"?"0 2px 12px #d4af3760":"none",
              letterSpacing:1.2
            }}
            onClick={()=>setTab("WonderLand")}
          >
            WonderLand
          </button>
        </div>
        {/* 作品清單 */}
        <div style={{display:'flex',flexDirection:'column',gap:30}}>
          {(tab==="BlogeBook"?fakeCreator.blogebooks:fakeCreator.wonderlands).map(w=>
            <div key={w.id} style={{
              background:'#162346',borderRadius:22,boxShadow:'0 2px 16px #1119',padding:'22px 20px',marginBottom:6,display:'flex',alignItems:'center',gap:22
            }}>
              <img src={w.cover} alt={w.title} style={{width:110,height:86,borderRadius:14,objectFit:'cover',boxShadow:'0 1px 8px #d4af3725',border:'2px solid #d4af37'}}/>
              <div style={{flex:1}}>
                <div style={{fontSize:19,fontWeight:900,color:'#fff'}}>{w.title}</div>
                <div style={{fontSize:15,color:'#d4af37',marginBottom:2}}>{w.date} ｜👁 {w.views} ｜❤ {w.likes}</div>
                <div style={{fontSize:15,color:'#ccc',marginBottom:4}}>{w.intro}</div>
                <a href={`/work/${w.id}`} style={{
                  color:'#d4af37',fontWeight:700,fontSize:15,textDecoration:'underline',marginTop:7,display:'inline-block'
                }}>閱讀全文</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

