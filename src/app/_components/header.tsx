import { Link } from "@/components/ui/link";
import NavLink from "@/components/ui/nav-link";
import { css } from "@/styled-system/css";
import NextLink from "next/link";

export default function Header() {
	return (
		<header>
			<nav>
				<ul className={classes.list}>
					<li>
						<NavLink href="/">Home</NavLink>
					</li>
					<li>
						<NavLink href="/about">About</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}
const classes = {
	header: css({
		bg: "bg.default",
	}),
	list: css({
		display: "flex",
		gap: "1rem",
		p: "4",
	}),
};
