import { Helmet } from "react-helmet-async";
import {
  FileText,
  Globe,
  CheckCircle,
  Clock,
  RefreshCw,
  AlertTriangle,
  User,
} from "lucide-react";
import { useEffect } from "react";

export function PoliciesPage() {
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
  const policies = [
    {
      id: "refund-policy",
      icon: RefreshCw,
      title: "Refund & Dispute Policy",
    },
    {
      id: "cancellation-policy",
      icon: Clock,
      title: "Cancellation Policy",
    },
    {
      id: "terms-conditions",
      icon: FileText,
      title: "Terms & Conditions",
    },
    {
      id: "legal-export",
      icon: Globe,
      title: "Legal & Export Restrictions",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Policies - Terms, Refunds & Legal | Adam Solutions</title>
        <meta
          name="description"
          content="Simple, straightforward policies for my services and digital products. Clear terms without the legal jargon."
        />
        <meta
          name="keywords"
          content="policies, terms of service, refund policy, cancellation, legal, terms and conditions"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white via-gray-50/30 to-blue-50/20 py-20 md:py-28 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-green-100 to-blue-100 rounded-full blur-3xl opacity-15"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="mx-auto max-w-4xl text-center space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-black">
              Policies
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto font-body leading-relaxed">
              Straightforward policies for working with me. No legal
              mumbo-jumbo, just clear terms that make sense for both of us.
            </p>
          </div>
        </div>
      </section>

      <div className="space-y-24 py-16">
        {/* Table of Contents */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 border border-gray-200/50 max-w-4xl mx-auto scroll-animate">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-black text-white shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 mb-4">
                  <FileText className="h-8 w-8" />
                </div>
                <h2 className="text-2xl font-bold text-black">
                  Table of Contents
                </h2>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {policies.map((policy, index) => (
                  <button
                    key={policy.id}
                    onClick={() => {
                      const element = document.getElementById(policy.id);
                      if (element) {
                        element.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }
                    }}
                    className="bg-gray-50 rounded-xl p-6 border border-gray-200/50 hover:shadow-2xl hover:bg-white/95 transition-all duration-500 text-left w-full"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black text-white shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 flex-shrink-0">
                        <policy.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-600 mb-1">
                          {index + 1}.
                        </div>
                        <div className="font-semibold text-black text-sm">
                          {policy.title}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Refund & Dispute Policy */}
        <section id="refund-policy" className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto space-y-8 scroll-animate">
              <div className="flex items-center space-x-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-black text-white shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300">
                  <RefreshCw className="h-8 w-8" />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-black">
                  1. Refund & Dispute Policy
                </h2>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200/50 space-y-6">
                <div className="flex items-start space-x-4">
                  <AlertTriangle className="h-6 w-6 text-gray-800 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-lg font-semibold text-black mb-2">
                      Digital products are generally final sale.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Since my digital products can be accessed immediately, I
                      generally don't offer refunds. But if something's
                      genuinely broken, let's talk about it.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    If you run into technical issues with my products, just
                    email me within{" "}
                    <strong className="text-black">14 days</strong> and I'll
                    help fix it or work something out.
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-black">
                      Exception Circumstances:
                    </h3>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {[
                        "Product fails to function as described due to technical defects",
                        "Service delivery failure due to circumstances within our control",
                        "Duplicate purchases made in error",
                        "Unauthorized transactions (subject to verification)",
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                          <span className="text-sm leading-relaxed text-gray-700">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border-l-4 border-black">
                    <p className="font-semibold text-black mb-2">
                      Let's Talk First
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      If there's an issue, please email me at
                      info@adam-solutions.io before doing chargebacks. I'm
                      reasonable and prefer to work things out directly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cancellation Policy */}
        <section id="cancellation-policy" className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto space-y-8 scroll-animate">
              <div className="flex items-center space-x-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-black text-white shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300">
                  <Clock className="h-8 w-8" />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-black">
                  2. Cancellation Policy
                </h2>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  This applies to subscription products like my{" "}
                  <strong className="text-black">ChatGPT-Kit</strong> Chrome
                  extension or any recurring services I might offer.
                </p>

                <div className="grid gap-8 md:grid-cols-2">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-black">
                      Subscription Cancellations:
                    </h3>
                    <div className="space-y-3">
                      {[
                        "Subscriptions can be canceled at any time via the customer portal provided by Lemon Squeezy",
                        "Access to subscription services continues until the end of the current billing period",
                        "No partial refunds are provided for unused portions of billing periods",
                        "Canceled subscriptions will not auto-renew for the next billing cycle",
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                          <span className="text-sm leading-relaxed text-gray-700">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-black">
                      Service Cancellations:
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                      For consulting and development work, we'll agree on
                      cancellation terms upfront. Generally:
                    </p>
                    <div className="space-y-3">
                      {[
                        "You pay for work I've already completed",
                        "Give me 48-72 hours notice if you need to cancel",
                        "You keep whatever I've built, even if the project gets cancelled",
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                          <span className="text-sm leading-relaxed text-gray-700">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Terms & Conditions */}
        <section id="terms-conditions" className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto space-y-8 scroll-animate">
              <div className="flex items-center space-x-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-black text-white shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300">
                  <FileText className="h-8 w-8" />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-black">
                  3. Terms & Conditions
                </h2>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200/50 space-y-8">
                {[
                  {
                    title: "License & Usage Rights",
                    items: [
                      "You can use my products for personal or business use",
                      "Please don't redistribute, resell, or share them",
                      "Don't try to reverse engineer or modify the products",
                      "These licenses are just for you, not transferable",
                    ],
                  },
                  {
                    title: "Prohibited Behaviors",
                    items: [
                      "Don't use my products for anything illegal",
                      "Don't try to hack my systems or other users' data",
                      "Don't mess with how my products work",
                      "Respect intellectual property and follow the law",
                    ],
                  },
                ].map((section, index) => (
                  <div key={index} className="space-y-4">
                    <h3 className="text-xl font-semibold text-black">
                      {section.title}:
                    </h3>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {section.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-start space-x-3"
                        >
                          <CheckCircle className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                          <span className="text-sm leading-relaxed text-gray-700">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="bg-white rounded-xl p-6 border border-gray-200/50">
                    <h4 className="font-semibold text-black mb-3">
                      Service Availability
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      I try to keep everything running smoothly, but sometimes
                      things break. I'll let you know about planned maintenance
                      when I can.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 border border-gray-200/50">
                    <h4 className="font-semibold text-black mb-3">
                      Privacy & Data
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      I respect your privacy and follow privacy laws. I only
                      collect what I need and never sell your data to anyone.
                    </p>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                  <h4 className="font-semibold text-black mb-3">
                    Liability Disclaimers
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    My products are provided "as is" - I can't guarantee
                    everything will be perfect. If something goes wrong, my
                    liability is limited to what you actually paid me. This is
                    pretty standard stuff.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Legal & Export Restrictions */}
        <section id="legal-export" className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto space-y-8 scroll-animate">
              <div className="flex items-center space-x-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-black text-white shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300">
                  <Globe className="h-8 w-8" />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-black">
                  4. Legal & Export Restrictions
                </h2>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  {[
                    {
                      title: "Global Availability",
                      content:
                        "My products are delivered digitally and available worldwide. Some regions might have restrictions due to local laws.",
                    },
                    {
                      title: "Export Compliance",
                      content:
                        "I follow export control laws. My digital products might be subject to export controls, so you need to follow applicable laws too.",
                    },
                    {
                      title: "Regional Restrictions",
                      content:
                        "Having trouble with regional restrictions or payments? Email me at info@adam-solutions.io and I'll see what I can do.",
                    },
                    {
                      title: "Governing Law",
                      content:
                        "These terms follow UK law. If we have disputes, we'll handle them in UK courts or arbitration.",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-xl p-6 border border-gray-200/50"
                    >
                      <h4 className="font-semibold text-black mb-3">
                        {item.title}
                      </h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="bg-black text-white shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 rounded-xl p-6">
                  <h4 className="font-semibold mb-3">Contact Information</h4>
                  <div className="text-sm leading-relaxed space-y-1">
                    <p>
                      <strong>Adam DevOps Solutions Ltd</strong>
                    </p>
                    <p>Email: info@adam-solutions.io</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Last Updated */}
        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="bg-gray-50 rounded-2xl p-12 border border-gray-200/50 text-center max-w-4xl mx-auto scroll-animate">
              <div className="space-y-6">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-black text-white shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 mx-auto">
                  <User className="h-10 w-10" />
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-black">
                    Last Updated: {new Date().toLocaleDateString()}
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    I might update these policies sometimes. If I make big
                    changes, I'll email existing customers and put a notice on
                    the website.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
