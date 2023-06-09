import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllProducts } from '../../actions/productAction'
import webLogo from '../../images/logo-favicon.ico'



const Footer = () => {
  const dispatch = useDispatch()
  const {filteredCategory} = useSelector((state)=> state.products)

  const[category, setCategory] = useState('')



  return (
    <>
{/* #0a1435 */}
{/* #26272b */}
<footer className=" bg-[#0a1435] text-white body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a href='#' className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <img className=" w-auto" src= {webLogo} alt="Company Logo"/>
        <span className="ml-3 text-xl text-white">iElectronixTech</span>
      </a>
      <p className="mt-2 text-sm text-white">Ecommerce, also known as electronic commerce or internet commerce, refers to the buying and selling of goods or services using the internet</p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center ">
      <div className="lg:w-1/4 md:w-1/2 w-full px-8">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3 ">SHOPS</h2>
        <nav className="list-none mb-10">
          
          {/* <li>
            <a href='#' className="text-white hover:text-gray-400 cursor-pointer">Laptop</a>
          </li> */}


          {filteredCategory && filteredCategory.map((categ,index) =>(<li onClick={()=> setCategory(categ)} className='text-white hover:text-gray-400 cursor-pointer' key={index}>{categ}</li>))}


        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-8">
        <h2 className="title-font font-medium tracking-widest text-sm mb-3 text-white">CUSTOMER SERVICE</h2>
        <nav className="list-none mb-10">
          <li>
            <a href={'/contact-us'} className="text-white hover:text-gray-400 cursor-pointer">Contact Us</a>
          </li>
          <li>
            <a href={'/about-us'} className="text-white hover:text-gray-400 cursor-pointer">About Us</a>
          </li>
          <li>
            <a href='#' className="text-white hover:text-gray-400 cursor-pointer">Return Policy</a>
          </li>

        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-8">
        <h2 className="title-font font-medium tracking-widest text-sm mb-3 text-white">POLICY</h2>
        <nav className="list-none mb-10">
          <li>
            <a href='/privacy-policy' className="text-white hover:text-gray-400 cursor-pointer">Privacy Policy</a>
          </li>
          <li>
            <a href='/terms-and-condition' className="text-white hover:text-gray-400 cursor-pointer">Terms and Conditions</a>
          </li>
        </nav>
      </div>
      
      {/* <div className="lg:w-1/4 md:w-1/2 w-full px-8">
        <h2 className="title-font font-medium  tracking-widest text-sm mb-3 text-white">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a href='#' className="text-white hover:text-gray-400 cursor-pointer">First Link</a>
          </li>
          <li>
            <a href='#' className="text-white hover:text-gray-400 cursor-pointer">Second Link</a>
          </li>
          <li>
            <a href='#' className="text-white hover:text-gray-400 cursor-pointer">Third Link</a>
          </li>
          <li>
            <a href='#' className="text-white hover:text-gray-400 cursor-pointer">Fourth Link</a>
          </li>
        </nav>
      </div> */}


    </div>
  </div>
  {/* #112C3E */}
  {/* #0a1435 */}
  <div className=" bg-[#0a1435]">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-white hover:text-gray-400 text-sm text-center sm:text-left">© 2023 iElectronixTech —
        <a href="https://www.linkedin.com/in/umer-memon-4ba251215/" rel="noopener noreferrer" className="text-white hover:text-gray-400 ml-1" target="_blank">All Rights Reserved</a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
<a href='https://www.facebook.com/umer.memon.507' target={'_blank'} className="text-gray-500 hover:text-blue-500 cursor-pointer ">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a href='https://twitter.com/Umer_Memon16' target={'_blank'} className="ml-3 text-gray-500 hover:text-blue-500 cursor-pointer">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a href='https://www.linkedin.com/in/m-umer-memon/' target={'_blank'} className="ml-3 text-gray-500 hover:text-pink-700 cursor-pointer">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a href='https://www.linkedin.com/in/m-umer-memon/' target={'_blank'} className="ml-3 text-gray-500 hover:text-blue-500 cursor-pointer">
          <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>


    </>
  )
}

export default Footer
