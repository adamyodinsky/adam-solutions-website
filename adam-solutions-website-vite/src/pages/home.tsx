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
      <section className="container flex min-h-[80vh] items-center justify-center py-12 md:py-24 lg:py-32">
        <div className="flex max-w-[980px] flex-col items-center text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tighter md:text-6xl lg:text-7xl">
              Adam DevOps Solutions Ltd
              <br />
              <span className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-normal">
                (Adam Solutions)
              </span>
            </h1>
            <p className="mx-auto max-w-[600px] text-xl text-muted-foreground md:text-2xl">
              Digital products & DevOps consulting
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link to="/products">
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
              <Link to="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            What We Offer
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            We provide innovative digital products and professional DevOps
            consulting services to help businesses scale and succeed in the
            digital landscape.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          {/* Circle App */}
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Smartphone className="h-12 w-12 text-primary" />
              <div className="space-y-2">
                <h3 className="font-bold">Circle</h3>
                <p className="text-sm text-muted-foreground">
                  Mobile application with innovative features and seamless user
                  experience.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/products">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* ChatGPT-Kit */}
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Chrome className="h-12 w-12 text-primary" />
              <div className="space-y-2">
                <h3 className="font-bold">ChatGPT-Kit</h3>
                <p className="text-sm text-muted-foreground">
                  Chrome extension that enhances your ChatGPT experience with
                  powerful features.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/products">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* DevOps Services */}
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Server className="h-12 w-12 text-primary" />
              <div className="space-y-2">
                <h3 className="font-bold">DevOps & Consulting</h3>
                <p className="text-sm text-muted-foreground">
                  Professional DevOps consulting and freelance software
                  engineering services.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/services">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container space-y-6 py-8 md:py-12 lg:py-24 bg-muted/50">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Why Choose Adam Solutions?
          </h2>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div className="flex flex-col items-center space-y-2 text-center">
            <Zap className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">Fast & Reliable</h3>
            <p className="text-muted-foreground">
              Quick delivery and reliable solutions for all your digital needs.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 text-center">
            <Code className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">Expert Development</h3>
            <p className="text-muted-foreground">
              Professional software engineering with modern best practices.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 text-center">
            <Shield className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">Secure & Scalable</h3>
            <p className="text-muted-foreground">
              Built with security and scalability in mind from day one.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Ready to Get Started?
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Contact us today to discuss your project or learn more about our
            digital products.
          </p>
          <div className="space-x-4">
            <Button size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/products">View Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
