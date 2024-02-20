'use client'

import { Heading, SegmentGroup } from '@/components/ui'
import { Box, Container, Flex } from '@/styled-system/jsx'
import '@/theme/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

export default function CompanyLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const options = [
		{ id: 'about', label: 'About' },
		{ id: 'contact', label: 'Contact' },
		{ id: 'team', label: 'Team' },
		{ id: 'profile', label: 'Profile', disabled: true },
	]
	//const pathname = usePathname()
	const pathname = usePathname()
	//const isActive = pathname === href

	const router = useRouter()
	console.log(pathname.replace('/', ''))
	return (
		<Box py="24">
			<Heading as="h1" pb="12">
				Company Layout
			</Heading>
			<Container display="flex" flexDir="row">
				<SegmentGroup.Root
					defaultValue={pathname.replace('/', '')}
					onValueChange={(e) => router.push(`/${e.value}`)}
				>
					{options.map((option) => (
						<SegmentGroup.Item
							key={option.id}
							value={option.id}
							disabled={option.disabled}
						>
							<SegmentGroup.ItemControl />
							<SegmentGroup.ItemText
								color={
									pathname === `/${option.id}` && !option.disabled
										? 'accent.default'
										: 'inherit'
								}
							>
								{option.label}
							</SegmentGroup.ItemText>
						</SegmentGroup.Item>
					))}
					<SegmentGroup.Indicator />
				</SegmentGroup.Root>
				<Flex flexGrow="1" ml="12" p="6">
					{children}
				</Flex>
			</Container>
		</Box>
	)
}
