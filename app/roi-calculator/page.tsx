"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CTAButton } from "@/components/ui/cta-button";

export default function ROICalculator() {
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
      {/* HERO */}
      <section className="py-20 md:py-32 bg-section-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">
              AI Automation <span className="text-primary">ROI Calculator</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              See exactly how much time and money AI automation could save your business. Adjust the inputs below to get your personalized ROI estimate.
            </p>
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* INPUT SECTION */}
              <div>
                <h2 className="mb-8">Your Current Situation</h2>

                <div className="space-y-8">
                  {/* Hours per week */}
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <Label htmlFor="hoursPerWeek">Hours spent on repetitive tasks per week</Label>
                      <Badge variant="secondary" className="text-base px-3 py-1">
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
                      className="mb-2"
                    />
                    <p className="text-sm text-muted-foreground">
                      Include data entry, scheduling, follow-ups, reporting, etc.
                    </p>
                  </div>

                  {/* Hourly rate */}
                  <div>
                    <Label htmlFor="hourlyRate" className="mb-4 block">
                      Average hourly rate ($/hour)
                    </Label>
                    <Input
                      id="hourlyRate"
                      name="hourlyRate"
                      type="number"
                      value={inputs.hourlyRate}
                      onChange={handleInputChange}
                      className="text-lg h-12"
                      min={0}
                    />
                    <p className="text-sm text-muted-foreground mt-2">
                      Your team's average cost per hour
                    </p>
                  </div>

                  {/* Employee count */}
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <Label htmlFor="employeeCount">Number of employees affected</Label>
                      <Badge variant="secondary" className="text-base px-3 py-1">
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
                      className="mb-2"
                    />
                  </div>

                  {/* Leads per month */}
                  <div>
                    <Label htmlFor="leadsPerMonth" className="mb-4 block">
                      Leads received per month
                    </Label>
                    <Input
                      id="leadsPerMonth"
                      name="leadsPerMonth"
                      type="number"
                      value={inputs.leadsPerMonth}
                      onChange={handleInputChange}
                      className="text-lg h-12"
                      min={0}
                    />
                  </div>

                  {/* Conversion rate */}
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <Label htmlFor="leadConversionRate">Current lead conversion rate (%)</Label>
                      <Badge variant="secondary" className="text-base px-3 py-1">
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
                      className="mb-2"
                    />
                  </div>

                  {/* Average sale value */}
                  <div>
                    <Label htmlFor="averageSaleValue" className="mb-4 block">
                      Average sale value ($)
                    </Label>
                    <Input
                      id="averageSaleValue"
                      name="averageSaleValue"
                      type="number"
                      value={inputs.averageSaleValue}
                      onChange={handleInputChange}
                      className="text-lg h-12"
                      min={0}
                    />
                  </div>
                </div>
              </div>

              {/* RESULTS SECTION */}
              <div>
                <h2 className="mb-8">Your Potential ROI</h2>

                <div className="space-y-6">
                  {/* Key Metrics Cards */}
                  <Card className="border-primary">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>Time Savings</span>
                        <Badge className="bg-secondary text-secondary-foreground">Per Week</Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-4xl font-bold text-primary mb-2">
                        {results.weeklyTimeSavings} hours
                      </p>
                      <p className="text-muted-foreground">
                        Automated tasks free up your team for high-value work
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>Annual Cost Savings</span>
                        <Badge className="bg-secondary text-secondary-foreground">Per Year</Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-4xl font-bold text-primary mb-2">
                        ${results.annualTimeSavings.toLocaleString()}
                      </p>
                      <p className="text-muted-foreground">
                        Value of time saved on repetitive tasks
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>Additional Revenue</span>
                        <Badge className="bg-secondary text-secondary-foreground">Per Year</Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-4xl font-bold text-primary mb-2">
                        ${results.additionalRevenue.toLocaleString()}
                      </p>
                      <p className="text-muted-foreground">
                        From {results.additionalConversions} more annual conversions (85% improvement)
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-primary text-primary-foreground border-primary">
                    <CardHeader>
                      <CardTitle>Total Annual Value</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-5xl font-bold mb-4">
                        ${results.totalAnnualSavings.toLocaleString()}
                      </p>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span>Estimated Investment:</span>
                          <span className="font-semibold">${results.estimatedInvestment.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Return on Investment:</span>
                          <span className="font-semibold text-2xl">{results.roi}%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Payback Period:</span>
                          <span className="font-semibold">{results.paybackMonths} months</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* CTA */}
                  <Card className="bg-section-alt border-0">
                    <CardContent className="pt-6 text-center">
                      <h3 className="mb-4">Want a Detailed Report?</h3>
                      <p className="text-muted-foreground mb-6">
                        Schedule a free AI audit and we'll create a customized ROI report for your specific business.
                      </p>
                      <CTAButton href="/analysis" className="w-full">
                        Get My Detailed ROI Report
                      </CTAButton>
                      <p className="text-sm text-muted-foreground mt-4">
                        <span role="img" aria-label="Lock">🔒</span> No obligation • Free consultation
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="py-12 bg-section-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm text-muted-foreground">
              * These are estimated projections based on industry averages and our client case studies. Actual results may vary depending on your specific business, industry, and implementation. The 85% conversion improvement is based on our documented case study with a home improvement company.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
