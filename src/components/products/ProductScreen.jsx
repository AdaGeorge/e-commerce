import React, { useEffect, useState } from "react";
import HeaderScreen from "../shared/HeaderScreen";
import FooterScreen from "../shared/FooterScreen";
import ProductInfo from "./ProductInfo";
import { useParams } from "react-router-dom";
import axios from "axios";
import SimilarProducts from "./SimilarProducts";
import './styles/productScreen.css'
import Slider from "./Slider";
import Loader from "../shared/Loader";



const ProductScreen = () => {
  const [product, setProduct] = useState();
  const [isLoading, setisLoading] = useState(false)

  const { id } = useParams();
  
  useEffect(() => {
    setisLoading(true)
    const URL = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`;
    axios
      .get(URL)
      .then((res) => {
        setProduct(res.data)
        setisLoading(false)
      })
      .catch((err) => console.log(err));
  }, [id]);

  

  return (
    <div>
      <HeaderScreen />

      <div >
        {
          isLoading ?
          <Loader/> :
        <div className="product">
          <Slider product={product}/>
          <ProductInfo product={product} />
        </div>
        }
        <hr />
          <SimilarProducts product={product} />
      </div>

      <FooterScreen />
    </div>
  );
};

export default ProductScreen;
