import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import CaptureProducts from "./CaptureProducts";
test("should render capture product component", () => {
  render(<CaptureProducts />);
  const title = screen.getByText("Capture New Product");
  expect(title).toBeInTheDocument();
});

test("should render all input fields for adding a new product", () => {
  render(<CaptureProducts />);
  const productNameInput = screen.getByPlaceholderText("Product name");
  const productPriceInput = screen.getByPlaceholderText("Product price");
  const productQuantityInput = screen.getByPlaceholderText("Product quantity");
  const productCategoryInput = screen.getByText("Select Category");
  const submitButton = screen.getByText("Submit");
  expect(productNameInput).toBeInTheDocument();
  expect(productPriceInput).toBeInTheDocument();
  expect(productQuantityInput).toBeInTheDocument();
  expect(productCategoryInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test("should add all product values and submit", () => {
  render(<CaptureProducts />);
  const productNameInput = screen.getByPlaceholderText("Product name");
  fireEvent.change(productNameInput, {
    target: { value: "Things fall apart" },
  });

  const productPriceInput = screen.getByPlaceholderText("Product price");
  fireEvent.change(productPriceInput, { target: { value: 14.69 } });

  const productQuantityInput = screen.getByPlaceholderText("Product quantity");
  fireEvent.change(productQuantityInput, { target: { value: 1 } });

  const productCategoryInput = screen.getByText("Select Category");
  fireEvent.change(productCategoryInput, { target: { value: "BOOK" } });

  const submitButton = screen.getByText("Submit");
  fireEvent.click(submitButton);

  // Find added product
  const addedProduct = screen.getByText("1 Things fall apart at 14.69");
  expect(addedProduct).toBeInTheDocument();
});
