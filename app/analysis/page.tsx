"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Analysis() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    companySize: "",
    challenges: "",
    meetingDate: "",
    hearAbout: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    alert("Form submitted! (This is a placeholder - form submission needs to be implemented)");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      <section className="py-20 md:py-32 bg-section-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Get Your Free AI Audit</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Discover exactly how AI automation can transform your business—no obligation, just valuable insights.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h2 className="mb-6">What You'll Get:</h2>
                <ul className="space-y-4">
                  {[
                    "Comprehensive workflow analysis",
                    "Custom automation recommendations",
                    "ROI projections and time savings estimates",
                    "Technology recommendations specific to your needs",
                    "No-obligation consultation with our team"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-secondary text-xl">✓</span>
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 p-6 bg-card rounded-lg border border-border">
                  <p className="text-muted-foreground text-sm italic">
                    "The free audit alone saved us hours of research. We learned exactly what we needed and what it would cost before committing to anything."
                  </p>
                  <p className="font-bold mt-4">Sarah Chen</p>
                  <p className="text-sm text-muted-foreground">GreenScape Landscaping</p>
                </div>
              </div>

              <div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium mb-2">
                      Industry Type *
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      required
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select an industry</option>
                      <option value="plumbing">Plumbing</option>
                      <option value="landscaping">Landscaping</option>
                      <option value="roofing">Roofing</option>
                      <option value="construction">Construction</option>
                      <option value="hvac">HVAC</option>
                      <option value="real-estate">Real Estate</option>
                      <option value="corporate">Corporate/B2B</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="companySize" className="block text-sm font-medium mb-2">
                      Company Size
                    </label>
                    <select
                      id="companySize"
                      name="companySize"
                      value={formData.companySize}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select size</option>
                      <option value="1-5">1-5 employees</option>
                      <option value="6-20">6-20 employees</option>
                      <option value="21-50">21-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="200+">200+ employees</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="challenges" className="block text-sm font-medium mb-2">
                      What are your biggest challenges? *
                    </label>
                    <textarea
                      id="challenges"
                      name="challenges"
                      required
                      value={formData.challenges}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full uppercase font-bold">
                    Schedule My Free Discovery Meeting
                  </Button>

                  <div className="flex justify-center gap-8 text-sm text-muted-foreground mt-6">
                    <div className="flex items-center gap-2">
                      <span>🔒</span>
                      <span>100% Secure</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>⚡</span>
                      <span>Quick Response</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>✓</span>
                      <span>No Obligation</span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
