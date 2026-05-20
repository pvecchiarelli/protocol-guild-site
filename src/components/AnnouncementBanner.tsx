import { FC, useState } from 'react'

const AnnouncementBanner: FC = () => {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  return (
    <div className="w-full bg-[var(--brand-primary)] px-4 py-2.5 flex items-center justify-center gap-3 relative">
      <a
        href="https://megapot.xyz"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-semibold text-[var(--gray-dark)] hover:opacity-80 transition-opacity text-center no-underline"
      >
        🎉 Protocol Guild has partnered with Megapot — enter the contest for a chance to win!&nbsp;
        <span className="underline">Learn more →</span>
      </a>
      <button
        onClick={() => setDismissed(true)}
        aria-label="Dismiss banner"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--gray-dark)] hover:opacity-60 transition-opacity bg-transparent border-none p-1 cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6 6 18M6 6l12 12"/>
        </svg>
      </button>
    </div>
  )
}

export default AnnouncementBanner
