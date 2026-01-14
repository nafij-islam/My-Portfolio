import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ecommerce from "../../../public/Ecommerce.png"

const projects = [
  {
    id: 1,
    title: "E-Commerce Store",
    description: "A modern E-Coomerce store with React and TailWind CSS",
    tags: ["HTML","CSS", "JavaScript","TailWind","TansStack"],
    image: ecommerce,
    liveUrl: "https://ecommerce-phi-six-69.vercel.app/",
    githubUrl: "https://github.com/nafij-islam/Ecommerce",
  },
  {
    id: 2,
    title: "Dashboard",
    description: "A comprehensive analytics dashboard built with React and TypeScript.",
    tags: ["React", "TypeScript", "Tailwind"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A creative portfolio for a photographer with stunning animations.",
    tags: ["Next.js", "Framer Motion", "GSAP"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export const ProjectsSection = () => {
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
              Recent Work
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
              Featured Projects
            </h2>
          </div>
          <Button variant="outline" asChild>
            <Link to="/projects" className="flex items-center gap-2">
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
              className="group rounded-2xl overflow-hidden glass"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
                  <a target="_blank"
                    href={project.liveUrl}
                    className="p-2 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform"
                    aria-label="View live site"
                  >
                    <ExternalLink size={18} />
                  </a>
                  <a target="_blank"
                    href={project.githubUrl}
                    className="p-2 rounded-full bg-secondary text-foreground hover:scale-110 transition-transform"
                    aria-label="View source code"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground"
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
