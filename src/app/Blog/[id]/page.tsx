import React, { useState, useEffect } from "react";
import { getArticle } from "@/libs/client";
import Image from "next/image";
import { PostDetail } from "@/types/Blog";

export default function BlogPage({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<PostDetail | null>(null);  

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const article = await getArticle(params.id);
        setPost(article);
      } catch (error) {
        console.error("記事の取得に失敗しました:", error);
      }
    };
    
    fetchPost();
  }, [params.id]); 

  if (!post) {
    return <div>Loading...</div>;  
  }

  return (
    <article className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      {post.eyecatch && (
        <Image
          src={post.eyecatch.url}
          alt={post.title}
          width={600}
          height={400}
          className="mb-4 rounded"
        />
      )}
      <div className="flex items-center text-sm text-gray-600 mb-4">
        <span>カテゴリ: {post.category}</span>
      </div>
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content || '' }} />
    </article>
  );
}
