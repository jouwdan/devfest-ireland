import { ArrowUpRight, Check } from 'lucide-react'

const TICKETS_URL =
  'https://gdg.community.dev/events/details/google-gdg-dublin-presents-devfest-ireland-2026-1'

const tickets = [
  {
    name: 'Early Bird',
    price: '5',
    accent: 'bg-google-green',
    deadline: 'Registration ends 30 Sep 2026',
    perks: [
      'In-person entry',
      'Full day of talks & workshops',
      'Lowest price while it lasts',
    ],
    featured: false,
    ended: true,
  },
  {
    name: 'General Entry',
    price: '10',
    accent: 'bg-google-blue',
    deadline: 'Registration ends 28 Nov 2026',
    perks: [
      'In-person entry',
      'Full day of talks & workshops',
      'Community networking',
    ],
    featured: true,
    ended: false,
  },
]

export function Tickets() {
  return (
    <section
      id="tickets"
      className="relative border-t border-border bg-background py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          <span className="h-px w-8 bg-google-blue" />
          Tickets are live
        </div>
        <h2 className="mt-6 max-w-2xl text-balance font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          Grab your spot at DevFest Ireland &rsquo;26.
        </h2>
        <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          A full day at the National College of Ireland, Dublin on 28 November
          2026.
        </p>

        <p className="mt-8 rounded-md border border-google-green/30 bg-google-green/10 px-4 py-3 text-sm leading-relaxed text-foreground">
          Students, job seekers and those unemployed &mdash; reach out to us for
          a discount code!
        </p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {tickets.map((ticket) => (
            <div
              key={ticket.name}
              className={`relative flex flex-col overflow-hidden rounded-lg border border-border bg-card p-8 ${
                ticket.ended ? 'opacity-50' : ''
              }`}
            >
              <span
                className={`absolute inset-x-0 top-0 h-0.5 ${ticket.accent}`}
              />
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl font-semibold">
                  {ticket.name}
                </h3>
                {ticket.ended && (
                  <span className="rounded-full bg-muted px-3 py-1 font-mono text-xs uppercase tracking-wide text-muted-foreground">
                    Ended
                  </span>
                )}
              </div>

              <div className="mt-6 flex items-baseline gap-1.5">
                <span className="font-display text-5xl font-bold tracking-tight">
                  &euro;{ticket.price}
                </span>
                <span className="text-sm text-muted-foreground">
                  / in-person
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {ticket.deadline}
              </p>

              <ul className="mt-7 flex flex-col gap-3">
                {ticket.perks.map((perk) => (
                  <li
                    key={perk}
                    className="flex items-start gap-2.5 text-sm text-foreground"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-google-green"
                      strokeWidth={2.5}
                    />
                    {perk}
                  </li>
                ))}
              </ul>

              {ticket.ended ? (
                <span
                  aria-disabled="true"
                  className="mt-8 inline-flex cursor-not-allowed items-center justify-center rounded-md border border-border px-6 py-3.5 font-display text-base font-semibold text-muted-foreground"
                >
                  Sales ended
                </span>
              ) : (
                <a
                  href={TICKETS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group mt-8 inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 font-display text-base font-semibold transition-colors ${
                    ticket.featured
                      ? 'bg-foreground text-background hover:bg-google-blue hover:text-white'
                      : 'border border-border text-foreground hover:border-foreground/40 hover:bg-background/70'
                  }`}
                >
                  Get {ticket.name}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
