import { Link } from "react-router-dom";
import { Mail, ArrowUp, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/img/adam-solutions-logo.png";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-gray-200 bg-white shadow-inner">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src={logoImage}
                alt="Adam Solutions"
                className="h-10 w-10 rounded-lg"
              />
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl text-black">
                  Adam Solutions
                </span>
                <span className="text-sm text-gray-600 font-body">
                  DevOps & Fullstack Engineering
                </span>
              </div>
            </div>
            <p className="text-gray-700 max-w-md font-body">
              Cloud infrastructure to fullstack web and mobile apps.
              <br />I architect, build, and ship complete solutions that grow
              with your business.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-subheading font-semibold text-lg text-black">
              Quick Links
            </h3>
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
                href="mailto:info@adam-solutions.io"
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

          {/* Contact & Connect */}
          <div className="space-y-4">
            <h3 className="font-subheading font-semibold text-lg text-black">
              Connect
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-black" />
                <a
                  href="mailto:info@adam-solutions.io"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  info@adam-solutions.io
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <a
                  href="https://www.linkedin.com/in/adam-yodinsky-890743153/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  <span className="text-sm font-body">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/adamyodinsky"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors"
                >
                  <Github className="h-4 w-4" />
                  <span className="text-sm font-body">GitHub</span>
                </a>
              </div>
              <div className="text-sm text-gray-600 space-y-1 font-body">
                <p>Usually reply within 24 hours</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-sm text-gray-600 text-center md:text-left font-body">
            © 2024 Adam DevOps Solutions Ltd. All rights reserved.
          </div>

          <div className="flex items-center space-x-6">
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
