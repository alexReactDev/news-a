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
			`}</style>
			<style jsx global>{`
				.container {
					max-width: 1200px;
					margin: 0px auto;
				}
			`}</style>
			<MetaData title={title} />
			<header>
				<Logo />
			</header>
			<main>
				<div className="container">
					{children}
				</div>
				<footer>
					{copyright}
				</footer>
			</main>
		</>
	)
}