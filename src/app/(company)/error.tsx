'use client'

import { Button } from '@/components/ui'
import { useEffect } from 'react'

// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.log(error)
	}, [error])
	return (
		<>
			<div>Something went wrong</div>
			<p>{error.message}</p>
			<Button
				onClick={
					// Attempt to recover by trying to re-render the segment
					() => reset()
				}
			>
				Try again
			</Button>
		</>
	)
}
