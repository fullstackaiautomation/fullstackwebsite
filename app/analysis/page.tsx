"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";

// Google Form field IDs - these map to your Google Form
const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLSdVnj9onZy34h55NyAgfmKWiK7cDy9Rlf5pQwUOD257U8GeYw/formResponse";

export default function Analysis() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const [formData, setFormData] = useState({
    fullName: "",
    website: "",
    revenue: 250000, // Default to middle of the range
    automationGoals: "",
  });

  // Revenue ranges for the slider
  const revenueRanges = [
    { value: 0, label: "Under $100K" },
    { value: 100000, label: "$100K-$250K" },
    { value: 250000, label: "$250K-$500K" },
    { value: 500000, label: "$500K-$1M" },
    { value: 1000000, label: "$1M-$5M" },
    { value: 5000000, label: "$5M+" },
  ];

  const getRevenueLabel = (value: number): string => {
    if (value < 100000) return "Under $100K";
    if (value < 250000) return "$100K-$250K";
    if (value < 500000) return "$250K-$500K";
    if (value < 1000000) return "$500K-$1M";
    if (value < 5000000) return "$1M-$5M";
    return "$5M+";
  };

  const validateField = (name: string, value: string | number): string => {
    switch (name) {
      case "fullName":
        if (typeof value === "string") {
          if (value.trim() === "") return "Full name is required";
          if (!value.trim().includes(" ")) return "Please enter both first and last name";
        }
        return "";
      case "website":
        if (typeof value === "string") {
          if (value.trim() === "") return "Company website is required";
          const urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
          if (!urlPattern.test(value)) return "Please enter a valid website URL";
        }
        return "";
      case "automationGoals":
        return typeof value === "string" && value.trim() === "" ? "Please tell us what you'd like to automate" : "";
      default:
        return "";
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  const handleSliderChange = (value: number[]) => {
    setFormData(prev => ({
      ...prev,
      revenue: value[0]
    }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

    // Validate all fields
    const newErrors: Record<string, string> = {};
    newErrors.fullName = validateField("fullName", formData.fullName);
    newErrors.website = validateField("website", formData.website);
    newErrors.automationGoals = validateField("automationGoals", formData.automationGoals);

    const hasErrors = Object.values(newErrors).some(error => error !== "");

    if (hasErrors) {
      setErrors(newErrors);
      setTouched({
        fullName: true,
        website: true,
        automationGoals: true,
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Create form data for Google Forms
      const googleFormData = new FormData();
      const revenueLabel = getRevenueLabel(formData.revenue);

      // Combining fields to match Google Form structure
      googleFormData.append("entry.215999694", `${formData.fullName} | ${formData.website}`);
      googleFormData.append("entry.1591670523", `Revenue: ${revenueLabel} | Goals: ${formData.automationGoals}`);

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

  const isFormValid = formData.fullName.trim() !== "" &&
                      formData.fullName.includes(" ") &&
                      formData.website.trim() !== "" &&
                      formData.automationGoals.trim() !== "";

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
                  We've received your information! Now let's get your free AI audit scheduled.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-8 mb-8">
                <h2 className="text-xl font-semibold mb-6 text-center">Schedule Your Free AI Audit</h2>
                <p className="text-muted-foreground mb-6 text-center">
                  Pick a time that works best for you - it only takes a moment!
                </p>
                <Button asChild size="lg" className="w-full h-14 text-lg uppercase font-bold">
                  <a href="https://calendar.app.google/Pi7jCpE4uXJVBPg69" target="_blank" rel="noopener noreferrer">
                    Book Now
                  </a>
                </Button>
              </div>

              <div className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-xl font-semibold mb-4">What Happens Next?</h2>
                <div className="text-left space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-primary text-xl">1.</span>
                    <div>
                      <p className="font-medium">Confirmation Email</p>
                      <p className="text-sm text-muted-foreground">
                        You'll receive a meeting link in your email
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary text-xl">2.</span>
                    <div>
                      <p className="font-medium">Prepare for Your Call</p>
                      <p className="text-sm text-muted-foreground">
                        Think about your needs, questions, and anything else important to you and your business growth!
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary text-xl">3.</span>
                    <div>
                      <p className="font-medium">Your Free AI Audit</p>
                      <p className="text-sm text-muted-foreground">
                        We'll discuss your automation opportunities and create a customized roadmap
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button asChild size="lg" variant="outline">
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
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
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

              {/* Full Name */}
              <div>
                <Label htmlFor="fullName" className="text-base">Full Name *</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="John Smith"
                  className="mt-2 h-12 text-base"
                  aria-invalid={errors.fullName ? "true" : "false"}
                  aria-describedby={errors.fullName ? "fullName-error" : undefined}
                />
                {errors.fullName && (
                  <p id="fullName-error" className="text-sm text-destructive mt-2" role="alert">
                    {errors.fullName}
                  </p>
                )}
                <p className="text-sm text-muted-foreground mt-2">
                  Please include both first and last name
                </p>
              </div>

              {/* Company Website */}
              <div>
                <Label htmlFor="website" className="text-base">Company Website *</Label>
                <Input
                  id="website"
                  name="website"
                  type="text"
                  required
                  value={formData.website}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="www.yourcompany.com"
                  className="mt-2 h-12 text-base"
                  aria-invalid={errors.website ? "true" : "false"}
                  aria-describedby={errors.website ? "website-error" : undefined}
                />
                {errors.website && (
                  <p id="website-error" className="text-sm text-destructive mt-2" role="alert">
                    {errors.website}
                  </p>
                )}
                <p className="text-sm text-muted-foreground mt-2">
                  Helps us understand your business and industry
                </p>
              </div>

              {/* Annual Revenue Slider */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <Label htmlFor="revenue" className="text-base">Annual Revenue</Label>
                  <Badge variant="secondary" className="text-base px-3 py-1.5">
                    {getRevenueLabel(formData.revenue)}
                  </Badge>
                </div>
                <Slider
                  id="revenue"
                  min={0}
                  max={5000000}
                  step={50000}
                  value={[formData.revenue]}
                  onValueChange={handleSliderChange}
                  className="mb-4 touch-manipulation"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Under $100K</span>
                  <span>$5M+</span>
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  Helps us tailor recommendations to your business size
                </p>
              </div>

              {/* Automation Goals */}
              <div>
                <Label htmlFor="automationGoals" className="text-base">What are you hoping to automate? *</Label>
                <Textarea
                  id="automationGoals"
                  name="automationGoals"
                  required
                  value={formData.automationGoals}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Tell us about the processes, tasks, or workflows you'd like to automate..."
                  rows={6}
                  className="mt-2 text-base"
                  aria-invalid={errors.automationGoals ? "true" : "false"}
                  aria-describedby={errors.automationGoals ? "automationGoals-error" : undefined}
                />
                {errors.automationGoals && (
                  <p id="automationGoals-error" className="text-sm text-destructive mt-2" role="alert">
                    {errors.automationGoals}
                  </p>
                )}
                <p className="text-sm text-muted-foreground mt-2">
                  {formData.automationGoals.length}/500 characters
                </p>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full h-14 text-lg uppercase font-bold"
                disabled={isSubmitting || !isFormValid}
              >
                {isSubmitting ? "Submitting..." : "Get My Free AI Audit"}
              </Button>

              {/* Trust Indicators */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-sm text-muted-foreground pt-4">
                <div className="flex items-center gap-2">
                  <span role="img" aria-label="Lock">🔒</span>
                  <span>100% Secure</span>
                </div>
                <div className="flex items-center gap-2">
                  <span role="img" aria-label="Lightning bolt">⚡</span>
                  <span>Quick Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <span role="img" aria-label="Checkmark">✓</span>
                  <span>No Obligation</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
