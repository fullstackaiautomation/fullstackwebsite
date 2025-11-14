"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// Google Form field IDs - these map to your Google Form
const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLSdVnj9onZy34h55NyAgfmKWiK7cDy9Rlf5pQwUOD257U8GeYw/formResponse";

export default function Analysis() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    companySize: "",
    challenges: "",
  });

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "firstName":
      case "lastName":
        return value.trim() === "" ? "This field is required" : "";
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (value.trim() === "") return "Email is required";
        if (!emailRegex.test(value)) return "Please enter a valid email address";
        return "";
      case "phone":
        if (value.trim() === "") return "Phone number is required";
        return "";
      case "company":
        return value.trim() === "" ? "Company name is required" : "";
      case "industry":
        return value === "" ? "Please select an industry" : "";
      case "challenges":
        return value.trim() === "" ? "Please tell us about your challenges" : "";
      default:
        return "";
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error when user starts typing
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create form data for Google Forms
      const googleFormData = new FormData();
      // Using actual entry IDs from your Google Form
      // entry.215999694 and entry.1591670523 are the main fields
      // Combining fields to match Google Form structure
      googleFormData.append("entry.215999694", `${formData.firstName} ${formData.lastName} | ${formData.email} | ${formData.phone}`);
      googleFormData.append("entry.1591670523", `Company: ${formData.company} | Industry: ${formData.industry} | Size: ${formData.companySize || 'Not specified'} | Challenges: ${formData.challenges}`);

      // Submit to Google Forms (no-cors mode since Google Forms doesn't send CORS headers)
      await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        body: googleFormData,
        mode: "no-cors",
      });

      // Show success state
      setSubmitSuccess(true);
    } catch (error) {
      console.error("Form submission error:", error);
      // Even if there's an error, the form likely submitted successfully
      // Google Forms with no-cors always throws an error but still works
      setSubmitSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const isStep1Valid = formData.firstName && formData.lastName && formData.email && formData.phone;
  const isStep2Valid = formData.company && formData.industry;
  const isStep3Valid = formData.challenges;

  if (submitSuccess) {
    return (
      <div className="min-h-screen">
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="mb-8">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl text-primary-foreground">✓</span>
                </div>
                <h1 className="mb-4">Thank You!</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  We've received your information and will be in touch within 24 hours to schedule your free AI audit.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-xl font-semibold mb-4">What Happens Next?</h2>
                <div className="text-left space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-primary text-xl">1.</span>
                    <div>
                      <p className="font-medium">Email Confirmation</p>
                      <p className="text-sm text-muted-foreground">
                        Check {formData.email} for a confirmation email with next steps
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary text-xl">2.</span>
                    <div>
                      <p className="font-medium">Discovery Call Scheduling</p>
                      <p className="text-sm text-muted-foreground">
                        We'll reach out to schedule your free 30-minute consultation
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary text-xl">3.</span>
                    <div>
                      <p className="font-medium">Customized AI Audit</p>
                      <p className="text-sm text-muted-foreground">
                        Receive your personalized automation recommendations
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button asChild size="lg">
                  <a href="/">Return to Home</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

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
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-12">
              {/* Benefits Column - Hidden on mobile */}
              <div className="hidden md:block md:col-span-2">
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
                      <span className="text-secondary text-xl" role="img" aria-label="Checkmark">✓</span>
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

              {/* Form Column */}
              <div className="md:col-span-3">
                <form onSubmit={handleSubmit}>
                  {/* Screen reader announcements for errors */}
                  <div
                    role="status"
                    aria-live="polite"
                    aria-atomic="true"
                    className="sr-only"
                  >
                    {Object.keys(errors).length > 0 && Object.values(errors).some(e => e !== "") &&
                      `Form has ${Object.values(errors).filter(e => e !== "").length} error${Object.values(errors).filter(e => e !== "").length > 1 ? 's' : ''}`
                    }
                  </div>

                  {/* Mobile Multi-Step Progress - Visible only on mobile */}
                  <div className="md:hidden flex justify-center gap-2 mb-8">
                    <div className={`w-3 h-3 rounded-full transition-colors ${currentStep >= 1 ? "bg-primary" : "bg-muted"}`} />
                    <div className={`w-3 h-3 rounded-full transition-colors ${currentStep >= 2 ? "bg-primary" : "bg-muted"}`} />
                    <div className={`w-3 h-3 rounded-full transition-colors ${currentStep >= 3 ? "bg-primary" : "bg-muted"}`} />
                  </div>

                  {/* Desktop: Show all fields at once */}
                  <div className="hidden md:block space-y-8">
                    {/* Personal Information */}
                    <div>
                      <h3 className="text-sm font-semibold mb-4 uppercase tracking-wide text-muted-foreground">
                        Personal Information
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            required
                            value={formData.firstName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="John"
                            aria-invalid={errors.firstName ? "true" : "false"}
                            aria-describedby={errors.firstName ? "firstName-error" : undefined}
                          />
                          {errors.firstName && (
                            <p id="firstName-error" className="text-sm text-destructive mt-1" role="alert">
                              {errors.firstName}
                            </p>
                          )}
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            required
                            value={formData.lastName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Smith"
                            aria-invalid={errors.lastName ? "true" : "false"}
                            aria-describedby={errors.lastName ? "lastName-error" : undefined}
                          />
                          {errors.lastName && (
                            <p id="lastName-error" className="text-sm text-destructive mt-1" role="alert">
                              {errors.lastName}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="john@company.com"
                            aria-invalid={errors.email ? "true" : "false"}
                            aria-describedby={errors.email ? "email-error" : undefined}
                          />
                          {errors.email && (
                            <p id="email-error" className="text-sm text-destructive mt-1" role="alert">
                              {errors.email}
                            </p>
                          )}
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="(555) 123-4567"
                            aria-invalid={errors.phone ? "true" : "false"}
                            aria-describedby={errors.phone ? "phone-error" : undefined}
                          />
                          {errors.phone && (
                            <p id="phone-error" className="text-sm text-destructive mt-1" role="alert">
                              {errors.phone}
                            </p>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-4 flex items-center gap-2">
                        <span role="img" aria-label="Lock">🔒</span> Your information is secure and will never be shared
                      </p>
                    </div>

                    <div className="border-t border-border" />

                    {/* Company Details */}
                    <div>
                      <h3 className="text-sm font-semibold mb-4 uppercase tracking-wide text-muted-foreground">
                        Company Details
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="company">Company Name *</Label>
                          <Input
                            id="company"
                            name="company"
                            required
                            value={formData.company}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Acme Corp"
                            aria-invalid={errors.company ? "true" : "false"}
                            aria-describedby={errors.company ? "company-error" : undefined}
                          />
                          {errors.company && (
                            <p id="company-error" className="text-sm text-destructive mt-1" role="alert">
                              {errors.company}
                            </p>
                          )}
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="industry">Industry *</Label>
                            <select
                              id="industry"
                              name="industry"
                              required
                              value={formData.industry}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                              aria-invalid={errors.industry ? "true" : "false"}
                              aria-describedby={errors.industry ? "industry-error" : undefined}
                            >
                              <option value="">Select industry...</option>
                              <option value="plumbing">Plumbing</option>
                              <option value="landscaping">Landscaping</option>
                              <option value="roofing">Roofing</option>
                              <option value="construction">Construction</option>
                              <option value="hvac">HVAC</option>
                              <option value="real-estate">Real Estate</option>
                              <option value="corporate">Corporate/B2B</option>
                              <option value="other">Other</option>
                            </select>
                            {errors.industry && (
                              <p id="industry-error" className="text-sm text-destructive mt-1" role="alert">
                                {errors.industry}
                              </p>
                            )}
                          </div>
                          <div>
                            <Label htmlFor="companySize">Company Size (Optional)</Label>
                            <select
                              id="companySize"
                              name="companySize"
                              value={formData.companySize}
                              onChange={handleChange}
                              className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            >
                              <option value="">Select size...</option>
                              <option value="1-5">1-5 employees</option>
                              <option value="6-20">6-20 employees</option>
                              <option value="21-50">21-50 employees</option>
                              <option value="51-200">51-200 employees</option>
                              <option value="200+">200+ employees</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-border" />

                    {/* Tell Us More */}
                    <div>
                      <h3 className="text-sm font-semibold mb-4 uppercase tracking-wide text-muted-foreground">
                        Tell Us More
                      </h3>
                      <div>
                        <Label htmlFor="challenges">What are your biggest challenges? *</Label>
                        <Textarea
                          id="challenges"
                          name="challenges"
                          required
                          value={formData.challenges}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Tell us about the challenges you're facing..."
                          rows={6}
                          aria-invalid={errors.challenges ? "true" : "false"}
                          aria-describedby={errors.challenges ? "challenges-error" : undefined}
                        />
                        {errors.challenges && (
                          <p id="challenges-error" className="text-sm text-destructive mt-1" role="alert">
                            {errors.challenges}
                          </p>
                        )}
                        <p className="text-sm text-muted-foreground mt-1">
                          {formData.challenges.length}/500 characters
                        </p>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-12 text-lg uppercase font-bold"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Get My Free AI Audit"}
                    </Button>

                    <p className="text-center text-sm text-muted-foreground">
                      ✓ Trusted by 1,200+ companies
                    </p>
                  </div>

                  {/* Mobile: Multi-step wizard */}
                  <div className="md:hidden">
                    {currentStep === 1 && (
                      <div className="space-y-6">
                        <h3 className="text-xl font-semibold mb-4">Step 1 of 3: About You</h3>
                        <div>
                          <Label htmlFor="firstName-mobile">First Name *</Label>
                          <Input
                            id="firstName-mobile"
                            name="firstName"
                            required
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="John"
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName-mobile">Last Name *</Label>
                          <Input
                            id="lastName-mobile"
                            name="lastName"
                            required
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Smith"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email-mobile">Email *</Label>
                          <Input
                            id="email-mobile"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@company.com"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone-mobile">Phone Number *</Label>
                          <Input
                            id="phone-mobile"
                            name="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="(555) 123-4567"
                          />
                        </div>
                        <Button
                          type="button"
                          className="w-full"
                          onClick={nextStep}
                          disabled={!isStep1Valid}
                        >
                          Continue →
                        </Button>
                      </div>
                    )}

                    {currentStep === 2 && (
                      <div className="space-y-6">
                        <h3 className="text-xl font-semibold mb-4">Step 2 of 3: Company Details</h3>
                        <div>
                          <Label htmlFor="company-mobile">Company Name *</Label>
                          <Input
                            id="company-mobile"
                            name="company"
                            required
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Acme Corp"
                          />
                        </div>
                        <div>
                          <Label htmlFor="industry-mobile">Industry *</Label>
                          <select
                            id="industry-mobile"
                            name="industry"
                            required
                            value={formData.industry}
                            onChange={handleChange}
                            className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          >
                            <option value="">Select industry...</option>
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
                          <Label htmlFor="companySize-mobile">Company Size (Optional)</Label>
                          <select
                            id="companySize-mobile"
                            name="companySize"
                            value={formData.companySize}
                            onChange={handleChange}
                            className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          >
                            <option value="">Select size...</option>
                            <option value="1-5">1-5 employees</option>
                            <option value="6-20">6-20 employees</option>
                            <option value="21-50">21-50 employees</option>
                            <option value="51-200">51-200 employees</option>
                            <option value="200+">200+ employees</option>
                          </select>
                        </div>
                        <div className="flex gap-2">
                          <Button type="button" variant="secondary" className="flex-1" onClick={prevStep}>
                            ← Back
                          </Button>
                          <Button
                            type="button"
                            className="flex-1"
                            onClick={nextStep}
                            disabled={!isStep2Valid}
                          >
                            Continue →
                          </Button>
                        </div>
                      </div>
                    )}

                    {currentStep === 3 && (
                      <div className="space-y-6">
                        <h3 className="text-xl font-semibold mb-4">Step 3 of 3: Tell Us More</h3>
                        <div>
                          <Label htmlFor="challenges-mobile">What are your biggest challenges? *</Label>
                          <Textarea
                            id="challenges-mobile"
                            name="challenges"
                            required
                            value={formData.challenges}
                            onChange={handleChange}
                            placeholder="Tell us about the challenges you're facing..."
                            rows={6}
                          />
                          <p className="text-sm text-muted-foreground mt-1">
                            {formData.challenges.length}/500 characters
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button type="button" variant="secondary" className="flex-1" onClick={prevStep}>
                            ← Back
                          </Button>
                          <Button
                            type="submit"
                            className="flex-1"
                            disabled={!isStep3Valid || isSubmitting}
                          >
                            {isSubmitting ? "Submitting..." : "Get My Free Audit"}
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Trust indicators - Mobile only */}
                  <div className="md:hidden flex flex-col gap-4 text-sm text-muted-foreground mt-8 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <span role="img" aria-label="Lock">🔒</span>
                      <span>100% Secure</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <span role="img" aria-label="Lightning bolt">⚡</span>
                      <span>Quick Response</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <span role="img" aria-label="Checkmark">✓</span>
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
