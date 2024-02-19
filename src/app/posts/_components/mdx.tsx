import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
import dynamic from 'next/dynamic'
import { JSX } from 'react'
import rehypePrettyCode from 'rehype-pretty-code'
import type { Options } from 'rehype-pretty-code'

const components = {}
export function CustomMDX(props: JSX.IntrinsicAttributes & MDXRemoteProps) {
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
	return (
		<MDXRemote
			{...props}
			components={{ ...components, ...(props.components || {}) }}
			options={{
				mdxOptions: {
					//remarkPlugins: [remark, [remarkAutoLinkHeadings], {}],
					// biome-ignore lint/suspicious/noExplicitAny: <explanation>
					rehypePlugins: [[rehypePrettyCode, options] as any],
					format: 'mdx',
				},
				parseFrontmatter: true,
			}}
		/>
	)
}
