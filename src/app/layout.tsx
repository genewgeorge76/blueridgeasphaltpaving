import type { Metadata } from 'next'
import './globals.css'
import { Phone, MapPin } from 'lucide-react'
import GeoSchema from '@/components/GeoSchema'

export const metadata: Metadata = {
  title: 'Blue Ridge Estate Paving | Appalachian Mountain-Grade Paving',
  description: 'Top-rated asphalt paving contractor in Roanoke, Charlottesville & the Virginia Highlands. Skip the wait and get an instant AI Satellite Scan for your mountain, rural, or commercial project.',
  keywords: 'Asphalt Paving, Steep Driveways, Sealcoating, Blue Ridge Estate Paving, Rural Paving, Mountain-Grade Asphalt, Virginia Highlands',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Injecting Modern Premium Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Outfit:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <GeoSchema />
      </head>
      <body suppressHydrationWarning>
        {/* The Black & White Top Bar */}
        <div className="top-bar">
          <div>
            OPERATING FOR OVER 40 YEARS | INDEPENDENTLY OWNED
          </div>
          <div style={{ display: 'flex', gap: '30px' }}>
            <span style={{display: 'flex', alignItems: 'center', gap: '8px'}}><MapPin size={16} color="var(--estate-gold)" /> VIRGINIA HIGHLANDS</span>
            <span style={{display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--estate-gold)', fontWeight: '600'}}><Phone size={16} /> (804) 446-1296</span>
          </div>
        </div>
        
        {/* The White & Red Navbar */}
        <nav className="navbar">
          <div className="logo">
            <a href="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '10px' }}>
              BLUE RIDGE <span style={{ color: 'var(--powerhouse-red)' }}>ESTATE PAVING</span>
            </a>
          </div>
          <div className="nav-links">
            <a href="/commercial-paving" className="nav-link">Commercial</a>
            <a href="/residential-driveways" className="nav-link">Residential</a>
            <a href="/tar-and-chip" className="nav-link">Tar & Chip</a>
            <a href="/asphalt-milling" className="nav-link">Milling</a>
            <a href="/sealcoating-maintenance" className="nav-link">Maintenance</a>
            <a href="/insights" className="nav-link" style={{ color: 'var(--estate-gold)' }}>Insights</a>
            <a href="/#contact" className="btn-primary">Get a Quote</a>
          </div>
        </nav>
        
        {children}
        
        {/* The Massive Carbon Black Footer */}
        <footer className="footer">
          <div className="footer-grid">
            <div className="footer-col">
              <h3>Blue Ridge Estate Paving</h3>
              <p style={{color: '#aaa', fontSize: '1.1rem', fontWeight: '500', lineHeight: '1.8'}}>
                We provide superior mountain-grade asphalt solutions for commercial and residential properties across the Virginia Highlands. From steep rural driveways to massive commercial overlays, we engineer asphalt to survive the harsh Appalachian freeze-thaw cycles.
              </p>
              <div style={{ marginTop: '15px' }}>
                <p style={{color: '#fff', fontSize: '1rem', fontWeight: 'bold'}}><Phone size={14} style={{ display: 'inline', marginRight: '5px' }}/> (804) 446-1296</p>
                <p style={{color: '#fff', fontSize: '1rem', fontWeight: 'bold', marginTop: '5px'}}>Email: j.wordenandsonspaving@gmail.com</p>
              </div>
            </div>
            <div className="footer-col">
              <h3>National-Grade Services</h3>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li><a href="/commercial-paving" style={{ color: '#aaa', textDecoration: 'none' }}>Commercial Paving</a></li>
                <li><a href="/residential-driveways" style={{ color: '#aaa', textDecoration: 'none' }}>Steep Residential Driveways</a></li>
                <li><a href="/tar-and-chip" style={{ color: '#aaa', textDecoration: 'none' }}>Tar & Chip Paving</a></li>
                <li><a href="/sealcoating-maintenance" style={{ color: '#aaa', textDecoration: 'none' }}>Appalachian Sealcoating</a></li>
                <li><a href="/asphalt-milling" style={{ color: '#aaa', textDecoration: 'none' }}>Asphalt Milling</a></li>
              </ul>
            </div>
            <div className="footer-col" style={{ flex: '2 1 400px' }}>
              <h3>Highland & Rural Service Areas</h3>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', fontSize: '0.9rem' }}>
                <li><a href="/service/roanoke-va" style={{ color: '#aaa', textDecoration: 'none' }}>Roanoke, VA</a></li>
                <li><a href="/service/charlottesville-va" style={{ color: '#aaa', textDecoration: 'none' }}>Charlottesville, VA</a></li>
                <li><a href="/service/winchester-va" style={{ color: '#aaa', textDecoration: 'none' }}>Winchester, VA</a></li>
                <li><a href="/service/monterey-va" style={{ color: '#aaa', textDecoration: 'none' }}>Monterey, VA</a></li>
                <li><a href="/service/staunton-va" style={{ color: '#aaa', textDecoration: 'none' }}>Staunton, VA</a></li>
                <li><a href="/service/harrisonburg-va" style={{ color: '#aaa', textDecoration: 'none' }}>Harrisonburg, VA</a></li>
                <li><a href="/service/lexington-va" style={{ color: '#aaa', textDecoration: 'none' }}>Lexington, VA</a></li>
                <li><a href="/service/waynesboro-va" style={{ color: '#aaa', textDecoration: 'none' }}>Waynesboro, VA</a></li>
                <li><a href="/service/hot-springs-va" style={{ color: '#aaa', textDecoration: 'none' }}>Hot Springs, VA</a></li>
                <li><a href="/service/warm-springs-va" style={{ color: '#aaa', textDecoration: 'none' }}>Warm Springs, VA</a></li>
                <li><a href="/service/clifton-forge-va" style={{ color: '#aaa', textDecoration: 'none' }}>Clifton Forge, VA</a></li>
                <li><a href="/service/covington-va" style={{ color: '#aaa', textDecoration: 'none' }}>Covington, VA</a></li>
                <li><a href="/service/luray-va" style={{ color: '#aaa', textDecoration: 'none' }}>Luray, VA</a></li>
                <li><a href="/service/front-royal-va" style={{ color: '#aaa', textDecoration: 'none' }}>Front Royal, VA</a></li>
                <li><a href="/service/buchanan-va" style={{ color: '#aaa', textDecoration: 'none' }}>Buchanan, VA</a></li>
                <li><a href="/service/fincastle-va" style={{ color: '#aaa', textDecoration: 'none' }}>Fincastle, VA</a></li>
                <li><a href="/service/crozet-va" style={{ color: '#aaa', textDecoration: 'none' }}>Crozet, VA</a></li>
                <li><a href="/service/new-market-va" style={{ color: '#aaa', textDecoration: 'none' }}>New Market, VA</a></li>
                <li><a href="/service/woodstock-va" style={{ color: '#aaa', textDecoration: 'none' }}>Woodstock, VA</a></li>
                <li><a href="/service/strasburg-va" style={{ color: '#aaa', textDecoration: 'none' }}>Strasburg, VA</a></li>
                <li><a href="/service/franklin-wv" style={{ color: '#aaa', textDecoration: 'none' }}>Franklin, WV</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <p>&copy; {new Date().getFullYear()} Blue Ridge Estate Paving. All rights reserved.</p>
            <p style={{ fontSize: '0.8rem', opacity: '0.6' }}>Blue Ridge Estate Paving is a division of J. Worden & Sons Paving LLC.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
