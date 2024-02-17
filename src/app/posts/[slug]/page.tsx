import { getBlogPosts } from '@/lib/post'
import { prose } from '@/styled-system/recipes'

export default async function SlugPage({
	params,
}: { params: { slug: string } }) {
	const post = getBlogPosts().find((post) => post.slug === params.slug)

	return (
		<div>
			<main className={prose({ size: 'lg' })}>{post?.content}</main>
		</div>
	)
}
