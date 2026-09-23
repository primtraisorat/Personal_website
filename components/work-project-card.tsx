import Image from "next/image"
import Link from "next/link"

export type WorkProject = {
  pillName: string
  year: string
  tagline: string
  meta: string
  coverImage?: string
  coverAlt?: string
  /** 0–1, applied when `coverImage` is set; defaults to 0.9 */
  coverOpacity?: number
  /** Case study page, once it exists */
  href?: string
}

export const workProjects: WorkProject[] = [
  {
    pillName: "TappedIn",
    year: "2026",
    tagline: "An AI-powered event discovery platform that centralizes local events into one personalized experience.",
    meta: "TAPPEDIN • PRODUCT LEAD • 2026",
    coverImage: "/projects/tappedin.webp",
    coverAlt: "TappedIn event cards fanned out under an “Im feeling artsy” prompt, one showing a 97% match score",
    coverOpacity: 0.9,
    href: "/work/tappedin",
  },
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
}: {
  project: WorkProject
}) {
  const card = (
    <>
      <div className="origin-top overflow-hidden rounded-3xl shadow-[0_16px_32px_-8px_rgba(0,0,0,0.28)] ring-1 ring-foreground/10 transition-transform duration-300 ease-out will-change-transform group-hover:scale-[1.02]">
        <div className="relative aspect-[16/10] bg-foreground/[0.05] ring-1 ring-inset ring-foreground/10">
          {project.coverImage ? (
            <Image
              src={project.coverImage}
              alt={project.coverAlt ?? `${project.pillName} project preview`}
              fill
              className="object-cover"
              style={{ opacity: project.coverOpacity ?? 0.9 }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : null}
          <div className="pointer-events-none absolute right-5 top-5 z-10 md:right-6 md:top-6">
            <div className="rounded-full bg-white px-4 py-2 font-mono text-xs text-neutral-950 shadow-sm md:px-5 md:py-2.5 md:text-sm">
              <span className="font-semibold">{project.pillName}</span>
              <span className="text-neutral-500">{" • "}</span>
              <span className="font-normal text-neutral-500">{project.year}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-start justify-between gap-6 md:mt-5">
        <p className="max-w-[min(100%,28rem)] font-mono text-xs leading-relaxed text-foreground/70 md:text-sm">
          {project.tagline}
        </p>
        <p className="shrink-0 max-w-[45%] text-right font-mono text-xs leading-relaxed text-foreground/70 md:text-sm">
          {project.meta}
        </p>
      </div>
      {project.href ? (
        <p className="mt-3 font-mono text-xs text-foreground/60 transition-colors group-hover:text-foreground md:text-sm">
          View case study{" "}
          <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </p>
      ) : null}
    </>
  )

  return (
    <article className="group">
      {project.href ? (
        <Link href={project.href} className="block rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-4">
          {card}
        </Link>
      ) : (
        card
      )}
    </article>
  )
}
