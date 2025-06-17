"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeIn } from "@/lib/animations";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const plans = [
  {
    name: "Basic",
    price: "Free",
    description: "Perfect for getting started",
    features: [
      "Up to 6 CVs/day",
      "Up to 6 Cover Letters/day",
      "No unlimited generations",
      "No priority support"
    ],
    recommended: false,
    color: "border-gray-200 dark:border-gray-700"
  },
  {
    name: "Premium",
    price: "$9.99",
    period: "/month",
    description: "Most popular choice",
    features: [
      "Unlimited CVs/day",
      "Unlimited Cover Letters/day",
      "Priority support",
      "Access to new features first"
    ],
    recommended: true,
    color: "border-blue-500 dark:border-blue-400"
  },
  // {
  //   name: "Professional",
  //   price: "$19.99",
  //   period: "/month",
  //   description: "For career-focused professionals",
  //   features: [
  //     "All Premium features",
  //     "Advanced AI optimization",
  //     "LinkedIn profile optimization",
  //     "Career coach consultation",
  //     "Personal domain for online resume",
  //     "Priority phone support"
  //   ],
  //   recommended: false,
  //   color: "border-gray-200 dark:border-gray-700"
  // }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Choose the plan that fits your career goals and budget
          </p>
        </motion.div>

        <div className="grid grid-flow-col auto-cols-auto gap-8 justify-center">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} index={index} />
          ))}
        </div>

        <motion.div
          variants={fadeIn('up', 0.7)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl max-w-3xl mx-auto shadow-sm">
            <h3 className="text-xl font-bold mb-4">Need a custom solution for your team?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We offer special plans for organizations and career centers. Get volume discounts for multiple users.
            </p>
            <Link href="/get-started">
              <Button variant="outline" size="lg">
                Contact Sales
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface PricingCardProps {
  plan: {
    name: string;
    price: string;
    period?: string;
    description: string;
    features: string[];
    recommended: boolean;
    color: string;
  };
  index: number;
}

function PricingCard({ plan, index }: PricingCardProps) {
  const { name, price, period, description, features, recommended, color } = plan;

  return (
    <motion.div
      variants={fadeIn('up', 0.1 * index)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={cn(
        "rounded-xl overflow-hidden border-2 transition-all relative flex flex-col h-full",
        color,
        recommended ? "shadow-lg" : "shadow-sm"
      )}
    >
      {recommended && (
        <div className="bg-blue-600 text-white py-1 px-3 text-sm font-medium absolute top-0 right-0 rounded-bl-lg">
          Recommended
        </div>
      )}

      <div className="p-6 md:p-8 flex-1">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>

        <div className="mb-6">
          <span className="text-3xl md:text-4xl font-bold">{price}</span>
          {period && <span className="text-gray-500 dark:text-gray-400">{period}</span>}
        </div>

        <ul className="space-y-3 mb-8">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <Check className={cn(
                "h-5 w-5 mr-3 mt-0.5",
                recommended ? "text-blue-600 dark:text-blue-400" : "text-green-600 dark:text-green-400"
              )} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-6 md:p-8 pt-0">
        <Link href={"https://www.cvcomet.com"}>
          <Button
            className={cn(
              "w-full",
              recommended ? "" : "bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600"
            )}
          >
            Get Started
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}