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
  Sparkles,
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
      color: "from-blue-500 to-cyan-500",
      bgColor:
        "from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20",
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
      color: "from-purple-500 to-pink-500",
      bgColor:
        "from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20",
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
      color: "from-green-500 to-emerald-500",
      bgColor:
        "from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20",
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
      color: "from-orange-500 to-red-500",
      bgColor:
        "from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20",
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Fast Delivery",
      description:
        "Quick turnaround times without compromising on quality or attention to detail.",
      color: "text-yellow-500",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description:
        "Security-first approach with robust and reliable solutions built to last.",
      color: "text-green-500",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Experienced professionals with proven track records in enterprise environments.",
      color: "text-blue-500",
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
      <section className="relative py-24 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-blue-50/30 to-purple-50/50 dark:from-green-950/20 dark:via-blue-950/10 dark:to-purple-950/20"></div>
        <div className="absolute top-1/4 -left-4 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>

        <div className="container mx-auto relative">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-green-600/10 to-blue-600/10 px-6 py-2 text-sm font-medium border border-green-200/20">
              <Server className="mr-2 h-4 w-4 text-green-600" />
              Professional Services
            </div>

            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-green-900 to-blue-900 dark:from-white dark:via-green-100 dark:to-blue-100 bg-clip-text text-transparent leading-tight">
              Expert DevOps
              <br />& Development
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Professional DevOps consulting and freelance software engineering
              services to help your business scale efficiently and securely.
              These are professional services, not physical goods.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white border-0"
              >
                <Play className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg">
                View Case Studies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto space-y-32 py-16">
        {/* Services Grid */}
        <section className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <div key={index} className="group relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} rounded-3xl opacity-50 group-hover:opacity-70 transition-opacity`}
                ></div>
                <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl p-8 border border-border/50 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/5 group-hover:border-primary/20">
                  <div className="flex items-start space-x-6">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} text-white flex-shrink-0`}
                    >
                      <service.icon className="h-8 w-8" />
                    </div>
                    <div className="flex-1 space-y-4">
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                      <div className="grid gap-2 sm:grid-cols-2">
                        {service.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center space-x-3"
                          >
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="relative py-16">
          <div className="text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A structured approach to deliver exceptional results
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4 mt-16">
            {process.map((step, index) => (
              <div key={index} className="group text-center">
                <div className="relative">
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground transition-transform group-hover:scale-110">
                    <step.icon className="h-10 w-10" />
                  </div>
                  <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="relative py-16">
          <div className="text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Why Work With Us?
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3 mt-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="group relative">
                <div className="relative bg-card rounded-2xl p-8 border border-border/50 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/5 group-hover:border-primary/20">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-background to-muted mb-6`}
                  >
                    <benefit.icon className={`h-8 w-8 ${benefit.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies */}
        <section className="relative py-16">
          <div className="text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Technologies We Use
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Modern tools and technologies for optimal results
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6 mt-16">
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
              <div key={index} className="group relative">
                <div className="flex items-center justify-center rounded-2xl border border-border/50 bg-card p-6 text-sm font-medium transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/5 group-hover:border-primary/20 group-hover:bg-gradient-to-br group-hover:from-background group-hover:to-muted/50">
                  {tech}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Service Notice */}
        <section className="relative">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 rounded-3xl p-12 border border-green-200/20 text-center">
            <div className="mx-auto max-w-2xl space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-blue-600 mb-6">
                <Server className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Professional Services</h3>
              <p className="text-muted-foreground leading-relaxed">
                All our offerings are professional consulting and development
                services. These are not physical products but expertise-based
                solutions delivered remotely or on-site as needed.
              </p>
              <Button size="lg" variant="outline">
                Learn About Our Approach
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-16">
          <div className="text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with our
              expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white border-0"
              >
                <Link to="/contact">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/products">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  View Products
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
