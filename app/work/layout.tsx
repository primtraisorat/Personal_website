import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: "Work",
  description: "Case studies in product design, AI, and brand.",
  path: "/work",
})

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children
}
