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
      description: "Quick turnaround times without compromising on quality.",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description:
        "Security-first approach with robust and reliable solutions.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced professionals with proven track records.",
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

      <div className="container space-y-12 py-8 md:py-12 lg:py-24">
        {/* Header */}
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h1 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Professional Services
          </h1>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Expert DevOps consulting and freelance software engineering services
            to help your business scale efficiently and securely. These are
            professional services, not physical goods.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mx-auto max-w-[58rem] space-y-8">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-lg border bg-card p-6 shadow-sm"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <service.icon className="h-12 w-12 text-primary" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm"
                        >
                          <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mx-auto max-w-[58rem] space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Our Process
            </h2>
            <p className="mt-4 text-muted-foreground">
              A structured approach to deliver exceptional results
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                1
              </div>
              <h3 className="font-semibold">Discovery</h3>
              <p className="text-sm text-muted-foreground">
                Understanding your needs and requirements
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                2
              </div>
              <h3 className="font-semibold">Planning</h3>
              <p className="text-sm text-muted-foreground">
                Creating a detailed project roadmap
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                3
              </div>
              <h3 className="font-semibold">Implementation</h3>
              <p className="text-sm text-muted-foreground">
                Executing the solution with precision
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                4
              </div>
              <h3 className="font-semibold">Support</h3>
              <p className="text-sm text-muted-foreground">
                Ongoing maintenance and optimization
              </p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mx-auto max-w-[58rem] space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Why Work With Us?
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 text-center"
              >
                <benefit.icon className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="mx-auto max-w-[58rem] space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Technologies We Use
            </h2>
            <p className="mt-4 text-muted-foreground">
              Modern tools and technologies for optimal results
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
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
                className="flex items-center justify-center rounded-lg border bg-muted/50 p-4 text-sm font-medium"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Service Notice */}
        <div className="mx-auto max-w-[58rem] rounded-lg border bg-muted/50 p-6 text-center">
          <h3 className="text-lg font-semibold">Professional Services</h3>
          <p className="mt-2 text-muted-foreground">
            All our offerings are professional consulting and development
            services. These are not physical products but expertise-based
            solutions delivered remotely or on-site as needed.
          </p>
        </div>

        {/* CTA */}
        <div className="mx-auto max-w-[58rem] space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Ready to Start Your Project?
          </h2>
          <p className="text-muted-foreground">
            Let's discuss how we can help transform your business with our
            expertise.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row min-[400px]:justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/products">View Products</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
