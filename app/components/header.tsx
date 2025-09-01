"use client";
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const Logo = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="flex items-center gap-4 cursor-pointer" onClick={scrollToTop}>
      <div className="relative h-[40px] w-[40px] bg-gradient-to-br from-neutral-700 to-neutral-800 rounded-lg flex items-center justify-center shadow-[0_10px_10px_-3px_rgba(255,255,255,.05)]">
        <div className="bg-white rounded-full p-1.5 flex items-center justify-center w-[24px] h-[24px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <img 
            src="/Subtract.svg" 
            alt="Logo" 
            className="w-6 h-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          />
        </div>
      </div>
      <p className="text-lg font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-neutral-300 bg-clip-text text-transparent">
        Startup
      </p>
    </div>
  );
};

const LoginButton = () => {
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
      <button className="px-3 py-1.5 bg-gray-900 dark:bg-white text-white dark:text-black rounded-md relative cursor-pointer hover:-translate-y-0.5 duration-200 transition text-sm">
        Book a call
      </button>
    </div>
  );
};

const navItems = [
  { id: "features", label: "Features" },
  { id: "pricing", label: "Pricing" },
  { id: "contact", label: "Contact" }
] as const;

const Navbar = () => {
  const [activeTab, setActiveTab] = useState<typeof navItems[number] | null>(null);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <nav className="flex items-center justify-center gap-0">
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            className="text-sm text-gray-600 dark:text-neutral-300 relative px-6 py-2 cursor-pointer"
            onMouseEnter={() => setActiveTab(item)}
            onMouseLeave={() => setActiveTab(null)}
            onClick={() => scrollToSection(item.id)}
          >
            <span className="relative z-10">{item.label}</span>
            <AnimatePresence>
              {activeTab?.id === item.id && (
                <motion.div
                  layoutId="navbar-active"
                  className="absolute inset-0 bg-gray-200 dark:bg-neutral-900 rounded-full shadow-inner shadow-black/05 dark:shadow-white/05"
                  transition={{
                    type: "spring",
                    stiffness: 547,
                    damping: 37,
                    mass: 1
                  }}
                />
              )}
            </AnimatePresence>
          </motion.button>
        ))}
      </nav>
    </div>
  );
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-3">
      <motion.div
        className={cn(
          isScrolled ? "bg-white/95 dark:bg-black/80 backdrop-blur-md border border-gray-200 dark:border-neutral-900 shadow-lg" : ""
        )}
        initial={{
          borderRadius: "0px",
          maxWidth: "1200px",
          margin: "0 auto"
        }}
        animate={{
          borderRadius: isScrolled ? "9999px" : "0px",
          maxWidth: isScrolled ? "800px" : "1200px",
          margin: "0 auto"
        }}
        transition={{
          type: "spring",
          stiffness: 44,
          damping: 10,
          mass:1
        }}
      >
        <div className={cn("flex items-center mx-auto px-6 py-2 relative", isScrolled && "shadow-[1px_1px_10px_1px_rgba(0,0,0,.08)_inset] dark:shadow-[1px_1px_10px_1px_rgba(255,255,255,.08)_inset] rounded-full")}>
          <div className="flex-1">
            <Logo />
          </div>
          <Navbar />
          <div className="flex-1 flex justify-end">
            <LoginButton  />
          </div>
        </div>
      </motion.div>
    </header>
  );
}
