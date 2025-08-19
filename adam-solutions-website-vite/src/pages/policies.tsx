import { Helmet } from "react-helmet-async";
import {
  Shield,
  FileText,
  Scale,
  Globe,
  CheckCircle,
  Clock,
  RefreshCw,
  AlertTriangle,
  Sparkles,
} from "lucide-react";

export function PoliciesPage() {
  const policies = [
    {
      id: "refund-policy",
      icon: RefreshCw,
      title: "Refund & Dispute Policy",
      color: "from-red-500 to-pink-500",
      bgColor:
        "from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20",
    },
    {
      id: "cancellation-policy",
      icon: Clock,
      title: "Cancellation Policy",
      color: "from-orange-500 to-yellow-500",
      bgColor:
        "from-orange-50 to-yellow-50 dark:from-orange-950/20 dark:to-yellow-950/20",
    },
    {
      id: "terms-conditions",
      icon: FileText,
      title: "Terms & Conditions",
      color: "from-blue-500 to-cyan-500",
      bgColor:
        "from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20",
    },
    {
      id: "legal-export",
      icon: Globe,
      title: "Legal & Export Restrictions",
      color: "from-green-500 to-emerald-500",
      bgColor:
        "from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20",
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
      <section className="relative py-24 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-gray-50/30 to-zinc-50/50 dark:from-slate-950/20 dark:via-gray-950/10 dark:to-zinc-950/20"></div>
        <div className="absolute top-1/4 -left-4 w-72 h-72 bg-slate-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 -right-4 w-72 h-72 bg-gray-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>

        <div className="container mx-auto relative">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-slate-600/10 to-gray-600/10 px-6 py-2 text-sm font-medium border border-slate-200/20">
              <Scale className="mr-2 h-4 w-4 text-slate-600" />
              Legal Information
            </div>

            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-slate-900 to-zinc-900 dark:from-white dark:via-slate-100 dark:to-zinc-100 bg-clip-text text-transparent leading-tight">
              Our Policies
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our comprehensive policies covering refunds, cancellations, terms
              of service, and legal information to ensure transparency and
              trust.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto space-y-32 py-16">
        {/* Table of Contents */}
        <section className="relative">
          <div className="bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-950/20 dark:to-gray-950/20 rounded-3xl p-12 border border-slate-200/20">
            <div className="mx-auto max-w-2xl">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-500 to-gray-600 text-white mb-4">
                  <FileText className="h-8 w-8" />
                </div>
                <h2 className="text-2xl font-bold">Table of Contents</h2>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {policies.map((policy, index) => (
                  <a
                    key={policy.id}
                    href={`#${policy.id}`}
                    className="group relative"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${policy.bgColor} rounded-2xl opacity-50 group-hover:opacity-70 transition-opacity`}
                    ></div>
                    <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50 transition-all duration-300 group-hover:shadow-lg group-hover:border-primary/20">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${policy.color} text-white flex-shrink-0`}
                        >
                          <policy.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-primary mb-1">
                            {index + 1}.
                          </div>
                          <div className="font-semibold text-sm">
                            {policy.title}
                          </div>
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
        <section id="refund-policy" className="relative space-y-8">
          <div className="flex items-center space-x-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-pink-500 text-white">
              <RefreshCw className="h-8 w-8" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              1. Refund & Dispute Policy
            </h2>
          </div>

          <div className="bg-card rounded-3xl p-8 border border-border/50 space-y-6">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="h-6 w-6 text-amber-500 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-semibold mb-2">
                  All sales are final for digital products.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Due to the nature of digital products and services, we
                  generally do not offer refunds once access has been granted or
                  services have been delivered.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                However, we understand that technical issues may occur. If you
                experience technical issues with our digital products, please
                contact us within{" "}
                <strong className="text-foreground">14 days</strong> of purchase
                for support and potential exceptions to this policy.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">
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
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-muted/50 rounded-2xl p-6 border-l-4 border-blue-500">
                <p className="font-semibold text-blue-700 dark:text-blue-300 mb-2">
                  Dispute Resolution
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  For any disputes, please contact us directly at
                  support@adamsolutions.com before initiating chargebacks or
                  payment disputes. We are committed to resolving issues fairly
                  and promptly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cancellation Policy */}
        <section id="cancellation-policy" className="relative space-y-8">
          <div className="flex items-center space-x-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-500 text-white">
              <Clock className="h-8 w-8" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              2. Cancellation Policy
            </h2>
          </div>

          <div className="bg-card rounded-3xl p-8 border border-border/50 space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              This policy applies specifically to subscription-based products
              such as our{" "}
              <strong className="text-foreground">ChatGPT-Kit</strong> Chrome
              extension and any other recurring services.
            </p>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">
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
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">
                  Service Cancellations:
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  For consulting and custom development services, cancellation
                  terms are defined in individual service agreements. Generally:
                </p>
                <div className="space-y-3">
                  {[
                    "Work completed up to the cancellation date will be billed",
                    "Reasonable notice (typically 48-72 hours) is required for cancellation",
                    "Deliverables completed will be provided regardless of project cancellation",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Terms & Conditions */}
        <section id="terms-conditions" className="relative space-y-8">
          <div className="flex items-center space-x-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
              <FileText className="h-8 w-8" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              3. Terms & Conditions
            </h2>
          </div>

          <div className="bg-card rounded-3xl p-8 border border-border/50 space-y-8">
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
                <h3 className="text-xl font-semibold">{section.title}:</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-muted/50 rounded-2xl p-6">
                <h4 className="font-semibold mb-3">Service Availability</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  While we strive for maximum uptime, we cannot guarantee
                  uninterrupted service availability. Scheduled maintenance will
                  be communicated in advance when possible.
                </p>
              </div>
              <div className="bg-muted/50 rounded-2xl p-6">
                <h4 className="font-semibold mb-3">Privacy & Data</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We respect your privacy and handle personal data in accordance
                  with applicable privacy laws. We collect only necessary
                  information and do not sell personal data to third parties.
                </p>
              </div>
            </div>

            <div className="bg-amber-50 dark:bg-amber-950/20 rounded-2xl p-6 border border-amber-200/20">
              <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-3">
                Liability Disclaimers
              </h4>
              <p className="text-amber-700 dark:text-amber-300 text-sm leading-relaxed">
                Our products and services are provided "as is" without
                warranties of any kind. We are not liable for any indirect,
                incidental, or consequential damages arising from the use of our
                products or services. Our total liability is limited to the
                amount paid for the specific product or service.
              </p>
            </div>
          </div>
        </section>

        {/* Legal & Export Restrictions */}
        <section id="legal-export" className="relative space-y-8">
          <div className="flex items-center space-x-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 text-white">
              <Globe className="h-8 w-8" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              4. Legal & Export Restrictions
            </h2>
          </div>

          <div className="bg-card rounded-3xl p-8 border border-border/50 space-y-6">
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
                    "If you experience purchase issues due to regional restrictions or payment processing limitations, please contact us at support@adamsolutions.com. We will work to find alternative solutions where legally permissible.",
                },
                {
                  title: "Governing Law",
                  content:
                    "These terms are governed by the laws of the United Kingdom. Any disputes will be resolved through binding arbitration or in the courts of the United Kingdom.",
                },
              ].map((item, index) => (
                <div key={index} className="bg-muted/50 rounded-2xl p-6">
                  <h4 className="font-semibold mb-3">{item.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-2xl p-6 border border-green-200/20">
              <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3">
                Contact Information
              </h4>
              <div className="text-green-700 dark:text-green-300 text-sm leading-relaxed space-y-1">
                <p>
                  <strong>Adam DevOps Solutions Ltd</strong>
                </p>
                <p>Email: support@adamsolutions.com</p>
                <p>For legal matters: legal@adamsolutions.com</p>
              </div>
            </div>
          </div>
        </section>

        {/* Last Updated */}
        <section className="relative">
          <div className="bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-950/20 dark:to-gray-950/20 rounded-3xl p-12 border border-slate-200/20 text-center">
            <div className="mx-auto max-w-2xl space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-slate-500 to-gray-600 mb-6">
                <Sparkles className="h-10 w-10 text-white" />
              </div>
              <div className="space-y-2">
                <p className="font-semibold">
                  Last Updated: {new Date().toLocaleDateString()}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We reserve the right to update these policies at any time.
                  Material changes will be communicated to existing customers
                  via email and prominently displayed on our website.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
