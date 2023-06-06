export default function Footer({ copyright }) {
	return (
		<>
		<footer>
			{copyright}
		</footer>
		<style jsx>{`
			footer {
				padding: 20px;
				background-color: #eeeeee;
				text-align: center;
			}
		`}</style>
		</>
	)
}