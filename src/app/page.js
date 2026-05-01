import Banner from "@/components/Banner";
import Course from "@/components/Course";
import Instructor from "@/components/Instructor";
import Learning from "@/components/Learning";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <Course />
      <Learning />
      <Instructor />
    </div>
  );
}
