import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Form from 'next/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

export default function Login() {
  return (
    <div className="flex min-h-screen flex-col w-full  ">
      <Link href="/" className="absolute left-4 top-4 md:left-8 md:top-8">
        <Button variant="ghost" className="flex items-center gap-1">
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
      </Link>

      <div className="flex flex-col justify-center items-center h-screen w-screen">
        <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
        <p className="text-sm text-gray-500 mb-6">
          Enter your credentials to access your account
        </p>
        <div className="w-[310px]">
          <Form action="/">
            <div className="flex flex-col mb-5">
              <Label className="mb-2" htmlFor="email">
                Email
              </Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="email@example.com"
              />
            </div>

            <div className="flex flex-col mb-6">
              <Label className="mb-2" htmlFor="password">
                Password
              </Label>
              <Input type="password" name="password" id="password" />
            </div>

            <Button type="submit" className="w-full mb-6">
              Sign In
            </Button>
          </Form>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <Button variant="outline" className="w-full mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="mr-2 h-4 w-4"
            >
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Google
          </Button>

          <p className="text-center text-sm">
            Don&apos;t have an account?{' '}
            <Link
              href="/signUp"
              className="text-primary underline-offset-4 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
