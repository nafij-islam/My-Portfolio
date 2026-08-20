"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ExternalLink, Github, CheckCircle2 } from "lucide-react";

const staticProjects = [
  {
    id: 12,
    title: "Move Store",
    subtitle: "Custom Shopify E-Commerce Store",
    problem: "Move Store in the Netherlands needed an ultra-fast, localized storefront with custom filtering and instant checkout.",
    solution: "Engineered bespoke Shopify Liquid templates with responsive Tailwind styling and optimized cart flows.",
    result: "Significantly boosted mobile conversion rates and reduced page load times.",
    description: "Developed a high-performance custom Shopify e-commerce platform with bespoke Liquid sections, optimized UX, and conversion-focused checkout.",
    tags: ["Shopify", "Liquid", "Theme Dev", "Tailwind CSS", "UX"],
    image: "/movestore.png",
    liveUrl: "https://www.movestore.nl/",
    githubUrl: "#",
    category: "Shopify",
  },
  {
    id: 11,
    title: "Timeless Media Box",
    subtitle: "Luxury Shopify Brand Storefront",
    problem: "Client required a luxury-grade product showcase with custom transitions and fluid purchase flows.",
    solution: "Developed custom Shopify theme with interactive sliders, fluid micro-interactions, and tailored Liquid templates.",
    result: "Elevated brand prestige and maximized average order value.",
    description: "A custom-designed, premium Shopify store designed for Timeless Media Box, featuring elegant product showcases, smooth transitions, and custom Liquid integration.",
    tags: ["Shopify", "Liquid", "Custom Sections", "Tailwind CSS", "UX"],
    image: "/timelapess.png",
    liveUrl: "https://timelessmediabox.com/",
    githubUrl: "#",
    category: "Shopify",
  },
  {
    id: 10,
    title: "The Ball Hall",
    subtitle: "Full-Stack SaaS Web Application",
    problem: "Sports facility needed automated court booking, tournament scheduling, and player profile management.",
    solution: "Built a scalable SaaS platform on Bubble.io with interactive calendar workflows, payment gateways, and role dashboards.",
    result: "Automated 100% of facility reservations and customer booking operations.",
    description: "A high-performance custom SaaS platform built on Bubble.io for sports facility scheduling, booking management, and interactive user dashboards.",
    tags: ["Bubble.io", "No-Code", "SaaS Platform", "Web App", "UI/UX"],
    image: "/growshow.png",
    liveUrl: "https://theballhall.com/",
    githubUrl: "#",
    category: "Bubble.io",
  },
  {
    id: 9,
    title: "Try Nurova",
    subtitle: "High-Ticket Shopify Storefront",
    problem: "High-ticket lifestyle brand needed custom visual storytelling sections and fast mobile loading times.",
    solution: "Architected custom Shopify Liquid sections with conversion-optimized layouts and lazy-loaded assets.",
    result: "Reduced bounce rates by 35% and increased add-to-cart conversions.",
    description: "A custom-designed, premium Shopify store built for Nurova, showcasing luxury branding, custom layouts, and custom Liquid theme development.",
    tags: ["Shopify", "Liquid", "Theme Dev", "Tailwind CSS", "UX"],
    image: "/trynurova.png",
    liveUrl: "https://trynurova.com/",
    githubUrl: "#",
    category: "Shopify",
  },
  {
    id: 8,
    title: "Catch 'Em Claw Arcade",
    subtitle: "Interactive E-Commerce & Inquiry Platform",
    problem: "Specialized arcade machine seller required an intuitive catalog with inquiry workflows and custom specification grids.",
    solution: "Custom Shopify theme design with responsive machine specs, interactive gallery widgets, and lead generation forms.",
    result: "Streamlined B2B and B2C sales inquiries with structured technical specs.",
    description: "A custom-designed, premium Shopify store for claw arcade machines featuring custom catalog navigation, collection grids, and responsive layouts.",
    tags: ["Shopify", "Liquid", "Theme Dev", "Custom UI", "UX"],
    image: "/healthcare.png",
    liveUrl: "https://catchemclawarcade.com/",
    githubUrl: "#",
    category: "Shopify",
  },
  {
    id: 7,
    title: "OneMat",
    subtitle: "D2C Shopify E-Commerce Experience",
    problem: "Premium prayer mat brand needed a tailored direct-to-consumer store with custom bundle selections and smooth purchase flows.",
    solution: "Designed custom Shopify Liquid templates with interactive bundle builders, smooth animations, and optimized checkout.",
    result: "Achieved notable increases in average session duration and customer conversions.",
    description: "A custom-designed, premium Shopify store selling high-quality prayer mats with tailored layouts, smooth animations, and custom Liquid templates.",
    tags: ["Shopify", "Liquid", "Theme Dev", "CSS Animations", "UI/UX"],
    image: "/onemat.jpg",
    liveUrl: "https://onemat.world/",
    githubUrl: "#",
    category: "Shopify",
  },
  {
    id: 1,
    title: "Modern E-Commerce Web App",
    subtitle: "Full-Stack React & Tailwind Store",
    problem: "Needed a modern web application frontend with responsive layout and instant state management.",
    solution: "Developed with React, Tailwind CSS, and TanStack Query for dynamic product filtering and checkout flows.",
    result: "Ultra-fast response time and modern responsive UX.",
    description: "A modern full-stack web application with custom design, seamless checkout experience, and advanced filtering options.",
    tags: ["React", "TypeScript", "Tailwind CSS", "TanStack"],
    image: "/Ecommerce.png",
    liveUrl: "#",
    githubUrl: "#",
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Analytics SaaS Dashboard",
    subtitle: "Full-Stack Metrics & Data Platform",
    problem: "Businesses required real-time metrics tracking and team collaboration dashboard.",
    solution: "Engineered full-stack analytics platform with React, TypeScript, secure authentication, and data visualization.",
    result: "Fast, responsive real-time data monitoring and streamlined workflow management.",
    description: "A comprehensive analytics dashboard with real-time data visualization, authentication, and user management.",
    tags: ["React", "TypeScript", "Node.js", "Chart.js"],
    image: "/quater.png",
    liveUrl: "#",
    githubUrl: "#",
    category: "Full Stack",
  },
  {
    id: 3,
    title: "Creative Portfolio Platform",
    subtitle: "Interactive Web Experience",
    problem: "Creative agency needed high-impact visual storytelling and fluid web animations.",
    solution: "Built with Next.js, Framer Motion, and GSAP for cinematic transitions and smooth scrolling.",
    result: "Award-winning visual aesthetics and zero lag on mobile devices.",
    description: "A creative digital portfolio platform featuring bespoke animations and responsive gallery layouts.",
    tags: ["Next.js", "Framer Motion", "GSAP", "Tailwind"],
    image: "/fins.png",
    liveUrl: "#",
    githubUrl: "#",
    category: "Full Stack",
  },
];

export default function Projects() {
  const [allProjects, setAllProjects] = useState(staticProjects);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    async function loadProjects() {
      try {
        const { data, error } = await supabase
          .from("projects")
          .select("*")
          .order("created_at", { ascending: false });
        
        if (error) throw error;
        
        if (data && data.length > 0) {
          const formatted = data.map((item: any) => ({
            id: item.id,
            title: item.title,
            subtitle: item.category || "Full-Stack Project",
            problem: item.problem || "Custom client requirements and modern digital architecture.",
            solution: item.solution || item.description,
            result: item.result || "Enhanced performance, high engagement, and client satisfaction.",
            description: item.description,
            tags: item.tags || [],
            image: item.image,
            liveUrl: item.live_url || "#",
            githubUrl: item.github_url || "#",
            category: item.category || "Shopify",
          }));
          setAllProjects(formatted);
        }
      } catch (err) {
        console.warn("Could not load dynamic projects, using static fallbacks:", err);
      }
    }
    loadProjects();
  }, []);

  const categories = ["All", "Shopify", "Bubble.io", "Full Stack"];

  const filteredProjects = selectedCategory === "All"
    ? allProjects
    : allProjects.filter(p => p.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 md:pt-32">
        <section className="section-padding">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                Portfolio Showcase
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                Featured <span className="text-gradient">Projects</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                A showcase of international client work spanning Full-Stack Web Applications, high-converting Shopify stores, and scalable Bubble.io SaaS platforms.
              </p>
            </motion.div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === cat
                      ? "bg-primary text-primary-foreground shadow-lg glow-primary"
                      : "glass text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat === "All" ? "All Projects" : `${cat} Projects`}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.article
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="group rounded-2xl overflow-hidden glass flex flex-col justify-between hover:border-primary/50 transition-all duration-300"
                  >
                    <div>
                      <div className="relative overflow-hidden aspect-video">
                        <img
                          src={project.image}
                          alt={`Nafij Islam portfolio project – ${project.title}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 text-xs rounded-full bg-primary/90 text-primary-foreground font-medium backdrop-blur-sm shadow-md">
                            {project.category}
                          </span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
                          {project.liveUrl && project.liveUrl !== "#" && (
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href={project.liveUrl}
                              className="p-2.5 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform shadow-lg"
                              aria-label={`View live site for ${project.title}`}
                            >
                              <ExternalLink size={18} />
                            </a>
                          )}
                          {project.githubUrl && project.githubUrl !== "#" && (
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href={project.githubUrl}
                              className="p-2.5 rounded-full bg-secondary text-foreground hover:scale-110 transition-transform shadow-lg"
                              aria-label={`View source code for ${project.title}`}
                            >
                              <Github size={18} />
                            </a>
                          )}
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-display font-bold mb-1 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs text-primary/80 font-medium mb-4">
                          {project.subtitle || project.category}
                        </p>

                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                          {project.description}
                        </p>

                        {project.result && (
                          <div className="flex items-start gap-2 p-3 rounded-xl bg-primary/5 border border-primary/10 mb-4">
                            <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                            <p className="text-xs text-muted-foreground">
                              <strong className="text-foreground">Result:</strong> {project.result}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="px-6 pb-6 pt-0">
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 text-[11px] rounded-md bg-secondary/50 text-muted-foreground font-mono"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
