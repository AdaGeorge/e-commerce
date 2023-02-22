import React, { useState } from "react";
import { useSelector } from "react-redux";
import FooterScreen from "../shared/FooterScreen";
import HeaderScreen from "../shared/HeaderScreen";
import Loader from "../shared/Loader";
import FilterProducts from "./FilterProducts";
import ProductCard from "./ProductCard";
import "./styles/homeScreen.css";

const HomeScreen = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const products = useSelector((state) => state.products);
  return (
    <div>
      <HeaderScreen />
      <FilterProducts 
      filteredProducts={filteredProducts}
      setFilteredProducts={setFilteredProducts}
      products={products}
      />

     {
        !products && !filteredProducts ?
        <Loader/> :
     <div className="products-container">
        {filteredProducts[0]
          ? filteredProducts?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          : products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
      }

      <FooterScreen />
    </div>
  );
};

export default HomeScreen;
