import { Code2, Users, Lightbulb, Sparkles } from 'lucide-react'

const items = [
  {
    icon: Code2,
    title: 'Technical Talks',
    body: 'Deep-dive sessions on web, cloud, AI and mobile from expert speakers.',
    accent: 'bg-google-blue',
  },
  {
    icon: Users,
    title: 'Community',
    body: 'Meet developers, GDG organisers and Google Developer Experts from across Ireland.',
    accent: 'bg-google-red',
  },
  {
    icon: Lightbulb,
    title: 'Hands-on Learning',
    body: 'Workshops and codelabs to build real skills you can take back to your team.',
    accent: 'bg-google-yellow',
  },
  {
    icon: Sparkles,
    title: 'Inspiration',
    body: 'Discover what is next in technology and get inspired to build for good.',
    accent: 'bg-google-green',
  },
]

export function Highlights() {
  return (
    <section className="relative border-t border-border bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          <span className="h-px w-8 bg-google-blue" />
          The day
        </div>
        <h2 className="mt-6 max-w-2xl text-balance font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          One day. Endless ways to level up.
        </h2>
        <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          DevFest brings the global developer community together for a
          celebration of technology, learning and connection.
        </p>

        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="group relative flex flex-col bg-background p-7 transition-colors hover:bg-card"
            >
              <span className={`absolute inset-x-0 top-0 h-0.5 ${item.accent}`} />
              <div className="flex items-center justify-between">
                <item.icon className="h-6 w-6 text-foreground" strokeWidth={1.5} />
                <span className="font-mono text-xs text-muted-foreground">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-8 font-display text-lg font-semibold">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
