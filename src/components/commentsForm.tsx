"use client"

import axios from "axios"
import { useFormik } from "formik"
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
	const { mutate } = useSWRConfig();

	const initialValues = {
		author: "",
		email: "",
		text: ""
	};

	const formik = useFormik({
		initialValues,
		validationSchema,
		async onSubmit(values) {
			await axios.post(url, values);
			mutate(`${url}?page=1`);

			//Neither works...
			formik.setValues(initialValues);
			formik.resetForm();
		}
	})

	return (
		<form className={`${className} border border-solid border-gray-200 p-3`} onSubmit={formik.handleSubmit}>
			<h3 className="title">
				Comment
			</h3>
			<div className="flex mb-3 justify-between gap-8">
				<div className="grow border border-solid border-gray-400">
					<input
						type="text"
						name="author"
						id="author"
						placeholder="Your name"
						onChange={formik.handleChange}
						className="w-full px-3 py-2"
					/>
				</div>
				<div className="grow border border-solid border-gray-400">
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Email"
						onChange={formik.handleChange}
						className="w-full px-3 py-2"
					/>
				</div>
			</div>
			<div className="mb-3 border border-solid border-gray-400">
				<textarea
					name="text"
					id="text"
					placeholder="Comment"
					onChange={formik.handleChange}
					className="w-full px-3 py-2 resize-none"
				/>
			</div>
			<div className="flex justify-center">
				<input
					type="submit"
					value="Send"
					className="px-5 py-2 rounded-md bg-react text-white font-bold shadow shadow-gray-400 hover:bg-blue active:relative active:top-0.5"
				/>
			</div>
		</form>
	)
}