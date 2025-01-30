'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const HighImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  })

  return (
    <div
      className="relative -mt-[10.4rem] flex items-center justify-center bg-stone-900/90 text-slate-950 dark:text-slate-100  py-12 bg-gradient-to-r from-rose-700 via-fuchsia-950 to-indigo-950 mix-blend-screen"
      data-theme="dark"
    >
      <div className="container mb-0 z-10 relative flex items-center justify-center">
        <div className="max-w-[36.5rem] text-center">
          {richText && <RichText className="mb-10 no-prose text-slate-100 dark:text-slate-950" content={richText} enableGutter={false} />}
          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex justify-center gap-4">
              {links.map(({ link }, i) => {
                return (
                  <li key={i}>
                    <CMSLink {...link} className="bg-yellow-500 hover:bg-yellow-600 text-slate-950 hover:text-slate-950" />
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>
      <div className="min-h-[50vh] select-none">
        {media && typeof media === 'object' && (
          <Media
            fill
            imgClassName="-z-10 object-cover"
            priority={false}
            loading="lazy"
            resource={media}
          />
        )}
      </div>
    </div>
  )
}
