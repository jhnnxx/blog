'use client'
import useThemeStore from '@/store/theme'
import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}
export default function Main({ children }: Props) {
  const { theme } = useThemeStore()
  return (
    <main data-theme={theme} className={`mx-auto max-w-7xl px-4`}>
      {children}
    </main>
  )
}
