import Image from "next/image";
import { Header } from "@/Components/Header"; 
import { SkillTreePage } from "@/Components/parts/SkillTree";
import BlogPage from "@/Components/Blogpage";

export default function Home() {
  return (
    <div>
    <Header />
    <SkillTreePage />
    <BlogPage />
    </div>
  );
}
