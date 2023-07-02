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
            src="/one.png"
            width={300}
            height={100}
            alt="Picture of the author"
          />
          <div className="mt-2 font-bold">
            <p className=" text-lg ">
              Brushed Reglan Sweatshirt
            </p>
            <p className="text-sm text-muted-foreground">
              Sweater
            </p>
            <p className=" text-lg ">
              $195
            </p>
          </div>
        </div>
        <div className="w-4/12 hover:scale-110 transition duration-500 cursor-pointer">
          <Image
            src="/two.png"
            width={300}
            height={50}
            alt="Picture of the author"
          />
          <div className="mt-2 font-bold">
            <p className=" text-lg ">
              Cameryn Sash Tie Dress
            </p>
            <p className="text-sm text-muted-foreground">
              Dress
            </p>
            <p className=" text-lg ">
              $545
            </p>
          </div>
        </div>
        <div className="w-4/12 hover:scale-110 transition duration-500 cursor-pointer">
          <Image
            src="/three.png"
            width={300}
            height={50}
            alt="Picture of the author"
          />
          <div className="mt-2 font-bold">
            <p className=" text-lg ">
              Flex Sweatshirt
            </p>
            <p className="text-sm text-muted-foreground">
              Sweater
            </p>
            <p className=" text-lg ">
              $175
            </p>
          </div>
        </div>
        <div className="w-4/12 hover:scale-110 transition duration-500 cursor-pointer">
          <Image
            src="/four.png"
            width={300}
            height={50}
            alt="Picture of the author"
          />
          <div className="mt-2 font-bold">
            <p className=" text-lg ">
              Flex Sweatpants
            </p>
            <p className="text-sm text-muted-foreground">
              Anyone can.
            </p>
            <p className="text-sm text-muted-foreground">
              Pants
            </p>
            <p className=" text-lg ">
              $175
            </p>
          </div>
        </div>
        
      </div>
      <div className="mt-10 flex">
        <div className="w-4/12 hover:scale-110 transition duration-500 cursor-pointer">
          <Image
            src="/five.png"
            width={300}
            height={100}
            alt="Picture of the author"
          />
          <div className="mt-2 font-bold">
            <p className=" text-lg ">
              Pink Fleece Sweatpants
            </p>
            <p className="text-sm text-muted-foreground">
              Pants
            </p>
            <p className=" text-lg ">
              $195
            </p>
          </div>
        </div>
        <div className="w-4/12 hover:scale-110 transition duration-500 cursor-pointer">
          <Image
            src="/six.png"
            width={300}
            height={50}
            alt="Picture of the author"
          />
          <div className="mt-2 font-bold">
            <p className=" text-lg ">
              Lite Sweatpants
            </p>
            <p className="text-sm text-muted-foreground">
              Pants
            </p>
            <p className=" text-lg ">
              $150
            </p>
          </div>
        </div>
        <div className="w-4/12 hover:scale-110 transition duration-500 cursor-pointer">
          <Image
            src="/seven.png"
            width={300}
            height={50}
            alt="Picture of the author"
          />
          <div className="mt-2 font-bold">
            <p className=" text-lg ">
              Imperial Alpaca Hoodie
            </p>
            <p className="text-sm text-muted-foreground">
              Jackets
            </p>
            <p className=" text-lg ">
              $525
            </p>
          </div>
        </div>
        <div className="w-4/12 hover:scale-110 transition duration-500 cursor-pointer">
          <Image
            src="/eight.png"
            width={300}
            height={50}
            alt="Picture of the author"
          />
          <div className="mt-2 font-bold">
            <p className=" text-lg ">
              Muscle Tank
            </p>
            <p className="text-sm text-muted-foreground">
              T Shirts
            </p>
            <p className=" text-lg ">
              $75
            </p>
          </div>
        </div>

      </div>
      <div className="mt-10 flex">
        <div className="w-4/12 hover:scale-110 transition duration-500 cursor-pointer">
          <Image
            src="/nine.png"
            width={300}
            height={100}
            alt="Picture of the author"
          />
          <div className="mt-2 font-bold">
            <p className=" text-lg ">
              Brushed Bomber
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
