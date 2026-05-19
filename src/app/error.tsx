"use client";

/**
 * Top-level error boundary for leadhunter-web.
 * Catches runtime errors in any route segment per Next.js App Router convention.
 * Added 2026-05-19 via Nirmaan audit16-t01.
 */
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surface to console; Sentry hook can be added later.
    // eslint-disable-next-line no-console
    console.error("[leadhunter-web error boundary]", error);
  }, [error]);

  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="mx-auto max-w-md text-center">
        <h1 className="font-heading text-3xl font-bold text-gray-900">
          Something went wrong
        </h1>
        <p className="mt-3 text-base text-gray-600">
          We could not complete your request. Our team has been notified. Please try again in a
          moment — or head back to the homepage.
        </p>
        {error?.digest ? (
          <p className="mt-2 text-xs text-gray-400">
            Reference: <code className="font-mono">{error.digest}</code>
          </p>
        ) : null}
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => reset()}
            className="rounded-md bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-300"
          >
            Try again
          </button>
          <a
            href="/"
            className="rounded-md border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-300"
          >
            Go home
          </a>
        </div>
      </div>
    </main>
  );
}
