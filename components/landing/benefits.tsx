"use client";

import { motion } from "framer-motion";
import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { fadeIn } from "@/lib/animations";
import { Sparkles, Clock, Zap, Search, Award, Layout } from "lucide-react";
import { cn } from "@/lib/utils";

const benefits = [
  {
    icon: Sparkles,
    title: "AI-Powered Content",
    description: "Smart suggestions for skills, achievements, and job-specific language that recruiters look for",
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-100 dark:bg-blue-900/30"
  },
  {
    icon: Clock,
    title: "Save Time",
    description: "Create a professional resume in minutes instead of hours with our intuitive builder",
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-100 dark:bg-purple-900/30"
  },
  {
    icon: Zap,
    title: "Instant Downloads",
    description: "Export your documents instantly in PDF for any application",
    color: "text-cyan-600 dark:text-cyan-400",
    bgColor: "bg-cyan-100 dark:bg-cyan-900/30"
  },
  {
    icon: Search,
    title: "ATS-Optimized",
    description: "Our templates are designed to pass through Applicant Tracking Systems with flying colors",
    color: "text-orange-600 dark:text-orange-400",
    bgColor: "bg-orange-100 dark:bg-orange-900/30"
  },
  {
    icon: Award,
    title: "Industry-Specific",
    description: "Tailored templates and content suggestions for over 40 industries and career paths",
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-100 dark:bg-green-900/30"
  },
  {
    icon: Layout,
    title: "Unlimited Customization",
    description: "Personalize every aspect of your resume effortlessly using AI-powered prompting tools.",
    color: "text-red-600 dark:text-red-400",
    bgColor: "bg-red-100 dark:bg-red-900/30"
  }
];

export function Benefits() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Our platform offers everything you need to create job-winning resumes and cover letters
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface BenefitCardProps {
  benefit: {
    icon: React.ElementType;
    title: string;
    description: string;
    color: string;
    bgColor: string;
  };
  index: number;
}

function BenefitCard({ benefit, index }: BenefitCardProps) {
  const { icon: Icon, title, description, color, bgColor } = benefit;

  return (
    <motion.div
      variants={fadeIn('up', 0.1 * index)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <Card className="h-full transition-all hover:shadow-md border-0 shadow">
        <CardHeader className="pb-2">
          <div className={cn(
            "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
            bgColor
          )}>
            <Icon className={cn("h-6 w-6", color)} />
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
}