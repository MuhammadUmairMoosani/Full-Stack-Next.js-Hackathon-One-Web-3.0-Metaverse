import Link from "next/link"
import Image from 'next/image'
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="mt-10 flex">
        <div className="w-4/12 hover:scale-110 transition duration-500 cursor-pointer">
          <Image
            src="/ten.png"
            width={300}
            height={100}
            alt="Picture of the author"
          />
          <div className="mt-2 font-bold">
            <p className=" text-lg ">
              Flex Push Button Bomber
            </p>
            <p className="text-sm text-muted-foreground">
              Jackets
            </p>
            <p className=" text-lg ">
              $225
            </p>
          </div>
        </div>
        <div className="w-4/12 hover:scale-110 transition duration-500 cursor-pointer">
          <Image
            src="/eleven.png"
            width={300}
            height={50}
            alt="Picture of the author"
          />
          <div className="mt-2 font-bold">
            <p className=" text-lg ">
              Raglan Sweatshirt
            </p>
            <p className="text-sm text-muted-foreground">
              Sweater
            </p>
            <p className=" text-lg ">
              $195
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
