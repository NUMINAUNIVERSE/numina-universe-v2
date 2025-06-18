const HeroSection = () => (
  <div style={{
    padding: '64px 0 44px', textAlign: 'center',
    background: 'linear-gradient(180deg,#0d1a2d 80%,#23265b 100%)'
  }}>
    {/* LOGO圖片請用你的專屬LOGO */}
    <img src="/logo-numina.png" alt="NUMINA UNIVERSE LOGO" style={{height:72, marginBottom:24}} />
    <h1 style={{
      color: '#d4af37', fontSize: '3rem', letterSpacing: '2px',
      fontWeight: 900, textShadow: '0 0 24px #d4af3760'
    }}>
      NUMINA UNIVERSE
    </h1>
    <div style={{
      color: '#fff', fontSize: '1.35rem', margin:'14px auto 24px', maxWidth:540, fontWeight: 600
    }}>
      AI時代的智慧原鄉<br />神性宇宙級全球創作社群
    </div>
    <div style={{display:'flex', justifyContent:'center',gap:32,margin:'32px auto 0'}}>
      <a href="/blogebook">
        <button style={{
          background:'linear-gradient(90deg,#d4af37 50%,#00fff0 100%)',color:'#222',
          border:'none', borderRadius:18, fontWeight:900, fontSize:21, padding:'16px 36px', boxShadow:'0 4px 20px #0008',cursor:'pointer'
        }}>BlogeBook 星系</button>
      </a>
      <a href="/wonderland">
        <button style={{
          background:'linear-gradient(90deg,#7266ff 50%,#d4af37 100%)',color:'#fff',
          border:'none', borderRadius:18, fontWeight:900, fontSize:21, padding:'16px 36px', boxShadow:'0 4px 20px #0008',cursor:'pointer'
        }}>WonderLand 星系</button>
      </a>
    </div>
  </div>
);

export default HeroSection;

