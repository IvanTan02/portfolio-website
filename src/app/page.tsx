"use client";

import { useState } from "react";
import { DEFAULT_TAB, TabKey } from "@/content/nav";
import Sidebar from "@/components/layout/Sidebar";
import MainContent from "@/components/layout/MainContent";
import TopNav from "@/components/layout/TopNav";

export default function Home() {
  const [active, setActive] = useState<TabKey>(DEFAULT_TAB);

  return (
    <div className="relative mx-auto flex min-h-screen max-w-[1180px] flex-col shadow-[0_30px_80px_-40px_rgba(11,18,32,0.5)] max-[780px]:shadow-none">
      <TopNav active={active} onChange={setActive} />
      <div className="flex flex-1 items-stretch max-[780px]:flex-col">
        <Sidebar />
        <MainContent active={active} />
      </div>
    </div>
  );
}
