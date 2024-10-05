import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState, useEffect } from "react";
import Axios from 'axios';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Pagination from '@mui/material/Pagination';
import {useNavigate} from 'react-router-dom';
import Link from '@mui/material/Link';
import Catagory from './catagory';

const Home = () => {

    const navigate = useNavigate();


    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const itemsPerPage = 10; // 10 items per page
  
    // Fetch products from API
    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);
  
    // Handle page change
    const handlePageChange = (event, value) => {
      setPage(value);
    };
  
    // Calculate the products to display on the current page
    const paginatedProducts = products.slice((page - 1) * itemsPerPage, page * itemsPerPage);
  
  //const categories = ['All', 'Electronics', 'Jewelery', 'Men\'s Clothing', 'Women\'s Clothing']; 
  const categories = ['Electronics', 'Jewelery', 'Men\'s Clothing', 'Women\'s Clothing'];
  const [category, setCategory] = React.useState('');
  
  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  
  
    const filterCatagory = products.filter(product1 => {
        if(category && product1.category){
            return product1.category.toLowerCase() == category.toLowerCase();
        }
        
      } );
      if(filterCatagory.length > 0){
        navigate('/catagory', {state: {value1:filterCatagory, category:category}});
      }
    //  console.log(filterCatagory);
     
  
  

  const [search,setSearch]=React.useState('');
  const handleSearchChange = (e) =>{
    
    setSearch(e.target.value);
    
  }
  
  
  
  const handleSearchSubmit = (e) =>{
    e.preventDefault();
    const filterSearch = products.filter( product => {
        return product.category.toLowerCase().includes(search.toLowerCase()) ||
               product.title.toLowerCase().includes(search.toLowerCase()); });
  navigate('/searchItem', {state: {value:filterSearch}});
 // console.log(filterSearch);
   
  }
 
  const productDetails = (product) =>{
    navigate('/ProductDetails', {state: {productDetails: product}})
  //  console.log(product);
  }
   
  

  return (
    

    <>
    <br />
    <p className='font-bold pl-[45px] text-xl'> Product Dashboard </p>
    <br />

    
    <Box 
      sx={{ 
        display: 'flex',    // Flexbox layout
        alignItems: 'center', // Vertically align items in the center
        gap: '10px',         // Space between the elements
      }}
    >
      {/* Search TextField */}
      <form className='max-w-80 ml-[45px]' onSubmit={handleSearchSubmit}>
      <TextField 
        id="outlined-basic" 
        label="Search" 
        variant="outlined" 
        
        value={search}
        onChange={handleSearchChange}
      />
      </form>

      {/* Category Select Dropdown */}
      <Box sx={{ minWidth: 300 }}>
        
        <FormControl fullWidth>
          <InputLabel id="category-select-label">Category</InputLabel>
          <Select
            labelId="category-select-label"
            id="category-select"
            value={category}
            label="Category"
            onChange={handleChange}
          >
            {categories.map((cat, index) => (
               <MenuItem key={index} value={cat}>{cat}</MenuItem> 
            ))}
          </Select>
        </FormControl>
       
      </Box>
    </Box>
    <br />

    <div>
           {/* Product List */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {paginatedProducts.map(product => (
          <Box 
            key={product.id} 
            sx={{ 
              border: '1px solid #ccc', 
              padding: '10px', 
              width: '300px', 
              borderRadius: '8px',
              display: 'flex', // Use flexbox
              flexDirection: 'row', // Row direction
              gap: '10px', // Space between image and text
              textAlign: 'left'
            }}
            className='cursor-pointer'
            onClick={() => productDetails(product)} 
          >
            {/* Image Section */}
            <Box 
              sx={{ 
                flex: '1 1 50%', // Flex-grow, flex-shrink, flex-basis
                display: 'flex',
                justifyContent: 'center', // Center image horizontally
                alignItems: 'center', // Center image vertically
              }}
            >
              <img 
                src={product.image} 
                alt={product.title} 
                style={{ width: '100%', height: 'auto', borderRadius: '4px' }} 
              />
            </Box>

            {/* Information Section */}
            <Box 
              sx={{ 
                flex: '1 1 50%', // Flex-grow, flex-shrink, flex-basis
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <h3 style={{ fontSize: '1rem', margin: '10px 0' }}>{product.title}</h3>
              <p>Price: ${product.price}</p>
              <p>Rating: {product.rating.rate} / 5</p> {/* Assuming the rating structure */}
            </Box>
          </Box>
          
        ))}
      </Box>

      {/* Pagination */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Pagination
          count={Math.ceil(products.length / itemsPerPage)} // Total pages
          page={page} // Current page
          onChange={handlePageChange} // Handle page change
          variant="outlined"
          color="primary"
        />
      </Box>
    </div>
    <br />
    </>


  )
}

export default Home;