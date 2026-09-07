import { DevFestLogo } from '@/components/devfest-logo'

const LINKEDIN_URL = 'https://www.linkedin.com/company/devfestireland'

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <DevFestLogo className="text-xl sm:text-2xl" />
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-border bg-background/40 px-4 py-2 font-display text-sm font-medium text-foreground backdrop-blur transition-colors hover:border-foreground/40 hover:bg-background/70"
        >
          Follow us
        </a>
      </div>
    </header>
  )
}
