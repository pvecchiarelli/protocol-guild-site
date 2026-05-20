import { FC } from 'react'
import etherfiLogo from '../assets/images/donors/etherfi.svg'

interface Opportunity {
  id: string
  logo: string | null
  logoAlt: string
  title: string
  description: string
  cta: string
  href: string
  tag: string
}

const opportunities: Opportunity[] = [
  {
    id: 'etherfi',
    logo: etherfiLogo,
    logoAlt: 'Ether.fi',
    title: 'Ether.fi Cash',
    description:
      'Use the Ether.fi Cash card for everyday purchases and automatically route a percentage of your cashback rewards to Protocol Guild.',
    cta: 'Get the card',
    href: 'https://ether.fi/cash',
    tag: 'Cashback rewards',
  },
  {
    id: 'megapot',
    logo: null,
    logoAlt: 'Megapot',
    title: 'Megapot',
    description:
      'Enter the Megapot onchain lottery and a portion of every ticket goes directly to Protocol Guild. Win big while supporting Ethereum\'s core developers.',
    cta: 'Enter the contest',
    href: 'https://megapot.xyz',
    tag: 'Onchain lottery',
  },
]

const MegapotLogo: FC = () => (
  <svg viewBox="0 0 120 32" xmlns="http://www.w3.org/2000/svg" aria-label="Megapot" className="h-full w-auto">
    <text x="0" y="22" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="800" fontSize="20" letterSpacing="-0.5" fill="#111111">mega</text>
    <text x="62" y="22" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="800" fontSize="20" letterSpacing="-0.5" fill="#FF6D1F">pot</text>
  </svg>
)

const InAppContributions: FC = () => (
  <div className="flex flex-col gap-6">
    <div className="flex flex-col gap-2">
      <h2 className="text-3xl font-bold leading-[1.1] text-[var(--gray-dark)]">
        Contribute through partners
      </h2>
      <h2 className="!text-lg !font-normal !leading-[24px] !text-[var(--gray-dark)]">
        Support Protocol Guild through everyday actions — no one-time donation required.
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {opportunities.map((opp) => (
        <a
          key={opp.id}
          href={opp.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-2xl border border-[var(--gray-light)] bg-white overflow-hidden flex flex-col no-underline hover:shadow-md transition-shadow"
        >
          {/* Top accent bar */}
          <div className="h-1 bg-[var(--brand-primary)]" />

          <div className="p-6 flex flex-col gap-4 flex-1">
            {/* Logo + tag row */}
            <div className="flex items-center justify-between">
              <div className="h-7 flex items-center">
                {opp.logo ? (
                  <img src={opp.logo} alt={opp.logoAlt} className="h-full w-auto" />
                ) : (
                  <MegapotLogo />
                )}
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#e8f8fd] text-[#0e7fa8] border border-[#9de0f5]">
                {opp.tag}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-[var(--gray-mid)] leading-relaxed flex-1">
              {opp.description}
            </p>

            {/* CTA */}
            <div className="flex items-center gap-1.5 text-sm font-semibold text-[var(--gray-dark)] group-hover:opacity-70 transition-opacity pt-2 border-t border-[var(--gray-light)]">
              {opp.cta}
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </div>
          </div>
        </a>
      ))}
    </div>
  </div>
)

export default InAppContributions
