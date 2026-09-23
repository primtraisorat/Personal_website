"use client"

import Link from "next/link"
import { useReveal } from "@/hooks/use-reveal"
import { WorkProjectCard, workProjects } from "@/components/work-project-card"

export function WorkSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-8 mt-12 transition-all duration-700 md:mb-10 md:mt-0 md:flex md:items-end md:justify-between ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <div>
            <h2 className="mb-2 mt-4 font-sans text-5xl font-light tracking-tight text-foreground md:mt-0 md:text-6xl lg:text-7xl">
              Featured
            </h2>
            <p className="font-mono text-sm text-foreground/60 md:text-base">/ Recent explorations</p>
          </div>
          <SeeMoreLink className="hidden md:inline-block" />
        </div>

        {/* Swipeable row on phones, two columns (same size as /work) from md up */}
        <div
          className="-mx-6 flex snap-x snap-mandatory scroll-px-6 gap-5 overflow-x-auto px-6 pb-4 pt-2 md:mx-0 md:grid md:grid-cols-2 md:gap-x-8 md:overflow-visible md:px-0 lg:gap-x-10"
          style={{ scrollbarWidth: "none" }}
        >
          {workProjects.slice(0, 2).map((project, i) => (
            <div
              key={project.pillName}
              className={`w-[85%] shrink-0 snap-start transition-all duration-700 md:w-auto ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <WorkProjectCard project={project} />
            </div>
          ))}
        </div>

        <div className="mt-4 md:hidden">
          <SeeMoreLink />
        </div>
      </div>
    </section>
  )
}

function SeeMoreLink({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/work"
      className={`font-mono text-xs text-foreground/70 underline-offset-4 transition-colors hover:text-foreground hover:underline md:text-sm ${className}`}
    >
      See more
    </Link>
  )
}
