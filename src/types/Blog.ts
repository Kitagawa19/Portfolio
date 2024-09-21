export type Post = {
  id: string;
  title: string;
  eyecatch?: {
    url: string;
  }
  category?: {
    name: string;
  };
}