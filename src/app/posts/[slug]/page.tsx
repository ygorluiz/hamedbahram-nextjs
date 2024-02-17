import { getPostBySlug } from '@/lib/post'
import { prose } from '@/styled-system/recipes'

export default async function SlugPage({
	params,
}: { params: { slug: string } }) {
	const { slug } = params
	const { content, frontmatter } = await getPostBySlug(slug)

	return (
		<div>
			<main className={prose({ size: 'lg' })}>{content}</main>
		</div>
	)
}
