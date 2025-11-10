import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section className="py-20 md:py-32">
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
              <Link href="/analysis">
                <Button size="lg" className="uppercase font-bold">
                  GET MY FREE AI AUDIT
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE SECTION */}
      <section className="py-20 bg-section-alt">
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
              <div className="text-4xl mb-4">👥</div>
              <h3 className="mb-3">Human-Centered Approach</h3>
              <p className="text-muted-foreground">
                Our consultants work directly with your team to understand your unique challenges
                and design custom AI solutions that actually fit your workflow.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-colors">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="mb-3">Results-Driven Strategy</h3>
              <p className="text-muted-foreground">
                We don't sell you technology for technology's sake. Every automation we implement
                is designed to deliver measurable ROI and time savings.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-colors">
              <div className="text-4xl mb-4">🤝</div>
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
      <section className="py-20">
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
                icon: "📊",
                title: "AI-Enabled CRM Automation",
                description: "Automatically capture leads, follow up with prospects, and manage your sales pipeline without lifting a finger. Increase follow-up rates by 85%.",
                link: "/solutions#crm-automation"
              },
              {
                icon: "⚡",
                title: "Workflow Automation",
                description: "Eliminate repetitive tasks like data entry, scheduling, and reporting. Save 20+ hours per week for your team to focus on high-value work.",
                link: "/solutions#workflow-automation"
              },
              {
                icon: "💬",
                title: "Customer Communication Systems",
                description: "Intelligent chatbots and automated follow-up systems that keep customers engaged while reducing response time by 70%.",
                link: "/solutions#customer-communication"
              },
              {
                icon: "📈",
                title: "AI-Powered Analytics",
                description: "Transform raw data into actionable insights. Get real-time dashboards and predictive analytics to make smarter business decisions.",
                link: "/solutions#data-analytics"
              },
              {
                icon: "🔧",
                title: "Operations Optimization",
                description: "Streamline your entire operation from scheduling to invoicing. Perfect for service companies like plumbing, landscaping, and roofing.",
                link: "/solutions#operations"
              },
              {
                icon: "🎨",
                title: "Custom AI Solutions",
                description: "Every business is unique. We design and build custom automation systems tailored specifically to your industry and workflow.",
                link: "/solutions#custom"
              }
            ].map((solution, index) => (
              <Link key={index} href={solution.link}>
                <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all cursor-pointer h-full">
                  <div className="text-4xl mb-4">{solution.icon}</div>
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
      <section className="py-20 bg-section-alt">
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
                icon: "🏆",
                title: "85% Increase in Follow-Up Rate",
                description: "A regional home improvement company automated their lead follow-up process, converting 3X more prospects into customers.",
                link: "/results#case-study-1"
              },
              {
                icon: "⏱️",
                title: "20+ Hours Saved Per Week",
                description: "A plumbing service eliminated manual scheduling and invoicing, freeing up time for growth and customer service.",
                link: "/results#case-study-2"
              },
              {
                icon: "💰",
                title: "$50K+ Annual Savings",
                description: "A corporate client reduced operational costs by automating data entry and report generation across departments.",
                link: "/results#case-study-3"
              }
            ].map((result, index) => (
              <Link key={index} href={result.link}>
                <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all cursor-pointer h-full">
                  <div className="text-4xl mb-4">{result.icon}</div>
                  <h3 className="mb-3">{result.title}</h3>
                  <p className="text-muted-foreground mb-4">{result.description}</p>
                  <span className="text-primary font-medium">Read Case Study →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-20">
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

      {/* PROCESS SECTION */}
      <section className="py-20 bg-section-alt">
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

      {/* FINAL CTA SECTION */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-4">Ready to Work 3X Faster?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get your Free AI Audit and discover how much time and money you could be saving.
            </p>
            <Link href="/analysis">
              <Button size="lg" className="uppercase font-bold">
                Schedule Your Discovery Meeting
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
