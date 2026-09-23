"use client"

import Link from "next/link"
import { Shader, ChromaFlow, Swirl } from "shaders/react"
import { CustomCursor } from "@/components/custom-cursor"
import { GrainOverlay } from "@/components/grain-overlay"
import { SiteNav } from "@/components/site-nav"

const services = [
  {
    title: "Strategy",
    details:
      "I define product direction through market framing, user insight synthesis, and focused opportunity mapping.",
  },
  {
    title: "Design",
    details:
      "I build clear, expressive product experiences across wireframes, visual systems, and interaction patterns.",
  },
  {
    title: "Growth",
    details:
      "I support launches and iteration cycles with measurable experiments that improve adoption and retention.",
  },
]

export default function ServicesPage() {
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
        <p className="mb-3 font-mono text-xs text-foreground/60 md:text-sm">/ Thinking</p>
        <h1 className="mb-8 font-sans text-4xl font-light tracking-tight md:mb-12 md:text-6xl">How I think</h1>

        <div className="space-y-8 md:space-y-10">
          {services.map((service) => (
            <article key={service.title} className="border-b border-foreground/15 pb-6 md:pb-8">
              <h2 className="mb-2 font-sans text-2xl font-light md:text-4xl">{service.title}</h2>
              <p className="max-w-3xl text-sm leading-relaxed text-foreground/85 md:text-base">{service.details}</p>
            </article>
          ))}
        </div>

        <Link
          href="/"
          className="mt-10 inline-block font-mono text-xs text-foreground/70 underline-offset-4 transition-colors hover:text-foreground hover:underline md:mt-12 md:text-sm"
        >
          Back to home
        </Link>
      </div>
    </main>
  )
}
