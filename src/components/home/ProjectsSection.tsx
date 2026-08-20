"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight, CheckCircle2, Layers } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const staticProjects = [
  {
    id: 12,
    title: "Move Store",
    subtitle: "Custom Shopify E-Commerce Store",
    problem: "Needed a high-converting Dutch e-commerce storefront with rapid checkout and seamless product filtering.",
    solution: "Engineered bespoke Shopify Liquid templates with responsive Tailwind styling and instant product search.",
    result: "Significantly boosted mobile conversion rates and reduced page load times.",
    description: "Developed a high-performance custom Shopify e-commerce platform with bespoke Liquid sections, optimized UX, and conversion-focused checkout.",
    tags: ["Shopify", "Liquid", "Theme Dev", "Tailwind CSS", "UX"],
    image: "/movestore.png",
    liveUrl: "https://www.movestore.nl/",
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
    id: 9,
    title: "Try Nurova",
    subtitle: "High-Ticket Shopify Storefront",
    problem: "High-ticket lifestyle brand needed custom visual storytelling sections and fast mobile loading times.",
    solution: "Architected custom Shopify Liquid sections with conversion-optimized layouts and lazy-loaded assets.",
    result: "Reduced bounce rates and increased add-to-cart conversions.",
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

export const ProjectsSection = () => {
  const [projects, setProjects] = useState(staticProjects);

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
            category: item.category || "Full Stack",
          }));
          // Display top 6 projects on homepage featured section
          setProjects(formatted.slice(0, 6));
        }
      } catch (err) {
        console.warn("Could not load dynamic projects, using static fallbacks:", err);
      }
    }
    loadProjects();
  }, []);

  return (
    <section className="section-padding">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-4"
        >
          <div>
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              Featured Case Studies
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
              Featured Projects
            </h2>
            <p className="text-muted-foreground mt-2 max-w-xl">
              Proven digital solutions engineered for growth across Full-Stack Web, Shopify, and Bubble.io.
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/projects" className="flex items-center gap-2">
              View All Projects <ArrowRight size={16} />
            </Link>
          </Button>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={item}
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
        </motion.div>
      </div>
    </section>
  );
};
