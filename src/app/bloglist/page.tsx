// src/app/bloglist/page.tsx
import React from "react";
import { getBlogList } from "@/libs/client";
import  BlogPage  from "@/Components/Blogpage";
import { Header } from "@/Components/Header";
import { Container } from "@mui/material";
import { Blog } from "@/types/Blog";

export default async function BlogListPage() {
  return (
    <div>
      <Header />
      <Container>
        <BlogPage />
      </Container>
    </div>
  );
}