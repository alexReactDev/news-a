import Image from "next/image";
import logo from "../img/logo.png";

export default function Logo() {
	return (
		<div style={{display: "flex", justifyContent: "center"}}>
			<Image src={logo}></Image>
		</div>
	)
}