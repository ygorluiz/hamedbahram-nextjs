import { getBlogPosts } from '@/lib/post'
import { Container, styled } from '@/styled-system/jsx'
import Link from 'next/link'

export default async function PostsPage() {
	const allBlogs = getBlogPosts()

	return (
		<styled.section fontSize="3xl" fontWeight="bold" py="24">
			<Container>
				<h1>All Blog Posts</h1>
				<styled.ul mt="12">
					<>
						{allBlogs.map((post) => (
							<>
								<styled.li key={post.slug} mb="4">
									<Link href={`/posts/${post.slug}`}>
										<styled.h4 fontSize="lg">{post.metadata.title}</styled.h4>
										<styled.p fontSize="sm" color="fg.subtle">
											{post.metadata.author}
										</styled.p>
									</Link>
								</styled.li>
							</>
						))}
					</>
				</styled.ul>
			</Container>
		</styled.section>
	)
}
