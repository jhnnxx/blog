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
      <div className="mb-4 md:mb-8">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="mb-8 md:grid md:gap-x-16 lg:mb-8 lg:gap-x-8">
        <div>
          <h4 className="mb-4 flex items-center justify-between text-xl leading-tight lg:text-2xl">
            <Link
              href={`/posts/${slug}`}
              className="line-clamp-1 hover:underline"
            >
              {title}
            </Link>
            <div className="text-sm italic lg:text-lg">
              <DateFormatter dateString={date} />
            </div>
          </h4>
          <div
            className={`flex items-center justify-between gap-3 leading-relaxed`}
          >
            <span className="text-sm italic lg:text-lg">#{excerpt}</span>
            <Avatar name={author.name} picture={author.picture} />
          </div>
        </div>
      </div>
    </section>
  )
}
