"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function FormPreviewPage() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Form Design Options</h1>
          <p className="text-muted-foreground text-lg">
            Scroll down to compare all three form layouts
          </p>
        </div>

        {/* Option 1: Multi-Step Wizard */}
        <section className="mb-32">
          <div className="bg-primary/10 p-8 rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-2">Option 1: Multi-Step Wizard</h2>
            <p className="text-lg text-muted-foreground mb-2">
              Progressive 3-step form with clear progress indication
            </p>
            <div className="flex gap-2 text-sm">
              <span className="bg-green-500/20 text-green-700 dark:text-green-300 px-3 py-1 rounded">
                Best for Mobile
              </span>
              <span className="bg-blue-500/20 text-blue-700 dark:text-blue-300 px-3 py-1 rounded">
                Reduces Cognitive Load
              </span>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 max-w-2xl mx-auto">
            {/* Progress Indicator */}
            <div className="flex justify-center gap-2 mb-8">
              <div className={`w-3 h-3 rounded-full ${currentStep >= 1 ? "bg-primary" : "bg-muted"}`} />
              <div className={`w-3 h-3 rounded-full ${currentStep >= 2 ? "bg-primary" : "bg-muted"}`} />
              <div className={`w-3 h-3 rounded-full ${currentStep >= 3 ? "bg-primary" : "bg-muted"}`} />
            </div>

            {currentStep === 1 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">Step 1 of 3: About You</h3>
                <div>
                  <Label htmlFor="firstName1">First Name *</Label>
                  <Input id="firstName1" placeholder="John" />
                </div>
                <div>
                  <Label htmlFor="lastName1">Last Name *</Label>
                  <Input id="lastName1" placeholder="Smith" />
                </div>
                <div>
                  <Label htmlFor="email1">Email *</Label>
                  <Input id="email1" type="email" placeholder="john@company.com" />
                </div>
                <div>
                  <Label htmlFor="phone1">Phone Number *</Label>
                  <Input id="phone1" type="tel" placeholder="(555) 123-4567" />
                </div>
                <Button className="w-full" onClick={() => setCurrentStep(2)}>
                  Continue →
                </Button>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">Step 2 of 3: Company Details</h3>
                <div>
                  <Label htmlFor="company1">Company Name *</Label>
                  <Input id="company1" placeholder="Acme Corp" />
                </div>
                <div>
                  <Label htmlFor="industry1">Industry *</Label>
                  <select
                    id="industry1"
                    className="w-full h-10 rounded-md border border-input bg-background px-3 py-2"
                  >
                    <option>Select industry...</option>
                    <option>Technology</option>
                    <option>Healthcare</option>
                    <option>Finance</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="size1">Company Size (Optional)</Label>
                  <select
                    id="size1"
                    className="w-full h-10 rounded-md border border-input bg-background px-3 py-2"
                  >
                    <option>Select size...</option>
                    <option>1-10 employees</option>
                    <option>11-50 employees</option>
                    <option>51-200 employees</option>
                  </select>
                </div>
                <div className="flex gap-2">
                  <Button variant="secondary" className="flex-1" onClick={() => setCurrentStep(1)}>
                    ← Back
                  </Button>
                  <Button className="flex-1" onClick={() => setCurrentStep(3)}>
                    Continue →
                  </Button>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">Step 3 of 3: Tell Us More</h3>
                <div>
                  <Label htmlFor="challenges1">What are your biggest challenges? *</Label>
                  <Textarea
                    id="challenges1"
                    placeholder="Tell us about the challenges you're facing..."
                    rows={6}
                  />
                  <p className="text-sm text-muted-foreground mt-1">0/500 characters</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="secondary" className="flex-1" onClick={() => setCurrentStep(2)}>
                    ← Back
                  </Button>
                  <Button className="flex-1">Get My Free AI Audit</Button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Option 2: Single-Page Smart Form */}
        <section className="mb-32">
          <div className="bg-primary/10 p-8 rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-2">
              Option 2: Single-Page Smart Form ⭐ RECOMMENDED
            </h2>
            <p className="text-lg text-muted-foreground mb-2">
              All fields visible, organized sections, professional layout
            </p>
            <div className="flex gap-2 text-sm">
              <span className="bg-green-500/20 text-green-700 dark:text-green-300 px-3 py-1 rounded">
                Best for Desktop
              </span>
              <span className="bg-blue-500/20 text-blue-700 dark:text-blue-300 px-3 py-1 rounded">
                Transparent
              </span>
              <span className="bg-purple-500/20 text-purple-700 dark:text-purple-300 px-3 py-1 rounded">
                B2B Standard
              </span>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 max-w-3xl mx-auto">
            <div className="space-y-8">
              {/* Personal Information Section */}
              <div>
                <h3 className="text-lg font-semibold mb-4 uppercase tracking-wide text-muted-foreground">
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName2">First Name *</Label>
                    <Input id="firstName2" placeholder="John" />
                  </div>
                  <div>
                    <Label htmlFor="lastName2">Last Name *</Label>
                    <Input id="lastName2" placeholder="Smith" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <Label htmlFor="email2">Email *</Label>
                    <Input id="email2" type="email" placeholder="john@company.com" />
                  </div>
                  <div>
                    <Label htmlFor="phone2">Phone Number *</Label>
                    <Input id="phone2" type="tel" placeholder="(555) 123-4567" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4 flex items-center gap-2">
                  <span>🔒</span> Your information is secure and will never be shared
                </p>
              </div>

              <div className="border-t border-border" />

              {/* Company Details Section */}
              <div>
                <h3 className="text-lg font-semibold mb-4 uppercase tracking-wide text-muted-foreground">
                  Company Details
                </h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="company2">Company Name *</Label>
                    <Input id="company2" placeholder="Acme Corp" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="industry2">Industry *</Label>
                      <select
                        id="industry2"
                        className="w-full h-10 rounded-md border border-input bg-background px-3 py-2"
                      >
                        <option>Select industry...</option>
                        <option>Technology</option>
                        <option>Healthcare</option>
                        <option>Finance</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="size2">Company Size (Optional)</Label>
                      <select
                        id="size2"
                        className="w-full h-10 rounded-md border border-input bg-background px-3 py-2"
                      >
                        <option>Select size...</option>
                        <option>1-10 employees</option>
                        <option>11-50 employees</option>
                        <option>51-200 employees</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-border" />

              {/* Tell Us More Section */}
              <div>
                <h3 className="text-lg font-semibold mb-4 uppercase tracking-wide text-muted-foreground">
                  Tell Us More
                </h3>
                <div>
                  <Label htmlFor="challenges2">What are your biggest challenges? *</Label>
                  <Textarea
                    id="challenges2"
                    placeholder="Tell us about the challenges you're facing..."
                    rows={6}
                  />
                  <p className="text-sm text-muted-foreground mt-1">0/500 characters</p>
                </div>
              </div>

              <Button className="w-full h-12 text-lg uppercase font-bold">
                Get My Free AI Audit
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                ✓ Trusted by 1,200+ companies
              </p>
            </div>
          </div>
        </section>

        {/* Option 3: Conversational Form */}
        <section className="mb-32">
          <div className="bg-primary/10 p-8 rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-2">Option 3: Conversational Chat-Style</h2>
            <p className="text-lg text-muted-foreground mb-2">
              One question at a time, engaging chat-like experience
            </p>
            <div className="flex gap-2 text-sm">
              <span className="bg-green-500/20 text-green-700 dark:text-green-300 px-3 py-1 rounded">
                Most Engaging
              </span>
              <span className="bg-orange-500/20 text-orange-700 dark:text-orange-300 px-3 py-1 rounded">
                May Feel Casual
              </span>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 max-w-2xl mx-auto">
            <div className="space-y-4">
              {/* Completed Questions */}
              <div className="space-y-2">
                <div className="bg-muted/50 rounded-lg p-3 text-sm">
                  <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                  <span className="text-muted-foreground">First Name:</span>{" "}
                  <span className="font-medium">John</span>
                </div>
                <div className="bg-muted/50 rounded-lg p-3 text-sm">
                  <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                  <span className="text-muted-foreground">Last Name:</span>{" "}
                  <span className="font-medium">Smith</span>
                </div>
                <div className="bg-muted/50 rounded-lg p-3 text-sm">
                  <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                  <span className="text-muted-foreground">Email:</span>{" "}
                  <span className="font-medium">john@company.com</span>
                </div>
                <div className="bg-muted/50 rounded-lg p-3 text-sm">
                  <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                  <span className="text-muted-foreground">Phone:</span>{" "}
                  <span className="font-medium">(555) 123-4567</span>
                </div>
                <div className="bg-muted/50 rounded-lg p-3 text-sm">
                  <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                  <span className="text-muted-foreground">Company:</span>{" "}
                  <span className="font-medium">Acme Corp</span>
                </div>
              </div>

              <div className="border-t border-border my-6" />

              {/* Current Question */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">What industry is Acme Corp in?</h3>
                <select className="w-full h-12 rounded-md border border-input bg-background px-3 py-2 text-lg">
                  <option>Search industries...</option>
                  <option>Technology</option>
                  <option>Healthcare</option>
                  <option>Finance</option>
                  <option>Manufacturing</option>
                </select>
                <Button className="w-full">Continue →</Button>
              </div>

              <p className="text-center text-sm text-muted-foreground mt-6">Question 6 of 8</p>
            </div>
          </div>
        </section>

        {/* Decision Section */}
        <section className="bg-primary/5 rounded-lg p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Choose?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Sally (UX Expert) recommends <span className="font-semibold text-foreground">Option 2</span> for your professional B2B context.
            <br />
            Which option feels right for your brand?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Choose Option 1
            </Button>
            <Button size="lg" className="bg-primary">
              Choose Option 2 (Recommended)
            </Button>
            <Button size="lg" variant="secondary">
              Choose Option 3
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
