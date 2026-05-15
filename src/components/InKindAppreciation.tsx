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
  { id: 'ethcc',   Logo: EthCCLogo,   label: 'Conference ticket' },
  { id: 'devcon',  Logo: DevconLogo,  label: 'Conference ticket' },
  { id: 'keycard', Logo: KeycardLogo, label: 'Hardware wallet'   },
]

const InKindAppreciation: FC = () => (
  <div className="donors border-t border-[var(--gray-light)] pt-4 pb-0">
    <div className="flex flex-row justify-between items-center w-full mb-6">
      <p className="text-[15px] font-medium text-[var(--gray-dark)] uppercase tracking-wide">
        In-kind partners
      </p>
      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#e8f8fd] text-[#0e7fa8] border border-[#9de0f5]">
        Protocol Guild members
      </span>
    </div>

    <div className="silver-gradient silver-shimmer rounded-xl p-8">
      <div className="flex flex-wrap justify-center gap-10">
        {partners.map(({ id, Logo, label }) => (
          <div key={id} className="flex flex-col items-center gap-2">
            <div className="h-8 md:h-10 flex items-center">
              <Logo />
            </div>
            <span className="text-xs text-[var(--gray-mid)]">{label}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="mt-4 text-right">
      <a
        href="mailto:contact@protocolguild.org?subject=In-Kind%20Partner%20Inquiry"
        className="text-sm text-[var(--gray-mid)] hover:opacity-70 underline"
      >
        Become an in-kind partner →
      </a>
    </div>
  </div>
)

export default InKindAppreciation
