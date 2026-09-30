import Sidebar from "@/components/layout/Sidebar";
import MainContent from "@/components/layout/MainContent";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-full max-w-[1180px] items-start max-[780px]:flex-col">
      <Sidebar />
      <MainContent />
    </div>
  );
}
