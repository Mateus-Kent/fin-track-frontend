import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="w-full">
      <header className="w-full border-b py-2">
        <div className="w-full max-w-6xl flex items-center justify-between mx-auto">
          <h1 className="font-bold">FinTrack</h1>

          <nav className="flex items-center gap-x-3">
            <Link href="#">Featrues</Link>
            <Link href="#">Terstimonials</Link>
            <Link href="#">Pricing</Link>
          </nav>

          <div className="flex items-center gap-x-3">
            <Button variant="outline" size="sm">
              Login
            </Button>
            <Button size="sm">Sign Up</Button>
          </div>
        </div>
      </header>
      <main className="w-full py-30">
        <div className="w-full max-w-6xl flex items-center justify-between mx-auto">
          <div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Take control of your finances <br />
              with FinTrack
            </h1>

            <span className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Track expenses, plan investments, and visualize your financial{' '}
              <br />
              journey all in one place.
            </span>
            <div className="flex py-4 gap-2">
              <Button size="lg" className="gap-1">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Button>

              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>

          <div className="justify-center align-center">
            <Image
              src="/finance.png"
              className="rounded-lg object-cover shadow-lg"
              width={550}
              height={550}
              alt="Picture of the author"
            />
          </div>
        </div>
      </main>
    </div>
  )
}
