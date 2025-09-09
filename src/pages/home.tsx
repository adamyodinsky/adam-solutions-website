import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Server, Zap, Shield, Users } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import logoImage from "@/assets/img/adam-solutions-logo.png";

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
        <title>Adam Solutions - DevOps & Fullstack Engineering</title>
        <meta
          name="description"
          content="DevOps & Fullstack Engineering. From infrastructure and CI/CD to web and mobile apps — I design, build, and ship end-to-end solutions."
        />
        <meta
          name="keywords"
          content="DevOps, Platform Engineering, Backend, mobile app, Chrome extension, software engineer, indie developer"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white via-gray-50/30 to-blue-50/20 py-20 md:py-32 lg:py-40 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-green-100 to-blue-100 rounded-full blur-3xl opacity-15"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="mx-auto max-w-5xl text-center">
            {/* Logo and Brand */}
            <div className="animate-fade-in mb-8">
              <div className="inline-block mb-6">
                <img
                  src={logoImage}
                  alt="Adam Solutions"
                  className="h-32 w-32 md:h-40 md:w-40 rounded-full shadow-2xl ring-4 ring-white/50 mx-auto hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Main heading with better typography */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-black leading-[0.9] tracking-tight">
                  Adam Solutions
                </h1>
                <div className="flex items-center justify-center space-x-3 mb-6">
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent flex-1 max-w-20"></div>
                  <p className="text-xl md:text-2xl text-gray-600 font-subheading font-bold px-4">
                    <span className="font-bold">DevOps</span> &{" "}
                    <span className="font-bold">Fullstack Engineering</span>
                  </p>
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent flex-1 max-w-20"></div>
                </div>
              </div>
            </div>

            {/* Value proposition */}
            <div className="animate-slide-up mb-10">
              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 font-body leading-relaxed max-w-3xl mx-auto">
                I help startups with cloud infrastructure to fullstack web and
                mobile apps —{" "}
                <span className="font-bold text-black">
                  Architect, build, and ship
                </span>{" "}
                complete solutions that grow with your business.
              </p>
            </div>

            {/* Enhanced CTA buttons */}
            <div className="animate-slide-up">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button
                  size="lg"
                  asChild
                  className="bg-black hover:bg-gray-800 text-white transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl px-8 py-4 text-base"
                >
                  <Link to="/products">
                    View My Projects
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-2 border-black text-black hover:bg-black hover:text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl px-8 py-4 text-base"
                >
                  <Link to="/services">Explore Services</Link>
                </Button>
              </div>

              {/* Quick stats or social proof */}
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600 font-body">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>
                    <span className="font-bold">Available</span> for projects
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <a
                    href="https://www.linkedin.com/in/adam-yodinsky-890743153/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-800 transition-colors duration-200 hover:underline decoration-dotted underline-offset-4"
                    title="View LinkedIn profile"
                  >
                    <span className="font-bold">7+ years</span> experience
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <a
                    href="https://www.credly.com/badges/4e75e8e4-603e-4135-85f4-5026c630f1ed/linked_in_profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-800 transition-colors duration-200 hover:underline decoration-dotted underline-offset-4"
                    title="View AWS certification"
                  >
                    <span className="font-bold">AWS Certified</span> Solutions
                    Architect
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-gray-100/50 to-blue-50/10 py-20 md:py-28 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-10 right-20 w-64 h-64 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full blur-3xl opacity-15"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-gradient-to-r from-blue-100 to-green-100 rounded-full blur-3xl opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center space-y-8 mb-16 scroll-animate">
            <h2 className="text-3xl md:text-5xl font-bold text-black">
              What I Do
            </h2>
          </div>

          <div className="grid gap-12 md:grid-cols-2 max-w-5xl mx-auto scroll-animate">
            {/* My Digital Projects */}
            <div className="bg-white rounded-xl border border-gray-200 p-10 shadow-sm hover:shadow-xl hover:shadow-gray-200/20 hover:-translate-y-2 transition-all duration-300 flex flex-col">
              <div className="flex-1">
                <div className="flex items-center justify-center w-20 h-20 rounded-xl bg-black text-white mx-auto shadow-lg">
                  <Code className="h-10 w-10" />
                </div>
                <div className="text-center space-y-4 mt-6">
                  <h3 className="text-3xl font-bold text-black">
                    My Digital Projects
                  </h3>
                  <p className="text-lg text-gray-700">
                    I build digital products and open source tools that solve
                    real problems
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-600">
                    <span className="bg-gray-100/80 px-4 py-2 rounded-full shadow-sm hover:shadow-md hover:bg-gray-200/80 transition-all duration-200">
                      Circle mobile app
                    </span>
                    <span className="bg-gray-100/80 px-4 py-2 rounded-full shadow-sm hover:shadow-md hover:bg-gray-200/80 transition-all duration-200">
                      ChatGPT-Kit extension
                    </span>
                    <span className="bg-gray-100/80 px-4 py-2 rounded-full shadow-sm hover:shadow-md hover:bg-gray-200/80 transition-all duration-200">
                      TerminalGPT CLI (1M+ downloads)
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button
                  size="lg"
                  asChild
                  className="bg-black hover:bg-gray-800 text-white w-full"
                >
                  <Link to="/products">
                    Check My Projects
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* DevOps & Engineering Services */}
            <div className="bg-white rounded-xl border border-gray-200 p-10 shadow-sm hover:shadow-xl hover:shadow-gray-200/20 hover:-translate-y-2 transition-all duration-300 flex flex-col">
              <div className="flex-1">
                <div className="flex items-center justify-center w-20 h-20 rounded-xl bg-black text-white mx-auto shadow-lg">
                  <Server className="h-10 w-10" />
                </div>
                <div className="text-center space-y-4 mt-6">
                  <h3 className="text-3xl font-bold text-black">
                    DevOps & Fullstack Services
                  </h3>
                  <p className="text-lg text-gray-700">
                    Cloud infrastructure to fullstack web and mobile apps
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-600">
                    <span className="bg-gray-100/80 px-4 py-2 rounded-full shadow-sm hover:shadow-md hover:bg-gray-200/80 transition-all duration-200">
                      CI/CD Pipelines
                    </span>
                    <span className="bg-gray-100/80 px-4 py-2 rounded-full shadow-sm hover:shadow-md hover:bg-gray-200/80 transition-all duration-200">
                      Cloud Architecture
                    </span>
                    <span className="bg-gray-100/80 px-4 py-2 rounded-full shadow-sm hover:shadow-md hover:bg-gray-200/80 transition-all duration-200">
                      Backend Systems
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button
                  size="lg"
                  asChild
                  className="bg-black hover:bg-gray-800 text-white w-full"
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
      </section>

      {/* Features Section */}
      <section className="relative bg-gradient-to-br from-white via-gray-50/30 to-purple-50/10 py-20 md:py-28 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-green-100 to-blue-100 rounded-full blur-3xl opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center space-y-8 mb-16 scroll-animate">
            <h2 className="text-3xl md:text-5xl font-bold text-black">
              Why Work With Me?
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto scroll-animate">
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
              {
                icon: Users,
                title: "10x Dev Teams",
                description:
                  "I'll help your development team become 10x more efficient through automation, best practices, and streamlined workflows.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center space-y-4 p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:shadow-gray-200/20 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-black text-white mx-auto shadow-lg">
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
      <section className="relative bg-gradient-to-br from-gray-50 via-gray-100/50 to-indigo-50/10 py-20 md:py-28 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-10 right-10 w-80 h-80 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full blur-3xl opacity-15"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
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
                <a href="mailto:info@adam-solutions.io">Let's Talk</a>
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
