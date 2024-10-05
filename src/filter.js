import React from 'react';
import ReactDOM from 'react-dom/client';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import Axios from 'axios';
import TextField from '@mui/material/TextField';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Box, Typography, Pagination } from '@mui/material';
import {useNavigate} from 'react-router-dom';

const Filters = () => {

 
  
    // Get the location state
    const location = useLocation();
    const { value } = location.state; // Use default value to prevent undefined error
  
    // Initialize filteredProducts based on value1 or handle the error
   console.log(value)

  return (
   
    <>
    <br />
    <p className='font-bold pl-[45px] text-xl mt-[20px]'> Searched Products </p>
    <br />
   <div>
  {/* Product List */}
  <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
    {value.map(product => (
      <Box 
        key={product.id} 
        sx={{ 
          border: '1px solid #ccc', 
          padding: '10px', 
          width: '300px', 
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'row',
          gap: '10px',
          textAlign: 'left',
          //cursor: 'pointer' // Add hover styling if needed
        }}
      >
        {/* Image Section */}
        <Box 
          sx={{ 
            flex: '1 1 50%', 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
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
            flex: '1 1 50%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <h3 style={{ fontSize: '1rem', margin: '10px 0' }}>{product.title}</h3>
          <p>Price: ${product.price}</p>
          <p>Rating: {product.rating?.rate ?? 'No Rating'} / 5</p> {/* Handle rating absence */}
        </Box>
      </Box>
    ))}
  </Box>


</div>
    </>
  )
}

export default Filters;