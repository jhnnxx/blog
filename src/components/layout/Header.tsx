'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  // const { toggleTheme } = useThemeStore()
  return (
    <header className="sticky top-0 left-0 z-50 w-full bg-white/20 p-4 shadow backdrop-blur-md dark:bg-black/20">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/">
          <h1 className="flex gap-2">
            <Image
              src={`/assets/profile/jhnnx.jpeg`}
              className={`rounded-full`}
              width={30}
              height={30}
              alt={''}
            />
            <span
              className={`text-xl font-black text-gray-900 hover:underline dark:text-white`}
            >
              jhnnx
            </span>
          </h1>
        </Link>
        <nav>
          <ul className="flex space-x-4 text-base font-semibold text-gray-700 italic dark:text-gray-200">
            <Link href="/about">
              <li className="hover:underline">About</li>
            </Link>
            <Link href="/portfolio">
              <li className="hover:underline">Portfolio</li>
            </Link>
            {/*<div onClick={toggleTheme}>theme!</div>*/}
          </ul>
        </nav>
      </div>
    </header>
  )
}
