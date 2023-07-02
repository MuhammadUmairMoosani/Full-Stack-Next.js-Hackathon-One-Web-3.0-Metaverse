import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import Image from 'next/image'
import { ShoppingCart } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function IndexPage() {
  return (
    <>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10 relative mt-10 ">
        <div className="flex max-w-[980px] flex-col items-start gap-2 mt-10">
          <Button
            variant="ghost"
            size="sm"
            className="bg-blue-100 text-blue-600"
          >
            Sale 70%
          </Button>
          <h1 className="text-6xl max-w-[800px] font-extrabold leading-tight  ">
            An Industrial Take on Streetwear
          </h1>
          <p className="max-w-[500px] text-lg text-muted-foreground mt-5 mb-5">
            Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href={siteConfig.links.docs}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants()}
          >
            <ShoppingCart className="mr-2" />
            Start Shopping
          </Link>
          <div>
          </div>
        </div>
        <div className="flex justify-between max-w-[580px] mt-20 mb-10">
          <Image
            src="/Featured1.webp"
            width={100}
            height={50}
            alt="Picture of the author"
          />
          <Image
            src="/Featured2.webp"
            width={100}
            height={50}
            alt="Picture of the author"
          />
          <Image
            src="/Featured3.webp"
            width={100}
            height={50}
            alt="Picture of the author"
          />
          <Image
            src="/Featured4.webp"
            width={100}
            height={50}
            alt="Picture of the author"
          />
        </div>
        <div className="w-6/6 h-6/6 rounded-full  bg-orange-200 absolute right-0 top-0">
          <Image
            src="/header.webp"
            width={600}
            height={600}
            alt="Picture of the author"
          />
        </div>
      </section>
      <section className="container pb-8 pt-6  mt-10 flex items-center flex-col">
        <h4 className="text-sm max-w-lg text-blue-600 font-semibold tracking-widest">
          PROMOTIONS
        </h4>
        <h1 className="text-4xl max-w-lg font-extrabold leading-tight  ">
          Our Promotions Events
        </h1>
        <div className="gap-4 w-full mt-10 flex">
          <div className="w-5/12">
            <div className="h-44 mb-4 bg-gray-200 relative flex row">
              <div className="p-5">
                <h1 className="text-4xl">
                  GET UP TO<br /> <span className="font-extrabold leading-tight">60%</span>
                </h1>
                <p className="text-lg">
                  For the summer<br /> season
                </p>
              </div>
              <div>
                <Image
                  src="/event1.webp"
                  width={230}
                  height={56}
                  alt="Picture of the author"
                  className="absolute right-10 bottom-0"
                />
              </div>
            </div>
            <div className="h-48 bg-black">
              <div className="text-center pt-8">
                <h1 className="text-4xl text-white font-extrabold leading-tight ">
                  GET 30% Off
                </h1>
                <p className="text-lg text-white pt-4">
                  USE PROMO CODE
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="bg-slate-500 text-white tracking-wide"

                >
                  D I N E W E E K E N D S A L E
                </Button>
              </div>
            </div>
          </div>
          <div className="w-7/12">
            <div className="flex flex-row">
              <div className="flex-1 bg-orange-200 h-96 ml-5 relative">
                <div className="mt-2 ml-5">
                  <p className=" text-lg ">
                    Flex Sweatshirt
                  </p>
                  <p className=" text-lg ">
                    <span className="line-through">$100.00</span> $75.00
                  </p>
                </div>
                <Image
                  src="/event2.webp"
                  width={250}
                  height={100}
                  alt="Picture of the author"
                  className="absolute bottom-0 left-14"
                />
              </div>
              <div className="flex-1 bg-gray-400 h-96 ml-5 relative">
                <div className="mt-2 ml-5">
                  <p className=" text-lg ">
                    Flex Push Button Bomber
                  </p>
                  <p className=" text-lg ">
                    <span className="line-through">$225.00</span> $190.00
                  </p>
                </div>
                <Image
                  src="/event3.webp"
                  width={250}
                  height={50}
                  alt="Picture of the author"
                  className="absolute bottom-0 left-14"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container pb-8 pt-6  mt-10 flex items-center flex-col">
        <h4 className="text-sm max-w-lg text-blue-600 font-semibold tracking-widest">
          PRODUCTS
        </h4>
        <h1 className="text-4xl max-w-lg font-extrabold leading-tight  ">
          Check What We Have
        </h1>
        <div className="mt-10 flex">
          <div className="w-4/12 hover:scale-110 transition duration-500 cursor-pointer">
            <Image
              src="/one.png"
              width={650}
              height={100}
              alt="Picture of the author"
            />
            <div className="mt-2 font-bold">
              <p className=" text-lg ">
                Brushed Reglan Sweatshirt
              </p>
              <p className=" text-lg ">
                $195
              </p>
            </div>
          </div>
          <div className="w-4/12 hover:scale-110 transition duration-500 cursor-pointer">
            <Image
              src="/two.png"
              width={650}
              height={50}
              alt="Picture of the author"
            />
            <div className="mt-2 font-bold">
              <p className=" text-lg ">
                Brushed Reglan Sweatshirt
              </p>
              <p className=" text-lg ">
                $195
              </p>
            </div>
          </div>
          <div className="w-4/12 hover:scale-110 transition duration-500 cursor-pointer">

            <Image
              src="/three.png"
              width={650}
              height={50}
              alt="Picture of the author"
            />
            <div className="mt-2 font-bold">
              <p className=" text-lg ">
                Brushed Reglan Sweatshirt
              </p>
              <p className=" text-lg ">
                $195
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container pb-8 pt-6  mt-10 mb-24 flex items-center flex-col relative">
        <div className=" bg-gray-50 w-screen h-[32rem] absolute top-24" />
        <div className="mt-16 flex">
          <div className="w-6/12 z-10">
            <h1 className="text-8xl  font-extrabold leading-tight text-gray-700 text-opacity-10 absolute bottom-2">
              D i f f e r e n t<br /> f r o m<br /> o t h e r s
            </h1>
            <div className="grid grid-cols-2 h-full mt-20 ">
              <div className="pr-10">
                <h1 className="text-2xl font-semibold leading-tight">
                  Using Good Quality Materials
                </h1>
                <p className="text-2xl text-muted-foreground">
                  Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                </p>
              </div>
              <div className="pr-10">
                <h1 className="text-2xl font-semibold leading-tight">
                  Using Good Quality Materials
                </h1>
                <p className="text-2xl text-muted-foreground">
                  Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                </p>
              </div>
              <div className="pr-10">
                <h1 className="text-2xl font-semibold leading-tight">
                  Using Good Quality Materials
                </h1>
                <p className="text-2xl text-muted-foreground">
                  Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                </p>
              </div>
              <div className="pr-10">
                <h1 className="text-2xl font-semibold leading-tight">
                  Using Good Quality Materials
                </h1>
                <p className="text-2xl text-muted-foreground">
                  Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
          <div className="w-6/12 z-10">
            <div className="absolute top-0 right-80">
              <h1 className="text-4xl  font-extrabold leading-tight  ">
                Unique and Authentic<br /> Vintage Designer<br /> Jewellery
              </h1>
            </div>
            <div className="grid grid-cols-2 h-full mt-20">
              <div className="pr-10">
                <Image
                  src="/feature.webp"
                  width={600}
                  height={50}
                  alt="Picture of the author"
                />
              </div>
              <div className="pr-10">
                <p className="text-1xl text-muted-foreground mt-24 mb-10">
                  This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.
                </p>
                <Link
                  href={siteConfig.links.docs}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonVariants({ size: 'default' })}
                >
                  See All Product
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container pb-8 pt-6  mt-10 mb-24 flex items-center flex-col relative">

        <div className="w-screen h-[16rem] absolute" />
        <h1 className="text-8xl  font-extrabold leading-tight text-gray-700 text-opacity-10 absolute bottom-2">
          Newsletter
        </h1>
        <h1 className="text-4xl max-w-[800px] font-extrabold leading-tight  z-10">
          Subscribe Our Newsletter
        </h1>
        <p className="max-w-[500px] text-lg text-muted-foreground mt-5 mb-5 z-10">
          Get the latest information and promo offers directly
        </p>
        <div className="flex">
          <div className="mr-5">
            <Input type="search" placeholder="Input email address" />
          </div>
          <Link
            href={siteConfig.links.docs}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants()}
          >
            Get&nbsp;Started
          </Link>
        </div>
      </section>
    </>
  )
}
