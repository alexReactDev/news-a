import Image from "next/image";

export default function Logo() {
	return (
		<div style={{display: "flex", justifyContent: "center"}}>
			<Image width={310} height={150} alt="logo" src="/img/logo.png"></Image>
		</div>
	)
}