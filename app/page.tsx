import { Herr_Von_Muellerhoff } from "next/font/google";
import Image from "next/image";
import Hero from '../components/hero';
import { FloatingNav } from "@/components/ui/FloatingNav";


export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav />
        <Hero></Hero>
      </div>
    </main>
  );
}
