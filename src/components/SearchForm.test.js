import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import SearchForm from "./SearchForm";

const sampleData = [
  { product_name: "ASPIRIN TABLET", active_ingredients: "ASPIRIN" },
  { product_name: "IBUPROFEN CAPSULE", active_ingredients: "IBUPROFEN" },
];

const baseProps = {
  setResults: jest.fn(),
  setSearchTerm: jest.fn(),
  data: sampleData,
  isLoading: false,
  fetchError: null,
};

beforeEach(() => jest.clearAllMocks());

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

describe("SearchForm — live search", () => {
  test("calls setResults with filtered results after typing 3+ characters", () => {
    render(<SearchForm {...baseProps} />);
    userEvent.type(screen.getByRole("searchbox"), "asp");
    expect(baseProps.setResults).toHaveBeenLastCalledWith([sampleData[0]]);
    expect(baseProps.setSearchTerm).toHaveBeenLastCalledWith("asp");
  });

  test("clears results when input drops below 3 characters", () => {
    render(<SearchForm {...baseProps} />);
    const input = screen.getByRole("searchbox");
    userEvent.type(input, "asp");
    userEvent.clear(input);
    expect(baseProps.setResults).toHaveBeenLastCalledWith(null);
  });

  test("does not crash when data is null and user types 3+ characters", () => {
    render(<SearchForm {...baseProps} data={null} />);
    expect(() =>
      userEvent.type(screen.getByRole("searchbox"), "asp")
    ).not.toThrow();
    expect(baseProps.setResults).toHaveBeenLastCalledWith(null);
  });
});
