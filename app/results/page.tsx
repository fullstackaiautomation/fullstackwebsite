"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CTAButton } from "@/components/ui/cta-button";
import Image from "next/image";

export default function Results() {
  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="py-20 md:py-32 bg-section-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">
              Real <span className="text-primary">Results</span> From Real Businesses
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              See how companies like yours are saving time, increasing revenue, and scaling faster with AI automation.
            </p>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section id="case-study-1" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 w-20 h-20">
              <Image
                src="/icons/85-percent.svg"
                alt="85% Increase"
                width={80}
                height={80}
                className="w-full h-full object-contain"
              />
            </div>
            <h2 className="mb-4">85% Increase in Follow-Up Rate</h2>
            <h3 className="text-primary mb-6">Regional Home Improvement Company</h3>
            <p className="text-lg text-muted-foreground mb-6">
              A regional home improvement company was losing leads due to slow follow-up times. Their sales team was overwhelmed with manual data entry and couldn't keep up with incoming inquiries.
            </p>
            <p className="text-muted-foreground mb-6">
              We implemented an AI-enabled CRM automation system that automatically captured leads from all sources, scored them based on likelihood to convert, and sent personalized follow-up sequences at optimal times.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <p className="text-3xl font-bold text-primary mb-2">85%</p>
                <p className="text-muted-foreground">Increase in follow-up rate</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <p className="text-3xl font-bold text-primary mb-2">3X</p>
                <p className="text-muted-foreground">More prospects converted</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <p className="text-3xl font-bold text-primary mb-2">$200K+</p>
                <p className="text-muted-foreground">Additional annual revenue</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="case-study-2" className="py-20 bg-section-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 w-20 h-20">
              <Image
                src="/icons/20-plus.svg"
                alt="20+ Hours"
                width={80}
                height={80}
                className="w-full h-full object-contain"
              />
            </div>
            <h2 className="mb-4">20+ Hours Saved Per Week</h2>
            <h3 className="text-primary mb-6">Johnson's Plumbing Services</h3>
            <p className="text-lg text-muted-foreground mb-6">
              The owner spent countless hours on scheduling, invoicing, and follow-up calls. His team was bogged down with paperwork instead of serving customers.
            </p>
            <p className="text-muted-foreground mb-6">
              Our operations optimization system automated scheduling, invoicing, payment reminders, and customer communication. The result? More time for growth and better customer service.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <p className="text-3xl font-bold text-primary mb-2">20+</p>
                <p className="text-muted-foreground">Hours saved weekly</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <p className="text-3xl font-bold text-primary mb-2">40%</p>
                <p className="text-muted-foreground">Faster invoicing</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <p className="text-3xl font-bold text-primary mb-2">95%</p>
                <p className="text-muted-foreground">Customer satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="case-study-3" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 w-20 h-20">
              <Image
                src="/icons/50k.svg"
                alt="$50K Savings"
                width={80}
                height={80}
                className="w-full h-full object-contain"
              />
            </div>
            <h2 className="mb-4">$50K+ Annual Savings</h2>
            <h3 className="text-primary mb-6">Corporate Client - Multi-Department Automation</h3>
            <p className="text-lg text-muted-foreground mb-6">
              A mid-sized corporation was spending thousands on manual data entry, report generation, and administrative overhead across multiple departments.
            </p>
            <p className="text-muted-foreground mb-6">
              We built custom workflow automation that eliminated repetitive tasks, automated reporting, and integrated their systems. The efficiency gains translated directly to cost savings.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <p className="text-3xl font-bold text-primary mb-2">$50K+</p>
                <p className="text-muted-foreground">Annual cost savings</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <p className="text-3xl font-bold text-primary mb-2">75%</p>
                <p className="text-muted-foreground">Reduction in manual entry</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <p className="text-3xl font-bold text-primary mb-2">100%</p>
                <p className="text-muted-foreground">ROI in first year</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-section-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-4">Ready For Your Own Success Story?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Schedule a free AI audit and discover how much time and money you could be saving.
            </p>
            <CTAButton>
              GET MY FREE AI AUDIT
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
