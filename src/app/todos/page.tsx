import { Heading } from '@/components/ui'
import { Container, styled } from '@/styled-system/jsx'

export interface TodosProps {
	userId: number
	id: number
	title: string
	completed: boolean
}

async function getTodos(): Promise<TodosProps[]> {
	const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
		next: {
			revalidate: 60,
		},
	})
	if (!res.ok) throw new Error('failed to fetch todos.')
	return res.json()
}

export default async function Page() {
	const todos = await getTodos()
	return (
		<styled.section py="24">
			<Container>
				<Heading as="h1">Todos</Heading>
				<styled.ul mt="6" display="flex" flexDir="column" gap="3">
					{todos.slice(0, 10).map((todo) => (
						<li key={todo.id}>{todo.title}</li>
					))}
				</styled.ul>
			</Container>
		</styled.section>
	)
}
