import React, { ReactNode } from "react";
import GlobalStyle from "../styles/jsxGlobalStyle";
import Footer from "./footer";
import Logo from "./logo";
import MetaData from "./metaData";

interface IProps {
	title: string,
	copyright: string,
	children: ReactNode
}

export default function MainLayout({ children, title, copyright }: IProps) {
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
			<GlobalStyle />
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