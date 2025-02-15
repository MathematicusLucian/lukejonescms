import { cn } from 'src/utilities/cn'
import React from 'react'
import type { Post } from '@/payload-types'
import { Card, CardPostData } from '@/components/Card'

export type Props = {
  posts: CardPostData[]
  relationTo: string;
}

export const CollectionArchive: React.FC<Props> = (props) => {
  const posts = props.posts
  const relationTo: string = props.relationTo ?? "posts"

  return (
    <div className={cn('container')}>
      <div>
        <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-4 gap-x-4 lg:gap-y-8 lg:gap-x-8 xl:gap-x-8 text-slate-100">
          {posts?.map((result, index) => {
            if (typeof result === 'object' && result !== null) {
              return (
                <div className="col-span-4" key={index}>
                  <Card doc={result} relationTo={relationTo} showCategories />
                  {/* className="h-full"  */}
                </div>
              )
            }
            return null
          })}
        </div>
      </div>
    </div>
  )
}
