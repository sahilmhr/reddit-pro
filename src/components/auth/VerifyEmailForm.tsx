"use client";

import { Mail, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

export default function VerifyEmailForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const handleInput = (index: number, value: string) => {
    if (value.length === 1 && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && index > 0 && !e.currentTarget.value) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const handleResendCode = async () => {
    try {
      const res = await fetch("/api/auth/resend-code", {
        method: "POST",
      });

      if (!res.ok) {
        throw new Error("Failed to resend code");
      }

      // Show success message
      setError("New verification code sent!");
    } catch (err) {
      setError("Failed to resend verification code");
    }
  };

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const code = inputRefs
      .map((ref) => ref.current?.value || "")
      .join("")
      .toUpperCase();

    if (code.length !== 4) {
      setError("Please enter the complete verification code");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/auth/verify-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Verification failed");
      }

      // Redirect to dashboard on success
      router.push("/dashboard");
    } catch (error) {
      setError(error instanceof Error ? error.message : "Verification failed");
    } finally {
      setLoading(false);
    }
  }

  return (
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
            We've sent a verification code to your email
          </p>
        </div>
      </div>

      {error && (
        <div
          className={`bg-${
            error.includes("sent") ? "green" : "red"
          }-500/10 border border-${
            error.includes("sent") ? "green" : "red"
          }-500 text-${
            error.includes("sent") ? "green" : "red"
          }-500 px-4 py-2 rounded-md text-sm`}
        >
          {error}
        </div>
      )}

      <form onSubmit={onSubmit} className="mt-8 space-y-6">
        <div className="space-y-4">
          <div className="flex justify-center space-x-2">
            {inputRefs.map((ref, index) => (
              <input
                key={index}
                ref={ref}
                type="text"
                maxLength={1}
                onChange={(e) => handleInput(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
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
            disabled={loading}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Verifying..." : "Verify Email"}
          </button>
        </div>
      </form>

      <div className="space-y-4">
        <div className="text-center">
          <p className="text-sm text-gray-400">
            Didn't receive the code?{" "}
            <button
              onClick={handleResendCode}
              className="font-medium text-red-500 hover:text-red-400"
            >
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
  );
}
