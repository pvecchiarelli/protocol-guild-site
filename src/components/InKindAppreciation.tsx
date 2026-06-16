import { FC } from 'react'
import keycardImg from '../assets/images/donors/keycard.svg'

/* ─── Logos ──────────────────────────────────────────────────────────────── */

const KeycardLogo: FC = () => (
  <img src={keycardImg} alt="Keycard" className="h-10 md:h-14 w-auto max-w-[140px]" />
)

/* ─── Data ────────────────────────────────────────────────────────────────── */

const perks = [
  { id: 'keycard', Logo: KeycardLogo, url: 'https://keycard.tech' },
]

const audits: typeof perks = []

/* ─── Sub-components ─────────────────────────────────────────────────────── */

const LogoRow: FC<{ title: string; items: typeof perks }> = ({ title, items }) => (
  <div className="flex flex-col gap-1">
    <p className="text-[15px] font-medium text-[var(--gray-dark)]">{title}</p>
    <div className="flex flex-wrap gap-x-8 gap-y-6 items-center py-4">
      {items.map(({ id, Logo, url }) => (
        <a
          key={id}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center h-10 md:h-14 hover:opacity-70 transition-opacity"
        >
          <Logo />
        </a>
      ))}
    </div>
  </div>
)

const Header: FC = () => (
  <div className="flex flex-col gap-4">
    <h2 className="text-3xl font-bold leading-[1.1] text-[var(--gray-dark)]">
      In-Kind Donations
    </h2>
    <h2 className="!text-lg !font-normal !leading-[24px] !text-[var(--gray-dark)]">
      While token donations help fund Ethereum's core protocol contributors directly, we also welcome non-financial contributions - gifts or perks ranging from conference tickets to hardware wallets.
    </h2>
    <h2 className="!text-lg !font-normal !leading-[24px] !text-[var(--gray-dark)]">
      Anything that helps reward the individuals building Ethereum's core protocol is welcome.
    </h2>
    <a
      href="mailto:contact@protocolguild.org?subject=In-Kind%20Donation%20Inquiry"
      className="text-sm text-[var(--gray-dark)] hover:opacity-70 underline w-fit"
    >
      Ready to donate a gift? Contact us!
    </a>
  </div>
)

const Logos: FC = () => (
  <div className="flex flex-col gap-6">
    {perks.length > 0 && <LogoRow title="MEMBER PERKS" items={perks} />}
    {audits.length > 0 && <LogoRow title="AUDITS & SOFTWARE" items={audits} />}
  </div>
)

const InKindAppreciation = { Header, Logos }
export default InKindAppreciation
