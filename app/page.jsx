"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import TopicsList from "@/components/TopicsList";

export default function AddTopic() {
  const router = useRouter();

  return (
    <>
    {/* <div>hello</div> */}
    
     <TopicsList />
    </>
  );
}


