"use client"

import { Shader, ChromaFlow, Swirl } from "shaders/react"
import { CustomCursor } from "@/components/custom-cursor"
import { GrainOverlay } from "@/components/grain-overlay"

/** The swirl background, grain, and cursor used across the inner pages */
export function PageBackground() {
  return (
    <>
      <CustomCursor />
      <GrainOverlay />
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
    </>
  )
}
