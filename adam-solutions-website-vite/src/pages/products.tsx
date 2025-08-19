import { Button } from "@/components/ui/button";
import { Smartphone, Chrome, Download, Star, Users, Zap } from "lucide-react";
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

      <div className="container space-y-12 py-8 md:py-12 lg:py-24">
        {/* Header */}
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h1 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Our Digital Products
          </h1>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Innovative digital solutions designed to enhance your productivity
            and experience. All products are delivered digitally with no
            physical fulfillment required.
          </p>
        </div>

        {/* Circle App */}
        <div className="mx-auto max-w-[58rem]">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium">
                  <Smartphone className="mr-2 h-4 w-4" />
                  Mobile Application
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Circle
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A powerful mobile application that delivers exceptional user
                  experience with innovative features. Circle is designed to
                  streamline your mobile workflow and provide seamless
                  functionality across devices.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg">
                  <Download className="mr-2 h-4 w-4" />
                  Download Now
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Star className="mr-1 h-4 w-4 fill-current text-yellow-500" />
                  <span>4.8/5 Rating</span>
                </div>
                <div className="flex items-center">
                  <Users className="mr-1 h-4 w-4" />
                  <span>10k+ Users</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative">
                <img
                  src="/src/assets/img/circle/icon-512.png"
                  alt="Circle App Icon"
                  className="h-64 w-64 rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ChatGPT-Kit */}
        <div className="mx-auto max-w-[58rem]">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="flex items-center justify-center md:order-2">
              <div className="relative">
                <div className="flex h-64 w-64 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-2xl">
                  <Chrome className="h-32 w-32 text-white" />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4 md:order-1">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium">
                  <Chrome className="mr-2 h-4 w-4" />
                  Chrome Extension
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  ChatGPT-Kit
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Enhance your ChatGPT experience with our powerful Chrome
                  extension. ChatGPT-Kit provides advanced features, improved
                  workflow, and seamless integration to boost your AI
                  productivity.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg">
                  <Chrome className="mr-2 h-4 w-4" />
                  Add to Chrome
                </Button>
                <Button variant="outline" size="lg">
                  View Features
                </Button>
              </div>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Star className="mr-1 h-4 w-4 fill-current text-yellow-500" />
                  <span>4.9/5 Rating</span>
                </div>
                <div className="flex items-center">
                  <Users className="mr-1 h-4 w-4" />
                  <span>25k+ Users</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mx-auto max-w-[58rem] space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Why Choose Our Products?
            </h2>
            <p className="mt-4 text-muted-foreground">
              All our digital products are built with quality, performance, and
              user experience in mind.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-2 text-center">
              <Zap className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Instant Access</h3>
              <p className="text-muted-foreground">
                Digital delivery means instant access to your purchased
                products.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <Users className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Active Community</h3>
              <p className="text-muted-foreground">
                Join thousands of users who love our products and provide
                feedback.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <Star className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Regular Updates</h3>
              <p className="text-muted-foreground">
                Continuous improvements and new features based on user feedback.
              </p>
            </div>
          </div>
        </div>

        {/* Digital Products Notice */}
        <div className="mx-auto max-w-[58rem] rounded-lg border bg-muted/50 p-6 text-center">
          <h3 className="text-lg font-semibold">Digital Products Only</h3>
          <p className="mt-2 text-muted-foreground">
            All our products are digital and delivered electronically. There is
            no physical fulfillment or shipping involved. You'll receive instant
            access upon purchase.
          </p>
        </div>
      </div>
    </>
  );
}
