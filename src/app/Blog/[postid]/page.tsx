import React from "react";
import { Typography, Box, Container } from "@mui/material";
import parse from "html-react-parser";
import { getBlogDetail,getBlogList } from "@/libs/client";
import { Blog, BlogDetail } from "@/types/Blog";

export const getStaticParams = async() => {
  const { contents } = await getBlogList();
  const paths = contents.map((post: Blog) => ({
    params: { postId: post.id },
  }));
  return { paths, fallback: false };
}

export const getDetailParams = async({params}:{params:{postId:string}}) => {
  const { postId } = params;
  const data = await getBlogDetail(postId);
  return { props: data };
}

export default function BlogDetailPage ({data}:{data:BlogDetail}) {
  return (
    <Container>
      <Typography variant="h3">{data.title}</Typography>
      <Box mt={2}>
        {data.eyecatch && (
          <Box>
            <img
              src={data.eyecatch.url}
              alt={data.title}
              width={data.eyecatch.width}
              height={data.eyecatch.height}
            />
          </Box>
        )}
      </Box>
      <Box mt={2}>{parse(data.content)}</Box>
    </Container>
  );
}