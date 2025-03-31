import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

export function PostTitle({ children }: Props) {
  return (
    <h1 className="text-center text-2xl leading-tight font-bold tracking-tighter lg:text-3xl lg:leading-none">
      {children}
    </h1>
  )
}
