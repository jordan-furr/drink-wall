import { POST_QUERYResult } from '@/sanity/types'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'

type AuthorProps = {
  author: NonNullable<POST_QUERYResult>['author']
}

export function Author({ author }: AuthorProps) {
  return author?.image || author?.name ? (
    <div className="authorCont">
      Uploaded by: {author?.name}
    </div>
  ) : null
}