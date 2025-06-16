import { getLandingPages } from '../lib/datocms'
import { render } from '@datocms/rich-text-react-renderer'

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
      <div>
        {render(page.content)}
      </div>
    </div>
  )
}


