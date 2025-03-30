'use client'
import Container from '@/components/post/container'
import { PostHeader } from '@/components/post/post-header'
import { Post } from '@/interfaces/post'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

export default function PostItem({
  post,
  content,
}: {
  post: Post
  content: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >
}) {
  return (
    <article>
      <Container>
        <article className="mb-32">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          />
          <div className={`markdown`}>
            <MDXRemote {...content} />
          </div>
          {/*<PostBody content={content} />*/}
        </article>
      </Container>
    </article>
  )
}
