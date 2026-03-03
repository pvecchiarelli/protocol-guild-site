import { FC, useState } from 'react'
import { Helmet } from 'react-helmet-async'

// ─── Data ────────────────────────────────────────────────────────────────────

const TVL = 241_300_000
const GOAL = 1_000_000_000
const tvlPct = (TVL / GOAL) * 100

const waves = [
  {
    number: 4,
    status: 'filled' as const,
    deposited: 50_000_000,
    target: 50_000_000,
    daysToFill: 17,
    lead: 'Ethereum Foundation',
  },
  {
    number: 5,
    status: 'open' as const,
    deposited: 24_000_000,
    target: 50_000_000,
    daysOpen: 8,
    lead: 'Sharplink Gaming',
    fillDate: 'Feb 28',
  },
  {
    number: 6,
    status: 'upcoming' as const,
    deposited: 0,
    target: 50_000_000,
    lead: 'TBD',
  },
]

const vaults = [
  {
    id: 'morpho-eth',
    name: 'Protocol Guild Morpho ETH',
    token: 'ETH',
    type: 'LENDING',
    incentive: 'MORPHO INCENTIVES',
    tvl: 57_963_122,
    depositHref: 'https://app.morpho.org',
    logo: 'morpho',
  },
  {
    id: 'morpho-usdc',
    name: 'Protocol Guild Morpho USDC',
    token: 'USDC',
    type: 'LENDING',
    incentive: 'MORPHO INCENTIVES',
    tvl: 37_134_643,
    depositHref: 'https://app.morpho.org',
    logo: 'morpho',
  },
  {
    id: 'lido-eth',
    name: 'Protocol Guild Lido ETH',
    token: 'ETH',
    type: 'STAKING',
    incentive: 'LDO INCENTIVES',
    tvl: 37_134_643,
    depositHref: 'https://stake.lido.fi',
    logo: 'lido',
  },
]

const campaignStats = [
  {
    label: 'CURRENT BALANCE',
    value: '$241.3m',
    sub: '↑ $24m since Wave 3',
    subColor: 'text-green-600',
    span: 1,
  },
  { label: 'FINAL TARGET', value: '$1b', sub: '24.1% of goal reached', subColor: 'text-[var(--gray-mid)]', span: 1 },
  {
    label: 'CURRENT EPOCH',
    value: 'Wave 5',
    sub: '$24m / $50m filled · 8 days open',
    subColor: 'text-[var(--gray-mid)]',
    span: 1,
  },
  {
    label: 'PROGRESS VS PACE',
    value: '12 days ahead',
    valueColor: 'text-green-600',
    sub: 'On track to fill Wave 5 by Feb 28',
    subColor: 'text-green-600',
    span: 1,
  },
  {
    label: 'CUMULATIVE WAVES FILLED',
    value: '4 of 20',
    sub: 'Waves 1–4 closed · $200m total',
    subColor: 'text-[var(--gray-mid)]',
    span: 1,
  },
]

const ethPct = 61
const usdPct = 39
const ethAmt = 147_200_000
const usdAmt = 94_100_000
const targetEthPct = 70

const endowmentFunders = [
  { rank: 1, name: 'Ethereum Foundation', deposited: '$50,000,000', pct: '20.7%', wave: 'Wave 3', rankColor: 'text-amber-500' },
  { rank: 2, name: 'Sharplink Gaming', deposited: '$30,000,000', pct: '12.4%', wave: 'Wave 4', rankColor: 'text-[var(--gray-mid)]' },
  { rank: 3, name: 'ConsenSys', deposited: '$25,000,000', pct: '10.4%', wave: 'Wave 3', rankColor: 'text-[var(--gray-mid)]' },
  { rank: 4, name: 'Paradigm', deposited: '$22,000,000', pct: '9.1%', wave: 'Wave 3', rankColor: 'text-[var(--gray-mid)]' },
]

const guildFunders = [
  { rank: 1, name: 'Ethereum Foundation', deposited: '$45,000,000', pct: '18.7%', wave: '—', rankColor: 'text-amber-500' },
  { rank: 2, name: 'Uniswap Foundation', deposited: '$20,000,000', pct: '8.3%', wave: '—', rankColor: 'text-[var(--gray-mid)]' },
  { rank: 3, name: 'Optimism', deposited: '$15,000,000', pct: '6.2%', wave: '—', rankColor: 'text-[var(--gray-mid)]' },
]

// ─── Sub-components ───────────────────────────────────────────────────────────

const fmt = (n: number) =>
  n >= 1_000_000
    ? `$${(n / 1_000_000).toFixed(1).replace(/\.0$/, '')}m`
    : `$${n.toLocaleString()}`

const MorphoLogo: FC = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="36" height="36" rx="8" fill="#1C4EDB"/>
    <path d="M18 8C18 8 10 13 10 20C10 24.4 13.6 28 18 28C22.4 28 26 24.4 26 20C26 13 18 8 18 8Z" fill="white" opacity="0.9"/>
    <path d="M14 20C14 20 16 17 18 16C20 17 22 20 22 20C22 22.2 20.2 24 18 24C15.8 24 14 22.2 14 20Z" fill="#1C4EDB"/>
  </svg>
)

const LidoLogo: FC = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="36" height="36" rx="8" fill="#00A3FF"/>
    <path d="M18 8L13 17H23L18 8Z" fill="white" opacity="0.7"/>
    <path d="M13 19C13 19 14 28 18 28C22 28 23 19 23 19H13Z" fill="white"/>
  </svg>
)

const WaveBadge: FC<{ status: 'filled' | 'open' | 'upcoming' }> = ({ status }) => {
  if (status === 'filled') return (
    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-green-100 text-green-700 uppercase tracking-wide">
      Filled
    </span>
  )
  if (status === 'open') return (
    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#e8f8fd] text-[var(--brand-primary)] uppercase tracking-wide border border-[var(--brand-primary)]">
      Open
    </span>
  )
  return (
    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-gray-100 text-gray-400 uppercase tracking-wide">
      Upcoming
    </span>
  )
}

// ─── Deposit Tab ─────────────────────────────────────────────────────────────

const DepositTab: FC = () => (
  <div className="flex flex-col gap-8">
    {/* Waves */}
    <div>
      <p className="text-xs font-bold uppercase tracking-widest text-[var(--gray-mid)] mb-3">Waves</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {waves.map((wave) => {
          const pct = (wave.deposited / wave.target) * 100
          const isUpcoming = wave.status === 'upcoming'
          return (
            <div
              key={wave.number}
              className={`rounded-xl border bg-white p-5 flex flex-col gap-3 ${
                wave.status === 'open'
                  ? 'border-[var(--brand-primary)] shadow-sm'
                  : wave.status === 'upcoming'
                  ? 'border-dashed border-gray-300 opacity-60'
                  : 'border-[var(--gray-light)]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-[var(--gray-dark)] text-lg">Wave {wave.number}</span>
                <WaveBadge status={wave.status} />
              </div>
              <div className="flex flex-col gap-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-[var(--gray-mid)]">Deposited</span>
                  <span className="font-semibold text-[var(--gray-dark)]">
                    {isUpcoming ? '$0 / $50m' : `${fmt(wave.deposited)} / ${fmt(wave.target)}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--gray-mid)]">
                    {wave.status === 'filled' ? 'Time to Fill' : wave.status === 'open' ? 'Time Open' : 'Time Open'}
                  </span>
                  <span className="font-semibold text-[var(--gray-dark)]">
                    {wave.status === 'filled'
                      ? `${wave.daysToFill} days`
                      : wave.status === 'open'
                      ? `${wave.daysOpen} days`
                      : 'N/A'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--gray-mid)]">Lead Depositor</span>
                  <span className="font-semibold text-[var(--gray-dark)]">{wave.lead}</span>
                </div>
              </div>
              {/* Progress bar */}
              <div className="h-1.5 rounded-full bg-gray-100 overflow-hidden">
                <div
                  className="h-full rounded-full bg-[var(--brand-primary)]"
                  style={{ width: `${Math.min(pct, 100)}%` }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>

    {/* Vaults */}
    <div>
      <p className="text-xs font-bold uppercase tracking-widest text-[var(--gray-mid)] mb-3">Vaults</p>
      <div className="flex flex-col gap-3">
        {vaults.map((vault) => (
          <div
            key={vault.id}
            className="rounded-xl border border-[var(--gray-light)] bg-white px-5 py-4 flex items-center gap-4"
          >
            <div className="shrink-0">
              {vault.logo === 'morpho' ? <MorphoLogo /> : <LidoLogo />}
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <span className="font-semibold text-[var(--gray-dark)] text-sm leading-tight">
                {vault.name}
              </span>
              <div className="flex items-center gap-2 mt-1 flex-wrap">
                <span className="text-xs text-[var(--gray-mid)] font-medium">● {vault.token}</span>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-orange-100 text-orange-600 uppercase tracking-wide">
                  {vault.incentive}
                </span>
              </div>
            </div>
            <div className="shrink-0 text-right hidden sm:block">
              <span className="text-xs font-bold uppercase tracking-wide text-[var(--gray-mid)] bg-gray-100 px-2.5 py-1 rounded">
                {vault.type}
              </span>
            </div>
            <div className="shrink-0 text-right hidden md:block">
              <p className="text-base font-bold text-[var(--gray-dark)]">{fmt(vault.tvl)}</p>
              <p className="text-xs text-[var(--gray-mid)]">TVL</p>
            </div>
            <a
              href={vault.depositHref}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 flex items-center gap-1.5 !bg-[var(--brand-primary)] !border-none text-[var(--gray-dark)] font-bold text-sm px-4 py-2 rounded-lg hover:!opacity-80 transition-opacity no-underline whitespace-nowrap"
            >
              Deposit
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  </div>
)

// ─── Dashboard Tab ────────────────────────────────────────────────────────────

const DashboardTab: FC = () => {
  const [activeFunders, setActiveFunders] = useState<'endowment' | 'guild'>('endowment')
  const funders = activeFunders === 'endowment' ? endowmentFunders : guildFunders

  return (
    <div className="flex flex-col gap-8">
      {/* Campaign Overview */}
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-[var(--gray-mid)] mb-3">
          Campaign Overview
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {campaignStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-[var(--gray-light)] bg-white p-5 flex flex-col gap-1"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--gray-mid)]">
                {stat.label}
              </p>
              <p className={`text-2xl font-bold leading-tight ${stat.valueColor || 'text-[var(--gray-dark)]'}`}>
                {stat.value}
              </p>
              <p className={`text-xs ${stat.subColor}`}>{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ETH:USD Allocation */}
      <div className="rounded-xl border border-[var(--gray-light)] bg-white p-5 flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--gray-mid)]">
            ETH : USD Allocation Ratio
          </p>
          <p className="text-xs text-[var(--gray-mid)]">
            Current: <strong className="text-[var(--gray-dark)]">{ethPct}% ETH / {usdPct}% USD</strong>
            &nbsp;·&nbsp;
            Target: <strong className="text-[var(--gray-dark)]">{targetEthPct}% ETH / {100 - targetEthPct}% USD</strong>
          </p>
        </div>

        {/* Stacked bar */}
        <div className="relative h-3 rounded-full overflow-visible bg-gray-100">
          {/* ETH segment */}
          <div
            className="absolute left-0 top-0 h-full rounded-l-full bg-[#1a3bbd]"
            style={{ width: `${ethPct}%` }}
          />
          {/* USD segment */}
          <div
            className="absolute top-0 h-full rounded-r-full bg-[var(--brand-primary)]"
            style={{ left: `${ethPct}%`, right: 0 }}
          />
          {/* Target line */}
          <div
            className="absolute top-[-4px] bottom-[-4px] w-0.5 bg-orange-400"
            style={{ left: `${targetEthPct}%` }}
          />
        </div>

        <div className="flex flex-col gap-1 text-xs text-[var(--gray-mid)]">
          <span>
            <span className="inline-block w-2 h-2 rounded-full bg-orange-400 mr-1.5" />
            Target {targetEthPct}/{100 - targetEthPct} — {targetEthPct - ethPct} points of ETH rebalancing needed
          </span>
          <span>
            <span className="inline-block w-2 h-2 rounded-full bg-[#1a3bbd] mr-1.5" />
            ETH — {ethPct}% (${(ethAmt / 1_000_000).toFixed(1)}m)
            &nbsp;&nbsp;
            <span className="inline-block w-2 h-2 rounded-full bg-[var(--brand-primary)] mr-1.5" />
            USD — {usdPct}% (${(usdAmt / 1_000_000).toFixed(1)}m)
          </span>
        </div>
      </div>

      {/* Top Funders */}
      <div className="rounded-xl border border-[var(--gray-light)] bg-white overflow-hidden">
        <div className="px-5 pt-5 pb-0">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--gray-mid)] mb-3">
            Top Funders
          </p>
          <div className="flex gap-2 border-b border-[var(--gray-light)]">
            <button
              onClick={() => setActiveFunders('endowment')}
              className={`px-4 py-2 text-sm font-semibold border-none bg-transparent cursor-pointer transition-colors ${
                activeFunders === 'endowment'
                  ? 'text-[var(--gray-dark)] border-b-2 border-[var(--brand-primary)] -mb-px'
                  : 'text-[var(--gray-mid)] hover:text-[var(--gray-dark)]'
              }`}
            >
              Infinite Endowment
            </button>
            <button
              onClick={() => setActiveFunders('guild')}
              className={`px-4 py-2 text-sm font-semibold border-none bg-transparent cursor-pointer transition-colors ${
                activeFunders === 'guild'
                  ? 'text-[var(--gray-dark)] border-b-2 border-[var(--brand-primary)] -mb-px'
                  : 'text-[var(--gray-mid)] hover:text-[var(--gray-dark)]'
              }`}
            >
              Protocol Guild
            </button>
          </div>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[var(--gray-light)]">
              <th className="text-left text-xs font-bold uppercase tracking-widest text-[var(--gray-mid)] px-5 py-3 w-10">#</th>
              <th className="text-left text-xs font-bold uppercase tracking-widest text-[var(--gray-mid)] px-3 py-3">Depositor</th>
              <th className="text-right text-xs font-bold uppercase tracking-widest text-[var(--gray-mid)] px-3 py-3">Deposited</th>
              <th className="text-right text-xs font-bold uppercase tracking-widest text-[var(--gray-mid)] px-3 py-3">% Fund</th>
              <th className="text-right text-xs font-bold uppercase tracking-widest text-[var(--gray-mid)] px-5 py-3">Wave</th>
            </tr>
          </thead>
          <tbody>
            {funders.map((f) => (
              <tr key={f.rank} className="border-b border-[var(--gray-light)] last:border-0 hover:bg-gray-50 transition-colors">
                <td className={`px-5 py-4 font-bold ${f.rankColor}`}>{f.rank}</td>
                <td className="px-3 py-4 font-semibold text-[var(--gray-dark)]">{f.name}</td>
                <td className="px-3 py-4 text-right font-semibold text-[var(--gray-dark)]">{f.deposited}</td>
                <td className="px-3 py-4 text-right text-[var(--gray-mid)]">{f.pct}</td>
                <td className="px-5 py-4 text-right">
                  {f.wave !== '—' ? (
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gray-100 text-[var(--gray-mid)]">
                      {f.wave}
                    </span>
                  ) : (
                    <span className="text-[var(--gray-mid)]">—</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const Endowment: FC = () => {
  const [activeTab, setActiveTab] = useState<'deposit' | 'dashboard'>('deposit')

  return (
    <main>
      <Helmet>
        <title>The Infinite Endowment — Protocol Guild</title>
        <meta
          name="description"
          content="Deposit once, fund Ethereum core development forever. The Protocol Guild Infinite Endowment vault preserves your principal while directing yield to core protocol contributors."
        />
      </Helmet>

      <div className="min-h-screen bg-[#f0f6fb]">
        {/* App header */}
        <div className="bg-white border-b border-[var(--gray-light)]">
          <div className="max-w-[900px] mx-auto px-6 pt-8 pb-0">
            {/* Logo + title */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[var(--brand-primary)] flex items-center justify-center shrink-0">
                <svg width="22" height="22" viewBox="0 0 279 279" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 40 80 Q 60 60 90 70 L 140 100 L 190 70 Q 220 60 240 80 L 240 100 Q 220 85 195 95 L 140 125 L 85 95 Q 60 85 40 100 Z" fill="white"/>
                  <path d="M 40 130 Q 60 110 90 120 L 140 150 L 190 120 Q 220 110 240 130 L 240 150 Q 220 135 195 145 L 140 175 L 85 145 Q 60 135 40 150 Z" fill="white"/>
                  <path d="M 40 180 Q 60 160 90 170 L 140 200 L 190 170 Q 220 160 240 180 L 240 200 Q 220 185 195 195 L 140 225 L 85 195 Q 60 185 40 200 Z" fill="white"/>
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-[var(--gray-dark)]">The Infinite Endowment</h1>
            </div>

            {/* Tabs */}
            <div className="flex gap-0">
              {(['deposit', 'dashboard'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 text-sm font-semibold border-none bg-transparent cursor-pointer capitalize transition-colors border-b-2 ${
                    activeTab === tab
                      ? 'text-[var(--brand-primary)] border-[var(--brand-primary)]'
                      : 'text-[var(--gray-mid)] border-transparent hover:text-[var(--gray-dark)]'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-[900px] mx-auto px-6 py-8 flex flex-col gap-8">

          {/* TVL hero — shared across both tabs */}
          <div className="flex flex-col items-center gap-3 py-4">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--gray-mid)]">
              Total Value Locked
            </p>
            <p className="text-5xl font-bold text-[var(--gray-dark)]">
              ${(TVL / 1_000_000).toFixed(1)}m
            </p>
            {/* Progress bar */}
            <div className="w-full max-w-[600px] flex flex-col gap-1.5">
              <div className="h-2.5 rounded-full bg-blue-100 overflow-hidden">
                <div
                  className="h-full rounded-full bg-[var(--brand-primary)]"
                  style={{ width: `${tvlPct}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-[var(--gray-mid)]">
                <span>${(TVL / 1_000_000).toFixed(1)}m raised</span>
                <span>$1b goal</span>
              </div>
            </div>
          </div>

          {/* Tab content */}
          {activeTab === 'deposit' ? <DepositTab /> : <DashboardTab />}

          {/* Footer CTA */}
          <div className="rounded-xl border border-[var(--brand-primary)] bg-white p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-[var(--gray-dark)]">Interested in a large deposit or partnership?</p>
              <p className="text-sm text-[var(--gray-mid)] mt-0.5">Reach out to discuss endowment strategy.</p>
            </div>
            <a
              href="mailto:contact@protocolguild.org?subject=Infinite%20Endowment%20Interest"
              className="shrink-0 !bg-[var(--brand-primary)] !border-none text-[var(--gray-dark)] font-bold px-5 py-2.5 rounded-lg hover:!opacity-80 transition-opacity no-underline text-sm whitespace-nowrap"
            >
              Get in Touch →
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Endowment
