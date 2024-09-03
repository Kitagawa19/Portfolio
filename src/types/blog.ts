export type Blog = {
  id: string;
  title: string;
  content: string;
  eyecatch: string;
  category: string;
  publishedAt: string;
};

export type BlogResponse = {
  contents: Blog[];
  totalCount: number;
  offset: number;
  limit: number;
};

export type Props = {
  blogs: Blog[];
}
