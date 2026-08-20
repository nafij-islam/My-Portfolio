"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart E-Commerce",
    content:
      "Nafij delivered an exceptional custom Shopify store that exceeded our expectations. His Liquid coding skills, performance optimization, and proactive communication made our international launch seamless and profitable.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder, SaaS Facility Hub",
    content:
      "Working with Nafij on our Bubble.io SaaS platform was an outstanding experience. He built complex workflows, calendar scheduling, and database systems with remarkable speed and precision. A top-tier developer!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Product Lead, Digital Ventures",
    content:
      "The full-stack Next.js web application Nafij engineered is blazing fast, fully responsive, and beautifully architected. His dedication to clean code and prompt communication made all the difference.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export const ReviewsSection = () => {
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
            Client Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            What Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feedback from international founders, e-commerce brand owners, and business leaders who trusted me with their digital products.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              variants={item}
              className="p-8 rounded-2xl glass relative flex flex-col justify-between hover:border-primary/40 transition-all duration-300"
            >
              <div>
                <Quote className="absolute top-6 right-6 text-primary/20" size={36} />
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm mb-6 relative z-10 leading-relaxed italic">
                  "{review.content}"
                </p>
              </div>
              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                <img
                  src={review.avatar}
                  alt={`${review.name} - Testimonial for Nafij Islam`}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <p className="font-display font-semibold text-sm">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
