import React from 'react'
import ProductCategory from './ProductCategory'
import HoneyCard from './HoneyCard'
import { Honey } from '../data/Honey.js'





const Navbar = ({ Data }) => {
  const categories = ["Women", "Men", "Kids", "Accessories", "Pages", "Brand", "Sale", "Blog"];

  return (
    <div className='container-fluid'>
      
      {/* Navbar */}
      <div className='d-flex mt-3'>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Shop by Departments
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a className="dropdown-item" href="#">Groceries</a></li>
            <li><a className="dropdown-item" href="#">Drinks</a></li>
            <li><a className="dropdown-item" href="#">Chocolates</a></li>
          </ul>
        </div>

        <ul className="d-flex ms-4" style={{ listStyle: "none", gap: "20px" }}>
          {categories.map((category, index) => (
            <li key={index}>
              <a href="#" style={{ textDecoration: "none", color: "black", fontWeight: "500" }}>
                {category}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Product Category Section */}
      <div className='container mt-4'>
        <div className='row'>
          {Data && Data.map((item) => (
            <div className='col-6 col-md-3' key={item.id}>
              <ProductCategory data={item}/>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Honey Section */}
      <div className="container mt-5">
        <h4 className="fw-bold mb-4">Honey Collection</h4>
        <div className="row g-4">
          {Honey.map((item) => (
            <div className="col-6 col-md-3" key={item.id}>
              <HoneyCard item={item} /> 
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Navbar



