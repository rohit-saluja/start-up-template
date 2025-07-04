import { Moon } from "lucide-react";

export default function Header() {
  return (
    <div className="flex items-center justify-between max-w-7xl mx-auto py-3 relative">
      <div className="flex items-center gap-2">
        <div className="rounded-lg h-[36px] w-[36px] bg-white border border-neutral-400 flex items-center justify-center">
          <div className="grid grid-cols-2 gap-1">
            <div className="rounded-sm h-2 w-2 bg-blue-500"></div>
            <div className="rounded-sm h-2 w-2 bg-blue-500"></div>
            <div className="rounded-sm h-2 w-2 bg-blue-500"></div>
            <div className="rounded-sm h-2 w-2 bg-blue-500"></div>
          </div>
        </div>
        <p className="text-sm font-semibold text-neutral-100">Startup</p>
      </div>
      <div className="flex items-center gap-7 absolute inset-x-0 justify-center">
        <p className="text-sm text-neutral-300">Features</p>
        <p className="text-sm text-neutral-300">Pricing</p>
        <p className="text-sm text-neutral-300">Contact</p>
      </div>
      <div className="flex items-center gap-5">
        <button>
          <Moon className="w-4 h-4 text-neutral-400" />
        </button>
        <button className="text-sm text-white font-semibold px-4 py-2 bg-transparent transition-all duration-200 relative cursor-pointer hover:-translate-y-0.5">
          Login
        </button>
        <button className="px-4 py-2 bg-white text-black rounded-md relative cursor-pointer hover:-translate-y-0.5 duration-200 transition">
          Book a call
        </button>
      </div>
    </div>
  );
}
