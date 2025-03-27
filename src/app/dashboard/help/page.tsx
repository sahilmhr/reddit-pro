import { Book, MessageSquare, FileText, Video, Mail } from "lucide-react";

const helpResources = [
  {
    name: "Documentation",
    description: "Comprehensive guides and tutorials",
    icon: Book,
    href: "#docs",
  },
  {
    name: "Community Forum",
    description: "Connect with other RedditPro users",
    icon: MessageSquare,
    href: "#forum",
  },
  {
    name: "API Reference",
    description: "Technical documentation for developers",
    icon: FileText,
    href: "#api",
  },
  {
    name: "Video Tutorials",
    description: "Step-by-step video guides",
    icon: Video,
    href: "#tutorials",
  },
];

const faqs = [
  {
    question: "How do I connect my Reddit accounts?",
    answer:
      "To connect your Reddit accounts, go to the Accounts page and click 'Add Account'. Follow the authentication process to securely link your Reddit profile.",
  },
  {
    question: "What's the best time to post?",
    answer:
      "RedditPro analyzes your target subreddits to determine optimal posting times based on historical engagement data. We recommend using our scheduling feature to automate posts at these peak times.",
  },
  {
    question: "How does the AI comment generator work?",
    answer:
      "Our AI analyzes the context of posts and generates relevant, engaging comments based on your specified tone and style preferences. You can review and edit suggestions before posting.",
  },
  {
    question: "Is my account data secure?",
    answer:
      "Yes, we use industry-standard encryption and security measures to protect your data. All Reddit credentials are encrypted and stored securely.",
  },
];

export default function HelpPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-white">Help & Support</h1>
        <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors flex items-center">
          <Mail className="h-4 w-4 mr-2" />
          Contact Support
        </button>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {helpResources.map((resource) => (
          <div
            key={resource.name}
            className="bg-gray-800 rounded-lg border border-gray-700 p-6 hover:border-red-500/50 transition-colors cursor-pointer"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-red-500/10">
                <resource.icon className="h-6 w-6 text-red-500" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">
                  {resource.name}
                </h3>
                <p className="text-sm text-gray-400">{resource.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FAQs */}
      <div className="bg-gray-800 rounded-lg border border-gray-700">
        <div className="px-6 py-4 border-b border-gray-700">
          <h2 className="text-lg font-medium text-white">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="divide-y divide-gray-700">
          {faqs.map((faq, index) => (
            <div key={index} className="px-6 py-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-medium text-white">
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-gray-400">{faq.answer}</p>
                </div>
                <button className="text-gray-400 hover:text-white">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Support */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
        <h2 className="text-lg font-medium text-white mb-4">Need More Help?</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-full bg-red-500/10">
              <Mail className="h-6 w-6 text-red-500" />
            </div>
            <div>
              <h3 className="text-white">Email Support</h3>
              <p className="text-sm text-gray-400">support@redditpro.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-full bg-red-500/10">
              <MessageSquare className="h-6 w-6 text-red-500" />
            </div>
            <div>
              <h3 className="text-white">Live Chat</h3>
              <p className="text-sm text-gray-400">
                Available 24/7 for immediate assistance
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
