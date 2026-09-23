import Image from "next/image"

export type WorkProject = {
  pillName: string
  year: string
  tagline: string
  meta: string
  coverImage?: string
  coverAlt?: string
  /** 0–1, applied when `coverImage` is set; defaults to 0.9 */
  coverOpacity?: number
}

export const workProjects: WorkProject[] = [
  {
    pillName: "BruinPlace",
    year: "2026",
    tagline: "A housing marketplace experience tailored for students to find, compare, and secure college housing.",
    meta: "BRUINPLACE • UCLA • 2026",
    coverImage: "/projects/bruinplace.png",
    coverAlt: "BruinPlace on a MacBook — listings, map, and search for student housing near UCLA",
    coverOpacity: 0.9,
  },
  {
    pillName: "Comet",
    year: "2025",
    tagline: "An academic social network for collaboration, discovery, and knowledge sharing around research and learning.",
    meta: "COMET • PERPLEXITY AI • 2025",
    coverImage: "/projects/comet-perplexity.png",
    coverAlt: "Comet by Perplexity — tablet UI with search and feature cards",
  },
  {
    pillName: "MAKE",
    year: "2025",
    tagline: "A goal-based personal finance product to plan, track, and act on financial milestones with confidence.",
    meta: "MAKE • BCG • 2025",
    coverImage: "/projects/make-bcg.png",
    coverAlt:
      "MAKE — three phones with Insights, Bills, and Organize Cloud Pocket on a pastel gradient with illustrated clouds",
    coverOpacity: 0.9,
  },
]

export function WorkProjectCard({
  project,
  compact = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: {
  project: WorkProject
  /** Stacks the meta line under the tagline, for narrow columns */
  compact?: boolean
  sizes?: string
}) {
  return (
    <article className="group">
      <div className="origin-top overflow-hidden rounded-3xl shadow-[0_16px_32px_-8px_rgba(0,0,0,0.28)] ring-1 ring-foreground/10 transition-transform duration-300 ease-out will-change-transform group-hover:scale-[1.02]">
        <div className="relative aspect-[16/10] bg-foreground/[0.05] ring-1 ring-inset ring-foreground/10">
          {project.coverImage ? (
            <Image
              src={project.coverImage}
              alt={project.coverAlt ?? `${project.pillName} project preview`}
              fill
              className="object-cover"
              style={{ opacity: project.coverOpacity ?? 0.9 }}
              sizes={sizes}
            />
          ) : null}
          <div
            className={`pointer-events-none absolute z-10 ${
              compact ? "right-3 top-3" : "right-5 top-5 md:right-6 md:top-6"
            }`}
          >
            <div
              className={`rounded-full bg-white font-mono text-neutral-950 shadow-sm ${
                compact ? "px-3 py-1.5 text-[11px]" : "px-4 py-2 text-xs md:px-5 md:py-2.5 md:text-sm"
              }`}
            >
              <span className="font-semibold">{project.pillName}</span>
              <span className="text-neutral-500">{" • "}</span>
              <span className="font-normal text-neutral-500">{project.year}</span>
            </div>
          </div>
        </div>
      </div>

      {compact ? (
        <div className="mt-4 space-y-2">
          <p className="font-mono text-xs leading-relaxed text-foreground/70">{project.tagline}</p>
          <p className="font-mono text-xs text-foreground/50">{project.meta}</p>
        </div>
      ) : (
        <div className="mt-4 flex items-start justify-between gap-6 md:mt-5">
          <p className="max-w-[min(100%,28rem)] font-mono text-xs leading-relaxed text-foreground/70 md:text-sm">
            {project.tagline}
          </p>
          <p className="shrink-0 max-w-[45%] text-right font-mono text-xs leading-relaxed text-foreground/70 md:text-sm">
            {project.meta}
          </p>
        </div>
      )}
    </article>
  )
}
