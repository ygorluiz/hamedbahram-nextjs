'use client'
import { Button, Card, FormLabel, Input } from '@/components/ui'
import { Stack } from '@/styled-system/jsx'
import { useRouter } from 'next/navigation'
import { useState, useTransition } from 'react'

export default function GuestbookEntryForm(props: Card.RootProps) {
	const router = useRouter()
	const [isPending, startTransition] = useTransition()
	const [isFetching, setIsFetching] = useState(false)
	const isMutating = isFetching || isPending

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const handleSubmit = async (event: any) => {
		event.preventDefault()
		const form = event.currentTarget
		const formData = new FormData(form)
		const { name, message } = Object.fromEntries(formData)

		if (!name || !message) return

		setIsFetching(true)
		//@ts-ignore
		const { error } = await fetch('/api/guestbook', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ name, message }),
		})

		console.log(error)

		form.reset()
		setIsFetching(false)
		startTransition(() => {
			router.refresh()
		})
	}
	return (
		<form onSubmit={handleSubmit}>
			<Card.Root width="sm" {...props}>
				<Card.Body pt="6">
					<Stack gap="4">
						<Stack gap="1.5">
							<Input
								type="text"
								name="name"
								id="name"
								placeholder="Your name"
							/>
						</Stack>
						<Stack gap="1.5">
							<Input
								id="email"
								name="message"
								type="text"
								placeholder="Your message..."
							/>
						</Stack>
					</Stack>
				</Card.Body>
				<Card.Footer>
					<Button w="full" disabled={isMutating} type="submit">
						{' '}
						Add
					</Button>
				</Card.Footer>
			</Card.Root>
		</form>
	)
}
