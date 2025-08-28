"use client";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Globe } from "lucide-react";

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
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Deploy your website in{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              seconds
            </span>
            , not hours
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 mb-8 max-w-4xl mx-auto">
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
            className="border-neutral-600 text-neutral-200 hover:bg-neutral-800 px-8 py-6 text-lg"
          >
            Book a Call
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm border border-neutral-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex items-center justify-center flex-col">
                <Zap className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Lightning Fast</h3>
                <p className="text-neutral-400 text-center">Deploy in under 30 seconds</p>
              </div>
              <div className="flex items-center justify-center flex-col">
                <Shield className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Secure by Default</h3>
                <p className="text-neutral-400 text-center">Enterprise-grade security</p>
              </div>
              <div className="flex items-center justify-center flex-col">
                <Globe className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Global Network</h3>
                <p className="text-neutral-400 text-center">Edge network worldwide</p>
              </div>
            </div>
            
            <div className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-600">
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <p className="text-neutral-400 text-sm">dashboard.startup.com</p>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <pre className="text-green-400 text-sm font-mono">
{`$ startup deploy
✓ Building your project...
✓ Optimizing assets...
✓ Deploying to edge network...
✓ Live at: https://your-app.startup.com

🚀 Deployed in 23 seconds!`}
                </pre>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16"
        >
          <p className="text-neutral-500 text-sm">
            Trusted by <span className="text-blue-400 font-semibold">27,000+</span> developers worldwide
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;