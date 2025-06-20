import { getLandingPages } from '../lib/datocms'
import { StructuredText } from 'react-datocms'

export async function getStaticPaths() {
  const data = await getLandingPages()
  const paths = data.allLandingPages.map(p => ({ params: { slug: p.slug } }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const data = await getLandingPages()
  const page = data.allLandingPages.find(p => p.slug === params.slug)
  return { props: { page } }
}

export default function LandingPage({ page }) {
  return (
    <div>
      <h1>{page.title}</h1>
      <StructuredText data={page.content} />
    </div>
  )
}



