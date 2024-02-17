import { Center } from "@/styled-system/jsx";

export default function AboutLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<Center display="flex" flexDir="column">
			<h1>Abaout Layout</h1>
			{children}
		</Center>
	);
}
