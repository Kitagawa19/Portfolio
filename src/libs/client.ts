import { createClient } from 'microcms-js-sdk';
import type {
  MicroCMSQueries,
  MicroCMSListResponse
} from "microcms-js-sdk";
import { Blog, BlogDetail } from '@/types/Blog';

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || '',
  apiKey: process.env.MICROCMS_API_KEY || '',
});

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('Please set your  SERVICE_DOMAIN');
}

if(!process.env.MICROCMS_API_KEY) {
  throw new Error('Please set your API_KEY');
}


export const getBlogList = async(queries?:MicroCMSQueries) => {
  const data = await client.get<MicroCMSListResponse<Blog>>({
    endpoint: 'blogs',
    queries,
  });
  return data;
}

export const getBlogDetail = async (contentId: string, queries?: MicroCMSQueries) => {
  const data = await client.get<BlogDetail>({
    endpoint: 'blogs',
    contentId,
    queries: {
      ...queries,
      fields: "id,createdAt,updatedAt,title,content,eyecatch,category"
    },
  });
  return data;
};