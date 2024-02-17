import fs from 'fs'
import path from 'path'
import { InfoIcon } from 'lucide-react'
import { serialize } from 'next-mdx-remote/serialize'

import { Demo } from '@/components/MDX/alert'
import { compileMDX } from 'next-mdx-remote/rsc'
import rehypePrettyCode from 'rehype-pretty-code'

const rootDitectory = path.join(process.cwd(), 'content')

type Metadata = {
	title: string
	author: string
}
function parseFrontmatter(fileContent: string) {
	const frontmatterRegex = /---\s*([\s\S]*?)\s*---/
	const match = frontmatterRegex.exec(fileContent)
	const frontMatterBlock = match?.[1]
	const content = fileContent.replace(frontmatterRegex, '').trim()
	const frontMatterLines = frontMatterBlock?.trim().split('\n')
	const metadata: Partial<Metadata> = {}

	// biome-ignore lint/complexity/noForEach: <explanation>
	frontMatterLines?.forEach((line) => {
		const [key, ...valueArr] = line.split(': ')
		let value = valueArr.join(': ').trim()
		value = value.replace(/^['"](.*)['"]$/, '$1') // Remove quotes
		metadata[key.trim() as keyof Metadata] = value
	})

	return { metadata: metadata as Metadata, content }
}

function getMDXFiles(dir: fs.PathLike) {
	return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

function readMDXFile(filePath: fs.PathOrFileDescriptor) {
	const rawContent = fs.readFileSync(filePath, 'utf-8')
	return parseFrontmatter(rawContent)
}

function getMDXData(dir: string) {
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
	const mdxFiles = getMDXFiles(dir)
	return mdxFiles.map((file) => {
		const { metadata, content } = readMDXFile(path.join(dir, file))
		const slug = path.basename(file, path.extname(file))
		const mdxSource = serialize(content, {
			mdxOptions: {
				// biome-ignore lint/suspicious/noExplicitAny: <explanation>
				rehypePlugins: [[rehypePrettyCode, options] as any],
			},
		})
		return {
			mdxSource,
			metadata,
			slug,
			content,
		}
	})
}

export function getBlogPosts() {
	return getMDXData(path.join(process.cwd(), 'content'))
}
