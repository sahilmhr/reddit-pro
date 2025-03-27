import { TrendingUp, Users, MessageSquare, Clock } from "lucide-react";

const metrics = [
  {
    name: "Total Engagement",
    value: "2.4M",
    change: "+12.5%",
    trend: "up",
    icon: TrendingUp,
  },
  {
    name: "Active Subreddits",
    value: "156",
    change: "+8",
    trend: "up",
    icon: Users,
  },
  {
    name: "Comment Success Rate",
    value: "89%",
    change: "+2.3%",
    trend: "up",
    icon: MessageSquare,
  },
  {
    name: "Avg. Response Time",
    value: "2.5h",
    change: "-0.5h",
    trend: "up",
    icon: Clock,
  },
];

const topSubreddits = [
  {
    name: "r/technology",
    posts: 45,
    engagement: "1.2M",
    growth: "+15%",
  },
  {
    name: "r/programming",
    posts: 38,
    engagement: "980K",
    growth: "+12%",
  },
  {
    name: "r/startups",
    posts: 32,
    engagement: "750K",
    growth: "+8%",
  },
];

const timeRanges = ["24h", "7d", "30d", "90d"];

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-white">Analytics</h1>
        <div className="flex space-x-2">
          {timeRanges.map((range) => (
            <button
              key={range}
              className={`px-3 py-1 rounded-md text-sm font-medium ${
                range === "7d"
                  ? "bg-red-500 text-white"
                  : "bg-gray-800 text-gray-400 hover:text-white"
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <div
            key={metric.name}
            className="bg-gray-800 rounded-lg p-6 border border-gray-700"
          >
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-red-500/10">
                <metric.icon className="h-6 w-6 text-red-500" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-400">
                  {metric.name}
                </p>
                <div className="flex items-baseline">
                  <p className="text-2xl font-semibold text-white">
                    {metric.value}
                  </p>
                  <p
                    className={`ml-2 text-sm font-medium ${
                      metric.trend === "up" ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {metric.change}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Top Subreddits */}
      <div className="bg-gray-800 rounded-lg border border-gray-700">
        <div className="px-6 py-4 border-b border-gray-700">
          <h2 className="text-lg font-medium text-white">
            Top Performing Subreddits
          </h2>
        </div>
        <div className="divide-y divide-gray-700">
          {topSubreddits.map((subreddit) => (
            <div key={subreddit.name} className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-white">
                    {subreddit.name}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {subreddit.posts} posts
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-medium text-white">
                    {subreddit.engagement}
                  </p>
                  <p className="text-sm text-green-500">{subreddit.growth}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Placeholder for Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
          <h2 className="text-lg font-medium text-white mb-4">
            Engagement Over Time
          </h2>
          <div className="h-64 bg-gray-900 rounded-lg flex items-center justify-center">
            <p className="text-gray-400">Chart will be implemented here</p>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
          <h2 className="text-lg font-medium text-white mb-4">
            Subreddit Distribution
          </h2>
          <div className="h-64 bg-gray-900 rounded-lg flex items-center justify-center">
            <p className="text-gray-400">Chart will be implemented here</p>
          </div>
        </div>
      </div>
    </div>
  );
}
