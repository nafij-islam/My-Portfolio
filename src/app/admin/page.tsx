"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  Lock,
  Plus,
  Trash2,
  Save,
  LogOut,
  Folder,
  Settings,
  Database,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";

interface Project {
  id?: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  live_url: string;
  github_url: string;
  category: string;
}

export default function AdminDashboard() {
  const [passcode, setPasscode] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [activeTab, setActiveTab] = useState<"projects" | "settings">("projects");
  
  // State for db data
  const [projects, setProjects] = useState<Project[]>([]);
  const [settings, setSettings] = useState<Record<string, string>>({
    hero_title: "",
    hero_subtitle: "",
    seo_description: "",
    seo_keywords: "",
  });
  
  const [dbError, setDbError] = useState<string | null>(null);

  // Form states for new project
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    tags: "",
    image: "",
    live_url: "",
    github_url: "#",
    category: "Shopify",
  });

  // Load Auth from session storage on mount
  useEffect(() => {
    const auth = sessionStorage.getItem("admin_authorized");
    if (auth === "true") {
      setIsAuthorized(true);
      fetchData();
    }
  }, []);

  // Fetch data from Supabase
  const fetchData = async () => {
    try {
      setDbError(null);
      // Fetch projects
      const { data: projectsData, error: projectsError } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false });

      if (projectsError) throw projectsError;
      setProjects(projectsData || []);

      // Fetch settings
      const { data: settingsData, error: settingsError } = await supabase
        .from("portfolio_settings")
        .select("*");

      if (settingsError) throw settingsError;
      
      if (settingsData) {
        const loadedSettings: Record<string, string> = {};
        settingsData.forEach((item) => {
          loadedSettings[item.key] = item.value;
        });
        setSettings((prev) => ({ ...prev, ...loadedSettings }));
      }
    } catch (error: any) {
      console.error("Database fetch error:", error);
      setDbError(error?.message || "Could not connect to Supabase database. Please verify your tables are created.");
    }
  };

  // Handle Passcode Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/admin/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ passcode }),
      });

      if (response.ok) {
        sessionStorage.setItem("admin_authorized", "true");
        setIsAuthorized(true);
        toast.success("Access authorized successfully!");
        fetchData();
      } else {
        toast.error("Incorrect passcode. Access denied.");
      }
    } catch (err) {
      toast.error("Login verification failed.");
    }
  };

  // Handle Logout
  const handleLogout = () => {
    sessionStorage.removeItem("admin_authorized");
    setIsAuthorized(false);
    toast.info("Logged out of control panel.");
  };

  // Add Project to Supabase
  const handleAddProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProject.title || !newProject.description) {
      toast.error("Title and description are required.");
      return;
    }

    try {
      const parsedTags = newProject.tags
        .split(",")
        .map((t) => t.trim())
        .filter((t) => t.length > 0);

      const projectData: Project = {
        title: newProject.title,
        description: newProject.description,
        tags: parsedTags,
        image: newProject.image || "/placeholder.svg",
        live_url: newProject.live_url,
        github_url: newProject.github_url,
        category: newProject.category,
      };

      const { data, error } = await supabase
        .from("projects")
        .insert([projectData])
        .select();

      if (error) throw error;

      toast.success("Project added successfully!");
      setNewProject({
        title: "",
        description: "",
        tags: "",
        image: "",
        live_url: "",
        github_url: "#",
        category: "Shopify",
      });
      fetchData();
    } catch (error: any) {
      console.error("Save project error:", error);
      toast.error("Failed to add project: " + (error?.message || error));
    }
  };

  // Delete Project from Supabase
  const handleDeleteProject = async (id: string) => {
    if (!confirm("Are you sure you want to delete this project?")) return;

    try {
      const { error } = await supabase.from("projects").delete().eq("id", id);
      if (error) throw error;
      toast.success("Project deleted successfully!");
      fetchData();
    } catch (error: any) {
      toast.error("Failed to delete project: " + (error?.message || error));
    }
  };

  // Save Settings to Supabase (Upsert key-value pairs)
  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const upsertData = Object.keys(settings).map((key) => ({
        key,
        value: settings[key],
      }));

      const { error } = await supabase
        .from("portfolio_settings")
        .upsert(upsertData, { onConflict: "key" });

      if (error) throw error;
      toast.success("Global settings saved successfully!");
      fetchData();
    } catch (error: any) {
      console.error("Save settings error:", error);
      toast.error("Failed to save settings: " + (error?.message || error));
    }
  };

  if (!isAuthorized) {
    return (
      <div className="min-h-screen flex flex-col justify-between">
        <Header />
        <main className="flex-1 flex items-center justify-center p-6 pt-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-md p-8 rounded-2xl glass border border-white/10 shadow-2xl space-y-6 text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto">
              <Lock className="text-primary animate-pulse" size={28} />
            </div>
            <div>
              <h2 className="text-2xl font-display font-bold">Admin Panel</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Enter your passcode to manage projects and settings.
              </p>
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Passcode..."
                className="w-full bg-secondary/50 border border-white/10 rounded-xl px-4 py-3 text-center text-lg focus:outline-none focus:border-primary/50 transition-colors"
                autoFocus
              />
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-xl hover:scale-105 active:scale-95 transition-all font-medium glow-primary"
              >
                Access Control Panel
              </button>
            </form>
          </motion.div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col justify-between bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-6 pt-32 pb-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-display font-bold flex items-center gap-2">
              Portfolio Control Panel <Sparkles className="text-primary" size={24} />
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Add new projects, update layout titles, and configure site SEO.
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-secondary hover:bg-white/10 px-4 py-2 rounded-xl text-sm font-medium border border-white/5 transition-all hover:scale-105"
          >
            <LogOut size={16} /> Logout
          </button>
        </div>

        {/* Database Warning */}
        {dbError && (
          <div className="p-4 mb-6 rounded-xl border border-amber-500/20 bg-amber-500/5 text-amber-500 text-sm flex gap-2 items-center">
            <Database size={18} />
            <span>
              <strong>Supabase Connection Status:</strong> {dbError} (Ensure credentials are added in `.env.local` and tables are created).
            </span>
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-2 border-b border-white/10 pb-4 mb-8">
          <button
            onClick={() => setActiveTab("projects")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
              activeTab === "projects"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
            }`}
          >
            <Folder size={16} /> Projects
          </button>
          <button
            onClick={() => setActiveTab("settings")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
              activeTab === "settings"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
            }`}
          >
            <Settings size={16} /> Banner & SEO
          </button>
        </div>

        {/* Tab Contents */}
        {activeTab === "projects" ? (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Add Project Form */}
            <div className="lg:col-span-1 p-6 rounded-2xl glass border border-white/10 space-y-6 h-fit">
              <h2 className="text-xl font-display font-bold flex items-center gap-2">
                Add New Project <Plus className="text-primary" size={20} />
              </h2>
              <form onSubmit={handleAddProject} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase">Title</label>
                  <input
                    type="text"
                    required
                    value={newProject.title}
                    onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                    placeholder="e.g. Move Store"
                    className="w-full bg-secondary/50 border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase">Category</label>
                  <select
                    value={newProject.category}
                    onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}
                    className="w-full bg-secondary/50 border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                  >
                    <option value="Shopify">Shopify</option>
                    <option value="React">React / Next.js</option>
                    <option value="Bubble.io">Bubble.io</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase">Description</label>
                  <textarea
                    required
                    rows={3}
                    value={newProject.description}
                    onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                    placeholder="Describe the project..."
                    className="w-full bg-secondary/50 border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase">Tags (comma separated)</label>
                  <input
                    type="text"
                    value={newProject.tags}
                    onChange={(e) => setNewProject({ ...newProject, tags: e.target.value })}
                    placeholder="e.g. Shopify, Liquid, Tailwind"
                    className="w-full bg-secondary/50 border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase">Image Path / URL</label>
                  <input
                    type="text"
                    value={newProject.image}
                    onChange={(e) => setNewProject({ ...newProject, image: e.target.value })}
                    placeholder="e.g. /movestore.png"
                    className="w-full bg-secondary/50 border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase">Live Demo Link</label>
                  <input
                    type="text"
                    value={newProject.live_url}
                    onChange={(e) => setNewProject({ ...newProject, live_url: e.target.value })}
                    placeholder="e.g. https://www.movestore.nl/"
                    className="w-full bg-secondary/50 border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-xl hover:scale-105 active:scale-95 transition-all font-medium glow-primary text-sm"
                >
                  Save Project
                </button>
              </form>
            </div>

            {/* Project List */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-xl font-display font-bold">Existing Projects ({projects.length})</h2>
              {projects.length === 0 ? (
                <div className="p-8 text-center glass border border-white/10 rounded-2xl text-muted-foreground text-sm">
                  No projects found in database. Add a project using the form on the left.
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 gap-4">
                  {projects.map((project) => (
                    <div
                      key={project.id}
                      className="p-5 rounded-2xl glass border border-white/10 flex flex-col justify-between"
                    >
                      <div>
                        <div className="aspect-video w-full rounded-xl overflow-hidden mb-4 bg-secondary/50 relative border border-white/5">
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                          <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-primary/80 backdrop-blur-sm text-[10px] font-semibold text-primary-foreground">
                            {project.category}
                          </span>
                        </div>
                        <h3 className="font-display font-bold text-base">{project.title}</h3>
                        <p className="text-muted-foreground text-xs line-clamp-2 mt-1">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 text-[10px] rounded-full bg-secondary text-muted-foreground border border-white/5"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <button
                        onClick={() => handleDeleteProject(project.id!)}
                        className="mt-4 flex items-center justify-center gap-1.5 w-full bg-red-500/10 hover:bg-red-500/20 text-red-500 py-2.5 rounded-xl text-xs font-semibold border border-red-500/10 transition-colors"
                      >
                        <Trash2 size={14} /> Delete Project
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ) : (
          /* Settings Form */
          <div className="max-w-2xl p-6 rounded-2xl glass border border-white/10 space-y-6">
            <h2 className="text-xl font-display font-bold flex items-center gap-2">
              Edit Home Banner & SEO <Settings className="text-primary" size={20} />
            </h2>
            <form onSubmit={handleSaveSettings} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase">Hero Title</label>
                  <input
                    type="text"
                    value={settings.hero_title}
                    onChange={(e) => setSettings({ ...settings, hero_title: e.target.value })}
                    placeholder="e.g. Hi, I'm Nafij"
                    className="w-full bg-secondary/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase">Hero Subtitle</label>
                  <input
                    type="text"
                    value={settings.hero_subtitle}
                    onChange={(e) => setSettings({ ...settings, hero_subtitle: e.target.value })}
                    placeholder="e.g. I Build Digital Experiences"
                    className="w-full bg-secondary/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase">SEO Description (Meta Tag)</label>
                <textarea
                  rows={3}
                  value={settings.seo_description}
                  onChange={(e) => setSettings({ ...settings, seo_description: e.target.value })}
                  placeholder="Website meta description for search engines..."
                  className="w-full bg-secondary/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase">SEO Keywords (comma separated)</label>
                <input
                  type="text"
                  value={settings.seo_keywords}
                  onChange={(e) => setSettings({ ...settings, seo_keywords: e.target.value })}
                  placeholder="e.g. Frontend, Shopify, Next.js, Bubble.io"
                  className="w-full bg-secondary/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 px-6 rounded-xl hover:scale-105 active:scale-95 transition-all font-medium glow-primary text-sm"
              >
                <Save size={16} /> Save Configurations
              </button>
            </form>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
