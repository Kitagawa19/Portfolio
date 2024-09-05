import React from "react";
import { client } from "@/libs/client";
import { BlogResponse, Props } from "@/types/blog";
import { GetServerSideProps,NextPage } from "next";
import { Container, Typography, Card, CardContent, CardActionArea, Grid2 } from '@mui/material';

export const BlogPage:NextPage<Props> = ({ blogs }) => {
  return(
    <div>
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 4 }}>
          ブログ一覧
        </Typography>
        <Grid2 container spacing={4}>
          {blogs.map((blog)=>(
            <Grid2 key={ blog.id } size={{ xs:12, sm:6, md:4 }}>
              <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <CardActionArea>
                  <CardContent>
                    {blog.eyecatch}
                    <Typography gutterBottom variant="h5" component="h2">
                      {blog.title}
                    </Typography>
                    <Typography>
                      {blog.category}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </div>
  )
}

export const getServerSideProps:GetServerSideProps<Props> = async() => {
  const data = await client.get<BlogResponse>({endpoint: "blogs"});
  return {
    props: {
      blogs: data.contents,
    }
  }
} 
