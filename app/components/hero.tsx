"use client";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Deploy your website in{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              seconds
            </span>
            , not hours
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-neutral-400 mb-8 max-w-4xl mx-auto">
            Experience lightning-fast deployment with our cutting-edge platform. 
            Build, deploy, and scale your applications with unprecedented speed and reliability.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
            Create Account
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-gray-300 dark:border-neutral-600 text-gray-900 dark:text-neutral-200 hover:bg-gray-100 dark:hover:bg-neutral-800 px-8 py-6 text-lg"
          >
            Book a Call
          </Button>
        </motion.div>


        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16"
        >
          <p className="text-gray-500 dark:text-neutral-500 text-sm">
            Trusted by <span className="text-blue-400 font-semibold">27,000+</span> developers worldwide
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;