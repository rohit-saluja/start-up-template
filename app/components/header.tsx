"use client";
import { Moon } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

const Logo = () => {
  return (
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
  );
};

const LoginButton = () => {
  return (
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
  );
};

const Navbar = () => {
  const [active, setActive] = useState<"features" | "pricing" | "contact" | "">("");
  return (
    <motion.div className="flex items-center gap-7 absolute inset-x-0 justify-center" layoutId="navbar">
      <button className="text-sm text-neutral-300 relative px-3 py-2" onMouseEnter={() => setActive("features")} onMouseLeave={() => setActive("")}>
        <span>Features</span>
        {active === "features" && <motion.div className="absolute bg-neutral-700 inset-0 rounded-full -z-10 opacity-50" layoutId="navbar-active"></motion.div>}
      </button>
      <button className="text-sm text-neutral-300 relative px-3 py-2" onMouseEnter={() => setActive("pricing")} onMouseLeave={() => setActive("")}>
        <span>Pricing</span>
        {active === "pricing" && <motion.div className="absolute bg-neutral-700 inset-0 rounded-full -z-10 opacity-50" layoutId="navbar-active"></motion.div>}
      </button>
      <button className="text-sm text-neutral-300 relative px-3 py-2" onMouseEnter={() => setActive("contact")} onMouseLeave={() => setActive("")}>
        <span>Contact</span>
        {active === "contact" && <motion.div className="absolute bg-neutral-700 inset-0 rounded-full -z-10 opacity-50" layoutId="navbar-active"></motion.div>}
      </button>
    </motion.div>
  );
};

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-neutral-800">
      <div className="flex items-center justify-between max-w-7xl mx-auto py-4 px-6 relative">
        <Logo />
        <Navbar />
        <LoginButton />
      </div>
    </header>
  );
}
