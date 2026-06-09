import type { Metadata } from 'next'
import AIEstimationForm from '@/components/AIEstimationForm'
import VisualProofGallery from '@/components/VisualProofGallery'
import { notFound } from 'next/navigation'

// Helper to format the slug into a beautiful city name
function formatCityName(slug: string) {
  if (!slug.includes('-va') && !slug.includes('-wv')) return null;
  const parts = slug.split('-');
  const state = parts.pop()?.toUpperCase(); // VA or WV
  const city = parts.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  return `${city}, ${state}`;
}

export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const cityName = formatCityName(params.city);
  if (!cityName) return { title: 'Service Area Not Found' };

  return {
    title: `Premium Asphalt Paving Contractor in ${cityName} | Blue Ridge Estate Paving`,
    description: `The leading 4th-generation asphalt paving contractor serving ${cityName}. We engineer heavy-duty rural driveways, commercial parking lots, and tar and chip surfacing to survive the Appalachian climate.`,
    keywords: `Asphalt Paving ${cityName}, Driveway Paving ${cityName}, Commercial Paving ${cityName}, Tar and Chip ${cityName}, Sealcoating ${cityName}`,
  }
}

export default function CityServicePage({ params }: { params: { city: string } }) {
  const cityName = formatCityName(params.city);

  if (!cityName) {
    notFound();
  }

  return (
    <main>
      {/* High-End Dynamic Hero */}
      <section className="hero" style={{ backgroundImage: "url('/images/hero.png')" }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div style={{ display: 'inline-block', border: '1px solid var(--estate-gold)', padding: '5px 15px', color: 'var(--estate-gold)', fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>
            Exclusive Regional Service Area
          </div>
          <h1 style={{ fontSize: '4.5rem', marginBottom: '20px' }}>Premium Asphalt Paving in <br/><span style={{ color: 'var(--powerhouse-red)' }}>{cityName}</span>.</h1>
          <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.4rem' }}>
            We bring 80,000lb-rated commercial engineering to {cityName}. Stop settling for thin asphalt that shatters in the winter. We build structural pavement designed to outlast the mountains.
          </p>
        </div>
      </section>

      {/* Premium Content Split */}
      <section style={{ display: 'flex', flexWrap: 'wrap', background: 'var(--bg-primary)' }}>
        <div style={{ flex: '1 1 50%', padding: '100px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 className="gold-text" style={{ fontSize: '3rem', marginBottom: '30px', letterSpacing: '-1px' }}>Engineering Flawless Pavement for {cityName}.</h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: '1.9', marginBottom: '20px' }}>
            Property owners in {cityName} face a unique set of geographic challenges. From steep Appalachian inclines that cause severe water washouts, to brutal winter freeze-thaw cycles that shatter brittle pavement from the inside out. 
          </p>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: '1.9', marginBottom: '20px' }}>
            As a 4th-generation paving company, <strong style={{ color: 'var(--pure-white)' }}>Blue Ridge Estate Paving</strong> does not guess tonnage or skimp on aggregate base. Every driveway and commercial lot we construct in {cityName} begins with a highly compacted, heavy-duty #21A crushed stone subbase. 
          </p>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: '1.9', marginBottom: '20px', borderLeft: '4px solid var(--powerhouse-red)', paddingLeft: '20px' }}>
            <strong>Deep Rural Coverage:</strong> We don't just stay inside the city limits. We actively seek out the back mountain roads, farm lanes, and deep highland switchbacks surrounding {cityName}. If you live miles off the main highway, we have the heavy equipment to reach you and build a permanent, washout-proof road.
          </p>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: '1.9' }}>
            Whether you need a massive commercial overlay, precision asphalt milling, or a highly-textured Tar and Chip rural driveway for maximum mountain traction, we deploy our commercial fleet with absolute mathematical precision.
          </p>
        </div>
        <div style={{ flex: '1 1 50%', background: "url('/images/machinery.png') center/cover" }}></div>
      </section>

      {/* Services Grid (Tailored for the city) */}
      <section style={{ padding: '100px 40px', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-light)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '3.5rem', color: 'var(--pure-white)', letterSpacing: '-1px' }}>Our Services in {cityName}</h2>
        </div>
        
        <div className="massive-grid">
          <div className="grid-item">
            <div className="grid-bg" style={{ backgroundImage: "url('/images/hero.png')" }}></div>
            <div className="grid-overlay"></div>
            <div className="grid-content">
              <h3>Commercial Asphalt</h3>
              <p>Heavy-duty overlays, milling, and complete lot reconstruction for retail and industrial properties.</p>
            </div>
          </div>

          <div className="grid-item">
            <div className="grid-bg" style={{ backgroundImage: "url('/images/driveway.png')" }}></div>
            <div className="grid-overlay"></div>
            <div className="grid-content">
              <h3>Tar & Chip Paving</h3>
              <p>The ultimate high-traction, maintenance-free solution for steep rural driveways and long farm roads.</p>
            </div>
          </div>

          <div className="grid-item">
            <div className="grid-bg" style={{ backgroundImage: "url('/images/sealcoating.png')" }}></div>
            <div className="grid-overlay"></div>
            <div className="grid-content">
              <h3>Industrial Sealcoating</h3>
              <p>High-solids asphalt emulsion to protect your investment from UV oxidation and freeze-thaw damage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Estimation Form Integration */}
      <section style={{ padding: '80px 20px', background: 'var(--bg-primary)', borderTop: '1px solid var(--border-light)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 className="gold-text" style={{ fontSize: '2.5rem' }}>Skip the Wait in {cityName}</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginTop: '10px' }}>Initiate an orbital satellite scan of your property for a precise, instant estimate.</p>
          </div>
          <AIEstimationForm location={cityName} />
        </div>
      </section>

      {/* Visual Proof */}
      <VisualProofGallery />

    </main>
  )
}
