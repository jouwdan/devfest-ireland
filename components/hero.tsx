'use client'

import { useState } from 'react'
import { Play, MapPin, CalendarDays, ArrowUpRight } from 'lucide-react'
import { VideoModal } from '@/components/video-modal'

const LINKEDIN_URL = 'https://www.linkedin.com/company/devfestireland'

export function Hero() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Video background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-1/2 aspect-video w-[177.78svh] min-w-full -translate-x-1/2 -translate-y-1/2">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/SHVfbE9Gevs?autoplay=1&mute=1&controls=0&loop=1&playlist=SHVfbE9Gevs&playsinline=1&rel=0&showinfo=0&modestbranding=1"
            title="DevFest Ireland background"
            allow="autoplay; encrypted-media"
            tabIndex={-1}
            aria-hidden="true"
          />
        </div>
        {/* Overlays for legibility */}
        <div className="absolute inset-0 bg-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent sm:to-background/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-background/30" />
      </div>

      {/* Content */}
      <div className="relative z-20 mx-auto w-full max-w-6xl px-5 py-28 [text-shadow:0_1px_20px_rgba(0,0,0,0.5)] sm:px-8">
        <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          <span className="h-px w-8 bg-google-blue" />
          Google Developer Groups · Ireland
        </div>

        <h1 className="mt-7 max-w-4xl text-balance font-display text-6xl font-bold leading-[0.92] tracking-tight sm:text-7xl lg:text-[5.5rem]">
          DevFest Ireland
          <span className="text-foreground/70"> &rsquo;26</span>
        </h1>

        <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-foreground/85">
          Ireland&apos;s largest community-led developer festival returns &mdash;
          a day of talks, code and connection across web, cloud, AI and mobile.
        </p>

        <div className="mt-9 flex flex-col gap-x-8 gap-y-3 border-l border-border pl-5 font-display text-base text-foreground sm:flex-row sm:items-center sm:border-l-0 sm:pl-0">
          <span className="flex items-center gap-2.5">
            <CalendarDays className="h-4 w-4 text-muted-foreground" />
            28 November 2026
          </span>
          <span className="hidden h-4 w-px bg-border sm:block" />
          <span className="flex items-center gap-2.5">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            National College of Ireland, Dublin
          </span>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-md bg-foreground px-7 py-3.5 font-display text-base font-semibold text-background transition-colors hover:bg-google-blue hover:text-white"
          >
            Get Notified
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <button
            type="button"
            onClick={() => setVideoOpen(true)}
            className="group inline-flex items-center justify-center gap-2.5 rounded-md border border-border bg-background/40 px-7 py-3.5 font-display text-base font-semibold text-foreground backdrop-blur transition-colors hover:border-foreground/40 hover:bg-background/70"
          >
            <Play className="h-3.5 w-3.5 fill-foreground text-foreground" />
            View 2025 Recap
          </button>
        </div>
      </div>

      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
    </section>
  )
}
