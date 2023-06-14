import Image from "next/image";
import loader from "../img/loader.gif";

export default function Loader() {
	return (
		<>
			<p>
				Loading... <Image src={loader} width={16} height={16} style={{display: "inline"}} />
			</p>
		</>
	)
}