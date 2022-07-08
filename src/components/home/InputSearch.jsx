import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaSearch } from 'react-icons/fa'
import './styles/inputSearch.css'

const InputSearch = () => {
  const [inputSearchValue, setInputSearchValue] = useState();
  const { handleSubmit, register, reset } = useForm();

  const submit = (data) => {
    setInputSearchValue(data);
    reset('')
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="form-home">
      <input className="input-home" placeholder="What are you looking for?" type="text" {...register("searchText")} />
      <button className="btn-input-home"><FaSearch/></button>
    </form>
  );
};

export default InputSearch;
