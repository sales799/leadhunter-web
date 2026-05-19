/**
 * Top-level loading state for leadhunter-web.
 * Renders during route transitions per Next.js App Router convention.
 * Added 2026-05-19 via Nirmaan audit16-t01.
 */
export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      className="flex min-h-[60vh] items-center justify-center"
    >
      <div className="flex flex-col items-center gap-4">
        <div
          className="h-10 w-10 animate-spin rounded-full border-4 border-teal-200 border-t-teal-600"
          aria-hidden="true"
        />
        <span className="text-sm font-medium text-gray-500">Loading…</span>
      </div>
    </div>
  );
}
