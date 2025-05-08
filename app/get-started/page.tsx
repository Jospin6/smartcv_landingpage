"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ComingSoonPage() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const [email, setEmail] = useState("");
    const [feature, setFeature] = useState("");

    useEffect(() => {
        let storedTargetDate = localStorage.getItem("smartcv_targetDate");
        let targetDate: Date;

        if (storedTargetDate) {
            targetDate = new Date(storedTargetDate);
        } else {
            targetDate = new Date();
            targetDate.setDate(targetDate.getDate() + 7);
            localStorage.setItem("smartcv_targetDate", targetDate.toISOString());
        }

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate.getTime() - now;

            const days = Math.max(0, Math.floor(distance / (1000 * 60 * 60 * 24)));
            const hours = Math.max(
                0,
                Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            );
            const minutes = Math.max(
                0,
                Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            );
            const seconds = Math.max(0, Math.floor((distance % (1000 * 60)) / 1000));

            setTimeLeft({ days, hours, minutes, seconds });

            if (distance < 0) {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        const messageToSend = feature.trim() === "" ? "New lead" : feature;
    
        const res = await fetch("/api/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                message: messageToSend,
            }),
        });
    
        if (res.ok) {
            alert("Lead envoyé avec succès !");
            setEmail("");
            setFeature("");
        } else {
            alert("Erreur lors de l'envoi.");
        }
    };
    

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 text-white flex items-center justify-center p-4">
            <Card className="max-w-2xl w-full rounded-2xl shadow-2xl bg-white/10 backdrop-blur-md">
                <CardContent className="p-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-xl md:text-2xl font-extrabold mb-4"
                    >
                        SmartCV is launching in&nbsp;
                        <span className="text-yellow-400">7 days!</span>
                    </motion.h1>
                    <p className="text-[14px] mb-6 text-gray-200">
                        Be among the first to create AI-powered resumes and cover letters.
                        Leave your email to be notified and tell us what feature you're excited to try!
                    </p>

                    <div className="flex justify-center gap-4 text-2xl font-bold mb-6">
                        <div className="bg-white/20 rounded-lg p-4">
                            {timeLeft.days} <span className="text-sm block">Days</span>
                        </div>
                        <div className="bg-white/20 rounded-lg p-4">
                            {timeLeft.hours} <span className="text-sm block">Hours</span>
                        </div>
                        <div className="bg-white/20 rounded-lg p-4">
                            {timeLeft.minutes} <span className="text-sm block">Minutes</span>
                        </div>
                        <div className="bg-white/20 rounded-lg p-4">
                            {timeLeft.seconds} <span className="text-sm block">Seconds</span>
                        </div>
                    </div>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <Input
                            type="email"
                            placeholder="Your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-white/20 border-none text-white placeholder:text-white"
                            required
                        />
                        <textarea
                            placeholder="Feature you're excited for"
                            value={feature}
                            onChange={(e) => setFeature(e.target.value)}
                            className="w-full bg-white/20 border-none text-white placeholder:text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                        <Button
                            type="submit"
                            className="w-full bg-yellow-400 text-black hover:bg-yellow-300 font-bold text-lg"
                        >
                            Notify me
                        </Button>
                    </form>

                    <div className="mt-6 flex justify-center gap-4 text-gray-200">
                        <a href="https://web.facebook.com/profile.php?id=61575196685155" target="_blank" rel="noopener noreferrer">
                            <Facebook className="hover:text-yellow-400 transition" />
                        </a>
                        <a href="https://x.com/JospinNdagano" target="_blank" rel="noopener noreferrer">
                            <Twitter className="hover:text-yellow-400 transition" />
                        </a>
                        <a href="https://www.linkedin.com/company/nuruai/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="hover:text-yellow-400 transition" />
                        </a>
                        <a href="https://www.instagram.com/nuruai4" target="_blank" rel="noopener noreferrer">
                            <Instagram className="hover:text-yellow-400 transition" />
                        </a>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="mt-6 text-sm text-gray-300"
                    >
                        SmartCV is a product of{" "}
                        <span className="font-semibold text-yellow-400">NuruAI</span>
                    </motion.p>
                </CardContent>
            </Card>
        </div>
    );
}
