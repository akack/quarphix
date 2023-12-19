import { Product } from "../models/products";

export const calculateTotalAndTaxes = (products: Product[]) => {
  const totalTaxes = products
    ?.filter(
      (item) =>
        item.category !== "FOOD" &&
        item.category !== "MEDICAL" &&
        item.category !== "BOOK"
    )
    .reduce((sum, current) => sum + current.quantity * current.price, 0);
  const totalPrice = products.reduce(
    (sum, current) => sum + current.quantity * current.price,
    0
  );
  const taxes = (
    Math.round((totalTaxes * 0.1 + Number.EPSILON) * 100) / 100
  ).toFixed(2); // 10% sales tax
  const t = totalPrice + parseFloat(taxes);
  return {
    total: (Math.round((t + Number.EPSILON) * 100) / 100).toFixed(2),
    taxes,
  };
};
