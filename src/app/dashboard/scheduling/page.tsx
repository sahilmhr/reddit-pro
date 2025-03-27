import { Calendar, Clock, Plus, Trash2 } from "lucide-react";

const scheduledPosts = [
  {
    id: 1,
    title: "AI in Healthcare: The Future of Medicine",
    subreddit: "r/technology",
    scheduledTime: "2024-03-25T14:30:00",
    status: "scheduled",
  },
  {
    id: 2,
    title: "Best Practices for React Development",
    subreddit: "r/programming",
    scheduledTime: "2024-03-25T16:00:00",
    status: "scheduled",
  },
  {
    id: 3,
    title: "The Rise of Electric Vehicles",
    subreddit: "r/futurology",
    scheduledTime: "2024-03-26T09:00:00",
    status: "scheduled",
  },
];

export default function SchedulingPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-white">Post Scheduling</h1>
        <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors flex items-center">
          <Plus className="h-4 w-4 mr-2" />
          Schedule Post
        </button>
      </div>

      {/* Calendar View */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-medium text-white">Calendar View</h2>
          <div className="flex space-x-2">
            <button className="px-3 py-1 text-sm text-gray-300 hover:text-white">
              Week
            </button>
            <button className="px-3 py-1 text-sm bg-red-500 text-white rounded-md">
              Month
            </button>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-4">
          {/* Calendar header */}
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div
              key={day}
              className="text-center text-sm font-medium text-gray-400"
            >
              {day}
            </div>
          ))}
          {/* Calendar days */}
          {Array.from({ length: 35 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square border border-gray-700 rounded-lg p-2 hover:border-red-500 transition-colors cursor-pointer"
            >
              <div className="text-sm text-gray-400">{i + 1}</div>
              {i === 2 && (
                <div className="mt-1 text-xs bg-red-500/10 text-red-500 px-1 py-0.5 rounded">
                  2 posts
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Scheduled Posts */}
      <div className="bg-gray-800 rounded-lg border border-gray-700">
        <div className="px-6 py-4 border-b border-gray-700">
          <h2 className="text-lg font-medium text-white">Scheduled Posts</h2>
        </div>
        <div className="divide-y divide-gray-700">
          {scheduledPosts.map((post) => (
            <div key={post.id} className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-white">
                    {post.title}
                  </h3>
                  <div className="mt-1 flex items-center text-sm text-gray-400">
                    <span className="mr-4">{post.subreddit}</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{new Date(post.scheduledTime).toLocaleString()}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-500/10 text-yellow-500">
                    {post.status}
                  </span>
                  <button className="text-gray-400 hover:text-red-500">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
