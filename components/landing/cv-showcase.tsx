"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeIn } from "@/lib/animations";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const templates = [
  {
    name: "Professional",
    description: "Clean design for corporate and traditional industries",
    features: ["ATS-Optimized", "Easy to scan", "Professional look"],
    color: "bg-blue-50 dark:bg-blue-900/20",
    accent: "border-blue-500 dark:border-blue-600"
  },
  {
    name: "Creative",
    description: "Stand out with a unique design for creative fields",
    features: ["Eye-catching layout", "Showcase portfolio", "Creative sections"],
    color: "bg-purple-50 dark:bg-purple-900/20",
    accent: "border-purple-500 dark:border-purple-600"
  },
  {
    name: "Executive",
    description: "Sophisticated design for senior professionals",
    features: ["Leadership focus", "Accomplishment highlights", "Premium look"],
    color: "bg-cyan-50 dark:bg-cyan-900/20",
    accent: "border-cyan-500 dark:border-cyan-600"
  },
  {
    name: "Modern",
    description: "Contemporary design with a clean professional look",
    features: ["Current design trends", "Balanced layout", "Visual hierarchy"],
    color: "bg-green-50 dark:bg-green-900/20",
    accent: "border-green-500 dark:border-green-600"
  }
];

export function CVShowcase() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = direction === 'left' ? -320 : 320;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="templates" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Templates</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Choose from a variety of carefully designed templates to showcase your skills and experience
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:block">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full h-10 w-10 shadow-md"
              onClick={() => scroll('left')}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>
          
          <motion.div 
            variants={fadeIn('up', 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-8 px-2 -mx-2 snap-x"
          >
            {templates.map((template, index) => (
              <TemplateCard key={index} template={template} />
            ))}
          </motion.div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:block">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full h-10 w-10 shadow-md"
              onClick={() => scroll('right')}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <motion.div 
          variants={fadeIn('up', 0.7)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg">
            View All Templates
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

interface TemplateCardProps {
  template: {
    name: string;
    description: string;
    features: string[];
    color: string;
    accent: string;
  };
}

function TemplateCard({ template }: TemplateCardProps) {
  const { name, description, features, color, accent } = template;

  return (
    <div className="flex-shrink-0 w-[300px] snap-start">
      <div className={cn(
        "rounded-lg p-5 h-full flex flex-col border-2 transition-all hover:shadow-lg",
        color,
        accent
      )}>
        <div className="relative w-full h-40 bg-white rounded-md mb-4 dark:bg-gray-800 overflow-hidden shadow-sm">
          {/* Resume preview mockup */}
          <div className="absolute inset-2 flex flex-col">
            <div className="w-full h-6 bg-gray-100 mb-2 dark:bg-gray-700"></div>
            <div className="flex gap-2 flex-1">
              <div className="w-1/3 bg-gray-50 p-1 dark:bg-gray-750">
                <div className="w-full h-3 bg-gray-100 mb-1 dark:bg-gray-700"></div>
                <div className="w-10 h-10 bg-gray-200 rounded-full mx-auto mb-1 dark:bg-gray-600"></div>
                <div className="w-full h-2 bg-gray-100 mb-1 dark:bg-gray-700"></div>
                <div className="w-full h-2 bg-gray-100 mb-1 dark:bg-gray-700"></div>
                <div className="w-3/4 h-2 bg-gray-100 mx-auto mb-1 dark:bg-gray-700"></div>
              </div>
              <div className="w-2/3 p-1">
                <div className="w-full h-3 bg-gray-100 mb-2 dark:bg-gray-700"></div>
                <div className="w-full h-2 bg-gray-100 mb-1 dark:bg-gray-700"></div>
                <div className="w-full h-2 bg-gray-100 mb-1 dark:bg-gray-700"></div>
                <div className="w-3/4 h-2 bg-gray-100 mb-3 dark:bg-gray-700"></div>
                <div className="w-full h-3 bg-gray-100 mb-2 dark:bg-gray-700"></div>
                <div className="w-full h-2 bg-gray-100 mb-1 dark:bg-gray-700"></div>
                <div className="w-full h-2 bg-gray-100 mb-1 dark:bg-gray-700"></div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4 text-sm dark:text-gray-300">{description}</p>
        
        <div className="mt-auto">
          <div className="space-y-2 mb-4">
            {features.map((feature, i) => (
              <div key={i} className="flex items-center">
                <Check className="h-4 w-4 mr-2 text-green-500" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
          
          <Button variant="outline" className="w-full">
            Use This Template
          </Button>
        </div>
      </div>
    </div>
  );
}