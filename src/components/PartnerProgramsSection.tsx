import { FC } from 'react'

interface PartnerCard {
  id: string
  name: string
  tagline: string
  description: string
  howItWorks: string
  ctaLabel: string
  ctaHref: string
  status: 'live' | 'coming-soon'
  icon: React.ReactNode
}

const partners: PartnerCard[] = [
  {
    id: 'card-rewards',
    name: 'Credit Card Rewards',
    tagline: 'Give your cashback a purpose',
    description:
      'Route credit card rewards, cashback, or crypto spending bonuses directly to Protocol Guild — at no cost to you.',
    howItWorks:
      'Link your rewards account to Protocol Guild as your designated charity or donation recipient. Your rewards accumulate and flow to core devs automatically.',
    ctaLabel: 'Coming Soon',
    ctaHref: '',
    status: 'coming-soon',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
  {
    id: 'metamask-roundup',
    name: 'MetaMask Transaction Roundup',
    tagline: 'Every transaction, a micro-contribution',
    description:
      'Round up your MetaMask transactions and send the spare change to Protocol Guild. Micro-donations add up.',
    howItWorks:
      'Enable the roundup feature in MetaMask, select Protocol Guild as your recipient, and every transaction you make will include a small top-up to support Ethereum core development.',
    ctaLabel: 'Coming Soon',
    ctaHref: '',
    status: 'coming-soon',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
]

const PartnerProgramsSection: FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-3xl font-bold leading-[1.1] text-[var(--gray-dark)] mb-3">
          Partner Programs
        </h2>
        <p className="text-lg leading-[24px] text-[var(--gray-mid)]">
          Contribute through everyday financial activity — no direct spend required.
          These programs let you direct existing rewards and micro-amounts to Protocol Guild.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="rounded-2xl border border-[var(--gray-light)] bg-white p-6 flex flex-col gap-4"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="text-[var(--brand-primary)]">{partner.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--gray-dark)] leading-tight">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-[var(--gray-mid)]">{partner.tagline}</p>
                </div>
              </div>
              {partner.status === 'coming-soon' && (
                <span className="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full bg-[var(--bg-light-gray)] text-[var(--gray-mid)] border border-[var(--gray-light)]">
                  Coming soon
                </span>
              )}
              {partner.status === 'live' && (
                <span className="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full bg-green-50 text-green-700 border border-green-200">
                  Live
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-sm text-[var(--gray-dark)] leading-relaxed">
              {partner.description}
            </p>

            {/* How it works */}
            <div className="rounded-lg bg-[var(--bg-light-gray)] px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--gray-mid)] mb-1">
                How it works
              </p>
              <p className="text-sm text-[var(--gray-dark)] leading-relaxed">
                {partner.howItWorks}
              </p>
            </div>

            {/* CTA */}
            {partner.status === 'live' && partner.ctaHref ? (
              <a
                href={partner.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto w-full text-center !bg-[var(--brand-primary)] !border-none text-[var(--gray-dark)] font-semibold px-6 py-3 rounded-lg hover:!opacity-80 transition-opacity no-underline inline-block"
              >
                {partner.ctaLabel} →
              </a>
            ) : (
              <button
                disabled
                className="mt-auto w-full !bg-[var(--bg-light-gray)] !border border-[var(--gray-light)] text-[var(--gray-mid)] font-semibold px-6 py-3 rounded-lg cursor-not-allowed opacity-60"
              >
                {partner.ctaLabel}
              </button>
            )}
          </div>
        ))}
      </div>

      <p className="text-sm text-[var(--gray-mid)]">
        Interested in becoming a partner?{' '}
        <a
          href="mailto:contact@protocolguild.org"
          className="text-[var(--gray-dark)] underline hover:opacity-70"
        >
          Get in touch →
        </a>
      </p>
    </div>
  )
}

export default PartnerProgramsSection
