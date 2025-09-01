"use client";
import { Moon, Sun, Menu, X } from "lucide-react";
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
      <div className="relative h-[40px] w-[40px] bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-700 dark:to-neutral-800 rounded-lg flex items-center justify-center shadow-[0_10px_10px_-3px_rgba(255,255,255,.05)]">
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
          <Sun className="w-4 h-4 text-neutral-400" />
        ) : (
          <Moon className="w-4 h-4 text-neutral-600" />
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
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
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

const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [activeTab, setActiveTab] = useState<typeof navItems[number] | null>(null);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-80 bg-white dark:bg-black border-l border-gray-200 dark:border-neutral-800 z-50 md:hidden"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Menu</h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-600 dark:text-neutral-400" />
                </button>
              </div>
              
              <nav className="space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="w-full text-left relative p-4 rounded-lg cursor-pointer group"
                    onMouseEnter={() => setActiveTab(item)}
                    onMouseLeave={() => setActiveTab(null)}
                    onClick={() => scrollToSection(item.id)}
                  >
                    <span className="relative z-10 text-gray-700 dark:text-neutral-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                      {item.label}
                    </span>
                    <AnimatePresence>
                      {activeTab?.id === item.id && (
                        <motion.div
                          layoutId="mobile-navbar-active"
                          className="absolute inset-0 bg-gray-100 dark:bg-neutral-800 rounded-lg"
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30
                          }}
                        />
                      )}
                    </AnimatePresence>
                  </motion.button>
                ))}
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const MobileMenuToggle = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg transition-colors md:hidden"
    >
      <Menu className="w-5 h-5 text-gray-600 dark:text-neutral-400" />
    </button>
  );
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
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
          <div className="flex-1 flex justify-end items-center gap-2">
            <MobileMenuToggle onClick={() => setIsMobileMenuOpen(true)} />
            <LoginButton  />
          </div>
        </div>
      </motion.div>
      
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </header>
  );
}
