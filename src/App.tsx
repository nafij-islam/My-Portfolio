import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import WhatsAppFloat from "./components/ui/WhatsAppFloat";
import Loader from "./components/ui/Loader";

gsap.registerPlugin(ScrollTrigger);

const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

/* =========================
   SMOOTH SCROLL
========================= */
const useSmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    const raf = (time) => {
      lenis.raf(time * 1000);
    };

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(raf);
    };
  }, []);
};

/* =========================
   ROUTE ANIMATION
========================= */
const AnimatedRoutes = () => {
  const location = useLocation();
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        pageRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: "power2.inOut" }
      );
    }, pageRef);

    window.scrollTo(0, 0);

    return () => ctx.revert();
  }, [location]);

  return (
    <div ref={pageRef}>
      <Routes location={location}>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

/* =========================
   MAIN APP
========================= */
const App = () => {
  const [loading, setLoading] = useState(true);

  useSmoothScroll();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        {loading && <Loader onFinish={() => setLoading(false)} />}

        {!loading && (
          <BrowserRouter>
            <Suspense fallback={null}>
              <AnimatedRoutes />
              <WhatsAppFloat />
            </Suspense>
          </BrowserRouter>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;