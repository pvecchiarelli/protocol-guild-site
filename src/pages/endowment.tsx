import { FC } from 'react'
import { Helmet } from 'react-helmet-async'
import Section from '../components/Section'
import Grid from '../components/Grid'
import HeroHeader from '../components/HeroHeader'
import chainsImage from '../assets/images/chains.png'

const steps = [
  {
    number: '01',
    title: 'Deposit',
    description:
      'Deposit ETH or supported tokens into the Protocol Guild endowment vault. Your principal is preserved and can be withdrawn at any time.',
  },
  {
    number: '02',
    title: 'Vault Generates Yield',
    description:
      'Your deposit is deployed into a yield strategy — liquid staking, lending, or a combination. The vault compounds yield automatically.',
  },
  {
    number: '03',
    title: 'Yield Funds Core Devs',
    description:
      'Accrued yield is periodically donated to the Protocol Guild vesting contract, flowing to Ethereum core protocol contributors.',
  },
]

const benefits = [
  {
    title: 'Principal Preserved',
    description:
      'Your deposit is never depleted. Withdraw at any time — only the yield is donated.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Perpetual Funding',
    description:
      'A single deposit creates an indefinite funding stream. No need to think about it again.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 2H3v16h5v4l4-4h5l4-4V2zM11 11V7M16 11V7" />
      </svg>
    ),
  },
  {
    title: 'Transparent On-chain',
    description:
      'All vault mechanics are on-chain and verifiable. Yield distribution to the vesting contract is fully auditable.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    title: 'Aligned Incentives',
    description:
      'The more total deposits in the vault, the more yield flows to core devs — creating a flywheel of long-term support.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
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

const Endowment: FC = () => {
  return (
    <main>
      <Helmet>
        <title>Infinite Endowment — Protocol Guild</title>
        <meta
          name="description"
          content="Deposit once, fund Ethereum core development forever. The Protocol Guild Infinite Endowment vault preserves your principal while directing yield to core protocol contributors."
        />
      </Helmet>

      <HeroHeader
        imageSrc={chainsImage}
        theme="light"
        paddingBottomClassName="pb-[70px] lg:pb-[160px]"
      >
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[var(--brand-primary)] text-[var(--gray-dark)]">
            In Development
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-[-1.44px] text-[var(--gray-dark)] mb-4">
          Infinite Endowment
        </h1>
        <p className="text-lg leading-[23px] text-[var(--gray-mid)] max-w-xl">
          Deposit once. Fund Ethereum core development forever. Your principal is preserved —
          only the yield flows to Protocol Guild, creating a perpetual contribution stream.
        </p>
      </HeroHeader>

      {/* How it works */}
      <Section background="white" divider="var(--brand-primary)" line={true}>
        <Section.Row align="start">
          <Grid columns={12} className="py-16">
            <Grid.Item span={12} className="flex flex-col gap-10">
              <div>
                <h2 className="text-3xl font-bold leading-[1.1] text-[var(--gray-dark)] mb-3">
                  How it works
                </h2>
                <p className="text-lg text-[var(--gray-mid)]">
                  The endowment vault is built on the ERC-4626 standard — a battle-tested,
                  auditable foundation for yield-bearing vaults.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {steps.map((step) => (
                  <div key={step.number} className="flex flex-col gap-3">
                    <div className="text-4xl font-bold text-[var(--brand-primary)] leading-none">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--gray-dark)]">
                      {step.title}
                    </h3>
                    <p className="text-base text-[var(--gray-mid)] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Flow diagram */}
              <div className="rounded-2xl border border-[var(--gray-light)] bg-[var(--bg-light-gray)] p-6">
                <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-0 text-sm text-[var(--gray-dark)]">
                  <div className="flex flex-col items-center gap-1 px-5">
                    <div className="w-14 h-14 rounded-full bg-white border border-[var(--gray-light)] flex items-center justify-center text-2xl">
                      🫙
                    </div>
                    <span className="font-semibold">Your Deposit</span>
                    <span className="text-xs text-[var(--gray-mid)]">Principal preserved</span>
                  </div>

                  <div className="hidden md:flex items-center text-[var(--brand-primary)] px-2">
                    <svg width="40" height="16" viewBox="0 0 40 16" fill="none">
                      <path d="M0 8 H32 M32 8 L24 2 M32 8 L24 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="md:hidden text-[var(--brand-primary)]">↓</div>

                  <div className="flex flex-col items-center gap-1 px-5">
                    <div className="w-14 h-14 rounded-full bg-white border-2 border-[var(--brand-primary)] flex items-center justify-center text-2xl">
                      ⚡
                    </div>
                    <span className="font-semibold">Vault</span>
                    <span className="text-xs text-[var(--gray-mid)]">Yield strategy</span>
                  </div>

                  <div className="hidden md:flex items-center text-[var(--brand-primary)] px-2">
                    <svg width="40" height="16" viewBox="0 0 40 16" fill="none">
                      <path d="M0 8 H32 M32 8 L24 2 M32 8 L24 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="md:hidden text-[var(--brand-primary)]">↓</div>

                  <div className="flex flex-col items-center gap-1 px-5">
                    <div className="w-14 h-14 rounded-full bg-white border border-[var(--gray-light)] flex items-center justify-center text-2xl">
                      💰
                    </div>
                    <span className="font-semibold">Yield Only</span>
                    <span className="text-xs text-[var(--gray-mid)]">Donated periodically</span>
                  </div>

                  <div className="hidden md:flex items-center text-[var(--brand-primary)] px-2">
                    <svg width="40" height="16" viewBox="0 0 40 16" fill="none">
                      <path d="M0 8 H32 M32 8 L24 2 M32 8 L24 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="md:hidden text-[var(--brand-primary)]">↓</div>

                  <div className="flex flex-col items-center gap-1 px-5">
                    <div className="w-14 h-14 rounded-full bg-white border border-[var(--gray-light)] flex items-center justify-center text-2xl">
                      🔨
                    </div>
                    <span className="font-semibold">Core Devs</span>
                    <span className="text-xs text-[var(--gray-mid)]">Vesting contract</span>
                  </div>
                </div>
              </div>
            </Grid.Item>
          </Grid>
        </Section.Row>
      </Section>

      {/* Benefits */}
      <Section background="white" divider="var(--brand-primary)" line={true}>
        <Section.Row align="start">
          <Grid columns={12} className="py-16">
            <Grid.Item span={12} className="flex flex-col gap-8">
              <h2 className="text-3xl font-bold leading-[1.1] text-[var(--gray-dark)]">
                Why the Endowment
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="flex gap-4 rounded-2xl border border-[var(--gray-light)] bg-white p-6"
                  >
                    <div className="shrink-0 text-[var(--brand-primary)] mt-0.5">
                      {benefit.icon}
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-semibold text-[var(--gray-dark)]">{benefit.title}</h3>
                      <p className="text-sm text-[var(--gray-mid)] leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Grid.Item>
          </Grid>
        </Section.Row>
      </Section>

      {/* Vault stats — coming soon placeholder */}
      <Section background="white" divider="var(--brand-primary)" line={true}>
        <Section.Row align="start">
          <Grid columns={12} className="py-16">
            <Grid.Item span={12} className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold leading-[1.1] text-[var(--gray-dark)]">
                  Vault Stats
                </h2>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[var(--bg-light-gray)] text-[var(--gray-mid)] border border-[var(--gray-light)]">
                  Live when vault deploys
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { label: 'Total Value Locked', value: '—' },
                  { label: 'Yield Donated (All Time)', value: '—' },
                  { label: 'Unique Depositors', value: '—' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-[var(--gray-light)] bg-[var(--bg-light-gray)] p-6 flex flex-col gap-1 opacity-50"
                  >
                    <p className="text-xs font-semibold uppercase tracking-widest text-[var(--gray-mid)]">
                      {stat.label}
                    </p>
                    <p className="text-3xl font-bold text-[var(--gray-dark)]">{stat.value}</p>
                  </div>
                ))}
              </div>

              {/* Deposit widget placeholder */}
              <div className="rounded-2xl border border-dashed border-[var(--gray-light)] bg-[var(--bg-light-gray)] p-8 flex flex-col items-center gap-3 opacity-50">
                <p className="text-sm font-semibold text-[var(--gray-mid)] uppercase tracking-widest">
                  Deposit Widget
                </p>
                <p className="text-sm text-[var(--gray-mid)] text-center max-w-sm">
                  Once the vault is deployed, you'll be able to deposit directly here and track
                  your contribution.
                </p>
              </div>
            </Grid.Item>
          </Grid>
        </Section.Row>
      </Section>

      {/* Waitlist / notify CTA */}
      <Section background="white" divider="var(--brand-primary)" line={true}>
        <Section.Row align="start">
          <Grid columns={12} className="py-16">
            <Grid.Item span={12}>
              <div className="rounded-2xl border border-[var(--brand-primary)] bg-white p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex flex-col gap-2 max-w-xl">
                  <h2 className="text-2xl font-bold text-[var(--gray-dark)]">
                    Get notified when it's live
                  </h2>
                  <p className="text-base text-[var(--gray-mid)] leading-relaxed">
                    The Infinite Endowment vault is in active development. Reach out to be
                    among the first to deposit when it launches.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                  <a
                    href="mailto:contact@protocolguild.org?subject=Infinite%20Endowment%20Interest"
                    className="!bg-[var(--brand-primary)] !border-none text-[var(--gray-dark)] font-semibold px-6 py-3 rounded-lg hover:!opacity-80 transition-opacity no-underline inline-block text-center whitespace-nowrap"
                  >
                    Express Interest →
                  </a>
                  <a
                    href="/donate"
                    className="bg-white border border-[var(--gray-light)] text-[var(--gray-dark)] font-semibold px-6 py-3 rounded-lg hover:border-[var(--brand-primary)] transition-colors no-underline inline-block text-center whitespace-nowrap"
                  >
                    Donate Directly
                  </a>
                </div>
              </div>
            </Grid.Item>
          </Grid>
        </Section.Row>
      </Section>
    </main>
  )
}

export default Endowment
