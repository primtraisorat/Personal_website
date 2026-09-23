import type { MetadataRoute } from "next"
import { caseStudies } from "@/content/case-studies"
import { siteUrl } from "@/lib/metadata"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/work", ...caseStudies.map((study) => `/work/${study.slug}`), "/about", "/thinking"]
  return routes.map((route) => ({ url: `${siteUrl}${route === "/" ? "" : route}` }))
}
