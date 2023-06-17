interface IProps {
	copyright: string
}

export default function Footer({ copyright }: IProps) {
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