// components/Header.tsx
import Link from 'next/link';

const navStyle = {
  background: '#0D1A2D',
  padding: '18px 0',
  borderBottom: '2px solid #d4af37',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
} as React.CSSProperties;

const menuStyle = {
  display: 'flex',
  gap: '32px',
  fontWeight: 500
} as React.CSSProperties;

export default function Header() {
  return (
    <header style={navStyle}>
      <nav style={menuStyle}>
        <Link href="/"><span style={{ color: '#d4af37', fontWeight: 700, fontSize: 24 }}>NUMINA UNIVERSE</span></Link>
        <Link href="/blogebook"><span style={{ color: '#fff' }}>BlogeBook</span></Link>
        <Link href="/wonderland"><span style={{ color: '#fff' }}>WonderLand</span></Link>
        <Link href="/explore"><span style={{ color: '#fff' }}>探索</span></Link>
        <Link href="/faq"><span style={{ color: '#fff' }}>幫助中心</span></Link>
        <Link href="/login"><span style={{ color: '#fff' }}>登入/註冊</span></Link>
      </nav>
    </header>
  );
}
