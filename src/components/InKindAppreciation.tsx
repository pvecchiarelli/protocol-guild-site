import { FC } from 'react'

/* ─── Partner logo SVGs ───────────────────────────────────────────────────── */

const EthCCLogo: FC = () => (
  <svg viewBox="0 0 100 36" xmlns="http://www.w3.org/2000/svg" aria-label="EthCC" className="h-full w-auto">
    <g transform="translate(0, 2)">
      <polygon points="13,0 18,10 13,13 8,10" fill="#3CBEED" opacity="0.9" />
      <polygon points="13,13 18,10 13,26 8,10" fill="#3CBEED" opacity="0.5" />
      <polygon points="13,0 8,10 13,13" fill="white" opacity="0.3" />
    </g>
    <text x="26" y="22" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="800" fontSize="16" letterSpacing="-0.5" fill="#333333">EthCC</text>
  </svg>
)

const DevconLogo: FC = () => (
  <svg viewBox="0 0 110 36" xmlns="http://www.w3.org/2000/svg" aria-label="Devcon" className="h-full w-auto">
    <g transform="translate(2, 4)">
      <rect x="0" y="0" width="3.5" height="24" rx="1.75" fill="#1a1a1a" />
      <path d="M3.5 0 Q24 0 24 12 Q24 24 3.5 24" fill="none" stroke="#1a1a1a" strokeWidth="3.5" strokeLinecap="round" />
    </g>
    <text x="34" y="23" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="700" fontSize="15" letterSpacing="-0.3" fill="#1a1a1a">devcon</text>
  </svg>
)

const KeycardLogo: FC = () => (
  <svg viewBox="0 0 120 36" xmlns="http://www.w3.org/2000/svg" aria-label="Keycard" className="h-full w-auto">
    <rect x="2"  y="10" width="26" height="17" rx="3.5" fill="#2ECC8A" opacity="0.3" />
    <rect x="5"  y="7"  width="26" height="17" rx="3.5" fill="#2ECC8A" opacity="0.6" />
    <rect x="8"  y="4"  width="26" height="17" rx="3.5" fill="#2ECC8A" />
    <rect x="13" y="9"  width="7"  height="5"  rx="1.5" fill="white" opacity="0.9" />
    <text x="42" y="19" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="700" fontSize="14" letterSpacing="-0.3" fill="#1a1a1a">Keycard</text>
    <text x="42" y="31" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="400" fontSize="10" fill="#8FA0AB">Shell hardware wallet</text>
  </svg>
)

/* ─── Data ────────────────────────────────────────────────────────────────── */

interface Perk {
  id: string
  perkLabel: string
  subtitle: string
  description: string
  status: 'available' | 'coming-soon'
  logo: FC
}

const perks: Perk[] = [
  {
    id: 'ethcc',
    perkLabel: 'Conference ticket',
    subtitle: 'Cannes · July 2026',
    description: 'One complimentary pass to EthCC including full conference access and networking events.',
    status: 'available',
    logo: EthCCLogo,
  },
  {
    id: 'devcon',
    perkLabel: 'Conference ticket',
    subtitle: 'TBA · 2026',
    description: 'Priority access to Devcon for Protocol Guild members — one of the most sought-after tickets in Ethereum.',
    status: 'coming-soon',
    logo: DevconLogo,
  },
  {
    id: 'keycard',
    perkLabel: 'Hardware wallet',
    subtitle: 'Protocol Guild edition',
    description: 'A complimentary Keycard Shell hardware wallet — Protocol Guild edition — shipped directly to members.',
    status: 'available',
    logo: KeycardLogo,
  },
]

/* ─── Component ──────────────────────────────────────────────────────────── */

const InKindAppreciation: FC = () => {
  return (
    <div className="donors border-t border-[var(--gray-light)] pt-4 pb-0">

      {/* Label row */}
      <div className="flex flex-row justify-between items-center w-full mb-6">
        <p className="text-[15px] font-medium text-[var(--gray-dark)] uppercase tracking-wide">
          In-kind benefits
        </p>
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#e8f8fd] text-[#0e7fa8] border border-[#9de0f5]">
          Protocol Guild members
        </span>
      </div>

      {/* Partner cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {perks.map((perk) => {
          const Logo = perk.logo
          return (
            <div
              key={perk.id}
              className="silver-gradient silver-shimmer rounded-xl flex flex-col"
            >
              {/* Logo area */}
              <div className="flex items-center justify-start px-6 pt-6 pb-4 h-16">
                <Logo />
              </div>

              {/* Perk info */}
              <div className="px-6 pb-6 flex flex-col gap-2 flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--gray-mid)]">
                    {perk.perkLabel}
                  </p>
                  {perk.status === 'available' ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-green-50 text-green-700 border border-green-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                      Available
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block" />
                      Coming soon
                    </span>
                  )}
                </div>
                <p className="text-xs text-[var(--gray-mid)]">{perk.subtitle}</p>
                <p className="text-sm text-[var(--gray-mid)] leading-relaxed mt-1">
                  {perk.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Partner CTA */}
      <div className="mt-4 flex items-center justify-between">
        <p className="text-sm text-[var(--gray-mid)]">
          Interested in offering a benefit to Protocol Guild members?
        </p>
        <a
          href="mailto:contact@protocolguild.org?subject=In-Kind%20Partner%20Inquiry"
          className="text-sm font-semibold text-[var(--gray-dark)] underline hover:opacity-70 whitespace-nowrap"
        >
          Get in touch →
        </a>
      </div>

    </div>
  )
}

export default InKindAppreciation
