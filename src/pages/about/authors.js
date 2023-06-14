import MainLayout from "@/components/mainLayout";

export default function Authors({copyright}) {
	return (
		<MainLayout title="News A+ | About" copyright={copyright}>
			<h1>
				Our awesome team
			</h1>
			<ul>
				<li>
					Joe Biden
				</li>
				<li>
					Bill Gates
				</li>
				<li>
					Andrew Goodman
				</li>
				<li>
					Johny Depp
				</li>
				<li>
					Bloody Mary
				</li>
				<li>
					John Doe
				</li>
			</ul>
		</MainLayout>
	)
}