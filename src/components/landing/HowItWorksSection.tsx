import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Add your property", desc: "Upload photos and basic details. Our AI fills in the rest — descriptions, amenities, pricing suggestions." },
  { num: "02", title: "AI handles inquiries", desc: "NestIQ auto-responds to leads, schedules viewings, and qualifies tenants while you focus on what matters." },
  { num: "03", title: "Sign tenants digitally", desc: "Generate verified rental agreements, collect e-signatures, and onboard tenants — all in under 10 minutes." },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-20 px-6">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          How it <span className="text-gradient-accent">works</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Get started in minutes. No training needed.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 relative">
        {/* connector line */}
        <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-[2px] bg-border" />

        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center relative"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mx-auto mb-6 relative z-10 bg-background">
              <span className="font-heading text-xl font-bold text-primary">{s.num}</span>
            </div>
            <h3 className="font-heading text-xl font-semibold mb-3">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
