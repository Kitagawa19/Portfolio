import { BlogDetail } from '@/types/Blog';
import { getBlogDetail, getBlogList } from '@/libs/client'; 
import { BlogDetailComponent } from '@/Components/ArticlePage'; 
import { Header } from '@/Components/Header';
import { Suspense } from 'react';
import { Container } from '@mui/material';

export default async function BlogPage({ params }: { params: { id: string } }) {
  const blogDetail: BlogDetail = await getBlogDetail(params.id);

  if (!blogDetail) {
    return <p>Blog post not found.</p>;
  }

  return (
    <Container>
      <Header />
      <Suspense fallback={<p>Loading...</p>}>
        <BlogDetailComponent blogDetail={blogDetail} />
      </Suspense>
    </Container>
  );
}

// 動的なパスを生成する
export async function generateStaticParams() {
  const blogs = await getBlogList();
  return blogs.contents.map((blog) => ({
    id: blog.id,
  }));
}