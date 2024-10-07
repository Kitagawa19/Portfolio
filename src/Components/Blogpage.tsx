import React from "react";
import Link from "next/link";
import { Typography, Box, Container } from "@mui/material";
import { getBlogList } from "@/libs/client"; 
import { Blog } from "@/types/Blog";
import Image from "next/image";

export default async function BlogPage() {
  const { contents } = await getBlogList();

  return (
    <Container>
      <Box>
        {contents.map((post: Blog) => (
          <Box key={post.id} mb={4}>
            {post.eyecatch?.url && (
              <Box mt={2}>
                <Image
                  src={post.eyecatch.url}
                  alt={post.title || "No title"}
                  width={post.eyecatch.width || 500}
                  height={post.eyecatch.height || 300}
                />
              </Box>
            )}
            <Typography variant="h4">
              <Link href={`/blogs/${post.id}`}>
                {post.title || "Untitled"}
              </Link>
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Category: {post.category?.name || "Uncategorized"}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
}