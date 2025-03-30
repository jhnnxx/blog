import { serialize } from 'next-mdx-remote/serialize'
import rehypePrism from 'rehype-prism-plus'
import remarkGfm from 'remark-gfm'

export default async function serializeMarkdown(source: string) {
  return serialize(source, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypePrism],
      format: 'md',
    },
  })
}
