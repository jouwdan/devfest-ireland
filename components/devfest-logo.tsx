export function DevFestLogo({ className = '' }: { className?: string }) {
  return (
    <span
      className={`font-display font-bold tracking-tight text-foreground ${className}`}
      aria-label="DevFest Ireland '26"
    >
      DevFest Ireland &rsquo;26<span className="text-google-blue">.</span>
    </span>
  )
}
