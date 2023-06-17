import { Metadata } from "next";
import Link from "next/link";

interface IProps {
	copyright: string
}

export default function About({copyright}: IProps) {

	return (
		<>
			<h1>
				About us
			</h1>
			<p>
				Non et, hic aperiam natus obcaecati, blanditiis maiores voluptates officia minus quibusdam dolore praesentium nam laboriosam earum provident reiciendis dicta explicabo vel itaque ut repellat iure, at, eos repudiandae! Autem. Molestiae sed, ea quam veniam. Totam deleniti voluptatibus quae veritatis officiis blanditiis, temporibus in vel! Minus nesciunt qui optio aut quis alias non beatae. Molestias voluptate expedita consequuntur nisi iusto. Tempora sed deserunt consequuntur, unde, id sequi ex illo sapiente at repellat laboriosam reiciendis voluptate maxime ratione cum in obcaecati inventore ad, odit neque fuga esse. Tenetur dolorem nam quia. Illum numquam facilis ipsum quidem dicta perferendis nulla adipisci omnis in quam accusamus, corrupti iusto, unde soluta eum laborum vero fuga quia. Cum quas numquam reiciendis, rem non in tempore? Aspernatur, laborum, repellendus? Officiis, quibusdam? Eius, perspiciatis officia recusandae pariatur reprehenderit delectus ipsa excepturi fugit minus, dolore dolorum amet sunt, iure aperiam autem explicabo sit odio nihil! Temporibus odit, debitis! Dicta, magnam, fugit. Amet ducimus suscipit fugit esse eum, earum, reprehenderit, dolor, placeat sequi illum facilis consectetur quaerat quasi neque rerum. Velit sequi culpa, nulla quasi labore nisi obcaecati ipsam. Pariatur itaque nemo mollitia officia, quaerat odio, ratione illum vero, eveniet sit incidunt facere atque saepe quos eum deleniti laudantium eaque earum veniam inventore minima repellat expedita voluptas. Quae, inventore. Nostrum suscipit praesentium dolores veniam ullam quasi harum, voluptatum possimus maxime!
			</p>
			<Link href="/about/authors">
				Our awesome team
			</Link>
			<br></br>
		</>
	)
}

export const metadata: Metadata = {
	title: "About us"
}