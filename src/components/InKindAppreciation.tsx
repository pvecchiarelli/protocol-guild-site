import { FC } from 'react'

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

const partners = [
  { id: 'ethcc',     Logo: EthCCLogo,     label: 'Conference ticket' },
  { id: 'devcon',    Logo: DevconLogo,    label: 'Conference ticket' },
  { id: 'ethprague', Logo: EthPragueLogo, label: 'Conference ticket' },
  { id: 'dappcon',   Logo: DappConLogo,   label: 'Conference ticket' },
  { id: 'keycard',   Logo: KeycardLogo,   label: 'Hardware wallet'   },
]

const InKindAppreciation: FC = () => (
  <div className="donors border-t border-[var(--gray-light)] pt-4 pb-0">
    <div className="flex flex-row justify-between items-center w-full mb-6">
      <p className="text-[15px] font-medium text-[var(--gray-dark)] uppercase tracking-wide">
        Member perks
      </p>
      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#e8f8fd] text-[#0e7fa8] border border-[#9de0f5]">
        Protocol Guild members
      </span>
    </div>

    <div className="flex flex-wrap gap-x-10 gap-y-6 items-start py-4">
      {partners.map(({ id, Logo, label }) => (
        <div key={id} className="flex flex-col gap-2 w-28">
          <div className="h-8 flex items-center">
            <Logo />
          </div>
          <span className="text-xs text-[var(--gray-mid)]">{label}</span>
        </div>
      ))}
    </div>

    <div className="mt-2 text-right">
      <a
        href="mailto:contact@protocolguild.org?subject=Member%20Perks%20Inquiry"
        className="text-sm text-[var(--gray-mid)] hover:opacity-70 underline"
      >
        Offer a member perk →
      </a>
    </div>
  </div>
)

export default InKindAppreciation
