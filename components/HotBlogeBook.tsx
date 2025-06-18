const hotBlogeBooks = [
  {
    title: "未來進行式",
    author: "Leo Huang",
    cover: "https://images.unsplash.com/photo-1617196037302-5cffa35ed887",
    intro: "AI革命下的人類生命故事",
  },
  {
    title: "解鎖潛能",
    author: "Emily Wu",
    cover: "https://images.unsplash.com/photo-1503264116251-35a269479413",
    intro: "靈魂成長筆記",
  },
  // ...可多塞幾個假資料
];

const HotBlogeBook = () => (
  <section>
    <h2 style={{color:'#d4af37',fontSize:'1.5rem',marginBottom:16,fontWeight:700}}>🔥 BlogeBook 熱門推薦</h2>
    <div style={{
      display:'flex',overflowX:'auto',gap:32,padding:'8px 0'
    }}>
      {hotBlogeBooks.map((b,i)=>(
        <div key={i} style={{
          background:'#162346',borderRadius:18,minWidth:260,maxWidth:260,padding:18,boxShadow:'0 2px 12px #111a',
          display:'flex',flexDirection:'column',alignItems:'center',marginRight:18
        }}>
          <img src={b.cover} alt={b.title} style={{
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
export default HotBlogeBook;

