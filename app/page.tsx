"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CTAButton } from "@/components/ui/cta-button";
import Image from "next/image";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  // ROI Calculator state - Full version
  const [inputs, setInputs] = useState({
    hoursPerWeek: 20,
    hourlyRate: 50,
    employeeCount: 5,
    leadsPerMonth: 100,
    leadConversionRate: 10,
    averageSaleValue: 5000,
  });

  // Calculate ROI metrics
  const calculateROI = () => {
    // Time savings calculation
    const weeklyTimeCost = inputs.hoursPerWeek * inputs.hourlyRate * inputs.employeeCount;
    const annualTimeSavings = weeklyTimeCost * 52;
    const timeAutomated = inputs.hoursPerWeek * 0.7; // 70% automation efficiency

    // Lead conversion improvement (assume 85% increase based on case studies)
    const currentConversions = (inputs.leadsPerMonth * inputs.leadConversionRate) / 100;
    const improvedConversions = currentConversions * 1.85;
    const additionalConversions = improvedConversions - currentConversions;
    const additionalRevenue = additionalConversions * inputs.averageSaleValue * 12;

    // Total ROI
    const totalAnnualSavings = annualTimeSavings + additionalRevenue;

    // Estimated investment (mid-range)
    const estimatedInvestment = 27500; // $15K-$40K midpoint
    const roi = ((totalAnnualSavings - estimatedInvestment) / estimatedInvestment) * 100;
    const paybackMonths = (estimatedInvestment / (totalAnnualSavings / 12)).toFixed(1);

    return {
      weeklyTimeSavings: timeAutomated.toFixed(1),
      annualTimeSavings: Math.round(annualTimeSavings),
      additionalConversions: Math.round(additionalConversions * 12), // Annual
      additionalRevenue: Math.round(additionalRevenue),
      totalAnnualSavings: Math.round(totalAnnualSavings),
      roi: Math.round(roi),
      paybackMonths,
      estimatedInvestment,
    };
  };

  const results = calculateROI();

  const handleSliderChange = (name: string, value: number[]) => {
    setInputs(prev => ({ ...prev, [name]: value[0] }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: parseFloat(value) || 0 }));
  };

  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section className="py-20 md:py-32 bg-section-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">
              Stop Wasting Time on{" "}
              <span className="text-primary">Monotonous Work</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-3xl mx-auto">
              While your competitors are using AI to work 3X faster and produce 3X the results,
              are you being left behind? Our AI consulting team delivers ROI-driven automation
              systems that transform how your business operates.
            </p>
            <div className="flex justify-center">
              <CTAButton>
                GET MY FREE AI AUDIT
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE SECTION */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">
              Real People Building <span className="text-primary">Real Solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We're not AI creating AI—we're a team of experienced humans who understand your struggles
              with implementing artificial intelligence. We've seen businesses waste time and money on
              AI tools that don't deliver results. That's why we built Full Stack AI Automation: to
              bridge the gap between AI potential and real-world business value.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-colors">
              <h3 className="mb-3">Human-Centered Approach</h3>
              <p className="text-muted-foreground">
                Our consultants work directly with your team to understand your unique challenges
                and design custom AI solutions that actually fit your workflow.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-colors">
              <h3 className="mb-3">Results-Driven Strategy</h3>
              <p className="text-muted-foreground">
                We don't sell you technology for technology's sake. Every automation we implement
                is designed to deliver measurable ROI and time savings.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-colors">
              <h3 className="mb-3">Partnership, Not Just Service</h3>
              <p className="text-muted-foreground">
                We become an extension of your team, providing ongoing support and optimization
                to ensure your AI systems continue delivering value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS SECTION */}
      <section className="py-20 bg-section-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">
              Our <span className="text-primary">Solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Customized AI automation systems designed to eliminate monotonous work and amplify your team's productivity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "AI-Enabled CRM Automation",
                description: "Automatically capture leads, follow up with prospects, and manage your sales pipeline without lifting a finger. Increase follow-up rates by 85%.",
                link: "/solutions#crm-automation"
              },
              {
                title: "Workflow Automation",
                description: "Eliminate repetitive tasks like data entry, scheduling, and reporting. Save 20+ hours per week for your team to focus on high-value work.",
                link: "/solutions#workflow-automation"
              },
              {
                title: "Customer Communication Systems",
                description: "Intelligent chatbots and automated follow-up systems that keep customers engaged while reducing response time by 70%.",
                link: "/solutions#customer-communication"
              },
              {
                title: "AI-Powered Analytics",
                description: "Transform raw data into actionable insights. Get real-time dashboards and predictive analytics to make smarter business decisions.",
                link: "/solutions#data-analytics"
              },
              {
                title: "Operations Optimization",
                description: "Streamline your entire operation from scheduling to invoicing. Perfect for service companies like plumbing, landscaping, and roofing.",
                link: "/solutions#operations"
              },
              {
                title: "Custom AI Solutions",
                description: "Every business is unique. We design and build custom automation systems tailored specifically to your industry and workflow.",
                link: "/solutions#custom"
              }
            ].map((solution, index) => (
              <Link key={index} href={solution.link}>
                <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all cursor-pointer h-full">
                  <h3 className="mb-3">{solution.title}</h3>
                  <p className="text-muted-foreground mb-4">{solution.description}</p>
                  <span className="text-primary font-medium">Learn More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS SECTION */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">
              Real <span className="text-primary">Results</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              See how businesses like yours are transforming their operations with AI automation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                iconSrc: "/icons/85-percent.svg",
                iconAlt: "85% Increase",
                title: "85% Increase in Follow-Up Rate",
                description: "A regional home improvement company automated their lead follow-up process, converting 3X more prospects into customers.",
                link: "/results#case-study-1"
              },
              {
                iconSrc: "/icons/20-plus.svg",
                iconAlt: "20+ Hours",
                title: "20+ Hours Saved Per Week",
                description: "A plumbing service eliminated manual scheduling and invoicing, freeing up time for growth and customer service.",
                link: "/results#case-study-2"
              },
              {
                iconSrc: "/icons/50k.svg",
                iconAlt: "$50K Savings",
                title: "$50K+ Annual Savings",
                description: "A corporate client reduced operational costs by automating data entry and report generation across departments.",
                link: "/results#case-study-3"
              }
            ].map((result, index) => (
              <Link key={index} href={result.link}>
                <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all cursor-pointer h-full">
                  <div className="mb-4 w-16 h-16 relative">
                    <Image
                      src={result.iconSrc}
                      alt={result.iconAlt}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="mb-3">{result.title}</h3>
                  <p className="text-muted-foreground mb-4">{result.description}</p>
                  <span className="text-primary font-medium">Read Case Study →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ROI CALCULATOR */}
      <section className="py-20 bg-section-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">
                AI Automation <span className="text-primary">ROI Calculator</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                See exactly how much time and money AI automation could save your business
              </p>
            </div>

            {/* OUTPUT CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mb-12">
              {/* Time Savings Card */}
              <Card className="border-primary">
                <CardHeader className="pb-3 md:pb-6">
                  <CardTitle className="text-sm md:text-base">Time Savings</CardTitle>
                  <Badge className="bg-secondary text-secondary-foreground w-fit text-xs md:text-sm">Per Week</Badge>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-2xl md:text-3xl font-bold text-primary mb-2">
                    {results.weeklyTimeSavings} hours
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Automated tasks free up your team
                  </p>
                </CardContent>
              </Card>

              {/* Annual Cost Savings Card */}
              <Card>
                <CardHeader className="pb-3 md:pb-6">
                  <CardTitle className="text-sm md:text-base">Annual Cost Savings</CardTitle>
                  <Badge className="bg-secondary text-secondary-foreground w-fit text-xs md:text-sm">Per Year</Badge>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-2xl md:text-3xl font-bold text-primary mb-2">
                    ${results.annualTimeSavings.toLocaleString()}
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Value of time saved
                  </p>
                </CardContent>
              </Card>

              {/* Additional Revenue Card */}
              <Card>
                <CardHeader className="pb-3 md:pb-6">
                  <CardTitle className="text-sm md:text-base">Additional Revenue</CardTitle>
                  <Badge className="bg-secondary text-secondary-foreground w-fit text-xs md:text-sm">Per Year</Badge>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-2xl md:text-3xl font-bold text-primary mb-2">
                    ${results.additionalRevenue.toLocaleString()}
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    From {results.additionalConversions} more conversions
                  </p>
                </CardContent>
              </Card>

              {/* Total Annual Value Card - Prominent on all screen sizes */}
              <Card className="bg-primary text-primary-foreground border-primary md:row-span-1">
                <CardHeader className="pb-3 md:pb-6">
                  <CardTitle className="text-sm md:text-base">Total Annual Value</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-3xl md:text-4xl font-bold mb-3">
                    ${results.totalAnnualSavings.toLocaleString()}
                  </p>
                  <div className="space-y-1.5 text-xs md:text-sm">
                    <div className="flex justify-between items-center">
                      <span>Investment:</span>
                      <span className="font-semibold">${results.estimatedInvestment.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>ROI:</span>
                      <span className="font-semibold text-lg md:text-xl">{results.roi}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Payback:</span>
                      <span className="font-semibold">{results.paybackMonths} mo</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* INPUT SLIDERS */}
            <div className="bg-card p-4 md:p-8 rounded-lg border border-border">
              <h3 className="mb-6 md:mb-8 text-center">Adjust Your Inputs</h3>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 md:gap-y-8">
                {/* Hours per week */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4">
                    <Label htmlFor="hoursPerWeek" className="text-sm md:text-base">
                      Hours spent on repetitive tasks per week
                    </Label>
                    <Badge variant="secondary" className="text-sm md:text-base px-3 py-1.5 w-fit">
                      {inputs.hoursPerWeek} hours
                    </Badge>
                  </div>
                  <Slider
                    id="hoursPerWeek"
                    min={1}
                    max={60}
                    step={1}
                    value={[inputs.hoursPerWeek]}
                    onValueChange={(value) => handleSliderChange("hoursPerWeek", value)}
                    className="mb-2 touch-manipulation"
                  />
                  <p className="text-xs md:text-sm text-muted-foreground mt-2">
                    Include data entry, scheduling, follow-ups, reporting, etc.
                  </p>
                </div>

                {/* Hourly rate */}
                <div>
                  <Label htmlFor="hourlyRate" className="mb-3 md:mb-4 block text-sm md:text-base">
                    Average hourly rate ($/hour)
                  </Label>
                  <Input
                    id="hourlyRate"
                    name="hourlyRate"
                    type="number"
                    value={inputs.hourlyRate}
                    onChange={handleInputChange}
                    className="text-base md:text-lg h-12 md:h-14 touch-manipulation"
                    min={0}
                  />
                  <p className="text-xs md:text-sm text-muted-foreground mt-2">
                    Your team's average cost per hour
                  </p>
                </div>

                {/* Employee count */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4">
                    <Label htmlFor="employeeCount" className="text-sm md:text-base">
                      Number of employees affected
                    </Label>
                    <Badge variant="secondary" className="text-sm md:text-base px-3 py-1.5 w-fit">
                      {inputs.employeeCount} people
                    </Badge>
                  </div>
                  <Slider
                    id="employeeCount"
                    min={1}
                    max={50}
                    step={1}
                    value={[inputs.employeeCount]}
                    onValueChange={(value) => handleSliderChange("employeeCount", value)}
                    className="mb-2 touch-manipulation"
                  />
                </div>

                {/* Leads per month */}
                <div>
                  <Label htmlFor="leadsPerMonth" className="mb-3 md:mb-4 block text-sm md:text-base">
                    Leads received per month
                  </Label>
                  <Input
                    id="leadsPerMonth"
                    name="leadsPerMonth"
                    type="number"
                    value={inputs.leadsPerMonth}
                    onChange={handleInputChange}
                    className="text-base md:text-lg h-12 md:h-14 touch-manipulation"
                    min={0}
                  />
                </div>

                {/* Conversion rate */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4">
                    <Label htmlFor="leadConversionRate" className="text-sm md:text-base">
                      Current lead conversion rate (%)
                    </Label>
                    <Badge variant="secondary" className="text-sm md:text-base px-3 py-1.5 w-fit">
                      {inputs.leadConversionRate}%
                    </Badge>
                  </div>
                  <Slider
                    id="leadConversionRate"
                    min={1}
                    max={50}
                    step={1}
                    value={[inputs.leadConversionRate]}
                    onValueChange={(value) => handleSliderChange("leadConversionRate", value)}
                    className="mb-2 touch-manipulation"
                  />
                </div>

                {/* Average sale value */}
                <div>
                  <Label htmlFor="averageSaleValue" className="mb-3 md:mb-4 block text-sm md:text-base">
                    Average sale value ($)
                  </Label>
                  <Input
                    id="averageSaleValue"
                    name="averageSaleValue"
                    type="number"
                    value={inputs.averageSaleValue}
                    onChange={handleInputChange}
                    className="text-base md:text-lg h-12 md:h-14 touch-manipulation"
                    min={0}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">
              Our <span className="text-primary">Process</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              From discovery to deployment, here's how we transform your business with AI automation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              {
                number: "1",
                title: "Discovery Meeting",
                description: "We start with a Free AI Audit call to understand your business, identify bottlenecks, and explore automation opportunities."
              },
              {
                number: "2",
                title: "Strategy & Planning",
                description: "Our team designs a custom automation roadmap tailored to your workflow, with clear ROI projections and timelines."
              },
              {
                number: "3",
                title: "Implementation",
                description: "We build, test, and deploy your AI systems with minimal disruption to your operations. Your team gets full training and support."
              },
              {
                number: "4",
                title: "Optimization & Support",
                description: "We continuously monitor performance, gather feedback, and refine your systems to ensure maximum value and efficiency."
              }
            ].map((step, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-border">
                <div className="text-4xl font-bold text-primary mb-4">{step.number}</div>
                <h3 className="mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/process">
              <Button variant="secondary" size="lg">
                View Detailed Timeline
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-20 bg-section-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">What Our Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                text: "Full Stack AI Automation transformed how we operate. We went from drowning in paperwork to having a streamlined system that runs itself. Our follow-up rate has never been higher.",
                author: "Mike Johnson",
                role: "Owner, Johnson's Plumbing Services"
              },
              {
                text: "I was skeptical about AI until I met this team. They took the time to understand our business and created a solution that actually works. We're saving 20 hours a week on admin tasks alone.",
                author: "Sarah Chen",
                role: "Operations Manager, GreenScape Landscaping"
              },
              {
                text: "Finally, an AI solution that delivers real ROI. The team at Full Stack AI didn't just sell us software—they became our partners in growth. Our efficiency has tripled.",
                author: "David Martinez",
                role: "CEO, Martinez Roofing & Construction"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-border">
                <p className="text-muted-foreground italic mb-4">"{testimonial.text}"</p>
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-4">Ready to Work 3X Faster?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get your Free AI Audit and discover how much time and money you could be saving.
            </p>
            <CTAButton>
              Schedule Your Discovery Meeting
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
