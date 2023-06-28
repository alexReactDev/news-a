import Image from "next/image";
import loader from "../icons/loader/loader.gif";

export default function Loader() {
	return (
		<p>
			Loading... <Image alt="loading" src={loader} width={16} height={16} style={{display: "inline"}} />
		</p>
	)
}