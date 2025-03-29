import Container from '@/components/post/container'
import { HeroPost } from '@/components/post/hero-post'
import { MoreStories } from '@/components/post/more-stories'
import { getAllPosts } from '@/lib/api'

export default function Home() {
  const allPosts = getAllPosts()

  const heroPost = allPosts[0]

  const morePosts = allPosts.slice(1)
  return (
    <section className={`mx-auto`}>
      <Container>
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </section>
  )
}
