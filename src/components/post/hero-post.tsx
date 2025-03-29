import Avatar from '@/components/post/avatar'
import CoverImage from '@/components/post/cover-image'
import { type Author } from '@/interfaces/author'
import Link from 'next/link'
import DateFormatter from './date-formatter'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

export function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="mb-20 md:mb-28 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
        <div>
          <h3 className="mb-4 flex items-center justify-between text-xl leading-tight lg:text-3xl">
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title}
            </Link>
            <Avatar name={author.name} picture={author.picture} />
          </h3>
          <div
            className={`flex gap-3 text-sm leading-relaxed italic lg:text-lg`}
          >
            <p className="mb-4">#{excerpt}</p>
            <DateFormatter dateString={date} />
            {/*<Avatar name={author.name} picture={author.picture} />*/}
          </div>
          {/*<div className="mb-4 text-sm md:mb-0 lg:text-lg"></div>*/}
        </div>
      </div>
    </section>
  )
}
