import fs from 'fs'
import path from 'path'
import { InfoIcon } from 'lucide-react'

import { Demo } from '@/components/MDX/alert'
import { compileMDX } from 'next-mdx-remote/rsc'
import rehypePrettyCode from 'rehype-pretty-code'

const rootDitectory = path.join(process.cwd(), 'content')

const components = {
	Demo: Demo,
}

export async function getPostBySlug(slug: string) {
	const realSlug = slug.replace(/\.md$/, '')
	const filePatch = path.join(rootDitectory, `${realSlug}.mdx`)
	const fileContent = fs.readFileSync(filePatch, { encoding: 'utf-8' })

	const options = {
		theme: 'one-dark-pro',
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		onVisitLine(node: any) {
			// Prevent lines from collapsing in `display: grid` mode
			if (node.children.length === 0) {
				node.children = [{ type: 'text', value: ' ' }]
			}
		},
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		onVisitHighlightedLine(node: any) {
			node.properties.className.push('highlighted')
		},
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		onVisitHighlightedWord(node: any) {
			node.properties.className = ['highlighted', 'word']
		},
	}
	const { content, frontmatter } = await compileMDX({
		source: fileContent,
		components,
		options: {
			parseFrontmatter: true,
			mdxOptions: {
				// biome-ignore lint/suspicious/noExplicitAny: <explanation>
				rehypePlugins: [[rehypePrettyCode, options] as any],
			},
		},
	})

	return { content, frontmatter }
}
