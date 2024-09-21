import React,{ useState,useEffect}  from 'react';
import Link from 'next/link';
import { getArticles } from  '@/libs/client';
import  Image from 'next/image';
import { Post } from '@/types/Blog';

export default function BlogListPage() {
    const [posts,setPosts] = useState<Post[]>([]);
    useEffect(() => {
        const fetchPosts = async () => {
            const articles = await getArticles();
            setPosts(articles);
        };
        fetchPosts();
    },[]);
    return (
        <main className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-8">ブログ記事一覧</h1>
      <div className="grid gap-4">
        {posts.map((post) => (
          <Link href={`/blog/${post.id}`} key={post.id} className="block p-4 border rounded hover:bg-gray-100">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <div className="flex items-center mt-2">
              {post.eyecatch && (
                <Image
                  src={post.eyecatch.url}
                  alt={post.title}
                  width={100}
                  height={100}
                  className="mr-4 rounded"
                />
              )}
              <div>
                <p className="text-sm text-gray-600">{post.category}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
    )
}