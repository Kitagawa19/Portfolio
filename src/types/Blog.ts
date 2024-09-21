export type Post = {
  id: string;
  title: string;
  eyecatch?: {
    url: string;
    height: number;
    width: number;
  }
  category?: string | null;
}

export type PostDetail = {
  id: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  content: string;
  eyecatch?: {
    url: string;
    height: number;
    width: number;
  };
  category?: string | null;
}