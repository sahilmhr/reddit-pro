import Link from "next/link";
import { Mail, ArrowLeft } from "lucide-react";

export default function VerifyEmailPage() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-sm w-full space-y-8">
        <div>
          <div className="text-center">
            <div className="mx-auto w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center">
              <Mail className="h-6 w-6 text-red-500" />
            </div>
            <h2 className="mt-6 text-3xl font-bold text-white">
              Check your email
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              We've sent a verification code to{" "}
              <span className="font-medium text-white">john@example.com</span>
            </p>
          </div>
        </div>

        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="space-y-4">
            <div className="flex justify-center space-x-2">
              {[0, 1, 2, 3].map((index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  className="w-12 h-12 text-center text-lg font-semibold text-white bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="•"
                />
              ))}
            </div>
            <p className="text-center text-sm text-gray-400">
              Enter the 4-digit code sent to your email
            </p>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Verify Email
            </button>
          </div>
        </form>

        <div className="space-y-4">
          <div className="text-center">
            <p className="text-sm text-gray-400">
              Didn't receive the code?{" "}
              <button className="font-medium text-red-500 hover:text-red-400">
                Resend code
              </button>
            </p>
          </div>

          <div className="text-center">
            <Link
              href="/auth/signup"
              className="inline-flex items-center text-sm text-gray-400 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
