import { Heading } from '@/components/ui'
import { getGuestbookEntries } from '@/lib/mongo/guestbook'
import { css } from '@/styled-system/css'
import { Box, Container } from '@/styled-system/jsx'
import GuestbookEntryForm from './_components/GuestbookEntryForm'

// see https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config
//export const dynamic = 'force-dynamic'
export const revalidate = 60

async function getData() {
	const { entries, error } = await getGuestbookEntries()
	if (!entries || error) throw new Error('Failed to fetch entries.')
	return entries
}

export default async function Page() {
	const entries = await getData()
	return (
		<Box>
			<Container>
				<Heading as="h1" py="12" fontSize="3xl" fontWeight="bold">
					Guessbook
				</Heading>
				<GuestbookEntryForm />
				<ul
					className={css({
						mt: '8',
						display: 'flex',
						flexDir: 'column',
						rowGap: '2',
					})}
				>
					{entries.map((e) => (
						<li
							key={e._id}
							className={css({ display: 'flex', columnGap: '3' })}
						>
							<span className={css({ color: 'gray.500' })}>{e.name}:</span>
							<span>{e.message}</span>
						</li>
					))}
				</ul>
			</Container>
		</Box>
	)
}
