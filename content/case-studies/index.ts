import { tappedin } from "./tappedin"
import type { CaseStudy } from "./types"

export type { CaseStudy } from "./types"

/** In /work order. Add each project here as its case study is written. */
export const caseStudies: CaseStudy[] = [tappedin]

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug)
}
