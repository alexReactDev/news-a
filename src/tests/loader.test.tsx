import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Loader from "../components/loader";

describe("Loader", () => {
	it("Should render", () => {
		render(<Loader />);

		const loader = screen.getByText(/loading/i);

		expect(loader).toBeInTheDocument();
	})
})