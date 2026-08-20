"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  ShoppingBag, 
  Palette, 
  Database, 
  Globe, 
  Layers, 
  ArrowRight 
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Layers,
    title: "Full Stack Web Development",
    description:
      "I build complete web applications with modern frontend interfaces, powerful backend systems, secure databases, and scalable architecture.",
    features: ["React & Next.js", "Node.js & Express", "Database Architecture", "Scalable Systems"],
  },
  {
    icon: Palette,
    title: "Frontend Development",
    description:
      "I create responsive, fast, and interactive user interfaces using React, Next.js, JavaScript, and modern frontend technologies.",
    features: ["React.js & Next.js", "TypeScript", "Tailwind CSS", "Performance & Core Web Vitals"],
  },
  {
    icon: Database,
    title: "Backend Development",
    description:
      "I develop secure APIs, databases, authentication systems, and backend solutions for modern applications.",
    features: ["RESTful & GraphQL APIs", "Database Management", "Authentication & Security", "Server Integration"],
  },
  {
    icon: ShoppingBag,
    title: "Shopify Development",
    description:
      "I help businesses build professional Shopify stores with custom themes, integrations, optimization, and e-commerce solutions.",
    features: ["Custom Liquid Themes", "App Integration", "Store Speed Optimization", "Conversion UX Design"],
  },
  {
    icon: Globe,
    title: "Bubble.io Development",
    description:
      "I create scalable no-code applications, SaaS platforms, dashboards, and business automation systems using Bubble.io.",
    features: ["SaaS Platforms", "Complex Workflows", "Custom Database Design", "API Connectors"],
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "I transform business ideas into custom software solutions designed for performance and growth.",
    features: ["SaaS Web Applications", "Digital Products", "Automation Systems", "Custom Web Solutions"],
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
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export const ServicesSection = () => {
  return (
    <section className="section-padding bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            What I Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Services I Offer
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From concept to deployment, I provide end-to-end development services tailored to help businesses scale globally.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className="group p-8 rounded-2xl glass hover:border-primary/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 shadow-lg">
                  <service.icon className="text-primary-foreground" size={28} />
                </div>
                <h3 className="text-xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>
              </div>
              <ul className="space-y-2 pt-4 border-t border-white/5">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-xs text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-medium"
          >
            Discuss Your Project <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
