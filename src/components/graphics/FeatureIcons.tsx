const iconMap = {
  gcc: (
    <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
      <circle cx="24" cy="24" r="20" stroke="#10B981" strokeWidth="2" opacity="0.3" />
      <circle cx="24" cy="24" r="12" stroke="#10B981" strokeWidth="2" opacity="0.6" />
      <circle cx="24" cy="24" r="4" fill="#10B981" />
      <circle cx="12" cy="12" r="3" fill="#10B981" opacity="0.5" />
      <circle cx="36" cy="12" r="3" fill="#10B981" opacity="0.5" />
      <circle cx="36" cy="36" r="3" fill="#10B981" opacity="0.5" />
    </svg>
  ),
  brain: (
    <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
      <circle cx="24" cy="18" r="10" stroke="#3B82F6" strokeWidth="2" />
      <path d="M18 28c-2 3-2 6-1 9M30 28c2 3 2 6 1 9" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
      <circle cx="21" cy="16" r="2" fill="#3B82F6" />
      <circle cx="27" cy="16" r="2" fill="#3B82F6" />
      <line x1="21" y1="18" x2="27" y2="18" stroke="#3B82F6" strokeWidth="1.5" />
      <path d="M16 22h16" stroke="#3B82F6" strokeWidth="1.5" opacity="0.5" />
    </svg>
  ),
  india: (
    <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
      <circle cx="24" cy="24" r="18" stroke="#FCD34D" strokeWidth="2" opacity="0.5" />
      <circle cx="28" cy="20" r="4" fill="#FCD34D" opacity="0.6" />
      <rect x="10" y="32" width="4" height="8" rx="1" fill="#FCD34D" opacity="0.5" />
      <rect x="16" y="28" width="4" height="12" rx="1" fill="#FCD34D" opacity="0.7" />
      <rect x="22" y="24" width="4" height="16" rx="1" fill="#FCD34D" opacity="0.8" />
      <rect x="28" y="30" width="4" height="10" rx="1" fill="#FCD34D" opacity="0.6" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
      <rect x="12" y="6" width="24" height="36" rx="4" stroke="#10B981" strokeWidth="2" />
      <circle cx="24" cy="36" r="2" fill="#10B981" opacity="0.5" />
      <rect x="16" y="12" width="16" height="16" rx="2" fill="#10B981" opacity="0.15" />
      <circle cx="34" cy="10" r="5" fill="#EF4444" />
      <text x="34" y="13" fill="white" fontSize="8" fontWeight="700" textAnchor="middle">3</text>
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
      <path d="M24 4L40 12v12c0 10-16 18-16 18S8 34 8 24V12L24 4z" stroke="#3B82F6" strokeWidth="2" />
      <path d="M18 24l4 4 8-8" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  crm: (
    <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
      <rect x="8" y="8" width="12" height="12" rx="3" stroke="#2563EB" strokeWidth="2" />
      <rect x="28" y="8" width="12" height="12" rx="3" stroke="#2563EB" strokeWidth="2" />
      <rect x="8" y="28" width="12" height="12" rx="3" stroke="#2563EB" strokeWidth="2" />
      <rect x="28" y="28" width="12" height="12" rx="3" stroke="#2563EB" strokeWidth="2" />
      <line x1="20" y1="14" x2="28" y2="14" stroke="#2563EB" strokeWidth="1.5" opacity="0.5" />
      <line x1="14" y1="20" x2="14" y2="28" stroke="#2563EB" strokeWidth="1.5" opacity="0.5" />
      <line x1="34" y1="20" x2="34" y2="28" stroke="#2563EB" strokeWidth="1.5" opacity="0.5" />
      <line x1="20" y1="34" x2="28" y2="34" stroke="#2563EB" strokeWidth="1.5" opacity="0.5" />
    </svg>
  ),
};

export default function FeatureIcon({ icon }: { icon: keyof typeof iconMap }) {
  return <div className="mb-4">{iconMap[icon]}</div>;
}
