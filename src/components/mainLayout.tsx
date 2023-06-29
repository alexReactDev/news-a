import DefaultBodyLayout from "./defaultBodyLayout";
import TopNav from "./topNav"

import TopStories from "./topStories";
import Weather from "./weather";

export default function MainLayout({ children }) {
	return (
		<>
			<TopNav />
			<div className="container">
				<div className="flex">
					<aside className="hidden xl:block w-1/3 pr-7">
						<DefaultBodyLayout>
							<Weather className="mb-5" />
							<TopStories />
						</DefaultBodyLayout>
					</aside>
					<main className="w-2/3">
						{children}
					</main>
				</div>
			</div>
		</>
	)
}