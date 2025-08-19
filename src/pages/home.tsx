import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Server, Zap, Shield } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

export function HomePage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(".scroll-animate");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>Adam Solutions - Software Engineer & Indie Developer</title>
        <meta
          name="description"
          content="Solo software engineer specializing in DevOps, Platform Engineering, Backend & Mobile apps. Creator of Circle app and ChatGPT-Kit extension."
        />
        <meta
          name="keywords"
          content="DevOps, Platform Engineering, Backend, mobile app, Chrome extension, software engineer, indie developer"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <div className="space-y-6 animate-fade-in">
              <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4 space-y-4 sm:space-y-0 mb-8">
                <img
                  src="/src/assets/img/adam-solutions-logo.png"
                  alt="Adam Solutions"
                  className="h-24 w-24 md:h-28 md:w-28 rounded-full shadow-lg"
                />
                <div className="text-center sm:text-left">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black leading-tight">
                    Adam Solutions
                  </h1>
                  <p className="text-lg md:text-xl text-gray-700 mt-2">
                    Software Engineer & Indie Developer
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Button
                size="lg"
                asChild
                className="bg-black hover:bg-gray-800 text-white transform hover:scale-105 transition-all duration-200"
              >
                <Link to="/products">
                  View Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-black text-black hover:bg-black hover:text-white transform hover:scale-105 transition-all duration-200"
              >
                <Link to="/services">My Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-8 mb-16 scroll-animate">
            <h2 className="text-3xl md:text-5xl font-bold text-black">
              What I Do
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              I build cool digital products and help startups with DevOps,
              Platform Engineering, Backend development, and mobile apps. Let's
              make something awesome together.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2 max-w-5xl mx-auto scroll-animate">
            {/* My Digital Projects */}
            <div className="bg-white rounded-lg border border-gray-200 p-10 hover:shadow-lg hover:shadow-gray-200/50 hover:-translate-y-1 transition-all duration-300">
              <div className="space-y-6">
                <div className="flex items-center justify-center w-20 h-20 rounded-lg bg-black text-white mx-auto">
                  <Code className="h-10 w-10" />
                </div>
                <div className="text-center space-y-4">
                  <h3 className="text-3xl font-bold text-black">
                    My Digital Projects
                  </h3>
                  <p className="text-lg text-gray-700">
                    I build digital products and open source tools that solve
                    real problems
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-600">
                    <span className="bg-gray-100 px-3 py-1 rounded-full">
                      Circle mobile app
                    </span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full">
                      ChatGPT-Kit extension
                    </span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full">
                      TerminalGPT CLI (1M+ downloads)
                    </span>
                  </div>
                  <Button
                    size="lg"
                    asChild
                    className="bg-black hover:bg-gray-800 text-white mt-6"
                  >
                    <Link to="/products">
                      Check My Projects
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* DevOps & Engineering Services */}
            <div className="bg-white rounded-lg border border-gray-200 p-10 hover:shadow-lg hover:shadow-gray-200/50 hover:-translate-y-1 transition-all duration-300">
              <div className="space-y-6">
                <div className="flex items-center justify-center w-20 h-20 rounded-lg bg-black text-white mx-auto">
                  <Server className="h-10 w-10" />
                </div>
                <div className="text-center space-y-4">
                  <h3 className="text-3xl font-bold text-black">
                    DevOps & Engineering Services
                  </h3>
                  <p className="text-lg text-gray-700">
                    I help startups build robust infrastructure and scale
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-600">
                    <span className="bg-gray-100 px-3 py-1 rounded-full">
                      CI/CD Pipelines
                    </span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full">
                      Cloud Architecture
                    </span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full">
                      Backend Systems
                    </span>
                  </div>
                  <Button
                    size="lg"
                    asChild
                    className="bg-black hover:bg-gray-800 text-white mt-6"
                  >
                    <Link to="/services">
                      View My Services
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-8 mb-16 scroll-animate">
            <h2 className="text-3xl md:text-5xl font-bold text-black">
              Why Work With Me?
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto scroll-animate">
            {[
              {
                icon: Zap,
                title: "Fast & Focused",
                description:
                  "No bureaucracy, no meetings about meetings. I get stuff done quickly and efficiently.",
              },
              {
                icon: Code,
                title: "Modern Stack",
                description:
                  "I work with the latest technologies and best practices to build robust, maintainable solutions.",
              },
              {
                icon: Shield,
                title: "Startup-Ready",
                description:
                  "I understand startup pace and constraints. Built to scale, designed to iterate fast.",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-black text-white mx-auto">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-black">
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-8 max-w-3xl mx-auto scroll-animate">
            <h2 className="text-3xl md:text-5xl font-bold text-black">
              Ready to Get Started?
            </h2>
            <p className="text-lg md:text-xl text-gray-700">
              Got a cool project in mind? Let's chat about how I can help bring
              your ideas to life with solid engineering and smart solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="bg-black hover:bg-gray-800 text-white"
              >
                <a href="mailto:info@adamsolutions.com">Let's Talk</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-black text-black hover:bg-black hover:text-white"
              >
                <Link to="/products">Check My Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
