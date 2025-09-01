"use client";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";

const ConfigurationTextFlip = () => {
  const configWords = ["configuration", "setup", "complexity", "hassle", "friction"];
  
  return (
    <ContainerTextFlip
      words={configWords}
      interval={3000}
      className="!bg-gradient-to-b !from-blue-400 !to-purple-600 !text-white !shadow-blue-500/20 text-5xl md:text-[88px] font-bold leading-tight !pt-1 !pb-2 !h-auto !min-w-fit !whitespace-nowrap"
      textClassName="text-white !whitespace-nowrap"
      animationDuration={700}
    />
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-[88px] font-bold text-gray-900 dark:text-white mb-6 leading-tight flex flex-nowrap items-center justify-center gap-x-4 whitespace-nowrap">
            <span className="whitespace-nowrap">Ship faster with</span>
            <span className="whitespace-nowrap">zero</span>
            <ConfigurationTextFlip />
          </h1>
          <p className="text-sm text-gray-600 dark:text-neutral-400 mb-8 max-w-4xl mx-auto">
            Experience one-click deployment with AI-powered optimization, edge network hosting, 
            and real-time analytics. Built for developers who demand speed and reliability.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg cursor-pointer">
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-gray-300 dark:border-neutral-900 text-gray-900 dark:text-neutral-200 hover:bg-gray-100 dark:hover:bg-neutral-800 px-8 py-6 text-lg shadow-[1px_1px_10px_1px_rgba(0,0,0,.08)_inset] dark:shadow-[1px_1px_10px_1px_rgba(255,255,255,.08)_inset] cursor-pointer"
          >
            Schedule Demo
          </Button>
        </motion.div>


        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16"
        >
          <p className="text-gray-500 dark:text-neutral-500 text-sm">
            Trusted by <span className="text-blue-400 font-semibold">15,000+</span> entrepreneurs worldwide
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;