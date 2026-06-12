import { getInsightData, getAllInsightSlugs } from '@/lib/insights'
import type { Metadata } from 'next'

// Next.js App Router Static Generation
export async function generateStaticParams() {
  const slugs = getAllInsightSlugs()
  return slugs
}

// Dynamic Metadata Generation
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const resolvedParams = await params
  const insightData = await getInsightData(resolvedParams.slug)
  return {
    title: `${insightData.title} | Blue Ridge Estate Paving Case Studies`,
    description: insightData.description,
  }
}

export default async function InsightPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const insightData = await getInsightData(resolvedParams.slug)

  return (
    <main>
      <section className="subpage-hero" style={{ backgroundImage: `url('${insightData.coverImage}')` }}>
        <div className="hero-overlay" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.4))' }}></div>
        <div className="hero-content">
          <p style={{ color: 'var(--powerhouse-red)', fontWeight: 'bold', letterSpacing: '2px', marginBottom: '10px' }}>
            ENGINEERING CASE STUDY
          </p>
          <h1 style={{ fontSize: '4rem', lineHeight: '1.1', marginBottom: '15px' }}>{insightData.title}</h1>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <p style={{ color: 'var(--estate-gold)', fontWeight: 'bold', letterSpacing: '1px' }}>{insightData.author ? `AUTHOR: ${insightData.author}` : ''}</p>
            <p style={{ color: '#ccc' }}>{new Date(insightData.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
        </div>
      </section>

      <div style={{ backgroundColor: '#ffffff', width: '100%', borderTop: '4px solid var(--estate-gold)' }}>
        <article style={{ padding: '80px 40px', maxWidth: '1000px', margin: '0 auto', fontSize: '1.2rem', lineHeight: '1.8', color: '#1a1a1a' }} className="markdown-content">
          <div dangerouslySetInnerHTML={{ __html: insightData.contentHtml || '' }} />
        </article>
      </div>

      <section style={{ background: 'var(--carbon-black)', padding: '60px 40px', textAlign: 'center', color: 'white' }}>
        <h2 style={{ fontSize: '3rem', fontFamily: 'Bebas Neue', marginBottom: '20px' }}>Ready for Elite Paving Engineering?</h2>
        <p style={{ fontSize: '1.2rem', color: '#ccc', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px auto' }}>
          Contact our estimating team to discuss the specific engineering requirements of your commercial property.
        </p>
        <a href="/" className="btn-primary" style={{ textDecoration: 'none' }}>Initiate Satellite Estimate</a>
      </section>

      <style>{`
        .markdown-content h2 {
          font-size: 2.5rem;
          font-family: 'Outfit', sans-serif;
          margin-top: 40px;
          margin-bottom: 20px;
          color: #000;
        }
        .markdown-content h3 {
          font-size: 1.5rem;
          margin-top: 30px;
          margin-bottom: 15px;
          color: var(--powerhouse-red);
        }
        .markdown-content p {
          margin-bottom: 20px;
        }
        .markdown-content ul, .markdown-content ol {
          margin-bottom: 20px;
          padding-left: 20px;
        }
        .markdown-content li {
          margin-bottom: 10px;
        }
        .markdown-content strong {
          color: #111;
        }
      `}</style>
    </main>
  )
}
