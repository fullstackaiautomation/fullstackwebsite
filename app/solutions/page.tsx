"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CTAButton } from "@/components/ui/cta-button";

export default function Solutions() {
  const solutions = [
    {
      id: "crm-automation",
      icon: "📊",
      iconLabel: "Chart",
      title: "AI-Enabled CRM Automation",
      description: "Stop losing leads in spreadsheets and email chains. Our AI-enabled CRM systems automatically capture every lead, follow up at the perfect time, and keep your pipeline organized—so you never miss an opportunity.",
      benefits: [
        "Automatic lead capture from all sources",
        "Smart follow-up sequences based on behavior",
        "Pipeline management with zero manual data entry",
        "85% average increase in follow-up rates"
      ]
    },
    {
      id: "workflow-automation",
      icon: "⚡",
      iconLabel: "Lightning bolt",
      title: "Workflow Automation",
      description: "Your team shouldn't be spending hours on data entry, scheduling, and administrative tasks. We build custom workflow automation that handles the repetitive work, so your people can focus on growing your business.",
      benefits: [
        "Eliminate manual data entry across systems",
        "Automated scheduling and appointment management",
        "Smart document generation and processing",
        "Save 20+ hours per week per employee"
      ]
    },
    {
      id: "customer-communication",
      icon: "💬",
      iconLabel: "Speech bubble",
      title: "Customer Communication Systems",
      description: "Never let a customer inquiry go unanswered. Our AI-powered communication systems handle customer questions 24/7, send timely follow-ups, and keep your customers engaged without requiring your team to work around the clock.",
      benefits: [
        "24/7 intelligent chatbot support",
        "Automated email and SMS follow-ups",
        "Customer engagement tracking and insights",
        "70% reduction in response time"
      ]
    },
    {
      id: "data-analytics",
      icon: "📈",
      iconLabel: "Graph trending up",
      title: "AI-Powered Analytics",
      description: "Stop guessing and start knowing. Our AI-powered analytics transform your raw business data into clear, actionable insights. Get real-time dashboards, predictive analytics, and automated reports that help you make smarter decisions faster.",
      benefits: [
        "Real-time business performance dashboards",
        "Predictive analytics for sales and operations",
        "Automated report generation and distribution",
        "Data-driven insights for strategic decisions"
      ]
    },
    {
      id: "operations",
      icon: "🔧",
      iconLabel: "Wrench",
      title: "Operations Optimization",
      description: "Built specifically for service companies like plumbing, landscaping, and roofing, our operations optimization systems streamline everything from job scheduling to invoicing. Spend less time on paperwork and more time serving customers.",
      benefits: [
        "Smart job scheduling and dispatch",
        "Automated invoicing and payment tracking",
        "Inventory and equipment management",
        "Customer portal for easy communication"
      ]
    },
    {
      id: "custom",
      icon: "🎨",
      iconLabel: "Artist palette",
      title: "Custom AI Solutions",
      description: "No two businesses are exactly alike. If you have a unique workflow or industry-specific challenge, we'll design and build a custom AI solution tailored specifically to your needs. Our team has experience across dozens of industries.",
      benefits: [
        "Fully customized to your workflow",
        "Industry-specific features and integrations",
        "Scalable architecture that grows with you",
        "Dedicated support and ongoing optimization"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="py-20 md:py-32 bg-section-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">
              AI Solutions That <span className="text-primary">Actually Work</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Customized automation systems designed to eliminate monotonous work and amplify your team's productivity.
            </p>
            <CTAButton>
              GET MY FREE AI AUDIT
            </CTAButton>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      {solutions.map((solution, index) => (
        <section
          key={solution.id}
          id={solution.id}
          className={`py-20 ${index % 2 === 0 ? '' : 'bg-section-alt'}`}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4 sm:gap-6 md:gap-8 mb-6">
                <div className="text-4xl sm:text-5xl flex-shrink-0" role="img" aria-label={solution.iconLabel}>{solution.icon}</div>
                <div className="flex-1">
                  <h2 className="mb-4">{solution.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6">{solution.description}</p>

                  <h3 className="mb-4">What You Get:</h3>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-secondary text-xl" role="img" aria-label="Checkmark">✓</span>
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-4">Ready to Automate Your Business?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Schedule a free AI audit and we'll show you exactly how these solutions can transform your operations.
            </p>
            <CTAButton>
              Schedule Your Free AI Audit
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
