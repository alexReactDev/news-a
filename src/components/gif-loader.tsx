import Image from "next/image";
import loader from "../icons/loader/loader.gif";
import loader2 from "../icons/loader/loader-2.gif";
import loader3 from "../icons/loader/loader-3.gif";

const loaders = [loader, loader2, loader3];

export default function GifLoader({ style = 0 }) {
	const loader = loaders[style];

	return (
		<div style={{display: "flex", justifyContent: "center"}}>
			<Image alt="loading" src={loader} width={100} height={100} />
		</div>
	)
}