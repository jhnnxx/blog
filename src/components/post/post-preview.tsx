import { type Author } from '@/interfaces/author'
import Link from 'next/link'
import CoverImage from './cover-image'
import DateFormatter from './date-formatter'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  // author,
  slug,
}: Props) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <div className="mb-2 flex justify-between text-xl leading-none lg:text-2xl">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
        <div className="text-sm italic lg:text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <span className="mb-4 text-sm leading-relaxed italic lg:text-lg">
          #{excerpt}
        </span>
      </div>
      {/*<Avatar name={author.name} picture={author.picture} />*/}
    </div>
  )
}
