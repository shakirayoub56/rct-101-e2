import React, {useState} from "react";
import AddProduct from"./AddProduct";
import Product from"./Product";
import Pagination from"./Pagination";
import Productsdata from "../db.json"


const Products = () => {
  const [products, setProducts]  = useState(Productsdata)
  console.log(products)
  
 
  // TODO: Remove below const and instead import them from chakra
  const Flex = () => <div />;
  const Grid = () => <div />;

  return (
    <Flex>
      <Products products={products}/>
      <AddProduct />
      <Product />
      <Pagination/>
      {/*  AddProduct */}
      <Grid>{/* List of Products */}</Grid>
      {/* Pagination */}
    </Flex>
  );
};

export default Products;
