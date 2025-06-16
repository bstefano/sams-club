// lib/datocms.js
import { GraphQLClient } from 'graphql-request'

const client = new GraphQLClient('https://graphql.datocms.com/', {
  headers: {
    authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
  },
})

export async function getLandingPages() {
  const query = `
    {
      allLandingPages {
        title
        slug
        content
      }
    }
  `
  return await client.request(query)
}