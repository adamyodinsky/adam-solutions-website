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

export function PoliciesPage() {
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
          content="Read our comprehensive policies including refund policy, cancellation terms, terms & conditions, and legal information for Adam DevOps Solutions Ltd."
        />
        <meta
          name="keywords"
          content="policies, terms of service, refund policy, cancellation, legal, terms and conditions"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-black">
              Our Policies
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
              Our comprehensive policies covering refunds, cancellations, terms
              of service, and legal information to ensure transparency and
              trust.
            </p>
          </div>
        </div>
      </section>

      <div className="space-y-24 py-16">
        {/* Table of Contents */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="bg-white rounded-2xl p-12 border border-gray-200 max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-black text-white mb-4">
                  <FileText className="h-8 w-8" />
                </div>
                <h2 className="text-2xl font-bold text-black">
                  Table of Contents
                </h2>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {policies.map((policy, index) => (
                  <a
                    key={policy.id}
                    href={`#${policy.id}`}
                    className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-lg hover:bg-gray-100 transition-all"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-black text-white flex-shrink-0">
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
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Refund & Dispute Policy */}
        <section id="refund-policy" className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="flex items-center space-x-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-black text-white">
                  <RefreshCw className="h-8 w-8" />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-black">
                  1. Refund & Dispute Policy
                </h2>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 space-y-6">
                <div className="flex items-start space-x-4">
                  <AlertTriangle className="h-6 w-6 text-gray-800 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-lg font-semibold text-black mb-2">
                      All sales are final for digital products.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Due to the nature of digital products and services, we
                      generally do not offer refunds once access has been
                      granted or services have been delivered.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    However, we understand that technical issues may occur. If
                    you experience technical issues with our digital products,
                    please contact us within{" "}
                    <strong className="text-black">14 days</strong> of purchase
                    for support and potential exceptions to this policy.
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

                  <div className="bg-white rounded-lg p-6 border-l-4 border-black">
                    <p className="font-semibold text-black mb-2">
                      Dispute Resolution
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      For any disputes, please contact us directly at
                      info@adamsolutions.com before initiating chargebacks or
                      payment disputes. We are committed to resolving issues
                      fairly and promptly.
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
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="flex items-center space-x-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-black text-white">
                  <Clock className="h-8 w-8" />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-black">
                  2. Cancellation Policy
                </h2>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-200 space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  This policy applies specifically to subscription-based
                  products such as our{" "}
                  <strong className="text-black">ChatGPT-Kit</strong> Chrome
                  extension and any other recurring services.
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
                      For consulting and custom development services,
                      cancellation terms are defined in individual service
                      agreements. Generally:
                    </p>
                    <div className="space-y-3">
                      {[
                        "Work completed up to the cancellation date will be billed",
                        "Reasonable notice (typically 48-72 hours) is required for cancellation",
                        "Deliverables completed will be provided regardless of project cancellation",
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
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="flex items-center space-x-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-black text-white">
                  <FileText className="h-8 w-8" />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-black">
                  3. Terms & Conditions
                </h2>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 space-y-8">
                {[
                  {
                    title: "License & Usage Rights",
                    items: [
                      "Digital products are licensed, not sold, for personal or business use as specified",
                      "Redistribution, resale, or sharing of digital products is prohibited",
                      "Reverse engineering, decompilation, or modification of products is not permitted",
                      "License is non-transferable and terminates upon violation of terms",
                    ],
                  },
                  {
                    title: "Prohibited Behaviors",
                    items: [
                      "Using products for illegal or unauthorized purposes",
                      "Attempting to gain unauthorized access to our systems or other users' data",
                      "Interfering with the proper functioning of our products or services",
                      "Violating intellectual property rights or applicable laws",
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
                  <div className="bg-white rounded-lg p-6 border border-gray-200">
                    <h4 className="font-semibold text-black mb-3">
                      Service Availability
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      While we strive for maximum uptime, we cannot guarantee
                      uninterrupted service availability. Scheduled maintenance
                      will be communicated in advance when possible.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-6 border border-gray-200">
                    <h4 className="font-semibold text-black mb-3">
                      Privacy & Data
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      We respect your privacy and handle personal data in
                      accordance with applicable privacy laws. We collect only
                      necessary information and do not sell personal data to
                      third parties.
                    </p>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                  <h4 className="font-semibold text-black mb-3">
                    Liability Disclaimers
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Our products and services are provided "as is" without
                    warranties of any kind. We are not liable for any indirect,
                    incidental, or consequential damages arising from the use of
                    our products or services. Our total liability is limited to
                    the amount paid for the specific product or service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Legal & Export Restrictions */}
        <section id="legal-export" className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="flex items-center space-x-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-black text-white">
                  <Globe className="h-8 w-8" />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-black">
                  4. Legal & Export Restrictions
                </h2>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-200 space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  {[
                    {
                      title: "Global Availability",
                      content:
                        "Our products are delivered digitally and are available globally. However, availability may be restricted in certain jurisdictions due to local laws or regulations.",
                    },
                    {
                      title: "Export Compliance",
                      content:
                        "We comply with applicable export control laws and regulations. Our digital products and technical data may be subject to export controls. By purchasing and using our products, you agree to comply with all applicable export laws.",
                    },
                    {
                      title: "Regional Restrictions",
                      content:
                        "If you experience purchase issues due to regional restrictions or payment processing limitations, please contact us at info@adamsolutions.com. We will work to find alternative solutions where legally permissible.",
                    },
                    {
                      title: "Governing Law",
                      content:
                        "These terms are governed by the laws of the United Kingdom. Any disputes will be resolved through binding arbitration or in the courts of the United Kingdom.",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-lg p-6 border border-gray-200"
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

                <div className="bg-black text-white rounded-lg p-6">
                  <h4 className="font-semibold mb-3">Contact Information</h4>
                  <div className="text-sm leading-relaxed space-y-1">
                    <p>
                      <strong>Adam DevOps Solutions Ltd</strong>
                    </p>
                    <p>Email: info@adamsolutions.com</p>
                    <p>For legal matters: legal@adamsolutions.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Last Updated */}
        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="bg-gray-50 rounded-2xl p-12 border border-gray-200 text-center max-w-4xl mx-auto">
              <div className="space-y-6">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-black text-white mx-auto">
                  <User className="h-10 w-10" />
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-black">
                    Last Updated: {new Date().toLocaleDateString()}
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    We reserve the right to update these policies at any time.
                    Material changes will be communicated to existing customers
                    via email and prominently displayed on our website.
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
