import { ArrowUpRight } from 'lucide-react'
import { DevFestLogo } from '@/components/devfest-logo'

const TICKETS_URL =
  'https://gdg.community.dev/events/details/google-gdg-dublin-presents-devfest-ireland-2026-1'
const FORUM_URL = 'https://www.gdg.ie'

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

      <section className="border-t border-border bg-muted/30 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="flex flex-col gap-8 rounded-xl border border-border bg-background p-8 sm:p-10 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                <span className="text-base leading-none">{'\u{1F1EE}\u{1F1EA}'}</span>
                New community forum
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                Introducing GDG.ie
              </h3>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                One place to connect with the wider Google Developer Groups
                community across Ireland &mdash; beyond individual chapters and
                events. Chat and share knowledge, discover meetups, post jobs and
                opportunities, and meet developers from GDG chapters nationwide.
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                It&apos;s early days and we&apos;d love the community to help
                shape what it becomes. Jump in, introduce yourself, and join the
                conversation.
              </p>
            </div>
            <a
              href={FORUM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-md border border-border bg-foreground px-6 py-3.5 font-display text-base font-semibold text-background transition-colors hover:bg-google-blue hover:text-white"
            >
              Visit GDG.ie
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <DevFestLogo className="text-xl" />
          <p className="text-sm text-muted-foreground">
            National College of Ireland, Dublin &middot; 28 November 2026
          </p>
          <p className="text-xs text-muted-foreground">
            A Google Developer Groups community event &middot;{' '}
            <a
              href={FORUM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline-offset-4 hover:text-google-blue hover:underline"
            >
              gdg.ie
            </a>
          </p>
        </div>
      </footer>
    </>
  )
}
