import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import type { Footer } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'

export async function Footer() {
  const footer: Footer = await getCachedGlobal('footer', 1)()

  const navItems = footer?.navItems || []

  return (
    <footer className="py-1 px-4 sm:px-6 lg:px-8 border-t border-slate-800 bg-slate-950 text-white">
      <div className="container py-2 gap-2 flex flex-col md:flex-row md:justify-between">
        <nav className="flex flex-col md:flex-row gap-4">
          {navItems.map(({ link }, i) => {
            return <CMSLink className="text-white" key={i} {...link} />
          })}
        </nav>

        <div className="flex flex-col-reverse items-start md:flex-row gap-2 md:items-center">
          <Link className="flex items-center" href="/">
            &copy; Luke Jones, {(new Date().getFullYear())}. All Rights Reserved.
          </Link>
        </div>
      </div>
    </footer>
  )
}
