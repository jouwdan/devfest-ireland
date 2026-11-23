type Slot =
  | { time: string; title: string; speaker: string; lightning?: boolean }
  | { time: string; label: string }

const talks: Slot[] = [
  { time: '08:30', label: 'Registration' },
  { time: '09:00', label: 'Welcome' },
  {
    time: '09:15–09:45',
    title: 'Build with Modern Web Guidance',
    speaker: 'Milica Mihajlija',
  },
  {
    time: '09:45–10:15',
    title: 'Modern Web Development with AI: The Latest Google Tools in Practice',
    speaker: 'Fabian Krumbholz',
  },
  {
    time: '10:15–10:45',
    title: 'Manage AI security posture with the Secure AI Framework',
    speaker: 'Seifeddin Mansri',
  },
  {
    time: '10:45–11:15',
    title: 'Assume It Leaks — Live LLM Attacks and the OWASP 2026 Top 10',
    speaker: 'Lisa Carpenter',
  },
  { time: '11:15–11:45', label: 'Morning Break' },
  {
    time: '11:45–12:15',
    title:
      'Sandboxing the Unknown: Safe Production Code Execution for AI Agents with Cloud Run',
    speaker: 'Nicholas Breckwoldt',
  },
  {
    time: '12:15–12:45',
    title: 'The AI Orchestrator Pattern: Teaching Agents How Your Team Works',
    speaker: 'Eury Perez',
  },
  {
    time: '12:45–13:15',
    title:
      'One harness, different capabilities: a personal agent with Kotlin Multiplatform',
    speaker: 'Fernando Obregon',
  },
  { time: '13:15–14:00', label: 'Lunch' },
  {
    time: '14:00–14:30',
    title: 'Mastering Graph Engineering with ADK 2.x',
    speaker: 'Oleksandr Saienko',
  },
  {
    time: '14:30–15:00',
    title: 'Follow the Twenty Dollars: Who’s Paying for Your Agent to Run Overnight?',
    speaker: 'Yuan Zhang',
  },
  {
    time: '15:00–15:30',
    title: 'The Agentic Delivery Pipeline: Where AI Agents Fit and Where They Don’t',
    speaker: 'Svitlana Samko',
  },
  { time: '15:30–15:45', label: 'Afternoon Break' },
  {
    time: '15:45–16:15',
    title: 'Sing Along with Code: Building a Karaoke App with JavaScript',
    speaker: 'Rowdy Rabouw',
  },
  {
    time: '16:15–16:30',
    title: 'What we learned at Fin: running efficient Claude Code sessions',
    speaker: 'Akshay Katyal',
    lightning: true,
  },
  {
    time: '16:30–16:45',
    title: 'How AI is changing the role of the software engineer',
    speaker: 'Ivan Abad',
    lightning: true,
  },
  { time: '16:45–17:00', label: 'Closing remarks' },
]

const workshops = [
  {
    time: '14:00–15:00',
    title: 'The Agent-Ready Web: Architecting Applications for WebMCP',
    speaker: 'Patty O’Callaghan',
  },
  {
    time: '15:45–16:45',
    title: 'Put Down the API Key: Building a Real AI Model from Scratch',
    speaker: 'Lewis Shearer',
  },
]

export function Agenda() {
  return (
    <section
      id="agenda"
      className="relative border-t border-border bg-background py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          <span className="h-px w-8 bg-google-blue" />
          Agenda
        </div>
        <h2 className="mt-6 max-w-2xl text-balance font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          The schedule for 28 November.
        </h2>
        <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          Talks run all day in Room 1, with hands-on workshops in Room 2 during
          the afternoon.
        </p>

        <div className="mt-14 grid gap-10 lg:grid-cols-3 lg:gap-12">
          <div className="lg:col-span-2">
            <h3 className="font-display text-lg font-semibold">Talks</h3>
            <p className="font-mono text-sm text-muted-foreground">Room 1</p>

            <ol className="mt-6 flex flex-col">
              {talks.map((slot) =>
                'label' in slot ? (
                  <li
                    key={slot.time}
                    className="flex gap-4 border-t border-border py-3 font-mono text-sm text-muted-foreground sm:gap-6"
                  >
                    <span className="w-28 shrink-0">{slot.time}</span>
                    <span>{slot.label}</span>
                  </li>
                ) : (
                  <li
                    key={slot.time}
                    className="flex flex-col gap-1 border-t border-border py-5 sm:flex-row sm:gap-6"
                  >
                    <span className="w-28 shrink-0 font-mono text-sm text-google-yellow">
                      {slot.time}
                    </span>
                    <div>
                      <p className="font-medium leading-snug text-foreground">
                        {slot.title}
                        {slot.lightning && (
                          <span className="ml-2 inline-block rounded-full bg-google-yellow/15 px-2 py-0.5 align-middle font-mono text-xs uppercase tracking-wide text-google-yellow">
                            Lightning
                          </span>
                        )}
                      </p>
                      <p className="mt-1 font-mono text-sm text-muted-foreground">
                        {slot.speaker}
                      </p>
                    </div>
                  </li>
                ),
              )}
            </ol>
          </div>

          <div>
            <div className="relative overflow-hidden rounded-lg border border-border bg-card p-7 lg:sticky lg:top-8">
              <span className="absolute inset-x-0 top-0 h-0.5 bg-google-blue" />
              <h3 className="font-display text-lg font-semibold">Workshops</h3>
              <p className="font-mono text-sm text-muted-foreground">
                Room 2 &middot; Afternoon
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                Hands-on sessions. Bring your laptop.
              </p>

              <ol className="mt-6 flex flex-col gap-7">
                {workshops.map((w) => (
                  <li key={w.time}>
                    <span className="font-mono text-sm text-google-yellow">
                      {w.time}
                    </span>
                    <p className="mt-1 font-display font-semibold leading-snug">
                      {w.title}
                    </p>
                    <p className="mt-1 font-mono text-sm text-muted-foreground">
                      {w.speaker}
                    </p>
                    <span className="mt-3 inline-block rounded-full bg-foreground px-3 py-1 text-xs font-semibold text-background">
                      Workshop &middot; 60 min
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
