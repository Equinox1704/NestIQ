import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Starter",
    price: "Free",
    sub: "Forever free",
    features: ["1 property listing", "Basic listing page", "Email lead notifications", "Community support"],
    popular: false,
  },
  {
    name: "Growth",
    price: "₹999",
    sub: "per month",
    features: ["Up to 10 property listings", "AI listing generator", "Automated lead follow-up", "Smart tenant matching", "WhatsApp integration", "Priority support"],
    popular: true,
  },
  {
    name: "Pro",
    price: "₹2,499",
    sub: "per month",
    features: ["Unlimited property listings", "All Growth features", "One-click lease management", "Advanced analytics dashboard", "Priority dedicated support", "Full API access"],
    popular: false,
  },
];

const PricingSection = () => (
  <section id="pricing" className="py-20 px-6 bg-gradient-hero">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Simple, transparent <span className="text-gradient-accent">pricing</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Start free. Upgrade when you're ready to scale.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {tiers.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`rounded-xl p-8 border transition-all relative ${
              t.popular
                ? "border-primary glow-accent bg-gradient-card scale-[1.02]"
                : "border-border bg-gradient-card"
            }`}
          >
            {t.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold bg-primary text-primary-foreground">
                Most Popular
              </span>
            )}
            <h3 className="font-heading text-xl font-semibold mb-2">{t.name}</h3>
            <div className="mb-6">
              <span className="font-heading text-4xl font-bold">{t.price}</span>
              {t.sub !== "Forever free" && <span className="text-muted-foreground text-sm ml-1">/mo</span>}
              {t.sub === "Forever free" && <p className="text-muted-foreground text-sm mt-1">{t.sub}</p>}
            </div>
            <ul className="space-y-3 mb-8">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Button className="w-full" variant={t.popular ? "default" : "outline"}>
              {t.price === "Free" ? "Get Started" : "Start Free Trial"}
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
