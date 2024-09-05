import Image from "next/image";
import { Header } from "@/Components/Header"; 
import { SkillTreePage } from "../Components/parts/SkillTree";

export default function Home() {
  return (
    <div>
    <Header />
    <SkillTreePage />
    </div>
  );
}
