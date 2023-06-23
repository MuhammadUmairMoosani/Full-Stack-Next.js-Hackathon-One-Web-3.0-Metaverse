import * as React from "react"
import Link from "next/link"
import Image from 'next/image'

import { NavItem } from "@/types/nav"
import { cn } from "@/lib/utils"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-24">
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/Logo.webp"
          width={150}
          height={60}
          alt="Picture of the author"
        />
      </Link>
      {items?.length ? (
        <nav className="flex gap-16">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-lg font-medium text-muted-foreground" 
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
