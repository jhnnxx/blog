import { PostTitle } from '@/components/post/post-title'
import { type Author } from '@/interfaces/author'
import Avatar from './avatar'
import CoverImage from './cover-image'
import DateFormatter from './date-formatter'

type Props = {
  title: string
  coverImage: string
  date: string
  author: Author
}

export function PostHeader({ title, coverImage, date, author }: Props) {
  return (
    <section className={`mx-auto mt-4 max-w-6xl`}>
      <div className="mb-4 flex items-center justify-between">
        <PostTitle>{title}</PostTitle>
        <div className="text-base italic">
          <DateFormatter dateString={date} />
        </div>
      </div>
      <div className="hidden md:mb-12 md:block">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="mb-8 sm:mx-0 md:mb-16">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="mx-auto max-w-2xl">
        <div className="mb-6 block md:hidden">
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </section>
  )
}
