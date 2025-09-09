import { Button } from "@/components/ui/button";
import {
  Smartphone,
  Chrome,
  Download,
  Users,
  Zap,
  Shield,
  CheckCircle,
  ExternalLink,
  Terminal,
  Star,
} from "lucide-react";

import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

export function ProductsPage() {
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
  return (
    <>
      <Helmet>
        <title>My Projects - Circle App & ChatGPT-Kit | Adam Solutions</title>
        <meta
          name="description"
          content="Check out my personal projects: Circle mobile app and ChatGPT-Kit Chrome extension. Digital products I built from scratch."
        />
        <meta
          name="keywords"
          content="Circle app, ChatGPT-Kit, Chrome extension, mobile app, indie developer projects"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-black">
              My Projects
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto font-body leading-relaxed">
              Here are some digital products I've built in my spare time. Both
              are live, have real users, and showcase different aspects of what
              I can create.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <div className="space-y-16">
        {/* Circle App */}
        <section className="bg-gray-50 py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center max-w-6xl mx-auto scroll-animate">
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
                    A social mobile app I built to solve a problem I encounter
                    as digital nomad. It features cross-platform compatibility,
                    users profiles, real-time sync and messaging, feed,
                    notifications center, and more. All with a clean and
                    user-friendly interface.
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
                      "Intuitive user interface",
                      "Notifications center",
                      "UGC feed",
                      "Matching algorithms",
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
                    asChild
                    className="bg-black hover:bg-gray-800 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    <a
                      href="https://apps.apple.com/us/app/circle-real-connections/id6747255364"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="mr-2 h-5 w-5" />
                      Download on App Store
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="border-black text-black hover:bg-black hover:text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    <a
                      href="https://play.google.com/store/apps/details?id=com.adamsolutions.circle"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="mr-2 h-5 w-5" />
                      Get it on Google Play
                    </a>
                  </Button>
                </div>

                <div>
                  <a
                    href="https://circle.adam-solutions.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-black hover:text-gray-700 font-semibold text-base hover:underline transition-colors"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit circle.adam-solutions.io
                  </a>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-200/50 hover:shadow-3xl hover:bg-white/95 transition-all duration-500 hover:-translate-y-2">
                  <img
                    src="icon-512.png"
                    alt="Circle App"
                    className="w-full max-w-64 mx-auto rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TerminalGPT */}
        <section className="relative bg-gradient-to-br from-gray-50 via-gray-100/50 to-orange-50/10 pt-20 md:pt-28 pb-12 md:pb-16 overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-orange-100 to-red-100 rounded-full blur-3xl opacity-15"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid gap-12 lg:grid-cols-2 items-center max-w-6xl mx-auto scroll-animate">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center rounded-full bg-black text-white px-4 py-2 text-sm font-medium">
                    <Terminal className="mr-2 h-4 w-4" />
                    Open Source CLI Tool
                  </div>

                  <h2 className="text-3xl md:text-5xl font-bold text-black">
                    TerminalGPT
                  </h2>

                  <p className="text-lg text-gray-700">
                    Terminal-based ChatGPT assistant I built in Python. Provides
                    optimized, tailored answers for your machine's terminal.
                    Over 1 million downloads and 240+ GitHub stars!
                  </p>

                  <div className="flex flex-wrap gap-3 mt-4 justify-start">
                    <div className="inline-flex items-center rounded-full bg-gray-100 text-gray-800 px-4 py-2 text-sm font-semibold hover:bg-gray-200 hover:scale-105 transition-all duration-200 cursor-default">
                      <Download className="mr-2 h-4 w-4" />
                      1M+ Downloads
                    </div>
                    <div className="inline-flex items-center rounded-full bg-gray-100 text-gray-800 px-4 py-2 text-sm font-semibold hover:bg-gray-200 hover:scale-105 transition-all duration-200 cursor-default">
                      <Star className="mr-2 h-4 w-4" />
                      230+ Stars
                    </div>
                    <div className="inline-flex items-center rounded-full bg-gray-100 text-gray-800 px-4 py-2 text-sm font-semibold hover:bg-gray-200 hover:scale-105 transition-all duration-200 cursor-default">
                      <Terminal className="mr-2 h-4 w-4" />
                      Open Source
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg text-black">
                    Key Features
                  </h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      "Terminal-native interface",
                      "Context-aware responses",
                      "Multiple AI models",
                      "Conversation management",
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
                    asChild
                    className="bg-black hover:bg-gray-800 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    <a
                      href="https://github.com/adamyodinsky/TerminalGPT"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-5 w-5" />
                      View on GitHub
                    </a>
                  </Button>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-gray-200/50 hover:shadow-3xl hover:bg-white/95 transition-all duration-500 hover:-translate-y-2">
                  <div className="bg-gradient-to-br from-black to-gray-800 rounded-2xl p-16 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center">
                    <Terminal className="w-32 h-32 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ChatGPT-Kit */}
        <section className="bg-white py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center max-w-6xl mx-auto scroll-animate">
              <div className="lg:order-2 flex justify-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-200/50 hover:shadow-3xl hover:bg-white/95 transition-all duration-500 hover:-translate-y-2">
                  <img
                    src="chatgpt-kit.png"
                    alt="ChatGPT-Kit Extension"
                    className="w-full max-w-64 mx-auto rounded-xl"
                  />
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
                    An intuitive user-friendly tool Integrated with chatGPT to
                    help you organize chats in folders.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg text-black">
                    Powerful Features
                  </h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      "Drag & Drop UX",
                      "Cloud configuration storage",
                      "Authentication",
                      "Paid subscription",
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
                    asChild
                    className="bg-black hover:bg-gray-800 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    <a
                      href="https://chromewebstore.google.com/detail/chatgpt-kit/fodhnilpmmmojhjbcpdpkgeclcakpdia"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Chrome className="mr-2 h-5 w-5" />
                      Install Extension
                    </a>
                  </Button>
                </div>

                <div>
                  <a
                    href="https://chatgpt-kit.adam-solutions.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-black hover:text-gray-700 font-semibold text-base hover:underline transition-colors"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit chatgpt-kit.adam-solutions.io
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-8 mb-16 scroll-animate">
              <h2 className="text-3xl md:text-5xl font-bold text-black">
                Why I Built These
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto font-body leading-relaxed">
                Each project started as a solution to a problem I personally
                faced. I built them with real users in mind, not just as
                portfolio pieces.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto scroll-animate">
              {[
                {
                  icon: Zap,
                  title: "Real-World Tested",
                  description:
                    "Both apps are used by thousands of real users daily. They solve actual problems, not imaginary ones.",
                },
                {
                  icon: Users,
                  title: "User-Driven",
                  description:
                    "I listen to user feedback and iterate quickly. These aren't abandoned side projects.",
                },
                {
                  icon: Shield,
                  title: "Built to Last",
                  description:
                    "Solid architecture, proper testing, and maintainable code. I build things I'm proud to put my name on.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/50 p-10 text-center shadow-lg hover:shadow-2xl hover:bg-white/95 transition-all duration-500 hover:-translate-y-3 group"
                >
                  <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-black to-gray-800 text-white mx-auto mb-8 shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-6 group-hover:text-gray-900 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
