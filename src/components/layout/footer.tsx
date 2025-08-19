import { Link } from "react-router-dom";
import { Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/src/assets/img/adam-solutions-logo.png"
                alt="Adam Solutions"
                className="h-10 w-10 rounded-lg"
              />
              <div className="flex flex-col">
                <span className="font-bold text-xl text-black">
                  Adam Solutions
                </span>
                <span className="text-sm text-gray-600">
                  Software Engineer & Indie Developer
                </span>
              </div>
            </div>
            <p className="text-gray-700 max-w-md">
              I help startups with DevOps, Platform Engineering, Backend
              development, and mobile apps. Plus I build cool digital products
              on the side.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-black">Quick Links</h3>
            <div className="space-y-2">
              <Link
                to="/products"
                className="block text-gray-600 hover:text-black transition-colors"
              >
                My Projects
              </Link>
              <Link
                to="/services"
                className="block text-gray-600 hover:text-black transition-colors"
              >
                My Services
              </Link>
              <a
                href="mailto:info@adamsolutions.com"
                className="block text-gray-600 hover:text-black transition-colors"
              >
                Get in Touch
              </a>
              <Link
                to="/policies"
                className="block text-gray-600 hover:text-black transition-colors"
              >
                Policies
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-black">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-black" />
                <a
                  href="mailto:info@adamsolutions.com"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  info@adamsolutions.com
                </a>
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p>Usually reply within 24 hours</p>
                <p>Available: Mon-Fri 9AM-6PM UTC</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-sm text-gray-600 text-center md:text-left">
            © 2024 Adam DevOps Solutions Ltd. All rights reserved.
          </div>

          <div className="flex items-center space-x-6">
            <Link
              to="/policies"
              className="text-sm text-gray-600 hover:text-black transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/policies"
              className="text-sm text-gray-600 hover:text-black transition-colors"
            >
              Terms of Service
            </Link>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 border-black text-black hover:bg-black hover:text-white"
              onClick={scrollToTop}
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
