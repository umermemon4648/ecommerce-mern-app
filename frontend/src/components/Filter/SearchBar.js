import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { BiSearchAlt2 } from "react-icons/bi";
import './SearchBar.css'
const SearchBar = () => {
  let navigate = useNavigate()
  const [keyword, setKeyword] = useState("")
  // const [clearSeacrh, setclearSeacrh] = useState("")
  // setKeyword(clearAllfilters)
  // if (clearAllfilters) {
  //   setKeyword("")
  // }
  const searchHandler = (e) =>{
    e.preventDefault()
    if(keyword.trim()){
      navigate(`/product/getproducts/${keyword}`)
    }
    else{
      navigate(`/product/getproducts`)
    }
    
  }
  return (
    <>
    <form onSubmit={searchHandler}>
      <input value={keyword} id='s-bar' onChange={(e)=> setKeyword(e.target.value)} type="search" placeholder='Search a product'/>

    </form>
    </>
  )
}

export default SearchBar
