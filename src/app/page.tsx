import Image from "next/image";
import { Header } from "@/Components/Header"; 
import { SkillTreePage } from "../Components/parts/skillTree";

export default function Home() {
  return (
    <div>
    <Header />
    <SkillTreePage />
    </div>
  );
}
