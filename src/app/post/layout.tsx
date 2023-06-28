import DefaultBodyLayout from "../../components/defaultBodyLayout";
import MainLayout from "../../components/mainLayout";

export default function AboutLayout({ children }) {
	return (
		<MainLayout>
			<DefaultBodyLayout>
				{children}
			</DefaultBodyLayout>
		</MainLayout>
	)
}