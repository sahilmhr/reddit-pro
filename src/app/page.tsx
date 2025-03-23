import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Clock,
  MessageSquare,
  Shield,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-red-500">RedditPro</div>
          <div className="hidden md:flex space-x-8">
            <Link
              href="#features"
              className="hover:text-red-500 transition-colors"
            >
              Features
            </Link>
            <Link
              href="#testimonials"
              className="hover:text-red-500 transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="#pricing"
              className="hover:text-red-500 transition-colors"
            >
              Pricing
            </Link>
          </div>
          <Button className="bg-red-500 hover:bg-red-600">Get Started</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Optimize Your Reddit Engagement
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Maximize your Reddit presence with AI-powered posting optimization,
            smart scheduling, and engagement analytics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-500 hover:bg-red-600">
              Start Free Trial
              <ArrowRight className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-700">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gray-800/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Powerful Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Clock className="w-8 h-8" />}
              title="Smart Scheduling"
              description="Post at the perfect time based on subreddit analytics and engagement patterns."
            />
            <FeatureCard
              icon={<MessageSquare className="w-8 h-8" />}
              title="AI Comment Generator"
              description="Generate natural, engaging responses that match the post's context."
            />
            <FeatureCard
              icon={<Users className="w-8 h-8" />}
              title="Multi-Account Support"
              description="Manage multiple Reddit accounts from a single dashboard."
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8" />}
              title="Anti-Detection"
              description="Advanced protection with randomized delays and human-like behavior."
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8" />}
              title="Subreddit Monitoring"
              description="Track keywords and trending discussions in your target subreddits."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            What Our Users Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="RedditPro has completely transformed how I manage my Reddit presence. The scheduling feature alone has increased my engagement by 300%!"
              author="Sarah Johnson"
              role="Reddit Marketing Manager"
            />
            <TestimonialCard
              quote="The AI comment generator is incredible. It saves me hours of time while maintaining authentic engagement."
              author="Mike Chen"
              role="Community Manager"
            />
            <TestimonialCard
              quote="Best investment for Reddit marketing. The analytics and optimization features are game-changing."
              author="Alex Thompson"
              role="Digital Marketing Director"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-gray-800/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Simple Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              title="Starter"
              price="$29"
              features={[
                "5 Reddit Accounts",
                "Basic Scheduling",
                "Subreddit Analytics",
                "Email Support",
              ]}
              isPopular={false}
            />
            <PricingCard
              title="Professional"
              price="$79"
              features={[
                "15 Reddit Accounts",
                "Advanced Scheduling",
                "AI Comment Generator",
                "Priority Support",
                "API Access",
              ]}
              isPopular={true}
            />
            <PricingCard
              title="Enterprise"
              price="$199"
              features={[
                "Unlimited Accounts",
                "Custom Scheduling",
                "Advanced Analytics",
                "24/7 Support",
                "Custom Features",
              ]}
              isPopular={false}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-red-500 mb-4">RedditPro</h3>
              <p className="text-gray-400">
                Optimize your Reddit presence with AI-powered tools.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#features" className="hover:text-red-500">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="hover:text-red-500">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-500">
                    API
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-red-500">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-500">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-500">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-red-500">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-500">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-500">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 RedditPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-red-500 transition-colors">
      <div className="text-red-500 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function TestimonialCard({
  quote,
  author,
  role,
}: {
  quote: string;
  author: string;
  role: string;
}) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
      <p className="text-gray-300 mb-4">"{quote}"</p>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-gray-400 text-sm">{role}</p>
      </div>
    </div>
  );
}

function PricingCard({
  title,
  price,
  features,
  isPopular,
}: {
  title: string;
  price: string;
  features: string[];
  isPopular: boolean;
}) {
  return (
    <div
      className={`bg-gray-800 p-6 rounded-lg border ${
        isPopular ? "border-red-500" : "border-gray-700"
      }`}
    >
      {isPopular && (
        <div className="bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
          Most Popular
        </div>
      )}
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <div className="text-4xl font-bold mb-6">
        {price}
        <span className="text-lg text-gray-400">/month</span>
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg
              className="w-5 h-5 text-red-500 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <Button
        className={`w-full ${
          isPopular
            ? "bg-red-500 hover:bg-red-600"
            : "bg-gray-700 hover:bg-gray-600"
        }`}
      >
        Get Started
      </Button>
    </div>
  );
}
