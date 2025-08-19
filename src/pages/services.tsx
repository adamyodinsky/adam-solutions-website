import { Button } from "@/components/ui/button";
import {
  Server,
  Cloud,
  Code,
  Database,
  Shield,
  Zap,
  Users,
  CheckCircle,
  ArrowRight,
  Play,
  ExternalLink,
  Target,
  Clock,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export function ServicesPage() {
  const services = [
    {
      icon: Server,
      title: "DevOps & Platform Engineering",
      description:
        "I set up robust CI/CD pipelines, automate infrastructure, and create deployment strategies that actually work. No over-engineering, just solid foundations.",
      features: [
        "CI/CD Pipeline Setup",
        "Infrastructure as Code",
        "Monitoring & Alerting",
        "Performance Optimization",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description:
        "I design and build scalable cloud solutions on AWS, Azure, and GCP. Focus on cost-effective, maintainable architectures that grow with your startup.",
      features: [
        "Cloud Architecture",
        "Auto-scaling Systems",
        "Cost Optimization",
        "Security Implementation",
      ],
    },
    {
      icon: Code,
      title: "Backend Development",
      description:
        "I build robust APIs, microservices, and backend systems using modern technologies. Clean code, solid architecture, built to scale.",
      features: [
        "REST & GraphQL APIs",
        "Microservices Architecture",
        "Database Design",
        "Performance Optimization",
      ],
    },
    {
      icon: Database,
      title: "Mobile Apps",
      description:
        "I create mobile applications with great UX and solid backend integration. Cross-platform solutions that work smoothly across devices.",
      features: [
        "Cross-platform Development",
        "Native Performance",
        "Backend Integration",
        "App Store Deployment",
      ],
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Startup Speed",
      description:
        "I understand startup urgency. Fast iterations, quick deployments, no red tape.",
    },
    {
      icon: Shield,
      title: "Production Ready",
      description:
        "Code that works in production, not just on demo day. Built for real users and real scale.",
    },
    {
      icon: Users,
      title: "Direct Communication",
      description:
        "You work directly with me - no project managers, no miscommunication, just results.",
    },
  ];

  const process = [
    {
      title: "Discovery",
      description: "We chat about your goals and technical challenges",
      icon: Target,
    },
    {
      title: "Planning",
      description: "I create a clear roadmap with realistic timelines",
      icon: Clock,
    },
    {
      title: "Building",
      description: "I build, test, and iterate based on your feedback",
      icon: Code,
    },
    {
      title: "Launch & Support",
      description: "Deploy to production and provide ongoing support",
      icon: Award,
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          DevOps, Platform Engineering & Backend Development | Adam Solutions
        </title>
        <meta
          name="description"
          content="Solo software engineer specializing in DevOps, Platform Engineering, Backend development, and mobile apps. I help startups build and scale their tech infrastructure."
        />
        <meta
          name="keywords"
          content="DevOps, Platform Engineering, Backend development, mobile apps, startup consulting, freelance developer"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight">
              DevOps & Platform
              <br />
              Engineering
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
              I help startups build robust infrastructure, streamline
              deployments, and create scalable backend systems. Let's turn your
              ideas into production-ready solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-black hover:bg-gray-800 text-white"
              >
                <Play className="mr-2 h-5 w-5" />
                Let's Build Something
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-black text-black hover:bg-black hover:text-white"
              >
                See My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="space-y-24 py-16">
        {/* Services Grid */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-8 mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-black">
                What I Do
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
                I specialize in the tech stack and tools that startups need to
                move fast and scale smart
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start space-x-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-black text-white flex-shrink-0">
                      <service.icon className="h-8 w-8" />
                    </div>
                    <div className="flex-1 space-y-4">
                      <h3 className="text-2xl font-bold text-black">
                        {service.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="grid gap-2 sm:grid-cols-2">
                        {service.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center space-x-3"
                          >
                            <CheckCircle className="h-4 w-4 text-black flex-shrink-0" />
                            <span className="text-sm text-gray-600">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-8 mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-black">
                How I Work
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
                Simple, transparent process focused on getting things done right
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-4 max-w-6xl mx-auto">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="relative">
                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-lg bg-black text-white">
                      <step.icon className="h-10 w-10" />
                    </div>
                    <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-white text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-8 mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-black">
                Why Work With Me?
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg border border-gray-200 p-8 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-black text-white mx-auto mb-6">
                    <benefit.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-8 mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-black">
                My Tech Stack
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
                I work with modern, battle-tested technologies that startups
                love
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6 max-w-6xl mx-auto">
              {[
                "Docker",
                "Kubernetes",
                "AWS",
                "Azure",
                "React",
                "Node.js",
                "Python",
                "Go",
                "PostgreSQL",
                "MongoDB",
                "Redis",
                "Terraform",
              ].map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center rounded-lg border border-gray-200 bg-white p-6 text-sm font-medium hover:shadow-lg hover:bg-gray-50 transition-all"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Notice */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="bg-white rounded-2xl p-12 border border-gray-200 text-center max-w-4xl mx-auto">
              <div className="space-y-6">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-black text-white mx-auto">
                  <Server className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-black">
                  Remote-First Approach
                </h3>
                <p className="text-gray-700 max-w-2xl mx-auto">
                  I work remotely with startups worldwide. All services are
                  delivered digitally with clear communication and regular
                  updates. No physical products, just solid engineering
                  solutions.
                </p>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-black text-black hover:bg-black hover:text-white"
                >
                  Learn About My Process
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-8 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-black">
                Ready to Build Something Cool?
              </h2>
              <p className="text-lg md:text-xl text-gray-700">
                Got a startup idea that needs solid engineering? Let's chat
                about how I can help make it happen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  asChild
                  className="bg-black hover:bg-gray-800 text-white"
                >
                  <a href="mailto:info@adamsolutions.com">
                    Let's Talk
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-black text-black hover:bg-black hover:text-white"
                >
                  <Link to="/products">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Check My Projects
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
