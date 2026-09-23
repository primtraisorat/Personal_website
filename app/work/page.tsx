"use client"

import Link from "next/link"
import { Shader, ChromaFlow, Swirl } from "shaders/react"
import { CustomCursor } from "@/components/custom-cursor"
import { GrainOverlay } from "@/components/grain-overlay"
import { SiteNav } from "@/components/site-nav"
import { WorkProjectCard, workProjects } from "@/components/work-project-card"

export default function WorkPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background px-6 py-24 text-foreground md:px-12 lg:px-16">
      <CustomCursor />
      <GrainOverlay />
      <SiteNav />
      <div className="fixed inset-0 z-0">
        <Shader className="h-full w-full">
          <Swirl
            colorA="#4E7DAA"
            colorB="#F2363E"
            speed={0.8}
            detail={0.8}
            blend={50}
            coarseX={40}
            coarseY={40}
            mediumX={40}
            mediumY={40}
            fineX={40}
            fineY={40}
          />
          <ChromaFlow
            baseColor="#CEF889"
            upColor="#F2363E"
            downColor="#CEF889"
            leftColor="#4E7DAA"
            rightColor="#F9F9E2"
            intensity={0.9}
            radius={1.8}
            momentum={25}
            maskType="alpha"
            opacity={0.97}
          />
        </Shader>
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <p className="mb-3 font-mono text-xs text-foreground/60 md:text-sm">/ Work</p>
        <h1 className="mb-10 font-sans text-4xl font-light tracking-tight md:mb-14 md:text-6xl">Selected projects</h1>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:gap-x-10 lg:gap-y-14">
          {workProjects.map((project) => (
            <WorkProjectCard key={project.pillName} project={project} />
          ))}
        </div>

        <Link
          href="/"
          className="mt-12 inline-block font-mono text-xs text-foreground/70 underline-offset-4 transition-colors hover:text-foreground hover:underline md:mt-16 md:text-sm"
        >
          Back to home
        </Link>
      </div>
    </main>
  )
}
