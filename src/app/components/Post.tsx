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
    <article className="mb3 postSize">
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
      {body ? (
        <PortableText value={body} components={components} />
      ) : null}
    </article>
  );
}