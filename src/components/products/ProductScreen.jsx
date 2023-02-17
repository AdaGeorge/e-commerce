import React, { useEffect, useState } from "react";
import HeaderScreen from "../shared/HeaderScreen";
import FooterScreen from "../shared/FooterScreen";
import ProductInfo from "./ProductInfo";
import { useParams } from "react-router-dom";
import axios from "axios";
import SimilarProducts from "./SimilarProducts";
import './styles/productScreen.css'



const ProductScreen = () => {
  const [product, setProduct] = useState();

  const { id } = useParams();
  
  useEffect(() => {
    const URL = `https://fakestoreapi.com/products/${id}`;
    axios
      .get(URL)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  

  return (
    <div>
      <HeaderScreen />

      <div >
        <div className="product">

          {
            product &&
            <div className="slider">
              <img key={product.image} src={product.image} alt="" className="slider__imgs" />
            </div>
           }
          <ProductInfo product={product} />
        </div>
        <hr />
          <SimilarProducts product={product} />
      </div>

      <FooterScreen />
    </div>
  );
};

export default ProductScreen;
