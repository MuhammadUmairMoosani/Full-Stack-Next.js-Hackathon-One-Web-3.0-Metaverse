import Image from 'next/image'
import { Twitter, Facebook, Linkedin } from "lucide-react"

export function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="wrap flex pb-20">
                    <div className="w-6/12">
                        <Image
                            src="/Logo.webp"
                            width={150}
                            height={60}
                            alt="Picture of the author"
                        />
                        <p className="max-w-[700px] text-lg text-muted-foreground w-4/5 pt-10 pb-10">
                            Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.
                        </p>
                        <div className="flex">
                            <div className="bg-gray-100 rounded-lg h-12 w-12 flex items-center justify-center ml-2"><a href="#"><Twitter fill="black" /></a></div>
                            <div className="bg-gray-100 rounded-lg h-12 w-12 flex items-center justify-center ml-2"><a href="#"><Facebook fill="black" /></a></div>
                            <div className="bg-gray-100 rounded-lg h-12 w-12 flex items-center justify-center ml-2"><a href="#"><Linkedin fill="black" /></a></div>
                        </div>
                    </div>
                    <div className="w-2/12">
                        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight capitalize">company</h4>
                        <ul>
                            <li><a className="flex items-center text-lg font-medium text-muted-foreground capitalize mt-3" href="#">about</a></li>
                            <li><a className="flex items-center text-lg font-medium text-muted-foreground capitalize mt-3" href="#">terms of use</a></li>
                            <li><a className="flex items-center text-lg font-medium text-muted-foreground capitalize mt-3" href="#">privacy policy</a></li>
                            <li><a className="flex items-center text-lg font-medium text-muted-foreground capitalize mt-3" href="#">how it works</a></li>
                            <li><a className="flex items-center text-lg font-medium text-muted-foreground capitalize mt-3" href="#">contact us</a></li>
                        </ul>
                    </div>
                    <div className="w-2/12">
                        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight capitalize">support</h4>
                        <ul>
                            <li><a className="flex items-center text-lg font-medium text-muted-foreground capitalize mt-3" href="#">support career</a></li>
                            <li><a className="flex items-center text-lg font-medium text-muted-foreground capitalize mt-3" href="#">24h service</a></li>
                            <li><a className="flex items-center text-lg font-medium text-muted-foreground capitalize mt-3" href="#">quick chat</a></li>
                        </ul>
                    </div>
                    <div className="w-2/12">
                        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight capitalize">contact</h4>
                        <ul>
                            <li><a className="flex items-center text-lg font-medium text-muted-foreground capitalize mt-3" href="#">whatsapp</a></li>
                            <li><a className="flex items-center text-lg font-medium text-muted-foreground capitalize mt-3" href="#">support 24h</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}