export default async function Footer() {
	const res = await fetch("http://localhost:3000/api/copyright");
	const copyright = res.json();

	return (
		<>
		<footer>
			{copyright}
		</footer>
		<style>{`
			footer {
				padding: 20px;
				background-color: #eeeeee;
				text-align: center;
			}
		`}</style>
		</>
	)
}