const feeds = [
  {
    author: "Jessie",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    title: "AI財富管理的本質",
    date: "2025-06-15",
    cover: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
    intro: "一篇結合金融科技與人性的深度好文。",
  },
  {
    author: "Yuta",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    title: "漫畫宇宙大冒險",
    date: "2025-06-16",
    cover: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
    intro: "跨界多元的漫畫新作，宇宙冒險再進化。",
  },
  // ...可多塞幾個假資料
];

const FollowedAuthorsFeed = () => (
  <section>
    <h2 style={{color:'#d4af37',fontSize:'1.5rem',marginBottom:16,fontWeight:700}}>你追蹤的作者動態</h2>
    <div style={{display:'flex',flexDirection:'column',gap:24}}>
      {feeds.map((f,i)=>(
        <div key={i} style={{
          background:'#1b2847',borderRadius:18,boxShadow:'0 2px 8px #1117',display:'flex',alignItems:'center',padding:18,gap:20
        }}>
          <img src={f.avatar} alt={f.author} style={{width:54,height:54,borderRadius:'50%',marginRight:10}}/>
          <div style={{flex:'1'}}>
            <div style={{color:'#d4af37',fontWeight:700,fontSize:16,marginBottom:4}}>{f.author}</div>
            <div style={{fontSize:19,fontWeight:700}}>{f.title}</div>
            <div style={{fontSize:15,color:'#ccc',margin:'4px 0 6px'}}>{f.intro}</div>
            <div style={{fontSize:13,color:'#9ad'}}>發布於 {f.date}</div>
          </div>
          <img src={f.cover} alt={f.title} style={{width:80,height:64,borderRadius:12,objectFit:'cover'}}/>
        </div>
      ))}
    </div>
  </section>
);
export default FollowedAuthorsFeed;

