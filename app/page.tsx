import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Highlights } from '@/components/highlights'
import { Tickets } from '@/components/tickets'
import { Sponsors } from '@/components/sponsors'
import { CtaFooter } from '@/components/cta-footer'

export default function Page() {
  return (
    <main className="relative">
      <SiteHeader />
      <Hero />
      <Highlights />
      <Tickets />
      <Sponsors />
      <CtaFooter />
    </main>
  )
}
