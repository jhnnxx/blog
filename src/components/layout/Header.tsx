import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 left-0 z-50 w-full border-b border-b-gray-200 bg-white/20 p-4 shadow backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/">
          <h1 className="flex gap-2 text-xl font-black text-gray-900 hover:underline">
            <Image
              src={`/assets/profile/jhnnx.jpeg`}
              className={`rounded-full`}
              width={30}
              height={30}
              alt={''}
            />
            <span>jhnnx</span>
          </h1>
        </Link>
        <nav>
          <ul className="flex space-x-4 text-base font-semibold">
            <Link href="/about">
              <li className="text-gray-700 italic hover:text-gray-900 hover:underline">
                About
              </li>
            </Link>
            <Link href="/portfolio">
              <li className="text-gray-700 italic hover:text-gray-900 hover:underline">
                Portfolio
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  )
}
