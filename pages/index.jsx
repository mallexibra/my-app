import Banner from "@/src/components/banner";
import Search from "@/src/components/search";
import PendingTasks from "@/src/components/pendingTasks";
import { Inter } from "next/font/google";
import Events from "@/src/components/events";
import Navbar from "@/src/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="w-full lg:max-w-3xl lg:mx-auto text-white p-7">
      <header className="flex justify-between items-center">
        <div>
          <h5>Selamat datang,</h5>
          <h1 className="font-bold">Adinda</h1>
        </div>
        <div className="w-8 md:w-10 md:h-10 h-8 bg-white border-2 rounded-md border-sky-800">
        </div>
      </header>
      <div>
        <Search />
        <Banner />
        <div className="flex flex-col lg:flex-row lg:gap-5 justify-between">
          <PendingTasks />
          <Events />
        </div>
        <Navbar />
      </div>
    </main>
  );
}
