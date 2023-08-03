import Image from "next/image";
import Link from "next/link";

export default function Logo() {
	return (
		<Link href="/" style={{display: "flex", justifyContent: "center"}}>
			<Image width={310} height={150} alt="logo" src="/img/logo.png" className="max-w-[200px] l:max-w-[250px] xl:max-w-none"></Image>
		</Link>
	)
}