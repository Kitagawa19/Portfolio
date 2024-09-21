import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || '',
  apiKey: process.env.MICROCMS_API_KEY || '',
});

export async function getArticles() {
  const response = await client.get({
    endpoint: 'articles',
    queries: {orders: '-publishedAt'}
  })
  return response.contents
}

export async function getArticle(id: string){
  const response = await client.get({
    endpoint: 'articles',
    contentId: id
  })
  return response
}