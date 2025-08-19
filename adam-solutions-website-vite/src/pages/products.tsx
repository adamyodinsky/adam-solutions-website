import { Button } from "@/components/ui/button";
import {
  Smartphone,
  Chrome,
  Download,
  Star,
  Users,
  Zap,
  Shield,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Play,
  ExternalLink,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

export function ProductsPage() {
  return (
    <>
      <Helmet>
        <title>
          Digital Products - Circle App & ChatGPT-Kit | Adam Solutions
        </title>
        <meta
          name="description"
          content="Discover our innovative digital products: Circle mobile app and ChatGPT-Kit Chrome extension. No physical fulfillment - purely digital solutions."
        />
        <meta
          name="keywords"
          content="Circle app, ChatGPT-Kit, Chrome extension, mobile app, digital products"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-950/20 dark:via-purple-950/10 dark:to-pink-950/20"></div>
        <div className="absolute top-1/4 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>

        <div className="container mx-auto relative">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 px-6 py-2 text-sm font-medium border border-blue-200/20">
              <Sparkles className="mr-2 h-4 w-4 text-blue-600" />
              Digital Products Portfolio
            </div>

            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent leading-tight">
              Revolutionary
              <br />
              Digital Products
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Innovative digital solutions designed to enhance your productivity
              and experience. All products are delivered digitally with instant
              access.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
              <Button variant="outline" size="lg">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto space-y-32 py-16">
        {/* Circle App */}
        <section className="relative">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full bg-orange-100 dark:bg-orange-900/20 px-4 py-2 text-sm font-medium text-orange-700 dark:text-orange-300">
                  <Smartphone className="mr-2 h-4 w-4" />
                  Mobile Application
                </div>

                <h2 className="text-4xl md:text-6xl font-bold">Circle</h2>

                <p className="text-xl text-muted-foreground leading-relaxed">
                  A powerful mobile application that delivers exceptional user
                  experience with innovative features. Circle is designed to
                  streamline your mobile workflow and provide seamless
                  functionality across devices.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Key Features</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Cross-platform compatibility",
                    "Real-time synchronization",
                    "Advanced security features",
                    "Intuitive user interface",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white border-0"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Now
                </Button>
                <Button variant="outline" size="lg">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Learn More
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">4.8/5</span>
                  <span className="text-muted-foreground text-sm">Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-blue-500" />
                  <span className="font-semibold">10k+</span>
                  <span className="text-muted-foreground text-sm">
                    Active Users
                  </span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative mx-auto max-w-sm">
                {/* Phone mockup background */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-pink-600 rounded-3xl blur-2xl opacity-20 scale-105"></div>

                {/* Actual product image */}
                <div className="relative bg-gradient-to-br from-orange-50 to-pink-50 dark:from-orange-900/20 dark:to-pink-900/20 rounded-3xl p-8 border border-orange-200/20">
                  <img
                    src="/src/assets/img/circle/icon-512.png"
                    alt="Circle App"
                    className="w-full max-w-64 mx-auto rounded-2xl shadow-2xl"
                  />
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-900 rounded-full p-3 shadow-lg border">
                  <Smartphone className="h-6 w-6 text-orange-500" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-900 rounded-full p-3 shadow-lg border">
                  <Zap className="h-6 w-6 text-pink-500" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ChatGPT-Kit */}
        <section className="relative">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative lg:order-2">
              <div className="relative mx-auto max-w-sm">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl blur-2xl opacity-20 scale-105"></div>

                {/* Browser mockup */}
                <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl p-8 border border-blue-200/20">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-16 shadow-2xl">
                    <Chrome className="w-32 h-32 text-white mx-auto" />
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -left-4 bg-white dark:bg-gray-900 rounded-full p-3 shadow-lg border">
                  <Chrome className="h-6 w-6 text-blue-500" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-900 rounded-full p-3 shadow-lg border">
                  <Sparkles className="h-6 w-6 text-purple-500" />
                </div>
              </div>
            </div>

            <div className="space-y-8 lg:order-1">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/20 px-4 py-2 text-sm font-medium text-blue-700 dark:text-blue-300">
                  <Chrome className="mr-2 h-4 w-4" />
                  Chrome Extension
                </div>

                <h2 className="text-4xl md:text-6xl font-bold">ChatGPT-Kit</h2>

                <p className="text-xl text-muted-foreground leading-relaxed">
                  Enhance your ChatGPT experience with our powerful Chrome
                  extension. ChatGPT-Kit provides advanced features, improved
                  workflow, and seamless integration to boost your AI
                  productivity.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Powerful Features</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Advanced prompt templates",
                    "Conversation management",
                    "Export & sharing tools",
                    "Custom shortcuts",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0"
                >
                  <Chrome className="mr-2 h-5 w-5" />
                  Add to Chrome
                </Button>
                <Button variant="outline" size="lg">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  View Features
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">4.9/5</span>
                  <span className="text-muted-foreground text-sm">Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-purple-500" />
                  <span className="font-semibold">25k+</span>
                  <span className="text-muted-foreground text-sm">Users</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative py-16">
          <div className="text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Why Choose Our Products?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              All our digital products are built with quality, performance, and
              user experience in mind.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 mt-16">
            {[
              {
                icon: Zap,
                title: "Instant Access",
                description:
                  "Digital delivery means instant access to your purchased products with no waiting time.",
                color: "text-yellow-500",
              },
              {
                icon: Users,
                title: "Active Community",
                description:
                  "Join thousands of users who love our products and provide valuable feedback.",
                color: "text-blue-500",
              },
              {
                icon: Shield,
                title: "Regular Updates",
                description:
                  "Continuous improvements and new features based on user feedback and market trends.",
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

        {/* Digital Products Notice */}
        <section className="relative">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-3xl p-12 border border-blue-200/20 text-center">
            <div className="mx-auto max-w-2xl space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mb-6">
                <Sparkles className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold">100% Digital Products</h3>
              <p className="text-muted-foreground leading-relaxed">
                All our products are digital and delivered electronically. There
                is no physical fulfillment or shipping involved. You'll receive
                instant access upon purchase with immediate download links and
                activation instructions.
              </p>
              <Button size="lg" variant="outline">
                Learn More About Our Process
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
