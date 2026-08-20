"use client";

import { motion } from "framer-motion";
import { 
  Sparkles, 
  Code2, 
  TrendingUp, 
  Smartphone, 
  Zap, 
  MessageSquare 
} from "lucide-react";

const valueProps = [
  {
    icon: Sparkles,
    title: "Modern Technology",
    description:
      "Utilizing industry-standard frameworks like React, Next.js, Shopify Liquid, and Bubble.io to build future-proof digital products.",
  },
  {
    icon: Code2,
    title: "Clean & Scalable Code",
    description:
      "Writing maintainable, well-documented, and modular code that easily scales with your company's growth.",
  },
  {
    icon: TrendingUp,
    title: "Business-Focused Development",
    description:
      "Aligning engineering architecture directly with your business goals to drive user engagement, conversion rates, and revenue.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Delivering pixel-perfect, fluid user experiences that look and function impeccably across mobile, tablet, and desktop devices.",
  },
  {
    icon: Zap,
    title: "Fast Performance",
    description:
      "Optimizing Core Web Vitals, asset caching, code splitting, and server responses for lightning-fast page loading speeds.",
  },
  {
    icon: MessageSquare,
    title: "Reliable Communication",
    description:
      "Transparent milestones, proactive progress updates, and dependable on-time delivery tailored for international clients.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0 },
};

export const WhyChooseMeSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Value Proposition
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Why Choose Me?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Combining technical excellence with commercial awareness to build digital products that succeed in competitive global markets.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {valueProps.map((prop) => (
            <motion.div
              key={prop.title}
              variants={item}
              className="p-8 rounded-2xl glass hover:border-primary/50 transition-all duration-300 group flex flex-col justify-start"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <prop.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                {prop.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {prop.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
