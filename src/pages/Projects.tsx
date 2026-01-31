import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ExternalLink, Github } from "lucide-react";
import Ecommerce from '../../public/Ecommerce.png'

const allProjects = [
  {
    id: 1,
    title: "E-Commerce Store",
    description:
      "A modern Shopify store with custom theme, seamless checkout experience, and advanced filtering options.",
    tags: ["Html","CSS", "Tailwind", "JavaScript","React" ],
    image: Ecommerce,
    liveUrl: "#",
    githubUrl: "#",
    category: "React",
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    description:
      "A comprehensive analytics dashboard with real-time data visualization and user management.",
    tags: ["React", "TypeScript", "Tailwind", "Chart.js"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
    category: "React",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A creative portfolio for a photographer with stunning animations and gallery layouts.",
    tags: ["Next.js", "Framer Motion", "GSAP"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
    category: "React",
  },
  {
    id: 4,
    title: "Jewelry E-Store",
    description:
      "Luxury jewelry Shopify store with 3D product views and custom collection pages.",
    tags: ["Shopify", "Liquid", "Three.js"],
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=500&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
    category: "Shopify",
  },
  {
    id: 5,
    title: "Restaurant Website",
    description:
      "Modern restaurant website with online ordering system and table reservations.",
    tags: ["React", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=500&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
    category: "React",
  },
  {
    id: 6,
    title: "Fitness App Landing",
    description:
      "High-converting landing page for a fitness mobile app with animations.",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=500&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
    category: "React",
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

const Projects = () => {
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
              className="text-center mb-16"
            >
              <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                My Portfolio
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                Featured <span className="text-gradient">Projects</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                A collection of my best work showcasing frontend development and
                Shopify expertise.
              </p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {allProjects.map((project) => (
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
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs rounded-full bg-primary text-primary-foreground font-medium">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
                      <a
                        href={project.liveUrl}
                        className="p-2 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform"
                        aria-label="View live site"
                      >
                        <ExternalLink size={18} />
                      </a>
                      <a
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
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
