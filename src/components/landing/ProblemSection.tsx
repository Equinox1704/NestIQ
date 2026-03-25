import { motion } from "framer-motion";
import { FileText, UserX, Clock } from "lucide-react";

const problems = [
  {
    icon: FileText,
    title: "Manual Listings",
    desc: "Wasting hours creating listings across multiple portals, formatting photos, and writing descriptions from scratch.",
  },
  {
    icon: UserX,
    title: "Missed Leads",
    desc: "Potential tenants slip away because you can't respond to every inquiry instantly — especially on weekends.",
  },
  {
    icon: Clock,
    title: "Slow Tenant Onboarding",
    desc: "Collecting documents, verifying backgrounds, and signing agreements takes weeks with paper-based processes.",
  },
];

const ProblemSection = () => (
  <section className="py-20 px-6">
    <div className="container mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Tired of managing properties <span className="text-gradient-accent">manually?</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
          Indian landlords lose ₹50,000+ every year to vacancies, missed leads, and slow processes. Sound familiar?
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {problems.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-gradient-card rounded-xl p-8 border border-border hover:border-primary/30 transition-colors text-left"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
              <p.icon size={24} className="text-primary" />
            </div>
            <h3 className="font-heading text-xl font-semibold mb-3">{p.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
