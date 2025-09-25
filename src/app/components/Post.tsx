import { Author } from "../components/Author";
import { Categories } from "../components/Categories";
import { components } from "@/sanity/portableTextComponents";
import { PortableText } from "next-sanity";
import { POST_QUERYResult } from "@/sanity/types";
import { PublishedAt } from "../components/PublishedAt";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

export function Post(props: NonNullable<POST_QUERYResult>) {
  const { title, author, mainImage, body, publishedAt, categories } = props;

  return (
    <article className="mb6">
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
      <div className="flex-row space-between mb3">
        <div>{title}</div>
        <PublishedAt publishedAt={publishedAt} />
      </div>
      <div className="mb3">
        {body ? (
          <PortableText value={body} components={components} />
        ) : null}
      </div>
      {author ? (
        <Author author={author} />
      ) : "Uploaded by: Anon"}
    </article>
  );
}