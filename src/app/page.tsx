import Image from "next/image";
import { Header } from "@/Components/Header"; 
import { SkillTreePage } from "@/Components/parts/SkillTree";
import BlogPage from "@/Components/Blogpage";
import { Container } from "@mui/material";

export default function Home() {
  return (
    <div>
    <Header />
    <Container>
      <SkillTreePage />
      <BlogPage />
    </Container>
    </div>
  );
}
