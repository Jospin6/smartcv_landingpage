"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeIn, textVariant } from "@/lib/animations";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob dark:bg-blue-900 dark:opacity-20"></div>
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 dark:bg-purple-900 dark:opacity-20"></div>
        <div className="absolute bottom-1/4 right-1/2 w-96 h-96 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000 dark:bg-cyan-900 dark:opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left content (text) */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
            >
              <Sparkles className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">AI-Powered Resume Builder</span>
            </motion.div>

            <motion.h1
              variants={textVariant(0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Create Your Perfect <span className="text-blue-600 dark:text-blue-400">CV & Cover Letter</span> in Minutes
            </motion.h1>

            <motion.p
              variants={textVariant(0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 dark:text-gray-300"
            >
              Land your dream job with a professionally designed resume that stands out from the crowd. Our AI-powered platform helps you craft the perfect application materials in just a few clicks.
            </motion.p>

            <motion.div
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link href="/get-started">
                <Button size="lg" className="group">
                  Generate Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              {/* <Button size="lg" variant="outline">
                View Templates
              </Button> */}
            </motion.div>

            <motion.div
              variants={fadeIn('up', 0.7)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-8 flex items-center justify-center lg:justify-start space-x-4"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 dark:border-gray-800"></div>
                ))}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
              <span className="font-bold text-black dark:text-white">Your resume</span> is just a few clicks away
              </div>
            </motion.div>
          </div>

          {/* Right content (resume preview) */}
          <motion.div
            variants={fadeIn('left', 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="w-full h-[600px] bg-white rounded-xl shadow-xl overflow-hidden dark:bg-gray-800">
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="h-6 w-32 bg-gray-200 rounded-md dark:bg-gray-700"></div>
                      <div className="h-4 w-24 bg-gray-100 mt-2 rounded-md dark:bg-gray-600"></div>
                    </div>
                    <div className="h-16 w-16 bg-blue-100 rounded-full dark:bg-blue-900/50"></div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="space-y-2">
                        <div className="h-5 w-48 bg-gray-200 rounded-md dark:bg-gray-700"></div>
                        <div className="h-4 w-full bg-gray-100 rounded-md dark:bg-gray-600"></div>
                        <div className="h-4 w-full bg-gray-100 rounded-md dark:bg-gray-600"></div>
                        <div className="h-4 w-3/4 bg-gray-100 rounded-md dark:bg-gray-600"></div>
                      </div>
                    ))}
                    <div className="pt-4">
                      <div className="h-5 w-32 bg-gray-200 rounded-md dark:bg-gray-700"></div>
                      <div className="mt-2 space-y-2">
                        <div className="h-4 w-full bg-gray-100 rounded-md dark:bg-gray-600"></div>
                        <div className="h-4 w-full bg-gray-100 rounded-md dark:bg-gray-600"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -right-6 -bottom-6 w-full h-[600px] bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl -z-10 rotate-6 dark:from-blue-600 dark:to-purple-600"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}