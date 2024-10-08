import React from "react";
import Link from "next/link";
import { Typography, Box, Container } from "@mui/material";
import { getBlogList } from "@/libs/client";
import { Blog } from "@/types/Blog";
import Image from "next/image";

export default async function BlogPage() {
  const { contents } = await getBlogList();

  return (
    <Container maxWidth="lg" style={{ padding: '20px' }}>
      <Typography variant="h3" align="center" gutterBottom style={{ fontWeight: 'bold', letterSpacing: '1px', color: '#333' }}>
        Blog
      </Typography>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        gap={4}
      >
        {contents.map((post: Blog) => (
          <Box
            key={post.id}
            display="flex"
            flexDirection="column"
            alignItems="center"
            width={{ xs: '100%', sm: '48%', md: '30%' }}
            boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
            borderRadius="8px"
            overflow="hidden"
            mb={4}
            style={{ backgroundColor: '#fff' }}
          >
            {post.eyecatch?.url && (
              <Box width="100%">
                <Image
                  src={post.eyecatch.url}
                  alt={post.title || "No title"}
                  width={800}
                  height={400}
                  layout="responsive"
                  objectFit="cover"
                />
              </Box>
            )}
            <Box p={3}>
              <Typography variant="h5" component="h2" align="center" gutterBottom>
                <Link href={`/blogs/${post.id}`} style={{ textDecoration: 'none', color: '#333' }}>
                  {post.title || "Untitled"}
                </Link>
              </Typography>
              <Typography variant="body2" color="textSecondary" align="center">
                Category: {post.category?.name || "Uncategorized"}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
}