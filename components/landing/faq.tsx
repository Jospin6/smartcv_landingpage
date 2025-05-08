"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { fadeIn } from "@/lib/animations";

const faqs = [
  {
    question: "How does the CV builder work?",
    answer: "Our CV builder uses AI to help you create professional resumes in minutes. Simply choose a template, fill in your information (or import from LinkedIn), and our platform will format everything beautifully. You can then customize any aspect before downloading in your preferred format."
  },
  {
    question: "Are the templates ATS-friendly?",
    answer: "Yes, all our templates are specifically designed to pass through Applicant Tracking Systems (ATS). They use standard fonts, proper heading structures, and clean formatting to ensure your resume gets past automated screening and into the hands of hiring managers."
  },
  {
    question: "Can I create multiple versions of my resume?",
    answer: "Absolutely! You can create unlimited versions of your resume tailored to different jobs or industries. Our platform saves all your information, making it easy to generate targeted resumes for specific applications with just a few clicks."
  },
  {
    question: "Is my information secure?",
    answer: "Your privacy is our priority. We encrypt your personal information and never share your data without your permission."
  },
  {
    question: "How much does it cost?",
    answer: "We offer both free and premium plans. Our free plan allows you to create a basic resume with essential features. Premium plans start at $9.99/month and include advanced features like AI content suggestions, unlimited downloads, cover letter creation, and more personalized templates."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time with no questions asked. If you cancel, your premium access will continue until the end of your current billing period, after which you'll be downgraded to our free plan."
  }
];

export function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (value: string) => {
    setOpenItems((prev) => 
      prev.includes(value)
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Everything you need to know about our CV and cover letter builder
          </p>
        </motion.div>

        <motion.div 
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 shadow-sm bg-white dark:bg-gray-800">
                <AccordionTrigger className="text-left py-4 hover:no-underline">
                  <span className="font-semibold text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="py-4 text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}