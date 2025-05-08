"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent 
} from "@/components/ui/card";
import { fadeIn } from "@/lib/animations";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    content: "I landed my dream job within two weeks of using this platform. The AI suggestions helped me highlight achievements I would have otherwise overlooked.",
    rating: 5,
    accent: "bg-blue-100 dark:bg-blue-900/30"
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    content: "The templates are not only beautiful but also perfectly optimized for ATS systems. This is a game-changer for tech professionals applying to competitive positions.",
    rating: 5,
    accent: "bg-purple-100 dark:bg-purple-900/30"
  },
  {
    name: "Jessica Miller",
    role: "Healthcare Professional",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    content: "As someone who struggled to showcase my clinical experience effectively, this tool was invaluable. The industry-specific suggestions made a huge difference.",
    rating: 4,
    accent: "bg-cyan-100 dark:bg-cyan-900/30"
  },
  {
    name: "David Wilson",
    role: "Finance Manager",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
    content: "The cover letter generator is exceptional. It captured my professional tone perfectly while highlighting relevant experience for each application.",
    rating: 5,
    accent: "bg-green-100 dark:bg-green-900/30"
  }
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const targetElement = container.children[index] as HTMLElement;
      
      if (targetElement) {
        container.scrollTo({
          left: targetElement.offsetLeft - container.offsetLeft,
          behavior: 'smooth'
        });
      }
    }
    setActiveIndex(index);
  };

  const next = () => {
    const newIndex = (activeIndex + 1) % testimonials.length;
    scrollToIndex(newIndex);
  };

  const prev = () => {
    const newIndex = activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1;
    scrollToIndex(newIndex);
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Join thousands of professionals who've boosted their careers with our platform
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:block">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full h-10 w-10 shadow-md" 
              onClick={prev}
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
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-8 snap-x"
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index} 
                testimonial={testimonial} 
                isActive={index === activeIndex}
              />
            ))}
          </motion.div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:block">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full h-10 w-10 shadow-md" 
              onClick={next}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                index === activeIndex 
                  ? 'bg-blue-600 dark:bg-blue-500' 
                  : 'bg-gray-300 dark:bg-gray-700'
              }`}
              onClick={() => scrollToIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  testimonial: {
    name: string;
    role: string;
    image: string;
    content: string;
    rating: number;
    accent: string;
  };
  isActive: boolean;
}

function TestimonialCard({ testimonial, isActive }: TestimonialCardProps) {
  const { name, role, image, content, rating, accent } = testimonial;

  return (
    <div className="flex-shrink-0 w-full md:w-[400px] snap-start">
      <Card className={cn(
        "h-full transition-all",
        isActive ? "shadow-lg" : "shadow",
      )}>
        <CardContent className="p-6">
          <div className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center mb-6",
            accent
          )}>
            <Quote className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          </div>
          
          <p className="text-gray-700 dark:text-gray-300 mb-6">{content}</p>
          
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
              <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>
            <div>
              <h4 className="font-semibold">{name}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">{role}</p>
            </div>
            <div className="ml-auto flex">
              {Array.from({ length: rating }).map((_, i) => (
                <svg 
                  key={i} 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 text-yellow-500" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}