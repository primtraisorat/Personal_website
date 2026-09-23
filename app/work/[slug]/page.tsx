import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { CaseStudy } from "@/components/case-study"
import { caseStudies, getCaseStudy } from "@/content/case-studies"
import { pageMetadata } from "@/lib/metadata"

export const dynamicParams = false

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const study = getCaseStudy((await params).slug)
  if (!study) return {}

  return pageMetadata({
    title: study.title,
    description: study.intro.split(/(?<=\.)\s/)[0],
    path: `/work/${study.slug}`,
    image: study.ogImage,
  })
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const study = getCaseStudy((await params).slug)
  if (!study) notFound()

  return <CaseStudy study={study} next={getCaseStudy(study.next)} />
}
