import Image from "next/image";
import Link from "next/link";

export default function Logo() {
	return (
		<Link href="/" style={{display: "flex", justifyContent: "center"}}>
			<Image width={310} height={150} alt="logo" src="/img/logo.png"></Image>
		</Link>
	)
}