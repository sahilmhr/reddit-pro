import {
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  MessageSquare,
  Users,
  Zap,
} from "lucide-react";

const stats = [
  {
    name: "Total Posts",
    value: "2,543",
    change: "+12.5%",
    changeType: "increase",
    icon: MessageSquare,
  },
  {
    name: "Engagement Rate",
    value: "8.2%",
    change: "+2.3%",
    changeType: "increase",
    icon: Zap,
  },
  {
    name: "Active Accounts",
    value: "12",
    change: "+2",
    changeType: "increase",
    icon: Users,
  },
  {
    name: "Scheduled Posts",
    value: "45",
    change: "-3",
    changeType: "decrease",
    icon: Clock,
  },
];

const recentActivity = [
  {
    id: 1,
    type: "post",
    title: "New post scheduled for r/technology",
    time: "2 hours ago",
    status: "scheduled",
  },
  {
    id: 2,
    type: "comment",
    title: "AI-generated comment on r/programming",
    time: "4 hours ago",
    status: "completed",
  },
  {
    id: 3,
    type: "account",
    title: "New Reddit account added",
    time: "6 hours ago",
    status: "completed",
  },
  {
    id: 4,
    type: "analytics",
    title: "Weekly engagement report generated",
    time: "1 day ago",
    status: "completed",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-white">Dashboard</h1>
        <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors">
          New Post
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="bg-gray-800 rounded-lg p-6 border border-gray-700"
          >
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-red-500/10">
                <stat.icon className="h-6 w-6 text-red-500" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-400">{stat.name}</p>
                <p className="text-2xl font-semibold text-white">
                  {stat.value}
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-center">
              {stat.changeType === "increase" ? (
                <ArrowUpRight className="h-4 w-4 text-green-500" />
              ) : (
                <ArrowDownRight className="h-4 w-4 text-red-500" />
              )}
              <span
                className={`ml-1 text-sm font-medium ${
                  stat.changeType === "increase"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-gray-800 rounded-lg border border-gray-700">
        <div className="px-6 py-4 border-b border-gray-700">
          <h2 className="text-lg font-medium text-white">Recent Activity</h2>
        </div>
        <div className="divide-y divide-gray-700">
          {recentActivity.map((activity) => (
            <div key={activity.id} className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-red-500/10">
                    {activity.type === "post" && (
                      <MessageSquare className="h-4 w-4 text-red-500" />
                    )}
                    {activity.type === "comment" && (
                      <MessageSquare className="h-4 w-4 text-red-500" />
                    )}
                    {activity.type === "account" && (
                      <Users className="h-4 w-4 text-red-500" />
                    )}
                    {activity.type === "analytics" && (
                      <Zap className="h-4 w-4 text-red-500" />
                    )}
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-white">
                      {activity.title}
                    </p>
                    <p className="text-sm text-gray-400">{activity.time}</p>
                  </div>
                </div>
                <span
                  className={`px-2 py-1 text-xs font-medium rounded-full ${
                    activity.status === "completed"
                      ? "bg-green-500/10 text-green-500"
                      : "bg-yellow-500/10 text-yellow-500"
                  }`}
                >
                  {activity.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
