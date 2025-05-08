"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { FileInput, Edit3, Send } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    icon: FileInput,
    title: "Create Your Account",
    description: "Sign up with your email and password to access the platform. Securely store your generated resumes and cover letters for future use.",
    color: "from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700",
  },
  {
    icon: Edit3,
    title: "Add Your Information",
    description: "Fill in your personal and professional details. Enter a job description to let our AI generate tailored resumes or cover letters for you.",
    color: "from-purple-500 to-purple-600 dark:from-purple-600 dark:to-purple-700",
  },
  {
    icon: Send,
    title: "Generate & Save",
    description: "Generate a customized resume or cover letter based on the job description you provide. All documents are securely saved in your account for easy access and editing anytime.",
    color: "from-cyan-500 to-cyan-600 dark:from-cyan-600 dark:to-cyan-700",
  }
];

export function ProcessSteps() {
  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Create professional, job-winning resumes and cover letters in minutes, not hours
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer(0.2, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

interface StepCardProps {
  step: {
    icon: React.ElementType;
    title: string;
    description: string;
    color: string;
  };
  index: number;
}

function StepCard({ step, index }: StepCardProps) {
  const { icon: Icon, title, description, color } = step;
  
  return (
    <motion.div
      variants={fadeIn('up', 0.1 * index)}
      className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className={cn(
        "absolute -right-12 -top-12 w-32 h-32 rounded-full bg-gradient-to-br opacity-20 group-hover:opacity-30 transition-opacity",
        color
      )}></div>
      
      <div className="relative z-10">
        <div className={cn(
          "inline-flex items-center justify-center w-12 h-12 rounded-lg mb-6 bg-gradient-to-br text-white",
          color
        )}>
          <Icon className="h-6 w-6" />
        </div>
        
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
        
        <div className="mt-6 flex items-center">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold dark:bg-blue-900/30 dark:text-blue-400">
            {index + 1}
          </span>
          {index < 2 && (
            <div className="ml-2 h-0.5 w-16 bg-gray-200 dark:bg-gray-700"></div>
          )}
        </div>
      </div>
    </motion.div>
  );
}