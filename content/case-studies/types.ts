export type CaseStudyImage = {
  src: string
  alt: string
  width: number
  height: number
}

export type CaseStudyVideo = {
  src: string
  poster: string
  /** Describes what the recording shows, for screen readers */
  label: string
  width: number
  height: number
}

export type Block =
  | { kind: "prose"; paragraphs: string[] }
  | {
      kind: "images"
      images: CaseStudyImage[]
      caption?: string
      /** Centered at a narrower width, for diagrams that would be oversized full-bleed */
      narrow?: boolean
    }
  | { kind: "videos"; items: { video: CaseStudyVideo; caption: string }[] }
  | { kind: "annotated"; items: { image: CaseStudyImage; caption: string }[] }
  | { kind: "list"; items: { title: string; body: string }[] }
  | { kind: "stats"; stats: { value: string; label: string }[] }
  | { kind: "decision"; number: string; title: string; paragraphs: string[]; images: CaseStudyImage[] }

export type Section = {
  heading: string
  blocks: Block[]
}

export type CaseStudy = {
  slug: string
  title: string
  intro: string
  meta: { role: string; timeline: string; team: string; tools: string }
  hero: CaseStudyImage
  /** JPG/PNG used for link previews (WebP isn't supported everywhere) */
  ogImage: string
  sections: Section[]
  /** Slug of the next case study in /work order */
  next: string
}
