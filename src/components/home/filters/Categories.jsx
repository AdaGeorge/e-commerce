import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles/filters.css";

const Categories = ({inputSearchValue, setInputSearchValue}) => {
    //Categories state
  const [categories, setCategories] = useState();

  //Calling all categories
  const getAllCategories = () => {
    const URL = "https://e-commerce-api-v2.academlo.tech/api/v1/categories";
    return axios
      .get(URL)
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  };

   //Calling all categories when component is born
  useEffect(() => {
    getAllCategories();
  }, []);

  // Setting search state function
  const handleSelect=(data)=>{
    setInputSearchValue({
        ...inputSearchValue,
        categoryId: data
      });
  }

  return (
    <div className="select_container">
      <select 
      className="select_category" 
      name="categories" 
      onChange={(e)=>handleSelect(e.target.value)}
      >
        <option value={''}>all categories</option>
        {categories?.map((category) => (
          <option key={category.id} value={category.id}>{category.name}</option>
        ))}
      </select>
      <i></i>
    </div>
  );
};

export default Categories;
