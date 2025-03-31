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
        <section className="w-full max-w-6xl flex items-center justify-between mx-auto mb-32">
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
        </section>

        <section className="w-full bg-gray-50 flex-col justify-center items-center py-32 border-b">
          <div className="flex flex-col   justify-center items-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Features
            </h1>
            <span className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Everything you need to manage your finances effectively
            </span>

            <div className="flex justify-center items-center  gap-6 mt-12">
              <div className="w-[325.33px] h-[214]  flex flex-col justify-center items-center border shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M18 6H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Z" />
                    <path d="M10 10h8" />
                    <path d="M10 14h8" />
                    <path d="M5 10h.01" />
                    <path d="M5 14h.01" />
                  </svg>
                </div>

                <h1 className="text-xl font-bold mt-2">Expense Tracking</h1>

                <span className="text-center text-gray-500 mt-2.5  ml-7 mr-7">
                  Easily log and categorize all your expenses to understand your
                  spending habits.
                </span>
              </div>

              <div className="w-[325.33px] h-[214] flex flex-col justify-center items-center border shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M12 2v20" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <h1 className="text-xl font-bold mt-2">Budget Planning</h1>

                <span className="text-center text-gray-500 mt-2.5 ml-7 mr-7">
                  Set budgets for different categories and track your progress
                  throughout the month.
                </span>
              </div>

              <div className="w-[325.33px] h-[214] flex flex-col justify-center items-center border shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>

                <h1 className="text-xl font-bold mt-2">Investment Planning</h1>

                <span className="text-center text-gray-500 mt-2.5 ml-7 mr-7">
                  Set investment goals and allocate a percentage of your income
                  automatically.
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full">
        <div className="border-b">
          <div className="w-full max-w-6xl flex items-center justify-between mx-auto py-12 px-12 ">
            <div className="flex flex-col">
              <h1 className="text-xl font-bold font-">FinTrack</h1>
              <span className="text-sm text-gray-500 ">
                Take control of your finances with our easy-to-use tracking and
                planning tools.
              </span>
            </div>

            <div className="flex flex-col gap-2 md:gap-4">
              <h3 className="text-sm font-medium">Company</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#" className="text-sm hover:underline">
                  About
                </Link>
                <Link href="#" className="text-sm hover:underline">
                  Careers
                </Link>
                <Link href="#" className="text-sm hover:underline">
                  Contact
                </Link>
              </nav>
            </div>

            <div className="flex flex-col gap-2 md:gap-4">
              <h3 className="text-sm font-medium">Legal</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#" className="text-sm hover:underline">
                  Terms
                </Link>
                <Link href="#" className="text-sm hover:underline">
                  Privacy
                </Link>
                <Link href="#" className="text-sm hover:underline">
                  Cookies
                </Link>
              </nav>
            </div>
          </div>
        </div>

        <div className="w-full max-w-6xl flex items-center justify-between mx-auto border-t py-6">
          <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-gray-500 md:text-left">
              © {new Date().getFullYear()} FinTrack. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
