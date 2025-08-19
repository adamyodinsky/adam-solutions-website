import { Button } from "@/components/ui/button";
import {
  Smartphone,
  Chrome,
  Download,
  Star,
  Users,
  Zap,
  Shield,
  CheckCircle,
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
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-black">
              Our Digital Products
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
              Innovative digital solutions designed to enhance your productivity
              and experience. All products are delivered digitally with no
              physical fulfillment required.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <div className="space-y-24 py-16">
        {/* Circle App */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center max-w-6xl mx-auto">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center rounded-full bg-black text-white px-4 py-2 text-sm font-medium">
                    <Smartphone className="mr-2 h-4 w-4" />
                    Mobile Application
                  </div>

                  <h2 className="text-3xl md:text-5xl font-bold text-black">
                    Circle
                  </h2>

                  <p className="text-lg text-gray-700">
                    A powerful mobile application that delivers exceptional user
                    experience with innovative features. Circle is designed to
                    streamline your mobile workflow and provide seamless
                    functionality across devices.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg text-black">
                    Key Features
                  </h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      "Cross-platform compatibility",
                      "Real-time synchronization",
                      "Advanced security features",
                      "Intuitive user interface",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-black flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-black hover:bg-gray-800 text-white"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Now
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-black text-black hover:bg-black hover:text-white"
                  >
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Learn More
                  </Button>
                </div>

                <div className="flex items-center space-x-8 pt-4">
                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-black" />
                    <span className="font-semibold text-black">4.8/5</span>
                    <span className="text-gray-600 text-sm">Rating</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-black" />
                    <span className="font-semibold text-black">10k+</span>
                    <span className="text-gray-600 text-sm">Active Users</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                  <img
                    src="/src/assets/img/circle/icon-512.png"
                    alt="Circle App"
                    className="w-full max-w-64 mx-auto rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ChatGPT-Kit */}
        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center max-w-6xl mx-auto">
              <div className="lg:order-2 flex justify-center">
                <div className="bg-gray-50 rounded-2xl p-12 shadow-lg border border-gray-200">
                  <div className="bg-black rounded-xl p-12 flex items-center justify-center">
                    <Chrome className="w-32 h-32 text-white" />
                  </div>
                </div>
              </div>

              <div className="space-y-8 lg:order-1">
                <div className="space-y-4">
                  <div className="inline-flex items-center rounded-full bg-black text-white px-4 py-2 text-sm font-medium">
                    <Chrome className="mr-2 h-4 w-4" />
                    Chrome Extension
                  </div>

                  <h2 className="text-3xl md:text-5xl font-bold text-black">
                    ChatGPT-Kit
                  </h2>

                  <p className="text-lg text-gray-700">
                    Enhance your ChatGPT experience with our powerful Chrome
                    extension. ChatGPT-Kit provides advanced features, improved
                    workflow, and seamless integration to boost your AI
                    productivity.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg text-black">
                    Powerful Features
                  </h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      "Advanced prompt templates",
                      "Conversation management",
                      "Export & sharing tools",
                      "Custom shortcuts",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-black flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-black hover:bg-gray-800 text-white"
                  >
                    <Chrome className="mr-2 h-5 w-5" />
                    Add to Chrome
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-black text-black hover:bg-black hover:text-white"
                  >
                    <ExternalLink className="mr-2 h-5 w-5" />
                    View Features
                  </Button>
                </div>

                <div className="flex items-center space-x-8 pt-4">
                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-black" />
                    <span className="font-semibold text-black">4.9/5</span>
                    <span className="text-gray-600 text-sm">Rating</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-black" />
                    <span className="font-semibold text-black">25k+</span>
                    <span className="text-gray-600 text-sm">Users</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-8 mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-black">
                Why Choose Our Products?
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
                All our digital products are built with quality, performance,
                and user experience in mind.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
              {[
                {
                  icon: Zap,
                  title: "Instant Access",
                  description:
                    "Digital delivery means instant access to your purchased products with no waiting time.",
                },
                {
                  icon: Users,
                  title: "Active Community",
                  description:
                    "Join thousands of users who love our products and provide valuable feedback.",
                },
                {
                  icon: Shield,
                  title: "Regular Updates",
                  description:
                    "Continuous improvements and new features based on user feedback and market trends.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg border border-gray-200 p-8 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-black text-white mx-auto mb-6">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
