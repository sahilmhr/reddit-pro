"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Calendar, Clock, Send } from "lucide-react";

interface RedditAccount {
  id: string;
  username: string;
}

export default function NewPostForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isScheduled, setIsScheduled] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(event.currentTarget);
    const data = {
      title: formData.get("title") as string,
      content: formData.get("content") as string,
      subreddit: formData.get("subreddit") as string,
      accountId: formData.get("account") as string,
      scheduledFor: isScheduled
        ? (formData.get("scheduledFor") as string)
        : null,
    };

    try {
      const res = await fetch("/api/posts/new", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Failed to create post");
      }

      router.push("/dashboard/scheduling");
      router.refresh();
    } catch (error) {
      setError(error instanceof Error ? error.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-white">Create New Post</h1>
        <p className="mt-2 text-sm text-gray-400">
          Create and schedule your Reddit post
        </p>
      </div>

      {error && (
        <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-2 rounded-md text-sm">
          {error}
        </div>
      )}

      <form onSubmit={onSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-200"
            >
              Post Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-700 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
              placeholder="Enter your post title"
            />
          </div>

          <div>
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-200"
            >
              Content
            </label>
            <textarea
              id="content"
              name="content"
              rows={6}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-700 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
              placeholder="Write your post content here..."
            />
          </div>

          <div>
            <label
              htmlFor="subreddit"
              className="block text-sm font-medium text-gray-200"
            >
              Subreddit
            </label>
            <input
              id="subreddit"
              name="subreddit"
              type="text"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-700 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
              placeholder="r/subreddit"
            />
          </div>

          <div>
            <label
              htmlFor="account"
              className="block text-sm font-medium text-gray-200"
            >
              Reddit Account
            </label>
            <select
              id="account"
              name="account"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-700 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
            >
              <option value="">Select an account</option>
              {/* We'll need to fetch and map through available accounts */}
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="schedule"
              checked={isScheduled}
              onChange={(e) => setIsScheduled(e.target.checked)}
              className="h-4 w-4 text-red-500 focus:ring-red-500 border-gray-700 rounded bg-gray-800"
            />
            <label htmlFor="schedule" className="text-sm text-gray-200">
              Schedule for later
            </label>
          </div>

          {isScheduled && (
            <div>
              <label
                htmlFor="scheduledFor"
                className="block text-sm font-medium text-gray-200"
              >
                Schedule Time
              </label>
              <input
                id="scheduledFor"
                name="scheduledFor"
                type="datetime-local"
                required={isScheduled}
                className="mt-1 block w-full px-3 py-2 border border-gray-700 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
              />
            </div>
          )}
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              "Creating..."
            ) : (
              <>
                {isScheduled ? (
                  <Calendar className="h-4 w-4 mr-2" />
                ) : (
                  <Send className="h-4 w-4 mr-2" />
                )}
                {isScheduled ? "Schedule Post" : "Post Now"}
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
