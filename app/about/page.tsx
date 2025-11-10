import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "About Us | Full Stack AI Automation",
  description: "Learn about the team behind Full Stack AI Automation and our mission to help businesses thrive with AI.",
};

export default function About() {
  return (
    <div className="min-h-screen">
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="mb-6 text-center">
              We're Humans Building <span className="text-primary">AI Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Full Stack AI Automation was founded by business owners who got tired of watching companies waste money on AI tools that don't deliver results.
            </p>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="mb-4">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  We've been in your shoes. We've struggled with overwhelmed teams, lost leads, and operations that couldn't scale. We've also seen firsthand how the right AI automation can transform a business.
                </p>
                <p className="text-muted-foreground">
                  That's why we started Full Stack AI Automation—to bridge the gap between AI potential and real-world business value. We're not here to sell you the latest tech trend. We're here to solve your actual problems with systems that work.
                </p>
              </div>
              <div>
                <h2 className="mb-4">Our Mission</h2>
                <p className="text-muted-foreground mb-4">
                  To empower businesses of all sizes with AI automation that delivers measurable results. We believe technology should serve people, not replace them.
                </p>
                <p className="text-muted-foreground">
                  Every system we build is designed to amplify your team's capabilities, eliminate monotonous work, and help you focus on what really matters—growing your business and serving your customers.
                </p>
              </div>
            </div>

            <h2 className="mb-8 text-center">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {[
                {
                  title: "Human-Centered",
                  description: "We build AI that enhances human capabilities, not replaces them."
                },
                {
                  title: "Results-Driven",
                  description: "Every solution we create must deliver measurable ROI and value."
                },
                {
                  title: "Partnership",
                  description: "We become an extension of your team, committed to your long-term success."
                }
              ].map((value, index) => (
                <div key={index} className="bg-card p-6 rounded-lg border border-border text-center">
                  <h3 className="mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <h2 className="mb-4">Ready to Work With Us?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's talk about how AI automation can transform your business.
              </p>
              <Link href="/analysis">
                <Button size="lg" className="uppercase font-bold">
                  Schedule Your Free AI Audit
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
