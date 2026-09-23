import type { Metadata } from "next"

export const siteUrl = "https://primtraisorat.com"
export const siteName = "Prim Traisorat"

/** Default link-preview image, rendered by app/og/route.tsx */
const defaultOgImage = "/og"

/** Title, description, Open Graph, and Twitter tags for one route */
export function pageMetadata({
  title,
  description,
  path,
  image = defaultOgImage,
}: {
  title: string
  description: string
  path: string
  image?: string
}): Metadata {
  const fullTitle = title.includes(siteName) ? title : `${title} — ${siteName}`
  return {
    title: fullTitle,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName,
      type: "website",
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  }
}
