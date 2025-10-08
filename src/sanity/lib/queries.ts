import { defineQuery } from 'next-sanity'
import { sanityFetch } from '@/sanity/lib/live';


export const PAGINATED_POSTS_QUERY = 
defineQuery(`*[_type == "post" && defined(slug.current)] | order(publishedAt desc)[$start...$end]{

  id,
  title,
  slug,
  body,
  mainImage,
  publishedAt,
  "categories": coalesce(
    categories[]->{
      _id,
      slug,
      title
    },
    []
  ),
  author->{
    name,
    image
  }
}`)

export const TOTAL_POSTS_QUERY = defineQuery(`count(*[_type == "post" && defined(slug.current)])`)


export async function getPosts(start: number, end: number) {
  const { data } = await sanityFetch({
    query: PAGINATED_POSTS_QUERY,
    params: { start, end }
  });
  return data;
}

export async function getTotalPosts() {
  const { data } = await sanityFetch({
    query: TOTAL_POSTS_QUERY
  });
  return data;
}

export const POSTS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)]|order(publishedAt desc)[0...60]{
  _id,
  title,
  slug,
  body,
  mainImage,
  publishedAt,
  "categories": coalesce(
    categories[]->{
      _id,
      slug,
      title
    },
    []
  ),
  author->{
    name,
    image
  }
}`)

export const POSTS_SLUGS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)]{ 
  "slug": slug.current
}`)

export const POST_QUERY =
  defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  body,
  mainImage,
  publishedAt,
  "categories": coalesce(
    categories[]->{
      _id,
      slug,
      title
    },
    []
  ),
  author->{
    name,
    image
  }
}`)