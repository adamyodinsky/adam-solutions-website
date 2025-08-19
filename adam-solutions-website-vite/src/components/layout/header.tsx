import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles, ArrowRight } from "lucide-react";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
  { name: "Policies", href: "/policies" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center">
        <div className="mr-8 hidden md:flex">
          <Link to="/" className="mr-8 flex items-center space-x-3 group">
            <div className="relative">
              <img
                src="/src/assets/img/adam-solutions-logo.png"
                alt="Adam Solutions"
                className="h-10 w-10 rounded-lg transition-transform group-hover:scale-105"
              />
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 blur transition-opacity group-hover:opacity-20"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight">
                Adam Solutions
              </span>
              <span className="text-xs text-muted-foreground leading-tight">
                DevOps & Digital Products
              </span>
            </div>
          </Link>
          <nav className="flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-all duration-200 hover:text-primary",
                  location.pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.name}
                {location.pathname === item.href && (
                  <div className="absolute -bottom-6 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                )}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="mr-2 md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
          <span className="sr-only">Toggle Menu</span>
        </Button>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 top-20 z-50 grid h-[calc(100vh-5rem)] w-full grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden">
            <div className="relative z-20 grid gap-6 rounded-xl bg-card/95 backdrop-blur-xl p-6 shadow-xl border">
              <Link to="/" className="flex items-center space-x-3">
                <img
                  src="/src/assets/img/adam-solutions-logo.png"
                  alt="Adam Solutions"
                  className="h-8 w-8 rounded-lg"
                />
                <div className="flex flex-col">
                  <span className="font-bold">Adam Solutions</span>
                  <span className="text-xs text-muted-foreground">
                    DevOps & Digital Products
                  </span>
                </div>
              </Link>
              <nav className="grid grid-flow-row auto-rows-max gap-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      "flex w-full items-center rounded-lg p-3 text-sm font-medium transition-colors hover:bg-accent",
                      location.pathname === item.href
                        ? "bg-accent text-accent-foreground"
                        : "text-foreground/80"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              <Button asChild className="mt-4">
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        )}

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Link to="/" className="flex items-center space-x-3 md:hidden">
              <img
                src="/src/assets/img/adam-solutions-logo.png"
                alt="Adam Solutions"
                className="h-8 w-8 rounded-lg"
              />
              <div className="flex flex-col">
                <span className="font-bold text-sm">Adam Solutions</span>
                <span className="text-xs text-muted-foreground">
                  DevOps & Digital
                </span>
              </div>
            </Link>
          </div>
          <nav className="flex items-center space-x-4">
            <Button
              asChild
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0"
            >
              <Link to="/contact" className="group">
                <Sparkles className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
