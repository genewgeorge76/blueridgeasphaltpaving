import type { Metadata } from 'next'
import AIEstimationForm from '@/components/AIEstimationForm'
import VisualProofGallery from '@/components/VisualProofGallery'
import { notFound } from 'next/navigation'
import Image from 'next/image'

const cities = [
  'roanoke-va', 'charlottesville-va', 'winchester-va', 'monterey-va', 'staunton-va',
  'harrisonburg-va', 'lexington-va', 'waynesboro-va', 'hot-springs-va', 'warm-springs-va',
  'clifton-forge-va', 'covington-va', 'luray-va', 'front-royal-va', 'buchanan-va',
  'fincastle-va', 'crozet-va', 'new-market-va', 'woodstock-va', 'strasburg-va',
  'troutville-va', 'natural-bridge-va', 'goshen-va', 'craigsville-va', 'fairfield-va',
  'afton-va', 'wintergreen-va', 'nellysford-va', 'lovingston-va', 'raphine-va',
  'steeles-tavern-va', 'vesuvius-va', 'eagle-rock-va', 'iron-gate-va', 'millboro-va',
  'bolar-va', 'mcdowell-va', 'mustoe-va', 'hightown-va', 'blue-grass-va',
  'doe-hill-va', 'sugar-grove-va', 'fort-defiance-va', 'mount-sidney-va', 'grottoes-va',
  'elkton-va', 'mcgaheysville-va', 'massanutten-va', 'timberville-va', 'broadway-va',
  'highlands-va', 'franklin-wv', 'churchville-va', 'williamsville-va', 'swoope-va',
  'deerfield-va', 'middlebrook-va', 'mount-solon-va'
];

export async function generateStaticParams() {
  return cities.map((city) => ({
    city: city,
  }))
}

// Helper to format the slug into a beautiful city name
function formatCityName(slug: string) {
  if (!slug.includes('-va') && !slug.includes('-wv')) return null;
  const parts = slug.split('-');
  const state = parts.pop()?.toUpperCase(); // VA or WV
  const city = parts.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  return `${city}, ${state}`;
}

// HCU / Geographic Context Engine
function getGeographicContext(city: string) {
  const lowerCity = city.toLowerCase();
  
  if (lowerCity.includes('highlands')) {
    return "The Highlands are our backyard. In fact, our founder has been paving the Highlands of Virginia since he was 15 years old alongside his grandfather. We know exactly how the elevation changes and severe winter weather here destroy standard pavement, which is why we only engineer heavy-duty structural asphalt for this specific region.";
  }
  
  if (['roanoke', 'troutville', 'buchanan', 'fincastle', 'eagle-rock'].some(c => lowerCity.includes(c))) {
    return "The topography of the Roanoke Valley and its surrounding crossroads demands aggressive water diversion. We construct high-grade asphalt swales and deploy deep VDOT #21A stone bases to ensure your pavement survives the rapid freeze-thaw cycles that trap moisture in the valley.";
  }

  if (['charlottesville', 'crozet', 'afton', 'wintergreen'].some(c => lowerCity.includes(c))) {
    return "From the rolling hills of Charlottesville to the steep mountain inclines of Wintergreen, we engineer pavement that resists downward creep during Virginia's brutal summer heat, utilizing specific PG 70-22 polymer-modified binders.";
  }

  if (['monterey', 'franklin', 'mcdowell', 'blue-grass', 'hightown', 'churchville', 'williamsville', 'swoope', 'deerfield', 'mount-solon'].some(c => lowerCity.includes(c))) {
    return "Whether it's paving near the Churchville Post Office, handling the steep grades out in Williamsville, or working across the border in Franklin, WV, operating in rural, high-elevation areas requires a different class of paving. We bring massive, 80,000lb-rated commercial engineering to these isolated mountain crossroads, ensuring your driveway or access road never washes out during severe Appalachian storms.";
  }

  // Shenandoah Valley Default
  return "The Shenandoah Valley and its surrounding foothills require specialized aggregate subgrades. We actively seek out the back mountain roads, farm lanes, and deep highland switchbacks in your area to build permanent, washout-proof roads.";
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const cityName = formatCityName(resolvedParams.city);
  if (!cityName) return { title: 'Service Area Not Found' };

  return {
    title: `Asphalt Paving in ${cityName} | Blue Ridge`,
    description: `The leading 4th-generation asphalt paving contractor serving ${cityName}. We engineer heavy-duty rural driveways, commercial parking lots, and tar and chip surfacing to survive the Appalachian climate.`,
    keywords: `Asphalt Paving ${cityName}, Driveway Paving ${cityName}, Commercial Paving ${cityName}, Tar and Chip ${cityName}, Sealcoating ${cityName}, Paving Contractor ${cityName}`,
  }
}

export default async function CityServicePage({ params }: { params: Promise<{ city: string }> }) {
  const resolvedParams = await params;
  const cityName = formatCityName(resolvedParams.city);
  const geoContext = getGeographicContext(resolvedParams.city);

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

      {/* Premium Content Split with HCU Geo Context */}
      <section style={{ display: 'flex', flexWrap: 'wrap', background: 'var(--bg-primary)' }}>
        <div style={{ flex: '1 1 50%', padding: '100px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 className="gold-text" style={{ fontSize: '3rem', marginBottom: '30px', letterSpacing: '-1px' }}>Engineering Flawless Pavement for {cityName}.</h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: '1.9', marginBottom: '20px' }}>
            Property owners in {cityName} face a unique set of geographic challenges. From steep Appalachian inclines that cause severe water washouts, to brutal winter freeze-thaw cycles that shatter brittle pavement from the inside out. 
          </p>
          <p style={{ fontSize: '1.25rem', color: 'var(--pure-white)', lineHeight: '1.9', marginBottom: '20px', fontWeight: 'bold' }}>
            {geoContext}
          </p>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: '1.9', marginBottom: '20px' }}>
            As a 4th-generation paving company, <strong style={{ color: 'var(--pure-white)' }}>Blue Ridge Estate Paving</strong> does not guess tonnage or skimp on aggregate base. Every driveway and commercial lot we construct in {cityName} begins with a highly compacted, heavy-duty #21A crushed stone subbase. 
          </p>
          
          <div className="glass-panel" style={{ padding: '30px', borderLeft: '4px solid var(--estate-gold)', marginTop: '20px' }}>
            <p style={{ fontSize: '1.15rem', color: 'var(--estate-gold)', fontStyle: 'italic', margin: 0, lineHeight: '1.8' }}>
              "I have been paving the Highlands and these mountain roads since I was 15 years old working alongside my grandfather. We aren't a pop-up crew—we are a multi-generational Appalachian paving family." <br/>
              <span style={{ display: 'block', marginTop: '10px', fontWeight: 'bold', color: 'var(--pure-white)' }}>— GW George, Founder</span>
            </p>
          </div>
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
