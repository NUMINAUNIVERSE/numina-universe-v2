import Link from "next/link";

const Footer = () => (
  <footer style={{
    marginTop: 48, padding: '32px 0 18px', textAlign: 'center', color: '#ddd',
    background: 'linear-gradient(90deg,#0d1a2d 80%,#23265b 100%)'
  }}>
    <div style={{ fontWeight: 700, fontSize: 18, letterSpacing: 2, color: '#d4af37', marginBottom: 8 }}>
      NUMINA UNIVERSE
    </div>
    <div style={{ fontSize: 14, marginBottom: 5 }}>以人為本，神性宇宙級華人創作品牌</div>
    <div style={{ fontSize: 13, color: '#ccc', marginBottom: 8 }}>
      <Link href="/faq" style={{ color: '#d4af37', margin: '0 10px' }}>常見問題</Link> |
      <Link href="/terms" style={{ color: '#d4af37', margin: '0 10px' }}>條款</Link> |
      <Link href="/privacy" style={{ color: '#d4af37', margin: '0 10px' }}>聯絡我們</Link>
    </div>
    <div style={{ fontSize: 13, marginTop: 8 }}>© {new Date().getFullYear()} NUMINA UNIVERSE</div>
  </footer>
);

export default Footer;

