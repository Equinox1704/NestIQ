import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "NestIQ cut our vacancy period from 45 days to just 12. The AI listing generator alone saved us hours every week.",
    name: "Priya Mehta",
    role: "Property Manager",
    city: "Mumbai",
  },
  {
    quote: "I manage 30+ flats across Bangalore. Before NestIQ, I was drowning in WhatsApp messages. Now leads are auto-qualified and I only talk to serious tenants.",
    name: "Arjun Reddy",
    role: "Real Estate Investor",
    city: "Bangalore",
  },
  {
    quote: "The digital lease signing is a game-changer. My tenants love that they don't have to visit a notary. Everything happens on their phone.",
    name: "Sneha Kapoor",
    role: "Co-founder, UrbanNest Realty",
    city: "Delhi NCR",
  },
];

const TestimonialsSection = () => (
  <section className="py-20 px-6">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Loved by property owners across <span className="text-gradient-accent">India</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-gradient-card rounded-xl p-8 border border-border"
          >
            <Quote size={24} className="text-primary/40 mb-4" />
            <p className="text-foreground/90 text-sm leading-relaxed mb-6">"{t.quote}"</p>
            <div>
              <p className="font-heading font-semibold text-sm">{t.name}</p>
              <p className="text-muted-foreground text-xs">{t.role} · {t.city}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
