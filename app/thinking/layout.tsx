import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: "Thinking",
  description: "How I think about product strategy, design, and growth.",
  path: "/thinking",
})

export default function ThinkingLayout({ children }: { children: React.ReactNode }) {
  return children
}
