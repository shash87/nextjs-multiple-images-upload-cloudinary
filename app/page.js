"use client";
import { useEffect } from "react";
import Hero from "./_components/Hero";
import { useSession } from "@clerk/nextjs";
import { useRouter } from "next/navigation";



export default function Home() {
  const { session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      console.log("session User:", session.user);
      router.push("/upload");
    }
  }
  , [session]); 
  return (
    <div className="w-full">
      <Hero />

    </div>
  );
}
