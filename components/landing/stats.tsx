"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { fadeIn } from "@/lib/animations";
import { Users, Award, FileCheck, Building } from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  {
    icon: Users,
    value: 250000,
    suffix: "+",
    label: "Happy Users",
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-100 dark:bg-blue-900/30"
  },
  {
    icon: FileCheck,
    value: 1000000,
    suffix: "+",
    label: "Resumes Created",
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-100 dark:bg-purple-900/30"
  },
  {
    icon: Award,
    value: 89,
    suffix: "%",
    label: "Success Rate",
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-100 dark:bg-green-900/30"
  },
  {
    icon: Building,
    value: 40,
    suffix: "+",
    label: "Industries Covered",
    color: "text-cyan-600 dark:text-cyan-400",
    bgColor: "bg-cyan-100 dark:bg-cyan-900/30"
  }
];

export function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="py-16 md:py-20 bg-blue-600 dark:bg-blue-800 text-white relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Professionals Worldwide</h2>
          <p className="text-lg text-blue-100">
            Our platform has helped professionals across the globe land their dream jobs
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              stat={stat}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface StatItemProps {
  stat: {
    icon: React.ElementType;
    value: number;
    suffix: string;
    label: string;
    color: string;
    bgColor: string;
  };
  index: number;
  isInView: boolean;
}

function StatItem({ stat, index, isInView }: StatItemProps) {
  const { icon: Icon, value, suffix, label, color, bgColor } = stat;

  return (
    <motion.div
      variants={fadeIn('up', 0.1 * index)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="flex flex-col items-center">
        <div className={cn(
          "w-14 h-14 rounded-full flex items-center justify-center mb-4",
          "bg-white/20"
        )}>
          <Icon className="h-7 w-7" />
        </div>
        
        <div className="font-bold text-3xl md:text-4xl mb-2">
          {isInView ? (
            <CountUp
              end={value}
              duration={2.5}
              suffix={suffix}
              separator=","
            />
          ) : (
            <span>0{suffix}</span>
          )}
        </div>
        
        <div className="text-blue-100">{label}</div>
      </div>
    </motion.div>
  );
}