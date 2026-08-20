"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { motion } from "framer-motion";
import { ArrowDown, Code2, ShoppingBag, Database, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const HeroSection = () => {
  const [heroTitle, setHeroTitle] = useState("Hi, I'm Nafij Islam");
  const [heroSubtitle, setHeroSubtitle] = useState("Full Stack Developer Creating Modern Digital Experiences");

  useEffect(() => {
    async function loadHeroSettings() {
      try {
        const { data, error } = await supabase
          .from("portfolio_settings")
          .select("*")
          .in("key", ["hero_title", "hero_subtitle"]);
        
        if (error) throw error;
        
        if (data) {
          data.forEach((item) => {
            if (item.key === "hero_title" && item.value) {
              setHeroTitle(item.value);
            }
            if (item.key === "hero_subtitle" && item.value) {
              setHeroSubtitle(item.value);
            }
          });
        }
      } catch (err) {
        console.warn("Could not load dynamic hero settings, using fallbacks:", err);
      }
    }
    loadHeroSettings();
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-24 md:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground font-medium">
              Available for freelance projects
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6"
          >
            {heroTitle.includes("Nafij") ? (
              <>
                {heroTitle.split("Nafij")[0]}
                <span className="text-gradient">Nafij</span>
                {heroTitle.split("Nafij")[1]}
              </>
            ) : (
              heroTitle
            )}
            <br />
            <span className="text-muted-foreground text-2xl md:text-4xl lg:text-5xl block mt-3 font-semibold">
              {heroSubtitle}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            I am a Full Stack Developer and Web Developer specializing in React, Next.js, Shopify, and Bubble.io. I build modern websites, scalable web applications, SaaS platforms, and e-commerce solutions that help businesses grow online.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          >
            <Button size="lg" className="glow-primary" asChild>
              <Link href="/projects">View My Work</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Hire Me</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto mb-10"
          >
            <div className="flex items-center gap-3 px-4 py-3 glass rounded-xl">
              <Code2 className="text-primary shrink-0" size={22} />
              <div className="text-left">
                <p className="font-display font-semibold text-sm">Frontend Development</p>
                <p className="text-xs text-muted-foreground">React & Next.js</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 glass rounded-xl">
              <Database className="text-primary shrink-0" size={22} />
              <div className="text-left">
                <p className="font-display font-semibold text-sm">Backend Development</p>
                <p className="text-xs text-muted-foreground">Node.js & APIs</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 glass rounded-xl">
              <ShoppingBag className="text-primary shrink-0" size={22} />
              <div className="text-left">
                <p className="font-display font-semibold text-sm">Shopify Development</p>
                <p className="text-xs text-muted-foreground">Custom Themes & Stores</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 glass rounded-xl">
              <Globe className="text-primary shrink-0" size={22} />
              <div className="text-left">
                <p className="font-display font-semibold text-sm">Bubble.io Development</p>
                <p className="text-xs text-muted-foreground">SaaS & No-Code Apps</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center pt-2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="text-muted-foreground" size={24} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
