export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Next.js",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Female",
      href: "/female",
    },
    {
      title: "Male",
      href: "/male",
    },
    {
      title: "Kids",
      href: "/kids",
    },
    {
      title: "All products",
      href: "/all_products",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
