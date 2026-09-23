import Image from "next/image"
import Link from "next/link"
import { PageBackground } from "@/components/page-background"
import { SiteNav } from "@/components/site-nav"
import type { Block, CaseStudy as CaseStudyData, CaseStudyImage } from "@/content/case-studies/types"

const captionClass = "mt-3 font-mono text-xs leading-relaxed text-foreground/60 md:text-sm"
/** Headings and body copy span the same width as the images */
const textColumn = "w-full"

export function CaseStudy({ study, next }: { study: CaseStudyData; next?: CaseStudyData }) {
  const metaItems = [
    { label: "Role", value: study.meta.role },
    { label: "Timeline", value: study.meta.timeline },
    { label: "Team", value: study.meta.team },
    { label: "Tools", value: study.meta.tools },
  ]

  return (
    <main className="relative min-h-screen overflow-hidden bg-background px-6 pb-24 pt-32 text-foreground md:px-12 md:pb-28 md:pt-40 lg:px-16">
      <PageBackground />
      <SiteNav />

      <article className="relative z-10 mx-auto w-full max-w-7xl">
        <header className={textColumn}>
          <p className="mb-8 font-mono text-xs text-foreground/60 md:mb-10 md:text-sm">
            <Link href="/work" className="underline-offset-4 transition-colors hover:text-foreground hover:underline">
              / Work
            </Link>{" "}
            / {study.title}
          </p>
          <h1 className="sr-only">{study.title}</h1>
          <p className="text-xl font-light leading-snug text-foreground/90 md:text-2xl lg:text-[1.75rem] lg:leading-snug">
            {study.intro}
          </p>

          <dl className="mt-14 grid grid-cols-1 gap-6 md:mt-24 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            {metaItems.map((item) => (
              <div key={item.label}>
                <dt className="text-sm text-foreground/60">{item.label}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-foreground/85 md:mt-3">{item.value}</dd>
              </div>
            ))}
          </dl>
        </header>

        <div className="mt-12 overflow-hidden rounded-3xl shadow-[0_16px_32px_-8px_rgba(0,0,0,0.28)] ring-1 ring-foreground/10 md:mt-16">
          <Image
            src={study.hero.src}
            alt={study.hero.alt}
            width={study.hero.width}
            height={study.hero.height}
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="h-auto w-full opacity-90"
          />
        </div>

        {study.sections.map((section) => (
          <section key={section.heading} className="mt-24 md:mt-32">
            <h2 className={`${textColumn} mb-6 font-sans text-3xl font-light tracking-tight md:mb-8 md:text-5xl`}>{section.heading}</h2>
            <div className="space-y-10 md:space-y-14">
              {section.blocks.map((block, i) => (
                <CaseStudyBlock key={i} block={block} />
              ))}
            </div>
          </section>
        ))}

        <nav aria-label="Next project" className={`${textColumn} mt-24 border-t border-foreground/15 pt-8 md:mt-32 md:pt-10`}>
          <p className="mb-3 font-mono text-xs text-foreground/60 md:text-sm">{next ? "Next project" : "More work"}</p>
          <Link
            href={next ? `/work/${next.slug}` : "/work"}
            className="group inline-flex items-baseline gap-4 font-sans text-4xl font-light tracking-tight md:text-6xl"
          >
            {next ? next.title : "All projects"}
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </Link>
        </nav>
      </article>
    </main>
  )
}

function CaseStudyBlock({ block }: { block: Block }) {
  switch (block.kind) {
    case "prose":
      return (
        <div className={`${textColumn} space-y-4 text-base leading-relaxed text-foreground/85 md:text-lg`}>
          {block.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      )

    case "images":
      return (
        <figure>
          <div className="space-y-6">
            {block.images.map((image) => (
              <CaseStudyFigureImage key={image.src} image={image} sizes="(max-width: 1280px) 100vw, 1280px" />
            ))}
          </div>
          {block.caption ? <figcaption className={`${textColumn} ${captionClass}`}>{block.caption}</figcaption> : null}
        </figure>
      )

    case "annotated":
      return (
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:gap-x-10">
          {block.items.map((item) => (
            <figure key={item.image.src} className="flex flex-col justify-end">
              <CaseStudyFigureImage image={item.image} sizes="(max-width: 768px) 100vw, 640px" />
              <figcaption className={captionClass}>{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      )

    case "list":
      return (
        <ul className={`${textColumn} grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8`}>
          {block.items.map((item) => (
            <li key={item.title} className="border-t border-foreground/15 pt-4">
              <p className="mb-2 font-sans text-xl font-light md:text-2xl">{item.title}</p>
              <p className="text-sm leading-relaxed text-foreground/75 md:text-base">{item.body}</p>
            </li>
          ))}
        </ul>
      )

    case "stats":
      return (
        <dl className={`${textColumn} grid grid-cols-3 gap-6 md:gap-8`}>
          {block.stats.map((stat) => (
            <div key={stat.label} className="border-t border-foreground/15 pt-4">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block font-sans text-4xl font-light tracking-tight md:text-7xl">{stat.value}</span>
                <span className="mt-1 block font-mono text-xs text-foreground/60 md:text-sm">{stat.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      )

    case "decision":
      return (
        <div className="space-y-6 md:space-y-8">
          <h3 className={`${textColumn} font-sans text-xl font-light md:text-2xl`}>
            <span className="text-foreground/60">{block.number} —</span> {block.title}
          </h3>
          <div className={`${textColumn} space-y-4 text-base leading-relaxed text-foreground/85 md:text-lg`}>
            {block.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div
            className={
              block.images.length > 1
                ? "grid grid-cols-1 items-end gap-6 md:grid-cols-2 md:gap-8"
                : "mx-auto max-w-4xl"
            }
          >
            {block.images.map((image) => (
              <CaseStudyFigureImage
                key={image.src}
                image={image}
                sizes={block.images.length > 1 ? "(max-width: 768px) 100vw, 640px" : "(max-width: 896px) 100vw, 896px"}
              />
            ))}
          </div>
        </div>
      )
  }
}

function CaseStudyFigureImage({ image, sizes }: { image: CaseStudyImage; sizes: string }) {
  return (
    <Image
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      sizes={sizes}
      className="h-auto w-full rounded-2xl opacity-90"
    />
  )
}
