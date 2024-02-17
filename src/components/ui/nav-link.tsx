"use client";

import { css } from "@/styled-system/css";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { Link } from "./link";

interface NavLinkProps {
	href: string;
	children: React.ReactNode;
}
export default function NavLink({ href, children }: NavLinkProps) {
	const pathname = usePathname();
	const isActive = pathname === href;
	return (
		<Link
			asChild
			className={css({ color: isActive ? "accent.default" : "fg.default" })}
		>
			<NextLink href={href}>{children}</NextLink>
		</Link>
	);
}
