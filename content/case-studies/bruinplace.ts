import type { CaseStudy } from "./types"

const dir = "/projects/bruinplace"

const video = (name: string, label: string) => ({
  src: `${dir}/${name}.mp4`,
  poster: `${dir}/${name}-poster.webp`,
  label,
  width: 1280,
  height: 842,
})

export const bruinplace: CaseStudy = {
  slug: "bruinplace",
  title: "BruinPlace",
  intro:
    "BruinPlace is a digital housing platform built to help UCLA students find off-campus housing. I explored user flows and designed UI/UX aimed at increasing transparency and reducing friction in a high-stakes search process.",
  meta: {
    role: "Product Designer",
    timeline: "Jan–Mar 2026",
    team: "2 leads, 4 designers, 6 engineers",
    tools: "Figma, FigJam",
  },
  hero: {
    src: `${dir}/hero.webp`,
    alt: "BruinPlace on two laptops, the home page reading “Off-campus housing, built around you.” with recommended listings, surrounded by illustrated windows and the bear mascot",
    width: 2000,
    height: 895,
  },
  ogImage: `${dir}/og.jpg`,
  sections: [
    {
      heading: "Problem",
      blocks: [
        {
          kind: "prose",
          paragraphs: [
            "After 30+ user interviews and 100+ survey responses, UCLA students had three main issues with the current off-campus housing search process:",
          ],
        },
        {
          kind: "images",
          narrow: true,
          images: [
            {
              src: `${dir}/problems.webp`,
              alt: "Three issues: listing information doesn’t account for student needs; students need to navigate dozens of platforms to see all options; listings and posters lack trustworthiness",
              width: 2000,
              height: 520,
            },
          ],
        },
        { kind: "prose", paragraphs: ["This is how students currently find housing:"] },
        {
          kind: "images",
          narrow: true,
          images: [
            {
              src: `${dir}/current-flow.webp`,
              alt: "Current flow: a student searches FB Marketplace, Reddit, Apartments.com, Zillow, Instagram, Snapchat, and friends (high risk), then pieces together scattered information, checks trustworthiness, and confirms reviews and distance (consequences) before reaching out",
              width: 2000,
              height: 844,
            },
          ],
          caption: "Red marks high-risk sources; yellow marks the consequences students deal with.",
        },
      ],
    },
    {
      heading: "Solution",
      blocks: [
        {
          kind: "prose",
          paragraphs: ["A local housing marketplace that is centralized, personalized, and trustworthy."],
        },
        {
          kind: "images",
          narrow: true,
          images: [
            {
              src: `${dir}/solution-flow.webp`,
              alt: "New flow: listings across dozens of platforms, student-specific listing information, and built-in trust with UCLA verification feed one consolidated marketplace where students search, filter, and identify listings before reaching out",
              width: 2000,
              height: 880,
            },
          ],
        },
        {
          kind: "videos",
          items: [
            {
              video: video(
                "landing",
                "Screen recording of the BruinPlace home page: a search bar for address, neighborhood, or zip code above rows of recommended listings",
              ),
              caption:
                "The home page leads with search by address, neighborhood, or zip code, with recommended listings right below.",
            },
            {
              video: video(
                "split-search",
                "Screen recording of split-screen search: building cards beside a map with price pins, sorting by top rated, switching between buildings and units, and opening filters",
              ),
              caption:
                "Split-screen search keeps listings and the map side by side. Sort, filter by beds, baths, and commute, and switch between buildings and units.",
            },
            {
              video: video(
                "housing",
                "Screen recording of a building page: photo gallery, highlights, available units in a pop-up, distance from campus, and student reviews",
              ),
              caption:
                "Building pages bring photos, amenities, open units, distance from campus by walk, bike, car, or bus, and student reviews into one place.",
            },
            {
              video: video(
                "profiles",
                "Screen recording of a profile: favorited buildings and units, the user’s reviews, and settings with notification toggles",
              ),
              caption:
                "Profiles keep favorited buildings and units, your reviews, and settings together, with alerts when a saved listing opens up.",
            },
          ],
        },
      ],
    },
    {
      heading: "My Role",
      blocks: [
        {
          kind: "prose",
          paragraphs: [
            "I designed search: the map, the filters, and the split-screen view that holds them together. Emily Ayson mapped the browse flow. Rachel Lee designed the listing cards.",
          ],
        },
      ],
    },
    {
      heading: "Process",
      blocks: [
        {
          kind: "prose",
          paragraphs: [
            "We started by analysing the current options that students were using for their housing search.",
            "Then, we mapped out different features on a user flow diagram.",
          ],
        },
        {
          kind: "images",
          narrow: true,
          images: [
            {
              src: `${dir}/user-flow.webp`,
              alt: "User flow diagrams for browsing (home page, listing grids, map, filters, listing details), posting a listing (listing form, preview, publish), and creating an account (sign-in, UCLA sign-in, account creation)",
              width: 1404,
              height: 2000,
            },
          ],
          caption: "Browse, post listing, and create account flows.",
        },
        {
          kind: "prose",
          paragraphs: [
            "With the user flow established, I explored multiple layouts for listing cards and detail pages. Each iteration focused on reducing visual clutter while improving hierarchy and scanability.",
          ],
        },
        {
          kind: "images",
          images: [
            {
              src: `${dir}/card-iterations.webp`,
              alt: "Four early grayscale listing card iterations with tags, prices, and ratings, next to the finalized card showing price, rating, beds, baths, square footage, and address",
              width: 2000,
              height: 1183,
            },
          ],
          caption: "Early listing card iterations and the finalized card.",
        },
        {
          kind: "prose",
          paragraphs: [
            "Our developers requested our team to use the ShadCN UI toolkit. Using the pre-made assets, we edited and customized them so it fit our branding and remained consistent across screens. I helped flesh out the button elements of our design system.",
          ],
        },
        {
          kind: "images",
          images: [
            {
              src: `${dir}/design-system.webp`,
              alt: "BruinPlace design system components: review cards, search and sort controls, buttons, notifications, unit cards, listing cards, toggles, dropdowns, headers, footer, and profile tabs",
              width: 1788,
              height: 1678,
            },
          ],
          caption: "Components customized from ShadCN UI.",
        },
      ],
    },
    {
      heading: "Testing",
      blocks: [
        {
          kind: "list",
          items: [
            {
              title: "Split-screen in the header",
              body: "Students couldn’t find split-screen, so it moved into the header.",
            },
            {
              title: "“Top rated”",
              body: "“Highest to lowest” read as price, not rating, so it was renamed “Top rated.”",
            },
            {
              title: "Buildings and units",
              body: "Buildings and units blurred together, so a toggle now separates them.",
            },
          ],
        },
      ],
    },
  ],
  next: "comet",
}
