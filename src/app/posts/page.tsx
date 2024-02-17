import { getBlogPosts } from '@/lib/post'
import { Container, styled } from '@/styled-system/jsx'
import Link from 'next/link'

export default async function PostsPage() {
	const allBlogs = getBlogPosts()

	return (
		<styled.section py="24">
			<Container>
				<h1>All Posts</h1>
				<ul>
					<>
						{allBlogs.map((post) => (
							<>
								<li key={post.slug}>
									{/* <Link href={`/posts/${post.slug}`}></Link> */}
									<div>{post.metadata.title} </div>
									<div>{post.metadata.author}</div>
								</li>
							</>
						))}
					</>
				</ul>
			</Container>
		</styled.section>
	)
}
