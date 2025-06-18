import HeroSection from '../components/HeroSection'
import HotBlogeBook from '../components/HotBlogeBook'
import HotWonderLand from '../components/HotWonderLand'
import FollowedAuthorsFeed from '../components/FollowedAuthorsFeed'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div style={{background:'#0D1A2D', minHeight:'100vh', color:'#fff', fontFamily:'Poppins, Noto Sans TC, sans-serif'}}>
      <HeroSection />
      <div style={{maxWidth:1080,margin:'0 auto',padding:'30px 0 0',gap:32,display:'flex',flexDirection:'column'}}>
        <HotBlogeBook />
        <HotWonderLand />
        <FollowedAuthorsFeed />
      </div>
      <Footer />
    </div>
  )
}

