import { ShieldCheck, Circle } from "lucide-react";
import Link from "next/link";
export default function Home() {
  return (
    <main className=" text-white relative overflow-hidden ">
      {/* Top Right Square */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-white/2 rounded-2xl backdrop-blur-md rotate-12"></div>
      {/* Bottom Left Square */}
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-white/2 rounded-2xl backdrop-blur-md -rotate-12"></div>

      <section className="w-full h-full flex flex-col items-center  gap-7 pt-32  relative z-10  ">
        <p className="flex gap-1 text-sm">
          <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
          OFFICIAL SAFETY PROTOCOL
        </p>
        <div className="flex flex-col items-center ">
          <h1 className="lg:text-7xl font-bold ">Check your medicine</h1>
          <h1 className="lg:text-7xl font-bold text-blue-400">
            Quality instantly
          </h1>
          <p className="pt-3 text-gray-400">
            Verify if your medicine is safe using official NSQ data
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center ">
          <Link href="/input">
            <button className="w-32 h-12 bg-blue-400 text-black rounded  border-black transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_10px_rgba(255,255,255,0.5)]">
              Check now
            </button>
          </Link>
          <div className="flex gap-2 items-center text-[8.5px]">
            <Circle className="w-1 h-1 bg-green-500 rounded-full  animate-pulse" />
            <p>Powered by official NSQ data</p>
          </div>
        </div>
      </section>
    </main>
  );
}
