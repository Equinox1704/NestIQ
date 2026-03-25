import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";

const HeroSection = () => (
  <section className="relative pt-32 pb-20 px-6 bg-gradient-hero overflow-hidden">
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)",
      backgroundSize: "40px 40px",
    }} />

    <div className="container mx-auto relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
            🚀 Now in Early Access
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Find, List & Manage Properties{" "}
            <span className="text-gradient-accent">with AI</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg mb-8">
            NestIQ automates your entire rental workflow — from listing to lease signing. Built for Indian landlords, brokers, and property managers.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="gap-2">
              Get Early Access <ArrowRight size={18} />
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a href="#how-it-works">
                <Play size={16} /> See How It Works
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="rounded-xl overflow-hidden border border-border glow-accent">
            <img
              src={heroDashboard}
              alt="NestIQ property management dashboard"
              width={1280}
              height={800}
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
