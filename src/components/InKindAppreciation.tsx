import { FC } from 'react'

interface Perk {
  id: string
  title: string
  subtitle: string
  description: string
  status: 'available' | 'coming-soon'
  partner: string
  icon: React.ReactNode
}

const perks: Perk[] = [
  {
    id: 'ethcc',
    title: 'EthCC ticket',
    subtitle: 'Cannes · July 2026',
    description:
      'One complimentary pass to EthCC for Protocol Guild members. Includes full conference access and networking events.',
    status: 'available',
    partner: 'via EthCC',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/>
        <path d="M13 5v2M13 17v2M13 11v2"/>
      </svg>
    ),
  },
  {
    id: 'devcon',
    title: 'Devcon ticket',
    subtitle: 'TBA · 2026',
    description:
      'Priority access to Devcon for Protocol Guild members — one of the most sought-after tickets in Ethereum.',
    status: 'coming-soon',
    partner: 'via Ethereum Foundation',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/>
        <path d="M13 5v2M13 17v2M13 11v2"/>
      </svg>
    ),
  },
  {
    id: 'keycard',
    title: 'Keycard Shell',
    subtitle: 'Hardware wallet',
    description:
      'A complimentary Keycard Shell hardware wallet — Protocol Guild edition — shipped directly to members.',
    status: 'available',
    partner: 'via Keycard',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 7H3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z"/>
        <circle cx="7" cy="12" r="1"/><circle cx="12" cy="12" r="1"/>
      </svg>
    ),
  },
]

const InKindAppreciation: FC = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--gray-mid)]">
            Member appreciation
          </p>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#e8f8fd] text-[#0e7fa8] border border-[#9de0f5]">
            Protocol Guild members
          </span>
        </div>
        <h2 className="text-3xl font-bold leading-[1.1] text-[var(--gray-dark)]">
          In-kind benefits
        </h2>
        <p className="text-lg leading-[24px] text-[var(--gray-mid)]">
          Protocol Guild partners offer in-kind benefits to recognize and celebrate guild members.
        </p>
      </div>

      {/* Perk cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {perks.map((perk) => (
          <div
            key={perk.id}
            className="rounded-2xl border border-[var(--gray-light)] bg-white overflow-hidden flex flex-col"
          >
            {/* Teal top bar */}
            <div className="h-1.5 bg-[var(--brand-primary)]" />

            <div className="p-5 flex flex-col gap-4 flex-1">
              {/* Icon + title */}
              <div className="flex items-start gap-3">
                <div className="shrink-0 w-9 h-9 rounded-lg bg-[#e8f8fd] flex items-center justify-center text-[#0e7fa8]">
                  {perk.icon}
                </div>
                <div>
                  <p className="font-semibold text-[var(--gray-dark)] leading-tight">{perk.title}</p>
                  <p className="text-xs text-[var(--gray-mid)] mt-0.5">{perk.subtitle}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-[var(--gray-mid)] leading-relaxed flex-1">
                {perk.description}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-1 border-t border-[var(--gray-light)]">
                {perk.status === 'available' ? (
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-green-50 text-green-700">
                    Available
                  </span>
                ) : (
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-50 text-amber-700">
                    Coming soon
                  </span>
                )}
                <span className="text-xs text-[var(--gray-mid)]">{perk.partner}</span>
              </div>
            </div>
          </div>
        ))}

        {/* Add your perk CTA */}
        <div className="rounded-2xl border border-dashed border-[var(--gray-light)] bg-[var(--bg-light-gray)] flex flex-col items-center justify-center gap-2 p-5 text-center">
          <div className="w-9 h-9 rounded-lg border border-[var(--gray-light)] bg-white flex items-center justify-center text-[var(--gray-mid)]">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5v14"/>
            </svg>
          </div>
          <p className="text-sm font-semibold text-[var(--gray-dark)]">Your benefit here</p>
          <p className="text-xs text-[var(--gray-mid)] leading-relaxed">
            Offer in-kind benefits to Protocol Guild members
          </p>
          <a
            href="mailto:contact@protocolguild.org?subject=In-Kind%20Partner%20Inquiry"
            className="text-xs text-[var(--brand-primary)] underline hover:opacity-70 mt-1"
          >
            Get in touch →
          </a>
        </div>
      </div>

      {/* Eligibility note */}
      <div className="rounded-xl border border-[var(--gray-light)] bg-[var(--bg-light-gray)] px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <svg className="shrink-0 mt-0.5 text-[var(--gray-mid)]" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>
          </svg>
          <p className="text-sm text-[var(--gray-mid)]">
            Benefits are available to active Protocol Guild members. Eligibility is verified through membership status in the vesting contract.
          </p>
        </div>
        <a
          href="/docs/01-membership"
          className="shrink-0 text-sm font-semibold text-[var(--gray-dark)] underline hover:opacity-70 whitespace-nowrap"
        >
          Learn about membership →
        </a>
      </div>
    </div>
  )
}

export default InKindAppreciation
