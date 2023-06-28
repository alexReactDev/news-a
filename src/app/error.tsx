'use client'

import Image from "next/image"
import Link from "next/link"

 
export default function Error({error, reset } : {
  error: Error
  reset: () => void
}) {
  return (
    <div>
		<h2>Something went wrong!</h2>
		<Image src="/img/error.jpg" width={500} height={500} alt="error"></Image>
		<button className="link"
			onClick={
			() => reset()
			}
			>
			Try again
		</button>
		<Link href="/">Home page</Link>
		<style jsx>{`
				div {
					flex: 1;
					max-width: 1200px;
					margin: 0px auto;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
				}
				h2 {
					font-size: 2rem;
					font-weight: 700;
					color: #333333;
					margin-bottom: 50px;
					font-family: "Noto sans";
				}
				button {
					margin: 15px 0px;
				}
		`}</style>
    </div>
  )
}