import PostItem from '@/components/post/post-item'
import { getPostBySlug } from '@/lib/api'
import serializeMarkdown from '@/lib/serializedMarkdown'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

type Params = {
  params: Promise<{
    slug: string
  }>
}

export default async function PostPage(props: Params) {
  const params = await props.params
  const post = getPostBySlug(params.slug)

  if (!post) {
    return notFound()
  }

  // const content = await markdownToHtml(post.content || '')
  const content = await serializeMarkdown(post.content || '')

  return <PostItem post={post} content={content} />
}

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params
  const post = getPostBySlug(params.slug)

  if (!post) {
    return notFound()
  }

  const title = `${post.title} | leeseongjun Blog 🌱`

  return {
    title: title,
    openGraph: {
      title: title,
      images: [post.ogImage.url],
    },
  }
}
