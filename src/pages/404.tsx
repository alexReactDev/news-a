import Image from "next/image";
import Link from "next/link";

export default function Error404() {
	return (
		<div>
			<h2 className="title">Page not found</h2>
			<Image src="/img/404.jpg" width={500} height={500} alt="not found"/>
			<Link href="/">Home page</Link>
			<style jsx>{`
				div {
					max-width: 1200px;
					margin: 0px auto;
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				h2 {
					font-size: 2rem;
					font-weight: 700;
					color: #333333;
					margin-bottom: 15px;
					font-family: "Noto sans";
				}
			`}</style>
		</div>
	)
}