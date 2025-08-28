"use client";
import { motion } from "motion/react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Hobby",
      price: "$99",
      period: "/month",
      description: "Perfect for personal projects and learning",
      features: [
        "Up to 5 projects",
        "100GB bandwidth",
        "Basic analytics",
        "Community support",
        "99.9% uptime",
        "Custom domains"
      ],
      popular: false,
      cta: "Get Started"
    },
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Ideal for growing startups and small teams",
      features: [
        "Up to 25 projects",
        "1TB bandwidth",
        "Advanced analytics",
        "Priority support",
        "99.99% uptime",
        "Custom domains",
        "Team collaboration",
        "API access",
        "Advanced security"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Pro",
      price: "$1,490",
      period: "/month",
      description: "Built for enterprises and large organizations",
      features: [
        "Unlimited projects",
        "10TB bandwidth",
        "Enterprise analytics",
        "24/7 phone support",
        "99.999% uptime",
        "Custom domains",
        "Team collaboration",
        "Full API access",
        "Enterprise security",
        "Dedicated account manager",
        "Custom integrations",
        "SLA guarantee"
      ],
      popular: false,
      cta: "Contact Sales"
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
            Simple,{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              transparent
            </span>{" "}
            pricing
          </h2>
          <p className="text-xl text-gray-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Choose the perfect plan for your needs. All plans include our core features 
            with no hidden fees or surprise charges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className={`
                p-8 h-full flex flex-col relative overflow-hidden
                ${plan.popular 
                  ? 'bg-gradient-to-b from-blue-600/10 dark:from-blue-600/20 to-purple-600/10 dark:to-purple-600/20 border-blue-500/50' 
                  : 'bg-gray-50 dark:bg-neutral-800/50 border-gray-200 dark:border-neutral-700'
                }
                backdrop-blur-sm hover:bg-opacity-80 transition-all duration-300
              `}>
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center py-2 text-sm font-semibold">
                      <Star className="inline-block w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className={`${plan.popular ? 'mt-10' : 'mt-0'}`}>
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-600 dark:text-neutral-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline">
                      <span className="text-5xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                      <span className="text-xl text-gray-600 dark:text-neutral-400 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <Button 
                    className={`
                      w-full mb-8 py-6 text-lg font-semibold
                      ${plan.popular 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : 'bg-gray-200 dark:bg-neutral-700 hover:bg-gray-300 dark:hover:bg-neutral-600 text-gray-900 dark:text-white'
                      }
                    `}
                  >
                    {plan.cta}
                  </Button>

                  <ul className="space-y-4 flex-1">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-neutral-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gray-100 dark:bg-neutral-800/30 rounded-2xl p-8 border border-gray-200 dark:border-neutral-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Need a custom solution?
            </h3>
            <p className="text-gray-600 dark:text-neutral-400 mb-6 max-w-2xl mx-auto">
              We offer enterprise-grade solutions with custom pricing, dedicated infrastructure, 
              and white-label options for large organizations.
            </p>
            <Button variant="outline" className="border-gray-300 dark:border-neutral-600 text-gray-900 dark:text-neutral-200 hover:bg-gray-100 dark:hover:bg-neutral-800">
              Contact Enterprise Sales
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;