import Footer from "./footer";
import Logo from "./logo";
import MetaData from "./metaData";

export default function MainLayout({ children, title, copyright }) {
	return (
		<>
			<style jsx>{`
				header {
					padding: 20px;
					background-color: #eeeeee;
				}
				.wrapper {
					min-height: 100%;
					display: flex;
					flex-direction: column;
				}
				main {
					flex: 1 1 auto;
				}
			`}</style>

			<style jsx global>{`
				.container {
					max-width: 1200px;
					margin: 0px auto;
				}
				html, body {
					height: 100%;
				}
				body {
					background-color: #fefefe;
				}
				#__next {
					height: 100%;
				}
			`}</style>

			<MetaData title={title} />
			<div className="wrapper">
				<header>
					<Logo />
				</header>
				<main>
					<div className="container">
						{children}
					</div>
				</main>
				<Footer copyright={copyright} />
			</div>
		</>
	)
}