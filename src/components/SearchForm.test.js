import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchForm from "./SearchForm";

const baseProps = {
  setResults: jest.fn(),
  setSearchTerm: jest.fn(),
  data: [{ product_name: "ASPIRIN", active_ingredients: "ASPIRIN" }],
  isLoading: false,
  fetchError: null,
};

describe("SearchForm — fetch error warning", () => {
  test("does not show warning icon when fetchError is null", () => {
    render(<SearchForm {...baseProps} />);
    expect(
      screen.queryByLabelText("Data fetch warning")
    ).not.toBeInTheDocument();
  });

  test("shows warning icon next to search button when fetchError is set", () => {
    render(<SearchForm {...baseProps} fetchError="Failed to fetch latest drug listings." />);
    expect(screen.getByLabelText("Data fetch warning")).toBeInTheDocument();
  });
});

describe("SearchForm — null data guard", () => {
  test("does not crash when data is null and search is submitted", () => {
    render(<SearchForm {...baseProps} data={null} />);
    expect(screen.queryByLabelText("Data fetch warning")).not.toBeInTheDocument();
  });
});
