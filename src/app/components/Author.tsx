import { POST_QUERYResult } from '@/sanity/types'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'

type AuthorProps = {
  author: NonNullable<POST_QUERYResult>['author']
}

export function Author({ author }: AuthorProps) {
  return author?.image || author?.name ? (
    <div className="flex text-center">
      {author?.image ? (
        <Image
          src={urlFor(author.image).width(80).height(80).url()}
          width={80}
          height={80}
          alt={author.name || ''}
          className=""
        />
      ) : null}
      {author?.name ? (
        <p className="">{author.name}</p>
      ) : null}
    </div>
  ) : null
}