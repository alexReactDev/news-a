"use client"

import axios from "axios"
import { useFormik } from "formik"
import { useState } from "react"
import { useSWRConfig } from "swr"
import { object, string } from "yup"

interface IProps {
	className?: string,
	url: string
}

const validationSchema = object({
	author: string().required(),
	email: string().email().required(),
	text: string().required()
})

export default function CommentsForm({ url, className }: IProps) {
	const [error, setError] = useState("");

	const { mutate } = useSWRConfig();

	const initialValues = {
		author: "",
		email: "",
		text: ""
	};

	const formik = useFormik({
		initialValues,
		validationSchema,
		validateOnMount: true,
		async onSubmit(values) {
			try {
				await axios.post(url, values);
			}
			catch(e: any) {
				console.log(e);
				setError(e?.response?.data || e.message || "Error occurred");
			}
			mutate(`${url}?page=1`);

			formik.resetForm();
		}
	})

	function changeHandler(e: any) {
		if(error) setError("");
		formik.handleChange(e);
	}

	return (
		<form data-testid="form" className={`${className} border border-solid border-gray-200 p-3`} onSubmit={formik.handleSubmit}>
			<h3 className="title">
				Comment
			</h3>
			{
				error &&
				<p className="mb-3 p-2 border-2 border-solid border-red-700 bg-red-300 text-red-600 text-center font-bold">
					{error}
				</p>
			}
			<div className="m:flex mb-3 justify-between gap-8">
				<div className="grow border border-solid border-gray-400 mb-3 m:mb-0">
					<input
						type="text"
						name="author"
						id="author"
						placeholder="Your name"
						onChange={changeHandler}
						value={formik.values.author}
						className="w-full px-3 py-2"
					/>
				</div>
				<div className="grow border border-solid border-gray-400">
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Email"
						onChange={changeHandler}
						value={formik.values.email}
						className="w-full px-3 py-2"
					/>
				</div>
			</div>
			<div className="mb-3 border border-solid border-gray-400">
				<textarea
					name="text"
					id="text"
					placeholder="Comment"
					onChange={changeHandler}
					value={formik.values.text}
					className="w-full px-3 py-2 resize-none"
				/>
			</div>
			<div className="flex justify-center">
				<input
					type="submit"
					value="Send"
					className="px-5 py-2 rounded-md bg-react text-white font-bold shadow shadow-gray-400 hover:bg-blue active:relative active:top-0.5 disabled:bg-gray-400 disabled:active:static"
					disabled={!formik.isValid}
					data-testid="submit"
				/>
			</div>
		</form>
	)
}