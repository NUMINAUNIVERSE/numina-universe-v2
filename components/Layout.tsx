// components/Layout.tsx
import Header from './Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: '#0D1A2D', color: '#fff', minHeight: '100vh' }}>
      <Header />
      <main>{children}</main>
    </div>
  );
}

