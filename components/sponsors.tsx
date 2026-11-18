const tiers = [
  {
    name: 'Gold',
    accent: 'bg-google-yellow',
    grid: 'sm:grid-cols-2 lg:grid-cols-3',
    tile: 'h-40 sm:h-48 p-8',
    sponsors: [
      { name: 'Auth0', logo: '/sponsors/auth0.png', url: 'https://auth0.com' },
      {
        name: 'FRS Recruitment',
        logo: '/sponsors/frs.png',
        url: 'https://www.frsrecruitment.com',
      },
      { name: 'Google', logo: '/sponsors/google.svg', url: 'https://www.google.com' },
    ],
  },
  {
    name: 'Silver',
    accent: 'bg-muted-foreground',
    grid: 'grid-cols-2 sm:grid-cols-3',
    tile: 'h-28 sm:h-32 p-6',
    sponsors: [
      { name: 'Codú', logo: '/sponsors/codu.jpeg', url: 'https://www.codu.co' },
    ],
  },
]

export function Sponsors() {
  return (
    <section
      id="sponsors"
      className="relative border-t border-border bg-background py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          <span className="h-px w-8 bg-google-blue" />
          Sponsors
        </div>
        <h2 className="mt-6 max-w-2xl text-balance font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          Made possible by our sponsors.
        </h2>

        <div className="mt-14 flex flex-col gap-12">
          {tiers.map((tier) => (
            <div key={tier.name}>
              <div className="flex items-center gap-3">
                <span className={`h-2 w-2 rounded-full ${tier.accent}`} />
                <h3 className="font-display text-lg font-semibold">
                  {tier.name}
                </h3>
              </div>
              <div className={`mt-5 grid gap-6 ${tier.grid}`}>
                {tier.sponsors.map((sponsor) => (
                  <a
                    key={sponsor.name}
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center rounded-lg border border-border bg-white transition-transform hover:-translate-y-0.5 ${tier.tile}`}
                  >
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
