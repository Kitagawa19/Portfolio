import React from "react";
import { Typography, Box, Container } from "@mui/material";
import { BlogDetail } from "@/types/Blog";
import Image from "next/image";

type BlogDetailProps = {
  blogDetail: BlogDetail;
};

export const BlogDetailComponent: React.FC<BlogDetailProps> = ({ blogDetail }) => {
  return (
    <Container>
      <Box>
        <Typography variant="h4">{blogDetail.title || "Untitled"}</Typography>
        {blogDetail.eyecatch?.url && (
          <Image
            src={blogDetail.eyecatch.url}
            alt={blogDetail.title || "No title"}
            width={blogDetail.eyecatch.width || 500}
            height={blogDetail.eyecatch.height || 300}
            priority={true}
          />
        )}
        <Typography variant="body2" color="textSecondary">
          Category: {blogDetail.category?.name || "Uncategorized"}
        </Typography>
        <Box component='div'>
            <div dangerouslySetInnerHTML={{ __html: blogDetail.content }} />
        </Box>
      </Box>
    </Container>
  );
};