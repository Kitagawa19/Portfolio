// src/app/bloglist/page.tsx
import React from "react";
import { getBlogList } from "@/libs/client";
import { BlogList } from "@/Components/parts/Blog";
import { Blog } from "@/types/Blog";

export default async function BlogPage() {
  // サーバーコンポーネント内でデータを取得
  const { contents }: { contents: Blog[] } = await getBlogList();

  return <BlogList contents={contents} />;
}