import { MicroCMSImage,MicroCMSDate } from "microcms-js-sdk";

export type Category = {
  id: string,
  createdAt: string,
  updatedAt: string,
  publishedAt: string,
  revisedAt: string,
  name: string
}

export type Blog = {
  id: string;
  title: string;
  eyecatch?: MicroCMSImage | null;
  category?: Category | null;
} & MicroCMSDate;

export type BlogDetail = {
  id: string;
  title: string;
  content: string;
  eyecatch?: MicroCMSImage | null;
  category?: Category | null;
}& MicroCMSDate;