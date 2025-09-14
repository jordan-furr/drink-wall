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
      <article className="mb3 under-hov">
        <div className="mb1">
          {mainImage ? (
            <Image
              src={urlFor(mainImage).url()}
              width={0}
              height={0}
              sizes="100%"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain'
              }}
              alt={mainImage.alt || title || ''}
            />
          ) : null}
        </div>
        <div className="">
          <Categories categories={categories} />
        </div>
        <Author author={author} />
        <div className="flex-row space-between mb3 ">
          <div>{title}</div>
          <PublishedAt publishedAt={publishedAt} />
        </div>
        {body ? (
          <PortableText value={body} components={components} />
        ) : null}
      </article>
    </Link>
  )
}