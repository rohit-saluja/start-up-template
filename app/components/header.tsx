"use client";
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";

const Logo = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="relative h-[40px] w-[40px] bg-gradient-to-br from-neutral-700 to-neutral-800 rounded-lg flex items-center justify-center shadow-sm">
        <img 
          src="/Subtract.svg" 
          alt="Logo" 
          className="w-6 h-6"
        />
      </div>
      <p className="text-lg font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-neutral-300 bg-clip-text text-transparent">
        Startup
      </p>
    </div>
  );
};

const LoginButton = ({ isScrolled }: { isScrolled: boolean }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="p-2 rounded-md hover:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors"
      >
        {theme === "dark" ? (
          <Sun className="w-4 h-4 text-neutral-400 hover:text-yellow-400 transition-colors" />
        ) : (
          <Moon className="w-4 h-4 text-neutral-600 hover:text-blue-400 transition-colors" />
        )}
      </button>
      <button className="px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-black rounded-md relative cursor-pointer hover:-translate-y-0.5 duration-200 transition">
        Book a call
      </button>
    </div>
  );
};

const Navbar = ({ isScrolled }: { isScrolled: boolean }) => {
  const [active, setActive] = useState<"features" | "pricing" | "contact" | "">("");
  return (
    <motion.div 
      className="flex items-center justify-center" 
      layoutId="navbar"
      animate={{
        gap: isScrolled ? "16px" : "28px"
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30
      }}
    >
      <button className="text-sm text-gray-600 dark:text-neutral-300 relative px-2 py-2" onMouseEnter={() => setActive("features")} onMouseLeave={() => setActive("")}>
        <span>Features</span>
        {active === "features" && <motion.div className="absolute bg-gray-200 dark:bg-neutral-700 inset-0 rounded-full -z-10 opacity-50" layoutId="navbar-active"></motion.div>}
      </button>
      <button className="text-sm text-gray-600 dark:text-neutral-300 relative px-2 py-2" onMouseEnter={() => setActive("pricing")} onMouseLeave={() => setActive("")}>
        <span>Pricing</span>
        {active === "pricing" && <motion.div className="absolute bg-gray-200 dark:bg-neutral-700 inset-0 rounded-full -z-10 opacity-50" layoutId="navbar-active"></motion.div>}
      </button>
      <button className="text-sm text-gray-600 dark:text-neutral-300 relative px-2 py-2" onMouseEnter={() => setActive("contact")} onMouseLeave={() => setActive("")}>
        <span>Contact</span>
        {active === "contact" && <motion.div className="absolute bg-gray-200 dark:bg-neutral-700 inset-0 rounded-full -z-10 opacity-50" layoutId="navbar-active"></motion.div>}
      </button>
    </motion.div>
  );
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getBorderColor = () => {
    return theme === "dark" ? "rgb(64, 64, 64)" : "rgb(229, 231, 235)";
  };

  const getShadow = () => {
    return theme === "dark" 
      ? "0 10px 25px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.1)"
      : "0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)";
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-3">
      <motion.div
        className="bg-white/95 dark:bg-black/80 backdrop-blur-md border-gray-200 dark:border-neutral-800"
        animate={{
          borderRadius: isScrolled ? "9999px" : "0px",
          maxWidth: isScrolled ? "800px" : "1200px",
          margin: "0 auto",
          border: isScrolled ? `1px solid ${getBorderColor()}` : "none",
          boxShadow: isScrolled ? getShadow() : "none"
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30
        }}
      >
        <div className="flex items-center mx-auto py-4 px-6 relative">
          <div className="flex-1">
            <Logo />
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Navbar isScrolled={isScrolled} />
          </div>
          <div className="flex-1 flex justify-end">
            <LoginButton isScrolled={isScrolled} />
          </div>
        </div>
      </motion.div>
    </header>
  );
}
