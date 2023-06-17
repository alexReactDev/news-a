import MainLayout from "../../components/mainLayout";
import style from "../../styles/About/layout.module.css";

export default function AboutLayout({ children }) {
	return (
		<MainLayout>
			<h2 style={{textAlign: "center"}} className={style.label}>We working for you 24/7. Contact us +1 234 567 891</h2>
			{children}
		</MainLayout>
	)
}