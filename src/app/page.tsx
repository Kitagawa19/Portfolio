import Image from "next/image";
import { Header } from "@/Components/Header"; 
import { SkillTreePage } from "@/Components/parts/SkillTree";
import BlogPage from "@/Components/Blogpage";
import { Container } from "@mui/material";
import { MyProfile } from "@/Components/parts/myInfo";

export default function Home() {
  return (
    <div>
    <Header />
    <Container>
      <MyProfile />
      <SkillTreePage />
    </Container>
    </div>
  );
}
