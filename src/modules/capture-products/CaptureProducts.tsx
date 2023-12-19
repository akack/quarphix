import { useState } from "react";
import {
  Container,
  StyledButton,
  StyledInput,
  StyledSelect,
} from "../../components/global/main.style";
import { Product } from "../../models/products";
import { initialProducts } from "../../utils/dummyData";
import ProductsList from "../products/ProductsList";

const categories = [
  { value: "MUSIC", label: "Music" },
  { value: "BOOK", label: "Books" },
  { value: "FOOD", label: "Food" },
  { value: "MEDICAL", label: "Medical" },
];
const CaptureProducts = () => {
  const [products, setProducts] = useState(initialProducts as Product[]);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productQuantity, setProductQuantity] = useState(0);
  const [productCategory, setProductCategory] = useState("");

  const submitProduct = () => {
    const newProduct = {
      name: productName,
      category: productCategory,
      price: productPrice,
      quantity: productQuantity,
    };
    const copiedProducts = [...products];
    copiedProducts.push(newProduct as Product);

    setProducts(copiedProducts);
  };

  return (
    <Container>
      <h3>Capture New Product</h3>
      <div>
        <StyledInput
          placeholder="Product name"
          onChange={(value) => setProductName(value.target.value)}
          required
        />
        <StyledInput
          placeholder="Product price"
          type="number"
          onChange={(value) => setProductPrice(parseFloat(value.target.value))}
          required
        />
        <StyledInput
          placeholder="Product quantity"
          type="number"
          required
          onChange={(value) => setProductQuantity(parseInt(value.target.value))}
        />
        <StyledSelect
          name="categories"
          id="categories"
          onChange={(value) => setProductCategory(value.target.value)}
        >
          <option disabled>Select Category</option>
          {categories?.map((category, index) => {
            return (
              <option value={category.value} key={index}>
                {category.label}
              </option>
            );
          })}
        </StyledSelect>
        <br />
        <StyledButton onClick={() => submitProduct()}>Submit</StyledButton>
      </div>
      <ProductsList products={products} />
    </Container>
  );
};

export default CaptureProducts;
