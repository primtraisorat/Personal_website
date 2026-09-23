import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: "About",
  description: "How I work across product strategy, visual design, and growth execution.",
  path: "/about",
})

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
