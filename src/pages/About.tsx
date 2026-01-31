import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Code2, ShoppingBag, Award, Users, Coffee, Heart, Briefcase, GraduationCap, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import nafis from '../../public/Nafij-Islam.png'

const stats = [
  { icon: Award, value: "50+", label: "Projects Completed" },
  { icon: Users, value: "40+", label: "Happy Clients" },
  { icon: Coffee, value: "1000+", label: "Cups of Coffee" },
  { icon: Heart, value: "100%", label: "Dedication" },
];

const journeyItems = [
  { id:1,
    year: "2024",
    title: "Frontend Developer",
    company: "Tech Startup",
    description: "Built responsive web applications using React and modern frontend technologies.",
    icon: Code2,
    color: "from-orange-500 to-amber-500",
  },

  {
    id:3,
    year: "2025-2026 > Present",
    title: "Shopify Developer",
    company: "E-commerce Agency",
    description: "Developed and maintained 30+ Shopify stores with custom themes and integrations.",
    icon: ShoppingBag,
    color: "from-violet-500 to-purple-500",
  },

  {
    id:4,
    year: "2016 - 2020",
    title: "Computer Course",
    company: "University",
    description: "",
    icon: GraduationCap,
    color: "from-blue-500 to-indigo-500",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                  About Me
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                  Crafting Digital
                  <br />
                  <span className="text-gradient">Experiences</span>
                </h1>
                <p className="text-muted-foreground text-lg mb-6">
                  Hi, I'm Nafij — a passionate Frontend Developer and Shopify Expert
                  based in Bangladesh. With over 3+ years of experience, I specialize
                  in building beautiful, performant web applications and e-commerce
                  solutions.
                </p>
                <p className="text-muted-foreground mb-8">
                  My journey started with curiosity about how websites work, which
                  quickly evolved into a career dedicated to creating exceptional
                  digital experiences. I believe in clean code, thoughtful design,
                  and solutions that truly serve users.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="glow-primary" asChild>
                    <Link to="/contact">Get In Touch</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="/Nafij.pdf" download>
                      Download CV
                    </a>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-square rounded-3xl overflow-hidden glass p-4">
                  <img
                    src={nafis}
                    alt="Nafij - Frontend & Shopify Developer"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                {/* Floating badges */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 p-4 glass rounded-2xl"
                >
                  <Code2 className="text-primary" size={32} />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  className="absolute -bottom-4 -left-4 p-4 glass rounded-2xl"
                >
                  <ShoppingBag className="text-primary" size={32} />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-card/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 glass rounded-2xl"
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <p className="text-3xl md:text-4xl font-display font-bold text-gradient">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground text-sm mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Journey Section - New Design */}
        <section className="section-padding overflow-hidden">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                My Journey
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
                Experience & Education
              </h2>
            </motion.div>

            {/* Horizontal scroll on mobile, grid on desktop */}
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {journeyItems.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="group relative"
                >
                  <div key={index} className="relative glass rounded-3xl p-6 lg:p-8 h-full border border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden">
                    {/* Background gradient on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    {/* Year badge */}
                    <div className="flex items-center justify-between mb-6">
                      <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${item.color} text-white text-sm font-medium shadow-lg`}>
                        <Briefcase size={14} />
                        {item.year}
                      </span>
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}
                      >
                        <item.icon size={24} className="text-white" />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-xl lg:text-2xl font-display font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-primary/80 font-medium mb-4">{item.company}</p>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Decorative element */}
                    <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-2xl group-hover:scale-150 transition-transform duration-700" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-16 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
