"use client";
import { motion } from "motion/react";
import { useState } from "react";
import { Rocket, Workflow, Network, Sparkles, Code, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Ripple } from "@/components/magicui/ripple";

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">{icon}</div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <p className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

const Features = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="features" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Everything you need to <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">succeed</span>
          </h2>
          <p className="text-sm text-gray-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools and features you need to build, deploy, and scale your applications with confidence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="pb-[100px]"
        >
          <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
            <GridItem
              area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
              icon={<Rocket className="h-4 w-4 text-black dark:text-neutral-400" />}
              title="One-Click Deployment"
              description="Deploy your applications instantly with a single click. No complex configurations or lengthy setup processes."
            />

            <GridItem
              area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
              icon={<Workflow className="h-4 w-4 text-black dark:text-neutral-400" />}
              title="Intuitive Workflow"
              description="Streamlined development workflow that adapts to your team's needs. From development to production in minutes."
            />

            <GridItem
              area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
              icon={<Network className="h-4 w-4 text-black dark:text-neutral-400" />}
              title="Edge Network Hosting"
              description="Leverage our global edge network for lightning-fast content delivery and optimal user experience worldwide."
            />

            <GridItem
              area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
              icon={<Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />}
              title="AI-Powered Optimization"
              description="Intelligent code optimization and performance suggestions powered by advanced AI algorithms."
            />

            <GridItem
              area="md:[grid-area:3/1/4/7] xl:[grid-area:2/8/3/10]"
              icon={<Code className="h-4 w-4 text-black dark:text-neutral-400" />}
              title="Developer Experience"
              description="Built by developers, for developers. Enjoy the best-in-class developer experience with powerful tooling."
            />

            <GridItem
              area="md:[grid-area:3/7/4/13] xl:[grid-area:2/10/3/13]"
              icon={<BarChart3 className="h-4 w-4 text-black dark:text-neutral-400" />}
              title="Real-time Analytics"
              description="Comprehensive analytics and monitoring to track your application's performance and user engagement."
            />
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pb-[100px]"
        >
          <div
            className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-neutral-900 dark:to-neutral-800 rounded-3xl border border-gray-200 dark:border-neutral-700 "
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="grid md:grid-cols-2 min-h-[400px]">
              {/* Left side - Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Let's Get In Touch.</h3>
                <p className="text-gray-600 dark:text-neutral-400 mb-8 text-sm">
                  Your innovation instruments should serve you, not the other way around. We're happy to help you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">
                      Book a discovery call
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="border-gray-300 dark:border-neutral-900 text-gray-900 dark:text-neutral-200 hover:bg-gray-100 dark:hover:bg-neutral-800 shadow-[1px_1px_10px_1px_rgba(0,0,0,.08)_inset] dark:shadow-[1px_1px_10px_1px_rgba(255,255,255,.08)_inset] cursor-pointer"
                    >
                      Test Your Samples
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    </Button>
                  </motion.div>
                </div>
              </div>

              {/* Right side - Wave with Ripple */}
              <div className="relative flex items-center justify-center overflow-hidden">
                <div className="w-full h-full flex items-center justify-center absolute right-[-300px]">
                  <Ripple mainCircleSize={340} mainCircleOpacity={0.15} numCircles={5} hovered={isHovered} className="opacity-60" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
