export default function GlobalStyle() {
	return (
		<style>{`
			.container {
				max-width: 1200px;
				margin: 0px auto;
			}
			html, body {
				height: 100%;
			}
			body {
				background-color: #fefefe;
				font-family: "Noto Sans";
				font-size: 1rem;
				line-height: 1.2rem;
				color: #666666;
			}
			#__next {
				height: 100%;
			}

			/*BEM Blocks ==========================================*/

			.title {
				font-size: 1.2rem;
				font-weight: 700;
				color: #333333;
				margin-bottom: 15px;
			}

			.default-body {
				margin: 15px;
				padding: 15px;
				border: dashed grey 1px;
				box-shadow: -2px 2px 4px 0px #bbb;
			}
		`}</style>
	)
}