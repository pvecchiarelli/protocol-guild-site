import { FC } from 'react'

/* ─── Conference / hardware logos ────────────────────────────────────────── */

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

const EthPragueLogo: FC = () => (
  <svg viewBox="0 0 130 36" xmlns="http://www.w3.org/2000/svg" aria-label="ETHPrague" className="h-full w-auto">
    <g transform="translate(0, 2)">
      <polygon points="13,0 18,10 13,13 8,10" fill="#FF4C00" opacity="0.9" />
      <polygon points="13,13 18,10 13,26 8,10" fill="#FF4C00" opacity="0.5" />
      <polygon points="13,0 8,10 13,13" fill="white" opacity="0.3" />
    </g>
    <text x="26" y="22" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="800" fontSize="14" letterSpacing="-0.4" fill="#333333">ETHPrague</text>
  </svg>
)

const DappConLogo: FC = () => (
  <svg viewBox="0 0 110 36" xmlns="http://www.w3.org/2000/svg" aria-label="DappCon" className="h-full w-auto">
    <rect x="2" y="4" width="20" height="20" rx="5" fill="#333333" />
    <text x="4" y="18" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="800" fontSize="11" fill="white">D</text>
    <text x="29" y="22" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="700" fontSize="15" letterSpacing="-0.3" fill="#333333">DappCon</text>
  </svg>
)

const KeycardLogo: FC = () => (
  <svg viewBox="0 0 110 36" xmlns="http://www.w3.org/2000/svg" aria-label="Keycard" className="h-full w-auto">
    <rect x="2"  y="10" width="26" height="17" rx="3.5" fill="#2ECC8A" opacity="0.3" />
    <rect x="5"  y="7"  width="26" height="17" rx="3.5" fill="#2ECC8A" opacity="0.6" />
    <rect x="8"  y="4"  width="26" height="17" rx="3.5" fill="#2ECC8A" />
    <rect x="13" y="9"  width="7"  height="5"  rx="1.5" fill="white" opacity="0.9" />
    <text x="42" y="22" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="700" fontSize="14" letterSpacing="-0.3" fill="#1a1a1a">Keycard</text>
  </svg>
)

/* ─── Audit / infrastructure logos ──────────────────────────────────────── */

const SigmaPrimeLogo: FC = () => (
  <svg viewBox="0 0 120 36" xmlns="http://www.w3.org/2000/svg" aria-label="Sigma Prime" className="h-full w-auto">
    <text x="0" y="24" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="700" fontSize="20" fill="#E05A2B">Σ</text>
    <text x="22" y="22" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="700" fontSize="13" letterSpacing="-0.2" fill="#333333">Sigma Prime</text>
  </svg>
)

const DedaubLogo: FC = () => (
  <svg viewBox="0 0 90 36" xmlns="http://www.w3.org/2000/svg" aria-label="Dedaub" className="h-full w-auto">
    <rect x="0" y="6" width="22" height="22" rx="4" fill="#1a1a2e" />
    <text x="3" y="22" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="800" fontSize="12" fill="white">dd</text>
    <text x="28" y="22" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="700" fontSize="14" letterSpacing="-0.3" fill="#1a1a2e">dedaub</text>
  </svg>
)

const ZellicLogo: FC = () => (
  <svg viewBox="0 0 80 36" xmlns="http://www.w3.org/2000/svg" aria-label="Zellic" className="h-full w-auto">
    <polygon points="0,28 14,8 28,28" fill="none" stroke="#6C47FF" strokeWidth="3" strokeLinejoin="round" />
    <text x="34" y="23" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="700" fontSize="14" letterSpacing="-0.3" fill="#333333">Zellic</text>
  </svg>
)

const RedGuildLogo: FC = () => (
  <svg viewBox="0 0 100 36" xmlns="http://www.w3.org/2000/svg" aria-label="Red Guild" className="h-full w-auto">
    <circle cx="12" cy="18" r="10" fill="#CC2929" />
    <text x="28" y="23" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="700" fontSize="13" letterSpacing="-0.2" fill="#333333">Red Guild</text>
  </svg>
)

const AgoraLogo: FC = () => (
  <svg viewBox="0 0 85 36" xmlns="http://www.w3.org/2000/svg" aria-label="Agora" className="h-full w-auto">
    <path d="M4 26 L13 8 L22 26" fill="none" stroke="#333333" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="7" y1="20" x2="19" y2="20" stroke="#333333" strokeWidth="2.5" strokeLinecap="round" />
    <text x="28" y="23" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="700" fontSize="14" letterSpacing="-0.3" fill="#333333">Agora</text>
  </svg>
)

/* ─── Data ────────────────────────────────────────────────────────────────── */

const perks = [
  { id: 'ethcc',     Logo: EthCCLogo,     label: 'Conference ticket' },
  { id: 'devcon',    Logo: DevconLogo,    label: 'Conference ticket' },
  { id: 'ethprague', Logo: EthPragueLogo, label: 'Conference ticket' },
  { id: 'dappcon',   Logo: DappConLogo,   label: 'Conference ticket' },
  { id: 'keycard',   Logo: KeycardLogo,   label: 'Hardware wallet'   },
]

const audits = [
  { id: 'sigmaprime', Logo: SigmaPrimeLogo, label: 'Security review'       },
  { id: 'dedaub',     Logo: DedaubLogo,     label: 'Security audit'        },
  { id: 'zellic',     Logo: ZellicLogo,     label: 'Security audit'        },
  { id: 'redguild',   Logo: RedGuildLogo,   label: 'Security audit'        },
  { id: 'agora',      Logo: AgoraLogo,      label: 'DAO implementation'    },
]

/* ─── Component ──────────────────────────────────────────────────────────── */

const LogoRow: FC<{ items: typeof perks }> = ({ items }) => (
  <div className="flex flex-wrap gap-x-10 gap-y-6 items-start py-4">
    {items.map(({ id, Logo, label }) => (
      <div key={id} className="flex flex-col gap-2 w-28">
        <div className="h-8 flex items-center">
          <Logo />
        </div>
        <span className="text-xs text-[var(--gray-mid)]">{label}</span>
      </div>
    ))}
  </div>
)

const InKindAppreciation: FC = () => (
  <div className="donors pt-4 pb-0 flex flex-col gap-8">
    <div className="flex flex-col gap-2">
      <h2 className="text-3xl font-bold leading-[1.1] text-[var(--gray-dark)]">
        Partner perks
      </h2>
      <p className="text-lg leading-[24px] text-[var(--gray-mid)]">
        Protocol Guild partners offer complimentary benefits to active guild members — from conference tickets to hardware wallets.
      </p>
    </div>

    <div className="flex flex-col gap-1">
      <p className="text-[15px] font-medium text-[var(--gray-dark)]">MEMBER PERKS</p>
      <LogoRow items={perks} />
    </div>

    <div className="flex flex-col gap-1">
      <p className="text-[15px] font-medium text-[var(--gray-dark)]">AUDITS & REVIEWS</p>
      <LogoRow items={audits} />
    </div>

    <div className="text-right">
      <a
        href="mailto:contact@protocolguild.org?subject=Member%20Perks%20Inquiry"
        className="text-sm text-[var(--gray-mid)] hover:opacity-70 underline"
      >
        Offer Protocol Guild Members a perk →
      </a>
    </div>
  </div>
)

export default InKindAppreciation
