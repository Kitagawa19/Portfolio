import { MicroCMSImage } from "microcms-js-sdk";

export type Blog = {
  id: string;
  title: string;
  eyecatch?: MicroCMSImage | null;
  category?: string | null;
}

export type BlogDetail = {
  id: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  content: string;
  eyecatch?: MicroCMSImage | null;
  category?: string | null;
}