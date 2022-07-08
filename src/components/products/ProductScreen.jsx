import React, { useEffect, useState } from "react";
import HeaderScreen from "../shared/HeaderScreen";
import FooterScreen from "../shared/FooterScreen";
import ProductInfo from "./ProductInfo";
import { useParams } from "react-router-dom";
import axios from "axios";
import SimilarProducts from "./SimilarProducts";
import Slider from "./Slider";
import './styles/productScreen.css'



const ProductScreen = () => {
  const [product, setProduct] = useState();

  const { id } = useParams();

  useEffect(() => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`;
    axios
      .get(URL)
      .then((res) => setProduct(res.data.data.product))
      .catch((err) => console.log(err));
  }, [id]);

  

  return (
    <div>
      <HeaderScreen />

      <div >
        <div className="product">
          
          <Slider product={product}/>  
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
