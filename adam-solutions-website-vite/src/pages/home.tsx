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
  CheckCircle,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Adam Solutions - Software Engineering & Digital products</title>
        <meta
          name="description"
          content="Professional Software Engineering & DevOps services, digital products including Circle mobile app and ChatGPT-Kit Chrome extension."
        />
        <meta
          name="keywords"
          content="DevOps, mobile app, Chrome extension, software engineering, digital products"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black leading-tight">
                Adam Solutions
              </h1>

              <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
                Software Engineering & Digital products
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="bg-black hover:bg-gray-800 text-white"
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
                className="border-black text-black hover:bg-black hover:text-white"
              >
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-black">
              What We Offer
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              We provide innovative digital products and professional Software
              Engineering consulting services to help businesses scale and
              succeed in the digital landscape.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {/* Circle App */}
            <div className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-black text-white mb-6">
                <Smartphone className="h-8 w-8" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-black">Circle</h3>
                <p className="text-gray-700">
                  Mobile application with innovative features and seamless user
                  experience.
                </p>
                <div className="space-y-2">
                  {["Cross-platform", "Real-time sync", "Secure"].map(
                    (feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-black" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    )
                  )}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="mt-4 border-black text-black hover:bg-black hover:text-white"
                >
                  <Link to="/products">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* ChatGPT-Kit */}
            <div className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-black text-white mb-6">
                <Chrome className="h-8 w-8" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-black">ChatGPT-Kit</h3>
                <p className="text-gray-700">
                  Chrome extension that enhances your ChatGPT experience with
                  powerful features.
                </p>
                <div className="space-y-2">
                  {["Advanced prompts", "Export tools", "Shortcuts"].map(
                    (feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-black" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    )
                  )}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="mt-4 border-black text-black hover:bg-black hover:text-white"
                >
                  <Link to="/products">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Software Engineering Services */}
            <div className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-black text-white mb-6">
                <Server className="h-8 w-8" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-black">
                  Software Engineering & Infrastructure Consulting
                </h3>
                <p className="text-gray-700">
                  Professional Software Engineering consulting and freelance
                  software engineering services.
                </p>
                <div className="space-y-2">
                  {["CI/CD pipelines", "Cloud migration", "Expert team"].map(
                    (feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-black" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    )
                  )}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="mt-4 border-black text-black hover:bg-black hover:text-white"
                >
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
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-black">
              Why Choose Adam Solutions?
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {[
              {
                icon: Zap,
                title: "Fast & Reliable",
                description:
                  "Quick delivery and reliable solutions for all your digital needs with proven methodologies.",
              },
              {
                icon: Code,
                title: "Expert Development",
                description:
                  "Professional software engineering with modern best practices and cutting-edge technologies.",
              },
              {
                icon: Shield,
                title: "Secure & Scalable",
                description:
                  "Built with security and scalability in mind from day one, ensuring long-term success.",
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
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-black">
              Ready to Get Started?
            </h2>
            <p className="text-lg md:text-xl text-gray-700">
              Contact us today to discuss your project or learn more about our
              digital products and professional services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="bg-black hover:bg-gray-800 text-white"
              >
                <a href="mailto:info@adamsolutions.com">Contact Us</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-black text-black hover:bg-black hover:text-white"
              >
                <Link to="/products">View Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
