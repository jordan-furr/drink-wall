import { Categories } from '../components/Categories'
import { POSTS_QUERYResult } from '@/sanity/types'
import { PublishedAt } from '../components/PublishedAt'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'
import { components } from '@/sanity/portableTextComponents'
import { PortableText } from 'next-sanity'
import { Author } from './Author'

export function PostCard(props: POSTS_QUERYResult[0]) {
  const { title, body, author, mainImage, publishedAt, categories } = props

  return (
    <Link href={`/${props.slug!.current}`}>
      <article className="postSize">
        <div className="mb1">
          {mainImage ? (
            <Image
              src={urlFor(mainImage).width(360).height(280).url()}
              width={360}
              height={280}
              alt={mainImage.alt || title || ''}
            />
          ) : null}
        </div>
        <div className="">
          <Categories categories={categories} />
        </div>
        <Author author={author} />
        <div className="flex-row space-between mb3 under-hov">
          <div>{title}</div>
          <PublishedAt publishedAt={publishedAt} />
        </div>
        {body? (
          <PortableText value={body} components={components} />
        ) : null}
      </article>
    </Link>
  )
}