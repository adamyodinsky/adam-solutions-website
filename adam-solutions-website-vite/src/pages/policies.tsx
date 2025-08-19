import { Helmet } from "react-helmet-async";

export function PoliciesPage() {
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

      <div className="container space-y-12 py-8 md:py-12 lg:py-24">
        {/* Header */}
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h1 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Policies
          </h1>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Our comprehensive policies covering refunds, cancellations, terms of
            service, and legal information.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="mx-auto max-w-[58rem]">
          <div className="rounded-lg border bg-muted/50 p-6">
            <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#refund-policy"
                  className="text-primary hover:underline"
                >
                  1. Refund & Dispute Policy
                </a>
              </li>
              <li>
                <a
                  href="#cancellation-policy"
                  className="text-primary hover:underline"
                >
                  2. Cancellation Policy
                </a>
              </li>
              <li>
                <a
                  href="#terms-conditions"
                  className="text-primary hover:underline"
                >
                  3. Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#legal-export"
                  className="text-primary hover:underline"
                >
                  4. Legal & Export Restrictions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Refund & Dispute Policy */}
        <div id="refund-policy" className="mx-auto max-w-[58rem] space-y-6">
          <h2 className="text-3xl font-bold">1. Refund & Dispute Policy</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              <strong>All sales are final for digital products.</strong> Due to
              the nature of digital products and services, we generally do not
              offer refunds once access has been granted or services have been
              delivered.
            </p>
            <p>
              However, we understand that technical issues may occur. If you
              experience technical issues with our digital products, please
              contact us within <strong>14 days</strong> of purchase for support
              and potential exceptions to this policy.
            </p>
            <h3 className="text-lg font-semibold text-foreground">
              Exception Circumstances:
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Product fails to function as described due to technical defects
              </li>
              <li>
                Service delivery failure due to circumstances within our control
              </li>
              <li>Duplicate purchases made in error</li>
              <li>Unauthorized transactions (subject to verification)</li>
            </ul>
            <p>
              <strong>Dispute Resolution:</strong> For any disputes, please
              contact us directly at support@adamsolutions.com before initiating
              chargebacks or payment disputes. We are committed to resolving
              issues fairly and promptly.
            </p>
          </div>
        </div>

        {/* Cancellation Policy */}
        <div
          id="cancellation-policy"
          className="mx-auto max-w-[58rem] space-y-6"
        >
          <h2 className="text-3xl font-bold">2. Cancellation Policy</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              This policy applies specifically to subscription-based products
              such as our <strong>ChatGPT-Kit</strong> Chrome extension and any
              other recurring services.
            </p>
            <h3 className="text-lg font-semibold text-foreground">
              Subscription Cancellations:
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Subscriptions can be canceled at any time via the customer
                portal provided by Lemon Squeezy
              </li>
              <li>
                Access to subscription services continues until the end of the
                current billing period
              </li>
              <li>
                No partial refunds are provided for unused portions of billing
                periods
              </li>
              <li>
                Canceled subscriptions will not auto-renew for the next billing
                cycle
              </li>
            </ul>
            <h3 className="text-lg font-semibold text-foreground">
              Service Cancellations:
            </h3>
            <p>
              For consulting and custom development services, cancellation terms
              are defined in individual service agreements. Generally:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Work completed up to the cancellation date will be billed</li>
              <li>
                Reasonable notice (typically 48-72 hours) is required for
                cancellation
              </li>
              <li>
                Deliverables completed will be provided regardless of project
                cancellation
              </li>
            </ul>
          </div>
        </div>

        {/* Terms & Conditions */}
        <div id="terms-conditions" className="mx-auto max-w-[58rem] space-y-6">
          <h2 className="text-3xl font-bold">3. Terms & Conditions</h2>
          <div className="space-y-4 text-muted-foreground">
            <h3 className="text-lg font-semibold text-foreground">
              License & Usage Rights:
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Digital products are licensed, not sold, for personal or
                business use as specified
              </li>
              <li>
                Redistribution, resale, or sharing of digital products is
                prohibited
              </li>
              <li>
                Reverse engineering, decompilation, or modification of products
                is not permitted
              </li>
              <li>
                License is non-transferable and terminates upon violation of
                terms
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground">
              Prohibited Behaviors:
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Using products for illegal or unauthorized purposes</li>
              <li>
                Attempting to gain unauthorized access to our systems or other
                users' data
              </li>
              <li>
                Interfering with the proper functioning of our products or
                services
              </li>
              <li>Violating intellectual property rights or applicable laws</li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground">
              Service Availability:
            </h3>
            <p>
              While we strive for maximum uptime, we cannot guarantee
              uninterrupted service availability. Scheduled maintenance will be
              communicated in advance when possible.
            </p>

            <h3 className="text-lg font-semibold text-foreground">
              Liability Disclaimers:
            </h3>
            <p>
              Our products and services are provided "as is" without warranties
              of any kind. We are not liable for any indirect, incidental, or
              consequential damages arising from the use of our products or
              services. Our total liability is limited to the amount paid for
              the specific product or service.
            </p>

            <h3 className="text-lg font-semibold text-foreground">
              Privacy & Data:
            </h3>
            <p>
              We respect your privacy and handle personal data in accordance
              with applicable privacy laws. We collect only necessary
              information and do not sell personal data to third parties.
            </p>
          </div>
        </div>

        {/* Legal & Export Restrictions */}
        <div id="legal-export" className="mx-auto max-w-[58rem] space-y-6">
          <h2 className="text-3xl font-bold">4. Legal & Export Restrictions</h2>
          <div className="space-y-4 text-muted-foreground">
            <h3 className="text-lg font-semibold text-foreground">
              Global Availability:
            </h3>
            <p>
              Our products are delivered digitally and are available globally.
              However, availability may be restricted in certain jurisdictions
              due to local laws or regulations.
            </p>

            <h3 className="text-lg font-semibold text-foreground">
              Export Compliance:
            </h3>
            <p>
              We comply with applicable export control laws and regulations. Our
              digital products and technical data may be subject to export
              controls. By purchasing and using our products, you agree to
              comply with all applicable export laws.
            </p>

            <h3 className="text-lg font-semibold text-foreground">
              Regional Restrictions:
            </h3>
            <p>
              If you experience purchase issues due to regional restrictions or
              payment processing limitations, please contact us at
              support@adamsolutions.com. We will work to find alternative
              solutions where legally permissible.
            </p>

            <h3 className="text-lg font-semibold text-foreground">
              Governing Law:
            </h3>
            <p>
              These terms are governed by the laws of the United Kingdom. Any
              disputes will be resolved through binding arbitration or in the
              courts of the United Kingdom.
            </p>

            <h3 className="text-lg font-semibold text-foreground">
              Contact Information:
            </h3>
            <p>
              <strong>Adam DevOps Solutions Ltd</strong>
              <br />
              Email: support@adamsolutions.com
              <br />
              For legal matters: legal@adamsolutions.com
            </p>
          </div>
        </div>

        {/* Last Updated */}
        <div className="mx-auto max-w-[58rem] pt-8 border-t">
          <p className="text-sm text-muted-foreground text-center">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
            <br />
            We reserve the right to update these policies at any time. Material
            changes will be communicated to existing customers.
          </p>
        </div>
      </div>
    </>
  );
}
