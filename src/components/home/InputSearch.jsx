import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaSearch } from 'react-icons/fa'
import './styles/inputSearch.css'

const InputSearch = ({setInputSearchValue}) => {
  
  const { handleSubmit, register, reset } = useForm();

  const submit = (data) => {
    setInputSearchValue(data.searchText);
    reset({searchText: ''})
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="form-home">
      <input className="input-home" placeholder="What are you looking for?" type="text" {...register("searchText")} />
      <button className="btn-input-home"><FaSearch/></button>
    </form>
  );
};

export default InputSearch;
