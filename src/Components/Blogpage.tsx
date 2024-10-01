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
            <Typography variant="h4">
              <Link href={`/blog/${post.id}`}>
                {post.title}
              </Link>
            </Typography>
            {post.eyecatch && (
              <Box mt={2}>
                <Image
                  src={post.eyecatch.url} 
                  alt={post.title}
                  width={post.eyecatch.width} 
                  height={post.eyecatch.height} 
                />
              </Box>
            )}
            <Typography variant="body2" color="textSecondary">
              Category: {post.category || "Uncategorized"}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
