import Container from '@/components/post/container'
import { PostBody } from '@/components/post/post-body'
import { PostHeader } from '@/components/post/post-header'
import { getPostBySlug } from '@/lib/api'
import markdownToHtml from '@/lib/markdownToHtml'
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

  const content = await markdownToHtml(post.content || '')

  return (
    <main>
      {/*<Alert preview={post.preview} />*/}
      <Container>
        {/*<Header />*/}
        <article className="mb-32">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          />
          <PostBody content={content} />
        </article>
      </Container>
    </main>
  )
}
