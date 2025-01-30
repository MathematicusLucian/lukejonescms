'use client'
import React from 'react'
import type { Header as HeaderType } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { SearchIcon } from 'lucide-react'
import { ThemeSelector } from '@/providers/Theme/ThemeSelector'

export const HeaderNav: React.FC<{ header: HeaderType }> = ({ header }) => {
  const navItems = header?.navItems || []

  return (
    <nav className="flex gap-3 items-center rounded bg-slate-100 dark:bg-slate-950 text-slate-950 text-slate-100">
      {navItems.map(({ link }, i) => {
        return <CMSLink key={i} {...link} appearance="link" className="px-4 py-2 leading-none rounded-full font-semibold bg-slate-100 dark:bg-slate-950 text-slate-950 text-slate-100 hover:bg-amber-700 hover:text-slate-950 text-sm" />
      })}
      <Link href="/search">
        <span className="sr-only">Search</span>
        <SearchIcon className="w-5 text-primary" />
      </Link>
      <ThemeSelector />
    </nav>
  )
}