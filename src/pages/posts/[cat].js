import MainLayout from "@/components/mainLayout";
import { useRouter } from "next/router"

export default function Post({copyright}) {
	const router = useRouter();

	return (
		<MainLayout title="News A+ | Posts" copyright={copyright}>
			<h1>
				This is page about: {router.query.cat}
			</h1>
		</MainLayout>
	)
}