'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'

interface HeaderClientProps {
  header: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ header }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  return (
    <header className="min-w-full relative flex items-center justify-between z-10 border-b border-slate-800 border-b bg-gradient-to-r from-slate-950 via-fuchsia-950 to-indigo-950 text-slate-100 py-3 px-4 sm:px-6 lg:px-8 space-x-6" {...(theme ? { 'data-theme': theme } : {})}>
      {/* sticky  */}
      <div className="flex justify-between top-0 z-50 py-3 px-4 items-center justify-between space-x-6">
        <Link href="/" className="font-bold text-xl hover:bg-amber-700 hover:text-slate-950 tracking-narrow">
          <Logo loading="eager" priority="high" className="invert dark:invert-0" />
        </Link>
        <HeaderNav header={header} />
      </div>
    </header>
  )
}