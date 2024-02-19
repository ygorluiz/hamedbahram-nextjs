import { getBlogPosts } from '@/lib/post'
import { prose } from '@/styled-system/recipes'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import { CustomMDX } from '../_components/mdx'

export default async function SlugPage({
	params,
}: { params: { slug: string } }) {
	const post = getBlogPosts().find((post) => post.slug === params.slug)
	if (!post) {
		notFound()
	}
	return (
		<div>
			<Suspense fallback="Loading...">
				<main className={prose({ size: 'lg' })}>
					<CustomMDX source={post?.content} />
				</main>
			</Suspense>
		</div>
	)
}
