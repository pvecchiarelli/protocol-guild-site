import { FC } from 'react'

/* ─── Partner logo SVGs ───────────────────────────────────────────────────── */

const EthCCLogo: FC = () => (
  <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" aria-label="EthCC">
    {/* Ethereum diamond mark */}
    <g transform="translate(0, 4)">
      <polygon points="16,0 22,12 16,16 10,12" fill="#3CBEED" opacity="0.9" />
      <polygon points="16,16 22,12 16,32 10,12" fill="#3CBEED" opacity="0.55" />
      <polygon points="16,0 10,12 16,16" fill="white" opacity="0.25" />
    </g>
    {/* EthCC wordmark */}
    <text
      x="32"
      y="26"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontWeight="700"
      fontSize="18"
      letterSpacing="-0.5"
      fill="#333333"
    >
      EthCC
    </text>
  </svg>
)

const DevconLogo: FC = () => (
  <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" aria-label="Devcon">
    {/* Stylised D mark */}
    <g transform="translate(2, 6)">
      <rect x="0" y="0" width="4" height="28" rx="2" fill="#333333" />
      <path
        d="M4 0 Q28 0 28 14 Q28 28 4 28"
        fill="none"
        stroke="#333333"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </g>
    {/* devcon wordmark */}
    <text
      x="38"
      y="26"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontWeight="700"
      fontSize="15"
      letterSpacing="-0.3"
      fill="#333333"
    >
      devcon
    </text>
  </svg>
)

const KeycardLogo: FC = () => (
  <svg viewBox="0 0 140 40" xmlns="http://www.w3.org/2000/svg" aria-label="Keycard">
    {/* Card stack mark */}
    <g>
      <rect x="2" y="8" width="30" height="20" rx="4" fill="#2ECC8A" opacity="0.35" />
      <rect x="5" y="5" width="30" height="20" rx="4" fill="#2ECC8A" opacity="0.6" />
      <rect x="8" y="2" width="30" height="20" rx="4" fill="#2ECC8A" />
      {/* chip dot */}
      <rect x="14" y="8" width="8" height="6" rx="1.5" fill="white" opacity="0.85" />
    </g>
    {/* Keycard wordmark */}
    <text
      x="46"
      y="19"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontWeight="700"
      fontSize="14"
      letterSpacing="-0.3"
      fill="#333333"
    >
      Keycard
    </text>
    <text
      x="46"
      y="32"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontWeight="400"
      fontSize="10"
      fill="#8FA0AB"
      letterSpacing="0.2"
    >
      Shell
    </text>
  </svg>
)

/* ─── Data ───────────────────────────────────────────────────────────────── */

interface Perk {
  id: string
  title: string
  subtitle: string
  description: string
  status: 'available' | 'coming-soon'
  logo: FC
  accentColor: string
  accentBg: string
}

const perks: Perk[] = [
  {
    id: 'ethcc',
    title: 'EthCC ticket',
    subtitle: 'Cannes · July 2026',
    description:
      'One complimentary pass to EthCC for Protocol Guild members, including full conference access and networking events.',
    status: 'available',
    logo: EthCCLogo,
    accentColor: '#3CBEED',
    accentBg: '#e8f8fd',
  },
  {
    id: 'devcon',
    title: 'Devcon ticket',
    subtitle: 'TBA · 2026',
    description:
      'Priority access to Devcon for Protocol Guild members — one of the most sought-after tickets in Ethereum.',
    status: 'coming-soon',
    logo: DevconLogo,
    accentColor: '#333333',
    accentBg: '#f5f5f7',
  },
  {
    id: 'keycard',
    title: 'Keycard Shell',
    subtitle: 'Hardware wallet',
    description:
      'A complimentary Keycard Shell hardware wallet — Protocol Guild edition — shipped directly to members.',
    status: 'available',
    logo: KeycardLogo,
    accentColor: '#2ECC8A',
    accentBg: '#eafaf4',
  },
]

/* ─── Component ──────────────────────────────────────────────────────────── */

const InKindAppreciation: FC = () => {
  return (
    <div className="flex flex-col gap-10">

      {/* Header */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--gray-mid)]">
            Member appreciation
          </span>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#e8f8fd] text-[#0e7fa8] border border-[#9de0f5]">
            Protocol Guild members
          </span>
        </div>
        <h2 className="text-3xl font-bold leading-[1.1] text-[var(--gray-dark)]">
          In-kind benefits
        </h2>
        <p className="text-lg leading-[1.5] text-[var(--gray-mid)] max-w-2xl">
          Protocol Guild partners offer in-kind benefits to recognize and celebrate the people
          building Ethereum's core protocol.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {perks.map((perk) => {
          const Logo = perk.logo
          return (
            <div
              key={perk.id}
              className="group relative rounded-2xl border border-[var(--gray-light)] bg-white overflow-hidden flex flex-col"
            >
              {/* Coloured top bar */}
              <div className="h-1 w-full" style={{ backgroundColor: perk.accentColor }} />

              {/* Logo band */}
              <div
                className="px-6 py-5 flex items-center"
                style={{ backgroundColor: perk.accentBg }}
              >
                <div className="h-10 flex items-center">
                  <Logo />
                </div>
              </div>

              {/* Body */}
              <div className="px-6 py-5 flex flex-col gap-3 flex-1">
                <div>
                  <p className="font-semibold text-[var(--gray-dark)] leading-snug">{perk.title}</p>
                  <p className="text-xs text-[var(--gray-mid)] mt-0.5">{perk.subtitle}</p>
                </div>
                <p className="text-sm text-[var(--gray-mid)] leading-relaxed flex-1">
                  {perk.description}
                </p>
              </div>

              {/* Footer */}
              <div className="px-6 pb-5">
                <div className="pt-4 border-t border-[var(--gray-light)] flex items-center justify-between">
                  {perk.status === 'available' ? (
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-green-50 text-green-700 border border-green-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                      Available
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block" />
                      Coming soon
                    </span>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* CTA strip */}
      <div className="rounded-2xl border border-dashed border-[var(--gray-light)] bg-[var(--bg-light-gray)] px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <p className="font-semibold text-[var(--gray-dark)]">Want to offer a benefit?</p>
          <p className="text-sm text-[var(--gray-mid)] mt-0.5">
            Partner with Protocol Guild to celebrate the people building Ethereum.
          </p>
        </div>
        <a
          href="mailto:contact@protocolguild.org?subject=In-Kind%20Partner%20Inquiry"
          className="shrink-0 text-sm font-semibold text-[var(--gray-dark)] bg-white border border-[var(--gray-light)] px-5 py-2.5 rounded-lg hover:opacity-70 transition-opacity whitespace-nowrap no-underline"
        >
          Get in touch →
        </a>
      </div>

    </div>
  )
}

export default InKindAppreciation
