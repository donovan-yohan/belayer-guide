interface SkillTagProps {
  children: React.ReactNode
}

export default function SkillTag({ children }: SkillTagProps) {
  return (
    <span className="inline-block font-mono text-sm bg-surface text-accent px-3 py-1 rounded">
      {children}
    </span>
  )
}
