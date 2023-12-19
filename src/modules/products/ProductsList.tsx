import React from "react";
import { Product } from "../../models/products";
import { calculateTotalAndTaxes } from "../../utils/utils";
import { HorizontalLine } from "../../components/global/main.style";

const ProductsList = ({ products }: { products: Product[] }) => {
  const { taxes, total } = calculateTotalAndTaxes(products);

  return (
    <div>
      <h5>Products list</h5>
      <HorizontalLine />
      {products?.map((product: Product, index) => {
        return (
          <p key={index}>
            {product.quantity} {product.name} at{" "}
            {product.quantity * product.price}
          </p>
        );
      })}

      <p>Taxes: {taxes}</p>
      <p>Total: {total}</p>
    </div>
  );
};

export default ProductsList;
