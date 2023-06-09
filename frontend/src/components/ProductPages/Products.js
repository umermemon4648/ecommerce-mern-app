import React, {useEffect, useState} from 'react'
import {getAllProducts, clearErrors} from '../../actions/productAction'
import { useSelector, useDispatch } from 'react-redux'
import ReactStars from "react-rating-stars-component";
import "../../Style/ProductCard.css";
import Loader from '../../layout/Loader';
import {useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import ProductCard from './ProductCard';
import SearchBar from '../Filter/SearchBar';
import ReactPaginate from 'react-paginate';
import '../../Style/Products.css'
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
const Products = () => {
  // let categories = [
  //   "Laptop",
  //   "Ear pods",
  //   "Mouse",
  //   "Bags",
  //   "Shoes",
  //   "T-Shirts",
  // ]
  
  let {keyword} = useParams()
    const dispatch = useDispatch()
    const {loading, products, productCount, error, resultPerPage,filteredProducts, filteredCategory} = useSelector((state)=> state.products)
    const[currentPage, setCurrentPage] = useState(0)
    const[price, setPrice] = useState([0,25000])
    const[category, setCategory] = useState('')
    const[rating, setRating] = useState("0")
    const[clearfilters, setClearfilters] = useState("")
    
    
    // const[filterCategory, setFilterCategory] = useState([])
    // let categoryArray = []
    // const handleFilteredCategories = (categoryArray)=>{
    //   let filteredData = products?.filter((element)=>
    //   !categoryArray.includes(element.category) ? categoryArray.unshift(element.category) : ""
    // ).map((elem) => elem.category);
    // setFilterCategory(filteredData)
    // console.log("Category State: ",filterCategory)
    // console.log("filter Category: ",filteredData)
    // return filteredData;
    // }



    // const [filterCategory, setFilterCategory] = useState([]);

    // const handleFilteredCategories = () => {
    //   let categoryArray = [];
    //   let filteredData = products
    //     ?.filter((element) =>
    //       !categoryArray.includes(element.category)
    //         ? categoryArray.unshift(element.category)
    //         : ""
    //     )
    //     .map((elem) => elem.category);
    //   setFilterCategory(filteredData);
    //   console.log("Category State: ", filterCategory);
    //   console.log("filter Category: ", filteredData);
    //   return filteredData;
    // };
    

    const handlePageClick = (event) =>{
      const newOffset = event.selected+1;
      alert(`User requested page number ${event.selected}, which is offset ${newOffset}`);
      setCurrentPage(newOffset)
    }
    const prizeHandler = (event, newPrice) =>{
      setPrice(newPrice)
    }
    const ratingsHandler = (event, newRating)=>{
      setRating(newRating)
    }

    const clearAllfilters = ()=>{
      setPrice([0,25000])
      setRating(0)
      setCategory('')
    }

    useEffect(() => {
      if (error) {
        toast.error(error)
        dispatch(clearErrors())
      }
        dispatch(getAllProducts(keyword, currentPage,price, category, rating))

        console.log("products Page: ",products)
      //   handleFilteredCategories()
      //  console.log("Fitlered State: ",filterCategory)  
      },[dispatch, keyword,currentPage,price,category, rating, error]);

  let count = filteredProducts
  return (
    <>
      {loading ? <Loader/>:     
      
        <>

        {/* outer div */}
<Typography variant='h3' className='text-center pt-4 text-gray-600' >Products</Typography>

        {/* <div className="outer "> */}
        {/* search-row */}
        

<div className="two-colums-div flex md:flex-row flex-col py-12">


<div className="filters-div md:w-1/5 md:mx-4 mx-auto flex-col w-[70%]">

<div className="search-row border-2 h-auto p-7">

<div className="search-bar mb-4">
  < SearchBar />
</div>

{/* <div className="grid-icons">
  <BsFillGridFill/>
  <VscListFlat/>
</div> */}

{/* <div className="total-products">
<span>5 products</span>
</div> */}

{/* </div> */}

    <div className="head-main flex items-center justify-between pb-4 border-b-2 border-gray-400">
    <Typography variant='h6' >Filters</Typography >
    <button onClick={clearAllfilters} className='filter-button  text-white w-28 md:w-36 md:ml-6 px-1 py-1 md:px-2 md:py-2 bg-blue-800 hover:bg-blue-700  rounded-md' type="reset">Clear Filters</button>
    </div>

        <div className="category pb-2 ">
          <Typography variant='h6' >Category</Typography>
          <ul>

          {filteredCategory && filteredCategory.map((categ,index) =>(<li onClick={()=> setCategory(categ)} className='links cursor-pointer focus:border-b-2 focus:border-indigo-500 text-gray-500 hover:text-black  text-lg' key={index}>{categ}</li>))}
          
         



          </ul>
        </div>

        <div className="prize w-full my-4">
        <Typography variant='h6' >Price</Typography>
        {/* <div className="slice flex flex-row"> */}

        <p className='text-center -mb-2'>{price[0]} - {price[1]}</p>
        <Slider
  getAriaLabel={() => 'Temperature range'}
  value={price}
  onChange={prizeHandler}
  valueLabelDisplay="auto"
  // aria-labelledby='range-slider'
  aria-labelledby='continuous-slider'
  min = {0}
  max = {25000}
  size={"large"}
  step={1000}
  marks
/>
  {/* </div> */}

 </div>

<div className="ratings-product w-2/3 ">
<Typography variant='h6' >Above Ratings</Typography>
<Slider 
// aria-label="Volume" value={rating} onChange={ratingsHandler} 
value={rating}
onChange={ratingsHandler}
valueLabelDisplay="auto"
// aria-labelledby='range-slider'
aria-labelledby='continuous-slider'
min = {0}
max = {5}
step={1}
// marks
/>
</div>



</div>
</div>
{/* filters-div */}


<div className="product-div flex flex-col md:w-4/5 w-full">
<section className="text-gray-600 body-font">
        <div className="container py-4 mx-auto">
          <div className="flex md:items-center justify-center items-start  flex-wrap -mx-8">
{products && products.map((elem) => (
   <ProductCard prod = {elem} key = {elem._id}/>
))}
  </div>
        </div>
      </section>
 </div>

</div>






{/* outer div close */}
 {/* </div> */}

{resultPerPage<count && <div className="pagination flex flex-row">
<ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        containerClassName = {"page-container"}
        // pageClassName = {"page-links"}
        pageLinkClassName = {"page-links"}
        onPageActive = {setCurrentPage}
        onPageChange={handlePageClick}
        pageRangeDisplayed={productCount}
        // prevRel = {setCurrentPage-1}
        // nextRel = {setCurrentPage+1}
        // pageCount={Math.round(productCount/resultPerPage)}
        pageCount={Math.round((productCount/resultPerPage))}
        previousLabel="Previous"
        // activeClassName = {"active-class"}
        // activeLinkClassName = {"active-class-link"}
        previousClassName = {"prev-class1"}
        nextClassName = {"nxt-class1"}
        nextLinkClassName = {"nxt-class"}
        // previousLinkClassName = {"prev-class"}
        // disabledClassName = {"d"}
        // disabledLinkClassName = {"d"}
      />
</div>}



        </>
      }

      
   </>

  )}

export default Products
