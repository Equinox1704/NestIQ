import { motion } from "framer-motion";
import { Sparkles, MessageSquare, Users, FileSignature } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI Listing Generator",
    desc: "Upload photos and our AI writes compelling listings with SEO-optimized descriptions, auto-tags amenities, and posts across portals.",
  },
  {
    icon: MessageSquare,
    title: "Automated Lead Follow-up",
    desc: "Never lose a lead again. NestIQ responds to inquiries in seconds via WhatsApp, email, and SMS — 24/7.",
  },
  {
    icon: Users,
    title: "Smart Tenant Matching",
    desc: "Our algorithm matches your property to verified tenants based on budget, preferences, and background checks.",
  },
  {
    icon: FileSignature,
    title: "One-click Lease Management",
    desc: "Generate Aadhaar-verified digital rental agreements. E-sign, stamp, and store — all from your dashboard.",
  },
];

const FeaturesSection = () => (
  <section id="features" className="py-20 px-6 bg-gradient-hero">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Everything you need to manage rentals <span className="text-gradient-accent">smarter</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Powerful AI tools designed specifically for the Indian rental market.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-gradient-card rounded-xl p-8 border border-border hover:border-primary/30 transition-all group"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:glow-accent transition-shadow">
              <f.icon size={28} className="text-primary" />
            </div>
            <h3 className="font-heading text-xl font-semibold mb-3">{f.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
