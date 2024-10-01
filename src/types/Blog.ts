import { MicroCMSImage,MicroCMSDate } from "microcms-js-sdk";

export type Blog = {
  id: string;
  title: string;
  eyecatch?: MicroCMSImage | null;
  category?: string | null;
} & MicroCMSDate;

export type BlogDetail = {
  id: string;
  title: string;
  content: string;
  eyecatch?: MicroCMSImage | null;
  category?: string | null;
}& MicroCMSDate;