import { Link } from "react-router-dom";
import { Mail, Github, Twitter, Linkedin, Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t bg-gradient-to-b from-background to-muted/20">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100/[0.02] bg-grid-16"></div>

      <div className="relative">
        <div className="container py-16">
          <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center space-x-3">
                <img
                  src="/src/assets/img/adam-solutions-logo.png"
                  alt="Adam Solutions"
                  className="h-12 w-12 rounded-xl"
                />
                <div className="flex flex-col">
                  <span className="font-bold text-xl">Adam Solutions</span>
                  <span className="text-sm text-muted-foreground">
                    DevOps & Digital Products
                  </span>
                </div>
              </div>
              <p className="text-muted-foreground max-w-md leading-relaxed">
                Professional DevOps consulting and innovative digital products
                to help businesses scale efficiently and securely in the modern
                digital landscape.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" className="h-10 w-10">
                  <Github className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="h-10 w-10">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="h-10 w-10">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="h-10 w-10">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Quick Links</h3>
              <div className="space-y-3">
                <Link
                  to="/products"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Digital Products
                </Link>
                <Link
                  to="/services"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  DevOps Services
                </Link>
                <Link
                  to="/contact"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Get in Touch
                </Link>
                <Link
                  to="/policies"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Policies
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-primary" />
                  <a
                    href="mailto:support@adamsolutions.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    support@adamsolutions.com
                  </a>
                </div>
                <div className="text-sm text-muted-foreground">
                  <p>Response time: 24-48 hours</p>
                  <p>Business hours: Mon-Fri 9AM-6PM UTC</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>© 2024 Adam DevOps Solutions Ltd. Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>and lots of ☕</span>
            </div>

            <div className="flex items-center space-x-6">
              <Link
                to="/policies"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/policies"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={scrollToTop}
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Gradient decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      </div>
    </footer>
  );
}
