import { ArrowUpRight } from 'lucide-react'
import { DevFestLogo } from '@/components/devfest-logo'

const TICKETS_URL =
  'https://gdg.community.dev/events/details/google-gdg-dublin-presents-devfest-ireland-2026-1'

export function CtaFooter() {
  return (
    <>
      <section className="relative overflow-hidden border-t border-border bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <div className="flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-px w-8 bg-google-blue" />
            Tickets are live
            <span className="h-px w-8 bg-google-blue" />
          </div>
          <h2 className="mt-6 text-balance font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Secure your place before early bird ends.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-pretty leading-relaxed text-muted-foreground">
            Early bird tickets are just &euro;5 until 30 September 2026. Register
            now on the GDG community page and join us in Dublin.
          </p>
          <a
            href={TICKETS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-9 inline-flex items-center justify-center gap-2 rounded-md bg-foreground px-8 py-4 font-display text-base font-semibold text-background transition-colors hover:bg-google-blue hover:text-white"
          >
            Get Tickets
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </section>

      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <DevFestLogo className="text-xl" />
          <p className="text-sm text-muted-foreground">
            National College of Ireland, Dublin &middot; 28 November 2026
          </p>
          <p className="text-xs text-muted-foreground">
            A Google Developer Groups community event.
          </p>
        </div>
      </footer>
    </>
  )
}
