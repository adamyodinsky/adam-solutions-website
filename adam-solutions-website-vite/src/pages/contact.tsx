import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Phone, MapPin } from "lucide-react";
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

      <div className="container space-y-12 py-8 md:py-12 lg:py-24">
        {/* Header */}
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h1 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Contact Us
          </h1>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Get in touch with us for professional consulting services, product
            support, or any questions you may have. We're here to help!
          </p>
        </div>

        {/* Contact Methods */}
        <div className="mx-auto max-w-[58rem] grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center space-y-3 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="font-semibold">Email</h3>
            <p className="text-sm text-muted-foreground">
              Primary contact method
            </p>
            <a
              href="mailto:support@adamsolutions.com"
              className="text-primary hover:underline"
            >
              support@adamsolutions.com
            </a>
          </div>

          <div className="flex flex-col items-center space-y-3 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <MessageCircle className="h-6 w-6" />
            </div>
            <h3 className="font-semibold">Live Chat</h3>
            <p className="text-sm text-muted-foreground">
              Quick questions & support
            </p>
            <Button variant="outline" size="sm">
              Start Chat
            </Button>
          </div>

          <div className="flex flex-col items-center space-y-3 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="font-semibold">Phone</h3>
            <p className="text-sm text-muted-foreground">For urgent matters</p>
            <p className="text-sm">Available by appointment</p>
          </div>

          <div className="flex flex-col items-center space-y-3 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="font-semibold">Location</h3>
            <p className="text-sm text-muted-foreground">Remote services</p>
            <p className="text-sm">Global availability</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mx-auto max-w-[58rem]">
          <div className="rounded-lg border bg-card p-8">
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold">Send us a message</h2>
                <p className="mt-2 text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>
              </div>

              <form className="space-y-4">
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
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                    rows={5}
                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Tell us about your project or how we can help..."
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Support Information */}
        <div className="mx-auto max-w-[58rem] space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Support Information</h2>
            <p className="mt-2 text-muted-foreground">
              Additional ways to get help and support
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <h3 className="font-semibold">Technical Issues</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                For product-related technical issues, contact us within 14 days
                for support and potential exceptions to our refund policy.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold">Response Time</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We typically respond to all inquiries within 24-48 hours during
                business days.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold">Business Hours</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Monday - Friday: 9:00 AM - 6:00 PM (UTC)
                <br />
                Weekend support available for urgent matters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
