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
      title: "DevOps Consulting",
      description:
        "Complete DevOps transformation including CI/CD pipeline setup, infrastructure automation, and deployment strategies.",
      features: [
        "CI/CD Pipeline Setup",
        "Infrastructure as Code",
        "Monitoring & Logging",
        "Performance Optimization",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description:
        "Design and implement scalable cloud solutions on AWS, Azure, and Google Cloud Platform.",
      features: [
        "Cloud Migration",
        "Auto-scaling Setup",
        "Cost Optimization",
        "Security Best Practices",
      ],
    },
    {
      icon: Code,
      title: "Custom Software Development",
      description:
        "Full-stack application development using modern technologies and best practices.",
      features: [
        "Web Applications",
        "Mobile Apps",
        "API Development",
        "Database Design",
      ],
    },
    {
      icon: Database,
      title: "Database Solutions",
      description:
        "Database design, optimization, and migration services for improved performance and scalability.",
      features: [
        "Database Design",
        "Performance Tuning",
        "Data Migration",
        "Backup Strategies",
      ],
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Fast Delivery",
      description:
        "Quick turnaround times without compromising on quality or attention to detail.",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description:
        "Security-first approach with robust and reliable solutions built to last.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Experienced professionals with proven track records in enterprise environments.",
    },
  ];

  const process = [
    {
      title: "Discovery",
      description: "Understanding your needs and requirements",
      icon: Target,
    },
    {
      title: "Planning",
      description: "Creating a detailed project roadmap",
      icon: Clock,
    },
    {
      title: "Implementation",
      description: "Executing the solution with precision",
      icon: Code,
    },
    {
      title: "Support",
      description: "Ongoing maintenance and optimization",
      icon: Award,
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          DevOps Consulting & Software Engineering Services | Adam Solutions
        </title>
        <meta
          name="description"
          content="Professional DevOps consulting and freelance software engineering services. Cloud infrastructure, CI/CD, custom development, and database solutions."
        />
        <meta
          name="keywords"
          content="DevOps consulting, software engineering, cloud infrastructure, CI/CD, freelance developer"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight">
              Expert DevOps
              <br />& Development
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
              Professional DevOps consulting and freelance software engineering
              services to help your business scale efficiently and securely.
              These are professional services, not physical goods.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-black hover:bg-gray-800 text-white"
              >
                <Play className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-black text-black hover:bg-black hover:text-white"
              >
                View Case Studies
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
                Our Services
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
                Comprehensive solutions tailored to your business needs
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
                Our Process
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
                A structured approach to deliver exceptional results
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
                Why Work With Us?
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
                Technologies We Use
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
                Modern tools and technologies for optimal results
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
                  Professional Services
                </h3>
                <p className="text-gray-700 max-w-2xl mx-auto">
                  All our offerings are professional consulting and development
                  services. These are not physical products but expertise-based
                  solutions delivered remotely or on-site as needed.
                </p>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-black text-black hover:bg-black hover:text-white"
                >
                  Learn About Our Approach
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
                Ready to Start Your Project?
              </h2>
              <p className="text-lg md:text-xl text-gray-700">
                Let's discuss how we can help transform your business with our
                expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  asChild
                  className="bg-black hover:bg-gray-800 text-white"
                >
                  <a href="mailto:info@adamsolutions.com">
                    Get Started
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
                    View Products
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
