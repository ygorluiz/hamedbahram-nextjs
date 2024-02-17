import { IconButton, Text } from '@/components/ui'
import { Container, Flex, Stack } from '@/styled-system/jsx'
import { FaGithub, FaLinkedin, FaTwitter, FaYoast } from 'react-icons/fa'

export default function Footer() {
	return (
		<Container
			role="contentinfo"
			py={{ base: '12', md: '16' }}
			mt="auto"
			minW="full"
		>
			<Stack>
				<Stack justify="space-between" direction="row" align="center">
					{/* <Logo />*/}
					<Text fontWeight="bold" fontSize="xl">
						Ygor L.
					</Text>
					<Flex gap="3">
						<IconButton aria-label="LinkedIn">
							<FaLinkedin />
						</IconButton>
						<IconButton aria-label="GitHub">
							<FaGithub />
						</IconButton>
						<IconButton aria-label="Twitter">
							<FaTwitter />
						</IconButton>
					</Flex>
				</Stack>
				<Text fontSize="sm" color="fg.subtle">
					&copy; {new Date().getFullYear()} Ygor Luiz, Inc. All rights reserved.
				</Text>
			</Stack>
		</Container>
	)
}
