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
  ExternalLink,
  Target,
  Clock,
  Award,
  Star,
  ChevronDown,
  ChevronUp,
  Settings,
  Smartphone,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";

export function ServicesPage() {
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
  const services = [
    {
      icon: Server,
      title: "DevOps & Platform Engineering",
      description:
        "I design and implement robust cloud infrastructure and deployment pipelines. From CI/CD to cloud architecture, I create scalable, secure, and cost-effective solutions that grow with your startup.",
      features: [
        "Cloud Architecture (AWS, Azure, GCP)",
        "CI/CD & GitOps Workflows",
        "Infrastructure as Code",
        "Monitoring & Security",
        "Cost Optimization",
        "Auto-scaling Systems",
      ],
    },
    {
      icon: Code,
      title: "Full Stack Development",
      description:
        "I build complete software solutions from backend to frontend. Using modern technologies, I create scalable APIs, robust microservices, and intuitive user interfaces that deliver great user experiences.",
      features: [
        "API & Microservices Development",
        "Event-Driven Architecture",
        "Database Design & Optimization",
        "Frontend & Mobile Apps",
        "Cross-platform Solutions",
        "Performance Optimization",
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
      description: "We chat about your goals and challenges",
      icon: Target,
    },
    {
      title: "Planning",
      description: "Clear roadmap with realistic timelines",
      icon: Clock,
    },
    {
      title: "Building",
      description: "Build, test, and iterate based on feedback",
      icon: Code,
    },
    {
      title: "Launch & Support",
      description: "Deploy to production with ongoing support",
      icon: Award,
    },
  ];

  // Hero Technologies - Most Important
  const heroTechnologies = [
    { name: "AWS", level: "Expert", years: "7+" },
    { name: "Docker", level: "Expert", years: "7+" },
    { name: "Kubernetes", level: "Expert", years: "7+" },
    { name: "Prometheus", level: "Expert", years: "7+" },
    { name: "Grafana", level: "Expert", years: "7+" },
    { name: "ArgoCD", level: "Expert", years: "4+" },
    { name: "GitHub Actions", level: "Expert", years: "4+" },
    { name: "Node.js", level: "Expert", years: "7+" },
    { name: "Python", level: "Expert", years: "7+" },
    { name: "Go", level: "Proficient", years: "5+" },
    { name: "React", level: "Expert", years: "6+" },
    { name: "PostgreSQL", level: "Expert", years: "7+" },
    { name: "MongoDB", level: "Proficient", years: "7+" },
  ];

  // Categorized Tech Stack
  const techStackCategories = [
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      isExpanded: true,
      technologies: [
        { name: "AWS", level: "Expert", years: "7+" },
        { name: "Azure", level: "Proficient", years: "3+" },
        { name: "Google Cloud Platform", level: "Proficient", years: "3+" },
        { name: "DigitalOcean", level: "Proficient", years: "3+" },
        { name: "CloudFlare", level: "Proficient", years: "3+" },
      ],
    },
    {
      title: "DevOps & Platform Engineering",
      icon: Settings,
      isExpanded: true,
      technologies: [
        { name: "Docker", level: "Expert", years: "7+" },
        { name: "Kubernetes", level: "Expert", years: "7+" },
        { name: "Terraform", level: "Expert", years: "7+" },
        { name: "Ansible", level: "Expert", years: "7+" },
        { name: "Jenkins", level: "Proficient", years: "5+" },
        { name: "GitLab CI/CD", level: "Expert", years: "5+" },
        { name: "GitHub Actions", level: "Expert", years: "4+" },
        { name: "ArgoCD", level: "Expert", years: "4+" },
        { name: "Helm", level: "Expert", years: "7+" },
        { name: "Prometheus", level: "Expert", years: "7+" },
        { name: "Grafana", level: "Expert", years: "7+" },
        { name: "Istio", level: "Familiar", years: "3+" },
        { name: "Vault", level: "Familiar", years: "7+" },
      ],
    },
    {
      title: "Backend Technologies",
      icon: Server,
      isExpanded: true,
      technologies: [
        { name: "Node.js", level: "Expert", years: "7+" },
        { name: "Python", level: "Expert", years: "7+" },
        { name: "Go", level: "Proficient", years: "5+" },
        { name: "Java", level: "Proficient", years: "3+" },
        { name: "C#", level: "Proficient", years: "2+" },
        { name: "C", level: "Proficient", years: "3+" },
        { name: "Express.js", level: "Expert", years: "7+" },
        { name: "FastAPI", level: "Expert", years: "3+" },
        { name: "REST APIs", level: "Expert", years: "6+" },
        { name: "gRPC", level: "Familiar", years: "2+" },
        { name: "WebSockets", level: "Proficient", years: "4+" },
        { name: "Microservices", level: "Expert", years: "7+" },
        { name: "Event-Driven Architecture", level: "Expert", years: "5+" },
      ],
    },
    {
      title: "Databases & Storage",
      icon: Database,
      isExpanded: true,
      technologies: [
        { name: "PostgreSQL", level: "Expert", years: "7+" },
        { name: "MongoDB", level: "Expert", years: "7+" },
        { name: "Redis", level: "Expert", years: "4+" },
        { name: "DynamoDB", level: "Proficient", years: "6+" },
        { name: "Elasticsearch", level: "Proficient", years: "4+" },
        { name: "InfluxDB", level: "Familiar", years: "1+" },
        { name: "Cassandra", level: "Familiar", years: "2+" },
        { name: "Amazon S3", level: "Expert", years: "7+" },
      ],
    },
    {
      title: "Frontend & Mobile",
      icon: Smartphone,
      isExpanded: true,
      technologies: [
        { name: "React", level: "Expert", years: "7+" },
        { name: "React Native", level: "Expert", years: "3+" },
        { name: "TypeScript", level: "Expert", years: "4+" },
        { name: "JavaScript", level: "Expert", years: "7+" },
        { name: "Vite", level: "Proficient", years: "3+" },
        { name: "HTML5/CSS", level: "Proficient", years: "6+" },
      ],
    },
    {
      title: "Data & Analytics",
      icon: BarChart3,
      isExpanded: true,
      technologies: [
        { name: "Apache Kafka", level: "Proficient", years: "6+" },
        { name: "Pandas", level: "Proficient", years: "4+" },
        { name: "NumPy", level: "Proficient", years: "4+" },
        { name: "Jupyter", level: "Familiar", years: "3+" },
        { name: "TensorFlow", level: "Familiar", years: "3+" },
        { name: "PyTorch", level: "Familiar", years: "1+" },
      ],
    },
  ];

  const [expandedCategories, setExpandedCategories] = useState<
    Record<string, boolean>
  >(
    techStackCategories.reduce(
      (acc, category) => ({
        ...acc,
        [category.title]: category.isExpanded,
      }),
      {} as Record<string, boolean>
    )
  );

  const toggleCategory = (categoryTitle: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryTitle]: !prev[categoryTitle],
    }));
  };

  const getProficiencyColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-gradient-to-r from-emerald-600 to-emerald-700 text-white border-emerald-600 shadow-emerald-200 shadow-md";
      case "Proficient":
        return "bg-gradient-to-r from-blue-500 to-blue-600 text-white border-blue-500 shadow-blue-200 shadow-md";
      case "Familiar":
        return "bg-gradient-to-r from-amber-400 to-amber-500 text-white border-amber-400 shadow-amber-200 shadow-md";
      default:
        return "bg-gray-500 text-white border-gray-500";
    }
  };

  const getProficiencyIcon = (level: string) => {
    switch (level) {
      case "Expert":
        return <Star className="h-3 w-3 fill-current text-emerald-100" />;
      case "Proficient":
        return <Star className="h-3 w-3 fill-current text-blue-100" />;
      case "Familiar":
        return <Star className="h-3 w-3 fill-current text-amber-100" />;
      default:
        return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>DevOps & Full Stack Development | Adam Solutions</title>
        <meta
          name="description"
          content="Solo software engineer specializing in DevOps, Platform Engineering, and Full Stack Development. I help startups build and scale their tech infrastructure and applications."
        />
        <meta
          name="keywords"
          content="DevOps, Platform Engineering, Full Stack Development, Cloud Infrastructure, Startup Engineering, Software Consulting"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-4xl text-center space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight">
            DevOps & Platform
            <br />
            Engineering
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto font-body leading-relaxed">
            I help startups build robust infrastructure, streamline deployments,
            10x their dev team efficiency, create scalable secure backend
            systems, and build cool products. Let's turn your ideas into
            production-ready solutions.
          </p>
        </div>
      </section>

      <div className="space-y-24 py-16">
        {/* Services Grid */}
        <section className="bg-gray-50 py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-8 mb-16 scroll-animate">
              <h2 className="text-3xl md:text-5xl font-bold text-black">
                What I Do
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto font-body leading-relaxed">
                I specialize in the tech stack and tools that startups need to
                move fast and scale smart
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto scroll-animate">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/50 p-8 shadow-lg hover:shadow-2xl hover:bg-white/95 transition-all duration-500 hover:-translate-y-3"
                >
                  <div className="flex items-start md:space-x-6">
                    <div className="hidden md:inline-flex items-center justify-center w-16 h-16 rounded-xl bg-black shadow-lg text-white flex-shrink-0">
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
        <section className="bg-white py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-8 mb-16 scroll-animate">
              <h2 className="text-3xl md:text-5xl font-bold text-black">
                How I Work
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto font-body leading-relaxed">
                Simple, transparent process focused on getting things done right
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-4 max-w-6xl mx-auto scroll-animate">
              {process.map((step, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl hover:bg-white/60 backdrop-blur-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-3 group"
                >
                  <div className="relative">
                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-xl bg-black shadow-lg text-white group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                      <step.icon className="h-10 w-10" />
                    </div>
                    <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-white text-sm font-bold shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4 group-hover:text-gray-900 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-gray-50 py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-8 mb-16 scroll-animate">
              <h2 className="text-3xl md:text-5xl font-bold text-black">
                Why Work With Me?
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto scroll-animate">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/50 p-8 text-center shadow-lg hover:shadow-2xl hover:bg-white/95 transition-all duration-500 hover:-translate-y-3"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-black shadow-lg text-white mx-auto mb-6">
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
        <section className="bg-white py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-8 mb-16 scroll-animate">
              <h2 className="text-3xl md:text-5xl font-bold text-black">
                My Tech Stack
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto font-body leading-relaxed">
                I work with modern, battle-tested technologies that startups
                love. Here's what I bring to the table.
              </p>
            </div>

            {/* Hero Technologies */}
            <div className="mb-12 scroll-animate">
              <h3 className="text-xl font-bold text-black text-center mb-6">
                Core Expertise
              </h3>
              <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                {heroTechnologies.map((tech, index) => (
                  <div
                    key={index}
                    className="group relative bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-center space-x-2">
                      <Star className="h-3 w-3 fill-current text-yellow-400" />
                      <span>{tech.name}</span>
                      <span className="text-xs opacity-75">({tech.years})</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Categorized Technologies */}
            <div className="space-y-4 scroll-animate">
              <h3 className="text-xl font-bold text-black text-center mb-6">
                Complete Technology Stack
              </h3>

              {techStackCategories.map((category, categoryIndex) => (
                <div
                  key={categoryIndex}
                  className="bg-gray-50 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleCategory(category.title)}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-100 transition-colors duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-black text-white">
                        <category.icon className="h-4 w-4" />
                      </div>
                      <div className="text-left">
                        <h4 className="text-lg font-bold text-black">
                          {category.title}
                        </h4>
                        <p className="text-xs text-gray-600">
                          {category.technologies.length} technologies
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {expandedCategories[category.title] ? (
                        <ChevronUp className="h-4 w-4 text-gray-500" />
                      ) : (
                        <ChevronDown className="h-4 w-4 text-gray-500" />
                      )}
                    </div>
                  </button>

                  {expandedCategories[category.title] && (
                    <div className="px-6 pb-4">
                      <div className="flex flex-wrap gap-2">
                        {category.technologies.map((tech, techIndex) => (
                          <div
                            key={techIndex}
                            className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-sm transition-all duration-300 hover:scale-105 ${getProficiencyColor(
                              tech.level
                            )}`}
                          >
                            {getProficiencyIcon(tech.level)}
                            <span className="font-medium">{tech.name}</span>
                            <span className="text-xs opacity-75">
                              ({tech.years})
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Compact Legend */}
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="space-y-4">
                  {/* Expertise Levels */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800 mb-2 text-center">
                      Expertise Level
                    </h4>
                    <div className="flex flex-wrap justify-center gap-6 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="px-2 py-1 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-700 shadow-emerald-200 shadow-sm">
                          <Star className="h-3 w-3 fill-current text-emerald-100" />
                        </div>
                        <span className="font-medium">Expert</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="px-2 py-1 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 shadow-blue-200 shadow-sm">
                          <Star className="h-3 w-3 fill-current text-blue-100" />
                        </div>
                        <span className="font-medium">Proficient</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="px-2 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 shadow-amber-200 shadow-sm">
                          <Star className="h-3 w-3 fill-current text-amber-100" />
                        </div>
                        <span className="font-medium">Familiar</span>
                      </div>
                    </div>
                  </div>

                  {/* Years Explanation */}
                  <div className="border-t border-gray-200 pt-3">
                    <p className="text-xs text-gray-600 text-center">
                      Numbers in parentheses indicate years of experience
                      working with the technology
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="bg-gray-50 py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-8 mb-16 scroll-animate">
              <h2 className="text-3xl md:text-5xl font-bold text-black">
                Certifications
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto font-body leading-relaxed">
                Certified expertise in cloud platforms and modern programming
                languages
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto scroll-animate">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/50 p-8 text-center shadow-lg hover:shadow-2xl hover:bg-white/95 transition-all duration-500 hover:-translate-y-3">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-black shadow-lg text-white mx-auto mb-6">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">
                  AWS Certified Solutions Architect
                </h3>
                <p className="text-gray-700 mb-6">
                  Certified in designing distributed systems on AWS
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="border-black text-black hover:bg-black hover:text-white"
                >
                  <a
                    href="https://www.credly.com/badges/4e75e8e4-603e-4135-85f4-5026c630f1ed/linked_in_profile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Certificate
                  </a>
                </Button>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/50 p-8 text-center shadow-lg hover:shadow-2xl hover:bg-white/95 transition-all duration-500 hover:-translate-y-3">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-black shadow-lg text-white mx-auto mb-6">
                  <Code className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">
                  Go Programming Language
                </h3>
                <p className="text-gray-700 mb-6">
                  Certified in Go programming fundamentals and best practices
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="border-black text-black hover:bg-black hover:text-white"
                >
                  <a
                    href="https://www.udemy.com/certificate/UC-18155bf0-2315-46f8-a317-b1b7d2b96394/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Certificate
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-8 max-w-3xl mx-auto scroll-animate">
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
                  <a href="mailto:info@adam-solutions.io">
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
