import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        {/* 404 Illustration */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 bg-red-500/10 rounded-full animate-pulse"></div>
          </div>
          <div className="relative">
            <svg
              className="mx-auto h-48 w-48 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
        </div>

        {/* Error Message */}
        <div>
          <h1 className="text-6xl font-bold text-white">404</h1>
          <h2 className="mt-4 text-2xl font-semibold text-white">
            Page Not Found
          </h2>
          <p className="mt-2 text-gray-400">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Navigation Options */}
        <div className="space-y-4">
          <Link
            href="/"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Go back home
          </Link>
          <div className="text-sm text-gray-400">Or try these links:</div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/dashboard"
              className="text-sm text-red-500 hover:text-red-400"
            >
              Dashboard
            </Link>
            <Link
              href="/auth/login"
              className="text-sm text-red-500 hover:text-red-400"
            >
              Login
            </Link>
            <Link
              href="/auth/signup"
              className="text-sm text-red-500 hover:text-red-400"
            >
              Sign up
            </Link>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-8 p-4 bg-gray-800 rounded-lg border border-gray-700">
          <h3 className="text-sm font-medium text-white">Need help?</h3>
          <p className="mt-1 text-sm text-gray-400">
            Contact our support team at{" "}
            <a
              href="mailto:support@redditpro.com"
              className="text-red-500 hover:text-red-400"
            >
              support@redditpro.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
