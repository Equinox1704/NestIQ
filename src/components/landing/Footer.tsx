const Footer = () => (
  <footer id="contact" className="py-16 px-6 border-t border-border">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-4 gap-10 mb-12">
        <div className="md:col-span-2">
          <h3 className="font-heading text-2xl font-bold mb-3">
            Nest<span className="text-gradient-accent">IQ</span>
          </h3>
          <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
            AI-powered property listing and rental management platform built for the Indian market. Simplify your rental workflow today.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-4 text-sm">Product</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
            <li><a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a></li>
            <li><a href="#how-it-works" className="hover:text-foreground transition-colors">How it Works</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-4 text-sm">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
            <li><a href="mailto:hello@nestiq.in" className="hover:text-foreground transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border pt-8 text-center text-xs text-muted-foreground">
        © 2026 NestIQ. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
