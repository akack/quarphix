import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("should render and show quarphix tile text", () => {
  render(<App />);
  const linkElement = screen.getByText(/QUARPHIX ASSESSMENT/i);
  expect(linkElement).toBeInTheDocument();
});

test("should add all product values and submit and shows updated tax and total", () => {
  render(<App />);
  const productNameInput = screen.getByPlaceholderText("Product name");
  fireEvent.change(productNameInput, {
    target: { value: "Late Night" },
  });

  const productPriceInput = screen.getByPlaceholderText("Product price");
  fireEvent.change(productPriceInput, { target: { value: 14.69 } });

  const productQuantityInput = screen.getByPlaceholderText("Product quantity");
  fireEvent.change(productQuantityInput, { target: { value: 2 } });

  const productCategoryInput = screen.getByText("Select Category");
  fireEvent.change(productCategoryInput, { target: { value: "MUSIC" } });

  const submitButton = screen.getByText("Submit");
  fireEvent.click(submitButton);

  // Find added product
  const addedProduct = screen.getByText(/2 late Night at 29.38/i);
  expect(addedProduct).toBeInTheDocument();

  // Show taxes and total
  const taxes = screen.getByText(/Taxes: 4.44/i);
  const total = screen.getByText(/Total: 62.15/i);
  expect(taxes).toBeInTheDocument();
  expect(total).toBeInTheDocument();
});
