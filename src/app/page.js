import Banner from "@/components/Banner";
import Course from "@/components/Course";
import Instructor from "@/components/Instructor";
import Learning from "@/components/Learning";
import Trending from "@/components/Trending";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <Course />
      <Trending />
      <Learning />
      <Instructor />
    </div>
  );
}
