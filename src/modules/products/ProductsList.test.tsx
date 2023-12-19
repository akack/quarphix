import React from "react";
import { render, screen } from "@testing-library/react";
import ProductsList from "./ProductsList";
import { initialProducts } from "../../utils/dummyData";

test("should render list of products component", () => {
  render(<ProductsList products={initialProducts} />);
  const title = screen.getByText("Products list");
  expect(title).toBeInTheDocument();
});

test("should show all products added", () => {
  render(<ProductsList products={initialProducts} />);
  const book = screen.getByText("1 Book at 12.49");
  expect(book).toBeInTheDocument();

  const music = screen.getByText("1 Music CD at 14.99");
  expect(music).toBeInTheDocument();

  const chocolate = screen.getByText("1 Chocolate Bar at 0.85");
  expect(chocolate).toBeInTheDocument();
});

test("should show taxes and total amount", () => {
  render(<ProductsList products={initialProducts} />);
  const taxes = screen.getByText(/Taxes: 1.50/i);
  expect(taxes).toBeInTheDocument();

  const total = screen.getByText(/Total: 29.83/i);
  expect(total).toBeInTheDocument();
});
