import { Button } from "@/components/ui/button";
import {
  Mail,
  MessageCircle,
  Phone,
  MapPin,
  Sparkles,
  Send,
  Clock,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

export function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Us - Get in Touch | Adam Solutions</title>
        <meta
          name="description"
          content="Contact Adam DevOps Solutions Ltd for professional consulting services or digital product support. Reach out via email or contact form."
        />
        <meta
          name="keywords"
          content="contact, support, consulting, DevOps, software engineering"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 via-blue-50/30 to-indigo-50/50 dark:from-cyan-950/20 dark:via-blue-950/10 dark:to-indigo-950/20"></div>
        <div className="absolute top-1/4 -left-4 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>

        <div className="container mx-auto relative">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-600/10 to-blue-600/10 px-6 py-2 text-sm font-medium border border-cyan-200/20">
              <Mail className="mr-2 h-4 w-4 text-cyan-600" />
              Get In Touch
            </div>

            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-cyan-900 to-blue-900 dark:from-white dark:via-cyan-100 dark:to-blue-100 bg-clip-text text-transparent leading-tight">
              Contact Us
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Get in touch with us for professional consulting services, product
              support, or any questions you may have. We're here to help!
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto space-y-32 py-16">
        {/* Contact Methods */}
        <section className="relative">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Mail,
                title: "Email",
                description: "Primary contact method",
                detail: "support@adamsolutions.com",
                color: "from-red-500 to-pink-500",
                bgColor:
                  "from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20",
              },
              {
                icon: MessageCircle,
                title: "Live Chat",
                description: "Quick questions & support",
                detail: "Start Chat",
                color: "from-green-500 to-emerald-500",
                bgColor:
                  "from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20",
              },
              {
                icon: Phone,
                title: "Phone",
                description: "For urgent matters",
                detail: "Available by appointment",
                color: "from-blue-500 to-cyan-500",
                bgColor:
                  "from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20",
              },
              {
                icon: MapPin,
                title: "Location",
                description: "Remote services",
                detail: "Global availability",
                color: "from-purple-500 to-indigo-500",
                bgColor:
                  "from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20",
              },
            ].map((method, index) => (
              <div key={index} className="group relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${method.bgColor} rounded-3xl opacity-50 group-hover:opacity-70 transition-opacity`}
                ></div>
                <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl p-8 border border-border/50 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/5 group-hover:border-primary/20 text-center">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${method.color} text-white mb-6`}
                  >
                    <method.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {method.description}
                  </p>
                  {method.title === "Email" ? (
                    <a
                      href={`mailto:${method.detail}`}
                      className="text-primary hover:underline font-medium"
                    >
                      {method.detail}
                    </a>
                  ) : method.title === "Live Chat" ? (
                    <Button size="sm" variant="outline">
                      {method.detail}
                    </Button>
                  ) : (
                    <p className="text-sm font-medium">{method.detail}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section className="relative">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold">
                  Send us a message
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Fill out the form and we'll get back to you as soon as
                  possible. We typically respond within 24-48 hours.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: CheckCircle,
                    title: "Technical Issues",
                    description:
                      "For product-related technical issues, contact us within 14 days for support and potential exceptions.",
                  },
                  {
                    icon: Clock,
                    title: "Response Time",
                    description:
                      "We typically respond to all inquiries within 24-48 hours during business days.",
                  },
                  {
                    icon: Sparkles,
                    title: "Business Hours",
                    description:
                      "Monday - Friday: 9:00 AM - 6:00 PM (UTC). Weekend support available for urgent matters.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 rounded-3xl opacity-50"></div>
              <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl p-8 border border-border/50">
                <form className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="firstName"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        First Name
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        className="flex h-12 w-full rounded-xl border border-input bg-background/50 px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your first name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="lastName"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        className="flex h-12 w-full rounded-xl border border-input bg-background/50 px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your last name"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-12 w-full rounded-xl border border-input bg-background/50 px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="company"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Company (Optional)
                    </label>
                    <input
                      id="company"
                      type="text"
                      className="flex h-12 w-full rounded-xl border border-input bg-background/50 px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your company name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      className="flex h-12 w-full rounded-xl border border-input bg-background/50 px-4 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="consulting">DevOps Consulting</option>
                      <option value="development">Software Development</option>
                      <option value="products">Product Support</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="flex min-h-[120px] w-full rounded-xl border border-input bg-background/50 px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                      placeholder="Tell us about your project or how we can help..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white border-0 h-12"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
