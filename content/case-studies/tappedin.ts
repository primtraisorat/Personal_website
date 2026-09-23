import type { CaseStudy, CaseStudyImage } from "./types"

const dir = "/projects/tappedin"

const searchFilters: CaseStudyImage = {
  src: `${dir}/search-filters.webp`,
  alt: "TappedIn search page reading “Search for events based your vibe…” with twelve mood prompts, beside a filters panel for category, price range, and dates",
  width: 1226,
  height: 933,
}

const forYou: CaseStudyImage = {
  src: `${dir}/for-you.webp`,
  alt: "For You page with Happening Now and Recommended for you rows, and an event detail panel showing friends who are going",
  width: 1311,
  height: 997,
}

const mapView: CaseStudyImage = {
  src: `${dir}/map-view.webp`,
  alt: "Results for “I want something chill and fun” as event cards with match scores, next to a map of west Los Angeles with event pins",
  width: 960,
  height: 692,
}

const profile: CaseStudyImage = {
  src: `${dir}/profile.webp`,
  alt: "Profile page for Joe Bruin with friends, upcoming, favorites, and attended counts above a grid of favorited events",
  width: 958,
  height: 690,
}

export const tappedin: CaseStudy = {
  slug: "tappedin",
  title: "TappedIn",
  intro:
    "TappedIn is an AI-powered event discovery platform that centralizes local events into one personalized experience. I designed the brand identity and end-to-end user interface to make discovering events feel effortless and engaging.",
  meta: {
    role: "Product Design Lead",
    timeline: "Mar–Jun 2026",
    team: "3 leads, 3 designers, 4 frontend, 2 backend, 2 AI engineers",
    tools: "Figma, OpenAI, Claude Code",
  },
  hero: {
    src: `${dir}/hero.webp`,
    alt: "TappedIn on three screens: the vibe search page, AI results beside a map of Los Angeles, and a user profile, with the red TappedIn mascot waving",
    width: 1774,
    height: 887,
  },
  ogImage: `${dir}/og.jpg`,
  sections: [
    {
      heading: "Problem",
      blocks: [
        {
          kind: "prose",
          paragraphs: [
            "Finding events is fragmented. Finding something to do means jumping between Instagram, Eventbrite, group chats, and Google. Existing platforms are good at listing events, but not at answering the simpler question: “What should I do this weekend?”",
            "TappedIn started with one goal: make finding something to do feel as easy as asking a friend.",
          ],
        },
      ],
    },
    {
      heading: "Solution",
      blocks: [
        {
          kind: "prose",
          paragraphs: ["A real-time AI agent that tailors event recommendations to whatever you’re feeling in the moment."],
        },
        {
          kind: "annotated",
          items: [
            {
              image: searchFilters,
              caption: "An AI-powered search bar that tailors events to your vibe, with manual filters for dates, prices, and location.",
            },
            {
              image: forYou,
              caption: "Or browse a living For You page, and see which events your friends are attending.",
            },
            {
              image: mapView,
              caption: "See and plan the trip with Google Maps.",
            },
            {
              image: profile,
              caption: "Sign in to get events personalized to you.",
            },
          ],
        },
        {
          kind: "images",
          images: [
            {
              src: `${dir}/sign-in.webp`,
              alt: "Onboarding screens: welcome, create account, sign in, username and birthday, and a grid for selecting interests",
              width: 2000,
              height: 394,
            },
          ],
          caption: "Onboarding ends with picking interests, so recommendations are personal from the first search.",
        },
      ],
    },
    {
      heading: "Process",
      blocks: [
        {
          kind: "prose",
          paragraphs: [
            "We started by looking at how existing Gen Z event discovery platforms approach discovery, search, curation, and personalization. We found that most event platforms feel overwhelming and confusing to navigate.",
          ],
        },
        {
          kind: "images",
          images: [
            {
              src: `${dir}/competitive-review-on-dark.webp`,
              alt: "Competitive review table comparing Luma, RA, Poppin, and Eventbrite by description, features, value proposition, disadvantages, screenshots, and what we like",
              width: 1815,
              height: 867,
            },
          ],
          caption: "Competitive review of Luma, RA, Poppin, and Eventbrite.",
        },
        { kind: "prose", paragraphs: ["This shaped TappedIn’s user flow."] },
        {
          kind: "images",
          images: [
            {
              src: `${dir}/user-flow-on-dark.webp`,
              alt: "User flow from the landing page to profile, AI search, or recommended listings, through split-screen results and event details, to RSVP off the website",
              width: 2000,
              height: 821,
            },
          ],
          caption: "User flow: landing page to AI search, split-screen results, event details, and RSVP.",
        },
      ],
    },
    {
      heading: "Design Decisions",
      blocks: [
        {
          kind: "decision",
          number: "01",
          title: "AI search bar as landing page",
          paragraphs: [
            "The overstimulation issue we saw from our research was caused by a cluttered recommended listings page.",
            "TappedIn’s advantage is the intentional search. Leading with the AI search bar lets users start with their mood, budget, location, or plans in their own words, while recommendations remain available for users who want to browse.",
          ],
          images: [searchFilters, forYou],
        },
        {
          kind: "decision",
          number: "02",
          title: "Show where events are happening",
          paragraphs: [
            "A list makes events easy to compare. A map makes them easy to plan around. Instead of choosing one, I combined both using a split screen.",
            "Users can browse recommendations while immediately seeing where each event is happening around them.",
          ],
          images: [mapView],
        },
        {
          kind: "decision",
          number: "03",
          title: "Make it social",
          paragraphs: [
            "Events are inherently social, so I didn’t want TappedIn to feel like another ticket marketplace.",
            "Profiles let users save events, see what they’ve attended, connect with friends, and discover plans through people they know.",
          ],
          images: [profile],
        },
      ],
    },
    {
      heading: "Outcome",
      blocks: [
        {
          kind: "stats",
          stats: [
            { value: "12", label: "features" },
            { value: "4", label: "pages" },
            { value: "10+", label: "event sources" },
          ],
        },
        {
          kind: "prose",
          paragraphs: ["A working build with live events from 10+ sources on a real map."],
        },
      ],
    },
    {
      heading: "Reflection",
      blocks: [
        {
          kind: "prose",
          paragraphs: [
            "The MVP proved the core experience, but personalization gets better with use.",
            "Next, I’d focus on learning from saves, clicks, attendance, searches, and friend activity so recommendations become more relevant over time.",
          ],
        },
      ],
    },
  ],
  next: "bruinplace",
}
