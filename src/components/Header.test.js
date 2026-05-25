import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";

test("renders the app title", () => {
  render(<Header />);
  expect(screen.getByText("Pocket Pharmacist")).toBeInTheDocument();
});
