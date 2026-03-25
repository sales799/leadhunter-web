"use client";

import Link from "next/link";

type ConsentCheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  compact?: boolean;
  className?: string;
};

export default function ConsentCheckbox({
  checked,
  onChange,
  compact = false,
  className = "",
}: ConsentCheckboxProps) {
  return (
    <label
      className={`flex items-start gap-2 cursor-pointer select-none ${className}`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-0.5 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 accent-blue-600 dark:border-gray-600 dark:bg-gray-800"
        required
      />
      <span
        className={`${
          compact ? "text-[11px]" : "text-xs"
        } text-gray-500 dark:text-gray-400 font-body leading-relaxed`}
      >
        {compact ? (
          <>
            I agree to the{" "}
            <Link
              href="/privacy"
              className="underline hover:text-blue-600 dark:hover:text-blue-400"
            >
              Privacy Policy
            </Link>
          </>
        ) : (
          <>
            I agree to the processing of my personal data as described in the{" "}
            <Link
              href="/privacy"
              className="underline hover:text-blue-600 dark:hover:text-blue-400"
            >
              Privacy Policy
            </Link>
            . I can withdraw consent anytime.
          </>
        )}
      </span>
    </label>
  );
}
