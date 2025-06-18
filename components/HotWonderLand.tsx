const hotWLs = [
  {
    title: "守護靈獸",
    author: "Yui",
    img: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa",
    intro: "插畫異世界",
  },
  {
    title: "月之祭司",
    author: "Sora",
    img: "https://images.unsplash.com/photo-1549880186-7e059c6f9e99",
    intro: "奇幻宇宙觀",
  },
  // ...可多塞幾個假資料
];

const HotWonderLand = () => (
  <section>
    <h2 style={{color:'#d4af37',fontSize:'1.5rem',marginBottom:16,fontWeight:700}}>🎨 WonderLand 熱門推薦</h2>
    <div style={{
      display:'flex',overflowX:'auto',gap:32,padding:'8px 0'
    }}>
      {hotWLs.map((b,i)=>(
        <div key={i} style={{
          background:'#162346',borderRadius:18,minWidth:260,maxWidth:260,padding:18,boxShadow:'0 2px 12px #111a',
          display:'flex',flexDirection:'column',alignItems:'center',marginRight:18
        }}>
          <img src={b.img} alt={b.title} style={{
            width: '100%', borderRadius:14, height:138, objectFit:'cover', boxShadow:'0 1px 12px #2228',marginBottom:12
          }} />
          <div style={{fontSize:19,fontWeight:800,color:'#fff'}}>{b.title}</div>
          <div style={{fontSize:15,color:'#d4af37',margin:'6px 0 8px'}}>{b.author}</div>
          <div style={{fontSize:15,color:'#ccc',marginBottom:10,lineHeight:1.5}}>{b.intro}</div>
        </div>
      ))}
    </div>
  </section>
);
export default HotWonderLand;

