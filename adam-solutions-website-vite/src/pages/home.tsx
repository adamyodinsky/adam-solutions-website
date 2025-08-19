import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Code,
  Smartphone,
  Chrome,
  Server,
  Zap,
  Shield,
  Users,
  Sparkles,
  Play,
  ExternalLink,
  CheckCircle,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>
          Adam DevOps Solutions Ltd - Digital Products & DevOps Consulting
        </title>
        <meta
          name="description"
          content="Professional DevOps consulting and digital products including Circle mobile app and ChatGPT-Kit Chrome extension. Expert software engineering services."
        />
        <meta
          name="keywords"
          content="DevOps, consulting, mobile app, Chrome extension, software engineering, digital products"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-950/20 dark:via-purple-950/10 dark:to-pink-950/20"></div>
        <div className="absolute top-1/4 -left-4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 -right-4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>

        <div className="container mx-auto relative">
          <div className="mx-auto max-w-5xl text-center space-y-12">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 px-6 py-3 text-sm font-medium border border-blue-200/20">
              <Sparkles className="mr-2 h-4 w-4 text-blue-600" />
              Welcome to Adam Solutions
            </div>

            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent leading-tight">
                Adam DevOps Solutions Ltd
              </h1>
              <div className="text-2xl md:text-3xl text-muted-foreground font-medium">
                (Adam Solutions)
              </div>
              <p className="mx-auto max-w-3xl text-2xl text-muted-foreground leading-relaxed">
                Digital products & DevOps consulting
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 text-lg px-8 py-6"
              >
                <Link to="/products">
                  <Play className="mr-2 h-5 w-5" />
                  View Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="text-lg px-8 py-6"
              >
                <Link to="/services">
                  <Server className="mr-2 h-5 w-5" />
                  Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto space-y-32 py-16">
        {/* Overview Section */}
        <section className="relative py-16">
          <div className="text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold">What We Offer</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We provide innovative digital products and professional DevOps
              consulting services to help businesses scale and succeed in the
              digital landscape.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 mt-16">
            {/* Circle App */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-pink-50 dark:from-orange-950/20 dark:to-pink-950/20 rounded-3xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
              <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl p-8 border border-border/50 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-orange-500/5 group-hover:border-orange-500/20">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-pink-500 text-white mb-6">
                  <Smartphone className="h-8 w-8" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Circle</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Mobile application with innovative features and seamless
                    user experience.
                  </p>
                  <div className="space-y-2">
                    {["Cross-platform", "Real-time sync", "Secure"].map(
                      (feature, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2"
                        >
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      )
                    )}
                  </div>
                  <Button variant="outline" size="sm" asChild className="mt-4">
                    <Link to="/products">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* ChatGPT-Kit */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-3xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
              <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl p-8 border border-border/50 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-blue-500/5 group-hover:border-blue-500/20">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white mb-6">
                  <Chrome className="h-8 w-8" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">ChatGPT-Kit</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Chrome extension that enhances your ChatGPT experience with
                    powerful features.
                  </p>
                  <div className="space-y-2">
                    {["Advanced prompts", "Export tools", "Shortcuts"].map(
                      (feature, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2"
                        >
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      )
                    )}
                  </div>
                  <Button variant="outline" size="sm" asChild className="mt-4">
                    <Link to="/products">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* DevOps Services */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 rounded-3xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
              <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl p-8 border border-border/50 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-green-500/5 group-hover:border-green-500/20">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-blue-600 text-white mb-6">
                  <Server className="h-8 w-8" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">DevOps & Consulting</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Professional DevOps consulting and freelance software
                    engineering services.
                  </p>
                  <div className="space-y-2">
                    {["CI/CD pipelines", "Cloud migration", "Expert team"].map(
                      (feature, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2"
                        >
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      )
                    )}
                  </div>
                  <Button variant="outline" size="sm" asChild className="mt-4">
                    <Link to="/services">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative py-16">
          <div className="text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold">
              Why Choose Adam Solutions?
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3 mt-16">
            {[
              {
                icon: Zap,
                title: "Fast & Reliable",
                description:
                  "Quick delivery and reliable solutions for all your digital needs with proven methodologies.",
                color: "text-yellow-500",
              },
              {
                icon: Code,
                title: "Expert Development",
                description:
                  "Professional software engineering with modern best practices and cutting-edge technologies.",
                color: "text-blue-500",
              },
              {
                icon: Shield,
                title: "Secure & Scalable",
                description:
                  "Built with security and scalability in mind from day one, ensuring long-term success.",
                color: "text-green-500",
              },
            ].map((feature, index) => (
              <div key={index} className="group relative">
                <div className="relative bg-card rounded-2xl p-8 border border-border/50 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/5 group-hover:border-primary/20">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-background to-muted mb-6`}
                  >
                    <feature.icon className={`h-8 w-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-3xl p-16 border border-blue-200/20 text-center">
            <div className="mx-auto max-w-3xl space-y-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mb-6">
                <Sparkles className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Contact us today to discuss your project or learn more about our
                digital products and professional services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  asChild
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0"
                >
                  <Link to="/contact">
                    <Users className="mr-2 h-5 w-5" />
                    Contact Us
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
          </div>
        </section>
      </div>
    </>
  );
}
