import axios from "axios";
import React, { useEffect, useState } from "react";
import Categories from "./filters/Categories";
import InputSearch from "./filters/InputSearch";
import RangePrice from "./filters/RangePrice";
import "./styles/filterProducts.css";

const FilterProducts = ({ setFilteredProducts, products }) => {
  const [badRequest, setBadRequest] = useState(false);
  const [inputSearchValue, setInputSearchValue] = useState({
    title: "",
    categoryId: "",
    maxPrice: 0,
  });

  useEffect(() => {
    if (inputSearchValue.categoryId || inputSearchValue.title) {
      let URL = `https://e-commerce-api-v2.academlo.tech/api/v1/products?title=${inputSearchValue.title}&categoryId=${inputSearchValue.categoryId}`;
      axios
        .get(URL)
        .then((res) => {
          if (inputSearchValue.maxPrice > 0) {
            const filterByPrice = res.data.filter(
              (product) => {
                return Number(product.price) <= inputSearchValue.maxPrice
              }
            );
            if (filterByPrice[0]) {
              return setFilteredProducts(filterByPrice);
            }
          } else {
            setFilteredProducts(res.data);
          }
        })
        .catch((err) => console.log(err));
    }
     if(Number(inputSearchValue.maxPrice) > 0 && !inputSearchValue.categoryId && !inputSearchValue.title){
       const filterByPrice = products.filter(product=> {
         return Number(product.price) <= inputSearchValue.maxPrice
       })
       if(filterByPrice[0]){
         setFilteredProducts(filterByPrice)
       }
     }
  }, [inputSearchValue]);

  return (
    <>
      <InputSearch
        inputSearchValue={inputSearchValue}
        setInputSearchValue={setInputSearchValue}
      />
      <section className="filter_box">
        <div>
          <Categories
            inputSearchValue={inputSearchValue}
            setInputSearchValue={setInputSearchValue}
          />
          <RangePrice
            inputSearchValue={inputSearchValue}
            setInputSearchValue={setInputSearchValue}
          />
        </div>
      </section>
      {badRequest && <h1 className="title_filter">NOT FOUND</h1>}
    </>
  );
};

export default FilterProducts;
