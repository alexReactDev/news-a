import style from "../styles/Components/error.module.css";

interface IProps {
	errorMessage?: string
}

export default function Error({ errorMessage }: IProps) {
	return (
		<div className={style.error}>
			<p className={style.text}>Error! {errorMessage || "Something went wrong"}</p>
			<img className={style.picture} src="/img/error.jpg" alt="broken robot" />
		</div>
	)
}