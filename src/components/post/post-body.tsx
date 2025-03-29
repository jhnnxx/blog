import cn from 'classnames'
import markdownStyles from './markdown-styles.module.css'

type Props = {
  content: string
}

export function PostBody({ content }: Props) {
  return (
    <div className="mx-auto max-w-5xl">
      <div
        className={cn(markdownStyles['markdown'])}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
