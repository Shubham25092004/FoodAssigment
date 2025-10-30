import React from 'react'
import FoodImg from "../assets/food.png";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";


const FirstNav = () => {
  return (
    <div className=' container-fluid  d-flex'>
         
    <img src={FoodImg} alt='food'className='pe-5' />


    <div className="dropdown my-auto">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    All Categories
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#">Groceries</a></li>
    <li><a className="dropdown-item" href="#">Drink</a></li>
    <li><a className="dropdown-item" href="#">Chocolates</a></li>
  </ul>
</div>

    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <form className="d-flex ms-auto">
          <input
            className="form-control me-2 "style={{width:"330px"}}
            type="search"
            placeholder="Search for more than 20,000 prouducts"
            aria-label="Search"
          />
          
      
        </form>
    

        <ul className='d-flex justify-content-end list-unstyled m-0'>
          <li> 
    </li>

        </ul>
        <IoSearchOutline  size={25}  />

        
        
      </div>
    </nav>
    <div className='px-5'>
    <p>For Support?</p>
   <h5>+980-34984089</h5>

   
   </div>
   <div className="d-flex justify-content-end align-items-center bg-light p-3">
    <FaRegUser size={25} className='me-4' />
    <FaRegHeart size={25} />

   </div>
    <div className="text-end me-4">
          <p className="mb-0 fw-semibold">Your Cart</p>
          <h5 className="mb-0 text-dark">$1290.00</h5>
        </div>

    </div>
  )
}

export default FirstNav
