import React from "react";
import { useForm } from "react-hook-form";
import { FaSearch } from 'react-icons/fa'
import './styles/filters.css'

const InputSearch = ({inputSearchValue, setInputSearchValue}) => {
  
  //react hook form functions
  const { handleSubmit, register, reset } = useForm();

  // Setting search state function and cleaning input
  const submit = (data) => {
    setInputSearchValue({
      ...inputSearchValue,
      title: data.searchText
    });
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="form-home">
      <input className="input-home" placeholder="What are you looking for?" type="text" {...register("searchText")} />
      <button className="btn-input-home"><FaSearch/></button>
    </form>
  );
};

export default InputSearch;
