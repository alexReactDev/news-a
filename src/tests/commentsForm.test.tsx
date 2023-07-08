import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom";

jest.mock("axios");
import axios from "axios";

import CommentsForm from "../components/commentsForm";

const url = "/example";


describe("Comments form", () => {
	afterEach(() => {
		jest.resetAllMocks();
	})

	it("Should render", () => {
		render(<CommentsForm url={url} />);

		const form = screen.getByTestId("form");

		expect(form).toBeInTheDocument();
	})

	it("Should send valid data", async () => {
		const { container } = render(<CommentsForm url={url} />);

		const nameVal = "Name";
		const emailVal = "email@email.com";
		const textVal = "Lorem ipsum dolor";

		const author = container.querySelector("#author") as Element;
		const email = container.querySelector("#email") as Element;
		const text = container.querySelector("#text") as Element;
		const submit = screen.getByTestId("submit");
		
		await userEvent.type(author, nameVal);
		await userEvent.type(email, emailVal);
		await userEvent.type(text, textVal);


		await userEvent.click(submit);

		expect(axios.post).toBeCalledTimes(1);
		expect(axios.post).toBeCalledWith(url, {
			author: nameVal,
			email: emailVal,
			text: textVal
		})
	})

	it("Should not send invalid data", async () => {
		const { container } = render(<CommentsForm url={url} />);

		const nameVal = "Name";
		const emailVal = "invalidEmail";
	
		const author = container.querySelector("#author") as Element;
		const email = container.querySelector("#email") as Element;
		const submit = screen.getByTestId("submit");
		
		await userEvent.type(author, nameVal);
		await userEvent.type(email, emailVal);


		await userEvent.click(submit);


		expect(submit).toBeDisabled();
		expect(axios.post).toBeCalledTimes(0);
	})
})