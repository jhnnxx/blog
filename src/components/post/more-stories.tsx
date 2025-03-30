import { Post } from '@/interfaces/post'
import { PostPreview } from './post-preview'

type Props = {
  posts: Post[]
}

export function MoreStories({ posts }: Props) {
  return (
    <section>
      {/*<h1 className="mb-6 text-2xl leading-tight font-bold tracking-tighter md:text-4xl">*/}
      {/*  More Posts..*/}
      {/*</h1>*/}
      <div className="mb-32 grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
