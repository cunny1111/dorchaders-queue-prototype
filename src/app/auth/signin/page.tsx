"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function SignIn() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  const error = searchParams.get("error");

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-md">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold mb-2">Sign in to Dorchaders Modding Queue</h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          Connect with your osu! account to submit and manage map requests
        </p>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded-md">
          {error === "OAuthSignin" && "Error starting osu! sign in process. Please try again."}
          {error === "OAuthCallback" && "Error during osu! sign in callback. Please try again."}
          {error === "Default" && "An unexpected error occurred. Please try again."}
        </div>
      )}

      <button
        onClick={() => signIn("osu", { callbackUrl })}
        className="flex items-center justify-center w-full py-3 px-4 bg-pink-600 hover:bg-pink-700 text-white rounded-md transition-colors mb-4"
      >
        <svg 
          className="w-5 h-5 mr-2"
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 100 100"
          fill="white"
        >
          <circle cx="50" cy="50" r="30" fill="white" />
          <circle cx="50" cy="50" r="25" fill="#FF66AA" />
        </svg>
        Sign in with osu!
      </button>

      <div className="text-center mt-6">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          By signing in, you agree to our{" "}
          <Link href="/terms" className="text-purple-600 dark:text-purple-400 hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-purple-600 dark:text-purple-400 hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
} 