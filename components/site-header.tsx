import { DevFestLogo } from '@/components/devfest-logo'

const TICKETS_URL =
  'https://gdg.community.dev/events/details/google-gdg-dublin-presents-devfest-ireland-2026-1'

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <DevFestLogo className="text-xl sm:text-2xl" />
        <a
          href={TICKETS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-foreground px-4 py-2 font-display text-sm font-semibold text-background transition-colors hover:bg-google-blue hover:text-white"
        >
          Get Tickets
        </a>
      </div>
    </header>
  )
}
