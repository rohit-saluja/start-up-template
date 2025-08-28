"use client";
import { motion } from "motion/react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Rocket, 
  Workflow, 
  Network, 
  Sparkles, 
  Code, 
  BarChart3,
  Lock,
  Headphones
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Rocket,
      title: "One-Click Deployment",
      description: "Deploy your applications instantly with a single click. No complex configurations or lengthy setup processes.",
      badge: "Most Popular"
    },
    {
      icon: Workflow,
      title: "Intuitive Workflow",
      description: "Streamlined development workflow that adapts to your team's needs. From development to production in minutes.",
      badge: "New"
    },
    {
      icon: Network,
      title: "Edge Network Hosting",
      description: "Leverage our global edge network for lightning-fast content delivery and optimal user experience worldwide.",
      badge: "Performance"
    },
    {
      icon: Sparkles,
      title: "AI-Powered Optimization",
      description: "Intelligent code optimization and performance suggestions powered by advanced AI algorithms.",
      badge: "AI"
    },
    {
      icon: Code,
      title: "Developer Experience",
      description: "Built by developers, for developers. Enjoy the best-in-class developer experience with powerful tooling.",
      badge: "DX"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Comprehensive analytics and monitoring to track your application's performance and user engagement.",
      badge: "Analytics"
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "Bank-grade security with end-to-end encryption, compliance certifications, and advanced threat protection.",
      badge: "Security"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock expert support from our team of engineers. Get help when you need it most.",
      badge: "Support"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              succeed
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools and features you need 
            to build, deploy, and scale your applications with confidence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="bg-gray-50 dark:bg-neutral-800/50 border-gray-200 dark:border-neutral-700 p-6 h-full flex flex-col backdrop-blur-sm hover:bg-gray-100 dark:hover:bg-neutral-800/70 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <feature.icon className="h-10 w-10 text-blue-400" />
                  <Badge variant="secondary" className="bg-blue-600/20 text-blue-300 border-blue-500/30">
                    {feature.badge}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-neutral-400 flex-1">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500/5 dark:from-blue-500/10 to-purple-500/5 dark:to-purple-500/10 rounded-2xl p-8 border border-gray-200 dark:border-neutral-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to experience the future of deployment?
            </h3>
            <p className="text-gray-600 dark:text-neutral-400 mb-6 max-w-2xl mx-auto">
              Join thousands of developers who have revolutionized their workflow 
              with our platform. Start your journey today.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Get Started Free
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;