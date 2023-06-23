import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { Input } from "./ui/input"
import { Search, ShoppingCart } from "lucide-react"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  return (
    <header className="sticky pt-5  z-40 w-full bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            
            <Input  leftIcon={<Search size="16" />} type="search" placeholder="What you looking for" />
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div className={cn("bg-gray-100 rounded-full h-12 w-12 flex items-center justify-center ml-10 relative")}>
                <span className={cn("bg-red-500 rounded-full h-5 w-4 flex items-center justify-center absolute top-0 right-0 text-white")}>0</span>
              <ShoppingCart />
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
