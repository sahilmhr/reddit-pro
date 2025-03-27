import {
  MessageSquare,
  Send,
  RefreshCw,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react";

const recentComments = [
  {
    id: 1,
    post: "The Future of AI in Healthcare",
    subreddit: "r/technology",
    comment:
      "This is fascinating! The potential applications in early disease detection are particularly promising. I'd love to see more research on how this could improve patient outcomes.",
    engagement: {
      upvotes: 12,
      replies: 3,
    },
    status: "active",
  },
  {
    id: 2,
    post: "Best Practices for React Development",
    subreddit: "r/programming",
    comment:
      "Great points about component composition! I've found that using custom hooks for shared logic has significantly improved our code reusability.",
    engagement: {
      upvotes: 8,
      replies: 2,
    },
    status: "active",
  },
  {
    id: 3,
    post: "The Rise of Electric Vehicles",
    subreddit: "r/futurology",
    comment:
      "The infrastructure development for EVs is crucial. I'm curious about how this will impact urban planning and energy distribution networks.",
    engagement: {
      upvotes: 15,
      replies: 5,
    },
    status: "active",
  },
];

export default function CommentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-white">
          AI Comment Generator
        </h1>
        <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors">
          New Comment
        </button>
      </div>

      {/* Comment Generator */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
        <h2 className="text-lg font-medium text-white mb-4">
          Generate Comment
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Post URL or Content
            </label>
            <textarea
              className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
              rows={4}
              placeholder="Paste the post content or URL here..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Tone and Style
            </label>
            <div className="flex space-x-2">
              {["Professional", "Casual", "Friendly", "Technical"].map(
                (tone) => (
                  <button
                    key={tone}
                    className="px-3 py-1 text-sm rounded-md border border-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    {tone}
                  </button>
                )
              )}
            </div>
          </div>
          <div className="flex justify-end">
            <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors flex items-center">
              <RefreshCw className="h-4 w-4 mr-2" />
              Generate Comment
            </button>
          </div>
        </div>
      </div>

      {/* Recent Comments */}
      <div className="bg-gray-800 rounded-lg border border-gray-700">
        <div className="px-6 py-4 border-b border-gray-700">
          <h2 className="text-lg font-medium text-white">Recent Comments</h2>
        </div>
        <div className="divide-y divide-gray-700">
          {recentComments.map((comment) => (
            <div key={comment.id} className="px-6 py-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center text-sm text-gray-400 mb-2">
                    <span className="mr-4">{comment.subreddit}</span>
                    <span className="text-white">{comment.post}</span>
                  </div>
                  <p className="text-gray-300">{comment.comment}</p>
                  <div className="mt-4 flex items-center space-x-4">
                    <div className="flex items-center text-sm text-gray-400">
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      {comment.engagement.upvotes}
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      {comment.engagement.replies} replies
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-500/10 text-green-500">
                    {comment.status}
                  </span>
                  <button className="text-gray-400 hover:text-red-500">
                    <Send className="h-4 w-4" />
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
