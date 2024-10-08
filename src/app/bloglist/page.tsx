import BlogPage from '@/Components/Blogpage';
import { Header } from '@/Components/Header';
import { Container } from '@mui/material';

export default function BlogListPage() {
  return (
    <div>
      <Header />
      <Container>
        <BlogPage />
      </Container>
    </div>
  )
}